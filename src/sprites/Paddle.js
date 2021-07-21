var Paddle = /** @class */ (function () {
    function Paddle(speed, paddleWidth, paddleHeight, position, image) {
        var _this = this;
        this.speed = speed;
        this.paddleWidth = paddleWidth;
        this.paddleHeight = paddleHeight;
        this.position = position;
        this.paddleImage = new Image();
        this.handleKeyUp = function (e) {
            if (e.code === 'ArrowLeft' || e.key === 'ArrowLeft')
                _this.moveLeft = false;
            if (e.code === 'ArrowRight' || e.key === 'ArrowRight')
                _this.moveRight = false;
        };
        this.handleKeyDown = function (e) {
            if (e.code === "ArrowLeft" || e.key === "ArrowLeft")
                _this.moveLeft = true;
            if (e.code === "ArrowRight" || e.key === "ArrowRight")
                _this.moveRight = true;
        };
        this.speed = speed;
        this.paddleWidth = paddleWidth;
        this.paddleHeight = paddleHeight;
        this.position = position;
        this.moveLeft = false;
        this.moveRight = false;
        this.paddleImage.src = image;
        //Event Listeners
        document.addEventListener('keydown', this.handleKeyDown);
        document.addEventListener('keyup', this.handleKeyUp);
    }
    Object.defineProperty(Paddle.prototype, "width", {
        //Getters
        get: function () {
            return this.paddleWidth;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Paddle.prototype, "height", {
        get: function () {
            return this.paddleHeight;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Paddle.prototype, "pos", {
        get: function () {
            return this.position;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Paddle.prototype, "image", {
        get: function () {
            return this.paddleImage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Paddle.prototype, "isMovingLeft", {
        get: function () {
            return this.moveLeft;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Paddle.prototype, "isMovingRight", {
        get: function () {
            return this.moveRight;
        },
        enumerable: false,
        configurable: true
    });
    Paddle.prototype.movePaddle = function () {
        if (this.moveLeft)
            this.pos.x -= this.speed;
        if (this.moveRight)
            this.pos.x += this.speed;
    };
    return Paddle;
}());
export { Paddle };
//# sourceMappingURL=Paddle.js.map