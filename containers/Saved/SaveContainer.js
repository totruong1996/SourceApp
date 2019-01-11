import React, {Component, PropTypes} from "react";
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    // Button,
    Animated,
    Easing,
    TouchableOpacity,
    ListView,
    ScrollView,
    TextInput,
    Modal,
    TouchableHighlight,
    PanResponder
} from "react-native";

import {StackNavigator, TabNavigator} from "react-navigation";
import {Font} from "../utils/Font";
import {
    Container,
    Content,
    Header,
    Item,
    Input,
    Icon,
    Button,
    Card,
    CardItem,
    Thumbnail,
    // Text,
    Body,
    Tab,
    Tabs,
    TabHeading
} from "native-base";
import Swiper from "react-native-swiper";
import ScrollableTabView, {ScrollableTabBar,} from 'react-native-scrollable-tab-view';
import FacebookExample from './FacebookExample';

class SaveContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isDateTimePickerVisible: false, modalVisible: false
        };
    }

    componentDidMount() {

    }


    render() {
        return <FacebookExample navigation={this.props.navigation}
                                handleViewDetail={() => {
                                this.props.navigation.navigate('DetailCategory', {typeCategory: 'homeCategory'})}}
        />;
    }
}

export default SaveContainer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingRight: 0,
        paddingLeft: 0,
    },
    containerTab: {
        flex: 1,
        backgroundColor: "transparent",
        marginLeft: 15,
        marginRight: 15
    },
    viewSearch: {
        marginTop: 20,
        marginBottom: 20
    },
    containerSearchInput: {
        borderBottomWidth: 0,
        elevation: 2,
        borderRadius: 5,
        height: 40
    },
    inputSearch: {
        fontFamily: Font.RobotoLight,
        fontSize: 14,
        height: 40,
        alignItems: 'center',
        textAlignVertical: 'center'

    },
    buttonDate: {
        borderColor: "#ccc",
        paddingLeft: 0,
        paddingRight: 0,
        borderRadius: 5,
        paddingTop: 0,
        paddingBottom: 0,
        height: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    containerItem: {
        marginBottom: 20,
        marginTop: 20,
    },
    slideItem: {
        flex: 1,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageSlide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        height: 200,
    },
    bgBlur: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.3)',
        zIndex: 1
    },
    img: {
        flex: 1,
        alignSelf: 'stretch',
        width: null,
    },
    desText: {
        color: 'rgb(160, 47, 24)',
        fontSize: 12,
        fontFamily: Font.Roboto,
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop: 10,
    },
    nameItem: {
        fontSize: 20,
        color: '#484848',
        fontWeight: 'bold',
        fontFamily: Font.Roboto,
    },
    priceItem: {
        fontSize: 14,
        color: '#484848',
        fontFamily: Font.RobotoLight,
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'center',
    }


});
