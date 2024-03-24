// SKILLS TABS
const tabs=document.querySelectorAll('[data-target]'),
tabContent= document.querySelector('[data-content]')

tabs.forEach(tab =>
    {
        tab.addEventListener("click",()=>{
            const target= document.querySelector(tab.dataset.target)
            tabContent.forEach(tableContents =>{
                tableContents.classList.remove("skills_active")
            })
            target.classList.add("skills_active")


            tabs.forEach(tableContents =>{
                tabs.classList.remove("skills_active")
            })
            target.classList.add("skills_active")
        })
    })