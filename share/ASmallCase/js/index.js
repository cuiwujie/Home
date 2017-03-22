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
        currPage: -1,
        limitNum:6
    },
    mounted:function(){
        this.$nextTick(function(){
            this.getDataList();
        });
    },
    methods: {
        getDataList: function () {
            var _this = this;
            this.$http.get('../../datajson/ASmallCasedatajson.json').then(function (res) {
                _this.addressList = res.body.list;

            })
        },
        dataDetails:function(_item,_index){
            this.curproduct=_item;
            this.currPage=_index;

        },
        hiddenDetail:function(_item,_index){
            this.curproduct=_item;
            this.currPage=-1;

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