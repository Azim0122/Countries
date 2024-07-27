const input = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const body = document.querySelector('body');
const btn = document.querySelector('.btn');
const icon = document.querySelector('.btn__icon');
const cards = document.querySelector('.cards');
const select = document.querySelectorAll('select');
const loader1 = document.querySelector('.loader1');


function store(value){
  localStorage.setItem('darkmode', value);
}
function load(){
  const darkmode = localStorage.getItem('darkmode');

  //if the dark mode was never activated
  if(!darkmode){
    store(false);
    icon.classList.add('fa-sun');
  } else if( darkmode == 'true'){ 
    body.classList.add('darkmode');
    icon.classList.add('fa-moon');
  } else if(darkmode == 'false'){ 
    icon.classList.add('fa-sun');
  }
}
load();
btn.addEventListener('click', () => {
  body.classList.toggle('darkmode');
  icon.classList.add('animated');
  //save true or false
  store(body.classList.contains('darkmode'));
  if(body.classList.contains('darkmode')){
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }else{
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  }
  setTimeout( () => {
    icon.classList.remove('animated');
  }, 500)
})

const expand = () => {
    searchBtn.classList.toggle("close");
    input.classList.toggle("square");
    input.focus();
  };
  searchBtn.addEventListener("click", expand);
  var link = "https://restcountries.com/v3.1/all"
  var link2 ="https://restcountries.com/v3.1/region/Asia"
  var link3 ="https://restcountries.com/v3.1/region/Africa"
  var link4 ="https://restcountries.com/v3.1/region/Oceania"
  var link5 ="https://restcountries.com/v3.1/region/Europe"
  var link6 ="https://restcountries.com/v3.1/region/Americas"

  const getData = async (api) => { 
    // loader1.classList.add('active')
      const req = await fetch(api);
      const data = await req.json();
      console.log(data);
      writeData(data)
      // loader1.classList.remove('active')
  }
  getData(link)
  
    const writeData  = async (data) => {
        cards.innerHTML = "";
        data.forEach((card) => {
            cards.innerHTML += ` 
            <div onclick="myFunction()" class = "card">
            <img src="${card.flags.svg}" alt="">
            <div class="card-content">
              <h2>
                ${card.name.common}
              </h2>
              <b>
                  Population: ${card.population} <br>
                  Region: ${card.region} <br>
                  Capital: ${card.capital}
              </b>
              
            </div>
          </div>
            `
        })
    }
    writeData(link)


    select.forEach((opt) => {
      opt.addEventListener('change', () => {
        console.log("salom");
        if(opt.value == 'All'){
          getData(link)
        }
        if(opt.value == 'Asia'){
          getData(link2)
          console.log("hello")
        }
        if(opt.value == 'Africa'){
          getData(link3)
        }
        if(opt.value == 'Oceania'){
          getData(link4)
        }
        if(opt.value == 'Europe'){
          getData(link5)
        }
        if(opt.value == 'Americas'){
          getData(link6)
        }
      }) 
    })
    
  input.addEventListener('input', () => {
    const card_list = document.querySelectorAll('.card');
    card_list.forEach((card) => {
      if(card.querySelector('h2').textContent.toLowerCase().includes(input.value.toLowerCase())){
        card.style.display = 'block';
      }else{
        card.style.display = 'none';
      }
    })

  })
  const modal = document.querySelector('.modal');
  const close = document.querySelector('.close');
  const overlay = document.querySelector('.overlay');
  const button2 = document.querySelector('.button2');
  function myFunction() {
    console.log("hello");
    modal.classList.add('active');
    cards.innerHTML = "";
    cards.forEach((card) => {
     card.innerHTML += `
     <button onclick="modal.classList.remove('active')" class="Exit"><i class="fa-solid fa-arrow-left"> Back</i></button>
          <br><br><br>
          <div class="card44">
            <img
              src="${card.querySelector('img').src}"
              alt="">
            <div class="card-content44">
              <h1>${card.querySelector('h2').textContent}</h1><br>
             <div class="cards-info-4">
              <div class="card-info44">
                <b>Native Name:</b> ${card.querySelector('h2').textContent}<br>
                <b>Population:</b> ${card.querySelector('b').textContent} <br>
                <b>Region:</b> ${card.querySelector('b').textContent} <br>
                <b>Sub Region:</b> ${card.querySelector('b').textContent} <br>
                <b>Capital:</b> ${card.querySelector('b').textContent} <br>
              </div>
              <div class="card-info44-2">
                <b>Top Level Domain:</b> ${card.querySelector('b').textContent} <br>
                <b>Currencies:</b> ${card.querySelector('b').textContent} <br>
                <b>Languages:</b> ${card.querySelector('b').textContent} <br>                
              </div>
             </div>
              <br><br><br>
              <div class="card-info44-3">
                <b>Border Countries:</b> <span> ${card.querySelector('b').textContent} </span> <span>${card.querySelector('b').textContent} </span> <span>${card.querySelector('b').textContent} </span>
                </div>
            </div>
          </div><br><br>
    `
    })
  }
  // button2.addEventListener('click', () => {
  //   console.log("hello");
   

  // })
  
 

  


 
