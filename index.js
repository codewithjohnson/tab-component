const tab = document.querySelectorAll('.tab__btn');



[...tab].forEach((tab)=>{
    tab.addEventListener('click',()=>{
        tab.scrollIntoView({behavior: "smooth", block: "end", inline: "center"});
    });
});