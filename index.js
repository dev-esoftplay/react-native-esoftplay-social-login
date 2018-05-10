import React, { Component } from 'react'
import { View, WebView, AsyncStorage } from '../../node_modules/react-native/Libraries/react-native/react-native-implementation.js';
import utils from 'react-native-esoftplay-utils'
import config from '../../config';

export default class LoginWith extends Component {

  setUser(params) {
    AsyncStorage.setItem(config.domain + '_user', )
  }

  render() {
    var { url, onResult } = this.props
    if (!url) {
      url = utils.getArgs(this.props, 'url')
    }
    return (
      <View style={{ flex: 1 }} >
        <WebView
          style={{ flex: 1 }}
          startInLoadingState={true}
          thirdPartyCookiesEnabled={false}
          startInLoadingState
          javaScriptEnabled={true}
          userAgent={"Mozilla/5.0 (X11; Linux i686; rv:10.0.1) Gecko/20100101 Firefox/10.0.1 SeaMonkey/2.7.1"}
          {...this.props}
          source={{ uri: url }}
          onMessage={(e) => {
            var data = e.nativeEvent.data
            this.setUser(data)
            if (onResult) onResult(data)
          }}
        />
      </View>
    )
  }
}