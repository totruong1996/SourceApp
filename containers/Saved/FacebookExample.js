import React from 'react';
import {
    TouchableHighlight,
    TouchableOpacity,
    ScrollView,
    View,
    Image,
    StyleSheet,
} from 'react-native';
import {Font} from "../utils/Font";
import ScrollableTabView, {ScrollableTabBar,} from 'react-native-scrollable-tab-view';
import createReactClass from 'create-react-class';
import Swiper from "react-native-swiper";
import {Icon ,Text,} from "native-base";
import {StackNavigator, } from "react-navigation";
import  DetailCategory from '../DetailCategory/DetailCategory';
class Child extends React.Component {
    onEnter() {
        console.log('enter: ' + this.props.i); // eslint-disable-line no-console
    }

    onLeave() {
        console.log('leave: ' + this.props.i); // eslint-disable-line no-console
    }

    render() {
        const {i} = this.props;
        if (i === 0)
            return <ScrollView style={styles.container}>
                <View style={styles.rowCategory}>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={[styles.containerItem, {marginRight: 5}]}
                        onPress={() => {
                            this.props.navigation.navigate('DetailCategory', {typeCategory: 'homeCategory'});
                        }}>

                        <View style={styles.imageSlide}>
                            <View style={styles.bgBlur}/>
                            <Image style={styles.img} source={require("../../images/slide-home-col.jpg")}/>
                            <Icon name='ios-heart' style={{fontSize: 18, color: 'rgb(255, 90, 95)', position: 'absolute',
                                top: 5,
                                right:5,
                                width:30, height: 30,
                                alignItems: 'center',justifyContent: 'center',
                                zIndex: 2,
                                textAlign: 'center'
                            }}/>
                        </View>

                        <View style={styles.bottomItem}>
                            <View style={styles.textItem}>
                                <Text style={styles.desText} uppercase>Số lượng phòng - 2 phòng</Text>
                                <Text style={styles.nameItem}>Nhà tình nhân</Text>
                                <Text style={styles.priceItem}>220.000Đ / Người</Text>
                                <View style={styles.rating}>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={[styles.containerItem, {marginLeft: 5}]}
                        onPress={() => {
                            this.props.navigation.navigate('DetailCategory', {typeCategory: 'homeCategory'});
                        }}>

                        <View style={styles.imageSlide}>
                            <View style={styles.bgBlur}/>
                            <Image style={styles.img} source={require("../../images/slide-home-col.jpg")}/>
                            <Icon name='ios-heart' style={{fontSize: 18, color: 'rgb(255, 90, 95)', position: 'absolute',
                                top: 5,
                                right:5,
                                width:30, height: 30,
                                alignItems: 'center',justifyContent: 'center',
                                zIndex: 2,
                                textAlign: 'center'
                            }}/>
                        </View>

                        <View style={styles.bottomItem}>
                            <View style={styles.textItem}>
                                <Text style={styles.desText} uppercase>Số lượng phòng - 2 phòng</Text>
                                <Text style={styles.nameItem}>Nhà tình nhân</Text>
                                <Text style={styles.priceItem}>220.000Đ / Người</Text>
                                <View style={styles.rating}>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.rowCategory}>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={[styles.containerItem, {marginRight: 5}]}
                        onPress={() => {
                            this.props.navigation.navigate('DetailCategory', {typeCategory: 'homeCategory'});
                        }}>

                        <View style={styles.imageSlide}>
                            <View style={styles.bgBlur}/>
                            <Image style={styles.img} source={require("../../images/slide-home-col.jpg")}/>
                            <Icon name='ios-heart' style={{fontSize: 18, color: 'rgb(255, 90, 95)', position: 'absolute',
                                top: 5,
                                right:5,
                                width:30, height: 30,
                                alignItems: 'center',justifyContent: 'center',
                                zIndex: 2,
                                textAlign: 'center'
                            }}/>
                        </View>

                        <View style={styles.bottomItem}>
                            <View style={styles.textItem}>
                                <Text style={styles.desText} uppercase>Số lượng phòng - 2 phòng</Text>
                                <Text style={styles.nameItem}>Nhà tình nhân</Text>
                                <Text style={styles.priceItem}>220.000Đ / Người</Text>
                                <View style={styles.rating}>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={[styles.containerItem, {marginLeft: 5}]}
                        onPress={() => {
                            this.props.navigation.navigate('DetailCategory', {typeCategory: 'homeCategory'});
                        }}>

                        <View style={styles.imageSlide}>
                            <View style={styles.bgBlur}/>
                            <Image style={styles.img} source={require("../../images/slide-home-col.jpg")}/>
                            <Icon name='ios-heart' style={{fontSize: 18, color: 'rgb(255, 90, 95)', position: 'absolute',
                                top: 5,
                                right:5,
                                width:30, height: 30,
                                alignItems: 'center',justifyContent: 'center',
                                zIndex: 2,
                                textAlign: 'center'
                            }}/>
                        </View>

