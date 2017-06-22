"use strict"

var navToggleButton = document.querySelector('.js-nav-toggle')
var navBar = document.querySelector('.js-companies-nav')

navToggleButton.addEventListener("click", function(e) {
    navBar.classList.toggle("u-show")
    navBar.classList.toggle("u-opaque")
    e.stopPropagation()
})

document.body.addEventListener("click", function() {
    navBar.classList.remove("u-show")
    navBar.classList.remove("u-opaque")
})
