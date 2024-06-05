//Desafio do Felipão - Criar herói e apresentar o nível de experiência conforme seu XP.

//Declara a constante nomeHerói
const nomeHeroi = "Marcelo"

//Declara a variável xpHerói
let xpHeroi = 2300

//Declara a variável nivelExperience do herói
let nivelExperience

switch (true) {
    case xpHeroi >= 0 && xpHeroi <= 1000:
        nivelExperience = "Ferro";
        break;
    
    case xpHeroi >= 1001 && xpHeroi <= 2000:
        nivelExperience = "Bronze";
        break;

    case xpHeroi >= 2001 && xpHeroi <= 5000:
        nivelExperience = "Prata";
        break;

    case xpHeroi >= 5001 && xpHeroi <= 7000:
        nivelExperience = "Ouro";
        break;

    case xpHeroi >= 7001 && xpHeroi <= 8000:
        nivelExperience = "Platina";
        break;

    case xpHeroi >= 8001 && xpHeroi <= 9000:
        nivelExperience = "Ascendente";
        break;

    case xpHeroi >= 9001 && xpHeroi <= 10000:
        nivelExperience = "Imortal";
        break;

    case xpHeroi >= 10001:
        nivelExperience = "Radiante";
        break;

    default:
        nivelExperience = "Erro"

} 

//saida
console.log ("O herói de nome " + nomeHeroi + " está no nível de " + nivelExperience)

