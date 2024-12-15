import P5Lib from 'p5';
//import { Birds } from './project';
import gradiants from './gradiant';
import { flyingBirds } from './flyingBirds';
import { clouds } from './clouds';



function project(p5: P5Lib) {
    //this will hold all of my bird instances
    //const birds: Birds[] = [];
    let gradiant: gradiants;
    // let birdBody: body;
    // let birdHead: head;
    // let birdBeak: beak;
    // let birdWing: wing;
    let birds: flyingBirds[] = [];
    let cloud: clouds;

    p5.setup = () => {
        //figure out how to make it adjust to the of the screen dynamically
        p5.createCanvas(1000, 500);
        gradiant = new gradiants(p5);
        gradiant.createColors(10);
        cloud = new clouds(p5);
    };
    p5.draw = () => {
        gradiant.render(); // Render gradient background
        // birdBody.draw();
        // birdHead.draw();
        // birdBeak.draw();
        // birdWing.draw();
        birds.forEach(bird => {
            bird.update();
            bird.draw();
        });

        cloud.draw();
    };

    p5.mousePressed = () => {
        const newBird = new flyingBirds(p5, p5.mouseX, p5.mouseY); // Create bird at click position
        newBird.parts(); // Add its parts
        birds.push(newBird); // Add to the array
    }


}

new P5Lib(project);
