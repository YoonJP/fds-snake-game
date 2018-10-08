import { ROWS, COLS } from './config';
import SnakeGame from './SnakeGame';

// NOTE: ROWS, COLS에는 행의 개수, 열의 개수가 저장되어 있습니다.
// 이 변수를 활용해서 코드를 작성하세요!

// 뱀게임 힌트
// V 화살표 키를 눌렀을 때 뱀이 움직이도록 만들어보세요.
// V 화살표 키를 눌렀을 때 뱀이 자연스럽게 움직이도록 만들어보세요(힌트: 꼬리를 떼서 머리 앞에 갖다붙이면..?)
// V 화살표 키를 누르지 않아도 주기적으로 뱀이 움직이도록 만들어보세요. (힌트 1: 방금 전에 무슨 키를 눌렀더라..? 힌트 2: `nextState`가 언제 호출되는지 알아보기 위해 개발자 도구의 콘솔을 확인하세요!)
// V 먹이를 먹었을 때 뱀의 길이가 늘어나게 만들어보세요. (힌트: 꼬리를 떼지 않으면..?)
// V 먹이를 먹었을 때 다른 곳에 먹이가 생성되게 만들어보세요.
// V 뱀의 머리가 벽에 부딪혔을 때 게임이 끝나게 만들어보세요.
// V 뱀의 머리가 자기 몸에 부딪혔을 때 게임이 끝나도록 만들어보세요.
// V 설정 파일(config.js)를 편집해 게임 난이도를 바꾸어보세요.

// 도전 과제:
// V 먹이가 뱀의 몸과 겹쳐져 생성되는 일이 없게 만들어보세요.

function SnakeGameLogic() {
    // 각 마디의 좌표를 저장하는 배열
    this.joints = [
        { x: 2, y: 0 },// index = 0 (head)
        { x: 1, y: 0 },// index = 1 (body)
        { x: 0, y: 0 }// index = 2 (tail)
    ];
    // 화살표키를 계속 누르지 않아도 뱀이 이동할 수 있게 방향을 저장
    this.direction = ''
    // 먹이의 좌표
    this.fruit = { x: 3, y: 5 };
}

// 방향키를 눌렀을 때 방향이 바뀌도록 함
SnakeGameLogic.prototype.up = function () {
    this.direction = 'up'
}

SnakeGameLogic.prototype.down = function () {
    this.direction = 'down'
}

SnakeGameLogic.prototype.left = function () {
    this.direction = 'left'
}

SnakeGameLogic.prototype.right = function () {
    this.direction = 'right'
}

SnakeGameLogic.prototype.nextState = function () {
    // 한 번 움직여야 할 타이밍마다 실행되는 함수
    console.log(`nextState`);
    let tailToHead = this.joints.pop() 
    // 떼어진 꼬리(붙여질 머리)의 위치를 바꿔줌
    if (this.direction === 'up') {
        tailToHead = { 
            x: this.joints[0].x, 
            y: this.joints[0].y - 1 };
    } else if (this.direction === 'down') {
        tailToHead = { 
            x: this.joints[0].x, 
            y: this.joints[0].y + 1 };
    } else if (this.direction === 'left') {
        tailToHead = { 
            x: this.joints[0].x - 1, 
            y: this.joints[0].y };
    } else if (this.direction === 'right') {
        tailToHead = { 
            x: this.joints[0].x + 1, 
            y: this.joints[0].y };
    }
    //  뱀의 머리가 벽에 부딪혔을 때나 자기 몸에 부딪혔을 때 게임이 끝남
    if (tailToHead.x >= COLS || tailToHead.x < 0 || tailToHead.y >= ROWS || tailToHead.y < 0) {
        return false;
    } else if (this.joints.some(joint => joint.x === tailToHead.x && joint.y === tailToHead.y)) {
        return false;
    } 
    // 먹이를 먹었을 때 뱀의 길이가 늘어남, 먹이가 뱀의 몸과 안 겹치게 생성됨
    if (tailToHead.x === this.fruit.x && tailToHead.y === this.fruit.y) {
      let fruitToTail = { x: this.fruit.x, y: this.fruit.y };
        this.joints.push(fruitToTail);
      do {
        this.fruit.x = Math.floor(Math.random() * COLS);
        this.fruit.y = Math.floor(Math.random() * ROWS);
      } while (
          this.fruit.x === tailToHead.x && this.fruit.y === tailToHead.y && 
          this.joints.some(joint => joint.x === this.fruit.x && joint.y === this.fruit.y));
    }
    // 떼어진 꼬리(붙여질 머리)를 붙여줌
    this.joints.unshift(tailToHead);
    return true;
}

export default SnakeGameLogic;
