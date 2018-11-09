import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import   Icon  from 'react-native-vector-icons/FontAwesome';

import { withNavigation } from 'react-navigation';

import { connect } from 'react-redux';

const ShoppingCartIcon = props => (
    <View style={styles.container}>
        <View style={styles.badget}>
            <Text style={styles.badgetText}> { props.cartItems.length } </Text>
        </View>
        <Icon 
            onPress={()=>props.navigation.navigate('Cart')}
            name="shopping-cart" size={ 30 } />
    </View>
);

const styles = StyleSheet.create({
    container:{
        padding: 5,
    },
    badget: {
        position: 'absolute',
        height: 30,
        width: 30,
        borderRadius: 15,
        backgroundColor: 'red',
        right: 15,
        bottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000
    },
    badgetText: {
        color: '#fff',
        fontWeight: 'bold',

    }
});

const mapStateToProps = (state) =>{
    return {
        cartItems: this.state.cart
    }
}

export default connect(mapStateToProps)(withNavigation(ShoppingCartIcon));

