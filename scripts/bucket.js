// On clicking remove button the item should be removed from DOM as well as localstorage.

let getData = JSON.parse(localStorage.getItem('coffee')) || [];

let totalSum = document.getElementById("total_amount");

let bucket = document.getElementById("bucket");
display(getData);

function display(data){
      let sum = 0;
      bucket.innerHTML = null;
      data.forEach(function(el,i){
            let div = document.createElement('div');
            let name = document.createElement('h2');
            name.innerText = el.title;
            let img = document.createElement('img');
            img.src = el.image;
            img.style.width = '100%'
            let price = document.createElement('p');
            price.innerText = '₹ '+el.price;

            sum+= +(el.price);

            let button = document.createElement('button');
            button.innerText = 'Remove coffee';
            button.setAttribute('id','remove_coffee');
            button.addEventListener('click',function(){
                  removeCart(i);
            })
            
            div.append(name,img,price,button);
            
            bucket.append(div);
      });
      totalSum.innerHTML = sum;
}

function removeCart(i){
      getData.splice(i,1);
      localStorage.setItem('coffee',JSON.stringify(getData))
      display(getData);
}

function checkOut(){
      if(getData.length===0){
            alert("Please Add Product to Your bucket")
            window.location.href = 'index.html';
      }
      else{
            window.location.href = 'checkout.html';
      }
}

function back(){
      window.location.href = 'index.html';
}