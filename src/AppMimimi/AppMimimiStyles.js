import {StyleSheet} from 'react-native';
import {bold} from 'ansi-colors';

export default StyleSheet.create({
  body: {
    backgroundColor: '#4786F9',
    paddingTop: '5%',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 30,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  inputArea: {
    alignSelf: 'stretch',
  },
  input: {
    borderWidth: 1,
    borderColor: '#306BD9',
    backgroundColor: '#eeeeee',
    color: '#000000',
    height: 40,
    margin: 20,
    padding: 10,
  },
  area: {
    width: 350,
    height: 350,
    marginTop: 10,
  },

  guri: {
    width: 350,
    height: 350,
    marginTop: -70,
    zIndex: 0,
  },
  texto: {
    fontSize: 25,
    color: '#ffffff',
    padding: 10,
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    textAlign: 'center',
    height: 70,
  },
  texto1: {
    zIndex: 1,
  },
  texto2: {
    zIndex: 1,
    marginTop: -70,
  },
});
