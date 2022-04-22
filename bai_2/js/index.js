function tryRemoveFromArray(arr,index) {
    for (let i = index; i < arr; i++) {
        arr[i] = arr[i+1]
    }
    arr.length = arr.length - 1
    return arr;
}
let arr = ['12','ff','fdfdf','dfdf','feef']
console.log(tryRemoveFromArray(arr,3))