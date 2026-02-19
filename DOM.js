function showFilter() {
    let filterForm = document.getElementById("filterContent");
    let newForm = document.getElementById("newContent");
    
    if(filterForm.style.display == "none") {
        filterForm.style.display = "block";
    }
    else {
        filterForm.style.display = "none";
    }
    
    newForm.style.display = "none";
}

function showAddNew() {
    let newForm = document.getElementById("newContent");
    let filterForm = document.getElementById("filterContent");
    
    if(newForm.style.display == "none") {
        newForm.style.display = "flex";
    }
    else {
        newForm.style.display = "none";
    }
    
    filterForm.style.display = "none";
}

function filterArticles() {
    let opinionChecked = document.getElementById("opinionCheckbox").checked;
    let recipeChecked = document.getElementById("recipeCheckbox").checked;
    let updateChecked = document.getElementById("updateCheckbox").checked;
    
    let articles = document.querySelectorAll("article");
    
    for(let article of articles) {
        let shouldShow = false;
        
        if(article.classList.contains("opinion") && opinionChecked) {
            shouldShow = true;
        }
        
        if(article.classList.contains("recipe") && recipeChecked) {
            shouldShow = true;
        }
        
        if(article.classList.contains("update") && updateChecked) {
            shouldShow = true;
        }
        
        if(shouldShow) {
            article.style.display = "block";
        }
        else {
            article.style.display = "none";
        }
    }
}

function addNewArticle() {
    let titleInput = document.getElementById("inputHeader").value;
    let textInput = document.getElementById("inputArticle").value;
    
    let articleType = "";
    if(document.getElementById("opinionRadio").checked) {
        articleType = "opinion";
    }
    else if(document.getElementById("recipeRadio").checked) {
        articleType = "recipe";
    }
    else if(document.getElementById("lifeRadio").checked) {
        articleType = "update";
    }
    
    let typeLabel = "";
    if(articleType == "opinion") {
        typeLabel = "Opinion";
    }
    else if(articleType == "recipe") {
        typeLabel = "Recipe";
    }
    else if(articleType == "update") {
        typeLabel = "Update";
    }
    
    let newArticle = document.createElement("article");
    newArticle.classList.add(articleType);
    
    let markerSpan = document.createElement("span");
    markerSpan.classList.add("marker");
    markerSpan.innerText = typeLabel;
    
    let titleHeading = document.createElement("h2");
    titleHeading.innerText = titleInput;
    
    let textParagraph = document.createElement("p");
    textParagraph.innerText = textInput;
    
    newArticle.appendChild(markerSpan);
    newArticle.appendChild(titleHeading);
    newArticle.appendChild(textParagraph);
    
    let articleList = document.getElementById("articleList");
    articleList.appendChild(newArticle);
    
    document.getElementById("inputHeader").value = "";
    document.getElementById("inputArticle").value = "";
    document.getElementById("opinionRadio").checked = false;
    document.getElementById("recipeRadio").checked = false;
    document.getElementById("lifeRadio").checked = false;
    
    document.getElementById("newContent").style.display = "none";
}
