import React from 'react';
import { Animated } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import GistList from '../screens/GistList/GistList';
import GistDetail from '../screens/GistDetail/GistDetail';
import Icon from '../components/Icon/Icon';

const ElementInformatioNavigator = createStackNavigator({
	Home: {
		screen: GistList,
		navigationOptions: () => ({
			title: 'Gist List'
		})
	},
	Gist: {
		screen: GistDetail,
		navigationOptions: ({ navigation }) => ({
			title: `${navigation.state.params.gist.description}'s Info`
		})
	}
}, {
	initialRouteName: 'Home',
	navigationOptions: {
		headerStyle: {
			backgroundColor: 'white'
		}
	}
});

export const MainNavigator = createBottomTabNavigator({
	Home: {
		screen: GistList,
		navigationOptions: {
			tabBarLabel: 'List',
			tabBarIcon: ({ tintColor, focused }) => (
				<Icon
					nameAndroid={focused ? 'format-list-bulleted' : 'list'}
					nameIos={focused ? 'ios-list' : 'ios-list-box-outline'}
					size={26}
					style={{ color: tintColor }}
				/>
			)
		}
	},
	Gist: {
		screen: GistDetail,
		navigationOptions: {
			tabBarLabel: 'Detail',
			tabBarIcon: ({ tintColor, focused }) => (
				<Icon
					nameAndroid={focused ? 'format-list-bulleted' : 'list'}
					nameIos={focused ? 'ios-list' : 'ios-list-box-outline'}
					size={26}
					style={{ color: tintColor }}
				/>
			)
		}
	}
}, {
	initialRouteName: 'Home',
	animationEnabled: true,
	tabBarPosition: 'bottom',
	configureTransition: () => ({
		timing: Animated.spring,
		tension: 1,
		friction: 25
	}),
	swipeEnabled: true,
	activeTintColor: 'red'
});