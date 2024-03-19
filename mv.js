const MV_list = {
    "data": [
        {
            "title": "「勇者」歌ってみた",
            "url": "https://m.youtube.com/shorts/Wp-bx7wOH-4"
        },
        {
            "title": "「きゅうくらりん」歌ってみた",
            "url": "https://m.youtube.com/shorts/2VnICwu_keA"
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
