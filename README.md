<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basic Calculator</title>
    <link rel="stylesheet" href="cal.css">
</head>
<body>
    <div class="calculator">
        <div id="display" class="display">0</div>
        <div class="buttons">
            <button class="btn" data-value="7">7</button>
            <button class="btn" data-value="8">8</button>
            <button class="btn" data-value="9">9</button>
            <button class="btn operator" data-value="/">/</button>
            <button class="btn" data-value="4">4</button>
            <button class="btn" data-value="5">5</button>
            <button class="btn" data-value="6">6</button>
            <button class="btn operator" data-value="*">*</button>
            <button class="btn" data-value="1">1</button>
            <button class="btn" data-value="2">2</button>
            <button class="btn" data-value="3">3</button>
            <button class="btn operator" data-value="-">-</button>
            <button class="btn" data-value="0">0</button>
            <button class="btn" data-value=".">.</button>
            <button class="btn operator" data-value="+">+</button>
            <button class="btn operator" data-value="=">=</button>
            <button class="btn operator" data-value="C">C</button>
        </div>
    </div>
    <script src="cal.js"></script>
</body>
</html>
 body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: black;
            margin: 0;
            font-family: Arial, sans-serif;
        }

        .calculator {
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .display {
            font-size: 2em;
            text-align: right;
            margin-bottom: 10px;
            background: black;
            color: white;
            padding: 10px;
            border-radius: 4px;
        }

        .buttons {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
        }

        .btn {
            padding: 20px;
            font-size: 1.5em;
            background: grey;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        .btn.operator {
            background: orange;
            color: white;
        }
