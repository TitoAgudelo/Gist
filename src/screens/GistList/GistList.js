import React, { Component } from 'react';
import { FlatList, ActivityIndicator, TouchableOpacity, Text, SafeAreaView, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { NavigationActions } from 'react-navigation';

import Icon from '../../components/Icon/Icon';

class GistList extends Component {

    constructor(props){
        super(props);
        this.state = { isLoading: true }
        this.handleOnPress = this.handleOnPress.bind(this);
    }

    componentDidMount(){
        return fetch('https://api.github.com/users/titoagudelo/gists')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    gists: responseJson,
                });
            })
            .catch((error) =>{
                console.error(error);
            });
    }

    handleOnPress = (gist) => () => this.props.navigation.navigate('GistDetail', { gist });

    render() {
        if(this.state.isLoading){
            return(
                <SafeAreaView style={{ padding: 20 }}>
                    <ActivityIndicator/>
                </SafeAreaView>
            )
        }

        const { gists } = this.state;
        return(
            <SafeAreaView style={{ paddingTop: 20, width: '100%', flex: 1 }}>
                <View style={{ display: 'flex', alignItems: 'center', height: 50, marginBottom: 20, backgroundColor: '#363636', width: '100%' }}>
                    <Text style={{ color: 'white', padding: 15 }}>Follow the Gist of titoagudelo</Text>
                </View>
                <FlatList style={{ padding: 20, flex: 1 }}
                    data={gists}
                    renderItem={({item}) => (
                        <View style={{ backgroundColor: '#30504F', padding: 7, marginBottom: 10, borderRadius: 5, flex: 1 }}>
                            <TouchableOpacity onPress={this.handleOnPress(item)}>
                                <View style={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={{ color: 'white', fontWeight: 'bold' }}>
                                        Gist: {item.description}, {item.owner.login}
                                    </Text>
                                    <Icon
                                        nameAndroid={ 'arrow-with-circle-right' }
                                        nameIos={ 'ios-arrow-dropright' }
                                        size={26}
                                        style={{ color: 'white', width: 25, marginLeft: 'auto' }}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </SafeAreaView>
        );
    }
}

export default createStackNavigator({
    Home: {
      screen: GistList
    },
});