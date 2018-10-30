import React, { Component, PropTypes } from "react";
import {
  Platform,
  StyleSheet,
  // Text,
  View,
  Image,
  // Button,
  Animated,
  Easing,
  TouchableOpacity,
  ListView,
  ScrollView,
  TextInput,
  Dimensions
} from "react-native";

// import { Card, List, ListItem,  } from "react-native-elements";
import Swiper from "react-native-swiper";
import { StackNavigator, TabNavigator } from "react-navigation";
import { Font } from "../utils/Font";
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
  Body,
  Footer, FooterTab,
} from "native-base";
import MapView from 'react-native-maps';
const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

class DetailCategory extends React.Component {
  constructor(props) {
    super(props);
  }
  _genStar = (star)=>{
    list = []
    for(let i = 0;i<star;i++){
       list.push(<Icon name='ios-star' style={{ fontSize: 14, color: '#008489', }}  key={i}/>);
    }
    return list;
}
  render() {
    const { item } = this.props.navigation.state.params;
    return <ScrollView style={styles.container} >
        <View style={styles.viewSearch}>
          <Item  style={styles.containerSearchInput}>
            <Icon onPress={()=>{
              this.props.navigation.goBack();
            }} name="ios-arrow-round-back" style={{ marginLeft: 10, color: "#999", fontSize: 36 }} />
            <Input placeholder="Hồ Chí Minh..." placeholderTextColor="#999" style={styles.inputSearch} />
          </Item>
        </View>
        <View style={styles.containerItem} >
          <Swiper style={styles.slideItem} showsButtons={false} dot={<View style={{ backgroundColor: "#ccc", width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />} activeDot={<View style={{ backgroundColor: "#fff", width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}>
            <View style={styles.imageSlide}>
              <View style={styles.bgBlur} />
              <Image style={styles.img} source={item.images[0]} />
            </View>
            <View style={styles.imageSlide}>
              <View style={styles.bgBlur} />
              <Image style={styles.img} source={item.images[1]} />
            </View>
            <View style={styles.imageSlide}>
              <View style={styles.bgBlur} />
              <Image style={styles.img} source={item.images[2]} />
            </View>
          </Swiper>
          <View style={styles.bottomItem}>
            <View style={styles.textItem}>
                <Text style={styles.desText} uppercase>{item.quantity}</Text>
                <View style={styles.rating}>
                   {this._genStar(item.star)}
                </View>
                <Text style={styles.nameItem}>{item.name}</Text>
                <Text style={{fontSize : 12, fontWeight : 'bold',fontFamily :Font.RobotoLight , marginTop: 5}} uppercase>{item.address}
                 
                </Text>
                <Text style={styles.priceItem}>{item.price}</Text>
                <View style={{marginTop: 5, flexDirection: 'row', alignItems: 'center', marginBottom: 5}}>
                    <Icon name='ios-calendar-outline' style={{fontSize: 14, color: '#484848',marginRight: 10, marginTop: 5 , fontWeight: 'bold' }} />
                    <Text style={[styles.priceItem,{fontWeight: 'bold'}]}>{item.date}</Text>
                </View>
            </View>
            <Button bordered style={styles.buttonOrder}>
              <Text uppercase={false} style={{ fontWeight: 'bold', fontSize: 14, alignItems : 'center', color: "#fff", fontFamily: Font.RobotoLight }}>
                Đặt chỗ
              </Text>
            </Button>
          </View>

          <View style={styles.bottomItem}>
            <View style={styles.textItem}>
                <Text style={{fontSize : 14,fontFamily :Font.RobotoLight, fontWeight: 'bold' }}>
                  Danh mục : 
                  <Text style={{fontSize : 14,fontFamily :Font.RobotoLight, fontWeight: 'normal', color: '#484848' }} >
                     {item.category}
                  </Text>  
                </Text>
                <Text style={{fontSize : 14,fontFamily :Font.RobotoLight, fontWeight: 'normal',color: '#008489', marginTop: 5 }}>Người cung cấp : 
                  <Text style={{fontSize : 14,fontFamily :Font.RobotoLight, color: '#008489', }}>
                   {item.poster}
                  </Text> 
                </Text>
                <View style={{flexDirection: 'row', marginTop: 5, marginBottom: 5, alignItems :'center' }}> 
                  <Icon name='ios-time-outline' style={{fontSize: 14, color: '#484848', marginRight : 10 }} />
                  <Text style={{fontSize : 14,fontFamily :Font.RobotoLight, color: '#484848', }}>
                   {item.opentime} 
                  </Text> 
                </View>
                <View style={{flexDirection: 'row', marginTop: 5, marginBottom: 5, alignItems :'center' }}> 
                  <Icon name='ios-basket-outline' style={{fontSize: 14, color: '#484848', marginRight : 10 }} />
                  <Text style={{fontSize : 14,fontFamily :Font.RobotoLight, color: '#484848', }}>
                   {item.service}
                  </Text> 
                </View>
                <View style={{flexDirection: 'row', marginTop: 5, marginBottom: 5, alignItems :'center' }}> 
                  <Icon name='ios-chatbubbles-outline' style={{fontSize: 14, color: '#484848', marginRight : 10 }} />
                  <Text style={{fontSize : 14,fontFamily :Font.RobotoLight, color: '#484848', }}>
                   Email: {item.email}
                  </Text> 
                </View>
                <View style={{flexDirection: 'row', marginTop: 5, marginBottom: 5, alignItems :'center' }}> 
                  <Icon name='ios-call-outline' style={{fontSize: 14, color: '#484848', marginRight : 10 }} />
                  <Text style={{fontSize : 14,fontFamily :Font.RobotoLight, color: '#484848', }}>
                   Số điện thoại : {item.phone}
                  </Text> 
                </View>         
            </View>
          </View>

          <View style={styles.bottomItem}>
            <Text style={{fontSize : 12, fontWeight : 'bold',fontFamily :Font.RobotoLight , marginTop: 5}} uppercase>Thông tin chi tiết
              <Text style={{fontFamily: Font.RobotoLight,fontSize: 14 , lineHeight: 24, color :'#999', marginLeft: 10, fontWeight: 'normal', color: '#484848'}}> 
              : {item.detail}
              
              </Text>
            </Text>
          </View>
          
          <View style={styles.bottomItem}>
            <View style={styles.textItem}>
                <Text style={{fontSize : 14,fontFamily :Font.RobotoLight, fontWeight: 'bold' }}>
                 Chia sẻ :
                </Text>
                <View style={{flexDirection: 'row', justifyContent : 'space-around', marginTop: 10, marginBottom : 5}}>
                  <Icon name='logo-twitter' style={{fontSize: 16, color: '#484848', }} />
                  <Icon name='logo-instagram' style={{fontSize: 16, color: '#484848', }} />
                  <Icon name='md-mail' style={{fontSize: 16, color: '#484848', }} />
                  <Icon name='logo-facebook' style={{fontSize: 16, color: '#484848', }} />
                </View>
            </View>
          </View>

          <View style={styles.bottomItem}>
            <View style={styles.textItem}>
                <Text style={{fontSize : 14,fontFamily :Font.RobotoLight, fontWeight: 'bold' }}>
                Đánh giá :
                </Text>
                  <View style={styles.itemReview}>
                    <View style={{flexDirection : 'row', alignItems: 'center', marginBottom: 5, marginTop: 5}}>
                      <Icon name='ios-pricetags-outline' style={{fontSize: 16, color: '#484848', marginRight: 10, }} />
                      <Text style={styles.nameAuthor}>Tuấn Đặng</Text>
                    </View>
                    <View style={{flexDirection : 'row', alignItems: 'center', marginBottom: 5, marginTop: 5}}>
                      <Icon name='ios-calendar-outline' style={{fontSize: 14, color: '#484848', marginRight: 10, }} />
                      <Text style={styles.dateTime}>22/10/2017</Text>
                    </View>
                    <View style={{flexDirection : 'row', alignItems: 'center', marginBottom: 5, marginTop: 5 ,flexWrap: 'wrap'}}>
                      <Text style={styles.review}>Nhà đầy đủ tiện nghi , không gian thoải mái . Giá cả hợp lý phù hợp với tất cả mọi người</Text>
                    </View>
                  </View>
                  <View style={styles.itemReview}>
                    <View style={{flexDirection : 'row', alignItems: 'center', marginBottom: 5, marginTop: 5}}>
                      <Icon name='ios-pricetags-outline' style={{fontSize: 16, color: '#484848', marginRight: 10, }} />
                      <Text style={styles.nameAuthor}>Tuấn Đặng</Text>
                    </View>
                    <View style={{flexDirection : 'row', alignItems: 'center', marginBottom: 5, marginTop: 5}}>
                      <Icon name='ios-calendar-outline' style={{fontSize: 14, color: '#484848', marginRight: 10, }} />
                      <Text style={styles.dateTime}>22/10/2017</Text>
                    </View>
                    <View style={{flexDirection : 'row', alignItems: 'center', marginBottom: 5, marginTop: 5 ,flexWrap: 'wrap'}}>
                      <Text style={styles.review}>Nhà đầy đủ tiện nghi , không gian thoải mái . Giá cả hợp lý phù hợp với tất cả mọi người</Text>
                    </View>
                  </View>
                  <View style={[styles.itemReview, {borderBottomWidth: 0}]}>
                    <View style={{flexDirection : 'row', alignItems: 'center', marginBottom: 5, marginTop: 5}}>
                      <Icon name='ios-pricetags-outline' style={{fontSize: 16, color: '#484848', marginRight: 10, }} />
                      <Text style={styles.nameAuthor}>Tuấn Đặng</Text>
                    </View>
                    <View style={{flexDirection : 'row', alignItems: 'center', marginBottom: 5, marginTop: 5}}>
                      <Icon name='ios-calendar-outline' style={{fontSize: 14, color: '#484848', marginRight: 10, }} />
                      <Text style={styles.dateTime}>22/10/2017</Text>
                    </View>
                    <View style={{flexDirection : 'row', alignItems: 'center', marginBottom: 5, marginTop: 5 ,flexWrap: 'wrap'}}>
                      <Text style={styles.review}>Nhà đầy đủ tiện nghi , không gian thoải mái . Giá cả hợp lý phù hợp với tất cả mọi người</Text>
                    </View>
                  </View>
            </View>
          </View>
          <View style={[styles.bottomItem, {borderBottomWidth: 0}]}>
            <View style={styles.textItem}>
                <Text style={{fontSize : 18,fontFamily :Font.RobotoLight, fontWeight: 'bold' }}>Địa điểm liên quan</Text>
                <ScrollView
                  horizontal
                  style={styles.containerCategory}
                  showsHorizontalScrollIndicator={false}
                  >
                    <Card transparent style={styles.cardContainer}>
                      <CardItem cardBody>
                        <Image
                          source={require("../../images/home-category.jpg")}
                          style={styles.imageCard}
                        />
                      </CardItem>
                      <CardItem
                        style={[styles.containerButtonCard]}
                      >
                        <Body>
                          <TouchableOpacity transparent style={{paddingTop: 5, paddingBottom: 5 }}
                            onPress={()=>{
                              this.props.navigation.navigate('Category', {typeCategory : 'homeCategory'})
                            }}
                          >
                            <Text style={styles.locationItemCard} uppercase>Hòa tấu saxophone - Hồ Chí Minh</Text>
                            <Text style={styles.titleCard} uppercase={false}>LiveShow Âm Nhạc</Text>
                            <Text style={styles.priceCardItem} uppercase={false}>300.000đ/Người</Text>
                            <View style={styles.rating}>
                              <Icon name='ios-star' style={{fontSize: 14, color: '#008489', }} />
                              <Icon name='ios-star' style={{fontSize: 14, color: '#008489', }} />
                              <Icon name='ios-star' style={{fontSize: 14, color: '#008489', }} />
                              <Icon name='ios-star' style={{fontSize: 14, color: '#008489', }} />
                              <Icon name='ios-star' style={{fontSize: 14, color: '#008489', }} />
                            </View>
                          </TouchableOpacity>
                        </Body>
                      </CardItem>
                    </Card>
                    <Card transparent style={styles.cardContainer}>
                      <CardItem cardBody>
                        <Image
                          source={require("../../images/home-category.jpg")}
                          style={styles.imageCard}
                        />
                      </CardItem>
                      <CardItem
                        style={[styles.containerButtonCard]}
                      >
                        <Body>
                          <TouchableOpacity transparent style={{paddingTop: 5, paddingBottom: 5 }}
                            onPress={()=>{
                              this.props.navigation.navigate('Category', {typeCategory : 'homeCategory'})
                            }}
                          >
                            <Text style={styles.locationItemCard} uppercase>Hòa tấu saxophone - Hồ Chí Minh</Text>
                            <Text style={styles.titleCard} uppercase={false}>LiveShow Âm Nhạc</Text>
                            <Text style={styles.priceCardItem} uppercase={false}>300.000đ/Người</Text>
                            <View style={styles.rating}>
                              <Icon name='ios-star' style={{fontSize: 14, color: '#008489', }} />
                              <Icon name='ios-star' style={{fontSize: 14, color: '#008489', }} />
                              <Icon name='ios-star' style={{fontSize: 14, color: '#008489', }} />
                              <Icon name='ios-star' style={{fontSize: 14, color: '#008489', }} />
                              <Icon name='ios-star' style={{fontSize: 14, color: '#008489', }} />
                            </View>
                          </TouchableOpacity>
                        </Body>
                      </CardItem>
                    </Card>
                    <Card transparent style={styles.cardContainer}>
                      <CardItem cardBody>
                        <Image
                          source={require("../../images/home-category.jpg")}
                          style={styles.imageCard}
                        />
                      </CardItem>
                      <CardItem
                        style={[styles.containerButtonCard]}
                      >
                        <Body>
                          <TouchableOpacity transparent style={{paddingTop: 5, paddingBottom: 5 }}
                            onPress={()=>{
                              this.props.navigation.navigate('Category', {typeCategory : 'homeCategory'})
                            }}
                          >
                            <Text style={styles.locationItemCard} uppercase>Hòa tấu saxophone - Hồ Chí Minh</Text>
                            <Text style={styles.titleCard} uppercase={false}>LiveShow Âm Nhạc</Text>
                            <Text style={styles.priceCardItem} uppercase={false}>300.000đ/Người</Text>
                            <View style={styles.rating}>
                              <Icon name='ios-star' style={{fontSize: 14, color: '#008489', }} />
                              <Icon name='ios-star' style={{fontSize: 14, color: '#008489', }} />
                              <Icon name='ios-star' style={{fontSize: 14, color: '#008489', }} />
                              <Icon name='ios-star' style={{fontSize: 14, color: '#008489', }} />
                              <Icon name='ios-star' style={{fontSize: 14, color: '#008489', }} />
                            </View>
                          </TouchableOpacity>
                        </Body>
                      </CardItem>
                    </Card>
                    <Card transparent style={styles.cardContainer}>
                      <CardItem cardBody>
                        <Image
                          source={require("../../images/home-category.jpg")}
                          style={styles.imageCard}
                        />
                      </CardItem>
                      <CardItem
                        style={[styles.containerButtonCard]}
                      >
                        <Body>
                          <TouchableOpacity transparent style={{paddingTop: 5, paddingBottom: 5 }}
                            onPress={()=>{
                              this.props.navigation.navigate('Category', {typeCategory : 'homeCategory'})
                            }}
                          >
                            <Text style={styles.locationItemCard} uppercase>Hòa tấu saxophone - Hồ Chí Minh</Text>
                            <Text style={styles.titleCard} uppercase={false}>LiveShow Âm Nhạc</Text>
                            <Text style={styles.priceCardItem} uppercase={false}>300.000đ/Người</Text>
                            <View style={styles.rating}>
                              <Icon name='ios-star' style={{fontSize: 14, color: '#008489', }} />
                              <Icon name='ios-star' style={{fontSize: 14, color: '#008489', }} />
                              <Icon name='ios-star' style={{fontSize: 14, color: '#008489', }} />
                              <Icon name='ios-star' style={{fontSize: 14, color: '#008489', }} />
                              <Icon name='ios-star' style={{fontSize: 14, color: '#008489', }} />
                            </View>
                          </TouchableOpacity>
                        </Body>
                      </CardItem>
                    </Card>
                    <Card transparent style={styles.cardContainer}>
                      <CardItem cardBody>
                        <Image
                          source={require("../../images/home-category.jpg")}
                          style={styles.imageCard}
                        />
                      </CardItem>
                      <CardItem
                        style={[styles.containerButtonCard]}
                      >
                        <Body>
                          <TouchableOpacity transparent style={{paddingTop: 5, paddingBottom: 5 }}
                            onPress={()=>{
                              this.props.navigation.navigate('Category', {typeCategory : 'homeCategory'})
                            }}
                          >
                            <Text style={styles.locationItemCard} uppercase>Hòa tấu saxophone - Hồ Chí Minh</Text>
                            <Text style={styles.titleCard} uppercase={false}>LiveShow Âm Nhạc</Text>
                            <Text style={styles.priceCardItem} uppercase={false}>300.000đ/Người</Text>
                            <View style={styles.rating}>
                              <Icon name='ios-star' style={{fontSize: 14, color: '#008489', }} />
                              <Icon name='ios-star' style={{fontSize: 14, color: '#008489', }} />
                              <Icon name='ios-star' style={{fontSize: 14, color: '#008489', }} />
                              <Icon name='ios-star' style={{fontSize: 14, color: '#008489', }} />
                              <Icon name='ios-star' style={{fontSize: 14, color: '#008489', }} />
                            </View>
                          </TouchableOpacity>
                        </Body>
                      </CardItem>
                    </Card>
                    
                  </ScrollView>
            </View>
        </View>


        </View>
      
      
      </ScrollView>;
  }
}

export default DetailCategory;

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
    marginTop: 5,
    marginBottom: 5
  },
  containerSearchInput: {
    borderBottomWidth: 0,
    // borderColor : '#484848',
    elevation: 0,
    borderRadius: 5,
    marginBottom: 3,
    height: 40
  },
  inputSearch: {
    fontFamily: Font.RobotoLight,
    fontSize: 14,
    height: 40,
    alignItems: 'center',
    textAlignVertical : 'center',
    borderBottomWidth:1,
    borderColor: '#DBDBDB'
  },
  
  containerItem:{
    marginBottom: 20,
    // marginTop: 20,
  },
  slideItem:{
      flex: 1,
      height: 400,
      alignItems: 'center',
      justifyContent: 'center',
    },
  imageSlide:{
    flex : 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  bgBlur:{
    position :'absolute',
    top: 0,
    right: 0,
    left : 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    zIndex: 1
  },
  img:{
    flex: 1,
    alignSelf: 'stretch',
    width: null,
  },
  bottomItem:{
   
    borderBottomWidth :1 ,
    paddingBottom: 20,
    paddingTop: 20,
    borderColor :'#DBDBDB',
  },
  buttonOrder:{
    paddingBottom : 15,
    paddingTop : 15,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor : '#ff5a5f',
    borderColor : '#ff5a5f',
    marginTop: 20,
  },
  desText:{
    color: 'rgb(160, 47, 24)',
    fontSize : 12,
    fontFamily: Font.Roboto,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  nameItem:{
    fontSize: 24,
    color: '#484848',
    fontWeight: 'bold',
    fontFamily: Font.Roboto,
  },
  priceItem:{
    fontSize: 14,
    color: '#484848',
    fontFamily: Font.RobotoLight,
    marginTop: 5
  },
  rating:{
      flexDirection : 'row',
      alignItems: 'center',
    },
  orderBottom:{
    position : 'absolute',
    height: 100,
    alignItems : 'center',
    elevation: 2,
    bottom : 0,
    right: 0 ,
    left: 0,
    flexDirection  :'row',
    backgroundColor :'#f02'
  },
  leftBottom:{
    flex: 1,
    paddingTop: 5,
    paddingBottom: 5,
  },
  rightBottom:{
    flex: 1,
    paddingTop: 5,
    paddingBottom: 5,
  },
  itemReview:{
    paddingTop: 10, 
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor :'#DBDBDB',
  },
  nameAuthor:{
    fontSize: 14, 
    fontWeight: 'bold',
    fontFamily: Font.Roboto,
    marginBottom: 5 ,
    marginTop: 5,
  },
  dateTime:{
    fontSize: 12, 
    fontFamily: Font.RobotoLight,
    marginBottom: 5 ,
    marginTop: 5,
  },
  review:{
    fontSize: 14, 
    fontFamily: Font.RobotoLight,
    marginBottom: 5 ,
    lineHeight: 24,
  },
  containerCategory:{
    marginTop: 20, 
  },
  cardContainer:{
    marginRight: 10,
    width : 150,
    borderRadius: 5,
  },
  imageCard:{
    height: 100,
    width: null,
    flex: 1 
  },
  containerButtonCard:{
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleCard:{
    color : '#484848', 
    fontSize: 18,
    fontFamily: Font.Roboto,
    fontWeight: 'bold',
    lineHeight: 24,
    letterSpacing : 2,

  },
  headingCategory:{
    marginTop: 20,
    marginBottom: 10
  },
  headingText:{
    color: '#000',
    fontFamily: Font.Roboto,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 5,
  },
  locationItemCard:{
    fontWeight: 'bold',
    fontFamily: Font.Roboto,
    fontSize: 12 ,
    lineHeight: 16 ,
    letterSpacing: 0.4 ,
    color: '#484848',
    marginBottom: 5,
    marginTop: 5,
  },
  priceCardItem:{
    fontFamily: Font.RobotoLight,
    fontSize: 14,
    color: '#484848',
    lineHeight: 18,
    marginBottom: 5,
    marginTop: 5,
  },
 

  
});
