const mass1 = [1]
const mass2 = [2]
const mass3 = [3]
const mass4 = [4]
const mass5 = [5]

const mass = [...mass1, ...mass2, ...mass3, ...mass4, ...mass5]

console.log(mass)

//

const obj = {
    username: 'Lina',
    age: 16,
    last_name: 'Elya',
    full_name: 'Elina',
    country: 'KG'
}

const obj2 = {...obj, city: "Kant", brothers: 1, sisters: "2"}

console.log(obj2)

//
const list = [];

const name = document.querySelector("#name")
const button = document.querySelector("#button")


function render() {
    const MainDiv = document.createElement('div');
    MainDiv.setAttribute("class", "list");
    for(let i = 0; i < list.length; i++ ) {
        const divList = document.createElement('div');
        divList.setAttribute("class", "block");
        const p = document.createElement("p");
        p.innerHTML = list[i].text;
        divList.append(p);
        MainDiv.append(divList);
    }

    const input = document.querySelector(".inner");

    document.querySelector(".list").remove();
    input.append(MainDiv)

}
button.onclick = function() {
    const obj1 = {
        id: list.length,
        text: 'Hello, '+ name.value+"!"
    }
    list.push(obj1);
    render()
}
