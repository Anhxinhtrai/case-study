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
                cellDiv.innerHTML = "<img src='p1.png' width='40px'>"
                document.getElementById('bar').innerHTML = "<p style='border: red 1px solid ;background: white ; color: red; width: 40%'>Đến lượt người 2 đánh</p>";
                break;
            case VALUE_O:
                cellDiv.innerHTML = "<img src='p2.png' width='40px'>"
                document.getElementById('bar').innerHTML = "<p style='border: deepskyblue 1px solid;background: white ; color:deepskyblue; width: 40%'>Đến lượt người 1 đánh</p>";
                break;
            default:
                cellDiv.innerHTML = "";
                break;
        }
    }
}