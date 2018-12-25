import React, {Component} from 'react';
import {connect} from 'react-redux';
import{bindActionCreators} from 'redux';
import ActionCreators from '../../redux/actions'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight ,
} from 'react-native';
import { Item, Input,Icon} from 'native-base';
import {
    StackNavigator,
} from 'react-navigation';

import Home from '../Home/Home';
import {Font} from '../utils/Font.js';
import { loggedInStatus } from '../../redux/reducers/loggedOut';


class LoginContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            email : '',
            password : ''
        }
    }

    handleEmailChange = (email)=>{
        this.setState({
            email
        })
    }
    handlePasswordChange = (password)=>{
        this.setState({
            password
        })
    }
    componentWillReceiveProps(nextprops){
        if(nextprops.loggedInStatus.loggedInState){
            this.props.navigation.navigate('Home');
        }
        console.log(nextprops);
    }
    render() {
        const {loggedInState} = this.props.loggedInStatus
        const listImages = [
            {
                image: require("../../images/splash_1.jpg")
            },
            {
                image: require("../../images/splash_3.jpg")
            },
        ];
        return (
            <View style={styles.container}>
                <View style={styles.backgroundLayer}/>
                <View style={styles.background}>
                    <Image style={styles.imageBackground} source={require('../../images/travel-login.jpg')}/>
                </View>
                <View style={styles.content}>
                    <View style={styles.titlePage}>
                        <TouchableHighlight style={{paddingTop:5, paddingBottom: 5, marginRight: 20}}
                            activeOpacity ={1}
                            underlayColor={'transparent'}
                            onPress={()=>{
                                this.props.navigation.navigate('SplashScreen');
                            }}
                        >
                            <Icon name="ios-arrow-round-back" style={{ color: "#fff", fontSize: 36}}/>
                        </TouchableHighlight>
                        <Text style={styles.loginText}>Đăng Nhập</Text>
                    </View>
                    <View style={styles.wellcome}>
                        <Text style={styles.wellcomeText}>Chào mừng đến với Travel App</Text>
                    </View>
                    <View style={styles.formLogin}>
                        <View style={styles.inputForm}>
                            <Item>
                                <Input style={styles.input} placeholder="Email của bạn" placeholderTextColor={'#fff'} onChangeText ={this.handleEmailChange}/>
                            </Item>
                        </View>
                        <View style={styles.inputForm}>
                            <Item style={{borderBottomColor :'#fff'}}>
                                <Input secureTextEntry={true} style={styles.input} placeholder="Mật khẩu" placeholderTextColor={'#fff'} onChangeText ={this.handlePasswordChange}/>
                            </Item>
                        </View>
                        <View style={styles.buttonLogin}>
                            <TouchableHighlight  style={[styles.button]}
                                onPress={()=>{
                                    this.props.showListHome()
                                    this.props.showListTravel()
                                    this.props.showListFood()
                                    this.props.logIn(this.state.email, this.state.password)
                                           
                                }}
                            >
                                <Text style={styles.textButton}>Đăng nhập</Text>
                            </TouchableHighlight>
                            <TouchableHighlight  style={[styles.button,{backgroundColor: '#3d5b97', borderWidth: 0}]} >
                                <Text style={styles.textButton}>Login Faceook</Text>
                            </TouchableHighlight>
                            <TouchableHighlight  style={[styles.button, {backgroundColor: '#dd4c39', borderWidth: 0}]} >
                                <Text style={styles.textButton}>Đăng nhập Google</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const mapStateToProps = state =>{
    return {loggedInStatus: state.loggedInStatus}
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(ActionCreators, dispatch);
    }
const Login = StackNavigator(
    {
        LoginContainer: {screen: connect(mapStateToProps, mapDispatchToProps)(LoginContainer)},
        Home: {screen: Home},
    },
    {
        headerMode: 'none',
    }
);



export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3b536b',
        zIndex: 10000,
        position: 'relative',

    },
    background: {
        position : 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 1,
    },
    imageBackground:{
        resizeMode: 'cover',
        flex: 1,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titlePage: {
        marginTop: 20,
        marginBottom: 20,
        flexDirection:'row',
        paddingLeft: 5,
        alignItems: 'center'
    },
    loginText: {
        color: '#fff',
        fontSize: 24,
        fontFamily: Font.Lobster,
        fontWeight: 'bold',
        paddingLeft: 5
    },
    wellcome: {
        marginBottom: 20
    },
    formLogin: {
        flex: 1,
    },
    wellcomeText: {
        fontSize: 20,
        fontFamily: Font.Lobster,
        color: '#fff',
        paddingLeft: 5,
    },
    inputForm: {
        marginBottom: 20,
        borderColor: '#fff'
    },
    textInput: {
        color: '#fff',
        fontFamily: Font.RobotoLight,
        fontSize: 18,
        paddingLeft: 5,
    },
    input: {
        color: '#fff',
        fontSize: 16,
        fontFamily: Font.RobotoLight,

    },
    content: {
        position : 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 100,
        paddingLeft: 15,
        paddingRight: 15,
    },

    backgroundLayer: {
        flex: 1,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: '#2D2136',
        opacity: 0.7,
        zIndex: 2,
    },
    buttonLogin: {
        marginBottom: 20,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button:{
        marginBottom: 20,
        width: 170,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 10,
        paddingTop: 10,
        borderColor:  '#f5f4f4',
        borderWidth:1,
        borderRadius: 3,
    },
    textButton:{
        color : '#fff',
        fontFamily: Font.RobotoLight,
        fontSize: 16,
    }
});
