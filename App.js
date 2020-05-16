import React from 'react';
import { StyleSheet, SafeAreaView, Alert, Button, Text, View } from 'react-native';
import { CalendarList } from 'react-native-calendars';
import * as firebase from 'firebase';



function Calendar() {
  return (
    <View>
      
      <Button
        onPress={() => Alert.alert('Simple Button pressed')}
        title= "Add Event"
        color="#841584"
        
      />
      <CalendarList
        // Callback which gets executed when visible months change in scroll view. Default = undefined
        onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
        // Max amount of months allowed to scroll to the past. Default = 50
        pastScrollRange={52}
        // Max amount of months allowed to scroll to the future. Default = 50
        futureScrollRange={52}
        // Enable or disable scrolling of calendar list
        scrollEnabled={true}
        // Enable or disable vertical scroll indicator. Default = false
        showScrollIndicator={false} 
    />
    </View>
  )
}
export default Calendar;
