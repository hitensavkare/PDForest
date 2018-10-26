import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Modal,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import { colors } from '@themes';
const styles = StyleSheet.create({
  modelView: {
    backgroundColor:'rgba(55,55,55,0.7)',
    flex: 1,
    justifyContent: 'flex-end'

  },
  optionContainer: {
    backgroundColor:'white',
    //height: 48,
    padding: 16
  },
  touchStyle: {
    marginTop: 8,
    marginBottom: 8,
  },

  optFonts: {
    color: 'black',
    fontWeight: '400',
    fontSize:16,
  }
});

const ModelActions = (props) => {
  const {
    onPress,
    isVisible,
    actionVisible,
    tabClicked,
    deletePDF,
    listingTModelToggle
  } = props;
  return (
    <Modal
      animationType="slide"
      supportedOrientations={['portrait', 'landscape']}
      transparent
      visible={isVisible}
    >
      <View style={styles.modelView}>
        <View style={styles.optionContainer}>
          {tabClicked === 'Following' || tabClicked === 'Followers'
            ?
            (
              <TouchableOpacity style={styles.touchStyle} activeOpacity={0.8}>
                <Text style={styles.optFonts}>View</Text>
              </TouchableOpacity>
            ) :
            null
         }
          {tabClicked === 'Following'
            ?
            (
              <TouchableOpacity style={styles.touchStyle} activeOpacity={0.8}>
                <Text style={styles.optFonts}>Unfollow</Text>
              </TouchableOpacity>
            ) :
            null
         }

          {tabClicked === 'Public'
            ?
            (
              <TouchableOpacity style={styles.touchStyle} activeOpacity={0.8}>
                <Text style={styles.optFonts}>Make Private</Text>
              </TouchableOpacity>
            ) :
            null
        }
          {tabClicked === 'Private'
            ?
            (
              <TouchableOpacity style={styles.touchStyle} activeOpacity={0.8}>
                <Text style={styles.optFonts}>Make Public</Text>
              </TouchableOpacity>
            ) :
            null
        }
          {tabClicked === 'Private'
            ?
            (
              <TouchableOpacity style={styles.touchStyle} activeOpacity={0.8} onPress={listingTModelToggle}>
                <Text style={styles.optFonts}>Share With</Text>
              </TouchableOpacity>
            ) :
            null
          }
          {tabClicked === 'Public' || tabClicked === 'Private'
            ?
            (
              <TouchableOpacity style={styles.touchStyle} activeOpacity={0.8}>
                <Text style={styles.optFonts}>Download PDF</Text>
              </TouchableOpacity>
            ) :
            null
          }

          {tabClicked === 'Public' || tabClicked === 'Private'
            ?
            (
              <TouchableOpacity style={styles.touchStyle} activeOpacity={0.8} onPress={deletePDF}>
                <Text style={styles.optFonts}>Delete PDF</Text>
              </TouchableOpacity>
            ) :
            null
          }

          {tabClicked === 'Public' || tabClicked === 'Private'
            ?
            (
              <TouchableOpacity style={styles.touchStyle} activeOpacity={0.8}>
                <Text style={styles.optFonts}>Read PDF</Text>
              </TouchableOpacity>
            ) :
            null
          }
          <TouchableOpacity style={styles.touchStyle} activeOpacity={0.8} onPress={actionVisible}>
            <Text style={styles.optFonts}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>

  );
};

ModelActions.propTypes = {
  onPress: PropTypes.func.isRequired,
  deletePDF: PropTypes.func.isRequired,
  listingTModelToggle: PropTypes.func.isRequired,
  actionVisible: PropTypes.func.isRequired,
  isVisible: PropTypes.string.isRequired,
};

ModelActions.defaultProps = {
};
export default ModelActions;
