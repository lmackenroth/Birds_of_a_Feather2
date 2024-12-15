//import { colorfulBirds } from "./bird";
import { body } from "./birdBody";
import P5Lib from 'p5';


export class head extends body {
 

    public circles: { x: number; y: number; fillColor: P5Lib.Color }[] = [];



    constructor(p5: P5Lib) {

        super(p5);
        this.p5 = p5;
        console.log('triangles initialized');
    }

    override draw(): void {
        super.draw()
        //drawing the cirle
        this.p5.noStroke();
        this.circles.forEach((circle) => {
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
            150
        );
        //create stroke color
     
        //set circle
        this.circles.push({ x: xCircle, y: yCircle, fillColor });
        console.log(`Circle added at (${xCircle}, ${yCircle})`);
    }
    updatePosition(x: number, y: number): void {
        this.circles = this.circles.map((circle) => ({
            ...circle,
            x: x, // New position x
            y: y  // New position y
        }));
        console.log(`Updated circle positions to (${x}, ${y})`);
    }

}




