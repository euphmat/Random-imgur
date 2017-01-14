//■変数
var l = 5; 				//文字列の長さ
var ran = ""; 		//ランダム文字列を格納する変数
var picstr = ""; 	//最終的に表示する文字列
var c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
var cl = c.length;
var width;				//画像の横サイズを格納
var height;				//画像の縦サイズを格納
var img = new Image();	//サイズ取得用の画像を格納

//■URL先に画像がある場合表示、ない場合リロード
function reload()
{
	//■ランダム文字列生成
	ran = "";
	for (var i = 0; i < l; i++)
	{
		ran += c[Math.floor(Math.random() * cl)];
	}
	picstr = "http://i.imgur.com/" + ran + ".jpg";
	document.getElementById("picture").src = picstr;

	var images = document.getElementsByTagName('img');
	for (var i = 0; i < images.length; i++)
	{
		var img = new Image();
		img.onload = function ()
		{
			//■画像読み込み完了後に処理開始
			size();
			if (width == 161 && height == 81)
			{
				reload();
				document.getElementById("picture").src = "hide.png";
			}
			else
			{
				document.getElementById("picture").src = picstr;
				document.getElementById("address").href = picstr;
			}
		}
		img.src = images[i].src;
	};
}
//■サイズ取得
function size()
{
	img = new Image();
	img.src = picstr;
	width = img.width; // 幅
	height = img.height; // 高さ
}