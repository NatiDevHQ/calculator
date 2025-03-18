
 



# Calculator

An advanced, responsive calculator built using HTML, CSS, and JavaScript. This calculator supports basic arithmetic operations, power calculations, percentage operations, and includes a dark/light theme toggle. The design features a modern look with smooth animations, and it's fully functional with keyboard support.

## Features

- **Arithmetic Operations**: Supports addition, subtraction, multiplication, division, exponentiation, and percentage operations.
- **Clear & Delete**: The calculator allows clearing the display and deleting the last entered character.
- **History**: Displays the calculation history (expression and result).
- **Responsive Design**: The layout is responsive and adapts to different screen sizes.
- **Theme Toggle**: Switch between dark and light mode.
- **Keyboard Support**: Allows keyboard input for numbers, operators, and calculation commands.

## Technologies Used

- **HTML**: Structure and layout of the calculator.
- **CSS**: Styling and responsive design, including dark and light theme support.
- **JavaScript**: Handles logic for calculations, theme toggling, and input handling.

## Demo

You can view a live demo of this calculator by simply opening the `index.html` file in a browser.

## Live at
 live at https://eng-natole.github.io/calculator/
 
## How to Use

1. Open the `index.html` file in any modern web browser.
2. Click on the buttons to input numbers and operators.
3. Use the `=` button to calculate the result.
4. You can also use the keyboard for input:
   - Numeric keys (0-9)
   - Operators (+, -, \*, /, %, ^)
   - `Enter` to calculate, `Backspace` to delete the last character, and `Escape` to clear the display.
5. Toggle between light and dark mode using the sun/moon icon in the top-right corner.

## Functions

- **Basic operations**: `+`, `-`, `×`, `÷`
- **Advanced operations**: Exponentiation (`^`), Percentage (`%`)
- **Clear display**: `C`
- **Delete last character**: `⌫`
- **Equals button**: Calculates the result of the expression.

## Customization

Feel free to modify the colors and appearance by editing the CSS variables in the `:root` section.

```css
:root {
    --primary-color: rgba(255, 255, 255, 0.1);
    --secondary-color: rgba(255, 255, 255, 0.2);
    --accent-color: #e74c3c;
    --equal-color: #2ecc71;
    --text-color: white;
    --button-color: rgba(255, 255, 255, 0.4);
    --backdrop-filter: blur(15px);
}
```

## Contribution

If you'd like to contribute or report issues, feel free to open an issue or pull request.


