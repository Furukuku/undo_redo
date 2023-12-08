const content = document.getElementById('content');
const undo = document.getElementById('undo');
const redo = document .getElementById('redo');

let typeTimer;

let undoStorage = [];
let redoStorage = [];

content.addEventListener('keyup', () => {
  clearTimeout(typeTimer);
  typeTimer = setTimeout(doneTyping, 500);
});

content.addEventListener('keydown', () => {
  clearTimeout(typeTimer);
});

undo.addEventListener('click', undoFn);

redo.addEventListener('click', redoFn);

function doneTyping(){
  undoStorage.push(content.value);
}

function undoFn(){
  if(undoStorage.length > 0){
    let undoData = undoStorage.pop();
    redoStorage.push(undoData);
    content.value = undoStorage.length > 0 ? undoStorage[undoStorage.length - 1] : '';
  }
}

function redoFn(){
  if(redoStorage.length > 0){
    let redoData = redoStorage.pop();
    undoStorage.push(redoData);
    content.value = undoStorage.length > 0 ? undoStorage[undoStorage.length - 1] : '';
  }
}
