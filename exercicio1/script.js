// # Exercício 1

// Utilizando o laço `while`, escreva um código que recebe um `prompt` perguntando se a pessoa deseja comer mais coxinhas. “S” deve representar “sim”, e “N” deve representar “não”. Crie também uma `let conta` para guardar o valor total.

// Toda vez que a resposta for **sim**, o laço deve se repetir, e devemos adicionar R$2.50 ao valor total. Quando a resposta não for **sim**, devemos imprimir o valor total da conta.


let coxinha = prompt("Deseja comer mais coxinhas??\n S - Sim\n N - Não").toLowerCase()
let totalCoxinhas = 0

while(coxinha === 's'){
    totalCoxinhas = totalCoxinhas + 1 
    coxinha = prompt("Só vai comer coxinha mesmo?\n S - Sim\n N - Não").toLowerCase()
        console.log("Você já comeu", totalCoxinhas,"coxinhas", "Chega de coxinha pra você...")
        
}
console.log("Sua conta:",totalCoxinhas*2.5,)

