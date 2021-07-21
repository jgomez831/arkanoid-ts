import { CanvasView } from './view/CanvasView';
import { Ball } from './sprites/Ball';
import { Paddle } from './sprites/Paddle';
import { Collision } from './Collision';
//Images
import PADDLE_IMAGE from './images/paddle.png';
import BALL_IMAGE from './images/ball.png';
//Level and Colors
import { PADDLE_SPEED, PADDLE_WIDTH, PADDLE_HEIGHT, PADDLE_STARTX, BALL_SPEED, BALL_SIZE, BALL_STARTX, BALL_STARTY } from "./setup";
//Helpers
import { createBricks } from './helpers';
var gameOver = false;
var score = 0;
function setGameOver(view) {
    view.drawInfo('Game Over!');
    gameOver = false;
}
function setGameWin(view) {
    view.drawInfo('Game Won!');
    gameOver = false;
}
function gameLoop(view, bricks, paddle, ball, collision) {
    view.clear();
    view.drawBricks(bricks);
    view.drawSprite(paddle);
    view.drawSprite(ball);
    // Move Ball
    ball.moveBall();
    // MOve paddle and check so it wont exit the playfield
    if ((paddle.isMovingLeft && paddle.pos.x > 0) ||
        (paddle.isMovingRight && paddle.pos.x < view.canvas.width - paddle.width)) {
        paddle.movePaddle();
    }
    collision.checkBallCollision(ball, paddle, view);
    var collidingBrick = collision.isCollidingBricks(ball, bricks);
    if (collidingBrick) {
        score += 1;
        view.drawScore(score);
    }
    // Game Over when ball leaves playField
    if (ball.pos.y > view.canvas.height)
        gameOver = true;
    //if game won, set gameOver and idsplay win
    if (bricks.length === 0)
        return setGameWin(view);
    //Return if gameover and dont run the requestAnimation Frame
    if (gameOver)
        return setGameOver(view);
    requestAnimationFrame(function () { return gameLoop(view, bricks, paddle, ball, collision); });
}
function startGame(view) {
    // Reset displays
    score = 0;
    view.drawInfo('');
    view.drawScore(0);
    //create a collision instance
    var collision = new Collision();
    //create all bricks
    var bricks = createBricks();
    //create a ball
    var ball = new Ball(BALL_SPEED, BALL_SIZE, { x: BALL_STARTX, y: BALL_STARTY }, BALL_IMAGE);
    //Create a Paddle
    var paddle = new Paddle(PADDLE_SPEED, PADDLE_WIDTH, PADDLE_HEIGHT, {
        x: PADDLE_STARTX,
        y: view.canvas.height - PADDLE_HEIGHT - 5
    }, PADDLE_IMAGE);
    gameLoop(view, bricks, paddle, ball, collision);
}
//Create a new view
var view = new CanvasView('#playField');
view.initStartButton(startGame);
//# sourceMappingURL=index.js.map