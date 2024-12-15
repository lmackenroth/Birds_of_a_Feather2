//import { colorfulBirds } from "./bird";
import { body } from "./birdBody";
import P5Lib from 'p5';

export class beak extends body {
    //p5
    //i need to set the veticies here
    birdBody: body;
    //initialize trianle object with all verticies and colors
    public beaks: {
        x1: number;
        y1: number;
        x2: number;
        y2: number;
        x3: number;
        y3: number;
        strokeColor: P5Lib.Color;
        fillColor: P5Lib.Color;
    }[] = [];


    //contructor
    constructor(p5: P5Lib, birdBody: body) {

        super(p5);
        //this.birdBody = birdBody;
        this.p5 = p5;
        this.birdBody = birdBody; // Initialize birdBody

        console.log('beaks initialized');
    }

    override draw(): void {
        super.draw()
        this.beaks.forEach((beak1) => {
            this.p5.stroke(beak1.strokeColor);
            this.p5.fill(beak1.fillColor);
            this.p5.triangle(
                beak1.x1, beak1.y1,
                beak1.x2, beak1.y2,
                beak1.x3, beak1.y3
            );
        });

    }
    beakTri(): void {


    }
    private calculateVertices2(x: number, y: number): { x1: number; y1: number; x2: number; y2: number; x3: number; y3: number } {
        return {
            //top vertex
            x1: x - 3,
            y1: y + 1,
            //bottom left
            x2: x - 3,
            y2: y - 1,
            //bottom right
            x3: x - 6,
            y3: y
        };
    }

    override setColors(): { fillColor: P5Lib.Color; strokeColor: P5Lib.Color } {
        return {
            //create fill color
            fillColor: this.p5.color(
                this.p5.random(0, 255),
                this.p5.random(0, 255),
                this.p5.random(0, 255),
                200
            ),
            //create stroke color
            strokeColor: this.p5.color(
                this.p5.random(0, 255),
                this.p5.random(0, 255),
                this.p5.random(0, 255),
                120
            )
        };
    }

    override AddTriangle(): void {
        if (this.birdBody.lastX1 === null || this.birdBody.lastY1 === null) {
            console.error("Error: lastX1 or lastY1 is null, cannot add triangle.");
            return;
        }

        const x = this.birdBody.lastX1;
        const y = this.birdBody.lastY1;

        const { x1, y1, x2, y2, x3, y3 } = this.calculateVertices2(x, y);
        const { fillColor, strokeColor } = this.setColors();

        this.beaks.push({ x1, y1, x2, y2, x3, y3, fillColor, strokeColor });
        this.lastX1 = x1;
        this.lastY1 = y1;

        console.log(`Triangle added with vertices: (${x1}, ${y1}), (${x2}, ${y2}), (${x3}, ${y3})`);
    }
    updatePosition(x: number, y: number): void {
        this.beaks = this.beaks.map((beak) => {
            const { x1, y1, x2, y2, x3, y3 } = this.calculateVertices2(x, y);
            return {
                ...beak,
                x1,
                y1,
                x2,
                y2,
                x3,
                y3
            };
        });
        console.log(`Updated beak positions to (${x}, ${y})`);
    }
    


}




