//will control the gradiants
// will make it randomly generated, this might be good to be on a timer, not clicks

import P5Lib from 'p5';
export default class gradiants {
  //p5
  private p5: P5Lib;
  private current: number = 0; //current gradiant Index
  private lastSwitch: number = 0; //  when the gradiant  switched las
  private switchInterval: number = 5000; // Interval for switching gradients (ms)
  public colors: { color1: P5Lib.Color, color2: P5Lib.Color }[] = [];

  //contructor
  constructor(p5: P5Lib) {
    //setting p5 const
    this.p5 = p5;
    console.log('Gradiant initialized');

  }

  createColors(index: number) {
    for (let x = 0; x < index; x++) {
      const color1 = this.p5.color(this.p5.random(0, 200), this.p5.random(0, 20), this.p5.random(0, 200));
      const color2 = this.p5.color(this.p5.random(0, 200), this.p5.random(100, 200), this.p5.random(0, 200));
      this.colors.push({ color1, color2 })
    }

  }
  //switch the gradiant
  private switch(): void {
    const currentTime = this.p5.millis();
    if (currentTime - this.lastSwitch >= this.switchInterval) {
      this.current = (this.current + 1) % this.colors.length; // Cycle to the next gradient
      this.lastSwitch = currentTime;
    }
  }

  //rendor for gradient colors, i need to figure out how to cycle between the colors in the array
  render() {

    //call gradiant switch
    this.switch();
    // pull out the colors again
    const { color1, color2 } = this.colors[this.current];




    for (let y = 0; y < this.p5.height; y++) {
      const inter = this.p5.map(y, 0, this.p5.height, 0, 1);
      //blend both colors based off height
      const c = this.p5.lerpColor(color1, color2, inter);
      this.p5.stroke(c);
      this.p5.line(0, y, this.p5.width, y);

    }


  }






}