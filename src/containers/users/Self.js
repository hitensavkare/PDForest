import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  Dimensions,
  Image
} from 'react-native';
const window = Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import { colors,images } from '@themes';
const styles = StyleSheet.create({
  profileContainer: {
    alignSelf: 'center',
    width: window.width,
    overflow: 'hidden',
    height: window.width / 1.5,
  },
  sliderContainerStyle: {
    borderRadius: window.width,
    width: window.width * 2,
    height: window.width * 2,
    marginLeft: -(window.width / 2),
    position: 'absolute',
    bottom: 0,
    overflow: 'hidden',
  },

  bodyView: {
    height: window.width / 1.5,
    width: window.width,
    position: 'absolute',
    bottom: 0,
    marginLeft: window.width / 2,
    backgroundColor: colors.colorBorderFont,
    justifyContent: 'center',
    alignItems: 'center'
  },
  profileImage: {
    height: 80,
    width: 80,
    borderRadius: 60/2,
  },
  operationsContainer:{
    flexDirection: 'row',
    marginTop: 16,
    marginBottom: 32
  },
  opOne:{
    //flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 50,
    borderRadius: 50/2,
    backgroundColor: '#fda396',
  },
  opOneActive:{
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 50,
    borderRadius: 50/2,
    backgroundColor: '#fda800',
  },
  opContainerBody: {
    //flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:16,
    marginRight: 16,
    flexWrap: 'wrap',
//      justifyContent: 'space-around',
  },
  opContainerBodyActive:{

  },
  userName: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600'
  },
  opTextColor:{
    color: 'white',
    fontSize: 14,

  }
});

const Self = (props) => {
  const {
    onPress,
    tabClicked,
  } = props;
  return (
    <View style={styles.profileContainer}>
      <View style={styles.sliderContainerStyle}>
        <View style={styles.bodyView}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              style={{ flex: 0.1, marginLeft: 8 }}
              activeOpacity={0.8}
              onPress={()=>Actions.pop()}
            >
              <Icon name="download" size={24} color="white" />
            </TouchableOpacity>
            <View View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginLeft: -50 }}>
              <Image source={images.imgLoginBack} style={styles.profileImage} />
              <Text style={styles.userName}>Hitendra Savkare</Text>
            </View>
          </View>
          <View style={styles.operationsContainer}>
            <TouchableOpacity style={styles.opContainerBody} onPress={()=>onPress('Followers')}>
              <View style={tabClicked === 'Followers' ? styles.opOneActive : styles.opOne}>
                <Icon name="download" size={24} color={colors.colorBorderFont} />
              </View>
              <Text style={styles.opTextColor}>Followers</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.opContainerBody} onPress= {()=>onPress('Following')}>
              <View style={ tabClicked==='Following'?styles.opOneActive:styles.opOne}>
                <Icon name="download" size={24} color={colors.colorBorderFont} />
              </View>
              <Text style={styles.opTextColor}>Following</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.opContainerBody} onPress= {()=>onPress('Public')}>
              <View style={ tabClicked==='Public'?styles.opOneActive:styles.opOne}>
                <Icon name="download" size={24} color={colors.colorBorderFont} />
              </View>
              <Text style={styles.opTextColor}>Public</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.opContainerBody} onPress= {()=>onPress('Private')}>
              <View style={ tabClicked==='Private'?styles.opOneActive:styles.opOne}>
                <Icon name="download" size={24} color={colors.colorBorderFont} />
              </View>
              <Text style={styles.opTextColor}>Private</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

Self.propTypes = {
  onPress: PropTypes.func.isRequired,
};

Self.defaultProps = {

};
export default Self;
