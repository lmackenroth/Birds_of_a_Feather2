//import { colorfulBirds } from "./bird";
import { body } from "./birdBody";
import P5Lib from 'p5';


export class head extends body {
    //p5
    //i need to set the veticies here
    //birdBody: body;

    public circles: { x: number; y: number; strokeColor: P5Lib.Color; fillColor: P5Lib.Color }[] = [];



    /*public circles = { strokeColor: P5Lib.Color,
        fillColor: P5Lib.Color
      }[] = [];*/



    //contructor
    constructor(p5: P5Lib) {

        super(p5);
        this.p5 = p5;
        console.log('triangles initialized');
    }

    override draw(): void {
        super.draw()
        //drawing the cirle
        this.circles.forEach((circle) => {
            this.p5.stroke(circle.strokeColor);
            this.p5.fill(circle.fillColor);
            //create the circles!
            this.p5.circle(
                circle.x, circle.y, 5);
        });

    }


    AddCircle(x: number, y: number): void {
        //initialize x and y
        const xCircle = x;
        const yCircle = y;
        //create fill color
        //might use the same color as body, so maybe call in the parent class set color method
        const fillColor = this.p5.color(
            this.p5.random(0, 255),
            this.p5.random(0, 255),
            this.p5.random(0, 255),
            200
        );
        //create stroke color
        const strokeColor = this.p5.color(
            this.p5.random(0, 255),
            this.p5.random(0, 255),
            this.p5.random(0, 255),
            120
        );
        //set circle
        this.circles.push({ x: xCircle, y: yCircle, fillColor, strokeColor });
        console.log(`Circle added at (${xCircle}, ${yCircle})`);
    }
    

}




