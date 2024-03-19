const MV_list = {
    "data": {
        {
        "title": "YouTube",
        "url": "https://youtube.com/@kame_ta"
        },
        {
            "title": "Twitter",
            "url": "https://twitter.com/kame_ta8110"
        }
    }
};
const displayElement = document.getElementById('mvList');
function loaded() {
    displayElement.innerHTML = "";
    for (var i = 0; i < Object.keys(MV_list['data'].length); i++) {
        displayElement.innerHTML += "<h4>" + MV_list[i].title + "</h4><p><a href='" + MV_list[i].url + "'>view</a></p><br><br><hr>"
    }

}
window.onload = setTimeout(() => {loaded()},120);
