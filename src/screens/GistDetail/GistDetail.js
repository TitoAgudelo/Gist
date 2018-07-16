import React, { Component } from 'react';
import { FlatList, ActivityIndicator, TouchableHighlight, Text, SafeAreaView, View, ScrollView  } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Icon from '../../components/Icon/Icon';

class GistDetail extends Component {

    constructor(props){
        super(props);
        this.state = { gist: this.props.navigation.state.params.gist }
    }

    componentDidMount(){

    }

    render() {
        if(!this.state.gist){
            return(
                <SafeAreaView style={{ padding: 20 }}>
                    <ActivityIndicator/>
                </SafeAreaView>
            )
        }

        const { gist } = this.state;
        return(
            <SafeAreaView style={{ paddingTop: 20, width: '100%', flex: 1 }}>
                <View style={{ display: 'flex', alignItems: 'center', height: 50, marginBottom: 20, backgroundColor: '#DF6C61', width: '100%' }}>
                    <Text style={{ color: 'white', padding: 15 }}>Follow {gist.description} Detail </Text>
                </View>
                <View style={{ padding: 20 }}>
                    <Text style={{ padding: 5, fontWeight: 'bold' }}>{gist.description || '[no description]'}</Text>
                    <Text style={{ padding: 5 }}>Author: {gist.owner.login ? gist.owner.login: 'Github'}</Text>
                    <Text style={{ padding: 5, fontWeight: 'bold' }}>Files:</Text>
                    {
                        Object.keys(gist.files).map(key => (
                            <Text style={{ padding: 5 }} key={key}>
                                {key}
                            </Text>
                        ))
                    }
                </View>
            </SafeAreaView>
        );
    }
}

export default createStackNavigator({
    GistDetail: {
      screen: GistDetail
    },
});