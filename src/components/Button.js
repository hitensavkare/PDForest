import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  buttonDefaultStyle: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 4,

  },
  buttonDefaultTextStyle: {

  },
});

const Button = (props) => {
  const {
    text,
    buttonTextStyles,
    buttonStyle,
    onPress,
  } = props;
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={buttonTextStyles}>
        { text }
      </Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  buttonTextStyles: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.shape({}),
  ]),
  buttonStyle: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.shape({}),
  ]),
  text: PropTypes.string.isRequired,
};

Button.defaultProps = {
  buttonStyle: styles.buttonDefaultStyle,
  buttonTextStyles: styles.buttonDefaultTextStyle,
};
export default Button;
