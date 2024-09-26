
function minToFront (arr){

    var min=arr[0]
    var newarr=[]
    //search min for arr
    for (var i=0 ;i<arr.length;i++){
        if (min>arr[i]){
            min=arr[i]
        }
    }
    //replace the index 
    for (var i=0 ;i<arr.length;i++){
        if (min==arr[i]){
            newarr.push(arr[i])
        }
    }
    for (var i=0 ;i<arr.length;i++){
        if (min<arr[i]){
            newarr.push(arr[i])
        }
    }
    return newarr ;
    
}
console.log(minToFront (arr))//print this function