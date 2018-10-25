import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  ScrollView
} from 'react-native';
import {images, colors} from '@themes'
import { FloatingAction } from 'react-native-floating-action';
import {Header, FlatRow} from '@components'
import { Actions } from 'react-native-router-flux';

const actions = [{
  text: 'Upload PDF',
  icon: <View><Text>hello</Text></View>,
  name: 'bt_accessibility',
  position: 2
},
{
  text: 'Followers',
  icon: <View><Text>hello</Text></View>,
  name: 'bt_accessibility',
  position: 2
},
{
  text: 'Following',
  icon: <View><Text>hello</Text></View>,
  name: 'bt_accessibility',
  position: 2
},
{
  text: 'Accessibility',
  icon: <View><Text>hello</Text></View>,
  name: 'bt_accessibility',
 position: 2
}];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [{id:1},{id:1},{id:1},{id:1}]
    }
  }
_gotoAciton(){
  Actions.SelfProfile()
}
  render() {
    const { dataSource } = this.state
    return (
      <View  style={{flex:1}}>
        <Header />
        <ScrollView>
        <View style={{height: 160}}>
          <Text style={{color: colors.colorBorderFont,fontWeight: '600',fontSize: 18,marginLeft: 8,
          marginTop: 8,
        marginBottom: 8}}>Newly Added</Text>
        <FlatList
          horizontal={true}
          data={dataSource}
          renderItem={({ item }) => (<FlatRow data={item} />)}
          extraData={this.state}
          keyExtractor={(item, index) => index.toString()}
        />
        </View>
        <View style={{height: 160}}>
          <Text style={{color: colors.colorBorderFont,fontWeight: '600',fontSize: 18,marginLeft: 8,
          marginTop: 8,
          marginBottom: 8}}>Most Downloaded</Text>
        <FlatList
          horizontal={true}
          data={dataSource}
          renderItem={({ item }) => (<FlatRow data={item} />)}
          extraData={this.state}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <Text style={{color: colors.colorBorderFont,fontWeight: '600',fontSize: 18,marginLeft: 8,
      marginTop: 8,
      marginBottom: 8}}>Suggested</Text>
        <FlatList
          data={dataSource}
          renderItem={({ item }) => (<FlatRow data={item} />)}
          extraData={this.state}
          keyExtractor={(item, index) => index.toString()}
        />

   </ScrollView>
   <FloatingAction
     color={colors.colorBorderFont}
     actions={actions}
     onPressItem={(name) => {this._gotoAciton()}}
/>
      </View>
    );
  }
}

export default Home
