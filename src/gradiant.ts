//will control the gradiants
// will make it randomly generated, this might be good to be on a timer, not clicks

import P5Lib from 'p5';
export default class gradiants{
    //p5
    private p5: P5Lib;

    //contructor
    constructor(p5: P5Lib) {
        //setting p5 const
        this.p5 = p5;
        console.log('Gradiant initialized');
      }

    //rendor for gradient colors
    render() {
        //setting p5 const
        const p5 = this.p5;
        //const r = p5.random(255); // r is a random number between 0 - 255
        //const g = p5.random(100,200); // g is a random number betwen 100 - 200
        //const b = p5.random(100); // b is a random number between 0 - 100
        //maybe there's a way to make it more choppy 
        for (let y = 0; y < p5.height; y++) {
          const inter = p5.map(y, 0, p5.height, 0, 1);
          //I need to make a timer or something this currently makes a stobe light lol
          //const c = p5.lerpColor(p5.color(r, g, b), p5.color(r, g, b), inter); 
          const c = p5.lerpColor(p5.color(50, 30, 200), p5.color(100, 50, 10), inter); 
          p5.stroke(c);
          p5.line(0, y, p5.width, y);
        }
      }
    





}