let data1 = JSON.parse(localStorage.getItem('cartHistory')) || [];

let data = JSON.parse(localStorage.getItem('coffee'));

let submit = document.getElementById('form');

let name = document.getElementById('name');

let address = document.getElementById('address')

let number = document.getElementById('number');

submit.addEventListener('submit',function(){
      if(document.getElementById('name').value==='' || document.getElementById('address').value==='' || document.getElementById('number').value===''){
            alert('Please fill in correctly');
      }
      
      else{
            name.value = null;
            address.value = null;
            number.value = null;
            let time = 8;
            event.preventDefault()
            alert('Your order is accepted')
            setTimeout(function(){
                  alert('Your order is being Prepared')
            },3000)

            setInterval(() => {
                  if(time===8) alert('Your order is being packed');
                  if(time===10) alert('Your order is out for delivery');
            if(time===12) alert('Order delivered');
            if(time===14){
                  alert('Thank You for Shopping with us')
                  window.location.href = 'index.html';
            }

            time+=2;
                  
            }, time*1000);

            localStorage.removeItem('coffee');

            data1 = data;
            localStorage.setItem('cartHistory' , JSON.stringify(data1))
      }
})