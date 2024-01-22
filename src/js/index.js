window.addEventListener("DOMContentLoaded", () => {
    const buttonsNumber = document.querySelectorAll("p"),
        input = document.getElementById("#inp"),
        inp2 = document.getElementById("#inp2"),
        text = document.getElementById("#text"),
        buttonText = document.querySelectorAll("span"),
        result = document.querySelector(".result"),
        ac = document.getElementById("#ac"),
        del = document.getElementById("#del");

    function numbers(dtnArr) {
        dtnArr.forEach((btn) => {
            btn.addEventListener("click", () => {
                if (text.value == "" && input.placeholder.length < 10) {
                    input.placeholder += btn.innerText;
                    cleanNull(input);
                } else if (text.value !== "" && inp2.placeholder.length < 10) {
                    inp2.placeholder += btn.innerText;
                    cleanNull(inp2);
                }
            });
        });
    }
    numbers(buttonsNumber);

    function symbol(btnSymbArr) {
        btnSymbArr.forEach((btnSymb) => {
            btnSymb.addEventListener("click", () => {
                text.value = btnSymb.innerText;
            });
        });
    }
    symbol(buttonText);

    function cleanNull(inp) {
        let b = Array.from(inp.placeholder);
        if (b[0] == "0") {
            if (b[1] == ".") {
            } else {
                b.splice(0, 1);
                inp.placeholder = b.join("");
            }
        }
    }
    result.addEventListener("click", () => {
        let n = Array.from(input.placeholder);
        let m = Array.from(inp2.placeholder);
        if (n[1] == "." || m[1] == ".") {
            b();
        } else {
            c();
        }
    });
    function b() {
        switch (text.value) {
            case "/":
                input.placeholder = (+input.placeholder / +inp2.placeholder).toFixed(2);
                text.value = "";
                inp2.placeholder = "0";

                break;
            case "*":
                input.placeholder = (+input.placeholder * +inp2.placeholder).toFixed(2);
                text.value = "";
                inp2.placeholder = "0";
                break;
            case "-":
                input.placeholder = (+input.placeholder - +inp2.placeholder).toFixed(1);
                text.value = "";
                inp2.placeholder = "0";
                break;
            case "+":
                input.placeholder = (+input.placeholder + +inp2.placeholder).toFixed(1);
                text.value = "";
                inp2.placeholder = "0";
                break;
        }
    }
    function c() {
        switch (text.value) {
            case "/":
                input.placeholder = +input.placeholder / +inp2.placeholder;
                text.value = "";
                inp2.placeholder = "0";

                break;
            case "*":
                input.placeholder = +input.placeholder * +inp2.placeholder;
                text.value = "";
                inp2.placeholder = "0";
                break;
            case "-":
                input.placeholder = +input.placeholder - +inp2.placeholder;
                text.value = "";
                inp2.placeholder = "0";
                break;
            case "+":
                input.placeholder = +input.placeholder + +inp2.placeholder;
                text.value = "";
                inp2.placeholder = "0";
                break;
        }
    }

    ac.addEventListener("click", () => {
        input.placeholder = "0";
        text.value = "";
        inp2.placeholder = "0";
    });
    del.addEventListener("click", () => {
        if (input.placeholder !== "") {
            delNumber(input);
        } else if (inp2.placeholder !== "") {
            delNumber(inp2);
        }
    });
    function delNumber(globalinp) {
        if (text.value == "") {
            let d = globalinp.placeholder.split("");
            d.splice(d.length - 1, 1);
            globalinp.placeholder = d.join("");
        } else if (text.value !== "") {
            let b = inp2.placeholder.split("");
            b.splice(b.length - 1, 1);
            inp2.placeholder = b.join("");

            if (inp2.placeholder == "") {
                text.value = "";
            }
        }
    }
});
