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
});

const player = new Player({
    position: {
        x: game_map.width / 2 - player_image.width / 2,
        y: game_map.height / 2 - player_image.height
    },
    image: player_image
});

console.log(player)

function animate() {
    const frame = window.requestAnimationFrame(animate);
    background.draw(context);
    player.draw(context);
}

animate();

window.addEventListener('keydown', (e)=> {
    switch (e.key) {
        case 'w':
            console.log('pressed w')
            break;
            case 'a':
            console.log('pressed a')
            
            break;
            case 's':
            console.log('pressed s')
            
            break;
            case 'd':
            console.log('pressed d')
            
            break;
    
        default:
            break;
    }
})