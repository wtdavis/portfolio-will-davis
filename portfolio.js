import Product from "./products.js"

class PageState {
    constructor (activeTile) {
        this.tile = activeTile
    }

    setActiveTile (tile) {
        this.tile = tile
    }

    activeTile () {
        return this.tile
    }
}

function App () {

    let pageState = new PageState
    debugger
    let tile1 = document.getElementById('tile-1')

    let tile2 = document.querySelector('.tile-2')
    
    let tile3 = document.querySelector('.tile-3')

    let productScreen = document.querySelector(".product-screen")


    tile1.addEventListener("click", () => {
        handleTileClick(tile1) 
    })
    tile2.addEventListener("click", () => {
        handleTileClick(tile2) 
    })
    tile3.addEventListener("click", () => {
        handleTileClick(tile3) 
    })


    const handleTileClick = (tile) => {



        if (pageState.activeTile() === tile) {
            productScreen.setAttribute("visibility", "hidden")
            pageState.setActiveTile(null)
        }
        else {
            productScreen.setAttribute("visibility", "visible")
            pageState.setActiveTile(tile)
        }   

        Product(pageState.activeTile())
    }

    


}
window.addEventListener("DOMContentLoaded", App())
