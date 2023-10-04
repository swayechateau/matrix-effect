"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Symbol = void 0;
class Symbol {
    characters;
    x;
    y;
    fontSize;
    text;
    canvasHeight;
    constructor(x, y, fontSize, canvasHeight) {
        this.characters =
            "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.x = x;
        this.y = y;
        this.fontSize = fontSize;
        this.text = "A";
        this.canvasHeight = canvasHeight;
        //this.color = 'hsl(' + this.x * 3+ ', 100%, 50%)';
    }
    draw(context) {
        //context.font = this.fontSize + 'px monospace';
        this.text = this.characters.charAt(Math.floor(Math.random() * this.characters.length));
        //context.fillStyle = this.color;
        context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);
        if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.97) {
            this.y = 0;
        }
        else {
            this.y += 0.9;
        }
    }
}
exports.Symbol = Symbol;
