import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Imagem from './src/components/imagem';
import Frase from './src/components/frase';
import BtnFrase from './src/components/btnFrase';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      linkImagem: 'https://image.freepik.com/vetores-gratis/vector-de-livro-de-couro-vermelha_1110-770.jpg',
      fraseSelecionada: '',
      frases: ['"Enfrente os problemas e leve a melhor!"', 
        '"Dê mais atenção ao que você tem de bom na sua vida"',
        '"Para chegar ao topo, o que importa é começar!"',
        '"De nada adianta ter sonhos, se você não se empenhar em correr atrás"',
        '"Preste atenção nas oportunidades que estão à sua frente!"'
      ]
    };

    this.abrirFrase = this.abrirFrase.bind(this);
    this.resetarFrase = this.resetarFrase.bind(this);
  }

  abrirFrase() {
    this.setState({ linkImagem: 'https://image.freepik.com/vetores-gratis/caderno-aberto-3d-design_1284-34846.jpg' })
    this.setState({ fraseSelecionada: this.state.frases[Math.floor(Math.random() * 5)]})
  }

  resetarFrase() {
    this.setState({ linkImagem: 'https://image.freepik.com/vetores-gratis/vector-de-livro-de-couro-vermelha_1110-770.jpg' })
    this.setState({ fraseSelecionada: ''})
  }

  render() {
    return (
      <View style={styles.container}>
        <Imagem uri={this.state.linkImagem}/>
        <Frase frase={this.state.fraseSelecionada} />
        { 
          (this.state.fraseSelecionada == '') &&
          <BtnFrase action={this.abrirFrase} texto={'Abrir frase do dia'}/>
        }

        {
          (this.state.fraseSelecionada != '') &&
          <BtnFrase action={this.resetarFrase} texto={'Resetar frase'}/>
        }
      </View>
    );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});

export default App;


//https://image.freepik.com/vetores-gratis/caderno-aberto-3d-design_1284-34846.jpg
