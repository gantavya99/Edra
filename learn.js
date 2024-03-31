// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// Input: [1,2,3,4] Output: [24,12,8,6]
// Input: [2, 4, 0, 8];

    function product(arr){
        let result = [];
        let product=1;
        for(let i = 0;i<arr.length;i++){ 
            product*=arr[i];
        }
        for(let i=0;i<arr.length;i++){
            result.push(product/arr[i]);
        }
        return result;
    }

    
    function productExceptSelf(arr) {
        let result = [];
        
        for (let i = 0; i < arr.length; i++) {
            let product = 1;
            for (let j = 0; j < arr.length; j++) {
                if (i !== j) {
                    product *= arr[j];
                }
            }
            result.push(product);
        }
        return result;
    }

let b = [2, 4, 0, 8];


// [0,0,64,0]
// 1
console.log(productExceptSelf(b));