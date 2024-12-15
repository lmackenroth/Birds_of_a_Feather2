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
        this.p5.noStroke();
        this.triangles.forEach((triangle) => {
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

    setColors(): { fillColor: P5Lib.Color} {
        return {
            //create fill color
            fillColor: this.p5.color(
                this.p5.random(0, 255),
                this.p5.random(0, 255),
                this.p5.random(0, 255),
                150
            )
        };
    }

    AddTriangle(): void {
        //takes in original x, y from mouse click to create rest of verticies
        const x = this.p5.mouseX;
        const y = this.p5.mouseY;
        const size = this.p5.random(5, 10);

        const { x1, y1, x2, y2, x3, y3 } = this.calculateVertices(x, y, size);
        const { fillColor } = this.setColors();

        this.triangles.push({ x1, y1, x2, y2, x3, y3, fillColor });
        this.lastX1 = x1;
        this.lastY1 = y1;

        console.log(`Triangle added with vertices: (${x1}, ${y1}), (${x2}, ${y2}), (${x3}, ${y3})`);
    }

    // Placeholder for future movement logic
    move(dx: number, dy: number): void {
        this.triangles = this.triangles.map((triangle) => ({
            ...triangle,
            x1: triangle.x1 + dx,
            y1: triangle.y1 + dy,
            x2: triangle.x2 + dx,
            y2: triangle.y2 + dy,
            x3: triangle.x3 + dx,
            y3: triangle.y3 + dy
        }));

        if (this.lastX1 !== null) this.lastX1 += dx;
        if (this.lastY1 !== null) this.lastY1 += dy;
    }
}
