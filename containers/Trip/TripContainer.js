import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    TouchableHighlight,
    TouchableOpacity,
    Image,


} from "react-native";
import Swiper from "react-native-swiper";
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
    Text,
    Body
} from "native-base";

export default class TripContainer extends Component {
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

    _onHandleDelete(index) {
        let {listNotice} = this.state;
        listNotice.splice(index, 1);
        this.setState({listNotice});
    }

    render() {
        const {listNotice} = this.state;
        return (

            <ScrollView style={styles.container}>
                <View style={{marginTop: 20, marginLeft: 15}}>
                    <Text style={{fontFamily: Font.RobotoLight, fontSize: 16, color: '#484848', fontWeight: 'bold'}}>
                        Chuyến đi của bạn</Text>
                </View>
                <TouchableOpacity style={styles.containerItem} onPress={this.props.handleViewDetail}>

                    <View style={styles.imageSlide}>
                        <View style={{position: 'absolute', right: 10, top: 10, width: 20, height: 20, zIndex: 10}}>
                            <Icon name='md-heart-outline' style={{fontSize: 22, color: '#fff'}}/>
                        </View>
                        <Image
                            source={require("../../images/experience-category.jpg")}
                            style={styles.img}
                        />
                        <View style={styles.bgBlur}/>
                    </View>

                    <View style={styles.bottomItem}>
                        <View style={styles.textItem}>
                            <Text style={styles.desText} uppercase>Số lượng phòng - 2 phòng</Text>
                            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                                <Text style={styles.nameItem}>Nhà tình nhân</Text>
                                <TouchableOpacity style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    backgroundColor: '#3b536b',
                                    justifyContent: 'center',
                                    paddingLeft: 10, paddingRight: 10,
                                    borderRadius: 3,
                                    paddingTop: 5,
                                    paddingBottom: 5
                                }}>
                                    <Icon name='ios-add' style={{
                                        fontSize: 24,
                                        color: '#fff',
                                        marginRight: 10,
                                        fontWeight: 'bold'
                                    }}/>
                                    <Text style={{fontSize: 16, color: '#fff', fontFamily: Font.RobotoLight}}>
                                        Mời bạn bè
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Icon name='ios-calendar-outline'
                                      style={{fontSize: 14, color: '#484848', marginRight: 10, fontWeight: 'bold'}}/>
                                <Text style={[styles.priceItem, {fontWeight: 'bold'}]}>22/12/2017</Text>
                            </View>
                            <Text style={[styles.priceItem, {marginTop: 3}]}>220.000Đ / Người</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.containerItem} onPress={this.props.handleViewDetail}>

                    <View style={styles.imageSlide}>
                        <View style={{position: 'absolute', right: 10, top: 10, width: 20, height: 20, zIndex: 10}}>
                            <Icon name='md-heart-outline' style={{fontSize: 22, color: '#fff'}}/>
                        </View>
                        <Image
                            source={require("../../images/home-category.jpg")}
                            style={styles.img}
                        />
                        <View style={styles.bgBlur}/>
                    </View>

                    <View style={styles.bottomItem}>
                        <View style={styles.textItem}>
                            <Text style={styles.desText} uppercase>Số lượng phòng - 2 phòng</Text>
                            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                                <Text style={styles.nameItem}>Nhà tình nhân</Text>
                                <TouchableOpacity style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    backgroundColor: '#3b536b',
                                    justifyContent: 'center',
                                    paddingLeft: 10, paddingRight: 10,
                                    borderRadius: 3,
                                    paddingTop: 5,
                                    paddingBottom: 5
                                }}>
                                    <Icon name='ios-add' style={{
                                        fontSize: 24,
                                        color: '#fff',
                                        marginRight: 10,
                                        fontWeight: 'bold'
                                    }}/>
                                    <Text style={{fontSize: 16, color: '#fff', fontFamily: Font.RobotoLight}}>
                                        Mời bạn bè
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Icon name='ios-calendar-outline'
                                      style={{fontSize: 14, color: '#484848', marginRight: 10, fontWeight: 'bold'}}/>
                                <Text style={[styles.priceItem, {fontWeight: 'bold'}]}>22/12/2017</Text>
                            </View>
                            <Text style={[styles.priceItem, {marginTop: 3}]}>220.000Đ / Người</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.containerItem} onPress={this.props.handleViewDetail}>

                    <View style={styles.imageSlide}>
                        <View style={{position: 'absolute', right: 10, top: 10, width: 20, height: 20, zIndex: 10}}>
                            <Icon name='md-heart-outline' style={{fontSize: 22, color: '#fff'}}/>
                        </View>
                        <Image
                            source={require("../../images/food-category.jpg")}
                            style={styles.img}
                        />
                        <View style={styles.bgBlur}/>
                    </View>

                    <View style={styles.bottomItem}>
                        <View style={styles.textItem}>
                            <Text style={styles.desText} uppercase>Số lượng phòng - 2 phòng</Text>
                            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                                <Text style={styles.nameItem}>Nhà tình nhân</Text>
                                <TouchableOpacity style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    backgroundColor: '#3b536b',
                                    justifyContent: 'center',
                                    paddingLeft: 10, paddingRight: 10,
                                    borderRadius: 3,
                                    paddingTop: 5,
                                    paddingBottom: 5
                                }}>
                                    <Icon name='ios-add' style={{
                                        fontSize: 24,
                                        color: '#fff',
                                        marginRight: 10,
                                        fontWeight: 'bold'
                                    }}/>
                                    <Text style={{fontSize: 16, color: '#fff', fontFamily: Font.RobotoLight}}>
                                        Mời bạn bè
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Icon name='ios-calendar-outline'
                                      style={{fontSize: 14, color: '#484848', marginRight: 10, fontWeight: 'bold'}}/>
                                <Text style={[styles.priceItem, {fontWeight: 'bold'}]}>22/12/2017</Text>
                            </View>
                            <Text style={[styles.priceItem, {marginTop: 3}]}>220.000Đ / Người</Text>
                        </View>
                    </View>
                </TouchableOpacity>


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
        marginLeft: 15, marginRight: 15,
        borderColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 10,
    },
    slideItem: {
        flex: 1,
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageSlide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        height: 150,
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
        marginTop: 5,
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
