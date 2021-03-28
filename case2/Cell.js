class Cell {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.value = VALUE_EMPTY;
    }

    getHtml() {
        let top = this.x * DEFAULT_CELL_SIZE;
        let left = this.y * DEFAULT_CELL_SIZE;
        return '<div id="cell-' + this.x + '-' + this.y + '" onclick="play(' + this.x + ',' + this.y + ')" class="cell" style="position: absolute; width: ' +
            DEFAULT_CELL_SIZE + 'px; height:' +
            DEFAULT_CELL_SIZE + 'px; left:' +
            left + 'px; top:' +
            top + 'px; line-height: ' +
            DEFAULT_CELL_SIZE + 'px;"></div>';
    }

    draw() {
        let cellDiv = document.getElementById("cell-" + this.x + "-" + this.y);
        switch (this.value) {
            case VALUE_X:
                cellDiv.innerHTML = "<img src='p1.png' width='40px'>";
                break;
            case VALUE_O:
                cellDiv.innerHTML = "<img src='p2.png' width='40px'>";
                break;
            default:
                cellDiv.innerHTML = "";
                break;
        }
    }
}

/*class Cell {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.emply = 1;
        this.value_x = 2;
        this.value_o = 3;
        this.rows = 10;
        this.cols = 10;
        this.size = 50;
    }

    getHtml() {
        let top = this.x * this.size + 'px';
        let left = this.y * this.size + 'px';
        return `<div id="cell-${this.x}-${this.y}" onclick="play(${this.x},${this.y})" class="cell" style="position: absolute; width: ${this.size}px; height: ${this.size}px;left: ${left};top: ${top};line-height: ${this.size}px"></div>`;
    }

    draw() {
        let cellDiv = document.getElementById(`cell-${this.x}-${this.y}`);
        switch (cellDiv.value) {
            case this.value_x:
                cellDiv.innerHTML = "X";
                break;
            case this.value_o:
                cellDiv.innerHTML = "O";
                break;
            default:
                cellDiv.innerHTML = "";
                break;
        }
    }
}*/
