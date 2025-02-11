


function maskEmail(email) {

    let findtheadd = email.indexOf("@");
    let result = email.slice(findtheadd - 1);
    let charat = email.charAt(0);
    let domain = email.slice(1, findtheadd);
    let maskL = domain.length;
    let mask = "*";
    let repeating = mask.repeat(maskL - 1);
    let replaced = domain.replace(domain, repeating);
    return charat + replaced + result;
}
let email = "apple.pie@example.com";
console.log(maskEmail(email));

email = "freecodecamp@example.com";
console.log(maskEmail(email));

