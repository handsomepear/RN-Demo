import React, { Component } from 'react'
import { StyleSheet, Text, Image, View, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
// import FontAwesome from 'react-native-vector-icons/FontAwesome'

import Header from '../Header/index'

export default class Wechat extends Component {
  static navigationOptions = {
    title: '微信',
    tabBarLabel: '微信',
    tabBarIcon: ({tintColor}) => (
      <Icon name='ios-chatbubbles' size={24} color={tintColor} />
    )
  }
  render() {
    const { navigate } = this.props.navigation 
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Header />
        <View style={styles.container}>
          <FlatList
            data = {[
              {key:'1', name: '张三', text: '我不知道说什么！想说什么然后想想又不知道说什么了！希望最底层的孩子都有梦想，都能有承载梦想的力量！谢谢捐款的朋友，不要忘记那些被忘记的孩子', time: '2017-01-02 10:20:33'},
              {key:'2', name: '李四', text: '我不知道说什么！想说什么然后想想又不知道说什么了！希望最底层的孩子都有梦想，都能有承载梦想的力量！谢谢捐款的朋友，不要忘记那些被忘记的孩子', time: '2017-01-02 10:20:33'},
              {key:'3', name: '王五', text: '我不知道说什么！想说什么然后想想又不知道说什么了！希望最底层的孩子都有梦想，都能有承载梦想的力量！谢谢捐款的朋友，不要忘记那些被忘记的孩子', time: '2017-01-02 10:20:33'},
              {key:'4', name: '赵柳', text: '我不知道说什么！想说什么然后想想又不知道说什么了！希望最底层的孩子都有梦想，都能有承载梦想的力量！谢谢捐款的朋友，不要忘记那些被忘记的孩子', time: '2017-01-02 10:20:33'},
              {key:'5', name: '小七', text: '我不知道说什么！想说什么然后想想又不知道说什么了！希望最底层的孩子都有梦想，都能有承载梦想的力量！谢谢捐款的朋友，不要忘记那些被忘记的孩子', time: '2017-01-02 10:20:33'}
            ]}
            renderItem={({item}) => (
              <View style={styles.item}>
                <View style={{height: 20}}>
                  <Image source={require('../../imgs/avatar.jpeg')} style={styles.avatar} />
                </View>
                <View style={{flex: 1, justifyContent:'space-between'}}>
                  <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.time}>{item.time}</Text>
                  </View>
                  <View>
                  <Text style={styles.text} numberOfLines={1}>{item.text}</Text>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#f2f2f2',
    height: 70,
    padding: 10
  },
  avatar: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
})
