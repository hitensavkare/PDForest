import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  ScrollView,
  Alert
} from 'react-native';
import {images, colors} from '@themes'
import { FloatingAction } from 'react-native-floating-action';
import Self from './Self';
import Public from './Public';
import Followers from './Followers';
import Following from './Following';
import Private from './Private';
import { ModelActions, UserListingModal } from '@components';

class SelfProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [{id:1},{id:2},{id:2},{id:2},{id:2},{id:2},{id:2}],
      tabClicked: 'Followers',
      isVisible: false,
      isUserListingModalVisibile: false,
      userListingData: [{ name: 'hiten', flag: false }, { name: 'Krishna', flag: false }]
    }
    this.renderTouchData = this.renderTouchData.bind(this);
    this.showActionSheet = this.showActionSheet.bind(this);
    this.deletePDF = this.deletePDF.bind(this);
    this.closeModelListing = this.closeModelListing.bind(this);
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
            <Followers data={item} actionVisible={this.showActionSheet} />)}
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
            <Following data={item} actionVisible={this.showActionSheet}/>)}
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
            <Public data={item} actionVisible={this.showActionSheet} />)}
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
            <Private data={item} actionVisible={this.showActionSheet} />)}
          extraData={this.state}
          keyExtractor={(item, index) => index.toString()}
        />
      );
    }
  }

  showActionSheet() {
    this.setState({ isVisible:!this.state.isVisible })
  }

  deletePDF() {
    this.setState({ isVisible:!this.state.isVisible })
    Alert.alert(
      'Confirm Delete?',
      'Are you sure want to delete this PDF?',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => alert('Your PDF is deleted')},
      ],
      { cancelable: false }
    )
  }

  closeModelListing() {
    if (this.state.isUserListingModalVisibile === false) {
      this.setState({isUserListingModalVisibile: !this.state.isUserListingModalVisibile})
    } else {
      this.setState({ isUserListingModalVisibile: !this.state.isUserListingModalVisibile,
        isVisible: !this.state.isVisible })
  }
  }

  render() {
    const { tabClicked, isVisible, isUserListingModalVisibile, userListingData } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: '40%' }}>
          <Self tabClicked={tabClicked} onPress={this.renderTouchData} />
        </View>

        <View style={{ height: '60%' }}>
          {this.renderFlatList()}
        </View>
        <ModelActions
          isVisible={isVisible}
          actionVisible={this.showActionSheet}
          tabClicked={tabClicked}
          deletePDF={this.deletePDF}
          listingTModelToggle={this.closeModelListing}
        />
        <UserListingModal
          isVisible={isUserListingModalVisibile}
          userListingData={userListingData}
          onChange={(text)=>{alert(text)}}
          listingTModelToggle={this.closeModelListing}
        />
      </View>
    )
  }
}


export default SelfProfile;
