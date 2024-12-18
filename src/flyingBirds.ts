import { head } from "./birdHead";
import { beak } from "./beak";
import { body } from "./birdBody";
import { wing } from "./wings";
import P5Lib from 'p5';
//this class will serve as a container for each bird part
export class flyingBirds {
    birdHead: head;
    birdBody: body;
    birdWing: wing;
    birdBeak: beak;
    p5: P5Lib;
    position: { x: number; y: number };
    velocity: { x: number; y: number };
    //we will pass mouse click as numbers
    constructor(p5: P5Lib, x: number, y: number) {
        this.p5 = p5;
        this.birdBody = new body(p5);
        this.birdHead = new head(p5);
        this.birdBeak = new beak(p5, this.birdBody);
        this.birdWing = new wing(p5, this.birdBody);
        this.position = { x, y };
        //negative to make it go left
        this.velocity = { x: -Math.random() * 2 - 2, y: Math.random() * 2 - 2 };
    }
    // get all the parts here
    parts() {
        this.birdBody.AddTriangle();
        if (this.birdBody.lastX1 != null && this.birdBody.lastY1 != null) {
            this.birdHead.AddCircle(this.birdBody.lastX1, this.birdBody.lastY1);
            this.birdBeak.AddTriangle();
            this.birdWing.AddTriangle();
        } else {
            console.log('problem storing bird')

        }

    }
    //draw each part
    draw() {
        this.birdBeak.draw();
        this.birdBody.draw();
        this.birdHead.draw();
        this.birdWing.draw();
    }
    //controll the velocity
    update() {
        // Update bird's overall position
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    
        // Move the body using velocity
        this.birdBody.move(this.velocity.x, this.velocity.y);
    
        // Ensure body is updated before referencing `lastX1` and `lastY1`
        if (this.birdBody.lastX1 !== null && this.birdBody.lastY1 !== null) {
            const bodyX = this.birdBody.lastX1;
            const bodyY = this.birdBody.lastY1;
    
            // Use absolute positioning for head, beak, and wing
            this.birdHead.updatePosition(bodyX, bodyY);
            this.birdBeak.updatePosition(bodyX, bodyY);
            this.birdWing.updatePosition(bodyX, bodyY);
        }
    }
    

}