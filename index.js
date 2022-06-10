const tab = document.querySelectorAll('.tab__btn');


[...tab].forEach((tab) => {
    tab.addEventListener('click', () => {
        tab.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "center"
        });
    });
});



[...tab].forEach((tab) => {
    tab.addEventListener('click', () => {
        const tabParent = tab.parentElement;
        const tabGrandParent = tab.parentElement.parentElement;

        let tabIndex = tab.dataset.indexNumber;

        const tabcontentToShow = tabGrandParent.querySelector(`.tab__content[data-index-content="${tabIndex}"]`);
        


        // CLEAR ALL TAB BUTTON WITH CLASS ACTIVE
        document.querySelectorAll('.tab__btn').forEach((tab)=>{
           tab.classList.remove('tab__btn--active');
        });

        // CLEAR ALL TAB CONTENT WITH CLASS ACTIVE
        document.querySelectorAll('.tab__content').forEach((tabcontent)=>{
            tabcontent.classList.remove('tab__content--active');
        });


        // ADD CLASS ACTIVE TO CURRENT CLICKED TAB BUTTON
        tab.classList.add('tab__btn--active');

        // ADD CLASS ACTIVE TO CURRENT TAB CONTENT CLICKED TAB BUTTON
        tabcontentToShow.classList.add('tab__content--active');
        
    });

});