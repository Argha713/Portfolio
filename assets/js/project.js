var dataArr = [
    {name: "GetReady",description: "This is a Education website", link: "https://argha713.github.io/TestGetReady/"},
    {name: "Educator",description: "This is a Education website", link: "https://argha713.github.io/education-website/"},
    {name: "GetReady2",description: "This is a Education website", link: "https://argha713.github.io/Portfolio/"}
];


function addProject(){
    var cardString = "";
    dataArr.forEach(function(cards, index){
        cardString += `
        <div id="${cards.name}" class="project-box" onClick = >
            <i class="uil uil-briefcase-alt"></i>
            <h3>${cards.name}</h3>
            <label>${cards.description}</label>
            <button data-index = ${index} class="project-btn add">View</button>
        </div>`;
    });
    
    document.querySelector(".project-container").innerHTML = cardString;
    console.log(cardString);
}
addProject();

// Get the project box and the hidden project details div
const projectBox = document.querySelector('.project-container');
const hiddenProjectDetails = document.querySelector('.hidden-project-details');

// Event listener to show hidden project details when project box is clicked



projectBox.addEventListener('click', function(details){
    console.log(details.target.dataset.index);
    if(details.target.classList.contains('add')){
        console.log("inside add");
        if(details.target.dataset.index !== null){
            var link = dataArr[details.target.dataset.index].link;
            var projectBox = document.querySelector('.project-iframe');
            projectBox.src = link;
            console.log(link);
        }
        hiddenProjectDetails.style.display = 'block';
    }
  
    const closeButton = document.querySelector('.close-btn');   
    closeButton.addEventListener('click', function(){
        hiddenProjectDetails.style.display = 'none'; 
        var projectBox = document.querySelector('.project-iframe');
        projectBox.src = "";
        console.log("b");
    });
});
