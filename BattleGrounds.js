
var index = 0;
var videoNum = document.querySelectorAll('.vContainer > div');
var leftNav_li = document.querySelectorAll('.nav2 li');
var boxLength = videoNum.length - 1;
function changeBox(step, num = 0) {
    // 暂停
    videoNum[index].querySelector('video').pause()
    leftNav_li[index].style="color:#fff";
    if (num > 0) {
        index = num;
    } else {
        if (step == 'down') {

            // 往下的时候
            index = ++index >= boxLength ? boxLength : index
        } else {
            // 往上的时候
            index = --index <= 0 ? 0 : index

        }
    }
    var y = -600 * index
    leftNav_li[index].style="color:#e69800";
    document.querySelector('.vContainer').style.transform = 'translate(0,' + y + 'px)'

    videoNum[index].querySelector('video').play()
    // 标识已经切换完毕
    isChange = false
}
function keyHandle(event) {
    // console.log(event);
    var step = '';

    if (event.key == 'ArrowDown') {
        step = 'down';
    } else if (event == 'ArrowUp') {
        step = 'up';
    }
    changeBox(step);
    // var y = -780 * index;
    // document.querySelector('.vContainer').style.transform = 'translate(0,' + y + 'px)';
    // videoNum[index].querySelector('video').play();
}
var isChange = false;

function scrollHandle(event) {
    var e = event || window.evevt;
    var num = e.detail == 0 ? -e.wheelDelta : e.detail;
    var step = '';
    if (num > 0) {
        step = 'down';
    } else {
        step = 'up';
    }
    if (!isChange) {
        setTimeout(function () {
            changeBox(step);
        }, 200)
        isChange = true;
    }
}
function changeTo(index){
    changeBox('',index);
}

window.addEventListener('keydown', keyHandle, true);
if (document.addEventListener) {
    document.addEventListener('DOMMouseScroll', scrollHandle, false);
}
window.onmousewheel = document.onmousewheel = scrollHandle;
