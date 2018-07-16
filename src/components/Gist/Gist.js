import React, { Component } from 'react';
import { Text, View  } from 'react-native';

class Gist extends Component {
	constructor(props) {
        super(props);
    }

    render(){
        return (
            <View key={this.props.key}>
                <Text>{this.props.gist.description}
                    Gigt: {gist.description || '[no description]'}
                    By: {gist.owner.login || 'github'}
                </Text>
            </View>
        );
    }
}

export default Gist;