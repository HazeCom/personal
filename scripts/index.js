// Add the coffee to local storage with key "coffee"
let menu = document.getElementById('menu');

let coffee = JSON.parse(localStorage.getItem('coffee')) || [];

let total = document.getElementById('coffee_count');
total.innerText = coffee.length;

const url = `https://masai-mock-api.herokuapp.com/coffee/menu`

async function fetc(){
      try{
            let cat = await fetch(url);
            let data = await cat.json();
            display(data.menu.data)
      }
      catch(err){
            console.log(err);
      }
}

fetc();

function display(data){
     data.forEach(el => {
           let div = document.createElement('div');
           let name = document.createElement('h2');
           name.innerText = el.title;
           let img = document.createElement('img');
           img.src = el.image;
           img.style.width = '100%'
           let price = document.createElement('p');
           price.innerText = '₹ '+el.price;
           menu.append(div);
           let button = document.createElement('button');
           button.innerText = 'Add To Bucket';
           button.setAttribute('id','add_to_bucket');
           button.addEventListener('click',function(){
                 addToCart(el);
            })
            div.append(name,img,price,button);
      });
}

function addToCart(el){
      alert('Enjoy your coffee, the item is add to your bucket')
      coffee.push(el);
      total.innerText = coffee.length;
      console.log(el);
      if(total.innerText>10){
            total.innerText = '10+';
      }
      localStorage.setItem('coffee',JSON.stringify(coffee))
}