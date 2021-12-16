// var v1 = "abc"/2;
// console.log(v1);
// var v2 = "abc"/2;
// console.log(v1==v2);
// console.log(NaN == NaN);
// var v3 = new String("123");
// var v4 = new String("123");
// console.log(v3==v4);

// var arr = [1,2,3,4,5,6];
// var arr1 = [7,8,9];
// // for( temp in arr ){
// //     console.log(temp)
// // }
// var rel = arr.join("**");
// console.log(rel);
// console.log(typeof  rel);
// var numbers = arr.concat(arr1);
// console.log(numbers);
// console.log(typeof numbers);

function callback(judge,right,error) {
    if(judge){
        console.log(judge);
        right();
    }else{
        console.log(judge);
        error();
    }
}


callback(false,function () {
    console.log("right");
},function () {
    console.log("error");
});


window.test = callback ;
console.log(window.test);
console.log(window.alert);

