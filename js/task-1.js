const list = document.querySelectorAll("li.item")
const result = list.length
console.log(`Number of categories: ${result}`)
list.forEach(item => {
const h2Res = item.querySelector('h2').textContent
const itemRes = item.querySelectorAll(`ul > li`)
console.log(`Category: ${h2Res}`)
console.log(`Elements: ${itemRes.length}`)
})
















