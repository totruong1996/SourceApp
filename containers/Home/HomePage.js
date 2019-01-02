import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import ActionCreators from '../../redux/actions'
import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import { StackNavigator } from "react-navigation";
import { Font } from "../utils/Font";
import {
    Item,
    Input,
    Icon,
    Button,
    Card,
    CardItem,
    Text,
    Body
} from "native-base";
import Category from '../Category/Category';
import DetailHomeCategory from '../DetailCategory/DetailHomeCategory';
import DetailFoodCategory from '../DetailCategory/DetailFoodCategory';
import DetailTravelCategory from '../DetailCategory/DetailTravelCategory';

class HomeContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        }
    }
    render() {
        return (
            <ScrollView
                horizontal
                style={styles.containerCategory}
                showsHorizontalScrollIndicator={false}
            >
                <Card style={styles.cardContainer}>
                    <CardItem cardBody>
                        <Image
                            source={require("../../images/home-category.jpg")}
                            style={styles.imageCard}
                        />
                    </CardItem>
                    <CardItem
                        style={styles.containerButtonCard}
                    >
                        <Body>
                            <Button transparent style={{ justifyContent: 'center', alignItems: 'center' }}
                                onPress={this.props.showCategoryHome}
                            >
                                <Text style={styles.titleCard} uppercase={false}>Nhà ở</Text>
                            </Button>
                        </Body>
                    </CardItem>
                </Card>
            </ScrollView>
        );
    }
}

class HomePageContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = { showContent: 'homeContent', isDateTimePickerVisible: false, keyword: ''}
    }

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = date => {
        this._hideDateTimePicker();
    };
    componentWillMount() {

    }
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
        if(keyword.trim()===''){ 
            this.props.navigation.navigate('Category', { typeCategory: 'homeCategory' });
        } else if(keyword.trim().toLocaleLowerCase() === 'ho chi minh' || keyword.trim().toLocaleLowerCase().indexOf("hồ chí minh")!==-1){
            this.props.navigation.navigate('Category', { typeCategory: 'HCMHome' });
        } else if(keyword.trim().toLocaleLowerCase() === 'ha noi' || keyword.trim().toLocaleLowerCase().indexOf("hà nội")!==-1){
            this.props.navigation.navigate('Category', { typeCategory: 'HNHome' });
        } else if(keyword.trim().toLocaleLowerCase() === 'nha trang'){
            this.props.navigation.navigate('Category', { typeCategory: 'NTHome' });
        } else if(keyword.trim().toLocaleLowerCase() === 'ha long' || keyword.trim().toLocaleLowerCase().indexOf("hạ long")!==-1){
            this.props.navigation.navigate('Category', { typeCategory: 'HLHome' });
        } else if(keyword.trim().toLocaleLowerCase() === 'da lat' || keyword.trim().toLocaleLowerCase().indexOf("đà lạt")!==-1){
            this.props.navigation.navigate('Category', { typeCategory: 'DLHome' });
        } else{
            this.props.navigation.navigate('Category', { typeCategory: 'no' });
        }
       
    }
    render() {
        const { showContent } = this.state;
        const { listFood, listHome, listTravel } = this.props;
        var home = listHome.listHome.map((item, index) => {
            if (index < 5) {
                return <Card transparent style={styles.cardContainerOtherCategory} key={index}>
                    <CardItem cardBody style={{ position: 'relative' }}>
                        <View style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            left: 0,
                            bottom: 0,
                            zIndex: 5,
                            backgroundColor: "#000",
                            opacity: 0.4
                        }} />


                        <View style={{ position: 'absolute', right: 10, top: 10, width: 20, height: 20, zIndex: 10 }}>
                            <Icon name='md-heart-outline' style={{ fontSize: 22, color: '#fff', }} />
                        </View>
                        <Image
                            source={item.images[0]}
                            style={styles.imageCardOtherCategory}
                        />
                    </CardItem>
                    <CardItem
                        style={[styles.containerButtonCard]}
                    >
                        <Body>
                            <TouchableOpacity transparent style={{ paddingTop: 5, paddingBottom: 5 }}
                                onPress={() => {
                                    this.props.navigation.navigate('DetailHomeCategory', { typeCategory: 'homeCategory', 'item': item })
                                }}
                            >
                                <Text style={styles.locationItemCard} uppercase>{item.quantity}</Text>
                                <Text style={styles.textOtherCategory} uppercase={false}>{item.name}</Text>
                                <Text style={styles.priceCardItem} uppercase={false}>{item.price}</Text>
                                <View style={styles.rating}>
                                    {this._genStar(item.star)}
                                </View>
                            </TouchableOpacity>
                        </Body>
                    </CardItem>
                </Card>
            }

        })
        food = listFood.listFood.map((item, index) => {
            if (index < 5) {
                return <Card transparent style={styles.cardContainerOtherCategory} key={index}>
                    <CardItem cardBody>
                        <View style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            left: 0,
                            bottom: 0,
                            zIndex: 5,
                            backgroundColor: "#000",
                            opacity: 0.4
                        }} />


                        <View style={{ position: 'absolute', right: 10, top: 10, width: 20, height: 20, zIndex: 10 }}>
                            <Icon name='ios-heart' style={{ fontSize: 22, color: 'rgb(255, 90, 95)' }} />
                        </View>
                        <Image
                            source={item.images[0]}
                            style={styles.imageCardOtherCategory}
                        />
                    </CardItem>
                    <CardItem
                        style={[styles.containerButtonCard]}
                    >
                        <Body>
                            <TouchableOpacity transparent style={{ paddingTop: 5, paddingBottom: 5 }}
                                onPress={() => {
                                    this.props.navigation.navigate('DetailFoodCategory', { typeCategory: 'homeCategory', 'item': item })
                                }}
                            >
                                <Text style={styles.locationItemCard} uppercase>{item.status}</Text>
                                <Text style={styles.textOtherCategory} uppercase={false}>{item.name} </Text>
                                <Text style={styles.priceCardItem} uppercase={false}>{item.price}</Text>
                                <View style={styles.rating}>
                                    {this._genStar(item.star)}
                                </View>
                            </TouchableOpacity>
                        </Body>
                    </CardItem>
                </Card>
            }
        })
        travel = listTravel.listTravel.map((item, index) => {
            if (index < 5) {
                return <Card transparent style={styles.cardContainerOtherCategory} key={index}>
                    <CardItem cardBody>
                        <View style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            left: 0,
                            bottom: 0,
                            zIndex: 5,
                            backgroundColor: "#000",
                            opacity: 0.4
                        }} />
                        <View style={{ position: 'absolute', right: 10, top: 10, width: 20, height: 20, zIndex: 10 }}>
                            <Icon name='ios-heart' style={{ fontSize: 22, color: 'rgb(255, 90, 95)' }} />
                        </View>
                        <Image
                            source={item.images[0]}
                            style={styles.imageCardOtherCategory}
                        />
                    </CardItem>
                    <CardItem
                        style={[styles.containerButtonCard]}
                    >
                        <Body>
                            <TouchableOpacity transparent style={{ paddingTop: 5, paddingBottom: 5 }}
                                onPress={() => {
                                    this.props.navigation.navigate('DetailTravelCategory', { typeCategory: 'homeCategory', 'item': item })
                                }}
                            >
                                <Text style={styles.locationItemCard} uppercase>{item.status}</Text>
                                <Text style={styles.textOtherCategory} uppercase={false}>{item.name} </Text>
                                <Text style={styles.priceCardItem} uppercase={false}>{item.price}</Text>
                                <View style={styles.rating}>
                                    {this._genStar(item.star)}
                                </View>
                            </TouchableOpacity>
                        </Body>
                    </CardItem>
                </Card>

            }
        })
        return (
            <ScrollView style={styles.container}>
                <View style={styles.viewSearch}>
                    <Item
                        style={styles.containerSearchInput}
                    >

                        <Input
                            placeholder="Hồ Chí Minh..."
                            placeholderTextColor="#999"
                            style={styles.inputSearch}
                            name='keyword'
                            onChangeText={this.handleChange}
                        />
                        <TouchableOpacity
                            onPress={this.onSearch}
                        >
                            <Icon name="ios-search" style={{ marginRight: 10, color: "#999" }} />
                        </TouchableOpacity>

                    </Item>
                </View>

                <View>
                    <Button
                        bordered
                        style={styles.buttonDate}
                        onPress={this._showDateTimePicker}
                    >
                        <Text
                            uppercase={false}
                            style={{
                                fontSize: 12,
                                color: "#777",
                                fontFamily: Font.RobotoLight,
                            }}
                        >
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

                <View style={styles.headingCategory}>
                    <Text style={styles.headingText}>Danh mục</Text>
                </View>
                <ScrollView
                    horizontal
                    style={styles.containerCategory}
                    showsHorizontalScrollIndicator={false}
                >
                    <Card style={styles.cardContainer}>
                        <CardItem cardBody>
                            <Image
                                source={require("../../images/home-category.jpg")}
                                style={styles.imageCard}
                            />
                        </CardItem>
                        <CardItem
                            style={styles.containerButtonCard}
                        >
                            <Body>
                                <Button transparent style={{ justifyContent: 'center', alignItems: 'center' }}
                                    onPress={() => {
                                        this.props.navigation.navigate('Category', { typeCategory: 'homeCategory' })
                                    }}
                                >
                                    <Text style={styles.titleCard} uppercase={false}>Nhà ở</Text>
                                </Button>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={styles.cardContainer}>
                        <CardItem cardBody>
                            <Image
                                source={require("../../images/experience-category.jpg")}
                                style={styles.imageCard}
                            />
                        </CardItem>
                        <CardItem
                            style={styles.containerButtonCard}
                        >
                            <Body>
                                <Button transparent style={{ justifyContent: 'center', alignItems: 'center' }}
                                    onPress={() => {
                                        this.props.navigation.navigate('Category', { typeCategory: 'travelCategory' })
                                    }}
                                >
                                    <Text style={styles.titleCard} uppercase={false}>Trải nghiệm</Text>
                                </Button>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={styles.cardContainer}>
                        <CardItem cardBody>
                            <Image
                                source={require("../../images/restaurant-category.jpg")}
                                style={styles.imageCard}
                            />
                        </CardItem>
                        <CardItem
                            style={styles.containerButtonCard}
                        >
                            <Body>
                                <Button transparent style={{ justifyContent: 'center', alignItems: 'center' }}
                                    onPress={() => {
                                        this.props.navigation.navigate('Category', { typeCategory: 'foodCategory' })
                                    }}
                                >
                                    <Text style={styles.titleCard} uppercase={false}>Ăn uống</Text>
                                </Button>
                            </Body>
                        </CardItem>
                    </Card>
                </ScrollView>

                <View style={styles.headingCategory}>
                    <Text style={styles.headingText}>Địa điểm nổi bật</Text>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}
                        onPress={() => {
                            this.props.navigation.navigate('Category', { typeCategory: 'homeCategory' })
                        }}>
                        <Text style={{ fontSize: 14, color: '#484848', fontFamily: Font.RobotoLight }}>Xem tất cả</Text>
                        <Icon name='ios-arrow-forward-outline' style={{ fontSize: 14, color: '#484848', marginLeft: 5 }} />
                    </TouchableOpacity>
                </View>
                <ScrollView
                    horizontal
                    style={styles.containerCategory}
                    showsHorizontalScrollIndicator={false}
                >
                    <Card transparent style={styles.cardContainerOtherCategory}>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate('Category', { typeCategory: 'HCMHome' })
                            }}
                        >
                            <Image
                                source={require("../../images/hochiminh.jpg")}
                                style={styles.imageCardOtherCategory}
                            />
                        </TouchableOpacity>
                        <CardItem
                            style={[styles.containerButtonCard]}
                        >
                            <Body style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <Button transparent style={{
                                    paddingTop: 5,
                                    flexDirection: 'row',
                                    paddingBottom: 5,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                                    onPress={() => {
                                        this.props.navigation.navigate('Category', { typeCategory: 'HCMHome' })
                                    }}
                                >
                                    <Text style={styles.textOtherCategory} uppercase={false}>Hồ Chí Minh</Text>

                                </Button>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card transparent style={styles.cardContainerOtherCategory}>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate('Category', { typeCategory: 'DLHome' })
                            }}
                        >
                            <Image
                                source={require("../../images/dalat.jpg")}
                                style={styles.imageCardOtherCategory}
                            />
                        </TouchableOpacity>
                        <CardItem
                            style={[styles.containerButtonCard]}
                        >
                            <Body style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <Button transparent style={{
                                    paddingTop: 5,
                                    flexDirection: 'row',
                                    paddingBottom: 5,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                                    onPress={() => {
                                        this.props.navigation.navigate('Category', { typeCategory: 'DLHome' })
                                    }}
                                >
                                    <Text style={styles.textOtherCategory} uppercase={false}>Đà Lạt</Text>
                                </Button>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card transparent style={styles.cardContainerOtherCategory}>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate('Category', { typeCategory: 'HLHome' })
                            }}
                        >
                            <Image
                                source={require("../../images/halongbay.jpg")}
                                style={styles.imageCardOtherCategory}
                            />
                        </TouchableOpacity>
                        <CardItem
                            style={[styles.containerButtonCard]}
                        >
                            <Body style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <Button transparent style={{
                                    paddingTop: 5,
                                    flexDirection: 'row',
                                    paddingBottom: 5,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                                    onPress={() => {
                                        this.props.navigation.navigate('Category', { typeCategory: 'HLHome' })
                                    }}
                                >
                                    <Text style={styles.textOtherCategory} uppercase={false}>Hạ Long</Text>

                                </Button>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card transparent style={styles.cardContainerOtherCategory}>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate('Category', { typeCategory: 'NTHome' })
                            }}
                        >
                            <Image
                                source={require("../../images/nhatrang.jpg")}
                                style={styles.imageCardOtherCategory}
                            />
                        </TouchableOpacity>
                        <CardItem
                            style={[styles.containerButtonCard]}
                        >
                            <Body style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <Button transparent style={{
                                    paddingTop: 5,
                                    flexDirection: 'row',
                                    paddingBottom: 5,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                                    onPress={() => {
                                        this.props.navigation.navigate('Category', { typeCategory: 'NTHome' })
                                    }}
                                >
                                    <Text style={styles.textOtherCategory} uppercase={false}>Nha Trang</Text>
                                </Button>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card transparent style={styles.cardContainerOtherCategory}>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate('Category', { typeCategory: 'HNHome' })
                            }}
                        >
                            <Image
                                source={require("../../images/teaser.jpeg.jpg")}
                                style={styles.imageCardOtherCategory}
                            />
                        </TouchableOpacity>
                        <CardItem
                            style={[styles.containerButtonCard]}
                        >
                            <Body style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <Button transparent style={{
                                    paddingTop: 5,
                                    flexDirection: 'row',
                                    paddingBottom: 5,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                                    onPress={() => {
                                        this.props.navigation.navigate('Category', { typeCategory: 'HNHome' })
                                    }}
                                >
                                    <Text style={styles.textOtherCategory} uppercase={false}>Hà Nội</Text>
                                </Button>
                            </Body>
                        </CardItem>
                    </Card>
                </ScrollView>
                <View style={styles.headingCategory}>
                    <Text style={styles.headingText}>Nhà ở</Text>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}
                        onPress={() => {
                            this.props.navigation.navigate('Category', { typeCategory: 'homeCategory' })
                        }}>
                        <Text style={{ fontSize: 14, color: '#484848', fontFamily: Font.RobotoLight }}>Xem tất cả</Text>
                        <Icon name='ios-arrow-forward-outline' style={{ fontSize: 14, color: '#484848', marginLeft: 5 }} />

                    </TouchableOpacity>
                </View>
                <ScrollView
                    horizontal
                    style={styles.containerCategory}
                    showsHorizontalScrollIndicator={false}
                >
                    {home}
                </ScrollView>
                <View style={styles.headingCategory}>
                    <Text style={styles.headingText}>Khám phá</Text>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}
                        onPress={() => {
                            this.props.navigation.navigate('Category', { typeCategory: 'travelCategory' })
                        }}>
                        <Text style={{ fontSize: 14, color: '#484848', fontFamily: Font.RobotoLight }}>Xem tất cả</Text>
                        <Icon name='ios-arrow-forward-outline' style={{ fontSize: 14, color: '#484848', marginLeft: 5 }} />
                    </TouchableOpacity>
                </View>
                <ScrollView
                    horizontal
                    style={styles.containerCategory}
                    showsHorizontalScrollIndicator={false}
                >
                    {travel}
                </ScrollView>
                <View style={styles.headingCategory}>
                    <Text style={styles.headingText}>Ẩm thực</Text>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}
                        onPress={() => {
                            this.props.navigation.navigate('Category', { typeCategory: 'foodCategory' })
                        }}>
                        <Text style={{ fontSize: 14, color: '#484848', fontFamily: Font.RobotoLight }}>Xem tất cả</Text>
                        <Icon name='ios-arrow-forward-outline' style={{ fontSize: 14, color: '#484848', marginLeft: 5 }} />
                    </TouchableOpacity>
                </View>
                <ScrollView
                    horizontal
                    style={styles.containerCategory}
                    showsHorizontalScrollIndicator={false}
                >
                    {food}
                </ScrollView>


            </ScrollView>
        );
    }
}
const mapStateToProps = state => {
    return {
        loggedInStatus: state.loggedInStatus,
        listFood: state.listFood,
        listHome: state.listHome,
        listTravel: state.listTravel
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(ActionCreators, dispatch);
}
const HomePage = StackNavigator(
    {
        HomePageContent: { screen: connect(mapStateToProps, mapDispatchToProps)(HomePageContent) },
        Category: { screen: Category },
        DetailHomeCategory: { screen: DetailHomeCategory },
        DetailFoodCategory: { screen: DetailFoodCategory },
        DetailTravelCategory: { screen: DetailTravelCategory },
    },
    {
        headerMode: 'none',
        navigationOptions: {
            gesturesEnabled: true,
            headerTitleStyle: {
                fontSize: 14,
                fontWeight: "normal",
                fontFamily: Font.Montserrat
            }
        },

    }
);

export default HomePage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingRight: 15,
        paddingLeft: 15,
        backgroundColor: "#fff",
        zIndex: 10,
    },
    viewSearch: {
        marginTop: 20,
        marginBottom: 20
    },
    containerSearchInput: {
        borderBottomWidth: 0,
        elevation: 2,
        borderRadius: 5,
        height: 40,
    },
    inputSearch: {
        fontFamily: Font.RobotoLight,
        fontSize: 14,
        height: 40,
        alignItems: 'center',
        lineHeight: 14,
    },
    buttonDate: {
        borderColor: "#ccc",
        paddingLeft: 0,
        paddingRight: 0,
        borderRadius: 5,
        paddingTop: 0,
        paddingBottom: 0,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerCategory: {},
    cardContainer: {
        marginRight: 10,
        width: 150,
        borderRadius: 5,
    },
    imageCard: {
        height: 100,
        width: null,
        flex: 1
    },
    containerButtonCard: {
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingTop: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleCard: {
        color: '#484848',
        fontSize: 16,
        fontFamily: Font.Roboto,
        fontWeight: 'bold'
    },
    headingCategory: {
        marginTop: 20,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headingText: {
        color: '#000',
        fontFamily: Font.Roboto,
        fontSize: 20,
        fontWeight: 'bold'
    },
    locationItemCard: {
        fontWeight: 'bold',
        fontFamily: Font.Roboto,
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0.4,
        color: '#484848',
        marginBottom: 5,
        marginTop: 5,
        color: 'rgb(8, 173, 109)',
    },
    priceCardItem: {
        fontFamily: Font.RobotoLight,
        fontSize: 14,
        color: '#484848',
        lineHeight: 18,
        marginBottom: 5,
        marginTop: 5,
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardContainerOtherCategory: {
        marginRight: 10,
        width: 200,
        borderRadius: 5,
    },
    textOtherCategory: {
        color: '#484848',
        fontFamily: Font.Roboto,
        fontSize: 16,
        fontWeight: 'bold'
    },
    imageCardOtherCategory: {
        height: 150,
        width: null,
        flex: 1

    },

});
