import { Sprite } from "./Sprite"

export class Player extends Sprite {
    constructor({ position, image, frames }) {
        super({ position, image });
        this.frames = frames;
    }

    draw(context) {
        context.drawImage(
                    this.image,
                    0,                    //? x begin crop
                    0,                    //? y begin crop
                    this.image.width / 4, //? x end crop
                    this.image.height,    //? y end crop
                    this.position.x,      //? x-coord
                    this.position.y,      //? y-coord  
                    this.image.width / 4,       //? actual width
                    this.image.height            //? actual height
                );
    }
}