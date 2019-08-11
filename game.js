
const NUM_COLS = 20;
const NUM_ROWS = 15;
const GAME_WIDTH = 400;
const GAME_HEIGHT = 300;

var game = function () {
    this.timePerFrame   = 1000;
    this.snack          = null;
    this.food           = null;
    this.socket         = null;
    this.canvas         = null;
    this.context        = null;
    
    var self = this;

    this.init = function(){
        //create game canvas
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
        this.canvas.width = GAME_WIDTH;
        this.canvas.height = GAME_HEIGHT;
        document.body.appendChild(this.canvas);

        //create socket.io
        this.socket = io('http://localhost:8888');
        this.listenServer();

        //create new snack
        this.snack = new snack(this);
        this.snack.init();

        //create new food
        this.food = new food(this);
        this.food.init();

        //Start the world
        this.loop();
        this.listenEvent();
    }
    this.loop = function(){
        self.clearScreen();
        self.food.draw();
        self.snack.go();
        self.snack.draw();
        setTimeout(self.loop,self.timePerFrame)
    }

    this.listenEvent = function(){
        document.addEventListener('keydown',function(event){
            switch (event.keyCode) {
                case 40:
                    if(self.snack.direction != 'up')
                        self.snack.direction = 'down';
                break;
                case 39:
                    if(self.snack.direction != 'left')
                        self.snack.direction = 'right';
                break;
                case 37:
                    if(self.snack.direction != 'right')
                        self.snack.direction = 'left';
                break;
                case 38:
                    if(self.snack.direction != 'down')
                        self.snack.direction = 'up';
                break;
            }
            
        })
    }

    this.listenServer = function(){
        this.socket.on('connection',function(){
        })
        this.socket.on('directionFromServer',function(direction){
            self.snack.direction = direction;
        });
    }

    this.gameOver = function () {
        //create new snack
        this.snack = new snack(this);
        this.snack.init();
        this.timePerFrame = 1000;
    }


    this.clearScreen = function(){
        this.context.fillStyle = '#000000';
        this.context.fillRect(0,0,GAME_WIDTH,GAME_HEIGHT);
    }
}

var g = new game();
g.init();