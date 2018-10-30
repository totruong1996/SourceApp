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
  TextInput
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
  Body
} from "native-base";
import CategoryHome from './CategoryHome';
import  CategoryOthers from './CategoryOthers';
import CategoryFood from './CategoryFood';
import DetailCategory from '../DetailCategory/DetailCategory';
import DetailHomeCategory from '../DetailCategory/DetailHomeCategory';
import DetailFoodCategory from '../DetailCategory/DetailFoodCategory';
import DetailTravelCategory from '../DetailCategory/DetailTravelCategory';


class CategoryContainer extends React.Component {

  constructor(props) {
    super(props);
  }
  handleViewDetail=(item,nava)=>{
    this.props.navigation.navigate(nava, {typeCategory : 'homeCategory', 'item': item})
  }
  render() {
    const { params } = this.props.navigation.state;
    console.log("typeCategor" ,params);
    if(typeof params !== 'undefined' && typeof params.typeCategory !== 'undefined' && params.typeCategory !== '' &&
        params.typeCategory === 'travelCategory'){
      return <CategoryOthers
                navigation={this.props.navigation}
                handleViewDetail={(item)=>this.handleViewDetail(item, 'DetailTravelCategory')}
      /> ;
    }else if(typeof params !== 'undefined' && typeof params.typeCategory !== 'undefined' && params.typeCategory !== '' &&
    params.typeCategory === 'foodCategory'){
        return <CategoryFood
                navigation={this.props.navigation}
                handleViewDetail={(item)=>this.handleViewDetail(item,'DetailFoodCategory')}
           
      /> ;
    }else if(typeof params !== 'undefined' && typeof params.typeCategory !== 'undefined' && params.typeCategory !== '' &&
    params.typeCategory === 'homeCategory'){
        return <CategoryHome 
                navigation={this.props.navigation}
                handleViewDetail={(item)=>this.handleViewDetail(item,'DetailHomeCategory' )}
                type='all'
                />
        }
    else if(typeof params !== 'undefined' && typeof params.typeCategory !== 'undefined' && params.typeCategory !== '' &&
      params.typeCategory === 'HCMHome'){
      return <CategoryHome 
      navigation={this.props.navigation}
      handleViewDetail={(item)=>this.handleViewDetail(item,'DetailHomeCategory' )}
      type='hcm'
      />
    }
    else if(typeof params !== 'undefined' && typeof params.typeCategory !== 'undefined' && params.typeCategory !== '' &&
    params.typeCategory === 'DLHome'){
    return <CategoryHome 
    navigation={this.props.navigation}
    handleViewDetail={(item)=>this.handleViewDetail(item,'DetailHomeCategory' )}
    type='dl'
    />
      }
      else if(typeof params !== 'undefined' && typeof params.typeCategory !== 'undefined' && params.typeCategory !== '' &&
      params.typeCategory === 'NTHome'){
      return <CategoryHome 
      navigation={this.props.navigation}
      handleViewDetail={(item)=>this.handleViewDetail(item,'DetailHomeCategory' )}
      type='nt'
      />
    }
    else if(typeof params !== 'undefined' && typeof params.typeCategory !== 'undefined' && params.typeCategory !== '' &&
    params.typeCategory === 'HNHome'){
    return <CategoryHome 
    navigation={this.props.navigation}
    handleViewDetail={(item)=>this.handleViewDetail(item,'DetailHomeCategory' )}
    type='hn'
    />
  }
  else {
  return <CategoryHome 
  navigation={this.props.navigation}
  handleViewDetail={(item)=>this.handleViewDetail(item,'DetailHomeCategory' )}
  type='hl'
  />
}
  }
}
const Category = StackNavigator(
  {
    CategoryContainer: { screen: CategoryContainer },
    DetailCategory: { screen: DetailCategory },
    DetailHomeCategory : {screen: DetailHomeCategory},
    DetailFoodCategory :{screen: DetailFoodCategory},
    DetailTravelCategory:{screen: DetailTravelCategory},
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

export default Category;

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
    // zIndex : 0
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
    fontSize: 14
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
  containerCategory: {
    marginTop: 30,
    marginBottom: 30
  },
  cardContainer: {
    marginRight: 10,
    width: 150,
    borderRadius: 5
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
    justifyContent: "center",
    alignItems: "center"
  },
  titleCard: {
    color: "#777",
    fontSize: 14,
    fontFamily: Font.Roboto,
    fontWeight: "bold"
  }
});
