## POSTMAN 教學

1. 先從chrome上安裝應用程式
![](https://github.com/ST2DE/wee1-homework-yf-ashu/blob/master/notebook/img/postman1.png?raw=true)

2. 確認你的應用程式上有安裝成功後打開他

3. 打開後的畫面如下圖
![](https://github.com/ST2DE/wee1-homework-yf-ashu/blob/master/notebook/img/postman2.png?raw=true)

左邊區塊為歷史紀錄及資料夾，右邊為可選擇request方式及url填入
下方則是顯示區域

## 其他介紹
* 點資料夾旁邊的點點點，會出現可以匯出(Export)你的設定給別人
![](https://github.com/ST2DE/wee1-homework-yf-ashu/blob/master/notebook/img/postman7.png?raw=true)

* 畫面左上角有一個Import，剛剛會出的檔案就能從這邊再匯入進去
![](https://github.com/ST2DE/wee1-homework-yf-ashu/blob/master/notebook/img/postman8.png?raw=true)


## 建立常用url
1. 點一下畫面右上角齒輪，有一個manage environment，點進去
![](https://github.com/ST2DE/wee1-homework-yf-ashu/blob/master/notebook/img/postman9.png?raw=true)


2. 按下Add後會出現下方畫面，key是你的連結名稱，value就是你的url
![](https://github.com/ST2DE/wee1-homework-yf-ashu/blob/master/notebook/img/postman10.png?raw=true)


3. 好了之後回到主畫面來測試看看，在url輸入區域的部分打上  {{key名稱}} 這樣就設定完畢了
![](https://github.com/ST2DE/wee1-homework-yf-ashu/blob/master/notebook/img/postman11.png?raw=true)

## POST
將欲測試的POST連結貼到url裡
![](https://github.com/ST2DE/wee1-homework-yf-ashu/blob/master/notebook/img/postman3.png?raw=true)

Header就是bodyParser要解析的資料
![](https://github.com/ST2DE/wee1-homework-yf-ashu/blob/master/notebook/img/postman4.png?raw=true)

body裡的x-www-form-urlencoded就是我們要帶入的值，填寫完按send他就會將結果顯示於下方
![](https://github.com/ST2DE/wee1-homework-yf-ashu/blob/master/notebook/img/postman5.png?raw=true)

## GET
get的測試資料比較簡單，就直接照著你設定的路徑看有沒有結果就行了
![](https://github.com/ST2DE/wee1-homework-yf-ashu/blob/master/notebook/img/postman6.png?raw=true)

參考資料：
1. https://www.getpostman.com/docs/v6/
2. https://dotblogs.com.tw/kinanson/2015/11/07/153838
3. https://i5ting.github.io/node-http/
