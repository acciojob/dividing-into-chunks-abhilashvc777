const arr = [1, 2, 3, 4, 1, 0, 2, 2];

        const divide = (arr,n) => {
  // Write your code here
        const arr1 = [];
        let k = 0;
        for(let i=0; i<=arr.length-1; i++){
            let sum = 0;
           for(let j=i; j<=arr.length-1; j++){
            sum=sum+arr[j]
            if(sum<=n){
                k=j;
            }
            if(sum>n){
                break;
            }
           }
           arr1.push(arr.slice(i,k+1))
           i=k;
        }
			return arr1
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
