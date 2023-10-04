export class Symbol {
  characters: string;
  x: number;
  y: number;
  fontSize: any;
  text: string;
  canvasHeight: any;
  constructor(x: number, y: number, fontSize: any, canvasHeight: any) {
    this.characters =
      "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.x = x;
    this.y = y;
    this.fontSize = fontSize;
    this.text = "A";
    this.canvasHeight = canvasHeight;
    //this.color = 'hsl(' + this.x * 3+ ', 100%, 50%)';
  }
  draw(context: { fillText: (arg0: any, arg1: number, arg2: number) => void }) {
    //context.font = this.fontSize + 'px monospace';
    this.text = this.characters.charAt(
      Math.floor(Math.random() * this.characters.length)
    );
    //context.fillStyle = this.color;
    context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);
    if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.97) {
      this.y = 0;
    } else {
      this.y += 0.9;
    }
  }
}
