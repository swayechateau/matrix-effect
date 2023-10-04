import { Effect } from "./effect";

export class Matrix {
  last = 0;
  fps = 26;
  timer = 0;
  canvas: HTMLCanvasElement;
  ctx: any;
  effect: Effect;
  nextFrame: number;
  constructor(canvas: any) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.effect = new Effect(this.canvas.width, this.canvas.height);
    this.nextFrame = 1000 / this.fps;
    this.timer = 0;
  }
  width(w: number) {
    this.canvas.width = w;
  }
  height(h: number) {
    this.canvas.height = h;
  }
  resize() {
    this.effect.resize(this.canvas.width, this.canvas.height);
  }
}
