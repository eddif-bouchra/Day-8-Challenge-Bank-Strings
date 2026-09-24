let firstName = "Bouchra"
let lastName = "Eddif"
function generateUsername(firstName, lastName) {
    let v = firstName + "." + lastName;
    return v.toLocaleLowerCase()
}
console.log(generateUsername(firstName, lastName));
