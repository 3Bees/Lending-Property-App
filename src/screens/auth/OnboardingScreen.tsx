import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CardList from '../../components/ui/cardList';
import { onBoardingItem, cardsDetails } from '../../assets/dataset/dataset';
import MainWithHeader from '../../components/layouts/mainWithHeader';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList } from '../../navigation/types'
import { useNavigation } from '@react-navigation/native';
import ButtonCard from '../../components/ui/buttonCard';

type Props = StackNavigationProp<AuthStackParamList, 'onboarding'>


const OnboardingScreen = () => {
  const navigation = useNavigation<Props>();

  return (
    <MainWithHeader onClickBack={() => navigation.goBack()} >
      <View style={styles.container}>
        <FlatList
          data={cardsDetails}
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <ButtonCard
                item={item}
                navigation={() => navigation.navigate(item.screen)}
              />
            )
          }
          }
        />
      </View>
    </MainWithHeader>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: '40%'
  }
});
