const DOMselector = document.querySelector("main");

const obj2HTML = (obj) => {
    return `
        <div>
            <h2>Invention: ${obj.invention}</h2>
            <h3>Inventor: ${obj.inventor}</h3>
            <p>Details: ${obj.details}</p>
        </div>
    `
}

const getData2DOM = () => {
    return fetch("https://gist.githubusercontent.com/brendalong/ab2424b0069ed0dd56b01951462a109d/raw/716c0776c45adea089644cffa7eadab139f9f47c/womensday.json")
    .then(response => response.json())
    .then(parsedResponse => {

        html = "";

        for (const eachObj of parsedResponse) {
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



