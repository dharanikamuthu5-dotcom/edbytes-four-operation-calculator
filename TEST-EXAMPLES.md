# Five test examples

Use these examples to verify the calculator in your browser.

| # | First number | Operation | Second number | Expected result |
|---|---:|---|---:|---:|
| 1 | 12 | Add (+) | 8 | 20 |
| 2 | 15 | Subtract (-) | 6 | 9 |
| 3 | 7 | Multiply (×) | 4 | 28 |
| 4 | 24 | Divide (÷) | 6 | 4 |
| 5 | 10 | Divide (÷) | 0 | Error message: Cannot divide by zero |

Additional validation: leave either input blank and click an operation. The app should ask you to enter both numbers.

# What I changed

I added separate JavaScript functions for addition, subtraction, multiplication and division. I used a switch statement to select the operation. I also added input validation and a clear error message for division by zero.

# What I learned

I learned how to read values from HTML input fields, convert them into numbers, use JavaScript functions and event listeners, and handle invalid input safely without using `eval()`.
