$(function() {
    //获得slider插件对象
    var gallery = mui('.mui-slider');
    gallery.slider({
        interval: 2000 //自动轮播周期，若为0则不自动播放，默认为0；这个参数不能小于1000,因为小圆点的过渡就是1000毫秒
    });
})