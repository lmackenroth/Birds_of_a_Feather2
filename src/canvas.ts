import P5Lib from 'p5';
//import { Birds } from './project';
import gradiants from './gradiant';
import { flyingBirds } from './flyingBirds';

function project(p5: P5Lib) {
    //this will hold all of my bird instances
    //const birds: Birds[] = [];
    let gradiant: gradiants;
    // let birdBody: body;
    // let birdHead: head;
    // let birdBeak: beak;
    // let birdWing: wing;
    let birds: flyingBirds[] = [];

    p5.setup = () => {
        //figure out how to make it adjust to the of the screen dynamically
        p5.createCanvas(1000, 500);
        gradiant = new gradiants(p5);
        // birdBody = new body(p5);
        // birdHead = new head(p5);
        // birdBeak = new beak(p5, birdBody);
        // birdWing = new wing(p5, birdBody)
    };
    p5.draw = () => {
        gradiant.render(); // Render gradient background
        // birdBody.draw();
        // birdHead.draw();
        // birdBeak.draw();
        // birdWing.draw();
        birds.forEach(bird => {
            //bird.update();
            bird.draw();
        });
    };

    p5.mousePressed = () => {
        const newBird = new flyingBirds(p5, p5.mouseX, p5.mouseY); // Create bird at click position
        newBird.parts(); // Add its parts
        birds.push(newBird); // Add to the array
        // birdBody.AddTriangle();
        // //had to add the if else statement to handle the case that there are no values to add
        // //to the addcircle method
        // if (birdBody.lastX1 !== null && birdBody.lastY1 !== null) {//takes in the top vertex of each triangle
        //     birdHead.AddCircle(birdBody.lastX1, birdBody.lastY1);
        //     birdBeak.AddTriangle();
        //     birdWing.AddTriangle();
            
        // } else {
        //     console.log("Error: No triangle coordinates available for adding a circle.");
        // }    }
    }


}

new P5Lib(project);
