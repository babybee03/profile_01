/*
const categoryButtons = document.querySelectorAll('.category_button');
const projects = document.querySelectorAll('.project');
/*
/*
Method 1: Single functions
*/
function handleCategoryButtonClick(event) {
    const filter = event.target.dataset.category;

    projects.forEach((project) => {
        if (filter === 'all' || filter === project.dataset.type) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });

    const active_button = document.querySelector('.category_selected');
    active_button.classList.remove('category_selected');
    event.target.classList.add('category_selected');
}

categoryButtons.forEach((button) => {
    button.addEventListener('click', handleCategoryButtonClick);
});

/*
Method 2: 4 functions
categoryButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const filter = event.target.dataset.category;
    
        projects.forEach((project) => {
            if (filter === 'all' || filter === project.dataset.type) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    
        const active_button = document.querySelector('.category_selected');
        active_button.classList.remove('category_selected');
        event.target.classList.add('category_selected');
    });
});

// Teacher method: ul에서 click
const category = document.querySelector('.category');
const projects = document.querySelectorAll('.project');
categories.addEventListener('click', (event) => {
    const filter = event.target.dataset.category;

    projects.forEach((project) => {
        if(filter === 'all' || filter === project.dataset.type) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
    
    const active_button = document.querySelector('.category_selected');
    active_button.classList.remove('category_selected');
    event.target.classList.add('category_selected');
})
*/

const category = document.querySelector('.category');
const projects = document.querySelectorAll('.project');
category.addEventListener('click', function(event){
    const filter = event.target.dataset.category;

    projects.forEach(function(project){
        if (filter === "all" || filter === project.target.dataset.type) {
            project.style.display = "block";
        } else {
            project.style.display = "none";
        }
    })  
})
