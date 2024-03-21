//data setting
const info = [
	{
		date: "2024-03-22",
		ms: "プロフィール追加"
	},
	{
		date: "2024-03-21",
		ms: "サイト開設！"
	}
];

//element setting
const news = document.getElementById("news_data");
const mainPage = document.getElementById("page");
const loading = document.getElementById("load");

function newsLoad() {
	var val = info.length;
	news.innerHTML = "";
	setTimeout(() => {
		for (let count = 0; count < val; count++) {
			var ctx =
				"<p>" + "[" + info[count].date + "]<br>" + info[count].ms + "</p><hr>";
			news.innerHTML += ctx;
		}
	}, 320);
}

window.onload = setTimeout(() => {
	mainPage.style.display = "block";
	loading.style.display = "none";
	newsLoad();
}, 3200);