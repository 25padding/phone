function animate(element, target, callback, speed) {
    speed = speed ? speed : 15;
    element.timer = setInterval(function() {
        //步长值
        var step = (target - element.offsetLeft) / 10;
        //取整
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        //原位置
        left = element.offsetLeft;

        if (left != target) {
            //移动到的位置
            element.style.left = left + step + 'px';
        } else {
            //动画完成
            clearInterval(element.timer);
            //执行回调
            callback && callback();
        }

    }, speed);
}