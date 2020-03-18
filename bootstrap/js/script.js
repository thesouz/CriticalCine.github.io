
$(document).ready(function () {
    var btnX = true;
    var btnR = 0;
    var btnS = "";
    var btn1 = "";
    var btn2 = "";
    var op = "";
    $("button").click(function () {
        var btn = $(this).val();

        if (btn == "+" || btn == "-" || btn == "*" || btn == "/") {
            btnX = false;
            op = btn;
        } else {
            if (btnX == true) {
                btn1 += btn;
            } else {
                btn2 += btn;
            }
        }
        if (btn == "ce") {
            btnX = true;
            btnR = 0;
            btn1 = "";
            btn2 = "";
            op = "";
        }
        if (btn == "=") {
            switch (op) {
                case "-":
                    btnR = parseInt(btn1) - parseInt(btn2);
                    break;
                case "*":
                    btnR = parseInt(btn1) * parseInt(btn2);
                    break;
                case "/":
                    btnR = parseInt(btn1) / parseInt(btn2);
                    break;
                default: // +
                    btnR = parseInt(btn1) + parseInt(btn2);
                    break;
            }
            $("#display").val(btnR);
            btnX = true;
            btnR = "";
            btn1 = "";
            btn2 = "";
        } else {
            btnS = (btn == "ce") ? "Boa Tarde!" : btn1 + " " + op + " " + btn2;
            $("#display").val(btnS);
        }

    });
});


