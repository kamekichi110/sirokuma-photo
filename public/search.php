<?php
// db connect
include 'db_connect.php';
//フォームデータ取得
$key = $_POST['key'];
//検索クエリ作成
$sql = "SELECT * FROM image WHERE function LIKE '%$key%' OR name LIKE '%$key%' OR title LIKE '%$key%'";

//クエリ実行
$result = $conn->query($sql);

//結果確認&表示
if ($result->num_rows > 0) {
    //データが見つかった場合
    while ($rows = $result->fetch_assoc()) {
        echo '<div class="result-table"><';
    }
}