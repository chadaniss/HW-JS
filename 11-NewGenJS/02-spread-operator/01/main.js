const nums1 = [1, -2, 3, 4];
const nums2 = [8, 3, -8, 1];

const mixArr = [5,...nums1,-6,-1,...nums2] //?
for(let mix of mixArr){
    return mix += mix; //?
}
