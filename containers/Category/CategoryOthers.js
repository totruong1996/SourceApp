import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreators from '../../redux/actions'
import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    PanResponder
} from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import Swiper from "react-native-swiper";
import { Font } from "../utils/Font";
import {
    Item,
    Input,
    Icon,
    Button,
    Text,
} from "native-base";

class CategoryFood extends Component {

    constructor(props) {
        super(props);
        this.state = { isDateTimePickerVisible: false, modalVisible: false, keyword: '' };
    }

    componentWillMount() {
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (event, gestureState) => true,
            onPanResponderGrant: this._onPanResponderGrant.bind(this),

        });
    }
    _onPanResponderGrant(event, gestureState) {
        if (event.nativeEvent.locationX === event.nativeEvent.pageX) {
            this.setState({ visible: false });
        }
    }
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = date => {
        console.log("A date has been picked: ", date);
        this._hideDateTimePicker();
    };
    _genStar = (star) => {
        list = []
        for (let i = 0; i < star; i++) {
            list.push(<Icon name='ios-star' style={{ fontSize: 14, color: '#008489', }} key={i} />);
        }
        return list;
    }
    handleChange = (keyword) => {
        this.setState({
            keyword
        });
    }
    onSearch = () => {
        let keyword = this.state.keyword;
        this.props.showListTravel();
        if (keyword.trim() === '') {
            this.props.navigation.navigate('Category', { typeCategory: 'travelCategory' });
        } else if (keyword.trim().toLocaleLowerCase() === 'ho chi minh' || keyword.trim().toLocaleLowerCase().indexOf("hồ chí minh") !== -1) {
            this.props.navigation.navigate('Category', { typeCategory: 'HCMtravel' });
        } else if (keyword.trim().toLocaleLowerCase() === 'ha noi' || keyword.trim().toLocaleLowerCase().indexOf("hà nội") !== -1) {
            this.props.navigation.navigate('Category', { typeCategory: 'HNtravel' });
        } else if (keyword.trim().toLocaleLowerCase() === 'nha trang') {
            this.props.navigation.navigate('Category', { typeCategory: 'NTtravel' });
        } else if (keyword.trim().toLocaleLowerCase() === 'ha long' || keyword.trim().toLocaleLowerCase().indexOf("hạ long") !== -1) {
            this.props.navigation.navigate('Category', { typeCategory: 'HLtravel' });
        } else if (keyword.trim().toLocaleLowerCase() === 'da lat' || keyword.trim().toLocaleLowerCase().indexOf("đà lạt") !== -1) {
            this.props.navigation.navigate('Category', { typeCategory: 'DLtravel' });
        } else {
            this.props.navigation.navigate('Category', { typeCategory: 'no' });
        }

    }
    render() {
        var dict = {
            all: '',
            hcm: 'Hồ Chí Minh',
            dl: "Đà Lạt",
            nt: "Nha Trang",
            hl: "Hạ Long",
            hn: "Hà Nội",
            no: "No Result..."
        }
        var { type } = this.props;
        let { listTravel } = this.props;
        console.log(listTravel)
        var list = listTravel.listTravel.map((item, index) => {
            if (item.address.indexOf(dict[type]) !== -1) {
                return <TouchableOpacity style={styles.containerItem} onPress={() => this.props.handleViewDetail(item)} key={index}>
                    <Swiper style={styles.slideItem} showsButtons={false} dot={<View style={{
                        backgroundColor: "#ccc",
                        width: 8,
                        height: 8,
                        borderRadius: 4,
                        marginLeft: 3,
                        marginRight: 3,
                        marginTop: 3,
                        marginBottom: 3
                    }} />} activeDot={<View style={{
                        backgroundColor: "#fff",
                        width: 8,
                        height: 8,
                        borderRadius: 4,
                        marginLeft: 3,
                        marginRight: 3,
                        marginTop: 3,
                        marginBottom: 3
                    }} />}>
                        <View style={styles.imageSlide}>
                            <View style={{ position: 'absolute', right: 10, top: 10, width: 20, height: 20, zIndex: 10 }}>
                                <Icon name='md-heart' style={{ fontSize: 22, color: 'rgb(255, 90, 95)' }} />
                            </View>

                            <View style={styles.bgBlur} />
                            <Image style={styles.img} source={item.images[0]} />
                        </View>
                        <View style={styles.imageSlide}>
                            <View style={{ position: 'absolute', right: 10, top: 10, width: 20, height: 20, zIndex: 10 }}>
                                <Icon name='md-heart' style={{ fontSize: 22, color: 'rgb(255, 90, 95)' }} />
                            </View>
                            <View style={styles.bgBlur} />
                            <Image style={styles.img} source={item.images[1]} />
                        </View>
                        <View style={styles.imageSlide}>
                            <View style={{ position: 'absolute', right: 10, top: 10, width: 20, height: 20, zIndex: 10 }}>
                                <Icon name='md-heart' style={{ fontSize: 22, color: 'rgb(255, 90, 95)' }} />
                            </View>
                            <View style={styles.bgBlur} />
                            <Image style={styles.img} source={item.images[2]} />
                        </View>
                    </Swiper>
                    <View style={styles.bottomItem}>
                        <View style={styles.textItem}>
                            <Text style={styles.desText} uppercase>{item.status}</Text>
                            <Text style={styles.nameItem}>{item.name}</Text>
                            <Text style={styles.priceItem}>{item.price}</Text>
                            <View style={styles.rating}>
                                {this._genStar(item.star)}
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>;
            }

        });
        var NoResult = list.every(item => {
            return item === undefined;
        }) ? 'No Result' : '';
        return <ScrollView style={styles.container}>
            <View style={styles.viewSearch}>
                <Item style={styles.containerSearchInput}>
                    <Icon onPress={() => {
                        this.props.navigation.goBack('HomePageContent');
                    }} name="ios-arrow-round-back" style={{ marginLeft: 10, color: "#999" }} />
                    <Input placeholder={dict[type]} placeholderTextColor="#999" style={styles.inputSearch} onChangeText={this.handleChange} />
                    <TouchableOpacity onPress={this.onSearch}>
                        <Icon name="ios-search" style={{ marginRight: 10, color: "#999" }} />
                    </TouchableOpacity>
                </Item>
            </View>
            <View>
                <Button bordered
                    style={styles.buttonDate}
                    onPress={this._showDateTimePicker}
                >
                    <Text uppercase={false}
                        style={{ fontSize: 12, alignItems: 'center', color: "#484848", fontFamily: Font.RobotoLight }}>
                        Tất cả các ngày
                    </Text>
                </Button>
                <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this._handleDatePicked}
                    onCancel={this._hideDateTimePicker}
                    datePickerModeAndroid={"spinner"}
                />
            </View>
            {list}
            <Text style={styles.titleCard}>{NoResult}</Text>
        </ScrollView>;
    }
}
const mapStateToProps = state => {
    return { listTravel: state.listTravel }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFood);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingRight: 15,
        paddingLeft: 15,
        backgroundColor: "#fff",
        // position : 'absolute',
        // top: 0,
        // left: 0,
        // right : 0,
        // bottom: 0,
        // zIndex : 2
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
        position: 'relative'
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
        color: 'rgb(8, 173, 109)',
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
    },
    titleCard:{
        marginTop:10,
        textAlign:"center",
        color : '#484848', 
        fontSize: 20,
        fontFamily: Font.Roboto,
        lineHeight: 24,
        letterSpacing : 2,
    
      },


});
