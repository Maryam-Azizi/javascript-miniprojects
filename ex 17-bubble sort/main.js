function randomInts(n, min, max) {
    var out = [];
    for (var i = 0; i < n; i++) {
        out.push(Math.round(Math.random() * (max - min)) + min);
    }
    return out
}
function createData() {
    window.originalData = randomInts(15, 10, 100);
    updateUI();
}
function bubbleSort(arr) {
    var n = arr.length;
    for (var pass = 0; pass < n - 1; pass++) {
        for (var i = 0; i < n - 1; i++) {
            if (arr[i + 1] < arr[i]) {
                hold = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = hold;
            }

        }
    }
}
function copyArray(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
    }
    return newArr
}
function sortData() {
    window.sortedData = copyArray(window.originalData);
    bubbleSort(window.sortedData);
    updateUI();
}
function updateUI() {
    console.log('sortedData:')
    console.log(window.sortedData);
    console.log('originalData:')
    console.log(window.originalData);
}
function addEvents() {
    document.querySelector('.btn-create-data').addEventListener('click', createData);
    document.querySelector('.btn-sorted-data').addEventListener('click', sortData);
}
function init() {
    addEvents();
    updateUI();
}
init();