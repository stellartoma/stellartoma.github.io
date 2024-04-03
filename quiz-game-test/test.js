var subarraysWithKDistinct = function (nums, k) {
    let subarrays = [];
    for (let i = 0; i < nums.length; i++) {
        for (let n = 0; n < nums.length; n++) {
            let sliced = nums.slice(i, nums.length - n);
            if (sliced.length > 1) {
                if ([...new Set(sliced)].length === k) {
                    console.log(sliced);
                    subarrays.push(sliced);
                }
            }
        }
    }
    return subarrays.length;
};

console.log(subarraysWithKDistinct([1, 2, 1, 3, 4], 3));
