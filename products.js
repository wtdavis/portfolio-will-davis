function Product (activeTile) {
    console.log("product")
    let tile1 = document.querySelector(".tile-1")
    let tile2 = document.querySelector(".tile-2")
    let tile3 = document.querySelector(".tile-3")

    let tile1Img = document.querySelector(".tile-1-img")
    let tile2Img = document.querySelector(".tile-2-img")
    let tile3Img = document.querySelector(".tile-3-img")

    let productPanel = document.querySelector(".product-screen")


    let enlargeTile;
    let normalsizeTiles;
    let activeProductText
    let liveLink
    let githubLink

//  product tile content panels --------------------------

    let productTextStreetEasy = `<p> EliteEasy is a fullstack clone of StreetEasy, the NYC real-estate site, built with React and Ruby on Rails. Inspired by the "rent is too dang high" political candidate, this represents my first fullstack building experience, and an exercise in style guide adherence. </p> <a href="${liveLinkStreetEasy}"> Live Link </a> <a href="${githubStreetEasy}"`
    let productTextCapyCopter =  `CapyCopter is a vanilla Javascript side-scroller, an original game I made during App Academy. The purpose of this project was to bring a complex program from concept to deployment, without the use of 3rd party libraries. <a href="${liveLinkCapyCopter}"> Live Link </a> <a href="${githubCapyCopter}"`
    let productTextTripClub =  `Trip Club is an original web app I created in concert with Olga Bessanova at App Academy, built on the MERN stack. The app allows multiple users to collaborate on a trip itinerary, incorporate maps, and upload photos. Our goal was to create a simple and useful tool, quickly, and as a team. <a href="${liveLinkTripClub}"> Live Link </a> <a href="${githubTripClub}"`

    let liveLinkStreetEasy = "https://streeteasy-fullstack.onrender.com"
    let githubStreetEasy = "https://github.com/wtdavis/streeteasy_fullstack"
    let liveLinkCapyCopter = "https://wtdavis.github.io/hellocopter_js_project/"
    let githubCapyCopter = "https://github.com/wtdavis/hellocopter_js_project"
    let liveLinkTripClub = "https://tripclub.onrender.com"
    let githubTripClub = "https://github.com/wtdavis/trip_club"

    // active tile logic- assigning objects into groups for resizing

    switch (activeTile) {
        case (tile1):
            enlargeTile = tile1Img;
            activeProductText = productTextStreetEasy
            normalsizeTiles = [tile2Img, tile3Img];
            break;
        case (tile2): 
            enlargeTile = tile2Img;
            activeProductText = productTextCapyCopter
            normalsizeTiles = [tile1Img, tile3Img];
            break;
        case (tile3):
            enlargeTile = tile3Img;
            activeProductText = productTextTripClub
            normalsizeTiles = [tile1Img, tile2Img];
            break;
        default: 
            enlargeTile = null;
            normalsizeTiles = [tile1Img, tile2Img, tile3Img]
            activeProductText = null
    }

    // enlarge tile if selected, or equalize all tiles if none selected 
    
    
    if (enlargeTile) {
        productPanel.innerHTML = activeProductText
        enlargeTile.setAttribute("style", "height:300px;");
        productPanel.setAttribute("style", "visibility:visible");
        for (let i=0; i<normalsizeTiles.length; i++) {
            normalsizeTiles[i].setAttribute("style", "height:50px;opacity:0.3")
        };
    } else {
        productPanel.setAttribute("style", "visibility:hidden");
        productPanel.innerHTML = null;
        for (let i=0; i<normalsizeTiles.length; i++) {
            normalsizeTiles[i].setAttribute("style", "height:140px;opacity:0.3")
        };
    };

};

export default Product