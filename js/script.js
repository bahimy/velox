"use strict"

        /*      toggle navigation
         ********************************/

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




        /*      toggle contacts
         *********************************/

var contacts = document.querySelector('.js-contacts')
var contactsToggleButton = document.querySelector('.js-minimize-contacts')
var symbol = document.querySelector('.js-minimize-symbol')

var symbolUp = document.createTextNode("\uf106")
var symbolDown = document.createTextNode("\uf107")

symbol.appendChild(symbolUp)

contactsToggleButton.addEventListener("click", function(e) {
    contacts.classList.toggle("u-remove")
    if (symbol.firstChild == symbolUp) symbol.replaceChild(symbolDown, symbolUp)
    else symbol.replaceChild(symbolUp, symbolDown)
})
