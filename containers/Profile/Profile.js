import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Easing,
  TouchableOpacity,
  ScrollView
} from "react-native";
import {  List, ListItem } from "react-native-elements";
import { StackNavigator } from "react-navigation";
import { Font } from "../utils/Font";
import NoticeProfile from './NoticeProfile';
import InviteFriends from './InviteFriends';
import Payment from './Payment';
import NeedHelp from './NeedHelp';
import Feedback from './Feedback';
import ChangeProfile from './ChangeProfile';
import About from './About';




class Profile extends React.Component {
  static navigationOptions = {
    title: "Tài khoản"
  };
  constructor(props) {
    super(props);
    this.list = [
      {
        name: "Cài đặt thông báo",
        iconImage: require("../../images/icon_notice.png"),
        path : "NoticeProfile",
      },
      {
        name: "Mời bạn bè",
        iconImage: require("../../images/icon-invite.png"),
        path : "InviteFriends",
      },
      {
        name: "Phương thức thanh toán",
        iconImage: require("../../images/icon-paymenet.png"),
        path : "Payment",
      },
      {
        name: "Trợ giúp",
        iconImage: require("../../images/icon-help.png"),
        path : "NeedHelp",
      },
      {
        name: "Đóng góp ý kiến",
        iconImage: require("../../images/icon-feedback.png"),
        path : "Feedback",
      },
      {
        name: "Về chúng tôi",
        iconImage: require("../../images/icon-feedback.png"),
        path : "About",
      },
      {
        name: "Đăng xuất",
        iconImage: require("../../images/icon-setting.png"),
        path : "SplashScreen",
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
          <TouchableOpacity style={styles.btnProflie} onPress={() => {
                // this.setState({ tabActive: index });
                this.props.navigation.navigate('ChangeProfile', {
                  user: "Lucy"
                });
              }}>
            <Text style={[styles.title]}>Kids Team</Text>
            <Text style={{ fontSize: 14, fontFamily: Font.RobotoLight }}>
              Xem và sửa thông tin
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              alignItems: "center",
              height: 70,
              width: 70
            }}
          >
            <Image
              style={styles.imgProfile}
              source={require("../../images/user.png")}
            />
          </View>
        </View>

        <List containerStyle={{ marginBottom: 20, borderTopWidth: 0 }}>
          {this.list.map((item, index) => (
            <ListItem
              avatar={item.iconImage || null}
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
              avatarOverlayContainerStyle={{ backgroundColor: "#fff" }}
              avatarStyle={{ backgroundColor: "#fff", height: 20, width: 20 }}
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

const ProfilePage = StackNavigator(
  {
    Profile: { screen: Profile },
    ChangeProfile: { screen: ChangeProfile },
    NoticeProfile: { screen: NoticeProfile },
    InviteFriends: { screen: InviteFriends },
    Payment: { screen: Payment },
    NeedHelp: { screen: NeedHelp },
    Feedback: { screen: Feedback },
    About : {screen: About},
  },
  {
    navigationOptions: {
      gesturesEnabled: true,
      headerTitleStyle: {
        fontSize: 16,
        fontWeight: "normal",
        fontFamily: Font.Montserrat
      }
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 600,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const height = layout.initHeight;
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0]
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1]
        });

        return { opacity, transform: [{ translateY }] };
      }
    })
  }
);
export default ProfilePage;

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
