const div = document.createElement("div")
const h4 = document.createElement("h4")
const a = document.createElement("a")
const img = document.createElement("img")

const body = document.querySelector('body')

body.append(div)
h4.append(a)
div.append(h4)
div.append(img)

a.innerHTML="First Hairstyle"
