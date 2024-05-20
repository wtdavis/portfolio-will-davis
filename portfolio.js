


function App () {
    let document = new Document()
    let tile1 = document.querySelector(".tile-1")
    let tile2 = document.querySelector(".tile-2")
    let tile3 = document.querySelector(".tile-3")
    let productScreen = document.querySelector(".product-screen")


    let currentTile = tile1;
    // let productScreen = false;

    tile1.addEventListener("click", () => {
        currentTile = tile1
        // productScreen = true
        handleTileClick() 
    })
    tile2.addEventListener("click", () => {
        currentTile = tile2
        // productScreen = true
        handleTileClick() 
    })
    tile3.addEventListener("click", () => {
        currentTile = tile3
        // productScreen = true
        handleTileClick() 
    })


    const handleTileClick = () => {

    }

}

window.addEventListener("DOMContentLoaded", App())