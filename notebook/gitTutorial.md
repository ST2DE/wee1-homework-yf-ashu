## Git 教學

* 目錄
  * 介紹Git是什麼
  * 版本控制比較
  * 基礎建立github專案
  * 其他指令
  * Git問題
  * 參考資料

---
### Git是什麼？

git是一種版本控制系統，同樣為版本控制的還有SVN、FTP
像網路硬碟那樣的感覺，只有最後一位上傳的code會被保留而已，如果傳輸中途斷線了會變成亂碼

* 什麼是版本控制？
版本控制：主版與支流之間的控管。
版本控制是一種軟體工程技巧，藉此能在軟體開發的過程中，確保由不同人所編輯的同一程式檔案都得到同步。


透過這樣的版本控制系統，可以清楚的記錄每個檔案是誰在什麼時候加進來、什麼時候被修改或刪除。


* 好的版本控制系統有許多好處：

  * 頻繁的遞交可以幫助團隊開發進度的透明化。

  * 定義且公布最新更新的程式碼，除非程式碼被提交上去，否則不會被整合。

  * 維護專案的工作歷史記錄，將每一個特定版本內的具體內容建檔並編碼，甚至能列出差異。
  
### 版本控制比較
|          | FTP      | SVN     |  Git     |
| -------- | -------- | -------- |-------- |
|版本控制    |各自的主機 |集中式 |分散式|
| 網路需求   | 需連網運作|需連網運作 |可線下執行 |
|  檔案庫    | 需自行管理及命名 | 中央版本庫及分支 |使用者皆有獨立版本庫及分支|
|同步提交|只有最後那個人有提供上去|可同步提交上去|可同步提交上去|

> 集中式版本控制系統 VS 分散式版本控制系統
* 集中式版本控制系統 
  * 資料都在中央伺服器，需先連到中央伺服器取得檔案，然後完成修改後再重新上傳上去
  * 要連網路才能工作
  * 中央伺服器發生問題，那就無法工作了

* 分散式版本控制系統
  * 開發者都能擁有獨立的檔案庫
  * 不必連網就能運作，在完成檔案時一併向上提交即可
  



### 基礎建立github專案
如果在github上有專案的話可以先clone回來，這樣就可以直接remote了
```
mkdir 資料夾名稱
cd my_project
git clone 你的專案
```
好了之後
```
git status //看狀態
```
Untracked files的話是全新的檔案，尚未被提交過

```
git add 你的檔案
git add . //將所有有更動的檔案提交
```
這邊記住一點！！！！！！
Git 在計算、產生物件的時候，是根據「檔案的內容」去做計算的，所以光是新增一個目錄，Git 是沒辦法處理它的。
**空的目錄無法被提交！**

所以請讓你的目錄裡面有東西

提交完之後再用git status看一次，你的狀態會變成Changes to be committed

好了之後
```
git commit -m "直接輸入訊息但不要打中文"
git push
```

就完成了

* 補充說明:檔案狀態
 * Untracked：檔案尚未被追蹤時的初始狀態
 * Unmodified：將untracked的檔案加入追蹤，以及staged狀態的檔案commit後
 * Modified：檔案只要有修改就會到這個狀態
 * Staged：git add後放在暫存區
 * Commited：git commit後放在儲存區



## 其他指令

## git init
```
git init
```
初始化資料夾，做完此步驟後，資料夾會多一個隱藏資料夾叫做.git (可以輸入ls -a查看)

### .gitigore 忽略檔案

.gitignore 作用範圍包含整個資料夾以及其所有子資料夾

.gitignore 也可以存在多個資料夾中

每個資料夾都可以另外定義 .gitignore 的內容

## git log 紀錄檔/git diff 比較

```
git log//按q可跳出瀏覽
git log —graph//圖形化
git diff
```
git diff是比對檔案與版本差異

先從git log中得到id資訊(一長串數字的前五碼如e17f3)

例如下圖

![](https://github.com/ST2DE/wee1-homework-yf-ashu/blob/master/notebook/img/git%20diff1.png?raw=true)

再將id資訊填入作比對

如git diff 5293b 91d30 會呈現下圖資訊(紅色為刪除，綠色為增加)

![](https://github.com/ST2DE/wee1-homework-yf-ashu/blob/master/notebook/img/git%20diff2.png?raw=true)

## git rm
```
git rm
```
將檔案刪除

## git mv
``` 
git mv 檔案名 資料夾
```
搬移檔案，這樣就不用add或rm檔案了

## git pull
``` 
git pull
```
同步遠端的檔案

## git rebase與git merge差異

他們作的事情一樣，都是合併，只是合併的過程不一樣
``` 
git rebase
git merge
```
![](https://github.com/ST2DE/wee1-homework-yf-ashu/blob/master/notebook/img/git%20diff3.png?raw=true)

merge：兩分支會在master中有一個新的節點，現有的分支不會作改變

![](https://wac-cdn.atlassian.com/dam/jcr:e229fef6-2c2f-4a4f-b270-e1e1baa94055/02.svg?cdnVersion=ka)

rebase:直接在master上接上你的分支

![](https://wac-cdn.atlassian.com/dam/jcr:5b153a22-38be-40d0-aec8-5f2fffc771e5/03.svg?cdnVersion=ka)

## git branch 
```
git branch [new branch’s name]
-r  act on remote-tracking branches
-a  list both remote-tracking and local branches
-d  delete fully merged branch
-D  delete branch (even if not merged)
```
新增分支

## git checkout 
```
git checkout
```
切換分支

## git stash
```
git stash [apply不會刪之前的進度/pop會刪除以往的進度/list]
```
暫存你目前的工作，apply/pop是取出你的暫存，如下圖

![](https://github.com/ST2DE/wee1-homework-yf-ashu/blob/master/notebook/img/git-stash1.png?raw=true)
![](https://github.com/ST2DE/wee1-homework-yf-ashu/blob/master/notebook/img/git-stash2.png?raw=true)


## git config
```
git config --global
git config --global  user.name "zlargon"
git config --global  user.email "zlargon@icloud.com"
```
設定初始參數
``` 
git config --list
```
可查看設定的參數


## Git問題

1. Updates were rejected because a pushed branch tip is behind its remote

github上的版本跟自己本機的版本不同時

```
git push -u origin master -f 
```
強制更新成你電腦上的分支

2. rebase in progress;
代碼發生衝突時
```
git status
git add
git rebase --continue
```

## 參考資料：
1. [Git](https://zlargon.gitbooks.io/git-tutorial/content/)
2. [為你自己學 Git](https://gitbook.tw/)
3. [Git官方](https://git-scm.com/book/en/v2)
4. [30天精通Git版本控管](https://ithelp.ithome.com.tw/users/20004901/ironman/525)
5. [合併介紹](https://github.com/geeeeeeeeek/git-recipes/wiki/5.1-%E4%BB%A3%E7%A0%81%E5%90%88%E5%B9%B6%EF%BC%9AMerge%E3%80%81Rebase-%E7%9A%84%E9%80%89%E6%8B%A9)
6. [成大資工wiki](http://wiki.csie.ncku.edu.tw/git)


