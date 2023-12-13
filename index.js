const themeBtn = document.getElementById("themeBtn")
themeBtn.onclick = () =>{
    themeBtn.classList.toggle("bi-sun-fill")
    if (themeBtn.classList.contains("bi-sun-fill")){
        document.body.classList.remove("changeTheme-light")
        document.body.classList.add("changeTheme-dark")
        themeBtn.classList.add("sun-color")
        themeBtn.classList.remove("moon-color")
    }else{
        document.body.classList.remove("changeTheme-dark")
        document.body.classList.add("changeTheme-light")
        themeBtn.classList.add("moon-color")
        themeBtn.classList.remove("sun-color")

    }
}


const IconPortifolio = document.getElementById("port")
const IconAboutMe = document.getElementById("aboutMe")
const IconAboutUs = document.getElementById("aboutUs")
const IconSocial = document.getElementById("social")
const iconHome = document.getElementById("home")
const link = document.getElementById("sideLink")
const navsidebar = document.getElementById("sidebar")
const navMenu = document.getElementById("menu")
navMenu.onclick = () => {
    navMenu.classList.toggle("bi-x-lg")
    if (navMenu.classList.contains("bi-x-lg")){
        navsidebar.classList.remove("sm-sidebar")
        navsidebar.classList.add("sidebar")
    }else{
        navsidebar.classList.remove("sidebar")
        navsidebar.classList.add("sm-sidebar")
    }if (navsidebar.classList.contains("sm-sidebar")){
        link.classList.remove("displayLink")
        link.classList.add("hiddenLink")
        iconHome.classList.add("bi-house-fill")
        IconSocial.classList.add("bi-instagram")
        IconAboutUs.classList.add("bi-people-fill")
        IconPortifolio.classList.add("bi-briefcase-fill")
        IconAboutMe.classList.add("bi-person-fill")
        themeBtn.classList.remove("iconposition-open")
        themeBtn.classList.add("iconposition-closed")
    }else{
        iconHome.classList.remove("bi-house-fill")
        IconSocial.classList.remove("bi-instagram")
        IconAboutUs.classList.remove("bi-people-fill")
        IconAboutMe.classList.remove("bi-person-fill")
        IconPortifolio.classList.remove("bi-briefcase-fill")
        link.classList.remove("hiddenLink")
        link.classList.add("displayLink")
        themeBtn.classList.remove("iconposition-closed")
        themeBtn.classList.add("iconposition-open")
    }
}

iconHome.onclick = () =>{
    window.location.href="index.html"
}
IconAboutUs.onclick = () =>{
    window.location.href="#aboutNos"
}


IconSocial.onclick = () =>{
    window.location.href="#redes"
}

IconPortifolio.onclick = () =>{
    window.location.href="#portifolio"
}


const imgAbout = document.getElementById("imgAbout")
const imgRedes = document.getElementById("imgRedes")

