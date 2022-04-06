//Chiedi all’utente il suo nome
const firstName = prompt("Qual è il tuo nome?");
//poi chiedi il suo cognome
const lastName = prompt("Qual è il tuo cognome?");
//poi chiedi il suo colore preferito
const color = prompt("Qual è il tuo colore preferito?");
//Infine scrivi sulla pagina nomecognomecolorepreferito21
document.getElementById("my-title").innerHTML = `${firstName}${lastName}${color}21`;
//or
// document.getElementById("my-title").innerHTML = firstName + lastName + color + 21;
