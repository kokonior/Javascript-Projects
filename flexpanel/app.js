const panelsArray = document.querySelectorAll(".panel");

panelsArray.forEach(panel => {
     
    panel.addEventListener("click", ()=> {
        const pFirstChild = panel.querySelector("p:first-child");
        const pLastChild = panel.querySelector("p:last-child");  

        const activeItems = document.querySelectorAll(".panel--active");
        // Gets all active panels 

        panel.classList.toggle("panel--active");        
        pFirstChild.classList.remove("active");
        pLastChild.classList.remove("active");
                    
        // Adds the active class to a clicked panel
        
        for (let item = 0; item < 2; item++) {
            // item < 2, makes sure not more than two items can be active at the same time
            activeItems[0].classList.remove("panel--active");
            // removes the active class from the first active panel so that only the newly clicked panel is active
        }})
});

panelsArray.forEach(panel => {
    panel.addEventListener("transitionend", ()=> {
        const pFirstChild = panel.querySelector("p:first-child");
        const pLastChild = panel.querySelector("p:last-child");
        pFirstChild.classList.add("active");
        pLastChild.classList.add("active");
    })
});