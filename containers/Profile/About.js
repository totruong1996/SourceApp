import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import { Font } from "../utils/Font";

class About extends Component {
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
          <Text style={styles.title}>About Kids Team:</Text>
          <Text style={styles.subTitle}>* Tien Truong</Text>
          <Text style={styles.subTitle}>* Chuong Nguyen</Text>
          <Text style={styles.title}></Text>

          <Text style={styles.subTitleThank}>
            Thanks you for using Travel App!
           </Text>
         
        </View>
        <View style={{marginTop : 20 , alignItems : 'center', justifyContent : 'center'}} >
        </View>
      </ScrollView>
    );
  }
}

export default About;

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
  },
  subTitleThank: {
    fontFamily: Font.RobotoLight,
    fontSize: 18,
    color:'green'
  }
});
