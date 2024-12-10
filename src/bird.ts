//this will control the birds
//will have child classes
import { Birds } from './project'; // Import the Birds interface
import P5Lib from 'p5';
//import P5Lib from 'p5';

// Extend the Birds interface
export interface colorfulBirds extends Birds {
     //I want to make methods that will eventually randomize the colors of the shapes

     setColors(): {fillColor: P5Lib.Color; strokeColor: P5Lib.Color};

}