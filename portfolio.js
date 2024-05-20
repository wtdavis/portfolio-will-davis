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

    let trackingReference = [tile1, tile2, tile3]
    let success = false
    let errors = []


    let currentTile = tile1;

    tile1.addEventListener("click", () => {
        console.log("click")
        handleTileClick(tile1) 
    })
    tile2.addEventListener("click", () => {
        console.log("click")
        handleTileClick(tile2) 
    })
    tile3.addEventListener("click", () => {
        console.log("click")
        handleTileClick(tile3) 
    })


    const handleTileClick = (tile) => {
        if (currentTile === tile) {
            productScreen.setAttribute("visibility", "hidden")
        }
        else {
            productScreen.setAttribute("visibility", "visible")
        }
        console.log(pageState.activeTile())
    }

    // console.log(errors)
}
window.addEventListener("DOMContentLoaded", App())
