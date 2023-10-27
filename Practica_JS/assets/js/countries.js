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



let randomNumber;
let randomcountry ;
let hola= [];

for (let x = 0; x < 3; x++){
    let iiii = Math.floor(Math.random() * countries.data.countries.length);
    let hhhh = countries.data.countries[iiii];
    hola.push(hhhh);

}

for (let x = 0; x < hola.length; x++){
console.log(hola[x].name);

    let varvar = document.createElement("input");
    varvar.type = "radio";
    varvar.value = hola[x].name;

    var label = document.createElement('label')
    label.innerText = hola[x].name; 

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