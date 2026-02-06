import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Colors, FontSize } from '../Theme';

type CardProps = {
  image: any;
  title: string;
  location: string;
};

const formatDateTime = (date: Date) => {
  const formattedDate = date.toLocaleDateString('en-US', {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
  });

  const formattedTime = date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return `${formattedDate} ${formattedTime}`;
};

const EventCard = ({ image, title, location }: CardProps) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} resizeMode="cover" />

      <View style={styles.textContainer}>
        <Text style={styles.date}>{formatDateTime(new Date())}</Text>

        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>

        <View style={styles.locationContainer}>
          <MaterialIcons name="location-on" size={14} color={Colors.grey} />
          <Text style={styles.locationText}>{location}</Text>
        </View>
      </View>
    </View>
  );
};

export default EventCard;

const styles = StyleSheet.create({
  container: {
    width: 'auto',          // Figma width
    minHeight: 'auto',      // Figma height
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 12,
    alignSelf: 'center',
    // marginVertical: 5,
    margin:5
  },

  image: {
    width: 80,
    height: 100,
    borderRadius: 16,
  },

  textContainer: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },

  date: {
    fontSize: FontSize.Body,
    color: Colors.primaryblue,
  },

  title: {
    fontSize: FontSize.Subhead,
    // fontFamily: 'Poppins-SemiBold',
    marginVertical: 4,
  },

  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginTop: 4,
  },

  locationText: {
    fontSize: FontSize.Body,
    color: Colors.grey,
    marginLeft: 4,
  },
});
