//import { colorfulBirds } from "./bird";
import { body } from "./birdBody";
import P5Lib from 'p5';

export class wing extends body {
    //p5
    //i need to set the veticies here
    birdBody: body;
    //initialize trianle object with all verticies and colors
    public wings: {
        x1: number;
        y1: number;
        x2: number;
        y2: number;
        x3: number;
        y3: number;
        fillColor: P5Lib.Color;
    }[] = [];


    //contructor
    constructor(p5: P5Lib, birdBody: body) {

        super(p5);
        //this.birdBody = birdBody;
        this.p5 = p5;
        this.birdBody = birdBody; // Initialize birdBody

        console.log('wings initialized');
    }

    override draw(): void {
        super.draw()
        this.p5.noStroke();
        this.wings.forEach((wing1) => {
            
            this.p5.fill(wing1.fillColor);
            this.p5.triangle(
                wing1.x1, wing1.y1,
                wing1.x2, wing1.y2,
                wing1.x3, wing1.y3
            );
        });

    }

    private calculateVertices3(x: number, y: number): { x1: number; y1: number; x2: number; y2: number; x3: number; y3: number } {
        return {
            //top vertex
            x1: x + 6,
            y1: y + 6,
            //bottom left
            x2: x + 20,
            y2: y + 6,
            //bottom right
            x3: x + 9.5,
            y3: y + 12
        };
    }

    override setColors(): { fillColor: P5Lib.Color } {
        return {
            //create fill color
            fillColor: this.p5.color(
                this.p5.random(0, 255),
                this.p5.random(0, 255),
                this.p5.random(0, 255),
                150
            )
            //create stroke color
        
        };
    }

    override AddTriangle(): void {
        if (this.birdBody.lastX1 === null || this.birdBody.lastY1 === null) {
            console.error("Error: lastX1 or lastY1 is null, cannot add triangle.");
            return;
        }

        const x = this.birdBody.lastX1;
        const y = this.birdBody.lastY1;

        const { x1, y1, x2, y2, x3, y3 } = this.calculateVertices3(x, y);
        const { fillColor } = this.setColors();

        this.wings.push({ x1, y1, x2, y2, x3, y3, fillColor});
        this.lastX1 = x1;
        this.lastY1 = y1;

        console.log(`Triangle added with vertices: (${x1}, ${y1}), (${x2}, ${y2}), (${x3}, ${y3})`);
    }
    updatePosition(x: number, y: number): void {
    this.wings = this.wings.map((wing) => {
        const { x1, y1, x2, y2, x3, y3 } = this.calculateVertices3(x, y);
        return {
            ...wing,
            x1,
            y1,
            x2,
            y2,
            x3,
            y3
        };
    });
    console.log(`Updated wing positions to (${x}, ${y})`);
}


}




