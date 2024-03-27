// SKILLS TABS
const tabs=document.querySelectorAll('[data-target]'),
tabContent= document.querySelector('[data-content]')

tabs.forEach(tab =>
    {
        tab.addEventListener("click",()=>{
            const target= document.querySelector(tab.dataset.target)
            tabContent.forEach(tableContents =>{
                tableContents.classList.remove('skills_active')
            })
            target.classList.add('skills_active')


            tabs.forEach(tableContents =>{
                tabs.classList.remove('skills_active')
            })
            target.classList.add('skills_active')
        })
    })

// link acitve work
const linkwork=document.querySelectorAll('.work_items')
function activeWork(){
    linkwork.forEach(i=> l.classlist.remove('active-work'))
    this.classList.add('active-work')
}
linkwork.forEach(i=>l.addEventListener("click",activeWork))

// workpopup
document.addEventListener("click",(e)=>{
    if(e.target.classlist.contains("work_button")){
        toggleProtfolioPopup();
        portfolioItemDetails(e.target.parentElement)
    }
})
function toggleProtfolioPopup(){
    document.querySelector(".portfolio_popup").classlist.toggle("open")
}
document.querySelector("portfolio_popup-close").addEventListener("click",togglePortfolioPopup)

function portfolioItemDetails(portfolioItem){
    document.querySelector(".pp_thumnbnail img").src=portfolioItem.querySelector(".work_img").src;
    document.querySelector(".portfolio_popup-subtitle span"). innerHTML = portfolioItem.querySelector("work_title").innerHTML;
    document.querySelector(".portfolio_popup-body"). innerHTML = portfolioItem.querySelector("portfolio_item-details").innerHTML;
}