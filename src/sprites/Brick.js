var Brick = /** @class */ (function () {
    function Brick(brickWidth, brickHeight, position, brickEnergy, image) {
        this.brickWidth = brickWidth;
        this.brickHeight = brickHeight;
        this.position = position;
        this.brickEnergy = brickEnergy;
        this.brickImage = new Image();
        this.brickWidth = brickWidth;
        this.brickHeight = brickHeight;
        this.position = position;
        this.brickEnergy = brickEnergy;
        this.brickImage.src = image;
    }
    Object.defineProperty(Brick.prototype, "width", {
        //Getters
        get: function () {
            return this.brickWidth;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Brick.prototype, "height", {
        get: function () {
            return this.brickHeight;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Brick.prototype, "pos", {
        get: function () {
            return this.position;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Brick.prototype, "image", {
        get: function () {
            return this.brickImage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Brick.prototype, "energy", {
        get: function () {
            return this.brickEnergy;
        },
        //setter
        set: function (energy) {
            this.brickEnergy = energy;
        },
        enumerable: false,
        configurable: true
    });
    return Brick;
}());
export { Brick };
//# sourceMappingURL=Brick.js.map