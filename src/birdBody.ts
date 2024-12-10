import { colorfulBirds } from './bird';
import P5Lib from 'p5';

export class body implements colorfulBirds {
    //add p5
    public p5: P5Lib;
    //initialize trianle object with all verticies and colors
    public triangles: {
        x1: number;
        y1: number;
        x2: number;
        y2: number;
        x3: number;
        y3: number;
        strokeColor: P5Lib.Color;
        fillColor: P5Lib.Color;
    }[] = [];
    //store first coordinate pair for creating a circle later(top vertex)
    public lastX1: number | null = null;
    public lastY1: number | null = null;

    constructor(p5: P5Lib) {
        this.p5 = p5;
        console.log('Triangles initialized');
    }
    //draw function
    draw(): void {
        this.triangles.forEach((triangle) => {
            this.p5.stroke(triangle.strokeColor);
            this.p5.fill(triangle.fillColor);
            this.p5.triangle(
                triangle.x1, triangle.y1,
                triangle.x2, triangle.y2,
                triangle.x3, triangle.y3
            );
        });
    }

    //seperate method for caculating methods

    private calculateVertices(x: number, y: number, size: number): { x1: number; y1: number; x2: number; y2: number; x3: number; y3: number } {
        return {
            //top vertex
            x1: x - size / 2,
            y1: y - size,
            //bottom left
            x2: x + size / 2,
            y2: y + size,
            //bottom right
            x3: x + 3 * (size / 2),
            y3: y + size
        };
    }

    setColors(): { fillColor: P5Lib.Color; strokeColor: P5Lib.Color } {
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

    AddTriangle(): void {
        //takes in original x, y from mouse click to create rest of verticies
        const x = this.p5.mouseX;
        const y = this.p5.mouseY;
        const size = this.p5.random(5, 10);

        const { x1, y1, x2, y2, x3, y3 } = this.calculateVertices(x, y, size);
        const { fillColor, strokeColor } = this.setColors();

        this.triangles.push({ x1, y1, x2, y2, x3, y3, fillColor, strokeColor });
        this.lastX1 = x1;
        this.lastY1 = y1;

        console.log(`Triangle added with vertices: (${x1}, ${y1}), (${x2}, ${y2}), (${x3}, ${y3})`);
    }

    // Placeholder for future movement logic
    move(): void {
        // TODO: Add logic for moving triangles
    }
}
