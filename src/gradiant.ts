//will control the gradiants
// will make it randomly generated, this might be good to be on a timer, not clicks

import P5Lib from 'p5';
export default class gradiants {
  //p5
  private p5: P5Lib;
  private current: number = 0; //current gradiant Index
  private lastSwitch: number = 0; //  when the gradiant  switched las
  private switchInterval: number = 50000; // Interval for switching gradients (ms), how long each gradiant stays up
  private transition: number = 2000; // Duration of the gradient transition, tracking how long to wait before it starts to transition

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

  //be able to call next color via index

  private getNextIndex(): number {
    //next index modulus length of color array
    return (this.current + 1) % this.colors.length;
  }

  private transitionProg(): number {
    //get current time
    const currentTime = this.p5.millis();
    //time between now and the last time a gradiant switched out
    const timeFrame = currentTime - this.lastSwitch;
    //constrains the amount of time since last switch/ how long it takes to transition
    return this.p5.constrain(timeFrame / this.transition, 0, 1);

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

    const progress = this.transitionProg();
    const nextIndex = this.getNextIndex();


    // pull out the colors from current gradiant
    const { color1: currColor1, color2: currColor2 } = this.colors[this.current];
    //pull colors from next gradient
    const { color1: nextColor1, color2: nextColor2 } = this.colors[nextIndex];




    for (let y = 0; y < this.p5.height; y++) {
      const inter = this.p5.map(y, 0, this.p5.height, 0, 1);
      const blend1 = this.p5.lerpColor(currColor1, currColor2, progress);
      const blend2 = this.p5.lerpColor(nextColor1, nextColor2, progress);

      const c = this.p5.lerpColor(blend1, blend2, inter);
      //blend both colors based off height
      this.p5.stroke(c);
      this.p5.line(0, y, this.p5.width, y);

    }
    //call gradiant switch

    if (progress >= 1) {
      this.switch();
    }


  }






}