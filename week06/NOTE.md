## 学习笔记

#### CSS排版
浏览器排版技术大概分成三代:
+ 正常流（Normal Flow），代表是 display: block、display: inline-block、display: inline、position: absolute、position: relative、float、clear。
+ 弹性布局（Flexiable Box Layout），就是 display: flex。
+ 网格布局（Grid Layout），就是 display: grid。

#### 盒、标签和元素的关系
+ HTML 代码中可以书写开始标签、结束标签、自封闭标签。
+ 一对起止标签，表示一个元素。
+ DOM 树中存储的是元素和其他类型的节点。
+ CSS 选择器选中的是元素。
+ CSS 选择器选中的元素，在排版时可能会产生多个盒。
+ 排版和渲染的基本单位是盒。

源代码里面写的是「标签」，在语义里面的是「元素」，表现里面的是「盒」。

#### 正常流
正常流排版其实就跟我们写字的方式一样，依次排列，排不下就换行.
正常流排版分为三步：
+ 收集「盒」进行。
+ 计算「盒」在行中的排布。
+ 计算行的排布。

#### IFC（行内级格式化上文）
当遇到「行内级盒」或者「文字」，首先尝试排入行内级格式化上文，如果排不下，那么创建一个 line box（行盒），先将行盒排版（行盒是一个块级盒），行盒会创建一个行内级格式化上下文。

#### BFC（块级格式化上下文）
BFC 就是从上到下依次排列，每一个 BFC 都占一整行。
当遇到「块级盒」，就排入块级格式化上下文。

#### margin 折叠
+ margin 折叠只会发生在 BFC 里面，并且只发生在垂直方向
+ margin 折叠只会发生在同一个 BFC 里面，对外面的元素造成影响

#### 思维导图笔记
https://shimo.im/mindmaps/kXKkvQr9GyKctvYk/
