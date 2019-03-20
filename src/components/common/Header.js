
import React from 'react';
import { Text, View } from 'react-native';

const Header = ({ headerText }) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        heigth: 60,
        elevation: 10,
        paddingTop: 15,
        shadowColor: '#42f4d9',
        shadowOffset: { width: 0, heigth: 0 },
        shadowOpacity: 0.3,
    },
    textStyle: {
        fontSize: 20,
        marginBottom: 10
    }
};

export { Header };
