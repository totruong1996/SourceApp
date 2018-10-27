import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    TouchableHighlight

} from "react-native";
import {Font} from "../utils/Font";
import {Container, Header, Content, List, ListItem, Thumbnail, Text, Body, Left, Right} from 'native-base';

export default class NotificationContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listNotice: [
                {
                    img: require('../../images/experience-category.jpg'),
                    text: 'Còn chờ gì nữa hay nhanh tay đặt chỗ ngay nào để có cơ hội nhận 200.000đ',
                },
                {
                    img: require('../../images/teaser.jpeg.jpg'),
                    text: 'Còn chờ gì nữa hay nhanh tay đặt chỗ ngay nào để có cơ hội nhận 200.000đ',
                },
                {
                    img: require('../../images/home-category.jpg'),
                    text: 'Còn chờ gì nữa hay nhanh tay đặt chỗ ngay nào để có cơ hội nhận 200.000đ',
                },
                {
                    img: require('../../images/food-category.jpg'),
                    text: 'Còn chờ gì nữa hay nhanh tay đặt chỗ ngay nào để có cơ hội nhận 200.000đ',
                },
                {
                    img: require('../../images/experience-category.jpg'),
                    text: 'Còn chờ gì nữa hay nhanh tay đặt chỗ ngay nào để có cơ hội nhận 200.000đ',
                },
                {
                    img: require('../../images/teaser.jpeg.jpg'),
                    text: 'Còn chờ gì nữa hay nhanh tay đặt chỗ ngay nào để có cơ hội nhận 200.000đ',
                },

            ]
        };

    }
    _onHandleDelete(index){
        let {listNotice} =  this.state;
        listNotice.splice(index, 1);
        this.setState({listNotice});
    }

    render() {
        const {listNotice} = this.state;
        return (

            <ScrollView style={styles.container}>
                <View style ={{marginTop: 20, marginLeft: 15}}>
                    <Text style={{fontFamily: Font.RobotoLight, fontSize: 16, color: '#484848', fontWeight: 'bold'}}> Các thông báo của
                        bạn</Text>
                </View>
                <List>
                    {
                        listNotice.map((current, index) => {
                            return (
                                <ListItem key={index} style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderBottomWidth: 1,
                                    borderColor: '#eaeaea',
                                    marginRight: 15
                                }}>
                                    <Left style={{flex: 1}}>
                                        <Thumbnail square size={80} source={current.img}/>
                                    </Left>

                                    <Body style={{justifyContent: 'center', flex: 3}}>
                                    <Text style={{
                                        marginRight: 0,
                                        marginLeft: 5,
                                        fontSize: 12,
                                        fontFamily: Font.RobotoLight
                                    }}>
                                        {current.text}
                                    </Text>
                                    <Text style={{
                                        textAlign: 'right',
                                        marginRight: 0,
                                        marginTop: 3,
                                        marginLeft: 5,
                                        fontSize: 12,
                                        fontFamily: Font.RobotoLight,
                                        color: '#484848'
                                    }}>
                                        3 ngày trước
                                    </Text>
                                    </Body>
                                    <Right style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'transparent'}}>
                                        <TouchableHighlight
                                            underlayColor={"transparent"}
                                            activeOpacity={1}
                                            onPress = {()=>{
                                                this._onHandleDelete(index);
                                            }}
                                            style={{alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: 'transparent'}}>
                                            <Text style={{
                                                color: '#f02',
                                                marginRight: 5,
                                                marginLeft: 5,
                                                fontSize: 12,
                                                fontFamily: Font.RobotoLight
                                            }}>Xóa</Text>
                                        </TouchableHighlight>
                                    </Right>
                                </ListItem>
                            );
                        })
                    }
                </List>

            </ScrollView>
        );
    }
}
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
