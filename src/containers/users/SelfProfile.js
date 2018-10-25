import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  ScrollView
} from 'react-native';
import {images, colors} from '@themes'
import { FloatingAction } from 'react-native-floating-action';
import Self from './Self';
import Public from './Public';
import Followers from './Followers';
import Following from './Following';
import Private from './Private';

class SelfProfile extends Component {
  constructor(props) {
    super(props);
    this.renderTouchData = this.renderTouchData.bind(this);
    this.state ={
      dataSource: [{id:1},{id:2},{id:2},{id:2},{id:2},{id:2},{id:2}],
      tabClicked:'Followers'
    }
  }

  renderTouchData(opParam) {
    this.setState({
      tabClicked : opParam,
    })
  }

  renderFlatList() {
    const { dataSource, tabClicked } = this.state;
    if (tabClicked === 'Followers') {
      return (
        <FlatList
          data={dataSource}
          renderItem={({ item }) => (
            <Followers data={item} />)}
          extraData={this.state}
          keyExtractor={(item, index) => index.toString()}
        />
      );
    }

    if (tabClicked === 'Following') {
      return (
        <FlatList
          data={dataSource}
          renderItem={({ item }) => (
            <Following data={item} />)}
          extraData={this.state}
          keyExtractor={(item, index) => index.toString()}
        />
      );
    }

    if (tabClicked === 'Public') {
      return (
        <FlatList
          data={dataSource}
          renderItem={({ item }) => (
            <Public data={item} />)}
          extraData={this.state}
          keyExtractor={(item, index) => index.toString()}
        />
      );
    }

    if (tabClicked === 'Private') {
      return (
        <FlatList
          data={dataSource}
          renderItem={({ item }) => (
            <Private data={item} />)}
          extraData={this.state}
          keyExtractor={(item, index) => index.toString()}
        />
      );
    }
  }

  render() {
    const { tabClicked } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: '40%' }}>
          <Self tabClicked={tabClicked} onPress={this.renderTouchData} />
        </View>

        <View style={{ height: '60%' }}>
          {this.renderFlatList()}
        </View>
      </View>
    )
  }
}


export default SelfProfile;
