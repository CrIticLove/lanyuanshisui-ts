import React, { useState } from 'react';
import { usePageEvent } from 'remax/macro';
import { View, Text, login, request } from 'remax/wechat';
import 'weui-miniprogram/miniprogram_dist/weui-wxss/dist/style/weui.wxss';
import styles from './index.css';

export default () => {
  const [msg, setMsg] = useState('')
  usePageEvent('onLoad', () => {
    login().then((res) => {
      console.log(res);
      request({
        url: 'http://localhost:8000/user/login',
        data: res,
      }).then((res) => {
        console.log(res);
        setMsg(res.data);
      })
    }).catch((err) => {
      console.log('login fail', err);
    })
  })

  return (
    <View className={styles.app}>
      <View className={styles.header}>
        <View className={styles.text}>
          <Text>从服务器返回的数据: {msg}</Text>
        </View>
      </View>
    </View>
  );
};
