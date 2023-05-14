import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'

const LayoutDefault = ({ children }) => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View className="px-4">
        {children}
      </View>
    </SafeAreaView>
  )
}

export default LayoutDefault;