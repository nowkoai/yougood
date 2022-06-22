var $countA = 0;

function countUpA() {
  console.log("countUpA")
  document.getElementById( "goodcount" ).innerHTML = ++$countA;


  document.getElementById('like').animate({
    // background: ["#fcc", "#f66"],
    background: ['rgb(255, 255, 255)', 'rgb(226, 226, 226)'],
    boxShadow: '0 0 2px rgb(100, 100 ,100) inset'
  }, 1000 );


  // ////////////////
  // // document.getElementById('like').style.transition = 'all 0.4s ease-in-out';
  // document.getElementById('like').style.backgroundColor = 'rgb(226, 226, 226)';
  // document.getElementById('like').style.boxShadow = '0 0 2px rgb(100, 100 ,100) inset';
  //
  // // アニメーション終了後、styleを削除
  // setTimeout(function() {
  //   // document.getElementById('like').style.backgroundColor = 'rgb(255, 255, 255)';
  //   // document.getElementById('like').style.boxShadow = '0 0 0';
  //
  //   // document.getElementById('like').animate(
  //   // 	[
  //   // 		{ backgroundColor: '#4169e1' },
  //   // 		{ backgroundColor: '#66ccff' }
  //   // 	],
  //   // 	{
  //   // 		duration: 1000,
  //   // 		// iterations: Infinity,
  //   // 		// direction: 'alternate'
  //   // 	}
  //   // )
  // }, 1000);
}
