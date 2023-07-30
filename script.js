let btn = document.getElementById("btn");
let inp = document.getElementById("inp");
let boxes = document.querySelectorAll(".box");
let drag = null;

btn.onclick = function () {
    if (inp.value !== null) {
        boxes[0].innerHTML += `<p class="item" draggable="true">${inp.value}</p>`;
        inp.value = "";
    }
    drag_item();
}
function drag_item() {
    let item = document.querySelectorAll(".item");
    item.forEach((it) => {
        it.addEventListener("dragstart", function () {
            drag = it;
            it.style.opacity = "0.5";
        });
        it.addEventListener("dragend", function () {
            drag = null;
            it.style.opacity = "1";
        });
        boxes.forEach((box) => {
            box.addEventListener("dragover", function (e) {
                e.preventDefault();
                box.style.background = "#090";
                box.style.color = "white";
            });
            box.addEventListener("dragleave", function () {
                box.style.background = "white";
                box.style.color = "black";
            });
            box.addEventListener("drop", function () {
                this.append(drag);
                box.style.background = "white";
                box.style.color = "black";
            });
        });
    });
}
