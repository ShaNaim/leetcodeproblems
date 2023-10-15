Example 1:

Input: cost = [10,15,20]
Output: 15
Explanation: You will start at index 1.

- Pay 15 and climb two steps to reach the top.
  The total cost is 15.
  Example 2:

Input: cost = [1,100,1,1,1,100,1,1,100,1]
Output: 6
Explanation: You will start at index 0.

- Pay 1 and climb two steps to reach index 2.
- Pay 1 and climb two steps to reach index 4.
- Pay 1 and climb two steps to reach index 6.
- Pay 1 and climb one step to reach index 7.
- Pay 1 and climb two steps to reach index 9.
- Pay 1 and climb one step to reach the top.
  The total cost is 6.

[1,2,4,5,6,7,8,0,1,2,3,0,4,3,2,1]

check index 0 and 0 + 1
choose the smaller value 'sm'
add the value to total

check sm + 1 and sm + 2
