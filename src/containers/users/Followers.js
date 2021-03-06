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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import { colors,images } from '@themes';
const styles = StyleSheet.create({
  profileContainer: {
    borderWidth: 1,
    borderColor: colors.colorBorderFont,
    marginTop: 4,
    marginBottom: 4,
    padding: 4,
    marginLeft: 8,
    marginRight: 8,
    borderRadius: 8,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  coverPhotoContainer:{
    flex:0.5,
  },
  coverPhoto:{
    height: 48,
    width: 48,
    borderRadius: 48/2,
  },
  titleContainer: {
    flex:3,
    justifyContent: 'center',
    marginLeft: 16,
  },
  titleText: {
    color: colors.fontColor,
    fontSize: 14,
    fontWeight: '600'
  },
  optIcon:{
    justifyContent: 'center',
    marginRight: 4,
  },

});

const Followers = (props) => {
  const {
    onPress,
    actionVisible
  } = props;
  return (
    <View style={styles.profileContainer}>
      <View style={styles.rowContainer}>
        <View style={styles.coverPhotoContainer}>
          <Image source={images.imgLoginBack} style={styles.coverPhoto} />
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Krishna</Text>
          <Text>Mumbai</Text>
        </View>
        {
          actionVisible === undefined ?
            null
            :
            (
              <TouchableOpacity style={styles.optIcon} onPress={actionVisible} activeOpacity={0.8}>
                <Icon name="dots-vertical" size={24} color={colors.colorBorderFont} />
              </TouchableOpacity>
            )
        }

      </View>
    </View>
  );
};

Followers.propTypes = {
  onPress: PropTypes.func.isRequired,
  actionVisible: PropTypes.func.isRequired,
};

Followers.defaultProps = {

};
export default Followers;
