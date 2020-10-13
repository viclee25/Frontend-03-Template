学习笔记

#### 字符串分析算法

##### 字典树
+ 大量高重复的存储和分析

##### KMP
+ 在长字符串里找模式

##### Wildcard
+ 带通配符的字符串模式

##### 正则
+ 字符串通用模式匹配

##### 状态机
+ 通用的字符串分析

##### LL LR
+ 字符串多层结构分析

#### KMP字典树
![字典树](https://locals-house-prod.oss-cn-shenzhen.aliyuncs.com//localhomeqy/WechatIMG756.png)

#### KMP字符串模式匹配算法
找到字符串的自重复内容

#### Wildcard
如果没有?，Wildcard是若干个kmp组成
如果有?，则是若干个kmp，复杂的组成
+ wildcard: ab*c?d*abc*a?d
+ 只有*: ab*cd*abc*a?d
+ 只有?: c?d, a?d