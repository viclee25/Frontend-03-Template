## 学习笔记
主要学习了浏览器的运作原理和基本渲染过程以及服务器和用户之间信息的传递过程。

#### 浏览器渲染原理
浏览器是通过5个步骤完成整体的渲染：url（http）-> html(parse) -> dom(css computing) -> dom with css(layout) -> dom with position(render) ->bitmap

#### 状态机
学习状态机基本知识，每个状态都是一个机器，在每一个机器中，可以进行计算，存储，输出；所有的机器接受的输入是一致的；状态机的每个机器本身没有状态，如果我们用函数表示就是纯函数，没有副作用。每一个机器知道下一个状态，每个机器都有确定的下一个状态是moore；每个机器根据输入决定下一个状态是mealy。

#### HTTP协议解析
HTTP协议是文本协议，可以使用学习的状态机来进行字符串解析。

#### 其他知识点
void async function() {}()
利用 void 运算符让 JavaScript 引擎把一个function关键字识别成立即调用函数表达式，会立即执行函数内容。

#### 思维导图笔记
https://shimo.im/mindmaps/TTPwj8hJ9WCwpkht/
