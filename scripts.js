let decTally = 0; // tally for decimals if the value is one that means we only have one decimal, 
                // if we have one decimal and no operator we can not allow the user to do that. only if the tally is 0 can we add a decimal.
            /* Decimal
                if decimal input exists:
                    only once prior to operator function and only once after
                    ex: 12.3 +/*- */

//for change
let op = ''
bracketTally = 0;

function clearText() {
    document.getElementById("display-2").value = " ";
    decTally = 0;
}

function updateTextbox(btn){
    if (btn == '.'){ 
        if(decTally == 0){
            document.getElementById("display-2").value += btn;
            decTally += 1;
        }
    } 
    else if (btn == '+' || btn == '-' || btn == '/' || btn == '*'){ //
        op = btn; //save operator
        if(decTally > 0){ //check decimal tally. If it's greater than 1 set it back to 0 since we can have another decimal after the operator. 
            decTally = 0;
        }
        document.getElementById("display-2").value += btn;
    }
    else if(btn == 'b'){
        if(bracketTally % 2 == 0){
            document.getElementById("display-2").value += '(';
            bracketTally+=1;
        }
        else{
            document.getElementById("display-2").value += ')';
            bracketTally+=1;
        }
    }
    else{
        document.getElementById("display-2").value += btn;
    }
    
}

function eqResult(){
    toSolve = document.getElementById("display-2").value
    //document.getElementById("display-2").value += value;

    if (toSolve.includes('%')){
        splitIt = toSolve.split(op);
        console.log(splitIt);

        num1 = splitIt[0];
        num2 = splitIt[1];

        if (num1.includes('%')){
            num1 = num1.slice(0, -1);
            console.log(num1);
            newNum1 = Number(num1)/100
            num1 = String(newNum1);
            console.log(num1);
        }
        if (num2.includes('%')){
            num2 = num2.slice(0, -1);
            newNum2 = Number(num2)/100
            num2 = String(newNum2);
            console.log(num2);
        }
        toSolve = String(num1)+op+String(num2);
        console.log(toSolve);
        let theResult = eval(toSolve);
        document.getElementById("display-2").value = formatNumber(theResult);

    }
    let theResult = eval(toSolve);
    document.getElementById("display-2").value = formatNumber(theResult);
    
}

function formatNumber(n) {
    const num = Number(n);
    theVal = num.toLocaleString();
    return theVal;

}

// function getPercent(){
//     theNum = document.getElementById("display-2").value;
//     per = Number(theNum)/100;
//     //return per;

// }

function clrOne() {
    delItem = document.getElementById("display-2").value;
    delItem = delItem.slice(0, -1); // store sliced digit
    document.getElementById("display-2").value = delItem; 
}



