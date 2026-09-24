let fullname = "Bouchra Eddif"
function getInitials(fullname) {
    let initial = fullname[0]

    for (let i = 0; i < fullname.length; i++){
        if (fullname[i] === " ")
            initial += fullname[i + 1]
        }
    return initial
}
console.log(fullname)