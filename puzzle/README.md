
利用 HTML5 + CSS3 + JavaScript，实现了一个简单的拼图游戏。

> 这里说明一下，代码中使用的随机打乱方块的算法非常简单，但是存在 bug，有 50% 的概率生成的顺序是无法复原的，这个时候就只能点击重新开始。


## 九宫格拼图

它的玩法是移动空格块旁边的方块，使得它们按照方块上面标的数字顺序排好。

* 点击"开始"按钮时，按钮文本变成"暂停"，并开始计时。
* 完成拼图后停止计时，并弹出一个框，提示完成。
* 点击"重来"按钮，会把所有方块打乱顺序，并重新开始计时。
