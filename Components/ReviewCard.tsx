import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Colors, FontSize } from '../Theme';
import Container from '../Abstracts/Constainer';

type CardProps = {
  image: any;
  name: string;
  discription: string;
};

const ReviewCard = ({ image, name, discription }: CardProps) => {
  const formattedDate = new Date().toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
  });

  return (
    <Container>
      <View style={styles.card}>
        {/* Avatar */}
        <View style={styles.avatar}>
          <Image source={image} style={styles.avatarImage} resizeMode="cover" />
        </View>

        {/* Content */}
        <View style={styles.content}>
          {/* Name & Date */}
          <View style={styles.header}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.date}>{formattedDate}</Text>
          </View>

          {/* Stars */}
          <View style={styles.stars}>
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <MaterialIcons key={i} name="star" size={20} color={Colors.gold} />
              ))}
          </View>

          {/* Description */}
          <Text style={styles.description}>{discription}</Text>
        </View>
      </View>
    </Container>
  );
};

export default ReviewCard;

const styles = StyleSheet.create({
  card: {
    width: 'auto',          // Figma width
    minHeight: 'auto',      // Figma height
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 12,
    alignSelf: 'center',
    margin: 10,
  },

  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    overflow: 'hidden',
    marginRight: 10,
  },

  avatarImage: {
    width: '100%',
    height: '100%',
  },

  content: {
    flex: 1,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  name: {
    fontSize: FontSize.Subhead,
    fontFamily: 'Poppins-SemiBold',
  },

  date: {
    fontSize: FontSize.Body,
    color: Colors.grey,
  },

  stars: {
    flexDirection: 'row',
    marginTop: 4,
  },

  description: {
    fontSize: FontSize.Body,
    marginTop: 6,
  },
});
