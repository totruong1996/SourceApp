import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from "react-native";
import {List, ListItem } from "react-native-elements";
import { Font } from "../utils/Font";



class NeedHelp extends React.Component {
  static navigationOptions = {
    title: "Trung tâm trợ giúp"
  };
  constructor(props) {
    super(props);
    this.list = [
      {
        name: "Phương thức thanh toán",
        iconImage: require("../../images/icon_notice.png"),
        path : "NoticeProfile",
      },
      {
        name: "Hủy bỏ đặt chỗ",
        iconImage: require("../../images/icon-invite.png"),
        path : "InviteFriends",
      },
      {
        name: "Mã giảm giá , tiền thưởng khi mời bạn bè",
        iconImage: require("../../images/icon-paymenet.png"),
        path : "Payment",
      },
      {
        name: "Xác thực tài khoản",
        iconImage: require("../../images/icon-help.png"),
        path : "InviteFriends",
      },
      {
        name: "Các câu hỏi khác",
        iconImage: require("../../images/icon-feedback.png"),
        path : "InviteFriends",
      },
      
    ];
    this.state = {
      tabActive: ""
    };
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.viewProfile}>
            <Text style={{ fontSize: 16, fontFamily: Font.RobotoLight , fontWeight : 'bold'}}>
                Câu hỏi thường gặp
            </Text>
        </View>

        <List containerStyle={{ marginBottom: 20, borderTopWidth: 0 }}>
          {this.list.map((item, index) => (
            <ListItem
              key={item}
              title={item.name}
              onPress={() => {
                // this.setState({ tabActive: index });
                this.props.navigation.navigate(item.path, {
                  user: "Lucy"
                });
              }}
              wrapperStyle={{ paddingTop: 5, paddingBottom: 5 }}
              containerStyle={{
                borderBottomColor: "#ccc",
                borderTopColor: "#ccc"
              }}
              hideChevron={true}
              titleStyle={{
                fontSize: 14,
                fontFamily: Font.RobotoLight,
                color: this.state.tabActive === index ? "#2980b9" : "#000"
              }}
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}

export default NeedHelp;



const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingRight: 15,
      paddingLeft: 15,
      backgroundColor: "#fff"
    },
    viewProfile: {
      flexDirection: "row",
      marginTop: 10
    },
    btnProflie: {
      flex: 3,
      flexDirection: "column",
      marginBottom: 5,
      marginTop: 5,
      marginLeft: 15
    },
    imgProfile: {
      flex: 1,
      height: 70,
      width: 70,
      justifyContent: "center",
      alignItems: "center",
      marginRight: 10
    },
  
    backgroundLayer: {
      position: "absolute",
      flex: 1,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      zIndex: 1,
      backgroundColor: "#2D2136",
      opacity: 0.6
    },
    icon: {
      width: 20,
      height: 20
    },
    title: {
      fontFamily: Font.RobotoLight,
      fontSize: 18,
      fontWeight: "bold"
    }
  });
  