
var food = function(game){
    this.game = game;
    this.col = 1;
    this.row = 0;
    var self = this;

    this.init = function(){
        do{
            this.col = 1+ Math.round(Math.random() * (NUM_COLS - 1));
            this.row = Math.round(Math.random() * (NUM_ROWS - 1));
        }
        while(!this.validNewPos(this.row, this.col))
    }

    this.validNewPos = function(row, col){
        this.game.snack.dots.forEach(function(dot){
            if(dot.col == col && dot.row == row){
                return false;
            }
        });
        return true;
    }
    this.draw = function(){
        this.game.context.fillStyle = '#FFFF00';
        this.game.context.fillRect(this.col * DOT_SIZE + 1, this.row * DOT_SIZE + 1, DOT_SIZE - 2, DOT_SIZE - 2);
    }
}