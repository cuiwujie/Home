/**
 * Created by cuiwujie on 2017/3/22.
 */
new Vue({
    el: '#app',
    data: {
        addressList:[],
        curproduct:"",
        showId:-1,
        confirmshow:false,
        flag:"#",
        currPage: 0,
        limitNum:4

    },
    mounted:function(){
        this.$nextTick(function(){
            this.getDataList();
        });
    },
    methods: {
        getDataList: function () {
            var _this = this;
            this.$http.get('../../datajson/work_project.json').then(function (res) {
                _this.addressList = res.body.list;
            })
        },
        btnclick:function(item,_index){
            this.curproduct=item;
            console.log(this.curproduct);
            this.showId =_index;
            this.confirmshow=true;
        },
        slidePre: function() {
            if (this.currPage !== 0) {
                this.currPage--
            }
        },
        slideNext: function() {
            if (this.currPage <3) {
                this.currPage++
            }
        },
        loadmore: function(){
            this.limitNum =this.addressList.length;
        }
    },
    computed:{
        filteAddressLimit:function(){
            return this.addressList.slice(0,this.limitNum);
        }
    }
})