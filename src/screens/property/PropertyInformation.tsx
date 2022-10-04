import React from 'react';
import MainWithHeader from '../../components/layouts/mainWithHeader';
import CardList from '../../components/ui/cardList';
import PrevAndNextButtons from '../../components/ui/prevAndNextButtons';
import { Box, FlatList } from 'native-base'
import { PropertOnboardingStackParamList } from '../../navigation/types'
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import ButtonCard from '../../components/ui/buttonCard';

type Props = StackNavigationProp<PropertOnboardingStackParamList, 'Property'>

const PropertyInformation = () => {
  const navigation = useNavigation<Props>();
  const cardsDetails = [
    {
      id: 1,
      title: 'Property details',
      screen: 'AddPropertyDetails',
    },
    {
      id: 3,
      title: 'Documents',
      screen: 'Documents',
    },
  ];

  return (
    <MainWithHeader title={'Add information and start managing your property'} onClickBack={() => navigation.goBack()}>
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
      </MainWithHeader>
  );
};

export default PropertyInformation;
