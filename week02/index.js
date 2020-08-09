/*
  不使用状态机
  */ 

// 找到支付a
function findStr(str) {
  const newArr = [];
  console.log("findStr -> newArr", newArr)
  for (let i = 0; i < str.length; i++) {
    if(str[i] === "a"){
      newArr.push(i)
    };
  };
  return newArr
}
findStr('dsawsxads')



// 找到字符ab
function findStr(str, key) {
  return str.indexOf(key) === -1  ? false : true;
}
console.log(findStr('this is have ab', 'ab'))


// 找到支付abcdef
function findStr(str) {
  let isFoundA = false
  let isFoundB = false
  let isFoundC = false
  let isFoundD = false
  let isFoundE = false
  let isFoundF = false
  for(let s of str){
    if(s === 'a') isFoundA = true
    else if(isFoundA && s === "b") isFound = true
    else if(isFoundB && s === "c") isFound = true
    else if(isFoundC && s === "d") isFound = true
    else if(isFoundD && s === "e") isFound = true
    else if(isFoundE && s === "f") return true
    else {
      isFoundA = false
      isFoundB = false
      isFoundC = false
      isFoundD = false
      isFoundE = false
      isFoundF = false
    }
  }
  return false
}

console.log(findStr('this is have abcdef'))


/*
  使用状态机
  */ 

// 使用状态机处理字符串(abababx)
function match(string){
  let state = start;
  for (let c of string) {
    state = state(c);
  }
  return state === end;
}

function start(c) {
  if(c === "a"){
    return foundA;
  }else {
    return start;
  }
}

function end(c) {
  return end;
}

function foundA(c) {
  if(c === "b"){
    return foundA2;
  }else {
    return start(c);
  }
}

function foundA2(c) {
  if(c === "a"){
    return foundB2;
  }else {
    return start(c);
  }
}

function foundB2(c) {
  if(c === "b"){
    return foundA3;
  }else {
    return start(c);
  }
}

function foundA3(c) {
  if(c === "a"){
    return foundB3;
  }else {
    return start(c);
  }
}

function foundB3(c) {
  if(c === "b"){
    return foundX;
  }else {
    return start(c);
  }
}

function foundX(c) {
  if(c === "x"){
    return end;
  }else {
    return start(c);
  }
}

console.log(match('abababx'))