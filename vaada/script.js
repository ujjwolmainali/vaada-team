const flex = document.querySelectorAll('.flex');
const icon = document.querySelectorAll('.fa-chevron-down');

const  dropdowns = document.getElementById('dropdown')
const dropdowns1 = document.getElementById('dropdown1');
const dropdowns2 = document.getElementById('dropdown2');
 console.log(dropdowns2)
const options = document.querySelector('li');
const paragraphs = document.querySelectorAll('.paragraph');

const paraArray  = [...paragraphs]
const show = document.getElementsByClassName('showmore')
const listItems  = document.getElementsByClassName("listItems")
const listItemsReplica = [...listItems]
console.log(listItemsReplica)
const showArray = [...show]
const btn=document.querySelector('.btn')
// console.log(btn)
// console.log(showArray)
const tabs = document.querySelectorAll('.tab')
// console.log(tabs)
const content = document.querySelectorAll('.content');
// console.log(content)
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
   
    content.forEach(content => {
      content.classList.remove('active');
    });
    const targetId = tab.getAttribute('data-target');
    console.log(targetId)
    const targetcontent = document.getElementById(targetId);
    console.log(targetcontent)
    targetcontent.classList.add('active');
  })
})
const pricemore = document.getElementsByClassName('pricemore');
console.log(pricemore)
priceArray = [...pricemore];
console.log(priceArray)
priceArray.map((eleme, index) => {
  console.log(eleme)
  eleme.addEventListener('click', () => {
    console.log(eleme.classList.contains("fa-chevron-down"))
    if (eleme.classList.contains("fa-chevron-down")) {
    
      if (index===0) {
        dropdowns2.classList.add('price');
      }
    }
    else {
      if (index===0) {
        
        dropdowns2.classList.remove('price');
      }

      
    }
    
   
  })
  
})
// priceArray.addEventListener("click", () => {
//   if (priceArray.classList.contains("fa-chevron-down")) {
//     dropdowns2.classList.add("price")
//   }
// })
const tabArray = [...tabs]
console.log(tabArray)

tabArray.map((elem, index) => {
  elem.addEventListener("click", () => {
    if (index === 0) {
      tabArray[0].classList.add('design')
    }
    else  {
      tabArray[0].classList.remove('design')
    }
    if (index === 1) {
      tabArray[1].classList.add('design')
    }
    else  {
      tabArray[1].classList.remove('design')
    }
    if (index === 2) {
      tabArray[2].classList.add('design')
    }
    else  {
      tabArray[2].classList.remove('design')
    }
 
    if (index === 3) {
      tabArray[3].classList.add('design')
    }
    else  {
      tabArray[3].classList.remove('design')
    }
 
    if (index === 4 ) {
      tabArray[4 ].classList.add('design')
    }
    else  {
      tabArray[4 ].classList.remove('design')
    }
 
    
      
   
  })
  
})


console.log(show)


