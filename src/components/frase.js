import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Frase extends Component {
    
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.texto}>
                    { this.props.frase }
                </Text>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 20
    },
    texto: {
        color: '#ff3823',
        fontSize: 28,
        textAlign: 'center'
    }
})

export default Frase;