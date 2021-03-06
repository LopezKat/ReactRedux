import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import ItemProducts from './item-products';

class ProductList extends Component {

    keyExtractor = (item) => item.id.toString()

    render() {
        return (
            <View>
                <FlatList
                    data={this.props.products}
                    renderItem={({ item }) => <ItemProducts onPressEvent={ this.props.onPressEvent } item={ item } />}
                    keyExtractor={this.keyExtractor}
                />
            </View>
        );
    }
}

export default ProductList;
