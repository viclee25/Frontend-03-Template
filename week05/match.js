
// 基础变量
let id = '';
let tagName = '';
let classNames = [];

function match(selector, element) {
  let isMatchSuccess = true;
  const el_arr = selector.split(' ').reverse();
  for (let i = 0; i < el_arr.length; i++) {
    remakeParams();
    if(i > 0) {
      element = element.parentElement;
    }
    isMatchSuccess = matching(el_arr[i], element);
    if(!isMatchSuccess) break;
  }
  return isMatchSuccess;
}

function matching(selector, element) {
  const selectorInfo = getSelectorInfo(selector);
  const elementInfo = getTagInfo(element);
  let isMatch = true;
  // 判断id
  if(selectorInfo.id && selectorInfo.id !== elementInfo.el_id) isMatch = false;
  // 判断标签
  if(selectorInfo.tagName && selectorInfo.tagName.toLowerCase() !== elementInfo.el_tagName) isMatch = false;
  // 判断类名
  if(selectorInfo.classNames && selectorInfo.classNames.length > 0) {
    for(let c of selectorInfo.classNames){
      const arr = elementInfo.el_classNames.length > 0 ? elementInfo.el_classNames : [];
      if(!arr.includes(c)) isMatch = false;
    }
  }
  return isMatch;
}

// 将字符串匹配成 {id, tagName, classNames} 格式
function getSelectorInfo(selector) {
  console.log("selector : ", selector)
  let state = matchStr;
  for (let c of selector) {
    state = state(c);
  }
  return {id, tagName, classNames};
}

// 开始使用状态机匹配字符串
function matchStr(c) {
  if (c === "#") {
    if(!id) id = "";
    return macthID;
  } else if (c === '.') {
    classNames.push("");
    return macthClassName;
  } else if (c.match(/^[a-zA-Z]$/)) {
    return macthTagName(c);
  }
}

// 匹配id
function macthID(c) {
  if (c === '.') {
    return macthClassName;
  } else {
    id += c;
    return macthID;
  }
}

// 匹配类名
function macthClassName(c) {
  if (c === '.') {
    return matchStr(c);
  } else {
    if (classNames.length === 0) {
      classNames = [""];
    }
    // 获取classnames最后一个的index
    const index = classNames.length > 0 ? classNames.length - 1 : 0;
    const _class = classNames[index];
    classNames[index] = _class + c;
    return macthClassName;
  }
}

// 匹配标签
function macthTagName(c) {
  if (c.match(/^[a-zA-Z]$/)) {
    if (!tagName) {
      tagName = '';
    }
    tagName += c;
    return macthTagName;
  } else {
    return matchStr(c)
  }
}

// 重置参数
function remakeParams() {
  id = '';
  tagName = '';
  classNames = [];
}

// 获取当前标签相关信息
function getTagInfo(el) {
  const el_tagName = el.tagName.toLowerCase();
  const el_id = el.id;
  const el_classNames = el.className?.split(' ');
  const el_children = el.children;
  const el_parentElement = el.parentElement;
  return {
    el_tagName,
    el_id,
    el_classNames,
    el_children,
    el_parentElement
  }
}

console.log(match("div #id.class", document.getElementById("id")))