// características das plantas

let euphorbia = {nome: "Euphorbia eritrea", sol: "high", water: "rarely", preço: "25", toxicity: "false"}

let succculent = {nome: "Succculent Bowl", sol: "high", water: "rarely", preço: "30", toxicity: "false"}

let bunny = {nome: "Bunny ears cacti", sol: "high", water: "rarely", preço: "20", toxicity: "false"}

let ficus = {nome: "Ficus lyrata", sol: "high", water: "regulary", preço: "30", toxicity: "false"}

let bamboo = {nome: "Bamboo", sol: "low", water: "regulary", preço: "15", toxicity: "false"}

let ponytail = {nome: "Ponytail Palm", sol: "low", water: "regulary", preço: "50", toxicity: "false"}

let pilea = {nome: "Pilea peperomioides", sol: "no", water: "regulary", preço: "50", toxicity: "true"}

let calathea = {nome: "Calathea triostar", sol: "no", water: "daily", preço: "50", toxicity: "true"}

let monstera = {nome: "Monstera deliciosa", sol: "no", water: "daily", preço: "50", toxicity: "true"}

let plantas = [euphorbia, succculent, bunny, ficus, bamboo, ponytail, pilea, calathea, monstera]

// html

let sec_resultados = document.getElementById("resultados")
let sec_produtos = document.getElementById("produtos")

function verifica_planta(sun, water, pet) {
    sec_resultados.style.display = "none"
    sec_produtos.style.display = "block"

    for (i = 0; i < 9; i++) {
        if (plantas[i]["sol"] == sun) {
            console.log(plantas[i]["nome"])
        } else {
            console.log("Não bate com a pesquisa")
        }

        if (plantas[i]["water"] == water) {
            console.log(plantas[i]["water"])
        } else {
            console.log("Não bate com a pesquisa")
        }

        if (plantas[i]["pet"] == pet) {
            console.log(plantas[i]["pet"])
        } else {
            console.log("Não bate com a pesquisa")
        }
    }
}