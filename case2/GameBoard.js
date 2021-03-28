class GameBoard {
    constructor(rows, cols, elementId) {
        this.rows = rows;
        this.cols = cols;
        this.elementId = elementId;
        this.turn = VALUE_X;
        this.cells = [];
        this.isOver = false;
    }

    draw() {
        let gameBoardDiv = document.getElementById(this.elementId);
        gameBoardDiv.innerHTML = "";
        for (let i = 0; i < this.rows; i++) {
            let row = [];
            this.cells.push(row);
            for (let j = 0; j < this.cols; j++) {
                let cell = new Cell(i, j);
                row.push(cell);
                gameBoardDiv.innerHTML += cell.getHtml();
            }
        }
    }

    play(x, y) {
        if (this.isOver) {
            return;
        }
        let cell = this.cells[x][y];
        if (cell.value === VALUE_EMPTY) {
            cell.value = this.turn;
            cell.draw();
            this.check(x, y);
            if (this.turn === VALUE_O) {
                this.turn = VALUE_X;
            } else {
                this.turn = VALUE_O;
            }
        }
    }

    check(x, y) {
        let count;
        let i;
        let j;

        let cell = this.cells[x][y];
        //Horizontal
        count = 1;
        i = 1;
        while ((y + i < this.cols) && this.cells[x][y + i].value === cell.value) {
            count++;
            i++;
        }
        i = 1;
        while ((y - i >= 0) && this.cells[x][y - i].value === cell.value) {
            count++;
            i++;
        }
        this.endGame(count);
        //Vertical
        count = 1;
        i = 1;
        while ((x + i < this.rows) && this.cells[x + i][y].value === cell.value) {
            count++;
            i++;
        }
        i = 1;
        while ((x - i >= 0) && this.cells[x - i][y].value === cell.value) {
            count++;
            i++;
        }
        this.endGame(count);
        //Left diagonal
        count = 1;
        i = 1;
        j = 1;
        while ((y + i < this.cols) && (x + i < this.rows) && this.cells[x + i][y + j].value === cell.value) {
            count++;
            i++;
            j++;
        }
        i = 1;
        j = 1;
        while ((x - i >= 0) && (y - j >= 0) && this.cells[x - i][y - j].value === cell.value) {
            count++;
            i++;
            j++;
        }
        this.endGame(count);
        //Right diagonal
        count = 1;
        i = 1;
        j = 1;
        while ((y + j < this.cols) && (x - i >= 0) && this.cells[x - i][y + j].value === cell.value) {
            count++;
            i++;
            j++;
        }
        i = 1;
        j = 1;
        while ((y - j >= 0) && (x + i < this.rows) && this.cells[x + i][y - j].value === cell.value) {
            count++;
            i++;
            j++;
        }
        this.endGame(count);
    }

    endGame(count) {
        if (count >= 5) {
            this.isOver = true;
            if (this.turn === VALUE_X) {
                alert("người chơi 1 đã thắng")
            }else {alert("người chơi 2 đã thắng")}
        }
    }
}


/*

class GameBoard {
    constructor(rows, cols, elementId) {
        this.rows = rows;
        this.cols = cols;
        this.elementId = elementId;
        this.turn = this.value_x;
        this.cells = [];
        this.isOver = false;
        this.emply = 1;
        this.value_x = 2;
        this.value_o = 3;
        this.rows = 10;
        this.cols = 10;
        this.size = 50;
    }

    draw() {
        let gameBoardDiv = document.getElementById(this.elementId);
        gameBoardDiv.innerHTML = "";
        for (let i = 0; i < this.rows; i++) {
            let row = [];
            this.cells.push(row);
            for (let j = 0; j < this.cols; j++) {
                let cell = new Cell(i, j);
                row.push(cell);
                gameBoardDiv.innerHTML += cell.getHtml();
            }
        }
    };

    play(x, y) {
        if (this.isOver) {
            return;
        }
        let cell = this.cells[x][y]; // empty
        console.log(cell.emply + `${x}` + `${y}` )
        if (cell.emply === this.emply) {
            cell.value = this.turn;
            cell.draw();
            this.check(x, y);
            if (this.turn === this.value_x) {
                this.turn = this.value_o;
            } else {
                this.turn = this.value_x
            }
        } else {
            alert("ô này không trống")
        }
    };

    check(x, y) {
        let cell = this.cells[x][y];
        //    check ngang
        let count = 1;
        let i = 1;
        while ((y + i < this.cols) && this.cells[x][y + i].value === cell.value) {
            count++;
            i++;
        }
        i = 1;
        while ((y - i >= 0) && this.cells[x][y - i].value === cell.value) {
            count++;
            i++;
        }
        this.endGame(count);
        //check dọc
        count = 1;
        i = 1;
        while ((x + i < this.rows) && this.cells[x + i][y].value === cell.value) {
            count++;
            i++;
        }
        i = 1;
        while ((x - i >= 0) && this.cells[x - i][y].value === cell.value) {
            count++;
            i++;
        }
        this.endGame(count);
        //check chéo trái
        count = 1;
        i = 1;
        let j = 1;
        while ((y + i < this.cols) && (x + i < this.rows) && this.cells[x + i][y + j].value === cell.value) {
            count++;
            i++;
            j++;
        }
        i = 1;
        j = 1;
        while ((x - i >= 0) && (y - j >= 0) && this.cells[x - i][y - j].value === cell.value) {
            count++;
            i++;
            j++;
        }
        this.endGame(count);
        //check chéo phải
        count = 1;
        i = 1;
        j = 1;
        while ((y + j < this.cols) && (x - i >= 0) && this.cells[x - i][y + j].value === cell.value) {
            count++;
            i++;
            j++;
        }
         i = 1;
         j = 1;
        while ((y - j >= 0) && (x + i < this.rows) && this.cells[x + i][y - j].value === cell.value) {
            count++;
            i++;
            j++;
        }
        this.endGame(count);
    };

    endGame(count) {
        if (count >= 5) {
            this.isOver = true;
            alert("Bạn đã thắng!!!");
        }
    };
}
*/