                        <View style={styles.bottomItem}>
                            <View style={styles.textItem}>
                                <Text style={styles.desText} uppercase>Số lượng phòng - 2 phòng</Text>
                                <Text style={styles.nameItem}>Nhà tình nhân</Text>
                                <Text style={styles.priceItem}>220.000Đ / Người</Text>
                                <View style={styles.rating}>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.rowCategory}>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={[styles.containerItem, {marginRight: 5}]}
                        onPress={() => {
                            this.props.navigation.navigate('DetailCategory', {typeCategory: 'homeCategory'});
                        }}>

                        <View style={styles.imageSlide}>
                            <View style={styles.bgBlur}/>
                            <Image style={styles.img} source={require("../../images/slide-home-col.jpg")}/>
                            <Icon name='ios-heart' style={{fontSize: 18, color: 'rgb(255, 90, 95)', position: 'absolute',
                                top: 5,
                                right:5,
                                width:30, height: 30,
                                alignItems: 'center',justifyContent: 'center',
                                zIndex: 2,
                                textAlign: 'center'
                            }}/>
                        </View>

                        <View style={styles.bottomItem}>
                            <View style={styles.textItem}>
                                <Text style={styles.desText} uppercase>Số lượng phòng - 2 phòng</Text>
                                <Text style={styles.nameItem}>Nhà tình nhân</Text>
                                <Text style={styles.priceItem}>220.000Đ / Người</Text>
                                <View style={styles.rating}>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={[styles.containerItem, {marginRight: 5}]}
                        >

                    </TouchableOpacity>
                </View>

            </ScrollView>;
        if (i === 1) return (
            <ScrollView style={styles.container}>
                <View style={styles.rowCategory}>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={[styles.containerItem, {marginRight: 5}]}
                        onPress={() => {
                            this.props.navigation.navigate('DetailCategory', {typeCategory: 'homeCategory'});
                        }}>

                        <View style={styles.imageSlide}>
                            <View style={styles.bgBlur}/>
                            <Image style={styles.img} source={require("../../images/experience-category.jpg")}/>
                            <Icon name='ios-heart' style={{fontSize: 18, color: 'rgb(255, 90, 95)', position: 'absolute',
                                top: 5,
                                right:5,
                                width:30, height: 30,
                                alignItems: 'center',justifyContent: 'center',
                                zIndex: 2,
                                textAlign: 'center'
                            }}/>
                        </View>

                        <View style={styles.bottomItem}>
                            <View style={styles.textItem}>
                                <Text style={styles.desText} uppercase>Du lịch - Hạ Long</Text>
                                <Text style={styles.nameItem}>Khám phá Hạ Long</Text>
                                <Text style={styles.priceItem}>220.000Đ / Người</Text>
                                <View style={styles.rating}>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={[styles.containerItem, {marginLeft: 5}]}
                        onPress={() => {
                            this.props.navigation.navigate('DetailCategory', {typeCategory: 'homeCategory'});
                        }}>

                        <View style={styles.imageSlide}>
                            <View style={styles.bgBlur}/>
                            <Image style={styles.img} source={require("../../images/experience-category.jpg")}/>
                            <Icon name='ios-heart' style={{fontSize: 18, color: 'rgb(255, 90, 95)', position: 'absolute',
                                top: 5,
                                right:5,
                                width:30, height: 30,
                                alignItems: 'center',justifyContent: 'center',
                                zIndex: 2,
                                textAlign: 'center'
                            }}/>
                        </View>

                        <View style={styles.bottomItem}>
                            <View style={styles.textItem}>
                                <Text style={styles.desText} uppercase>Du lịch - Hạ Long</Text>
                                <Text style={styles.nameItem}>Khám phá Hạ Long</Text>
                                <Text style={styles.priceItem}>220.000Đ / Người</Text>
                                <View style={styles.rating}>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.rowCategory}>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={[styles.containerItem, {marginRight: 5}]}
                        onPress={() => {
                            this.props.navigation.navigate('DetailCategory', {typeCategory: 'homeCategory'});
                        }}>

                        <View style={styles.imageSlide}>
                            <View style={styles.bgBlur}/>
                            <Image style={styles.img} source={require("../../images/experience-category.jpg")}/>
                            <Icon name='ios-heart' style={{fontSize: 18, color: 'rgb(255, 90, 95)', position: 'absolute',
                                top: 5,
                                right:5,
                                width:30, height: 30,
                                alignItems: 'center',justifyContent: 'center',
                                zIndex: 2,
                                textAlign: 'center'
                            }}/>
                        </View>

                        <View style={styles.bottomItem}>
                            <View style={styles.textItem}>
                                <Text style={styles.desText} uppercase>Du lịch - Hạ Long</Text>
                                <Text style={styles.nameItem}>Khám phá Hạ Long</Text>
                                <Text style={styles.priceItem}>220.000Đ / Người</Text>
                                <View style={styles.rating}>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={[styles.containerItem, {marginLeft: 5}]}
                        onPress={() => {
                            this.props.navigation.navigate('DetailCategory', {typeCategory: 'homeCategory'});
                        }}>

                        <View style={styles.imageSlide}>
                            <View style={styles.bgBlur}/>
                            <Image style={styles.img} source={require("../../images/experience-category.jpg")}/>
                            <Icon name='ios-heart' style={{fontSize: 18, color: 'rgb(255, 90, 95)', position: 'absolute',
                                top: 5,
                                right:5,
                                width:30, height: 30,
                                alignItems: 'center',justifyContent: 'center',
                                zIndex: 2,
                                textAlign: 'center'
                            }}/>
                        </View>

                        <View style={styles.bottomItem}>
                            <View style={styles.textItem}>
                                <Text style={styles.desText} uppercase>Du lịch - Hạ Long</Text>
                                <Text style={styles.nameItem}>Khám phá Hạ Long</Text>
                                <Text style={styles.priceItem}>220.000Đ / Người</Text>
                                <View style={styles.rating}>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.rowCategory}>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={[styles.containerItem, {marginRight: 5}]}
                        onPress={() => {
                            this.props.navigation.navigate('DetailCategory', {typeCategory: 'homeCategory'});
                        }}>

                        <View style={styles.imageSlide}>
                            <View style={styles.bgBlur}/>
                            <Image style={styles.img} source={require("../../images/experience-category.jpg")}/>
                            <Icon name='ios-heart' style={{fontSize: 18, color: 'rgb(255, 90, 95)', position: 'absolute',
                                top: 5,
                                right:5,
                                width:30, height: 30,
                                alignItems: 'center',justifyContent: 'center',
                                zIndex: 2,
                                textAlign: 'center'
                            }}/>
                        </View>

                        <View style={styles.bottomItem}>
                            <View style={styles.textItem}>
                                <Text style={styles.desText} uppercase>Du lịch - Hạ Long</Text>
                                <Text style={styles.nameItem}>Khám phá Hạ Long</Text>
                                <Text style={styles.priceItem}>220.000Đ / Người</Text>
                                <View style={styles.rating}>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={[styles.containerItem, {marginRight: 5}]}
                    >

                    </TouchableOpacity>
                </View>

            </ScrollView>
        );
        if (i === 2) return (
            <ScrollView style={styles.container}>
                <View style={styles.rowCategory}>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={[styles.containerItem, {marginRight: 5}]}
                        onPress={() => {
                            this.props.navigation.navigate('DetailCategory', {typeCategory: 'homeCategory'});
                        }}>

                        <View style={styles.imageSlide}>
                            <View style={styles.bgBlur}/>
                            <Image style={styles.img} source={require("../../images/food-category.jpg")}/>
                            <Icon name='ios-heart' style={{fontSize: 18, color: 'rgb(255, 90, 95)', position: 'absolute',
                                top: 5,
                                right:5,
                                width:30, height: 30,
                                alignItems: 'center',justifyContent: 'center',
                                zIndex: 2,
                                textAlign: 'center'
                            }}/>
                        </View>

                        <View style={styles.bottomItem}>
                            <View style={styles.textItem}>
                                <Text style={styles.desText} uppercase>Ẩm thực - Hồ Chí Minh</Text>
                                <Text style={styles.nameItem}>Buffet Bùi Viện</Text>
                                <Text style={styles.priceItem}>220.000Đ / Người</Text>
                                <View style={styles.rating}>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={[styles.containerItem, {marginLeft: 5}]}
                        onPress={() => {
                            this.props.navigation.navigate('DetailCategory', {typeCategory: 'homeCategory'});
                        }}>

                        <View style={styles.imageSlide}>
                            <View style={styles.bgBlur}/>
                            <Image style={styles.img} source={require("../../images/food-category.jpg")}/>
                            <Icon name='ios-heart' style={{fontSize: 18, color: 'rgb(255, 90, 95)', position: 'absolute',
                                top: 5,
                                right:5,
                                width:30, height: 30,
                                alignItems: 'center',justifyContent: 'center',
                                zIndex: 2,
                                textAlign: 'center'
                            }}/>
                        </View>

                        <View style={styles.bottomItem}>
                            <View style={styles.textItem}>
                                <Text style={styles.desText} uppercase>Ẩm thực - Hồ Chí Minh</Text>
                                <Text style={styles.nameItem}>Buffet Bùi Viện</Text>
                                <Text style={styles.priceItem}>220.000Đ / Người</Text>
                                <View style={styles.rating}>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.rowCategory}>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={[styles.containerItem, {marginRight: 5}]}
                        onPress={() => {
                            this.props.navigation.navigate('DetailCategory', {typeCategory: 'homeCategory'});
                        }}>

                        <View style={styles.imageSlide}>
                            <View style={styles.bgBlur}/>
                            <Image style={styles.img} source={require("../../images/food-category.jpg")}/>
                            <Icon name='ios-heart' style={{fontSize: 18, color: 'rgb(255, 90, 95)', position: 'absolute',
                                top: 5,
                                right:5,
                                width:30, height: 30,
                                alignItems: 'center',justifyContent: 'center',
                                zIndex: 2,
                                textAlign: 'center'
                            }}/>
                        </View>

                        <View style={styles.bottomItem}>
                            <View style={styles.textItem}>
                                <Text style={styles.desText} uppercase>Ẩm thực - Hồ Chí Minh</Text>
                                <Text style={styles.nameItem}>Buffet Bùi Viện</Text>
                                <Text style={styles.priceItem}>220.000Đ / Người</Text>
                                <View style={styles.rating}>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={[styles.containerItem, {marginLeft: 5}]}
                        onPress={() => {
                            this.props.navigation.navigate('DetailCategory', {typeCategory: 'homeCategory'});
                        }}>

                        <View style={styles.imageSlide}>
                            <View style={styles.bgBlur}/>
                            <Image style={styles.img} source={require("../../images/food-category.jpg")}/>
                            <Icon name='ios-heart' style={{fontSize: 18, color: 'rgb(255, 90, 95)', position: 'absolute',
                                top: 5,
                                right:5,
                                width:30, height: 30,
                                alignItems: 'center',justifyContent: 'center',
                                zIndex: 2,
                                textAlign: 'center'
                            }}/>
                        </View>

                        <View style={styles.bottomItem}>
                            <View style={styles.textItem}>
                                <Text style={styles.desText} uppercase>Ẩm thực - Hồ Chí Minh</Text>
                                <Text style={styles.nameItem}>Buffet Bùi Viện</Text>
                                <Text style={styles.priceItem}>220.000Đ / Người</Text>
                                <View style={styles.rating}>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                    <Icon name='ios-star' style={{fontSize: 12, color: '#008489',}}/>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
             

            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingRight: 15,
        paddingLeft: 15,
        backgroundColor: "#fff",
    },
    containerItem: {
        flex: 1,
    },
    slideItem: {
        flex: 1,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageSlide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        height: 100,
    },
    bgBlur: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
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
        fontSize: 16,
        color: '#484848',
        fontWeight: 'bold',
        fontFamily: Font.Roboto,
    },
    priceItem: {
        fontSize: 12,
        color: '#484848',
        fontFamily: Font.RobotoLight,
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rowCategory: {
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: 20,
    }


});

