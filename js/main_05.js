const buttons = document.querySelectorAll('.category_button');

buttons.forEach(function(button){
    button.addEventListener('click', function(event){
        const filter = event.target.dataset.category;
        const projects = document.querySelectorAll('.project');
        projects.forEach(function(project){
            if (filter === 'all'||filter === project.dataset.type) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        })
        const selected = document.querySelector('.category_selected');
        selected.classList.remove('category_selected');
        event.target.classList.add('category_selected');
    })
})