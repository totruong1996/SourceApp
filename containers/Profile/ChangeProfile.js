import React, { Component, PropTypes } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ListView,
  ScrollView,
  Image
} from "react-native";
import { Button, FormInput, FormLabel, Icon } from "react-native-elements";
import Swiper from "react-native-swiper";
import { StackNavigator, TabNavigator } from "react-navigation";
import { Font } from "../utils/Font";
import DateTimePicker from "react-native-modal-datetime-picker";

class ChangeProfile extends Component {
  state = {
    isDateTimePickerVisible: false
  };
  static navigationOptions = {
    title: "Chỉnh sửa thông tin cá nhân"
  };
  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = date => {
    console.log("A date has been picked: ", date);
    this._hideDateTimePicker();
  };
  render() {
    return (
      <ScrollView style={styles.container} keyboardShouldPersistTaps="always">
        <View>
          <TouchableOpacity onPress={this._showDateTimePicker}>
            <Text>Show TimePicker</Text>
          </TouchableOpacity>
          <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this._handleDatePicked}
            onCancel={this._hideDateTimePicker}
            datePickerModeAndroid={"spinner"}
          />
        </View>
        <View style={styles.form}>
          <View style={styles.avatar}>
            <Image
              style={styles.imgProfile}
              source={require("../../images/user.png")}
            />
            <View style={styles.camera}>
              <Icon
                size={36}
                name="ios-camera"
                type="ionicon"
                color="#517fa4"
              />
            </View>
          </View>
          <FormLabel labelStyle={styles.labelStyle}>Họ Tên</FormLabel>
          <FormInput
            ref={input => (this.refName = input)}
            onChangeText={() => {}}
            placeholder={"Tên...."}
            placeholderTextColor={"#bbb"}
          />
          <FormLabel labelStyle={styles.labelStyle}>Địa chỉ</FormLabel>
          <FormInput
            ref={input => (this.refAddress = input)}
            onChangeText={() => {}}
            placeholder={"Email...."}
            placeholderTextColor={"#bbb"}
          />
          <FormLabel labelStyle={styles.labelStyle}>Nội dung góp ý</FormLabel>
          <FormInput
            ref={input => (this.refContentChangeProfile = input)}
            onChangeText={() => {}}
            placeholder={"Giói tính...."}
            placeholderTextColor={"#bbb"}
            inputStyle={{
              height: 100,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}
          />

          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Button
              buttonStyle={{
                backgroundColor: "#3b536b",
                borderRadius: 5
              }}
              textStyle={{ textAlign: "center", width: 100 }}
              title={"Gửi"}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  form: {
    flex: 1
  },
  labelStyle: {
    fontSize: 16
  },
  avatar: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative"
  },
  imgProfile: {
    height: 150,
    width: 150,
    zIndex: 1
  },
  camera:{
      position : 'absolute',
      bottom : 0,
      left: 0,
      alignItems: 'center',
      justifyContent :'center',
      right : 0,
      zIndex : 2,

    }
});

export default ChangeProfile;
