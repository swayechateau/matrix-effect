"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Matrix = void 0;
const Effect_1 = require("./effect");
class Matrix {
    last = 0;
    fps = 26;
    timer = 0;
    canvas;
    ctx;
    effect;
    nextFrame;
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.effect = new Effect_1.Effect(this.canvas.width, this.canvas.height);
        this.nextFrame = 1000 / this.fps;
        this.timer = 0;
    }
    width(w) {
        this.canvas.width = w;
    }
    height(h) {
        this.canvas.height = h;
    }
    resize() {
        this.effect.resize(this.canvas.width, this.canvas.height);
    }
}
exports.Matrix = Matrix;
