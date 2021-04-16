//API KEY:  4S5cPyTnWPeRHKSeJ7OcqsGFw8EG6QOTQhny7fSa
/**
* Replace all SVG images with inline SVG
*/
jQuery('img.svg').each(function(){
  var $img = jQuery(this);
  var imgID = $img.attr('id');
  var imgClass = $img.attr('class');
  var imgURL = $img.attr('src');

  jQuery.get(imgURL, function(data) {
      // Get the SVG tag, ignore the rest
      var $svg = jQuery(data).find('svg');

      // Add replaced image's ID to the new SVG
      if(typeof imgID !== 'undefined') {
          $svg = $svg.attr('id', imgID);
      }
      // Add replaced image's classes to the new SVG
      if(typeof imgClass !== 'undefined') {
          $svg = $svg.attr('class', imgClass+' replaced-svg');
      }

      // Remove any invalid XML tags as per http://validator.w3.org
      $svg = $svg.removeAttr('xmlns:a');

      // Replace image with new SVG
      $img.replaceWith($svg);

  }, 'xml');

});


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
