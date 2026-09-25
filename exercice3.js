function getDomain(email) {
    let index = 0;
    while (index < email.length && email[index] != "@")
        index++

    if (index === email.length)
        return ""

    let domain = ""

    for (let i = index + 1; i < email.length; i++)
        domain += email[i]

    return domain
}
console.log(getDomain("yassine.bahajou@gmail.com"))
