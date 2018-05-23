import React, { Component } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

export default class FlatListBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            { key: 'Devin' },
            { key: 'Jackson' },
            { key: 'James' },
            { key: 'Joel' },
            { key: 'John' },
            { key: 'Jillian' },
            { key: 'Jimmy' },
            { key: 'Julie' }
          ]}
          //  这里的 item 是解构赋值 参数是个带item属性的对象 item 就对应data 数据中的每一项 
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    )
  }
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
})
