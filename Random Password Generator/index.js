function generatePassword() {
    
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "012334567890";
    const symbolChars = "!@#$%^&*()_+-=/<>?{}[].;:";

    let allowedChars = "";
    let password = "";

    if (document.getElementById("includeLowercase").checked)
        allowedChars += lowercaseChars;
    if (document.getElementById("includeUppercase").checked)
        allowedChars += uppercaseChars;
    if (document.getElementById("includeNumbers").checked)
        allowedChars += numberChars;
    if (document.getElementById("includeSymbols").checked)
        allowedChars += symbolChars;

    if (allowedChars === "") {
        alert("Please select at least one character type.");
        return;
    }

    const length = parseInt(document.getElementById("length").value, 10);

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    document.getElementById("password").value = password;
}
