var xianqin163 = {
    chunk: function (array, size) {
        var result = []
        if(!array || size < 0){
            return []
        }else{
            for(var i = 0;i < array.length; i += size){
                result.push( array.slice(i,i+size) )
                // Array.slice(start,end) 用于从Array数组中返回下标start到end的一个新数组,不包括end.
            }
        }
        return result
    },
    compact: function (array){
        // 删除所有 false，null，0，""，undefined，和NaN
        var arr = []
        for(var i = 0; i < array.length; i++){
            if(array[i]){
                arr.push(array[i])
            }
        }
        return arr
    },
    difference: function (array,values){
        var result = []
        for(var i = 0; i < array.length; i++){
            for(var j = 0; j < array.length; j++){
                if(values[i] == array[j]){
                    continue
                }else{
                    result.push(array[j])
                }
            }
        }
        return result
    },
    drop: function (array, n = 1){
        for(var i = 1; i <= n; i++){
            array.shift(array[i])
        }
        return array
    },
    dropRight: function (array, n = 1){
        var l = array.length
        for(var i = l; i > l - n; i--){
            array.pop(array[i])
        }
        return array
    },
    fill: function(array, value, start=0, end=array.length){
        if(start == undefined)
    },
    unique: function (){

    },
    uniqueBy: function (){

    },
    // flattenDeep/Depth: function (){    },
    gruopBy: function (){


    },
    keyBy: function (){


    },

    forEach: function (){


    },
    map: function (){


    },
    filter: function (){


    },
    reduce: function (){


    },
    zip: function (){


    },
    unzip: function (){

    },
    every: function (){

    },
    some: function (){

    },
    fill: function (){

    },
    sortBy: function (){

    },
    isEqual: function (){

    },
    reverse: function (){

    },countBy: function (){

    },reduceRight: function (){

    },shuffle: function (){

    },isNaN: function (){

    }, isNull: function (){

    }, isNil: function (){

    }, isUndefined: function (){

    }, toArray: function (){

    }, sum: function (){

    }, sumBy: function (){

    },
    
    



}
