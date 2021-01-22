class Player{
    constructor(){

    }
    getCount(){
        var getCountref=database.ref('playerCount');
        getCountref.on("value",function(data) {
         playerCount=data.val();    
    })
    
}
update(name){
    var playerIndex="Player"+playerCount
    database.ref(playerIndex).update({
        'name': name

    })
}
 updateCount(count){
    database.ref("/").update({
        'playerCount': count

    })
 }
}