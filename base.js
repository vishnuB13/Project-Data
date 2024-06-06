document.querySelectorAll('.content').forEach((con)=>{con.style.display=""})

document.getElementById('Projects').addEventListener('click',(e)=>{
    e.preventDefault()
  showContent('project-content')
})


document.getElementById('Infos').addEventListener('click',(e)=>{
e.preventDefault()
showContent('project-info')
})

document.getElementById('Access').addEventListener('click',(e)=>{
e.preventDefault()
showContent('manage-access')
})

function showContent(id){
    let style= document.getElementById(id).style
    if(style.display==""){style.display='block'}
    else{style.display=""}
}
