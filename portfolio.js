class PageState {
    constructor (activeTile) {
        this.tile = activeTile
    }

    setActiveTile (tile) {
        debugger
        this.tile = tile
    }

    unsetActiveTile () {
        debugger
        let image = document.querySelector(`${this.tile.getAttribute("class")} img`)
        image.setAttribute("style", "width:140px")
        this.tile = null
        debugger

    }

    activeTile () {
        return this.tile
    }

    activeTileClass () {
        return this.tile.getAttribute("class")
    }
}

function App () {

    let pageState = new PageState;
    let tile1 = document.getElementById('tile-1');
    let tile2 = document.querySelector('.tile-2');
    let tile3 = document.querySelector('.tile-3');
    // let testButton = document.querySelector('.test-button')
    // let testDiv = document.querySelector('.test-div')

    let productScreen = document.querySelector(".product-screen");
    let trackingReference = [tile1, tile2, tile3];
    let success = false;
    let errors = [];
    let currentTile = tile1;

// test button element -----------------------------------------

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

        let tileImgs = document.querySelectorAll(".product-tile-img")


        if (pageState.activeTile() === tile) {
            productScreen.setAttribute("style", "visibility:hidden")
            pageState.setActiveTile(null)

        }
        else {
            debugger
            let activeTile = pageState.activeTile()
            // pageState.unsetActiveTile()
            pageState.setActiveTile(tile)

            productScreen.setAttribute("style", "visibility:visible")
            let activeTileClass = pageState.activeTileClass().split(" ")
            let tileImg = document.querySelector(`.${activeTileClass[1]} img`)
            tileImg.setAttribute("style", "height:300px")
            debugger
        }
        console.log(pageState.activeTile())
    }


// event listeners -----------------------------



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

    
//  dynamic content panels --------------------------
        let productTextStreetEasy = 'EliteEasy is a fullstack clone of StreetEasy, the NYC real-estate site, built with React and Ruby on Rails. Inspired by the "rent is too dang high" political candidate, this represents my first fullstack building experience, and an exercise in style guide adherence.'
        let productTextCapyCopter = 'CapyCopter is a vanilla Javascript side-scroller, an original game I made during App Academy. The purpose of this project was to bring a complex program from concept to deployment, without the use of 3rd party libraries.'
        let productTextTripClub = 'Trip Club is an original web app I created in concert with Olga Bessanova at App Academy, built on the MERN stack. The app allows multiple users to collaborate on a trip itinerary, incorporate maps, and upload photos. Our goal was to create a simple and useful tool, quickly, and as a team.'


}
window.addEventListener("DOMContentLoaded", App())
