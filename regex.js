function validatePinCode(pinCode) {
    let pinRegex = RegExp('^[1-9][0-9]{2}[\\s]{0,1}[0-9]{3}$');
    if (pinRegex.test(pinCode)) {
        console.log("Hurray! Valid Pin Code");
    } else {
        console.log("Invalid Pin Code. Must be a six digit number!");
    }
}

let pinCode = 120987;
validatePinCode(pinCode);
pinCode = 012456;
validatePinCode(pinCode);
pinCode = "A400088";
validatePinCode(pinCode);
pinCode = "400088B";
validatePinCode(pinCode);
pinCode = "400 088";
validatePinCode(pinCode);