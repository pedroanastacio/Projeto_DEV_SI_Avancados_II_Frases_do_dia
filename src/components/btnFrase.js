import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

class BtnFrase extends Component {
    
    render() {
        return(
            <View style={styles.container}>
                <TouchableOpacity 
                onPress={this.props.action}
                style={styles.btn}
                > 
                    <Text style={styles.texto}>
                        {this.props.texto}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    btn: {
        width: 270,
        borderWidth: 2,
        borderRadius: 15,
        borderColor: '#ff3823',
        padding: 7,
        justifyContent: 'center',
        alignItems: 'center'
    },
    texto: {
        color: '#ff3823',
        fontWeight: 'bold',
        fontSize: 15
    }
})

export default BtnFrase;