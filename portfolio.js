import Product from "./products.js"

class PageState {
    constructor (activeTile) {
        this.tile = activeTile
    }

    setActiveTile (tile) {
        this.tile = tile
    }

    unsetActiveTile () {
        let image = document.querySelector(`${this.tile.getAttribute("class")} img`)
        image.setAttribute("style", "width:140px")
        this.tile = null

    }

    activeTile () {
        return this.tile
    }

    activeTileClass () {
        return this.tile.getAttribute("class")
    }
}

function App () {
    console.log("app")
    let pageState = new PageState
    let tile1 = document.getElementById('tile-1')

    let tile2 = document.querySelector('.tile-2')
    
    let tile3 = document.querySelector('.tile-3')

    let productScreen = document.querySelector(".product-screen")

    window.addEventListener("click", () => {
        console.log("click")
    })

    tile1.addEventListener("click", (e) => {
        e.preventDefault();
        handleTileClick(tile1);
    })
    tile2.addEventListener("click", (e) => {
        e.preventDefault();
        handleTileClick(tile2);
    })
    tile3.addEventListener("click", (e) => {
        e.preventDefault();
        handleTileClick(tile3);
    })

    // testButton.addEventListener('click', () => {
    //     testDiv.setAttribute('height', '500px')
    //     console.log(testButton.getAttribute('height'))
    // })

    // testButton.addEventListener('click', () => {
    //     testDiv.setAttribute('style', 'height:500px')
    //     console.log(testButton.getAttribute('height'))
    // })


// event handlers ---------------------------

    const handleTileClick = (tile) => {
        debugger
        if (pageState.activeTile() === tile) {
            // productScreen.setAttribute("visibility", "hidden")
            pageState.setActiveTile(null)
            console.log(pageState.activeTile())
        }
        else {
            // productScreen.setAttribute("visibility", "visible")
            pageState.setActiveTile(tile)
            console.log(pageState.activeTile())
        }   
        Product(pageState.activeTile())
    }





    

}
window.addEventListener("DOMContentLoaded", App())
