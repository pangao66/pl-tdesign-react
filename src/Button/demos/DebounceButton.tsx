import React from 'react';
import {PlButton} from 'pl-tdesign-react';
import {Message} from 'tdesign-react'

const DebounceButton = () => {
  const handleClick = () => {
    Message.warning('重复点击不会多次触发哦');
  };
  return (
    <>
      <p>设置为布尔类型</p>
      <PlButton debounce={true} onClick={handleClick}>防抖按钮</PlButton>
      <p>设置为配置对象</p>
      <PlButton
        type={'primary'}
        debounce={{wait: 500, options: {leading: true, trailing: true}}}
        onClick={handleClick}
      >
        防抖按钮
      </PlButton>
    </>
  );
};
export default DebounceButton;