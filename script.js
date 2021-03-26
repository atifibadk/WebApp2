import data from "./data.js";


const buildPlayerCard = (player) => {
    const div = document.createElement("div")
    const h4 = document.createElement("h4")
    const a = document.createElement("a")
    const img = document.createElement("img")

    const body = document.querySelector('body')

    body.append(div)
    h4.append(a)
    div.append(h4)
    div.append(img)

    div.setAttribute('class','card')

    a.innerHTML = player.name
    a.setAttribute('href',player.info)
    img.setAttribute('src',player.pic)

}

data.forEach(player => buildPlayerCard(player))






