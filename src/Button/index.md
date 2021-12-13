---
title: PlButton 
nav:
 title: 组件
 path: /components 
group:
 path: /
---

## PlButton

`PlButton`基于`tdesign-react`的`Button`二次封装,在继承`Button`的所有属性的同时,新增了一些功能

## 防抖功能

在业务中经常需要防止按钮重复点击,这里将`Button`组件内置`debounce`功能,只需传递`debounce`属性即可
`debounce`属性可以传`boolean`为`true` 此时默认配置为
`{ wait: 300, options: { leading: true } }`,也可以传入配置对象

<code src="./demos/DebounceButton.tsx" ></code>


## 自动loading

在业务中经常需要点击后发送`ajax`,将`button`置为`loading`状态,`ajax`返回后将`loading`置为`false`
这里对`Button`组件新增`autoLoading`字段,如果设置为`true`,则点击后自动启动按钮`loading`,消失loading有两种方案


<code src="./demos/AutoLoadingButton.tsx" ></code>