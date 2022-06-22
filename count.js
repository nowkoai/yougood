var $countA = 0;
// var $countB = 0;

function countUpA() {
  // カウンター
  console.log("countUpA")
  document.getElementById("goodcount").innerHTML = ++$countA;

  // アニメーション
  document.getElementById('like').animate({
    // background: ["#fcc", "#f66"],
    // background: ['rgb(255, 255, 255)', 'rgb(226, 226, 226)'],
    background: ['#fff', '#F2F2F2'],
    boxShadow: '0 0 2px rgb(100, 100 ,100) inset'
  }, 500 );
}

function countUpB() {
  // カウンター
  // console.log("countUpB")
  // document.getElementById("badcount").innerHTML = ++$countB;

  // アニメーション
  document.getElementById('dislike').animate({
    // background: ["#fcc", "#f66"],
    // background: ['rgb(255, 255, 255)', 'rgb(226, 226, 226)'],
    background: ['#fff', '#F2F2F2'],
    boxShadow: '0 0 2px rgb(100, 100 ,100) inset'
  }, 500 );
}
