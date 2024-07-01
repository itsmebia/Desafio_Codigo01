// SETUP DAS VARIAVEIS
let NomeHeroi;
let qtdXP;

// EXEMPLO PARA TESTE
NomeHeroi = 'Bia';
qtdXP = 1050;

if (qtdXP < 1000) {
    console.log(`O Herói de nome ${NomeHeroi} está no nível Ferro`);
  } else if (qtdXP >= 1001 && qtdXP <= 2000) {
    console.log(`O Herói de nome ${NomeHeroi} está no nível Bronze`);
  } else if (qtdXP >= 2001 && qtdXP <= 5000) {
    console.log(`O Herói de nome ${NomeHeroi} está no nível Prata`);
  } else if (qtdXP >= 5001 && qtdXP <= 7000) {
    console.log(`O Herói de nome ${NomeHeroi} está no nível Ouro`);
  } else if (qtdXP >= 7001 && qtdXP <= 8000) {
    console.log(`O Herói de nome ${NomeHeroi} está no nível Platina`);
  } else if (qtdXP >= 8001 && qtdXP <= 9000) {
    console.log(`O Herói de nome ${NomeHeroi} está no nível Ascendente`);
  } else if (qtdXP >= 9001 && qtdXP <= 10000) {
    console.log(`O Herói de nome ${NomeHeroi} está no nível Imortal`);
  } else if (qtdXP >= 10001) {
    console.log(`O Herói de nome ${NomeHeroi} está no nível Radiante`);
  }

