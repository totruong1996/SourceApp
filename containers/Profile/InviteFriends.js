import React, { Component, PropTypes } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import { Card, List, ListItem , Button } from "react-native-elements";
import Swiper from "react-native-swiper";
import { StackNavigator, TabNavigator } from "react-navigation";
import { Font } from "../utils/Font";

class InviteFriends extends React.Component {
  static navigationOptions = {
    title: "Mời bạn bè của bạn"
  };

  constructor(props) {
    super(props);
  }

  _handleChangeSwitch = (val, sourceList, itemOfList) => {};

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.partNotice}>
          <Text style={styles.title}>Nhận Voucher hấp dẫn</Text>
          <Text style={styles.subTitle}>
            Mời bạn bè của bạn bằng đường link ở dưới , bạn sẽ nhận được Voucher trị giá
            <Text style={[styles.subTitle, {fontWeight: 'bold'} ]}> 500.000Đ</Text>  
            <Text style={styles.subTitle}> vào tài khoản của bạn.</Text>
           </Text>
           <Text style={styles.subTitle}>Người bạn của bạn sẽ cũng nhận được một phiếu Voucher trị giá 
            <Text style={[styles.subTitle, {fontWeight: 'bold'} ]}> 300.000Đ </Text>  </Text> 
        </View>
        <View style={{marginTop : 20 , alignItems : 'center', justifyContent : 'center'}} >
          <Button
            buttonStyle={{backgroundColor: '#3b536b', borderRadius: 10 , width: 150}}
            textStyle={{textAlign: 'center'}}
            title={'Chia sẻ ngay'}
          />
        </View>
      </ScrollView>
    );
  }
}

export default InviteFriends;

const styles = StyleSheet.create({
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
    fontSize: 14
  },

  title: {
    fontFamily: Font.RobotoLight,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom : 10,
  },
  subTitle: {
    fontFamily: Font.RobotoLight,
    fontSize: 12,
  }
});
