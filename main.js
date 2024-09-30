// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.



//Solution


function solution(nums){
    // Check if nums is null or empty, return an empty array if true

  
  if (!nums || nums.length === 0){

      return [];
    
    } else {
        // Sort the array in ascending order

      return nums.sort((a,b) => a -b)
      
    }
    

}

// Test cases
console.log(solution([1, 2, 10, 50, 5])); // should return [1, 2, 5, 10, 50]
console.log(solution(null)); // should return []
console.log(solution([])); // should return []