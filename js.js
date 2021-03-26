class Carro {
    constructor(_row, _col) {
        this.row = _row;
        this.col = _col;
        this.p1 = "X";
        this.p2 = "O";
        this.emply = '.';
        this.turn = this.p1;
    }

    cell() {

    }

    creatBoard() {
        let str = '';
        for (let i = 0; i < this.row; i++) {
            str += "<tr>";
            for (let j = 0; j < this.col; j++) {
                str += "<td id='cell-" + i + "" + j + "' onclick='board.play(this)'>.</td>";
            }
            str += "</tr>";
        }
        return str;
    }

    play(td) {
        let count = 0;
        if (td.innerHTML === this.emply) {
            if (turn === this.p1) {
                if (count != 0) {
                    this.checkWin();
                }
                td.innerHTML = this.p1;
                count++;
                turn = this.p2;
            } else {
                if (count != 0) {
                    this.checkWin();
                }
                td.innerHTML = this.p2;
                count++;
                turn = this.p1;
            }
        }

    }

    checkWin() {
        let i = 0;
        let count = 0;
        for (let j = 0; j < this.row; j++) {
            if (document.getElementById('cell-' + i + j) == '') {
                alert('rỗng')
                continue;
            } else {
                if (document.getElementById('cell-' + i + j) === document.getElementById('cell-' + i + (j + 1))) {
                    count++;
                }
                if (count >= 5) {
                    alert("win");
                    break;

                }
            }
        }
    }

}