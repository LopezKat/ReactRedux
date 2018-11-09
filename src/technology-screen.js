import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ProductList from './product-list';
import { TECHNOLOGY } from './data';

import { connect } from 'react-redux';
import { addProductToCart } from '../actions/cart-actions-creator';

class TechnologyScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <ProductList onPressEvent={ this.props.addItemToCart } products={TECHNOLOGY} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (product) => dispatch(addProductToCart(product))
    }
}

export default connect(null, mapDispatchToProps)(TechnologyScreen);
