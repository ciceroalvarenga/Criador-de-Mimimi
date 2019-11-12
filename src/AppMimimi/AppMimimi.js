import React, {Component} from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import styles from './AppMimimiStyles';

export default class AppMimimi extends Component {
  constructor(props) {
    super(props);
    this.state = {texto1: 'Alguma coisa', texto2: 'Ilgimi ciisi'};

    this.escrever = this.escrever.bind(this);
  }
  escrever(t) {
    let s = this.state;
    s.texto1 = t;
    s.texto2 = this.mudarVogais(t);
    this.setState(s);
  }

  mudarVogais(texto) {
    let novoTexto = texto.toLowerCase();
    novoTexto = novoTexto.replace(/(a|e|i|o|u)/g, 'i');
    novoTexto = novoTexto.replace(/(á|à|ã|â)/g, 'i');
    novoTexto = novoTexto.replace(/(é|è|ê)/g, 'i');
    novoTexto = novoTexto.replace(/(í|ì|î)/g, 'i');
    novoTexto = novoTexto.replace(/(ó|ò|ô)/g, 'i');
    novoTexto = novoTexto.replace(/(ú|ù|û)/g, 'i');

    return novoTexto;
  }

  render() {
    return (
      <View style={styles.body}>
        <View>
          <Text style={styles.titulo}>Criador de Mimimi</Text>
        </View>
        <View style={styles.inputArea}>
          <TextInput
            style={styles.input}
            placeholder="Digite seu mimimi"
            onChangeText={this.escrever}
          />
        </View>

        <View style={styles.area}>
          <Text style={[styles.texto, styles.texto1]}>
            {this.state.texto1.toUpperCase()}
          </Text>
          <Image
            style={styles.guri}
            source={require('../assets/garoto-mimimi.jpg')}
          />
          <Text style={[styles.texto, styles.texto2]}>
            {this.state.texto2.toUpperCase()}
          </Text>
        </View>
      </View>
    );
  }
}
