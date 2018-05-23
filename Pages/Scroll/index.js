import React, { Component } from 'react'; 
import { ScrollView, Text, View } from 'react-native';

export default class ScrollPage extends Component {
  render(){
    return (
      <ScrollView style={{height: 400}}>
        <Text style={{fontSize: 30}}>Scroll me plz</Text>
        <View style={{height: 300, flexDirection: 'row'}}>
          <View style={{flex: 1, backgroundColor: 'red'}}></View>
          <View style={{flex: 1, backgroundColor: 'purple'}}></View>
          <View style={{flex: 1, backgroundColor: 'orange'}}></View>
        </View>
        <Text style={{fontSize: 30}}>If you like</Text>
        <View style={{height: 300, flexDirection: 'row'}}>
          <View style={{flex: 1, backgroundColor: 'red'}}></View>
          <View style={{flex: 1, backgroundColor: 'purple'}}></View>
          <View style={{flex: 1, backgroundColor: 'orange'}}></View>
        </View>
        <Text style={{fontSize: 30}}>Scrolling down</Text>
        <View style={{height: 300, flexDirection: 'row'}}>
          <View style={{flex: 1, backgroundColor: 'red'}}></View>
          <View style={{flex: 1, backgroundColor: 'purple'}}></View>
          <View style={{flex: 1, backgroundColor: 'orange'}}></View>
        </View>
      </ScrollView>
    )
  }
}