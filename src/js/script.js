let singleCategories = document.getElementsByClassName('single-particulier') 

let categoriesArray = Array.from(singleCategories)

let selectedCategory = 'mariage'


const changeSelectedCategory = function(event) {
    selectedCategory = event.target.id

    document.getElementsByClassName('single-particulier--visible')[0].classList.remove('single-particulier--visible')
    event.target.classList.add('single-particulier--visible')

    document.getElementsByClassName('particulier-selected__description--visible')[0].classList.remove('particulier-selected__description--visible')
    document.getElementById('description-' + selectedCategory).classList.add('particulier-selected__description--visible')

    document.getElementsByClassName('particulier-categories__link--visible')[0].classList.remove('particulier-categories__link--visible')
    document.getElementById('picture-' + selectedCategory).classList.add('particulier-categories__link--visible')

}

const displayNavMenu = function(event) {
    document.getElementById("navIconSVG").classList.toggle("main-nav__icon--opened")
    Array.from(document.getElementById("navIconSVG").parentElement.getElementsByClassName("main-nav__list")).forEach(menuItem => {
      console.log(menuItem);
      menuItem.classList.toggle("main-nav__list--visible")
    });
  }

categoriesArray.forEach(category => {
    category.addEventListener('click', changeSelectedCategory)
});



  
document.getElementById("navIconSVG").addEventListener("click", displayNavMenu)
