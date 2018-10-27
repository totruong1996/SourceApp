import React, { Component, PropTypes } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Picker
} from "react-native";
import { Card, List, ListItem, Button } from "react-native-elements";
import Swiper from "react-native-swiper";
import { StackNavigator, TabNavigator } from "react-navigation";
import { Font } from "../utils/Font";
import ModalDropdown from "react-native-modal-dropdown";
class Payment extends React.Component {
  static navigationOptions = {
    title: "Tùy chọn phương thức thanh toán"
  };

  constructor(props) {
    super(props);
    this.state = {
      selected1: "key1",
      selected2: "key1",
      selected3: "key1",
      color: "red",
      mode: Picker.MODE_DIALOG
    };
  }
  onValueChange = (key, value) => {
    const newState = {};
    newState[key] = value;
    this.setState(newState);
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.partNotice}>
          <Text style={[styles.title,]}>Phương thức thanh toán của bạn</Text>
        </View>
        <View style={{marginTop: 10}}>
         <Text style={styles.textSubTitle}>ĐƠN VỊ TIỀN TỆ : </Text>
          <ModalDropdown
            options={["VNĐ", "USD", 'EURO', 'AU$', 'CA$', 'HK$']}
            defaultValue={'Chọn loại tiền tệ của bạn.....'}
            style={{
              flex: 1,
              backgroundColor: "#bdc3c7",
              paddingTop: 10,
              paddingBottom: 10,
              borderRadius: 5,
            
            }}
            textStyle= {{
                fontSize : 14,
                fontFamily : Font.RobotoLight,
                marginLeft : 15
            }}
            dropdownStyle={{
              flex: 1,
              marginTop: 7,
              position :'absolute',
              left : 0,
              right : 15,
              bottom : 0,
              height : 200,
              borderBottomWidth: 0,
              borderTopWidth: 0,
            }}
            dropdownTextStyle={{
                fontSize : 14,
                fontFamily : Font.RobotoLight,
                backgroundColor: '#3b536b',
                color : '#fff'
            }}
          />
          <Text style={[styles.textSubTitle, {marginTop: 10}]}>LOẠI THANH TOÁN : </Text>
          <ModalDropdown
            options={["Thẻ ATM", "Thẻ VISA", 'Chuyển khoản ngân hàng','Ví điện tử']}
            defaultValue={'Chọn phương thức thanh toán của bạn.....'}
            style={{
              flex: 1,
              backgroundColor: "#bdc3c7",
              paddingTop: 10,
              paddingBottom: 10,
              borderRadius: 5,
            
            }}
            textStyle= {{
                fontSize : 14,
                fontFamily : Font.RobotoLight,
                marginLeft : 15
            }}
            dropdownStyle={{
              flex: 1,
              marginTop: 7,
              position :'absolute',
              left : 0,
              right : 15,
              bottom : 0,
              height : 150,
              borderBottomWidth: 0,
              borderTopWidth: 0,
            }}
            dropdownTextStyle={{
                fontSize : 14,
                fontFamily : Font.RobotoLight,
                backgroundColor: '#3b536b',
                color : '#fff'
            }}
          />
         
        </View>

        <View style={{flexDirection : 'row', marginTop: 10}}>
            <Button
                buttonStyle={{backgroundColor: '#3b536b', borderRadius: 5 , marginLeft: -15}}
                textStyle={{textAlign: 'center'}}
                title={'Cập nhật'}
            />
        </View>
     
      </ScrollView>
    );
  }
}

export default Payment;

const styles = StyleSheet.create({
  picker: {
    width: 300,
    borderBottomWidth: 1,
    borderBottomColor: "#bbb"
  },
  container: {
    flex: 1,
    paddingRight: 15,
    paddingLeft: 15,
    backgroundColor: "#fff"
  },
  partNotice: {
    flexDirection: "column",
    marginTop: 10
  },

  textSubTitle: {
    fontFamily: Font.RobotoLight,
    fontSize: 14,
    fontWeight : 'bold',
    marginBottom: 5
  },

  title: {
    fontFamily: Font.RobotoLight,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10
  },
  subTitle: {
    fontFamily: Font.RobotoLight,
    fontSize: 12
  }
});
