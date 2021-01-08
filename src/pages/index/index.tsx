import * as React from 'react';
import { useNativeEffect } from 'remax';
import { View, Text, Image, login, request } from 'remax/wechat';
import styles from './index.css';

export default () => {
  useNativeEffect(() => {
    login().then((res) => {
      console.log(res);
      request({
        url: 'http://localhost:8000/user/login',
        data: res,
      }).then((res) => {
        console.log(res);
      })
    }).catch((err) => {
      console.log('login fail', err);
    })
  }, [])

  return (
    <View className={styles.app}>
      <View className={styles.header}>
        <Image
          src="https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*OGyZSI087zkAAAAAAAAAAABkARQnAQ"
          className={styles.logo}
        // alt="logo"
        />
        <View className={styles.text}>
          编辑 <Text className={styles.path}>src/pages/index/index.js</Text>{' '}
          开始
        </View>
      </View>
    </View>
  );
};
