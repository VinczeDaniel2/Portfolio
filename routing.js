import { about } from "./about.js";
import { project } from "./projects.js";

const routes={
    '':'home.html',
    'about':'about.html',
    'projects':'projects.html',
    'contacts':'contact.html'
}
const loadPage = async (url,domObj)=>{
    const response = await fetch(url)
    const html = await response.text()
    domObj.innerHTML=html
    if(url == 'about.html'){
        about()
    }
    if(url == 'projects.html'){
        project()
    }
}
let obj = document.querySelector('.container')
//loadPage('home.html',obj)
window.addEventListener('hashchange', ()=>{
    console.log(window.location.hash);
    navigate()
})

function navigate(){
    let hash = window.location.hash.substring(2)
    console.log(hash);
    let page=routes[hash] || '404.html'
    loadPage(page,document.querySelector('.container'))
}