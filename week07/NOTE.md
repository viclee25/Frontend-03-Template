学习笔记

#### HTML的定义：XML与SGML
DTD与XML namespace
+ http://www.w3.org/1999/xhtml
+ http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd

#### HTML语法 
合法元素
+ element: <tagname></tagname>
+ text:text
+ comment:<!-- comments -->
+ documentType:<!Doctype html>
+ processingInstruction:<?a 1?>
+ CDATA:<![CDATA[]]>

字符引用
+ &#161;
+ &amp;
+ &lt
+ &quot

#### DOM API
导航类操作
+ parentNode
+ childNodes
+ firstChild
+ ...

修改操作
+ appendChild
+ insertBefore
+ removeChild
+ replaceChild

高级操作 
+ compareDocumentPosition是一个用于比较两个节点中关系的函数
+ contains检查一个客店是否包含另一个节点的函数
+ isEqualNode检查两个节点是否完全相同
+ isSameNode检查两个节点是否是用一个节点，实际上可以在js中用’===‘
+ cloneNode复制一个节点，如果传入参数true，则会连同子元素做深拷贝

#### 事件API
Event：冒泡与捕获
+ 冒泡：当一个事件发生在一个元素上，它会首先运行在该元素上的处理程序，然后运行其父元素上的处理程序，然后一直向上到其他祖先上的处理程序。
+ 捕获：冒泡相反，事件会从最外层开始发生，知道最具体的元素

#### Range API
强大的Node 操作 API，用于更精细的操作节点，例如操作半个节点，操作批量节点
+ var range = new Range() 创建range对象
+ range.setStart(element, 9) 设置起点
+ range.setEnd(element, 4) 设置终点
+ var range = document.getSelection().getRangeAt(0) 选中一个范围
+ range.setStartBefore 将起点设置在某个节点之前
+ range.selectNode 选中一个节点
+ range.insertNode(document.createTextNode("aa")) 在range中插入一个节点 相当于增加
+ var fragment = range.extractContents() 取出range中选取的内容 相当于删除

#### CSSOM
Rules对象 
+ document.styleSheets[0].cssRules 获取style
+ document.styleSheets[0].insertRule('xxx', 0) 插入style代码
+ document.styleSheets[0].removeRule(0) 移除style
+ CSSStyleRule
+ CSSCharsetRule
+ ...

#### CSSOM View
window
+ window.innerHeight 浏览器HTMl实际显示高度
+ window.innerWidth 浏览器HTML实际显示宽度
+ window.outerWidth 浏览器窗口总共暂用的宽度 不常用
+ ...

Scroll
+ scrollTop
+ scrollWidth 可滚动内容最大宽度
+ scroll(x, y) 滚动指定位置
+ ...

Layout 
+ element.getClientRects() 获取元素所有的盒模型
+ element.getBoundingClientRect() 获取包含区域

#### 其他API
ECMA
+ ECMAScript
khronos
+ WebGL
WHATWG
+ HTML
W3C
+ web audio
+ web animation
+ CG/WG

#### 思维导图笔记
https://shimo.im/mindmaps/Wt33VrCyRPQvKypD/