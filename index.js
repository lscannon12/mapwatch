//API KEY:  4S5cPyTnWPeRHKSeJ7OcqsGFw8EG6QOTQhny7fSa

console.log("Fetching api data . . .");

const ul = document.getElementById('listicle');

function createNode(element)
{
     return document.createElement(element);
}

function append(parent, el)
{
     return parent.appendChild(el);
}

//fetch crime data from FBI api
fetch('https://api.usa.gov/crime/fbi/sapi/api/nibrs/aggravated-assault/victim/regions/west/sex?API_KEY=4S5cPyTnWPeRHKSeJ7OcqsGFw8EG6QOTQhny7fSa')
     .then((response) => response.json())
     .then(function (data)
     {
          console.log("Recieved Data");
          console.log(data);
          console.log(data.category);
          let iter = 0;
          while(data.data[iter].key == "Male") //checks what gender was the victim
          {
               console.log("Male");
               iter += 1;
          }
          /*while(data.data[iter].key == 'Male')
          {
               //console.log(true);
          }*/

     })
     .catch(function()
     {
          console.log("ERROR - COULD NOT ACCESS API");
     });
