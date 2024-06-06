//Desafio do Felipão - Criar herói e apresentar o nível de experiência conforme seu XP.

//Declara a constante nomeHerói
const nomeHeroi = "Marcelo"

//Declara a variável xpHerói
let xpHeroi = 9005

//Declara a variável nivelExperience do herói
let nivelExperience = ""


if (xpHeroi >= 0 && xpHeroi <= 1000){
    nivelExperience = "Ferro"
} else if (xpHeroi >= 1001 && xpHeroi <= 2000){
    nivelExperience = "Bronze";
} else if (xpHeroi >= 2001 && xpHeroi <= 5000){
    nivelExperience = "Prata";
} else if (xpHeroi >= 5001 && xpHeroi <= 7000){
    nivelExperience = "Ouro";
} else if (xpHeroi >= 7001 && xpHeroi <= 8000){
    nivelExperience = "Platina";
} else if (xpHeroi >= 8001 && xpHeroi <= 9000){
    nivelExperience = "Ascendente";
} else if (xpHeroi >= 9001 && xpHeroi <= 10000){
    nivelExperience = "Imortal";
} else if (xpHeroi >= 10001){
    nivelExperience = "Radiante";
} else nivelExperience = "Erro"

//saida
console.log ("O herói de nome " + nomeHeroi + " está no nível de " + nivelExperience)

