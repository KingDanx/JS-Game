import { Sprite } from "./Sprite"

export class Player extends Sprite {
    constructor({ position, image, frames }) {
        super({ position, image });
        this.frames = frames;
        this.width = this.image.width / 4; 
        this.height = this.image.height;
        this.isMoving = false;
    }

    draw(context) {
        context.drawImage(
            this.image,
            0,               //? x begin crop
            0,               //? y begin crop
            this.width,      //? x end crop
            this.height,     //? y end crop
            this.position.x, //? x-coord
            this.position.y, //? y-coord  
            this.width,      //? actual width
            this.height      //? actual height
        );
    }
}