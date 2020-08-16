## 学习笔记
主要学习了浏览器的HTML Parse和 CSS Computing部分

#### HTML Parse 
从文件拆分开始，将文件拆分到单独文件，使用状态机来实现html的分析，在html标准中，规定html的状态，解析标签，创建元素，将属性值分类为单引号，双引号，无引号几种进行处理，使用token构建dom树，最后将文本添加到dom树中。

#### CSS Computing
css计算先收集CSS规则，遇到style标签将css规则保存起来，添加调用，并从获取父元素序列，计算父元素匹配的顺序是从内到外的进行，匹配计算选择器，一旦选择匹配，就应用选择器到元素上，形成computedstyle，最后根据css的四元组规则，进行权重计算，完成覆盖权重低的样式规则。

#### 思维导图笔记
https://shimo.im/mindmaps/TTPwj8hJ9WCwpkht/