import { StyleSheet, Dimensions, PixelRatio } from 'react-native';
 import { colors } from '@themes';
import { normalizeImage } from '@themes/styleConfig'
const win = Dimensions.get('window');
const ratio = win.height/320; //541 is actual image width

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonStyle: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 8,
    marginBottom: 8,
    height: 48,
    marginLeft: 16,
    marginRight: 16,
    borderRadius: 16,
    backgroundColor: colors.colorBorderFont,
  },
  logoContainer: {
    width: normalizeImage(110),
    height: normalizeImage(110),
    borderRadius: 220 / 2,
    backgroundColor: 'red',
    alignSelf: 'center',
    marginTop: win.height / 8,
  },
  inputStyle: {
    padding: 8,
    flex: 1.5,
    color: 'white',
    fontSize: 16,
  },
  inputContainer: {
    borderColor: colors.colorBorderFont,
    borderWidth: 1,
    marginLeft: 16,
    marginRight: 16,
    borderRadius: 16,
    marginTop: 8,
    marginBottom: 8,
    flexDirection: 'row',
  },
  iconContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 8,
  },
  linkButton: {
    color:colors.colorBorderFont,
    fontSize: 16,
    alignSelf: 'center',
    marginTop: 8,
    marginBottom: 8,
  },
  loginWith: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  socialImg: {
    height: 32,
    width: 32,
    marginLeft: 8,
    marginRight: 8,
  }
});
