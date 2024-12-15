import P5Lib from 'p5'

export class clouds{

    p5: P5Lib;
    cloudx: number;
    cloudy: number;
    clouds: {x: number, y: number}[] = []


    constructor(p5: P5Lib){
        this.p5 = p5;
        this.cloudx = 100;
        this.cloudy = 100;
    }

    draw(index: number) {
        
        this.makeCloud(index);
        this.cloudx+=0.1;
        
      }
      
    makeCloud(index: number) {
        
        let cloudx = this.cloudx;
        let cloudy = this.cloudy;
        for(let z = 0; z < index; z++){
            cloudy = cloudy - Math.random();
            cloudx = cloudx + Math.random();
            
            this.p5.fill(250,250,240,50)
            this.p5.noStroke();
            let one = this.p5.ellipse(cloudx, cloudy, 70, 50);
            let two = this.p5.ellipse(cloudx + 10, cloudy + 10, 70, 50);
            let three = this.p5.ellipse(cloudx - 20, cloudy + 10, 70, 50);
            this.clouds.push({one, two, three})


        }
        
      }

}