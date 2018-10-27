import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import Swiper from 'react-native-swiper';
import {
    StackNavigator,
    TabNavigator,
} from 'react-navigation';
import  ProfilePage from '../Profile/Profile';
import {Font} from '../utils/Font';
import HomePage from './HomePage';
import SaveContainer from '../Saved/SaveContainer';
import NotificationContainer from '../Notification/NotificationContainer';
import TripContainer from '../Trip/TripContainer';

class HomeContainer extends React.Component {

    static navigationOptions = {
        tabBarLabel: 'Trang chủ',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../../images/home.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };
    render() {
        return <HomePage/>
    }
}

class Saved extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Đã lưu',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../../images/heart.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
        return <SaveContainer/>
    }
}

class Trip extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Chuyến đi',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../../images/travel.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };
    render() {
        return <TripContainer />
    }
}

class Notification extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Thông báo',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../../images/notice.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };
    render() {
        return <NotificationContainer />
    }
}

class Profile extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Tài khoản',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../../images/contact-outline.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };
    render() {
        return <ProfilePage/> ;
    }
}

const Home = TabNavigator(
    {
        HomeContainer: {screen: HomeContainer},
        Saved: {screen: Saved},
        Trip: {screen: Trip},
        Notification: {screen: Notification},
        Profile: {screen: Profile},
    },
    {
        tabBarPosition: 'bottom',
        animationEnabled: true,
        tabBarOptions: {

            activeTintColor: '#fff',
            inactiveTintColor: '#bbb',
            showIcon : true,
            allowFontScaling : true,
            activeBackgroundColor : "#fff",
            upperCaseLabel: false,
            labelStyle: {
                fontSize: 11,
                flex : 1,
                alignItems : 'center',
                justifyContent: 'center',
                // fontWeight : 'bold',
                textAlign : 'center',
                lineHeight: 11,
                fontFamily : Font.Roboto
            },
            indicatorStyle: {
                backgroundColor: '#2980b9',
            },
            tabStyle: {
                alignItems: 'center',
                justifyContent : 'center',
                flex: 1 ,
            },
            style: {
                backgroundColor: '#3b536b',
                height: 70,
                borderTopWidth: 0,
                borderBottomWidth: 0,
                elevation: 2,

            },
        }
    },
);
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',

    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: '400',
        zIndex: 2,
        fontFamily: 'Lobster',

    },
    textDescriber: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '300',
        zIndex: 2,
        fontFamily: 'Lobster',
    },
    imageSplash: {
        resizeMode: 'cover',
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 0,
        alignItems: 'center',
        justifyContent: 'center'

    },
    backgroundLayer: {
        position: 'absolute',
        flex: 1,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 1,
        backgroundColor: '#2D2136',
        opacity: 0.6,

    },
    icon: {
        width: 20,
        height: 20,
    },
});
