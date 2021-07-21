var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
import { Brick } from './sprites/Brick';
import { BRICK_IMAGES, LEVEL, STAGE_COLS, STAGE_PADDING, BRICK_WIDTH, BRICK_HEIGHT, BRICK_PADDING, BRICK_ENERGY } from './setup';
export function createBricks() {
    return LEVEL.reduce(function (ack, element, i) {
        var row = Math.floor(i + 1) / STAGE_COLS;
        var col = i % STAGE_COLS;
        var x = STAGE_PADDING + col * (BRICK_WIDTH + BRICK_PADDING);
        var y = STAGE_PADDING + row * (BRICK_HEIGHT + BRICK_PADDING);
        if (element === 0)
            return ack;
        return __spreadArray(__spreadArray([], ack), [
            new Brick(BRICK_WIDTH, BRICK_HEIGHT, { x: x, y: y }, BRICK_ENERGY[element], BRICK_IMAGES[element])
        ]);
    }, []);
}
//# sourceMappingURL=helpers.js.map