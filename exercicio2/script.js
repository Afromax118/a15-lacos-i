// # Exercício 2

// Crie um programa que peça um input de número para o usuário. Com este número, o código deve imprimir a **tabuada** do número, de 1 a 10.

// Exemplo com entrada **`7`**:
// ```jsx
// 7
// 14
// 21
// 28
// 35
// 42
// 49
// 56
// 63
// 70
// ```

let num = prompt("Qual tabuada voce quer visualizar? Digite um número de 1 a 10.");

for(let i = 0; i <= 10;i++){
    tabuada = num*i
    console.log(tabuada)
}
console.log("ESTÁ FELIZ AGORA?");
alert("Está feliz agora?")
