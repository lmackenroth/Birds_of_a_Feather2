import P5Lib from 'p5'
//heavily based off code from "https://editor.p5js.org/mena-landry/sketches/D7ql4Nd3V" by mena landry to at least get functionality
export class clouds {

    p5: P5Lib;
    cloudx: number;
    cloudy: number;
    clouds: { x: number, y: number }[] = [] //stores each cloud
    index: number;


    constructor(p5: P5Lib, index: number) {
        this.p5 = p5;
        this.cloudx = 100;
        this.cloudy = 100;
        this.index = index;
    }

    addCloud(): void {
        if(this.clouds.length < this.index){
            const x = this.p5.random(0, this.p5.width); 
            const y = this.p5.random(0, this.p5.height);
            this.clouds.push({ x, y })
        }
       
    }

    // Draw all clouds in the array
    draw(): void {
        this.p5.noStroke();
        this.p5.fill(250, 250, 240, 50);

        // Loop through all stored clouds and draw them
        this.clouds.forEach((cloud) => {

            this.makeCloud(cloud.x, cloud.y);
            cloud.x += 0.1; // Clouds move to theright
            if (cloud.x > this.p5.width + 70) { // +70 accounts for cloud width
                cloud.x = -70; // Reset to left edge
                cloud.y = this.p5.random(0, this.p5.height); // Optionally randomize the y position
            }
        });


    }

    // Create a single cloud at a certain position
    private makeCloud(cloudx: number, cloudy: number): void {
        this.p5.ellipse(cloudx, cloudy, 70, 50);
        this.p5.ellipse(cloudx + 10, cloudy + 10, 70, 50);
        this.p5.ellipse(cloudx - 20, cloudy + 10, 70, 50);
    }
}

