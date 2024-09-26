function howMuchLeftOverCake (numberOfPieces , numberOfPeople ){
    var p =numberOfPieces - numberOfPeople;
    if(p<=0){
        return "No leftovers for you!";
    }
    else if(p==1 || p==2){
        return "You have some leftovers 1";

    }else if(p<=5){
        return "You have leftovers to share 2";

    }else if(p>5) {
        return "Hold another party! 3";

    }
}
console.log(howMuchLeftOverCake (5,5))