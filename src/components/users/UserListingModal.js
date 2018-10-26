import React, {Component} from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Modal,
  View,
  TextInput
} from 'react-native';
import PropTypes from 'prop-types';
import { colors } from '@themes';
import { CheckBox } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  modelView: {
    flex: 1,
    backgroundColor: 'white',
    padding: 8,

  },
  searchInput: {
    borderWidth: 1,
    borderRadius: 16,
    borderColor: colors.colorBorderFont,
    padding: 8,
    color: 'black'
  },

  usersContainer: {
    flexDirection: 'row',
    marginTop: 16,
    marginLeft: -8,
    alignItems: 'center'
  },
  username: {
    marginLeft: 32,
    fontSize: 16,
    color: 'black',
    paddingRight: 8,
  },
  doneButton: {
    backgroundColor:colors.colorBorderFont,
    borderRadius: 16,
    height: 32,
    width: '30%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  doneText: {
    color: 'white',
    fontSize: 16,

  }
});

class  UserListingModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDone: false,

    }
  }

  render() {
    const {
      onPress,
      isVisible,
      onChange,
      userListingData,
      listingTModelToggle
    } = this. props;
    const { isDone } = this.state;
    return (
      <Modal
        animationType="slide"
        supportedOrientations={['portrait', 'landscape']}
        transparent
        visible={isVisible}
      >
        <View style={styles.modelView}>
          <TouchableOpacity
            style={{alignSelf: 'flex-end',margin: 8}}
            activeOpacity={0.8}
            onPress={listingTModelToggle}
          >
            <Icon name="download" size={24} color={colors.colorBorderFont} />
          </TouchableOpacity>
          <View style={styles.bodyContainer} />
          <TextInput
            placeholder="Search"
            style={styles.searchInput}
            onChangeText={onChange}
          />
          {
            userListingData.map((data,index)=>{
              return(
                <View style={styles.usersContainer}>
                  <CheckBox checked={data.flag} color= { colors.colorBorderFont } />
                  <Text style={styles.username}>{data.name} </Text>
                </View>
              )
            })
          }
          {isDone === true ?
            (
              <View style={{ marginTop: 16 }}>
                <TextInput
                  placeholder="Enter password to open pdf by users"
                  style={styles.searchInput}
                //  onChangeText={onChange}
                  secureTextEntry
                />
                <TouchableOpacity
                  style={styles.doneButton}
                  activeOpacity={0.8}
                  onPress={listingTModelToggle}>
                  <Text style={styles.doneText}>Share</Text>
                </TouchableOpacity>
              </View>
            )
            :
            (
              <TouchableOpacity
                style={styles.doneButton}
                onPress={() => { this.setState({ isDone: true })}}>
                <Text style={styles.doneText}>Done</Text>
              </TouchableOpacity>
            )
          }

        </View>
      </Modal>

    );
  }
};

UserListingModal.propTypes = {
  onPress: PropTypes.func.isRequired,
  deletePDF: PropTypes.func.isRequired,
  actionVisible: PropTypes.func.isRequired,
  listingTModelToggle:PropTypes.func.isRequired,
  isVisible: PropTypes.string.isRequired,
};

UserListingModal.defaultProps = {
};
export default UserListingModal;
