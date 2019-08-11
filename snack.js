
var snack = function(game){
    this.game = game;
    this.dots = [];
    this.direction = 'right';

    this.init = function(){
        this.createDots();
    }
    this.createDots = function(){
        this.dots.push(new dot(this.game,0,0));
        this.dots.push(new dot(this.game,0,1));
        this.dots.push(new dot(this.game,0,2));
    }

    this.go = function(){
        var headDot = this.dots[this.dots.length - 1];
        switch (this.direction) {
            case 'right':
                this.moveRight(headDot);
            break;
            case 'left':
                this.moveLeft(headDot);
            break;
            case 'up':
                this.moveUp(headDot);
            break;
            case 'down':
                this.moveDown(headDot);
            break;

        }
    }
    
    this.moveRight = function(headDot){
        if(headDot.col < NUM_COLS - 1){
            var newDot = new dot(this.game,headDot.row,headDot.col + 1);
            this.dots.push(newDot);
            this.dots.shift();
        }
    }
    this.moveLeft = function(headDot){
        if(headDot.col > 0){     
            var newDot = new dot(this.game,headDot.row,headDot.col - 1);
            this.dots.push(newDot);
            this.dots.shift();
        }
    }
    this.moveUp = function(headDot){   
        if(headDot.row > 0){
            var newDot = new dot(this.game,headDot.row - 1,headDot.col);
            this.dots.push(newDot);
            this.dots.shift();
        }
    }
    this.moveDown = function(headDot){
        if(headDot.row < NUM_ROWS -1){
            var newDot = new dot(this.game,headDot.row + 1,headDot.col);
            this.dots.push(newDot);
            this.dots.shift();
        }
    }
    
    this.draw = function(){
        this.dots.forEach(function(dot){
            dot.draw();
        });
    }
}