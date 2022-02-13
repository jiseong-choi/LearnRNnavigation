import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const HeaderlessScreen = ({navigation}) => {
  return (
      <SafeAreaView>
          <View>
            <Text>헤더가 없네?!</Text>
            <Button title="뒤로가기" onPress={() => navigation.pop()} />
          </View>
      </SafeAreaView>
  )
}

export default HeaderlessScreen

const styles = StyleSheet.create({})