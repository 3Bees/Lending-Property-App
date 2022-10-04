import React, { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native';
import { Box } from 'native-base';
import MainWithHeader from '../../../components/layouts/mainWithHeader';
import CardList from '../../../components/ui/cardList';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { PropertiesStackParamList } from '../../../navigation/types'
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { ServicesList } from '../../../assets/dataset/dataset'
import ButtonCard from '../../../components/ui/buttonCard';

type Props = StackNavigationProp<PropertiesStackParamList, 'PropertyServicesList'>


const PropertyServicesList = () => {

  const navigation = useNavigation<Props>();
  const [cards, setCards] = useState(ServicesList)

  return (

    <MainWithHeader title="Property Services"
      onClickBack={() => navigation.goBack()}>
       <FlatList
          data={ServicesList}
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <ButtonCard
                item={item}
                navigation={() => navigation.navigate(item.screen,{item:item})}
                btnName={'Purchase'}
              />
            )
          }
          }
        />
    </MainWithHeader>
  );
};

export default PropertyServicesList;

const styles = StyleSheet.create({
  space: {
    height: responsiveHeight(20)
  }
});
