var CanvasView = /** @class */ (function () {
    function CanvasView(canvasName) {
        this.canvas = document.querySelector(canvasName);
        this.context = this.canvas.getContext('2d');
        this.scoreDisplay = document.querySelector('#score');
        this.start = document.querySelector('#start');
        this.info = document.querySelector('#info');
    }
    CanvasView.prototype.clear = function () {
        var _a;
        (_a = this.context) === null || _a === void 0 ? void 0 : _a.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };
    CanvasView.prototype.initStartButton = function (startFunction) {
        var _this = this;
        var _a;
        (_a = this.start) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () { return startFunction(_this); });
    };
    CanvasView.prototype.drawScore = function (score) {
        if (this.scoreDisplay)
            this.scoreDisplay.innerHTML = score.toString();
    };
    CanvasView.prototype.drawInfo = function (text) {
        if (this.info)
            this.info.innerHTML = text;
    };
    CanvasView.prototype.drawSprite = function (brick) {
        var _a;
        if (!brick)
            return;
        (_a = this.context) === null || _a === void 0 ? void 0 : _a.drawImage(brick.image, brick.pos.x, brick.pos.y, brick.width, brick.height);
    };
    CanvasView.prototype.drawBricks = function (bricks) {
        var _this = this;
        bricks.forEach(function (brick) { return _this.drawSprite(brick); });
    };
    return CanvasView;
}());
export { CanvasView };
//# sourceMappingURL=CanvasView.js.map