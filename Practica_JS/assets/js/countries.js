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
let listaTresPaisesCapital = [];

// FOR PARA HACER UN PUSH A UN ARRAY DE TRES PAISES CON SUS CAPITAL GENERADOS ALEATORIAMENTE
for (let x = 0; x < 3; x++){
    let randomNumeroListaPaises = Math.floor(Math.random() * countries.data.countries.length);
    let Pais_Capital = countries.data.countries[randomNumeroListaPaises];
    listaTresPaisesCapital.push(Pais_Capital);
}
    let valorArray = getRandomInt(3);
    
    let choosenPais = listaTresPaisesCapital[valorArray].name; //ESPAÑA
    let choosenCapital = listaTresPaisesCapital[valorArray].capital; //MADRID

  //Pais y Capital Respuesta Correcta
    console.log(listaTresPaisesCapital[valorArray].name);
    console.log(listaTresPaisesCapital[valorArray].capital);

document.getElementById("eastereggQuestion").innerHTML = "What is the capital of "+ "<strong>" + choosenPais + "</strong>";
// FOR PARA CREAR LOS INPUTS CON LAS CAPITALES DEL ARRAY  
for (let x = 0; x < listaTresPaisesCapital.length; x++){
    console.log(listaTresPaisesCapital[x].name);

    let inputEGGCapital = document.createElement("input");
    inputEGGCapital.type = "radio";
    inputEGGCapital.value = listaTresPaisesCapital[x].capital;
    inputEGGCapital.name = "capital";

    let labelEGGCapital = document.createElement('label')
    labelEGGCapital.innerText = (listaTresPaisesCapital[x].capital !== null) ? listaTresPaisesCapital[x].capital : 'No tiene';
    //labelEGGCapital.innerText = listaTresPaisesCapital[x].capital; 

    let container = document.getElementById('eastereggRespuestas');
    container.appendChild(inputEGGCapital);
    container.appendChild(labelEGGCapital);
}
console.log(listaTresPaisesCapital);
 //COMPROBAR CAPITAL RADIO CON CAPITAL SELECCIONADA EN EL ARRAY
    const btn = document.getElementById("submitEasterEgg");        
    const radioButtons = document.querySelectorAll('input[name="capital"]');
        btn.addEventListener("click", () => {
        let selectedCapital;
          for (const radioButton of radioButtons) {
            if (radioButton.checked) {
                selectedCapital = radioButton.value;
                break;
            }
          }
              console.log(selectedCapital);
          if (choosenCapital == selectedCapital) {
              let boton = document.getElementById("easteregg");
              boton.style.display = (boton.style.display == 'none') ? 'block' : 'none';
          }
        });
}
getCountries()