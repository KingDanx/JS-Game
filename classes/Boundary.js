export class Boundary {
    static width = 66;
    static height = 66;
    constructor({ position, value, veloicty }) {
        this.position = position;
        this.value = value;
        this.veloicty = veloicty;
    }

    draw(context) {
        context.fillStyle = 'trandsparent';
        context.fillRect(
            this.position.x,
            this.position.y,
            Boundary.width,
            Boundary.height,
        );
    }
}