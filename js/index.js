/**
 * Created by cuiwujie on 2017/3/22.
 */
new Vue({
    el: '#app',
    data: {
        query: '',
        addressList:[]
    },
    mounted:function(){
        this.$nextTick(function(){
            this.getDataList();
        });
    }, methods: {
        getDataList: function () {
            var _this = this;
            this.$http.get('./datajson/indexdata.json').then(function (res) {
                _this.addressList = res.body.list;
            })
        },
    }
})