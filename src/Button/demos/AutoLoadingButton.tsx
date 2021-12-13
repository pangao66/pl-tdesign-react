import React from 'react';
import {PlButton} from 'pl-tdesign-react';
// import { message } from 'antd';

const AutoLoadingButton = () => {
  const handleClick = (e: React.MouseEvent, done?: () => void): void => {
    setTimeout(() => {
      // 这里可以执行类似ajax操作, 操作完后需要手动调用done()回调函数来消失loading
      done?.();
    }, 1000);
  };
  const sleep = (time: number) =>
    new Promise((resolve) => {
      setTimeout(resolve, time);
    });
  const handlePromiseClick = async () => {
    // message.success('此时loading自动开启');
    await sleep(2000);
    // message.success('此时loading自动消失');
  };
  return (
    <>
      <p>回调函数方式</p>
      <PlButton autoLoading onClick={handleClick}>
        自动loading
      </PlButton>
      <p>promise方式</p>
      <PlButton type={'primary'} autoLoading onClick={handlePromiseClick}>
        自动loading
      </PlButton>
    </>
  );
};
export default AutoLoadingButton;