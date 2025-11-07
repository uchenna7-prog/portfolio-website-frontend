if(localStorage.getItem("mode")===null)
  localStorage.setItem("mode","lightMode")

const changeBorderColorContainers = document.querySelectorAll(".change-border-color-container");
const changeBackgroundColorContainers = document.querySelectorAll(".change-background-color-container");
const changeTextColorContainers = document.querySelectorAll(".change-text-color-container");
const changeBackgroundImageContainers = document.querySelectorAll(".change-page-color");
const changeButtonColorContainers = document.querySelectorAll(".change-button-color-container");
const changeBorderColor2Containers = document.querySelectorAll(".change-border-color2")
const changeBackgroundColorOnHoverContainers = document.querySelectorAll(".change-background-color-on-hover")

const sendButton = document.getElementById("send-button");
const homePage = document.getElementById("home-page");
const footerPage = document.getElementById("footer-page")
const footerSocialIcons = document.querySelectorAll(".footer-social-icon");
const homePageSocialIcons = document.querySelectorAll(".homepage-social-icon")
const homeButton = document.getElementById("home-button");
const backToTopTextAndIconContainer = document.getElementById("back-to-top-text-and-icon-container");

const mobileMenuOptions =  document.querySelectorAll(".mobile-menu-option");
const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");

const contrastButton = document.getElementById("contrast-button");

const aboutPageTextContainer = document.getElementById("about-page-text-container")
const sectionHeadings = document.querySelectorAll(".section-heading")


const technologiesUsedContainers = document.querySelectorAll(".technologies-used-container > div")
const projectButtons = document.querySelectorAll(".project-btn")

function retainMode(){
  
 if(localStorage.getItem("mode")==="lightMode"){
    contrastButton.textContent="dark_mode";
    homePage.classList.remove("dark-mode");
    footerPage.classList.remove("dark-mode");
    mobileMenu.classList.remove("dark-mode");
    sendButton.classList.remove("dark-mode");
    changeBorderColorContainers.forEach(container=>{
      container.classList.remove("dark-mode-border");
    });
    changeBorderColor2Containers.forEach(container=>{
      container.classList.remove("dark-mode");
    });
    changeTextColorContainers.forEach(container=>{
      container.classList.remove("dark-mode-text");
    });
    changeBackgroundColorContainers.forEach(container=>{
      container.classList.remove("dark-mode-background");
    });
    changeBackgroundColorOnHoverContainers.forEach(container=>{
      container.classList.remove("dark-mode-hover");
    });
    changeBackgroundImageContainers.forEach(container=>{
      container.classList.remove("dark-mode-image");
    });
    changeButtonColorContainers.forEach(container=>{
      container.classList.remove("dark-mode-button");
    });
    footerSocialIcons.forEach(icon=>{
      icon.classList.remove("dark-mode");
    });
    homePageSocialIcons.forEach(icon=>{
      icon.classList.remove("dark-mode")
    })

    technologiesUsedContainers.forEach(container=>{
      container.classList.remove("dark-mode")
    })

    projectButtons.forEach(button=>{
      button.classList.remove("dark-mode")
    })

    
  }

  else{       
    contrastButton.textContent="light_mode";
    homePage.classList.add("dark-mode");
    footerPage.classList.add("dark-mode");
    mobileMenu.classList.add("dark-mode");
    sendButton.classList.add("dark-mode");

    changeBorderColorContainers.forEach(container=>{
      container.classList.add("dark-mode-border");
    });
    changeBorderColor2Containers.forEach(container=>{
      container.classList.add("dark-mode");
    });
    changeTextColorContainers.forEach(container=>{
      container.classList.add("dark-mode-text");
    });
    changeBackgroundColorContainers.forEach(container=>{
      container.classList.add("dark-mode-background");
    });
    changeBackgroundColorOnHoverContainers.forEach(container=>{
      container.classList.add("dark-mode-hover");
    });
    changeBackgroundImageContainers.forEach(container=>{
      container.classList.add("dark-mode-image");
    });
    changeButtonColorContainers.forEach(container=>{
      container.classList.add("dark-mode-button");
    });
    footerSocialIcons.forEach(icon=>{
      icon.classList.add("dark-mode");
    });
    homePageSocialIcons.forEach(icon=>{
      icon.classList.add("dark-mode")
    })

    technologiesUsedContainers.forEach(container=>{
      container.classList.add("dark-mode")
    })

    projectButtons.forEach(button=>{
      button.classList.add("dark-mode")
    })

  }

  
}

retainMode()

homeButton.addEventListener("click",e=>{
  e.preventDefault();
  window.scrollTo({top:0,behaviour:"smooth"});
});
backToTopTextAndIconContainer.addEventListener("click",e=>{
  e.preventDefault();
  window.scrollTo({top:0,behaviour:"smooth"});
});

