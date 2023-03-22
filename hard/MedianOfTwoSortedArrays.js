var findMedianSortedArrays = function (nums1, nums2) {
  const arr = [...nums1, ...nums2];

  const sortedArr = arr.sort((a, b) => a - b);

  if (sortedArr.length % 2) {
    console.log(sortedArr);
    console.log(sortedArr.length / 2);
    return sortedArr[Math.floor(sortedArr.length / 2)];
  }

  const bottomMedian = sortedArr[sortedArr.length / 2 - 1];
  const topMedian = sortedArr[sortedArr.length / 2];

  console.log(bottomMedian);
  console.log(topMedian);

  return (bottomMedian + topMedian) / 2;
};
