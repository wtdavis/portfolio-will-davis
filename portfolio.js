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


// event listeners -----------------------------



        tile1.addEventListener("click", () => {
            handleTileClick(tile1) 
        })
        tile2.addEventListener("click", () => {
            handleTileClick(tile2) 
        })
        tile3.addEventListener("click", () => {
            handleTileClick(tile3) 
        })

    
//  dynamic content panels --------------------------
        let productTextStreetEasy = 'EliteEasy is a fullstack clone of StreetEasy, the NYC real-estate site, built with React and Ruby on Rails. Inspired by the "rent is too dang high" political candidate, this represents my first fullstack building experience, and an exercise in style guide adherence.'
        let productTextCapyCopter = 'CapyCopter is a vanilla Javascript side-scroller, an original game I made during App Academy. The purpose of this project was to bring a complex program from concept to deployment, without the use of 3rd party libraries.'
        let productTextTripClub = 'Trip Club is an original web app I created in concert with Olga Bessanova at App Academy, built on the MERN stack. The app allows multiple users to collaborate on a trip itinerary, incorporate maps, and upload photos. Our goal was to create a simple and useful tool, quickly, and as a team.'


}
window.addEventListener("DOMContentLoaded", App())
