let counter = 0;

function tickUp() {
    counter = counter + 1;
    let counterSpan = document.getElementById("counter");
    counterSpan.innerText = counter;
}

function tickDown() {
    counter = counter - 1;
    let counterSpan = document.getElementById("counter");
    counterSpan.innerText = counter;
}

function runForLoop() {
    let result = "";
    for(let i = 0; i <= counter; i++) {
        result = result + i + " ";
    }
    let forLoopSpan = document.getElementById("forLoopResult");
    forLoopSpan.innerText = result;
}

function showOddNumbers() {
    let result = "";
    for(let i = 1; i <= counter; i++) {
        if(i % 2 == 1) {
            result = result + i + " ";
        }
    }
    let oddSpan = document.getElementById("oddNumberResult");
    oddSpan.innerText = result;
}

function addMultiplesToArray() {
    let multiplesArray = [];
    if(counter >= 5) {
        for(let i = counter; i >= 5; i = i - 5) {
            multiplesArray.push(i);
        }
    }
    console.log(multiplesArray);
}

function printCarObject() {
    let type = document.getElementById("carType").value;
    let mpg = document.getElementById("carMPG").value;
    let color = document.getElementById("carColor").value;
    
    let car = {
        type: type,
        mpg: mpg,
        color: color
    };
    
    console.log(car);
}

function loadCar(carNumber) {
    let car;
    
    if(carNumber == 1) {
        car = carObject1;
    }
    else if(carNumber == 2) {
        car = carObject2;
    }
    else if(carNumber == 3) {
        car = carObject3;
    }
    
    document.getElementById("carType").value = car.cType;
    document.getElementById("carMPG").value = car.cMPG;
    document.getElementById("carColor").value = car.cColor;
}

function changeColor(colorNumber) {
    let paragraph = document.getElementById("styleParagraph");
    
    if(colorNumber == 1) {
        paragraph.style.color = "red";
    }
    else if(colorNumber == 2) {
        paragraph.style.color = "green";
    }
    else if(colorNumber == 3) {
        paragraph.style.color = "blue";
    }
}
