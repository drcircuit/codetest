module.exports = function(){
    var hidden = require("./theSecret.js");
    var contents = [hidden];
    function safeIdx(idx){
        return idx !== 0;
    }
    return {
        add:function(item){
            contents.push(item);
        },
        storeAt: function(idx, item){
            if(safeIdx(idx)){
                contents[idx] = item;
            }
        },
        get: function(idx){
            if(safeIdx(idx)){
                return contents[idx];
            }
        }
    }
};