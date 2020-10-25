## 学习笔记

#### reactive
+ 使用Proxy set、get监听数据
```javascript 
let object = {a: 1};
let po = new Proxy(object, {
  set (obj, prop, val) {
    console.log(obj, prop, val);
    obj[prop] = val;
    return val;
  },
  get (obj, prop) {
    console.log(obj, prop);
    return obj[prop];
  }
});
```
+ 定义callbacks数组存放所有effect中的回调函数，在Proxy中set拦截器中执行callbacks。
+ 数据双向绑定 
```javascript 
// 使用effect
effect(() => { document.getElementById('b').value = po.b; });
// 使用addEventListener
document.getElementById('r').addEventListener('input', (event) => (po.r = event.target.value));
```

#### 基本拖拽
+ mousemove和mouseup如果在draggable上监听，鼠标移动过快，可能会发生拖断现象。所以在document上监听。
+ 在mousedown里面监听mousemove和mouseup事件，只有我们鼠标按下去之后才进行监听。

#### 正常流里的拖拽
+ 通过Range找到能拖拽的空位。
+ 用CSSOM的APIgetBoundingClientRect获取range的位置。
+ 使用变量存储所有的ranges，当mousemove触发的时候找到最近的range，插入draggable的元素。

