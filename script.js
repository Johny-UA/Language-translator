let TranslaterIcons = document.querySelector("#Translater_icons");
let item = TranslaterIcons.children;
const AllLangs = ["EN", "UA"];

for (i = 0; i < item.length; i++) {
    let items = item[i];
    items.onclick = () => {
        location.href = window.location.pathname + "#" + items.innerText;
        let hash = window.location.hash.substring(1);
        if (!AllLangs.includes(hash)) {
            location.href = window.location.pathname + "#EN";
        }
        items.innerText = hash;
        for (let key in ArrLang) {
            let element = document.querySelector(key);
            if (element) {
                element.innerHTML = ArrLang[key][hash];
            }
        }
    };
}

window.addEventListener("load", (event) => {
    location.href = window.location.pathname + "#EN";
});
