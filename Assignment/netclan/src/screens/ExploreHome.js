import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const data = [
  {
    id: '1',
    name: 'John Doe',
    city: 'New York',
    profession: 'Software Engineer',
    hobbies: ['Reading', 'Gaming', 'Traveling'],
  },
  {
    id: '2',
    name: 'Jane Smith',
    city: 'Los Angeles',
    profession: 'Graphic Designer',
    hobbies: ['Painting', 'Photography', 'Cooking'],
  },
  {
    id: '3',
    name: 'Bob Johnson',
    city: 'Chicago',
    profession: 'Teacher',
    hobbies: ['Music', 'Hiking', 'Coding'],
  },
];

export default function ExploreHome() {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // Implement your search logic here
    console.log('Search Text:', searchText);
  };

  const renderHobbies = (hobbies) => {
    return hobbies.map((hobby) => <Text key={hobby}>{hobby}</Text>);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#A0A0A0"
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
          />
          <TouchableOpacity onPress={handleSearch} style={styles.filterIconContainer}>
            <AntDesign name="filter" size={24} color="#19194B" />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{`Name: ${item.name}`}</Text>
            <Text style={styles.itemText}>{`City: ${item.city}`}</Text>
            <Text style={styles.itemText}>{`Profession: ${item.profession}`}</Text>
            <Text style={styles.itemText}>{'Hobbies:'}</Text>
            {renderHobbies(item.hobbies)}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#19194B',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
  },
  searchInput: {
    flex: 1,
    padding: 10,
    fontSize: 16,
  },
  filterIconContainer: {
    padding: 10,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  itemText: {
    fontSize: 16,
    marginBottom: 5,
  },
});
