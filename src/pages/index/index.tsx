import React, { useState } from 'react';
import { usePageEvent } from 'remax/macro';
import { View, Text } from 'remax/one';
import { login, request, setTabBarItem } from 'remax/wechat';
import { Icon } from 'annar';
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

  usePageEvent('onLoad', () => {
    setTabBarItem({
      index: 0,
      iconPath: 'icon/home.svg',
    }).then((msg) => {
      console.log(msg);
    }).catch((err) => {
      console.log(err);
    })
  })

  return (
    <View className={styles.app}>
      <View className={styles.header}>
        <Icon type="likefill" size="50px" />
        <View className={styles.text}>
          <Text>从服务器返回的数据: {msg}</Text>
        </View>
      </View>
    </View>
  );
};
