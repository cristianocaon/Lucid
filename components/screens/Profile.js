import React from 'react';
import {View, Text} from 'react-native';

const user1 = {
  name: 'Giulia Piombo',
  age: 19,
  bio: 'Computer Engineering student at Texas Tech University',
  interests: [
    'Programming',
    'Painting',
    'Watching Greys Anatomy'
  ],
  pastGigs: [
    'Waitress',
    'Cashier'
  ],
  reviews: []
}

export default function Profile() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile Screen</Text>
    </View>
  );
}
