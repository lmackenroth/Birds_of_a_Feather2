//will control the gradiants
// will make it randomly generated, this might be good to be on a timer, not clicks

import P5Lib from 'p5';
export default class gradiants {
  //p5
  private p5: P5Lib;
  private current: number = 0; //current gradiant Index
  private lastSwitch: number = 0; //  when the gradiant  switched las
  private switchInterval: number = 10000; // Interval for switching gradients (ms), how long each gradiant stays up
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
      const color1 = this.p5.color(this.p5.random(0, 125), this.p5.random(0, 20), this.p5.random(0, 125));
      const color2 = this.p5.color(this.p5.random(126, 250), this.p5.random(126, 250), this.p5.random(126, 250));
      this.colors.push({ color1, color2 })
    }

  }

  
  private cyclePRog(): number {
    //get current time
    const currentTime = this.p5.millis();
    //time between now and the last time a gradiant switched out
    const timeFrame = currentTime - this.lastSwitch;
    //time one gradiant is up + time it takes to switch
    const cycleDuration = this.switchInterval + this.transition;

    //constrains the amount of time since last switch/ how long it takes to transition
    return timeFrame / cycleDuration;
  }
  private transitionProg(): number {
    //get current time
    const currentTime = this.p5.millis();
    //time between now and the last time a gradiant switched out
    const timeFrame = currentTime - this.lastSwitch;
    //checking if current gradiant is still holding
    if(timeFrame < 0){
      return 0;
    }
    //constrains the amount of time since last switch/ how long it takes to transition
    return this.p5.constrain(timeFrame / this.transition, 0, 1);

  }
  //switch the gradiant
  private switch(): void {
    const cycle = this.cyclePRog();

    if (cycle >= 1) {
      this.current = (this.current + 1) % this.colors.length; // Cycle to the next gradient
      this.lastSwitch = this.p5.millis();
    }
  }

  //rendor for gradient colors, i need to figure out how to cycle between the colors in the array
  render() {

    if (this.colors.length === 0) return;

    const progress = this.transitionProg();
    const nextIndex = (this.current + 1) % this.colors.length;
    this.switch();

    // pull out the colors from current gradiant
    const { color1: currColor1, color2: currColor2 } = this.colors[this.current];
    //pull colors from next gradient
    const { color1: nextColor1, color2: nextColor2 } = this.colors[nextIndex];


    for (let y = 0; y < this.p5.height; y++) {
      const inter = this.p5.map(y, 0, this.p5.height, 0, 1);
      const blend1 = this.p5.lerpColor(currColor1, nextColor1, progress);
      const blend2 = this.p5.lerpColor(currColor2, nextColor2, progress);

      const c = this.p5.lerpColor(blend1, blend2, inter);
      //blend both colors based off height
      this.p5.stroke(c);
      this.p5.line(0, y, this.p5.width, y);

    }
    //call gradiant switch


  }






}