export class Sprite {
    constructor({ position, image, veloicty }) {
        this.position = position;
        this.image = image;
        this.veloicty = veloicty;
    }

    draw(context) {
        context.drawImage(this.image, this.position.x, this.position.y);
    }
}