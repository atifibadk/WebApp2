/*I don't know but I can't use type:"module" with require(), so can't 'data' move it in seperate file*/
const data = [
    {
      id: 2,
      pic:
        "https://resources.premierleague.com/premierleague/photo/2020/10/21/131abbf9-cfd4-45ab-a2b3-032b3faf918e/Sergio-Aguero.jpg",
      name: "Sergio Aguero",
      Role: "Forward",
      info:
        "https://en.wikipedia.org/wiki/Sergio_Ag%C3%BCero"
    },
    {
      id: 3,
      pic:
        "https://www.vbetnews.com/wp-content/uploads/2020/04/kdb-close-up-min.jpg",
      name: "Kevin De Bruyne",
      Role: "Mid Fielder",
      info:
        "https://en.wikipedia.org/wiki/Kevin_De_Bruyne"
    },
    {
      id: 4,
      pic:
        "https://cdn.theathletic.com/app/uploads/2020/01/08033254/fernandinho-1024x672.jpg",
      name: "Fernandinho",
      Role: "Mid Fielder",
      info:
        "https://en.wikipedia.org/wiki/Fernandinho_(footballer,_born_May_1985)"
    }
  ];



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



data.forEach(player =>buildPlayerCard(player))





