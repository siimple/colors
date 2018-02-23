let ready = function (fn) {
    if (document.readyState !== "loading") {
        return fn(null);
    }
    document.addEventListener("DOMContentLoaded", function (event) {
        if (document.readyState === "loading") {
            return;
        }
        return fn(event);
    });
};

ready(function () {
    //Get all presentation guide blocks
    let guideBlocks = document.querySelectorAll(".guide");
    Array.from(guideBlocks).forEach(function (guide) {
        //Get all options and content blocks
        let optionList = guide.querySelectorAll(".guide-option");
        let contentList = guide.querySelectorAll(".guide-content");
        Array.from(optionList).forEach(function (option, index) {
            //Add the option click event listener
            option.addEventListener("click", function(){
                if(option.classList.contains("selected") === false) {
                    //Remove the selected class from all options and content
                    for(let i = 0; i < optionList.length; i++) {
                        optionList[i].classList.remove("selected");
                        contentList[i].classList.remove("selected");
                    }
                    //Add the selected class to the clicked option and content
                    optionList[index].classList.add("selected");
                    contentList[index].classList.add("selected");
                }
            });
        });
    });
});
