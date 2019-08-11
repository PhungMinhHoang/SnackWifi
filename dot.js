
const DOT_SIZE = 20; 

var dot = function(game,row,col) {
    this.game = game;
    this.row = row;
    this.col = col;

    this.init = function(){

    }
    
    this.moveRight = function(){
        this.col++;
    }
    this.moveLeft = function(){
        this.col--;
    }
    this.moveUp = function(){
        this.row--;
    }
    this.moveDown = function(){
        this.down++;
    }
    this.draw = function(){
        this.game.context.fillStyle = '#FF0000';
        this.game.context.fillRect(this.col * DOT_SIZE + 1, this.row * DOT_SIZE + 1, DOT_SIZE - 2, DOT_SIZE - 2);
    }
}