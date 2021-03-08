const DOMselector = document.querySelector("main");

const obj2HTML = (obj) => {
    return `
    <article>		
        <h2> ${obj.invention}</h2>
        <p>${obj.inventor}</p>
        <p><a href="${obj.moreDetails}">More Details</a></p>
        <button id="learnmore--${obj.id}">Learn More</button>
        <button id="delete--${obj.id}">Delete</button>
    </article>
    `
}

//just fetches data
const getData = () => {
    return fetch("https://gist.githubusercontent.com/brendalong/ab2424b0069ed0dd56b01951462a109d/raw/716c0776c45adea089644cffa7eadab139f9f47c/womensday.json")
    .then(response => response.json())
    .then(parsedResponse => parsedResponse);
}

//fetches data and gets it on the DOM
const getData2DOM = () => {
    return fetch("https://gist.githubusercontent.com/brendalong/ab2424b0069ed0dd56b01951462a109d/raw/716c0776c45adea089644cffa7eadab139f9f47c/womensday.json")
    .then(response => response.json())
    .then(parsedResponse => {

        html = "";

        for (const eachObj of parsedResponse) {
            html += `<hr>`
            html += obj2HTML(eachObj)
        }

        DOMselector.innerHTML = html;
        
    })
}

getData2DOM();


/* Another way to call an async function (getData)
const displayLIst = () => {
    getData()
    .then(response => {
        etc.etc.
    })
}
*/

//EVENT LISTENER ////////////////////////////////

const appElement = document.querySelector("main");

appElement.addEventListener("click", event => {
    console.log("You Clicked Main")
})

appElement.addEventListener("click", event => {
    if (event.target.id.startsWith("learnmore")) {
        console.log("You Clicked Learn More")
    }
})

appElement.addEventListener("click", event => {
    if (event.target.id.startsWith("delete")) {
        console.log("You Clicked Delete")
    }
})