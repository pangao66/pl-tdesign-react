import React from 'react'
import {Button, ButtonProps} from 'tdesign-react'
import {useState} from "react";
import {debounce as debounceFn, DebounceSettings} from 'lodash-es';

type ClickEvent = React.MouseEvent;
type OnClick = (e: ClickEvent, done?: () => void) => void | Promise<void>;
type DebounceOptions = {
  wait?: number;
  options?: DebounceSettings;
};

interface PlButtonProps extends ButtonProps {
  /*** 点击后是否自动loading*/
  autoLoading?: boolean
  onClick?: OnClick,
  /*** 是否防抖,可设置为true或一个配置对象,配置对象为lodash的debounce的配置*/
  debounce?: boolean | DebounceOptions;
}


const PlButton = ({autoLoading, onClick, children, debounce}: PlButtonProps) => {
  const [loading, setLoading] = useState(false)
  let debounceOptions: DebounceOptions = {
    wait: 300,
    options: {
      leading: true,
      trailing: false,
    },
  };
  if (debounce && typeof debounce !== 'boolean') {
    debounceOptions = debounce;
  }
  const debounceClick = debounceFn(
    (e: ClickEvent) => {
      onClick?.(e);
    },
    debounceOptions.wait,
    debounceOptions.options,
  );
  const handleClick = (e: React.MouseEvent) => {
    if (debounce) {
      debounceClick(e);
      return;
    }
    if (autoLoading) {
      setLoading(true)
      const r = onClick?.(e, () => {
        setLoading(false);
      });
      if (r) {
        r.then(() => {
          setLoading(false);
        });
      }
    }
  }
  return (
    <Button loading={loading} onClick={handleClick}>{children}</Button>
  )
}
export default PlButton