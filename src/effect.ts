import { Symbol } from "./symbol";

export class Effect {
    fontSize: number;
    canvasWidth: any;
    canvasHeight: any;
    columns: number;
    symbols: Symbol[];
    constructor(canvasWidth: any, canvasHeight: any) {
      this.fontSize = 16;
      this.canvasWidth = canvasWidth;
      this.canvasHeight = canvasHeight;
      this.columns = this.canvasWidth / this.fontSize;
      this.symbols = [];
      this.initialize();
    }
    initialize() {
      for (let i = 0; i < this.columns; i++) {
        this.symbols[i] = new Symbol(i, 0, this.fontSize, this.canvasHeight);
      }
    }
    resize(width: any, height: any) {
      this.canvasWidth = width;
      this.canvasHeight = height;
      this.columns = this.canvasWidth / this.fontSize;
      this.symbols = [];
      this.initialize();
    }
  }

  