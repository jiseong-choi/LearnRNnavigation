import { View, Text, Button } from 'react-native';
import React, {useEffect} from 'react';

const HomeScreen = ({navigation}) => {
  // useEffect(() => {
  //   navigation.setOptions({title:"홈"});
  // }, [navigation]);

  return (
    <View>
        <Button 
            title='Detail1 열기'
            onPress={()=>navigation.navigate('Detail',{id:1})}
        />
        <Button 
        title='Detail2 열기'
        onPress={()=>navigation.navigate('Detail',{id:2})}
        />
        <Button 
        title='Detail3 열기'
        onPress={()=>navigation.navigate('Detail',{id:3})}
        />
        <Button 
        title='HeaderLess 열기'
        onPress={()=>navigation.push('headerless')}
        />
    </View>
  );
};

export default HomeScreen;
