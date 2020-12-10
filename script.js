function pageLoad() {
    /*
    To do appot készítünk, alapértelmezésben 10 üres mező áll rendelkezésre, de hozzá tudunk adni újakat és minden mezőben van egy checkbox
    Text input mező, amibe írhatjuk a feladatot és egy törlés gomb, amivel ki tudjuk törölni a sort.
    */

    //Hozzáadom a rootot
    const root = document.getElementById('root');

    //El kell tárolnunk a maximális számot egy változóban (10)
    const numLength = 10;

    //div befoglaló elem, checkbox, text input, delete gomb (HTML struktúra eltárolása egy változóba)
    const toDoList = `
                    <div class="field">
                        <input type="checkbox">
                        <input class="input-text" type="text">
                        <button class="delete-button" >Delete</button>
                    </div> `

    //for ciklussal 10 sort hozunk létre, hozzáadjuk a felülethez(insertAdjestHTML)
    for (let x = 0; x < numLength; x++) {
        root.insertAdjacentHTML("afterbegin", toDoList);
    }

    //gomb hozzáadása alulra(insertAdjestHTML beállítása afterend, hogy a rooton kívülre kerüljön)
    const creatingButton = '<button id="add-button">Add</button>';
    root.insertAdjacentHTML("afterend", creatingButton);

    //click esemény hozzáadása, változóban hozzáadadott sor hozzáillesztése a root elemhez
    const addButton = document.getElementById('add-button');
    addButton.addEventListener('click', addNewLine);

    function addNewLine() {
        root.insertAdjacentHTML("beforeend", toDoList);
    }


    setInterval(() => {
        //classnév alapján kijelölöm az összes delete gombot és elmentem egy változóba
        const delButtons = document.querySelectorAll('.delete-button');

        //for ciklussal mindegyik delete gombra adunk click eseményt
        for (let x = 0; x < delButtons.length; x++) {
            const delButton = delButtons[x];
            delButton.addEventListener('click', deleteLine)
        }
    }, 1000);

    //hogyan fogom tudni kijelölni azt az elemet amit majd ki szeretnék törölni?
    function deleteLine(delButton) {
        delButton.path[1].remove();
    }
}

window.addEventListener("load", pageLoad);