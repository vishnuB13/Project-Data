document.querySelectorAll('.content').forEach((con)=>{con.style.display=""})

document.getElementById('Projects').addEventListener('click',(e)=>{
    e.preventDefault()
    document.querySelectorAll('.content').forEach((con)=>{con.style.display=""})
  showContent('project-content')
})


document.getElementById('Infos').addEventListener('click',(e)=>{
e.preventDefault()
document.querySelectorAll('.content').forEach((con)=>{con.style.display=""})
showContent('project-info')
})

document.getElementById('Access').addEventListener('click',(e)=>{
e.preventDefault()
document.querySelectorAll('.content').forEach((con)=>{con.style.display=""})
showContent('manage-access')
})

function showContent(id){
    let style= document.getElementById(id).style
    if(style.display==""){style.display='block'}
    else{style.display=""}
}

document.getElementById('CloseAll').addEventListener('click',(e)=>{
  e.preventDefault()
  document.querySelectorAll('.content').forEach((con)=>{con.style.display=""})
})


let a = [];

function addItem() {
  let field = document.getElementById('input-field');
  let value = field.value;

  if (value) {
    let newItem = document.createElement('li');
    newItem.className = 'dynamic-item';
    newItem.textContent = value;

    let removeButton = document.createElement('button');
    removeButton.textContent = '-';
    removeButton.type = 'button';
    removeButton.onclick = function() {
      removeItem(this);
    };

    newItem.appendChild(removeButton);

    let dynamicList = document.getElementById('dynamicList');
    dynamicList.appendChild(newItem);

    a.push(value);
    console.log(a);
  }

  field.value = '';
}

function removeLastItem() {
  let dynamicList = document.getElementById('dynamicList');
  if (dynamicList.lastChild) {
    dynamicList.removeChild(dynamicList.lastChild);
    a.pop();
    console.log(a);
  }
}

function removeItem(button) {
  let item = button.parentNode;
  let dynamicList = document.getElementById('dynamicList');
  dynamicList.removeChild(item);
  let value = item.firstChild.textContent;
  a = a.filter(elem => elem !== value);
  console.log(a);
}
