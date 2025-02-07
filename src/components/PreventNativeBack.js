// @flow

import { PureComponent } from "react";
import { BackHandler } from "react-native";

class PreventNativeBack extends PureComponent<{}> {
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
  }

  handleBackButton = () => true;

  render() {
    return null;
  }
}

export default PreventNativeBack;
