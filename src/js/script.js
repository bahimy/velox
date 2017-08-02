(function(){
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

    var contacts = document.querySelector('.js-accordion')
    var contactsToggleButton = document.querySelector('.js-minimize-contacts')
    var contactsAnchorLink = document.querySelector('.js-bring-contacts')
    var symbol = document.querySelector('.js-minimize-symbol')

    var symbolUp = document.createTextNode("\uf106")
    var symbolDown = document.createTextNode("\uf107")

    symbol.appendChild(symbolDown)

    contactsToggleButton.addEventListener("click", function() {
        if (contacts.style.maxHeight) contacts.style.maxHeight = null
        else contacts.style.maxHeight = contacts.scrollHeight + "px"

        if (symbol.firstChild == symbolUp) symbol.replaceChild(symbolDown, symbolUp)
        else symbol.replaceChild(symbolUp, symbolDown)
    })

    contactsAnchorLink.addEventListener("click", function() {
        contacts.style.maxHeight = contacts.scrollHeight + "px"
        symbol.replaceChild(symbolUp, symbolDown)
    })
})();