showArray.map((element, index) => {
  console.log(element)
  element.addEventListener('click', () => {
    if (element.classList.contains("fa-chevron-down")) {
      if (index === 0) {
        paraArray[0].classList.add("display")
      }else if (index === 1) {
        paraArray[1].classList.add("display") 
      }
      else if (index === 2) {
        paraArray[2].classList.add("display")
      }
      else if (index === 3) {
        paraArray[3].classList.add("display")
      }
      else if (index === 4) {
        paraArray[4].classList.add("display")
        console.log("Para" , paraArray[4])
      }
      else if (index === 5) {
        paraArray[5].classList.add("display")
        
      }
      else if (index === 6) {
        paraArray[6].classList.add("display")
        
      }
      else if (index === 7) {
        paraArray[7].classList.add("display")
        
      }
      else if (index === 8) {
        paraArray[8].classList.add("display")
        
      }
      else if (index === 9) {
        paraArray[9].classList.add("display")
        
      }
      else if (index === 10) {
        paraArray[10].classList.add("display")
        
      }
      else if (index === 11) {
        paraArray[11].classList.add("display")
        
      }
      else if (index === 12) {
        paraArray[12].classList.add("display")
        
      }
      else if (index === 13) {
        paraArray[13].classList.add("display")
        
      }
      else if (index === 14) {
        paraArray[14].classList.add("display")
        
      }
      else if (index === 15) {
        paraArray[15].classList.add("display")
        
      }
      else if (index === 16) {
        paraArray[16].classList.add("display")
        
      }
      else if (index === 17) {
        paraArray[17].classList.add("display")
        
      }
      else if (index === 18) {
        paraArray[18].classList.add("display")
        
      }
      else if (index === 19) {
        paraArray[19].classList.add("display")
        
      }
      else if (index === 20) {
        paraArray[20].classList.add("display")
        
      }
      else if (index === 21) {
        paraArray[21].classList.add("display")
        
      }
      else if (index === 22) {
        paraArray[22].classList.add("display")
        
      }
      else if (index === 23) {
        paraArray[23].classList.add("display")
        
      }
      else if (index === 24) {
        paraArray[24].classList.add("display")
        
      }
      else if (index === 25) {
        paraArray[25].classList.add("display")
        
      }
      
      // switch (index) {
      //   case 0:
      //     if (element.classList.contains('fa-chevron-down')) {
      //       paraArray[0].classList.add("display")
            
      //     } else {
      //   paraArray[0].classList.remove("display")
            
      //     }
      //     break;
      
      //   default:
      //     break;
      // }
    } else {
      if (index === 0) {
        paraArray[0].classList.remove("display")
        
      }
      else if (index === 1) {
        paraArray[1].classList.remove("display")
      }
      else if (index === 2) {
        paraArray[2].classList.remove("display")
      }
      else if (index === 3) {
        paraArray[3].classList.remove("display")
      }
      else if (index === 4) {
        paraArray[4].classList.remove("display")
      }
        else if (index === 5) {
        paraArray[5].classList.remove("display")
        
      }
      else if (index === 6) {
        paraArray[6].classList.remove("display")
        
      }
      else if (index === 7) {
        paraArray[7].classList.remove("display")
        
      }
      else if (index === 8) {
        paraArray[8].classList.remove("display")
        
      }
      else if (index === 9) {
        paraArray[9].classList.remove("display")
        
      }
      else if (index === 10) {
        paraArray[10].classList.remove("display")
        
      }
      else if (index === 11) {
        paraArray[11].classList.remove("display")
        
      }
      else if (index === 12) {
        paraArray[12].classList.remove("display")
        
      }
      else if (index === 13) {
        paraArray[13].classList.remove("display")
        
      }
      else if (index === 14) {
        paraArray[14].classList.remove("display")
        
      }
      else if (index === 15) {
        paraArray[15].classList.remove("display")
        
      }
      else if (index === 16) {
        paraArray[16].classList.remove("display")
        
      }
      else if (index === 17) {
        paraArray[17].classList.remove("display")
        
      }
      else if (index === 18) {
        paraArray[18].classList.remove("display")
        
      }
      else if (index === 19) {
        paraArray[19].classList.remove("display")
        
      }
      else if (index === 20) {
        paraArray[20].classList.remove("display")
        
      }
      else if (index === 21) {
        paraArray[21].classList.remove("display")
        
      }
      else if (index === 22) {
        paraArray[22].classList.remove("display")
        
      }
      else if (index === 23) {
        paraArray[23].classList.remove("display")
        
      }
      else if (index === 24) {
        paraArray[24].classList.remove("display")
        
      }
      else if (index === 25) {
        paraArray[25].classList.remove("display")
        
      }
      
    }
  })
})




// console.log(icon);
// console.log(dropdowns)
const replicaArray = [...icon]
console.log(replicaArray) 


replicaArray.map((currenElem , index) => {
  
  currenElem.addEventListener('click', () => {
    console.log(currenElem)
    
    
      let check;
    if (currenElem.classList.contains("fa-chevron-down")) {
      check = true;
      if (index === 0) {
        dropdowns.classList.add('active');
      } else if (index===1) {
        dropdowns1.classList.add('active');
    
      }
     
      }
    else {
            if (index === 0) {
        dropdowns.classList.remove('active');
      } else {
      dropdowns1.classList.remove('active');  
      }
      
        // check = false;
      }
      if (check) {  
        currenElem.classList.remove("fa-chevron-down")
        currenElem.classList.add("fa-chevron-up")
        let check = false;
      }
      else {
        currenElem.classList.add("fa-chevron-down")
        currenElem.classList.remove("fa-chevron-up")
        let check = true;
        
      }
      console.log(check);
  
  
    
    
  
    
  
    });
})





