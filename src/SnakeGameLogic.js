import { ROWS, COLS } from './config';
import SnakeGame from './SnakeGame';

// NOTE: ROWS, COLS에는 행의 개수, 열의 개수가 저장되어 있습니다.


function SnakeGameLogic() {

    this.joints = [
        { x: 2, y: 0 },// index = 0 (head)
        { x: 1, y: 0 },// index = 1 (body)
        { x: 0, y: 0 }// index = 2 (tail)
    ];

    this.fruit = { x: 3, y: 5 };
}

SnakeGameLogic.prototype.up = function () {

    console.log('up');
   
    if ('up' && this.joints[1].y !== this.joints[0].y - 1) {

        const tail = this.joints.pop();

        tail.y = this.joints[0].y - 1;
        tail.x = this.joints[0].x;

        this.joints.unshift(tail);
        console.log(this.joints);
    }
}

SnakeGameLogic.prototype.down = function () {

    console.log('down');
    
    if ('down' && this.joints[1].y !== this.joints[0].y + 1) {

        const tail = this.joints.pop();

        tail.y = this.joints[0].y + 1;
        tail.x = this.joints[0].x;

        this.joints.unshift(tail);
        console.log(this.joints);
    }

}

SnakeGameLogic.prototype.left = function () {
    console.log('left');

    if ('left' && this.joints[1].x !== this.joints[0].x - 1) {

        const tail = this.joints.pop();

        tail.y = this.joints[0].y;
        tail.x = this.joints[0].x - 1;

        this.joints.unshift(tail);
        console.log(this.joints);
    }
}

SnakeGameLogic.prototype.right = function () {

    console.log('right');
    if ('right' && this.joints[1].x !== this.joints[0].x + 1) {

        const tail = this.joints.pop();

        tail.y = this.joints[0].y;
        tail.x = this.joints[0].x + 1;

        this.joints.unshift(tail);
        console.log(this.joints);
    }
}

SnakeGameLogic.prototype.eaten = function () {
    if (this.joints[0].x === this.fruit.x && this.joints[0].y === this.fruit.y) {
        const fruitLocation = [{ x: this.fruit.x, y: this.fruit.y }];
        const eatenFruit = fruitLocation.shift();
        this.joints.unshift(eatenFruit);
    }
}

SnakeGameLogic.prototype.nextState = function () {

    if (this.joints[0].x === this.fruit.x && this.joints[0].y === this.fruit.y) {
        const fruitLocation = [{ x: this.fruit.x, y: this.fruit.y }];
        const eatenFruit = fruitLocation.shift();
        this.joints.unshift(eatenFruit);

        // 먹이를 먹었을 때 다른 곳에 먹이가 생성
        this.fruit = { x: Math.floor(Math.random() * 30), y: Math.floor(Math.random() * 20) }
        console.log(this.fruit)
    }
    console.log(`nextState`);

    // 뱀의 머리가 벽에 부딪혔을 때 게임이 끝남
    if (this.joints[0].x > 29 || this.joints[0].x < 0 || this.joints[0].y > 19 || this.joints[0].y < 0) {
        return false;
    }
    return true;
}

export default SnakeGameLogic;


