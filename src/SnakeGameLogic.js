import {ROWS, COLS} from './config';

// NOTE: ROWS, COLS에는 행의 개수, 열의 개수가 저장되어 있습니다.
// 이 변수를 활용해서 코드를 작성하세요!

function SnakeGameLogic() {
  // 각 마디의 좌표를 저장하는 배열
  this.joints = [
    {x: 5, y: 7},
    {x: 4, y: 7},
    {x: 3, y: 7},
    {x: 2, y: 7},
    {x: 1, y: 7},
    {x: 0, y: 7},
  ]
  ;

  // 먹이의 좌표
  this.fruit = {x: 3, y: 5};
}

SnakeGameLogic.prototype.up = function() {
  // 위쪽 화살표 키를 누르면 실행되는 함수

  console.log('up');
}

SnakeGameLogic.prototype.down = function() {
  // 아래쪽 화살표 키를 누르면 실행되는 함수
  console.log('down');
}

SnakeGameLogic.prototype.left = function() {
  // 왼쪽 화살표 키를 누르면 실행되는 함수
  console.log('left');
}

SnakeGameLogic.prototype.right = function() {
  // 오른쪽 화살표 키를 누르면 실행되는 함수
  
  SnakeGameLogic.joints[0].x += 1
  SnakeGameLogic.joints[1].x += 1;
  SnakeGameLogic.joints[2].x += 1;
  SnakeGameLogic.joints[3].x += 1;
  SnakeGameLogic.joints[4].x += 1;
  SnakeGameLogic.joints[5].x += 1;
  // SnakeGameLogic.joints.unshift(SnakeGameLogic.joints[2]);

  // // 꼬리를 떼서
  // const tail = joints.pop()

  // // 위치를 바꿔준 후
  // tail.x = 3

  // // 머리 앞에 갖다 붙인다!
  // joints.unshift(tail)

  // console.log(SnakeGameLogic.joints)
  console.log('right');
}

SnakeGameLogic.prototype.nextState = function() {
  // 한 번 움직여야 할 타이밍마다 실행되는 함수
  // 게임이 아직 끝나지 않았으면 `true`를 반환
  // 게임이 끝났으면 `false`를 반환
  console.log(`nextState`);
  return true;
}

export default SnakeGameLogic;
