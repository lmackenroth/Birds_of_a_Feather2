import P5Lib from 'p5';
//import { Birds } from './project';
import gradiants from './gradiant';
import { flyingBirds } from './flyingBirds';
import { clouds } from './clouds';



function project(p5: P5Lib) {
    
    let gradiant: gradiants;
 //this will hold all of my bird instances
    let birds: flyingBirds[] = [];
    let cloud: clouds;
    let cloudCount = 20;
    let canvas: any;
    p5.setup = () => {
        //figure out how to make it adjust to the of the screen dynamically
        canvas = p5.createCanvas(1000, 500);
        centerCanvas();
        gradiant = new gradiants(p5);
        gradiant.createColors(10);
        cloud = new clouds(p5, cloudCount);
        for (let i = 0; i < cloudCount; i++) {
            cloud.addCloud();
        }
    };
    
    const centerCanvas = () => {
        const x = (p5.windowWidth - p5.width) / 2; // Center horizontally
        const y = (p5.windowHeight - p5.height) / 2; // Center vertically
        canvas.position(x, y); // Set the position
    };
    p5.draw = () => {
        gradiant.render(); // Render gradient background
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
