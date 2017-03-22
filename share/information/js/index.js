/**
 * Created by cuiwujie on 2017/3/22.
 */
/**
 * Created by cuiwujie on 2017/3/22.
 */
new Vue({
    el: '#app',
    data: {
        totopshow : false,
        Imgshow : false,
        addressList:[]
    },
    mounted:function(){
        this.$nextTick(function(){
            this.getDataList();
            //监听页面滚动
            window.addEventListener('scroll', this.loadMore)
        });
    },
    methods: {
        getDataList: function () {
            var _this = this;
            this.$http.get('../../datajson/informationData.json').then(function (res) {
                _this.addressList = res.body.list;
            })
        },
        loadMore: function () {
            //兼容性
            var distance = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            if(distance>100) {

                this.totopshow=true;
            }else{
                this.totopshow=false;
            }
        },
        returnTop:function(){
            // document.documentElement.scrollTop = document.body.scrollTop =window.pageYOffset=0;
            timer = setInterval(function(){
                //获取滚动条的滚动高度
                var osTop = document.documentElement.scrollTop || document.body.scrollTop;
                //用于设置速度差，产生缓动的效果
                var speed = Math.floor(-osTop / 6);
                document.documentElement.scrollTop = document.body.scrollTop = osTop + speed;
                isTop =true;  //用于阻止滚动事件清除定时器
                if(osTop == 0){
                    clearInterval(timer);
                }
            },30);
        },
        showImgDetail:function(){
            this.Imgshow=true;
        },
        hiddenDetail:function(){
            this.Imgshow=false;
        }
    }
})