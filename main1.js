
//-------------Davydenko-Oleksandr-FEA-12-------------------------------------------
//---------------------HOME WORK 6--------------------------------------------------
//-----------------------HW 6.1-----------------------------------------------------
//----------------------------------------------------------------------------------
var tags = ["h1","h2","h3","h4"];

var classes = ["mouse","botton","scrol","sensor"];

var style = document.head.appendChild(document.createElement('style'));

style.textContent = `*{
    width: 300px;
    height: 300px;
  } 
  .mouse {
    background-color: #11114c;
  }
  .botton {
    background-color: #feff2c;
  }
  .scrol {
    background-color: #962929;
  }
  .sensor {
    background-color: #ff0000;
  }`

for( var indEx in tags) {
  var elem = document.createElement(tags[indEx]);
  elem.classList.add(classes[indEx]);
  document.body.appendChild(elem);
}
