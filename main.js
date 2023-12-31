import './style.css'
import { Sprite } from './classes/Sprite';
import { Player } from './classes/Player';
import { Boundary } from './classes/Boundary';
import { boundary_map } from './map_data/collisions';

const game_map = document.querySelector('#game-map');

game_map.width = window.innerWidth;
game_map.height = window.innerHeight;

const context = game_map.getContext('2d');

context.fillRect(0, 0, game_map.width, game_map.height);

const game_image = new Image(game_map.width, game_map.height);
game_image.src = './game_assets/game_map.png';

const player_image = new Image();
player_image.src = './game_assets/playerDown.png';

const offsets = {
    x: -1950,
    y: -660
}

const background = new Sprite({
    position: {
        x: offsets.x,
        y: offsets.y
    }, 
    image: game_image,
    veloicty: 2,
});

const player = new Player({
    position: {
        x: game_map.width / 2 - player_image.width / 2  + 15,
        y: game_map.height / 2 - player_image.height
    },
    image: player_image,
    frames: 4
});

const boundraies = [];
boundary_map.map((row, index) => {
    row.map((column, columnIndex) => {
        if(column === 1025) {
            boundraies.push(new Boundary({
                position: {
                    x: columnIndex * Boundary.width + offsets.x,
                    y: index * Boundary.height + offsets.y,
                },
                value: column,
                veloicty: background.veloicty
            }));
        }
    });
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
    player.isMoving = true;
    const frame = window.requestAnimationFrame(animate);
    background.draw(context);
    boundraies.map(el => {
        el.draw(context);
    });
    player.draw(context);
    
    move();
}

animate();

const moveables = [background, ...boundraies];
function move() {
    if(keys.w.isPressed && [...keys_pressed].at(-1) === 'w') {
        if(boundraies.some(el => collision({...el, position: {x: el.position.x, y: el.position.y + el.veloicty }}))) {
            player.isMoving = false;
            return
        } else {
            player.isMoving = true;
            moveables.map(el => el.position.y += el.veloicty);
        }
    }
    if(keys.a.isPressed && [...keys_pressed].at(-1) === 'a') {
        if(boundraies.some(el => collision({...el, position: {x: el.position.x + el.veloicty, y: el.position.y }}))){
            player.isMoving = false;
            return
        } else {
            player.isMoving = true;
            moveables.map(el => el.position.x += el.veloicty);
        }
    }
    if(keys.s.isPressed && [...keys_pressed].at(-1) === 's') {
        if(boundraies.some(el => collision({...el, position: {x: el.position.x, y: el.position.y - el.veloicty }}))){
            player.isMoving = false;
            return
        } else {
            player.isMoving = true;
            moveables.map(el => el.position.y -= el.veloicty);
        }
    }
    if(keys.d.isPressed && [...keys_pressed].at(-1) === 'd') {
        if(boundraies.some(el => collision({...el, position: {x: el.position.x - el.veloicty, y: el.position.y }}))){
            player.isMoving = false;
            return
        } else {
            player.isMoving = true;
            moveables.map(el => el.position.x -= el.veloicty);
        }
    }
}

function collision(boundry) {
    return player.position.x + player.width >= boundry.position.x 
        && player.position.y + player.height >= boundry.position.y
        && player.position.x <= boundry.position.x + Boundary.width
        && player.position.y <= boundry.position.y + Boundary.height 
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