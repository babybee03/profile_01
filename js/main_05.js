/*
const category = document.querySelector('.category');
const projects = document.querySelectorAll('.project');

category.addEventListener('click', function(event){
    const filter = event.target.dataset.category;

    projects.forEach(function(project){
        if(filter === 'all' || filter === project.dataset.type) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    })
    
})
*/

const buttons = document.querySelectorAll('.category_button');
const projects = document.querySelectorAll('.project');
buttons.forEach(function(button){
    button.addEventListener('click', function(event){
        const filter = event.target.dataset.category;
        projects.forEach(function(project){
            if (filter === 'all'|| filter === project.dataset.type) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        })
        
    })
})