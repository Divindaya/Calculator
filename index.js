let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button => {
    // handle clicked buttons and their subsequent consequences
    button.addEventListener('click', (e) => {
        switch(e.target.innerText) {
            case 'CLR':
                display.innerText = '';
                break;
            case '←':
                if (display.innerText) {
                display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case '=':
                try {
                display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Nope! Let\'s try something different...";
                }
                console.log(e)
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
})