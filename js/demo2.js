var arr = [1,4,5,8,9,7,4,8];
var newArrr = [];
for(var i=0;i<arr.length;i++){
	if(newArrr.indexOf(arr[i])===-1) {
		newArrr.push(arr[i])
	}
}
console.log(newArrr)

// (2)
var arr2 = [1,2,5,3,78,41,5,78,2];
var newArrr2 = [];
for(var j=0;j<arr2.length;j++){
	arr2.sort();
	if(arr2[j] !== arr2[j+1]){
		newArrr2.push(arr2[j])
	}
}
console.log(newArrr2)
console.log(2222222222222222222222222222)