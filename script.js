// características das plantas

let euphorbia = {sol: "high", water: "rarely", preço: "25", toxicity: "false"}

let succculent = {sol: "high", water: "rarely", preço: "30", toxicity: "false"}

let bunny = {sol: "high", water: "rarely", preço: "20", toxicity: "false"}

let ficus = {sol: "high", water: "regularly", preço: "30", toxicity: "false"}

let bamboo = {sol: "low", water: "regularly", preço: "15", toxicity: "false"}

let ponytail = {sol: "low", water: "regularly", preço: "50", toxicity: "false"}

let pilea = {sol: "no", water: "regularly", preço: "50", toxicity: "true"}

let calathea = {sol: "no", water: "daily", preço: "50", toxicity: "true"}

let monstera = {sol: "no", water: "daily", preço: "50", toxicity: "true"}

let plantas = [euphorbia, succculent, bunny, ficus, bamboo, ponytail, pilea, calathea, monstera]

// ids em html

let sel_sunlight = document.getElementById("sunlight")
let sel_water = document.getElementById("water")
let sel_pets = document.getElementById("pets")

let sec_resultados = document.getElementById("resultados")
let sec_produtos = document.getElementById("produtos")
let pular = document.getElementById("pular")

let euphorbia_id = document.getElementById("euphorbia_id")
let succculent_id = document.getElementById("succulent_id")
let bunny_id = document.getElementById("bunny_id")
let ficus_id = document.getElementById("ficus_id")
let bamboo_id = document.getElementById("bamboo_id")
let ponytail_id = document.getElementById("ponytail_id")
let pilea_id = document.getElementById("pilea_id")
let calathea_id = document.getElementById("calathea_id")
let monstera_id = document.getElementById("monstera_id")

let plantas_2 = [euphorbia_id, succculent_id, bunny_id, ficus_id, bamboo_id, ponytail_id, pilea_id, calathea_id, monstera_id]

function verifica_sol(sun) {
    sec_resultados.style.display = "none"
    sec_produtos.style.display = "block"
    pular.style.display = "block"

    sel_water.options[0].selected = "true"
    sel_pets.options[0].selected = "true"

    for (i = 0; i < 9; i++) {
        if (plantas_2[i].style.display = "inline-block") {
            plantas_2[i].style.display = "none"
        } 
    }

    for (i = 0; i < 9; i++) {
        if (plantas[i]["sol"] == sun) {
            plantas_2[i].style.display = "inline-block"
        } 
    }
}

function verifica_agua(water) {
    sec_resultados.style.display = "none"
    sec_produtos.style.display = "block"
    pular.style.display = "none"

    sel_sunlight.options[0].selected = "true"
    sel_pets.options[0].selected = "true"

    for (i = 0; i < 9; i++) {
        if (plantas_2[i].style.display = "inline-block") {
            plantas_2[i].style.display = "none"
        } 
    }

    for (i = 0; i < 9; i++) {
        if (plantas[i]["water"] == water) {
            plantas_2[i].style.display = "inline-block"
        }
    }
}

function verifica_pets(pets) {
    sec_resultados.style.display = "none"
    sec_produtos.style.display = "block"
    pular.style.display = "block"

    sel_sunlight.options[0].selected = "true"
    sel_water.options[0].selected = "true"

    for (i = 0; i < 9; i++) {
        if (plantas_2[i].style.display = "inline-block") {
            plantas_2[i].style.display = "none"
        } 
    }

    for (i = 0; i < 9; i++) {
        if (plantas[i]["toxicity"] != pets) {
            plantas_2[i].style.display = "inline-block"
        }
    }
}