class ContainerPageSaved extends  React.Component{

    constructor(props){
        super(props);
        this.children = [];
        this.state= {tabs: ['Nhà ở', 'Du lịch'],};
    }

    componentDidMount() {
        setTimeout(
            () => {
                this.setState({tabs: ['Nhà ở', 'Du lịch', 'Ẩm thực',],});
            },
            100
        );
    };

    handleChangeTab({i, ref, from,}) {
        this.children[i].onEnter();
        this.children[from].onLeave();
    };

    renderTab(name, page, isTabActive, onPressHandler, onLayoutHandler) {
        return <TouchableHighlight
            key={`${name}_${page}`}
            onPress={() => onPressHandler(page)}
            onLayout={onLayoutHandler}
            style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff'}}
            underlayColor="#aaaaaa"

        >
            <Text style={{ fontWeight: 'bold', fontSize: 16, fontFamily: Font.RobotoLight}}>{name}</Text>
        </TouchableHighlight>;
    };

    render() {
        return <ScrollableTabView
            style={{}}
            renderTabBar={() => <ScrollableTabBar renderTab={this.renderTab.bind(this)}/>}
            onChangeTab={this.handleChangeTab.bind(this)}
            tabBarUnderlineStyle={{backgroundColor: '#3b536b'}}
            tabBarActiveTextColor ='#008489'


        >
            {this.state.tabs.map((tab, i) => {
                return <Child
                    navigation = {this.props.navigation}
                    ref={(ref) => (this.children[i] = ref)}
                    tabLabel={tab}
                    i={i}
                    key={i}
                />;
            })}
        </ScrollableTabView>;
    }
}

const FacebookExample = StackNavigator(
    {
        ContainerPageSaved: {screen: ContainerPageSaved},
        DetailCategory: {screen: DetailCategory},
    },
    {
        headerMode: 'none',
    }
);
export  default  FacebookExample;