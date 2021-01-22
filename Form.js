class Form{
    constructor(){

    }
    display(){
        var title=createElement('H1')
        title.html("Car racing game");
        title.position(150,200);
        var input=createInput();
        input.position(150,160);
        var button=createButton("start");
        button.position(250,200);
        var greeting=createElement('H3');
        button.mousePressed(function () {
            input.hide();
            button.hide();
            var name=input.value();
            playerCount=playerCount+1

         player.update(name);
         player.updateCount(playerCount);
         greeting.html("Welcome"+ name);
        greeting.position(130,160);
         
        })
        
        

    }
    
}