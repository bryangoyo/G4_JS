async function getCountries() {
    console.log("getCountries")
    let results = await fetch('https://countries.trevorblades.com', {
      method: 'POST',
  
      headers: {
        "Content-Type": "application/json"
      },
  
      body: JSON.stringify({
        query: `query getCountries {
          countries{
           name
           capital
          }
        }`
      })
    })
    let countries = await results.json();
    console.log(countries.data)

    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }    

let randomNumber;
let randomcountry ;
let hola = [];

// FOR PARA HACER UN PUSH A UN ARRAY DE TRES PAISES CON SUS CAPITAL GENERADOS ALEATORIAMENTE
for (let x = 0; x < 3; x++){
    let iiii = Math.floor(Math.random() * countries.data.countries.length);
    let hhhh = countries.data.countries[iiii]; // PAIS/CAPITAL ---- {NAME: HOLANDA, CAPITAL: HOLANDA}
    hola.push(hhhh);
}
    let valorArray = getRandomInt(3); // 0
    
    let choosenPais = hola[valorArray].name; //ESPAÑA
    let choosenCapital = hola[valorArray].capital; //MADRID

  //Pais y Capital Respuesta Correcta
    console.log(hola[valorArray].name);
    console.log(hola[valorArray].capital);

document.getElementById("eastereggQuestion").innerHTML = "What is the capital of "+ "<strong>" + choosenPais + "</strong>";

// FOR PARA CREAR LOS INPUTS CON LAS CAPITALES DEL ARRAY
  
for (let x = 0; x < hola.length; x++){
    console.log(hola[x].name);

    let varvar = document.createElement("input");
    varvar.type = "radio";
    varvar.value = hola[x].capital;

    let label = document.createElement('label')
    label.innerText = hola[x].capital; 

    let container = document.getElementById('eastereggRespuestas');
    container.appendChild(varvar);
    container.appendChild(label);
}
console.log(hola);

// TENGO EL PAIS Y LA CAPITAL SELECCINADA Y COMPRARLA CON LA SELECCION DEL INPUT SELECCIONADO  EVENTO

}
getCountries()