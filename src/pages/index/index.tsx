import React, { useState } from 'react';
import { usePageEvent } from 'remax/macro';
import { View, Text, Image, login, request } from 'remax/wechat';
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
        setMsg(res.data)
      })
    }).catch((err) => {
      console.log('login fail', err);
    })
  })

  return (
    <View className={styles.app}>
      <View className={styles.header}>
        <Image
          src="https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*OGyZSI087zkAAAAAAAAAAABkARQnAQ"
          className={styles.logo}
        // alt="logo"
        />
        <View className={styles.text}>
          从服务器返回的数据: {msg}
        </View>
      </View>
    </View>
  );
};
