
var snack = function(game){
    this.game = game;
    this.dots = [];
    this.direction = 'right';

    this.init = function(){

    }
    this.createDots = function(){
        this.dots.push(new dot(this.game,0,0));
        this.dots.push(new dot(this.game,0,1));
        this.dots.push(new dot(this.game,0,2));
    }

    this.go = function(){

    }
    
    this.draw = function(){
        this.dots.forEach(function(dot){
            dot.draw();
        });
    }
}