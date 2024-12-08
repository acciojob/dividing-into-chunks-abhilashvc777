const arr = [1, 2, 3, 4, 1, 0, 2, 2];

        const divide = (arr,n) => {
  // Write your code here
  let arr2 = new Array()
  let arr3=[]
	for(let i=0; i<=arr.length-1; i++){
		let arr1 = []
		for(let j=i; j<=arr.length-1; j++){
			 arr1.push(arr[j])
            //  console.log(arr1)
            // add_subarray.push(arr1)
             let sum = 0;
            for(let k=0; k<=arr1.length-1; k++){
                sum=sum+arr1[k]
            }
        if(sum<=n){
            let a = arr1.length;
            // console.log(arr1)
           arr2.push(arr1.slice())
            } 
		}
    }
    return arr2;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
