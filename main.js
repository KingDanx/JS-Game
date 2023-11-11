import './style.css'
import { Sprite } from './classes/Sprite';
import { Player } from './classes/Player';

const game_map = document.querySelector('#game-map');

game_map.width = window.innerWidth;
game_map.height = window.innerHeight;

const context = game_map.getContext('2d');

console.log(context);

context.fillRect(0, 0, game_map.width, game_map.height);

const game_image = new Image(game_map.width, game_map.height);
game_image.src = './game_assets/game_map.png';

const player_image = new Image();
player_image.src = './game_assets/playerDown.png';

const background = new Sprite({
    position: {
        x: -2200,
        y: -800
    }, 
    image: game_image,
    veloicty: 2,
});

const player = new Player({
    position: {
        x: game_map.width / 2 - player_image.width / 2  + 15,
        y: game_map.height / 2 - player_image.height
    },
    image: player_image
});

const keys = {
    w: {
        isPressed: false,
    },
    a: {
        isPressed: false,
    },
    s: {
        isPressed: false,
    },
    d: {
        isPressed: false,
    },
}

const keys_pressed = new Set();

function animate() {
    const frame = window.requestAnimationFrame(animate);
    background.draw(context);
    player.draw(context);

    move();
}

animate();

function move() {
    if(keys.w.isPressed && [...keys_pressed].at(-1) === 'w') {
        background.position.y += background.veloicty;
    }
    if(keys.a.isPressed && [...keys_pressed].at(-1) === 'a') {
        background.position.x += background.veloicty;
    }
    if(keys.s.isPressed && [...keys_pressed].at(-1) === 's') {
        background.position.y -= background.veloicty;
    }
    if(keys.d.isPressed && [...keys_pressed].at(-1) === 'd') {
        background.position.x -= background.veloicty;
    }
}

window.addEventListener('keydown', (e)=> {
    switch (e.key) {
        case 'w':
            keys[e.key].isPressed = true;
            keys_pressed.add(e.key);
            break;
        case 'a':
            keys[e.key].isPressed = true;
            keys_pressed.add(e.key);
            break;
        case 's':
            keys[e.key].isPressed = true;
            keys_pressed.add(e.key);
            break;
        case 'd':
            keys[e.key].isPressed = true;
            keys_pressed.add(e.key);
            break;
        default:
            break;
    }
});

window.addEventListener('keyup', (e)=> {
    switch (e.key) {
        case 'w':
            keys[e.key].isPressed = false;
            keys_pressed.delete(e.key);
            break;
        case 'a':
            keys[e.key].isPressed = false;
            keys_pressed.delete(e.key);
            break;
        case 's':
            keys[e.key].isPressed = false;
            keys_pressed.delete(e.key);
            break;
        case 'd':
            keys[e.key].isPressed = false;
            keys_pressed.delete(e.key);
            break;
        default:
            break;
    }
});