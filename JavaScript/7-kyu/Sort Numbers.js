solution = nums => nums === null && !Array.isArray(nums) ? [] : nums.sort((acc, cur) => acc - cur)
