import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView
} from "react-native";
import {
  Button,
  FormInput,
  FormLabel,
} from "react-native-elements";

class Feedback extends Component {
  static navigationOptions = {
    title: "Đóng góp ý kiến"
  };
  render() {
    return (
      <ScrollView style={styles.container} keyboardShouldPersistTaps="always">
        <View style={styles.form}>
          <FormLabel labelStyle={styles.labelStyle}>Họ Tên</FormLabel>
          <FormInput
            ref={input => (this.refName = input)}
            onChangeText={() => {}}
            placeholder={"Nhập tên của bạn...."}
            placeholderTextColor={"#bbb"}
          />
          <FormLabel labelStyle={styles.labelStyle}>Địa chỉ</FormLabel>
          <FormInput
            ref={input => (this.refAddress = input)}
            onChangeText={() => {}}
            placeholder={"Nhập địa chỉ bạn...."}
            placeholderTextColor={"#bbb"}
          />
          <FormLabel labelStyle={styles.labelStyle}>Nội dung góp ý</FormLabel>
          <FormInput
            ref={input => (this.refContentFeedback = input)}
            onChangeText={() => {}}
            placeholder={"Nội dung góp ý...."}
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
                borderRadius: 5,
              }}
              textStyle={{ textAlign: "center", width : 100,  }}
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
  }
});

export default Feedback;
