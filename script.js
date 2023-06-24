const url = 'https://jsonplaceholder.typicode.com/todos';
const box = document.querySelector('.box')
function displayData(data){
  data.forEach((el)=>{
    let ul = document.createElement('ul')
    let title = document.createElement('li');
    title.classList.add('titleBox')
    title.textContent = el.title;
    ul.append(title)
    box.append(ul)
    if(el.completed){
      title.style.backgroundColor = 'green'
    } else{
      title.style.backgroundColor = 'red'
    }
  })
}


async function getData(){
  try{
    let data = await fetch(url);
    let finalData = await data.json()
    displayData(finalData)
  }catch{
   console.log('you Got Some Error')
  }
}
getData()
