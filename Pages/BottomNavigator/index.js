import React, { Component } from 'react'
import { createBottomTabNavigator } from 'react-navigation'

import Wechat from '../Wechat/index' // 聊天页面
import AddressBook from '../AddressBook/index' // 通讯录
import Discover from '../Discover/index' // 发现
import Mine from '../Mine/index' // 我的

// 注册 Tabs

export default createBottomTabNavigator({
  Wechat,
  AddressBook,
  Discover,
  Mine
},{
  initialRouteName: 'Wechat',
  animationEnabled: true,
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: '#ff8500', // 文字和图片选中的颜色
    inactiveTintColor: '#999', // 文字和图片未选中的颜色
    showIcon: true,
    indicatorStyle: {
      height: 0
    },
    style: {
      backgroundColor: '#fff'
    },
    labelStyle: {
      fontSize: 14
    }
  }
})


