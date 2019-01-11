var projectsImg= document.getElementsByClassName('projects-img');
var projectBoxes = document.getElementsByClassName('project-detail-box');
var closeBtns= document.getElementsByClassName('close-btn');

for (var i = 0; i < projectsImg.length;i++){
    showProjectDetail(i);
    closeProjectDetail(i);
}


//this function opens the project detail
function showProjectDetail(index){
    projectsImg[index].addEventListener('click',function(){
        projectBoxes[index].style.display ='block';
    })
}

//this function add click event to close-btn
//close the project detail
function closeProjectDetail(index){
    closeBtns[index].addEventListener('click',function(){
        projectBoxes[index].style.display ='none';
    })
}

