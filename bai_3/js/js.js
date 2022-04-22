
function check_string(str1,str2){
    let lengthStr1 = str1.length
    let lengthStr2 = str2.length

    let j;
    for (let i = 0; i <= lengthStr2 - lengthStr1; i++) {
        for (j=0; j < str1.length; j++) {
            if (str2[j+i] !== str1[j]){
                break
            }
        }if ( j === lengthStr1){
            return true
        }
    }return false;
}
console.log(check_string('3434','fsdfdsfdsddffds'))