// 缓存
export const setStore = (name,content) => {
  if(!name) return;
  if(typeof  content !== "string"){
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(name,content);
}

// 获取缓存
export const getStore = (name) => {
  if(!name) return ;
  return window.localStorage.getItem(name);
}

// 清除
export const removeStore = (name) => {
  if(!name) return;
  window.localStorage.removeItem(name);

}

// 获取style样式
export const getStyle = (elment,attr,NumberMode = 'int') => {
  let target;
  if(attr === "scrollTop"){

  }
}
