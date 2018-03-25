## Git 教學

Git是什麼？
版本控制，SVN




### 建立github專案
如果在github上有專案的話可以先clone回來，這樣就可以直接remote了
```
mkdir 資料夾名稱
cd my_project
git init
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

## 其他指令
```
git remote
```


``` 
git rebase
```

```
git config --global
```

``` 
git config --list
```


參考資料：
1. https://zlargon.gitbooks.io/git-tutorial/content/
2. https://gitbook.tw/

## Git問題
1. Updates were rejected because a pushed branch tip is behind its remote
github上的版本跟自己本機的版本不同時

```
git push -u origin master -f 
```
強制更新成你電腦上的分支

2. rebase in progress;onto 
代碼發生衝突時
```
git status
git add
git rebase --continue
```


