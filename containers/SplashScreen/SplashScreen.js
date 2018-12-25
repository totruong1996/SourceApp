import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import Swiper from 'react-native-swiper';
import {
    StackNavigator,
} from 'react-navigation';
import Login from '../Login/Login';
import {Font} from '../utils/Font.js';


class SplashScreen extends Component {

    render() {
        const listImages = [
            {
                image: require("../../images/splash_1.jpg")
            },
            {
                image: require("../../images/splash_3.jpg")
            },
        ];
        return (
            <Swiper style={styles.wrapper} showsButtons={false}
                    dot={<View style={{
                        backgroundColor: '#fff',
                        width: 8,
                        height: 8,
                        borderRadius: 4,
                        marginLeft: 3,
                        marginRight: 3,
                        marginTop: 3,
                        marginBottom: 3,
                    }}/>}
                    activeDot={
                        <View style={{
                            backgroundColor: '#f1c40f',
                            width: 8,
                            height: 8,
                            borderRadius: 4,
                            marginLeft: 3,
                            marginRight: 3,
                            marginTop: 3,
                            marginBottom: 3,
                        }}/>
                    }
            >
                <View style={styles.slide1}>
                    <View style={styles.backgroundLayer}/>
                    <Text style={styles.text}>Travel App</Text>
                    <Text style={styles.textDescriber}>Chào mừng bạn đến với chúng tôi</Text>
                    <Image style={styles.imageSplash} source={listImages[0].image}/>
                </View>
                <View style={styles.slide2}>
                    <View style={styles.backgroundLayer}/>
                    <Text style={styles.text}>Travel App</Text>
                    <Text style={styles.textDescriber}>Chào mừng bạn đến với chúng tôi</Text>
                    <Image style={styles.imageSplash} source={listImages[1].image}/>
                </View>
                <View style={styles.slide3}>
                    <View style={styles.backgroundLayer}/>
                    <Text style={styles.text}>Travel App</Text>
                    <Text style={styles.textDescriber}>Chào mừng bạn đến với chúng tôi</Text>
                    <Image style={styles.imageSplash} source={listImages[0].image}/>
                    <View style={styles.skipButton}>
                        <TouchableOpacity onPress={() => {
                            // this.props.navigation.navigate('Home');
                            this.props.navigation.navigate('Login');
                        }}>
                            <Text style={{fontSize: 18, color: '#fff', fontFamily : Font.Montserrat}}>Skip</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Swiper>
        );
    }
}


const IntroScreen = StackNavigator(
    {
        SplashScreen: {screen: SplashScreen},
        Login: {screen: Login},
    },
    {
        headerMode: 'none',
    }
);

export default IntroScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        zIndex: 10000,
        position : 'relative'
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
        zIndex: 200,
        fontFamily: Font.Lobster,

    },
    textDescriber: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '300',
        zIndex: 200,
        fontFamily: Font.Montserrat,
    },
    imageSplash: {
        resizeMode: 'cover',
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 100,
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
        zIndex: 150,
        backgroundColor: '#2D2136',
        opacity: 0.6,

    },
    skipButton: {
        position: 'absolute',
        flex: 1,
        left: 0,
        bottom: 20,
        right: 20,
        zIndex: 300,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
       

    }
});
