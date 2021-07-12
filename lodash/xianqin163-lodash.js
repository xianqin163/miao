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
    reverse, countBy,reduceRight,shuffle,isNaN, isNull, isNil, isUndefined, toArray, sum, sumBy
    
    



}
