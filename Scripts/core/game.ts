    var canvas : HTMLElement;
    var stage : createjs.Stage;
    
    function init(){
        canvas = document.getElementById("canvas");
        
        stage = new createjs.Stage();
        
        stage.enableMouseOver(30);
        
        createjs.Ticker.setFPS(60);
        
        createjs.Ticker.on("tick", gameLoop, this);
    }
    
    function gameLoop(event : createjs.TickerEvent) : void{
        var meNewText : createjs.Text = new createjs.Text("arrgh", "30pt Consolas", "0x000000");
        
        stage.addChild(meNewText);
        
        stage.update();
    }
    
    init();