let form = document.querySelector('form')
let input = document.querySelector('#input123')
let ul = document.querySelector('ul')

const searchInput = document.getElementById('searchInput')
let sortbtn = document.getElementById('sortbtn')




const addTodo = (e) => {
    e.preventDefault();
    
   let li = document.createElement('li')
   li.innerText = input.value
   li.className =  'list-group-item mt-3'
   let dltBtn = document.createElement('button')
   dltBtn.className = 'btn btn-danger float-end'
   dltBtn.innerText = "Delete"
   li.appendChild(dltBtn)
  ul.appendChild(li)
 
  form.reset()
}

const removeList = (e) => {
 
    if(e.target.className.includes('btn-danger')){
     const li = e.target.parentElement
   
     
     alert("are you sure !!")
      li.remove()

    }
      
      
  }
  ul.addEventListener('click',removeList)
  form.addEventListener('submit',addTodo)
// ----------------------------search funtionality-----------

const searchTodo = () => {
    const searchItem = searchInput.value.toLowerCase()
    const todoItems = ul.querySelectorAll('li')
    todoItems.forEach((item) =>{
       let itemText=  item.innerText.toLocaleLowerCase()
       if(itemText.includes(searchItem)){
        item.style.display = 'block'
       }else{

          ul.innerText = 'No Element Found !!'
          ul.className = 'card w-75 my-2 border border-none shadow-lg p-4 m-auto text-center'
          
        
       }
        
    })
    
    
}

searchInput.addEventListener('input',searchTodo)

// ---------------------------sorting functionality-----------------------

const sortTodo = (e) => {
    const sortItem = Array.from(ul.querySelectorAll('li')); 
  
    
    let allSort =sortItem.sort((a,b) => a.innerText.localeCompare(b.innerText))
    console.log("hello", allSort);
    
    ul.innerHTML = '';
    allSort.forEach(item => ul.appendChild(item) );
   
    
}

sortbtn.addEventListener('click',sortTodo)