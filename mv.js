const MV_list = {
    "data": [
        {
            "title": "YouTube",
            "url": "https://youtube.com/@kame_ta"
        },
        {
            "title": "Twitter",
            "url": "https://twitter.com/kame_ta8110"
        }
    ]
};

const displayElement = document.getElementById('mvList');

function loaded() {
    displayElement.innerHTML = "";
    try {
        MV_list.data.forEach(item => {
            displayElement.innerHTML += "<h4>" + item.title + "</h4><p><a href='" + item.url + "'>view</a></p><br><br><hr>";
        });
    } catch (error) {
        console.error("An error occurred while loading the MV list:", error);
        displayElement.innerHTML = "Failed to load MV list. Please try again later.";
    }
}

window.addEventListener('load', loaded);
