Given an integer x, return true if x is a
palindrome
, and false otherwise.

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

Constraints:

-231 <= x <= 231 - 1

Follow up: Could you solve it without converting the integer to a string?

Solve Brainstrom.

given array on length n 1 2 2 3 4 4 3 2 2 1 => l = 9

0 9-1
1 9-2
2 9-3
3 9-4
4 9-5
break

check if 0 or n - 1 is same
if same continue
