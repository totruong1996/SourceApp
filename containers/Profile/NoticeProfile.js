import React, { Component, PropTypes } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Switch
} from "react-native";
import { Card, List, ListItem } from "react-native-elements";
import Swiper from "react-native-swiper";
import { StackNavigator, TabNavigator } from "react-navigation";
import { Font } from "../utils/Font";

class NoticeProfile extends React.Component {
  static navigationOptions = {
    title: "Cài đặt thông báo"
  };

  constructor(props) {
    super(props);
    this.state = {
      listNoticeReminders: [
        { title: "Email", subTitle: "", isRegisted: false },
        { title: "Gửi thông báo đến thiết bị", isRegisted: false },
        { title: "Tin nhắn điện thoại", isRegisted: false }
      ],
      listNoticeSystems: [
        { title: "Email", subTitle: "", isRegisted: false },
        { title: "Gửi thông báo đến thiết bị", isRegisted: false },
        { title: "Tin nhắn điện thoại", isRegisted: false }
      ],
      listNoticeArea: [
        { title: "Email", subTitle: "", isRegisted: false },
        { title: "Gửi thông báo đến thiết bị", isRegisted: false },
        { title: "Tin nhắn điện thoại", isRegisted: false }
      ]
    };
  }

  _handleChangeSwitch = (val, sourceList, itemOfList) => {};

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.partNotice}>
          <Text style={styles.title}>Thông báo cập nhập ứng dụng</Text>
          <Text style={styles.subTitle}>
            Nhận các thông báo về cập nhật ứng dụng
          </Text>
          <View style={styles.containerNoticePart}>
            <FlatList
              style={styles.listItem}
              data={this.state.listNoticeSystems}
              renderItem={({ item }) => (
                <View style={styles.itemList}>
                  <View style={styles.titleNotice}>
                    <Text style={styles.textTitle}>{item.title}</Text>
                    {item.subTitle !== "" ? (
                      <Text style={styles.textSubTitle}>{item.subTitle}</Text>
                    ) : null}
                  </View>
                  <Switch
                    value={item.isRegisted}
                    onValueChange={val => {
                      let isRegistedItem = !item.isRegisted;
                      const { listNoticeSystems } = this.state;
                      let newListNotice = listNoticeSystems.map(
                        (current, index) => {
                          if (current.title === item.title) {
                            return {
                              ...current,
                              isRegisted: !current.isRegisted
                            };
                          }
                          return current;
                        }
                      );
                      this.setState({ listNoticeSystems: newListNotice });
                    }}
                  />
                </View>
              )}
            />
          </View>
        </View>
        <View style={styles.partNotice}>
          <Text style={styles.title}>Thông báo về địa điểm gần bạn </Text>
          <Text style={styles.subTitle}>
            Nhận thông báo về vị trí các địa điểm , thông tin hữu ích , mã giảm
            giá về địa điểm gần bạn hiện tại (Yêu cầu định vị)
          </Text>
          <View style={styles.containerNoticePart}>
            <FlatList
              style={styles.listItem}
              data={this.state.listNoticeArea}
              renderItem={({ item }) => (
                <View style={styles.itemList}>
                  <View style={styles.titleNotice}>
                    <Text style={styles.textTitle}>{item.title}</Text>
                    {item.subTitle !== "" ? (
                      <Text style={styles.textSubTitle}>{item.subTitle}</Text>
                    ) : null}
                  </View>
                  <Switch
                    value={item.isRegisted}
                    onValueChange={val => {
                      let isRegistedItem = !item.isRegisted;
                      const { listNoticeArea } = this.state;
                      let newListNotice = listNoticeArea.map(
                        (current, index) => {
                          if (current.title === item.title) {
                            return {
                              ...current,
                              isRegisted: !current.isRegisted
                            };
                          }
                          return current;
                        }
                      );
                      this.setState({ listNoticeArea: newListNotice });
                    }}
                  />
                </View>
              )}
            />
          </View>
        </View>
        <View style={styles.partNotice}>
          <Text style={styles.title}>Nhắc nhở gợi ý </Text>
          <Text style={styles.subTitle}>
            Nhận thông báo về mẹo nhỏ , cập nhật mã giảm giá, để giúp bạn có
            những chuyến đi thú vị , hoặc những thông báo liên quan đến các hoạt
            động của bạn trên app
          </Text>
          <View style={styles.containerNoticePart}>
            <FlatList
              style={styles.listItem}
              data={this.state.listNoticeReminders}
              renderItem={({ item }) => (
                <View style={styles.itemList}>
                  <View style={styles.titleNotice}>
                    <Text style={styles.textTitle}>{item.title}</Text>
                    {item.subTitle !== "" ? (
                      <Text style={styles.textSubTitle}>{item.subTitle}</Text>
                    ) : null}
                  </View>
                  <Switch
                    value={item.isRegisted}
                    onValueChange={val => {
                      let isRegistedItem = !item.isRegisted;
                      const { listNoticeReminders } = this.state;
                      let newListNotice = listNoticeReminders.map(
                        (current, index) => {
                          if (current.title === item.title) {
                            return {
                              ...current,
                              isRegisted: !current.isRegisted
                            };
                          }
                          return current;
                        }
                      );
                      this.setState({ listNoticeReminders: newListNotice });
                    }}
                  />
                </View>
              )}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default NoticeProfile;

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
  containerNoticePart: {
    flexDirection: "column"
  },
  itemList: {
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f5f5f5"
  },
  titleNotice: {
    flex: 1
  },
  textTitle: {
    fontFamily: Font.RobotoLight,
    fontSize: 16
  },
  textSubTitle: {
    fontFamily: Font.RobotoLight,
    fontSize: 14
  },

  title: {
    fontFamily: Font.RobotoLight,
    fontSize: 18,
    fontWeight: "bold"
  },
  subTitle: {
    fontFamily: Font.RobotoLight,
    fontSize: 12
  }
});
