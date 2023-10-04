"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Effect = void 0;
const Symbol_1 = require("./symbol");
class Effect {
    fontSize;
    canvasWidth;
    canvasHeight;
    columns;
    symbols;
    constructor(canvasWidth, canvasHeight) {
        this.fontSize = 16;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.columns = this.canvasWidth / this.fontSize;
        this.symbols = [];
        this.initialize();
    }
    initialize() {
        for (let i = 0; i < this.columns; i++) {
            this.symbols[i] = new Symbol_1.Symbol(i, 0, this.fontSize, this.canvasHeight);
        }
    }
    resize(width, height) {
        this.canvasWidth = width;
        this.canvasHeight = height;
        this.columns = this.canvasWidth / this.fontSize;
        this.symbols = [];
        this.initialize();
    }
}
exports.Effect = Effect;
