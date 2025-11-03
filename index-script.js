
const changeBorderColorContainers = document.querySelectorAll(".change-border-color-container");
const changeBackgroundColorContainers = document.querySelectorAll(".change-background-color-container");
const changeTextColorContainers = document.querySelectorAll(".change-text-color-container");
const changeBackgroundImageContainers = document.querySelectorAll(".change-page-color");
const changeButtonColorContainers = document.querySelectorAll(".change-button-color-container");
const changeBorderColor2Containers = document.querySelectorAll(".change-border-color2")

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
const projectContainers = document.querySelectorAll(".project-container")

const tLines = document.querySelectorAll(".t-line")
const tCircles = document.querySelectorAll(".t-circle")

const technologiesUsedContainers = document.querySelectorAll(".technologies-used-container > div")
const projectButtons = document.querySelectorAll(".project-btn")

const observer1 = new IntersectionObserver((pages,observer)=>{
  pages.forEach(page=>{
    if(page.isIntersecting){
      page.target.classList.add("visible")
   
    }
    else{
      page.target.classList.remove("visible")
    }
  })
},{threshold:0.5})

const observer2 = new IntersectionObserver((pages,observer)=>{
  pages.forEach(page=>{
    if(page.isIntersecting){
      page.target.classList.add("visible")
    }
    else{
      page.target.classList.remove("visible") 
    }
    
  })
},{threshold:0.4})
observer1.observe(aboutPageTextContainer)
sectionHeadings.forEach(sectionHeading=>{
  observer2.observe(sectionHeading)
})
projectContainers.forEach(projectContainer=>{
  observer2.observe(projectContainer)
})
tLines.forEach(tLine=>{
  observer2.observe(tLine)
})
tCircles.forEach(tCircle=>{
  observer1.observe(tCircle)
})
homeButton.addEventListener("click",e=>{
  e.preventDefault();
  window.scrollTo({top:0,behaviour:"smooth"});
});
backToTopTextAndIconContainer.addEventListener("click",e=>{
  e.preventDefault();
  window.scrollTo({top:0,behaviour:"smooth"});
});

contrastButton.addEventListener("click", () => {
  if(homePage.classList.contains("dark-mode")){
    homePage.classList.toggle("dark-mode");
    footerPage.classList.toggle("dark-mode");
    mobileMenu.classList.toggle("dark-mode");
    sendButton.classList.toggle("dark-mode");
    changeBorderColorContainers.forEach(container=>{
      container.classList.toggle("dark-mode-border");
    });
    changeBorderColor2Containers.forEach(container=>{
      container.classList.toggle("dark-mode");
    });
    changeTextColorContainers.forEach(container=>{
      container.classList.toggle("dark-mode-text");
    });
    changeBackgroundColorContainers.forEach(container=>{
      container.classList.toggle("dark-mode-background");
    });
    changeBackgroundImageContainers.forEach(container=>{
      container.classList.toggle("dark-mode-image");
    });
    changeButtonColorContainers.forEach(container=>{
      container.classList.toggle("dark-mode-button");
    });
    footerSocialIcons.forEach(icon=>{
      icon.classList.toggle("dark-mode");
    });
    homePageSocialIcons.forEach(icon=>{
      icon.classList.toggle("dark-mode")
    })

    technologiesUsedContainers.forEach(container=>{
      container.classList.toggle("dark-mode")
    })

    projectButtons.forEach(button=>{
      button.classList.toggle("dark-mode")
    })

    contrastButton.textContent="dark_mode";
  }

  else{
            
    contrastButton.textContent="light_mode";

    homePage.classList.toggle("dark-mode");
    footerPage.classList.toggle("dark-mode");
    mobileMenu.classList.toggle("dark-mode");
    sendButton.classList.toggle("dark-mode");

    changeBorderColorContainers.forEach(container=>{
      container.classList.toggle("dark-mode-border");
    });
    changeBorderColor2Containers.forEach(container=>{
      container.classList.toggle("dark-mode");
    });
    changeTextColorContainers.forEach(container=>{
      container.classList.toggle("dark-mode-text");
    });
    changeBackgroundColorContainers.forEach(container=>{
      container.classList.toggle("dark-mode-background");
    });
    changeBackgroundImageContainers.forEach(container=>{
      container.classList.toggle("dark-mode-image");
    });
    changeButtonColorContainers.forEach(container=>{
      container.classList.toggle("dark-mode-button");
    });
    footerSocialIcons.forEach(icon=>{
      icon.classList.toggle("dark-mode");
    });
    homePageSocialIcons.forEach(icon=>{
      icon.classList.toggle("dark-mode")
    })

    technologiesUsedContainers.forEach(container=>{
      container.classList.toggle("dark-mode")
    })

    projectButtons.forEach(button=>{
      button.classList.toggle("dark-mode")
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




