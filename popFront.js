function popFront(arr){
    for (var i =0 ;i<arr.length;i++){
        if(i==0){
        var newarr =[];
        newarr.push(arr[i]);
        newarr.pop(arr[i]);
        }else{
            newarr.push(arr[i]);
        }
    
    }
    return(newarr);
}
console.log(popFront([5,8,9,10,3,4,7]));