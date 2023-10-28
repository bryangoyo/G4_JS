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
let hola= [];

for (let x = 0; x < 3; x++){
    let iiii = Math.floor(Math.random() * countries.data.countries.length);
    let hhhh = countries.data.countries[iiii];
    hola.push(hhhh);
}

console.log(hola[getRandomInt(3)].name);
console.log(hola[getRandomInt(3)].capital);

document.getElementById("eastereggQuestion").innerHTML = "What is the capital of "+ "<strong>" + hola[getRandomInt(3)].name + "</strong>";

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
//console.log(randomcountry.name)
//console.log(randomcountry.capital)
 

/* document.getElementById("eastereggQuestion").innerHTML = "What is the capital of "+ randomcountry.name;

        var radiobox = document.createElement('input');
        radiobox.type = 'radio';
        radiobox.id = 'contact';
        radiobox.value = randomcountry.capital;

        var label = document.createElement('label')
        label.innerText = 'contact'; 

        let container = document.getElementById('eastereggRespuestas');
        container.appendChild(radiobox);
        container.appendChild(label);*/
}
getCountries()