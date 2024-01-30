import React, { useState } from 'react';
import { View, Text, StatusBar, TextInput,TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import { Dropdown } from 'react-native-element-dropdown';
import { ScrollView } from 'react-native';

const data = [
  { label: "Available ! Let Us Connect", value: '1' },
  { label: "Away ! Stay Discrete and Watch", value: '2' },
  { label: "Busy ! Do not Disturb I Will Catch Up Later", value: '3' },
  { label: "SOS ! Emergency Need Assistance HELP", value: '4' },
];

const buttonLabels = [
    ["Coffee", "Buisness", "Hobbies"],
    ["Friendship", "Movies", "Dinning"],
    ["Dating", "Matrimony", "More"],
  ];

export default function Refine() {
 
  const [selectedValue, setSelectedValue] = useState("Available ! Let Us Connect");
  const [text, setText] = useState("Hi community! I am open to new connections");
  const [selectedButtons, setSelectedButtons] = useState(Array(9).fill(false));
  
  const handleButtonPress = (buttonIndex) => {
    const newSelectedButtons = [...selectedButtons];
    newSelectedButtons[buttonIndex] = !newSelectedButtons[buttonIndex];
    setSelectedButtons(newSelectedButtons);
  }
  return (
    <>
      <StatusBar backgroundColor="transparent" barStyle="light-content" translucent />
      <ScrollView>
        <Text style={{ margin: 30, fontWeight: 'bold' }}>Select Your Availability</Text>
        <View style={{ marginLeft: 30, marginRight: 30 }}>
          <Dropdown
            label="Status"
            placeholder="Available ! Let Us Connect"
            data={data}
            maxHeight={300}
            value={selectedValue}
            onChange={(itemValue) => setSelectedValue(itemValue)}
          />
        </View>
        <Text style={{ marginLeft: 30, marginBottom: 10, marginTop: 20, fontWeight: 'bold' }}>Add Your Status</Text>
        <TextInput
          style={{ marginLeft: 30, marginBottom: 10, marginTop: 10, marginRight: 30, borderWidth: 0.5, borderRadius: 5, height: 70 }}
          placeholder={text}
          value={text}
          onChangeText={(newText) => setText(newText)}
        />
        <Text style={{ marginLeft: 30, marginBottom: 10, marginTop: 20, fontWeight: 'bold' }}>Select Hyper Local Distance</Text>
        <Slider
          style={{ marginLeft: 20, marginRight: 20, width: 320, height: 40 }}
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor="#000037"
          maximumTrackTintColor="#000037"
        />
        <Text style={{ marginLeft: 30, marginBottom: 10, marginTop: 20, fontWeight: 'bold' }}>Select Purpose</Text>
        {/* Add your TouchableOpacity component here */}
        {[0, 1, 2].map((rowNumber) => (
          <View key={rowNumber} style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 30 }}>
            {buttonLabels[rowNumber].map((customLabel, buttonIndex) => (
              <TouchableOpacity
                key={buttonIndex}
                style={{
                  flex: 1,
                  height: 40,
                  backgroundColor: selectedButtons[rowNumber * 3 + buttonIndex] ? "#FFB6C1" : '#FFFFFF', // Change background color based on selection
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: 5,
                }}
                onPress={() => handleButtonPress(rowNumber * 3 + buttonIndex)}
              >
                <Text style={{}}>{customLabel}</Text>
              </TouchableOpacity>    
            ))}
          </View>
        ))}
        <View style={{alignItems:'center',justifyContent:"center",marginTop:20}}>
         <TouchableOpacity
            style={{
              backgroundColor: '#19194B',
              height: 50,
              width: '45%',
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            
          >
            <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Save and Explore</Text>
          </TouchableOpacity>
          </View>
      </ScrollView>
    </>
  );
}