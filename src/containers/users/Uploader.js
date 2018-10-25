import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {images, colors} from '@themes'
import { FloatingAction } from 'react-native-floating-action';
import UploaderScene from './UploaderScene';
import Public from './Public';
import Followers from './Followers';
import Following from './Following';
import Private from './Private';

class Uploader extends Component {
  constructor(props) {
    super(props);
    this.renderTouchData = this.renderTouchData.bind(this);
    this.state ={
      dataSource: [{id:1},{id:2},{id:2},{id:2},{id:2},{id:2},{id:2}],
      tabClicked:'Followers',
      isFollowing: false,
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
    const { tabClicked, isFollowing } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: '40%' }}>
          <UploaderScene tabClicked={tabClicked} onPress={this.renderTouchData} />
        </View>
        <TouchableOpacity
          style={styles.floatingFollow}
          onPress ={() => { this.setState({ isFollowing: !isFollowing })}}
          activeOpacity={0.8}
          >
          <Text style={styles.textFollow}>
            {isFollowing === false ?'Follow':'Following'}
          </Text>
        </TouchableOpacity>
        <View style={{ height: '60%' }}>
          {this.renderFlatList()}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  floatingFollow: {
    backgroundColor: colors.colorBorderFont,
    width: '40%',
    alignSelf: 'center',
    marginTop: -35,
    height: 40,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textFollow: {
    color:'white',
    fontWeight: '600',
    fontSize: 16,
  }
})
export default Uploader;