contrastButton.addEventListener("click", () => {
  if(localStorage.getItem("mode")==="darkMode"){
    contrastButton.textContent="dark_mode";
    localStorage.setItem("mode","lightMode")
    homePage.classList.remove("dark-mode");
    footerPage.classList.remove("dark-mode");
    mobileMenu.classList.remove("dark-mode");
    sendButton.classList.remove("dark-mode");
    changeBorderColorContainers.forEach(container=>{
      container.classList.remove("dark-mode-border");
    });
    changeBorderColor2Containers.forEach(container=>{
      container.classList.remove("dark-mode");
    });
    changeTextColorContainers.forEach(container=>{
      container.classList.remove("dark-mode-text");
    });
    changeBackgroundColorContainers.forEach(container=>{
      container.classList.remove("dark-mode-background");
    });
    changeBackgroundColorOnHoverContainers.forEach(container=>{
      container.classList.remove("dark-mode-hover");
    });
    changeBackgroundImageContainers.forEach(container=>{
      container.classList.remove("dark-mode-image");
    });
    changeButtonColorContainers.forEach(container=>{
      container.classList.remove("dark-mode-button");
    });
    footerSocialIcons.forEach(icon=>{
      icon.classList.remove("dark-mode");
    });
    homePageSocialIcons.forEach(icon=>{
      icon.classList.remove("dark-mode")
    })

    technologiesUsedContainers.forEach(container=>{
      container.classList.remove("dark-mode")
    })

    projectButtons.forEach(button=>{
      button.classList.remove("dark-mode")
    })

    
  }

  else{
            
    contrastButton.textContent="light_mode";
    localStorage.setItem("mode","darkMode")
    homePage.classList.add("dark-mode");
    footerPage.classList.add("dark-mode");
    mobileMenu.classList.add("dark-mode");
    sendButton.classList.add("dark-mode");

    changeBorderColorContainers.forEach(container=>{
      container.classList.add("dark-mode-border");
    });
    changeBorderColor2Containers.forEach(container=>{
      container.classList.add("dark-mode");
    });
    changeTextColorContainers.forEach(container=>{
      container.classList.add("dark-mode-text");
    });
    changeBackgroundColorContainers.forEach(container=>{
      container.classList.add("dark-mode-background");
    });
    changeBackgroundColorOnHoverContainers.forEach(container=>{
      container.classList.add("dark-mode-hover");
    });
    changeBackgroundImageContainers.forEach(container=>{
      container.classList.add("dark-mode-image");
    });
    changeButtonColorContainers.forEach(container=>{
      container.classList.add("dark-mode-button");
    });
    footerSocialIcons.forEach(icon=>{
      icon.classList.add("dark-mode");
    });
    homePageSocialIcons.forEach(icon=>{
      icon.classList.add("dark-mode")
    })

    technologiesUsedContainers.forEach(container=>{
      container.classList.add("dark-mode")
    })

    projectButtons.forEach(button=>{
      button.classList.add("dark-mode")
    })

  }

});
mobileMenuOptions.forEach(option=>{
  option.addEventListener("click",()=>{
    mobileMenu.classList.remove("active");
    menuButton.textContent =  "menu";
  });

});


menuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  if(mobileMenu.classList.contains("active")){
    menuButton.textContent =  "close";

  }
  else{
    menuButton.textContent =  "menu";
  }
});


const observer = new IntersectionObserver((entries,observer)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("visible")
      observer.unobserve(entry.target)
    }
  })
},{threshold:0.5})


observer.observe(aboutPageTextContainer)
sectionHeadings.forEach(sectionHeading=>{
  observer.observe(sectionHeading)
})
const progressLine=document.getElementById('progress-line');
const movingDot=document.getElementById('moving-dot');
const dots=document.querySelectorAll('.dot');
const timeline=document.getElementById('timeline');

window.addEventListener('scroll',()=>{
  const rect = timeline.getBoundingClientRect();
  const timelineTop = rect.top
  const timelineHeight = timeline.offsetHeight
  const timelineBottom = timelineTop + timeline.offsetHeight

  const scrollY = window.screenY + window.innerHeight / 2

  const progressLineHeight = Math.min(Math.max(scrollY - timelineTop,0),timeline.offsetHeight)

  const firstTimeLineDot = document.getElementById('first-dot')
  const secondTimeLineDot = document.getElementById('second-dot')
  const thirdTimeLineDot = document.getElementById('third-dot')

  const itemContainers = document.querySelectorAll(".item")
 
  const space1 =itemContainers[1].getBoundingClientRect().top - itemContainers[0].getBoundingClientRect().bottom 
  secondTimeLineDot.style.top =`${parseFloat(itemContainers[0].clientHeight)+space1}px`
  
  const space2 =itemContainers[2].getBoundingClientRect().top - itemContainers[1].getBoundingClientRect().bottom 

  thirdTimeLineDot.style.top =`${parseFloat(itemContainers[0].clientHeight) + parseFloat(itemContainers[1].offsetHeight)+space1+space2}px`

  
    
  



  progressLine.style.height = progressLineHeight + "px"
  movingDot.style.top = progressLineHeight + "px"

  dots.forEach(dot=>{
    if(parseFloat(progressLineHeight) > parseFloat(dot.offsetTop))
      dot.classList.add("filled")
    else{
      dot.classList.remove("filled")
    }
  })
  
});
