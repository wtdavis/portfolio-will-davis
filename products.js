function Product (activeTile) {
    debugger
    let tile1 = document.querySelector(".tile-1")
    let tile2 = document.querySelector(".tile-2")
    let tile3 = document.querySelector(".tile-3")

    let tile1Img = document.querySelector(".tile-1-img")
    let tile2Img = document.querySelector(".tile-2-img")
    let tile3Img = document.querySelector(".tile-3-img")

    let productPanel = document.querySelector(".product-screen")


    let enlargeTile;
    let normalsizeTiles;

    switch (activeTile) {
        case (tile1):
            console.log(activeTile === tile1)
            enlargeTile = tile1Img;
            normalsizeTiles = [tile2Img, tile3Img];
            break;
        case (tile2): 
        console.log(activeTile === tile2)
            enlargeTile = tile2Img;
            normalsizeTiles = [tile1Img, tile3Img];
            break;
        case (tile3):
            console.log(activeTile === tile3)
            enlargeTile = tile3Img;
            normalsizeTiles = [tile1Img, tile2Img];
            break;
        default: 
            enlargeTile = null;
            normalsizeTiles = [tile1Img, tile2Img, tile3Img]
    }

    if (enlargeTile) {
        enlargeTile.setAttribute("style", "height:300px;")
        for (let i=0; i<normalsizeTiles.length; i++) {
            normalsizeTiles[i].setAttribute("style", "height:50px")
        }
    }

    if (normalsizeTiles && (!enlargeTile)) {
        for (let i=0; i<normalsizeTiles.length; i++) {
            normalsizeTiles[i].setAttribute("style", "height:140px")
        }

    }

}

export default Product