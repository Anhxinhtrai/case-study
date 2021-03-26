class Carro {
    constructor(_row, _col) {
        this.row = _row;
        this.col = _col;
        this.p1 = "X";
        this.p2 = "O";
        this.emply = '';
        this.turn = this.p1;
    }

    cell() {

    }

    creatBoard() {
        let str = '';
        for (let i = 0; i < this.row; i++) {
            str += "<tr>";
            for (let j = 0; j < this.col; j++) {
                str += "<td id='cell-"+i+" "+j+"' onclick='board.play(this)'></td>";
            }
            str +=  "</tr>";
        }
        return str;
    }

    play(td) {
        if (td.innerHTML === this.emply) {
            if (turn === this.p1) {
                td.innerHTML = this.p1;
                turn = this.p2;
            } else {
                td.innerHTML = this.p2;
                turn = this.p1;
            }
        }

    }

}