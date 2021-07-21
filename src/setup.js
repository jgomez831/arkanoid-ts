import RED_BRICK_IMAGE from './images/brick-red.png';
import BLUE_BRICK_IMAGE from './images/brick-blue.png';
import GREEN_BRICK_IMAGE from './images/brick-green.png';
import YELLOW_BRICK_IMAGE from './images/brick-yellow.png';
import PURPLE_BRICK_IMAGE from './images/brick-purple.png';
// Grab the canvas element for calculating the brick width
// depending on canvas width
var canvas = document.querySelector('#playField');
// Constants
export var STAGE_PADDING = 10;
export var STAGE_ROWS = 20;
export var STAGE_COLS = 10;
export var BRICK_PADDING = 5;
export var BRICK_WIDTH = canvas
    ? Math.floor((canvas.width - STAGE_PADDING * 2) / STAGE_COLS) - BRICK_PADDING
    : 100;
export var BRICK_HEIGHT = canvas
    ? Math.floor((canvas.height - STAGE_PADDING * 2) / STAGE_ROWS) - BRICK_PADDING
    : 30;
export var PADDLE_WIDTH = 150;
export var PADDLE_HEIGHT = 25;
export var PADDLE_STARTX = 450;
export var PADDLE_SPEED = 10;
export var BALL_SPEED = 5;
export var BALL_SIZE = 20;
export var BALL_STARTX = 500;
export var BALL_STARTY = 400;
export var BRICK_IMAGES = {
    1: RED_BRICK_IMAGE,
    2: GREEN_BRICK_IMAGE,
    3: YELLOW_BRICK_IMAGE,
    4: BLUE_BRICK_IMAGE,
    5: PURPLE_BRICK_IMAGE
};
export var BRICK_ENERGY = {
    1: 1,
    2: 1,
    3: 2,
    4: 2,
    5: 3 // Purple brick
};
// prettier-ignore
export var LEVEL = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 1, 1, 1, 1, 1, 1, 0, 0,
    0, 2, 2, 2, 2, 2, 2, 2, 2, 0,
    0, 3, 3, 3, 3, 3, 3, 3, 3, 0,
    0, 0, 4, 4, 4, 4, 4, 4, 0, 0,
    0, 0, 5, 5, 0, 0, 5, 5, 0, 0,
];
//# sourceMappingURL=setup.js.map