import { Engine, FreeCamera, HemisphericLight, Light, MeshBuilder,
         Scene, Vector3 } from "babylonjs";


export class Game {
    private _canvas: HTMLCanvasElement;
    private _engine: Engine;
    private _scene: Scene;
    private _camera: FreeCamera;
    private _light: Light;

    constructor(canvasElementID: string) {
        // Create canvas and engine
        const element = document.getElementById(canvasElementID);
        this._canvas = element as HTMLCanvasElement;
        this._engine = new Engine(this._canvas, true);
    }

    createScene(): void {
        // create a basic BJS Scene object
        this._scene = new Scene(this._engine);

        // create a FreeCamera, and set its position to (x:0, y:5, z:-10)
        this._camera = new FreeCamera("camera1",
                                      new Vector3(0, 5, -10),
                                      this._scene);

        // target the camera to scene origin
        this._camera.setTarget(Vector3.Zero());

        // attach the camera to the canvas
        this._camera.attachControl(this._canvas, false);

        // create a basic light, aiming 0,1,0 - meaning, to the sky
        this._light = new HemisphericLight("light1",
                                           new Vector3(0, 1, 0),
                                           this._scene);

        // create a built-in "sphere" shape; with 16 segments and diameter of 2
        const sphere = MeshBuilder.CreateSphere("sphere1",
                                                {segments: 16, diameter: 2},
                                                this._scene);

        // move the sphere upward 1/2 of its height
        sphere.position.y = 1;

        // create a built-in "ground" shape
        const ground = MeshBuilder.CreateGround(
            "ground1",
            {width: 6, height: 6, subdivisions: 2},
            this._scene
        );
    }

    doRender(): void {
        // run the render loop
        this._engine.runRenderLoop(() => {
            this._scene.render();
        });

        // the canvas/window resize event handler
        window.addEventListener("resize", () => {
            this._engine.resize();
        });
    }
}
