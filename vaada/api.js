
const search = document.getElementById('search');

// console.log(search.value)
// const userValue = search.target.value
// console.log(userValue)
const bikes = document.querySelectorAll('.bikes');
console.log(bikes);
const productname=document.querySelectorAll('h5')
console.log(productname)
// let listproduct = [];
let listproductHtml = document.querySelector('.bikehub');
const bikeArray = [
  {
    "id":1,
    "image":"https://www.joyebike.com/product/hurricane/images/banner-img.png",
    "name":"Honda",
    "Seats":2,
    "fuel":"Petrol",
    "Brake":"Disc",
    "Gear":6,
    "mileage":40,
    "Hour":"4000"

  },
  {
    "id":2,
    "image":"https://www.joyebike.com/product/hurricane/images/banner-img.png",
    "name":"Pulsar",
    "Seats":3,
    "fuel":"desigl",
    "Brake":"Disc",
    "Gear":6,
    "mileage":50,
    "Hour":"90000"

  },
  {
    "id":3,
    "image":"https://www.joyebike.com/product/hurricane/images/banner-img.png",
    "name":"Beneli",
    "Seats":2,
    "fuel":"Petrol",
    "Brake":"Disc",
    "Gear":6,
    "mileage":40,
    "Hour":"2000"

  },
  {
    "id":4,
    "image":"https://www.joyebike.com/product/hurricane/images/banner-img.png",
    "name":"Ducati",
    "Seats":2,
    "fuel":"Petrol",
    "Brake":"Disc",
    "Gear":6,
    "mileage":40,
    "Hour":"9000"

  },
  {
    "id":5,
    "image":"https://www.joyebike.com/product/hurricane/images/banner-img.png",
    "name":"Crossfire",
    "Seats":2,
    "fuel":"Petrol",
    "Brake":"Disc",
    "Gear":6,
    "mileage":40,
    "Hour":"4000"

  },

  {
    "id":6,
    "image":"https://www.joyebike.com/product/hurricane/images/banner-img.png",
    "name":"CBR",
    "Seats":2,
    "fuel":"Petrol",
    "Brake":"Disc",
    "Gear":6,
    "mileage":40,
    "Hour":"4000"

  },
  {
    "id":7,
    "image":"https://www.joyebike.com/product/hurricane/images/banner-img.png",
    "name":"CBR",
    "Seats":2,
    "fuel":"Petrol",
    "Brake":"Disc",
    "Gear":6,
    "mileage":40,
    "Hour":"1500"

  },
  {
    "id":8,
    "image":"https://www.joyebike.com/product/hurricane/images/banner-img.png",
    "name":"CBR",
    "Seats":2,
    "fuel":"Petrol",
    "Brake":"Disc",
    "Gear":6,
    "mileage":40,
    "Hour":"6900"

  },
  {
    "id":9,
    "image":"https://www.joyebike.com/product/hurricane/images/banner-img.png",
    "name":"CBR",
    "Seats":2,
    "fuel":"Petrol",
    "Brake":"Disc",
    "Gear":6,
    "mileage":40,
    "Hour":"5000"

  },
  {
    "id":10,
    "image":"https://www.joyebike.com/product/hurricane/images/banner-img.png",
    "name":"CBR",
    "Seats":2,
    "fuel":"Petrol",
    "Brake":"Disc",
    "Gear":6,
    "mileage":40,
    "Hour":"3000"

  },
  {
    "id":11,
    "image":"https://www.joyebike.com/product/hurricane/images/banner-img.png",
    "name":"CBR",
    "Seats":2,
    "fuel":"Petrol",
    "Brake":"Disc",
    "Gear":6,
    "mileage":40,
    "Hour":"15000"
 
  },
  {
    "id":12,
    "image":"https://www.joyebike.com/product/hurricane/images/banner-img.png",
    "name":"CBR",
    "Seats":2,
    "fuel":"Petrol",
    "Brake":"Disc",
    "Gear":6,
    "mileage":40,
    "Hour":"5000"
  }
]



search.addEventListener('keyup', (e) => {
    let replicaArray = [...bikeArray]
    const user = e.target.value;
    replicaArray = replicaArray.filter((currentElem) => {
      return currentElem.name.toLowerCase().includes(user.toLowerCase())
    })
  addDataToHtml(replicaArray)
  // getTheTargetData(replicaArray)
  })
const getTheTargetData = (data) => {
  let replicaArray = [...bikeArray]
  const userValue = (search.value)
  console.log(userValue)
  replicaArray = replicaArray.filter((currentElem) => {
  return currentElem.Hour <= data && currentElem.name.toLowerCase() === userValue
  })
    addDataToHtml(replicaArray)
  
}

  const addDataToHtml = (bikeArray) => {
    // console.log(listproduct)
    listproductHtml.innerHTML = '';
    
    if (bikeArray.length > 0) {
      bikeArray.map(product => {
        let newProduct = document.createElement('div');
        newProduct.classList.add('bikes');
        newProduct.innerHTML =
        ` <img
        src="${product.image}"
        alt="img"
        />
        <h5>${product.name}</h5>
        <h6>Seats:${product.Seats}</h6>
        <h6>Fuel:${product.fuel}</h6>
        <h6>Front Brake:${product.Brake}</h6>
        <h6>Gear Box:${product.Gear}</h6>
        <h6>Overall Mileage:${product.mileage} Kmpl</h6>
        <span>
        <h6>Per Hours:</h6>
        <h1>${product.Hour}Rs</h1>
        </span>
        <button class="rtnbtn">Rent Bike</button>`
        listproductHtml.appendChild(newProduct);
      })
    }
  }
  
  
  addDataToHtml(bikeArray)