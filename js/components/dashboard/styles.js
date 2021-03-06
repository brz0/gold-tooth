
const React = require('react-native');

const { StyleSheet } = React;

module.exports = StyleSheet.create({
  container: {},
  text: {
    color: '#F3F3F3',
    fontSize: 18,
    marginBottom: 15,
    alignItems: 'center',
  },
  mt: {
    backgroundColor: 'red',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  dashboardCircle: {
    backgroundColor: '#F5D547',
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#F5D547',
    borderStyle: 'solid',
  },
  btnBottom: {
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 0,
    borderRadius: 0,
    left: 0,
    right: 0,
    height: 60,
    flexDirection: 'column-reverse',
  },
  btnBottomTxt: {
    color: '#F3F3F3',
    textAlign: 'center',
  },
  btnBottomTxtInner: {
    fontSize: 12,
    fontFamily: 'AvenirNext-UltraLight',
    letterSpacing: 2,
    marginBottom: 8,
    color: '#F3F3F3',
    textAlign: 'center',
  },
  iconMenuWrap: {
    paddingBottom: 60,
    backgroundColor: 'red',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
