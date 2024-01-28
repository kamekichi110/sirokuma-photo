//変数
const LoaderScreen = document.getElementById('loader-screen');

//ロード完了
window.onload = setTimeout(() => {
    loaded();
}, 1000);

//ロード完了時ロード用divを非表示にする
function loaded() {
    console.log('Data loading is complete!');
    console.log('データロードが完了しました！');
    LoaderScreen.style.display = "none";
}
function reload() {
    LoaderScreen.style.display = "block";
    setTimeout(() => {
        start();
    }, 2100);
}