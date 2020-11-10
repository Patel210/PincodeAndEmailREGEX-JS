function validatePinCode(pinCode) {
    let pinRegex = RegExp('^[1-9][0-9]{5}$');
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