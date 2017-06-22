namespace Eisdealer {
    window.addEventListener("load", init);
    let becher: HTMLElement;
    let iceCream: HTMLElement;
    let sosse: HTMLElement;
    let topping: HTMLElement;
    let overview: HTMLElement;
    let button: HTMLElement;

    let flavors: string[] = ["snowflake", "fairy", "leprechaun", "rainbow",
        "marshmallow", "licorice", "pumpkin", "elderberry",
        "hazelnut", "red apple", "ivory", "unicorn", "mermaid"];

    let sauces: string[] = ["unicorn tears", "raindrops", "melted rainbow", "chocolate river", "whipped cream"];

    let toppings: string[] = ["sprinkles", "pot of gold", "fairy dust", "poppy seeds", "glitter"];

    let cone: string[] = ["Heavenly wafer", "Cauldron"];


    let inputSauces: HTMLInputElement[] = [];
    let inputFlavors: HTMLInputElement[] = [];
    let inputToppings: HTMLInputElement[] = [];
    let inputCone: HTMLInputElement[] = [];




    function init(): void {
        iceCream = document.getElementById("flavors");
        iceCream.addEventListener("change", change);

        sosse = document.getElementById("sauces");
        sosse.addEventListener("change", change);

        topping = document.getElementById("toppings");
        topping.addEventListener("change", change);

        becher = document.getElementById("cone");
        becher.addEventListener("change", change);

        overview = document.getElementById("overview");

        button = document.getElementById("sendOrder");
        button.addEventListener("click", checkOrder);

        createFlavors();
        createSauces();
        createToppings();
        createCone();
    }



    function createFlavors(): void {
        for (let i: number = 0; i < flavors.length; i++) {
            createInput(flavors[i]);
        }
    }

    function createInput(_flavors: string): void {
        let label: HTMLLabelElement = document.createElement("label");
        let input: HTMLInputElement = document.createElement("input");
        label.innerText = _flavors;
        label.appendChild(input);
        input.type = "number";
        input.min = "0";
        input.max = "10";
        input.value = "0";
        input.name = _flavors;
        label.id = _flavors;
        iceCream.appendChild(label);
        inputFlavors.push(input);
    }


    function createSauces(): void {
        for (let i: number = 0; i < sauces.length; i++) {
            createCheckbox(sauces[i]);
        }
    }
    function createCheckbox(_Checkboxen: string): void {
        let label: HTMLLabelElement = document.createElement("label");
        let input: HTMLInputElement = document.createElement("input");
        label.innerText = _Checkboxen;
        label.appendChild(input);
        input.type = "checkbox";
        input.name = _Checkboxen;
        label.id = _Checkboxen;
        sosse.appendChild(label);
        inputSauces.push(input);
    }

    function createToppings(): void {
        for (let i: number = 0; i < toppings.length; i++) {
            createCheckboxT(toppings[i]);
        }
    }
    function createCheckboxT(_Checkboxen: string): void {
        let label: HTMLLabelElement = document.createElement("label");
        let input: HTMLInputElement = document.createElement("input");
        label.innerText = _Checkboxen;
        label.appendChild(input);
        input.type = "checkbox";
        input.name = _Checkboxen;
        label.id = _Checkboxen;
        topping.appendChild(label);
        inputToppings.push(input);
    }


    function createCone(): void {
        for (let i: number = 0; i < cone.length; i++) {
            createRadio(cone[i]);
        }
    }
    function createRadio(_Radiobutton: string): void {
        let label: HTMLLabelElement = document.createElement("label");
        let input: HTMLInputElement = document.createElement("input");
        label.innerText = _Radiobutton;
        label.appendChild(input);
        input.type = "radio";
        input.name = "Cone";
        label.id = _Radiobutton;
        becher.appendChild(label);
        inputCone.push(input);
    }



    function changeDelivery(_sum: number): void {
        let overview: HTMLElement = document.getElementById("orderOverview");
        overview.innerText = "";

        for (let i: number = 0; i < inputFlavors.length; i++) {
            if (parseInt(inputFlavors[i].value) > 0) {
                overview.innerText += flavors[i] + " " + (parseInt(inputFlavors[i].value) * 1) + "\n";
            }
        }

        for (let i: number = 0; i < inputSauces.length; i++) {
            if (inputSauces[i].checked) {
                overview.innerText += sauces[i] + "\n";
            }
        }

        for (let i: number = 0; i < inputToppings.length; i++) {
            if (inputToppings[i].checked) {
                overview.innerText += toppings[i] + "\n";
            }
        }

        for (let i: number = 0; i < inputCone.length; i++) {
            if (inputCone[i].checked) {
                overview.innerText += cone[i] + "\n";
            }
        }


        let sumHtml: HTMLElement = document.getElementById("sum");
        sumHtml.innerText = _sum.toString() + " Euro";
    }


    function change(): void {
        let sum: number = 0;
        for (let i: number = 0; i < inputFlavors.length; i++) {
            sum += parseInt(inputFlavors[i].value);
        }
        for (let i: number = 0; i < inputSauces.length; i++) {
            if (inputSauces[i].checked)
                sum += 0.20;
        }

        for (let i: number = 0; i < inputToppings.length; i++) {
            if (inputToppings[i].checked)
                sum += 0.50;
        }
        changeDelivery(sum);
    }



    function checkOrder(): void {
        let check: string[] = ["Bitte folgende Eingaben ueberpruefen! \n"];


        let surname: HTMLInputElement = <HTMLInputElement>document.getElementById("surname");
        if (surname.validity.valid == false) {
            check.push("Surname \n");
            surname.style.backgroundColor = "#FA5858";
        }
        else {
            surname.style.backgroundColor = "white";
        }


        let name: HTMLInputElement = <HTMLInputElement>document.getElementById("name");
        if (name.validity.valid == false) {
            check.push("Name \n");
            name.style.backgroundColor = "#FA5858";
        }
        else {
            name.style.backgroundColor = "white";
        }


        let street: HTMLInputElement = <HTMLInputElement>document.getElementById("street");
        if (street.validity.valid == false) {
            check.push("Street \n");
            street.style.backgroundColor = "#FA5858";
        }
        else {
            street.style.backgroundColor = "white";
        }


        let cityPostcode: HTMLInputElement = <HTMLInputElement>document.getElementById("city,postcode");
        if (cityPostcode.validity.valid == false) {
            check.push("City, Postcode \n");
            cityPostcode.style.backgroundColor = "#FA5858";
        }
        else {
            cityPostcode.style.backgroundColor = "white";
        }


        let mail: HTMLInputElement = <HTMLInputElement>document.getElementById("Email");
        if (mail.validity.valid == false) {
            check.push("Email \n");
            mail.style.backgroundColor = "#FA5858";
        }
        else {
            mail.style.backgroundColor = "white";
        }


        let flavors: number = 0;
        for (let i: number = 0; i < inputFlavors.length; i++) {
            if (parseInt(inputFlavors[i].value) > 0)
                flavors += 1;
        }
        if (flavors == 0)
            check.push("Flavors\n");


        let sauces: number = 0;
        for (let i: number = 0; i < inputSauces.length; i++) {
            if (inputSauces[i].checked)
                sauces += 1;
        }
        if (sauces == 0)
            check.push("Sauces \n");


        let toppings: number = 0;
        for (let i: number = 0; i < inputToppings.length; i++) {
            if (inputToppings[i].checked)
                toppings += 1;
        }
        if (toppings == 0)
            check.push("Toppings \n");


        let cone: number = 0;
        for (let i: number = 0; i < inputCone.length; i++) {
            if (inputCone[i].checked)
                cone += 1;
        }
        if (cone == 0)
            check.push("Cone");


        if (check.length > 1) {
            alert(check.join(""));
        }

        else {
            alert("Thank you for ordering! :)");
            (<HTMLFormElement>document.getElementById("formeis")).submit();
            
        }
    }
}