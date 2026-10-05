const Render = {
    init(canvas){
        this.ctx = canvas.getContext('2d');
        canvas.width = GRID.cols*GRID.size;
        canvas.height = GRID.rows*GRID.size;
    },
    drawBoard(){
        for(let i = 0; i < GRID.rows; i++) {
            for(let j = 0; j < GRID.cols; j++) {
                this.ctx.fillStyle = (i+j)%2 ? '#17332f': '#143029';
                this.ctx.fillRect(j*GRID.size, i*GRID.size, GRID.size, GRID.size);
            }
        }
    }
};