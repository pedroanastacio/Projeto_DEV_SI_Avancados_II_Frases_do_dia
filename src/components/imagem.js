import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';

class Imagem extends Component {
    
    render() {
        return(
            <View>
                <Image 
                source={{ uri: this.props.uri }}
                style={styles.imagem}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    imagem: {
        width: 200,
        height: 200
    }
})

export default Imagem;