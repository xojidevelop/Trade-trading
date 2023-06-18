let elBody = document.querySelector('body')
let elForm = document.querySelector('.form')
let elName = document.querySelector('.name')
let elImg = document.querySelector('.img')
let elPrice = document.querySelector('.price')
let elModel = document.querySelector('.model')
let elPhone = document.querySelector('.phone')
let elBtns = document.querySelectorAll('.btn')
let elList = document.querySelector('.list')
let elOffcanvas = document.querySelector('.offcanvas-body')

fetch('https://64833dc5f2e76ae1b95c3189.mockapi.io/cars/carscars')
    .then((res) => res.json())
    .then((data) => mapper(data))
elForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    console.log(elName.value);
    console.log(elImg.value);
    console.log(elPrice.value);
    console.log(elModel.value);
    console.log(elPhone.value);
    fetch('https://64833dc5f2e76ae1b95c3189.mockapi.io/cars/carscars', {
        method: "POST",
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
            name: elName.value,
            img: elImg.value,
            price: elPrice.value,
            model: elModel.value,
            phone: elPhone.value
        })
    })
        .then((res) => res.json())
        .then((data) => console.log(data))
})
function mapper(data) {
    data.map((item) => {
        let newLi = document.createElement('li')
        newLi.innerHTML = `
        <div class="card" style="width:18rem;">
         <img src="${item.img}" class="card-img-top" alt="...">
          <div class="card-body">
           <h5 class="card-title">${item.id}</h5><br>
            <h5 class="card-title">${item.name}</h5><br>
             <h5 class="card-title">$${item.price}</h5><br>
              <p class="card-text">${item.model}</p><br>
              <a href="https://telegram.org" role="button">+${item.phone}</a><br><br>
              <button onclick="delPradact(${item.id})" class="btn btn-danger delete__btn"><i class="bi bi-trash3"></i></button>
               </div>
                </div>`
        elList.appendChild(newLi)
    })
    let elDelBtns = document.querySelectorAll('.delete__btn')
}

function delPradact(id) {
    fetch(`https://64833dc5f2e76ae1b95c3189.mockapi.io/cars/carscars/${id}`, {
        method: "DELETE",
        headers: { 'Content-type': 'application/json' },
    })
        .then((res) => res.json())
        .then((data) => console.log(data))
}

