function Product (activeTile) {
    let tile1 = document.querySelector(".tile1")
    let tile2 = document.querySelector(".tile2")
    let tile3 = document.querySelector(".tile3")

    let enlargeTile;
    let normalsizeTiles;

    switch (activeTile) {
        case tile1:
            enlargeTile = tile1;
            normalsizeTiles = [tile2, tile3];
            return;
        case tile2: 
            enlargeTile = tile2;
            normalsizeTiles =  [tile1, tile3];
            return;
        case tile3:
            enlargeTile = tile3;
            normalsizeTiles = [tile1, tile2];
            return;
        default: 
            enlargeTile = null;
            normalsizeTiles [tile1, tile2, tile3]
    }

    if (enlargeTile) {
        enlargeTile.setAttribute("style", "width:250px")
    }

    if (normalsizeTiles) {
        for (let i=0; i<normalsizeTiles.length; i++) {
            normalsizeTiles[i].setAttribute("style", "width:250px")
        }
    }

}

export default Product