var xianqin163 = {
    chunk: function (array, size) {
        var result = []
        if(!array || size < 0){
            return []
        }else{
            for(var i = 0;i < array.length; i += size){
                result.push( array.slice(i,i+size) )
                // Array.slice(start,end)方法用于从Array数组中返回下标start到end的一个新的数组，不包括end
            }
        }
        return result
    },
    compact: function (){

    },

}
