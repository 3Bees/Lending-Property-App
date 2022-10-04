import { Box, NativeBaseProvider } from 'native-base';
import React, { useRef, useState } from 'react';
import { ScrollView, Text, View, Animated, StyleSheet, Image, ImageBackground, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Images } from '../../../utils/imgDetails';
import Card from '../../../components/ui/cardHome';
import AnimatedHeader from '../../../components/ui/animatedHeader';
import { FontFamily } from '../../../utils/fontDetails'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { itemArray } from '../../../assets/dataset/dataset';
import { Icon } from 'react-native-elements';
import { PropertiesStackParamList } from '../../../navigation/types'
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NavigationButton } from '../../../components/ui/button';
import { MyProperties } from '../../../assets/dataset/dataset'
type Props = StackNavigationProp<PropertiesStackParamList, 'PropertyServicesDetails'>


const PropertServicesDetails = () => {
    const navigation = useNavigation<Props>();
    const offset = useRef(new Animated.Value(0)).current;
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const [myProperties, setMyproperties] = useState([MyProperties])

    
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>

                <AnimatedHeader animatedValue={offset} backgroundImage={Images.BG2} />
                <Box style={styles.cardContainer}>
                    <ScrollView
                        horizontal={false}
                        style={{ flex: 1, backgroundColor: 'white' }}
                        contentContainerStyle={{
                            paddingTop: 300,
                            paddingHorizontal: responsiveWidth(5)
                        }}
                        showsVerticalScrollIndicator={false}
                        scrollEventThrottle={16}
                        onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset: { y: offset } } }],
                            { useNativeDriver: false }
                        )}
                    >
                        <View style={styles.midHeader}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Image
                                    source={Images.LINE}
                                    style={styles.userICon}
                                />
                            </TouchableOpacity>
                            <Image source={Images.LOGO} style={{ height: 65, width: 63 }} />
                            <View style={styles.emptyView} />
                        </View>
                        <FlatList
                            data={myProperties}
                            horizontal={false}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item,index }) => {
                                return (
                                    <TouchableOpacity style={styles.midComponent} onPress={() => setCurrentIndex(index)}>
                                        <Image source={Images.DOCBACKGROUND} style={styles.listImage} />
                                        <Text style={styles.cardText}>
                                            {item.title}
                                        </Text>
                                        {currentIndex === index ?
                                        <Icon name={'radio-button-on'} type={'ionicons'} tvParallaxProperties={undefined} color={'#FD9926'} />
                                        :
                                        <Icon name={'radio-button-off'} type={'ionicons'} tvParallaxProperties={undefined} color={'#FD9926'}/>
                                        }
                                        </TouchableOpacity>
                                )
                            }
                            }
                        />



                    </ScrollView>
                </Box>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

export default PropertServicesDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imgBg: {
        flex: 0.5,
        borderWidth: 1,
    },
    image: {
        flex: 1,
        alignItems: 'center',
    },
    cardContainer: {
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    cardRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '92%'
    },
    heading: {
        alignSelf: 'flex-start',
        marginLeft: '5%',
        fontFamily: FontFamily.bold,
        color: 'black',
        fontSize: 30,
        marginVertical: 15
    },
    tipsImage: {
        height: 200,
        width: 380,
        marginBottom: 30,
        marginLeft: responsiveWidth(2)
    },
    userICon: { width: 20, height: 20, borderRadius: 50 },
    midHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        width: responsiveWidth(85),
        justifyContent: 'space-between'
    },
    emptyView: {
        width: responsiveWidth(8)
    },
    title: {
        fontSize: responsiveFontSize(3.5),
        alignSelf: 'center',
        marginVertical: responsiveHeight(2),
        textAlign: 'center'
    },
    title2: {
        fontSize: responsiveFontSize(2.7),
    },
    description: {
        fontSize: responsiveFontSize(2),
        alignSelf: 'center',
        textAlign: 'center',
        marginHorizontal: responsiveWidth(5),
        color: '#4F4F4F'
    },
    expiry: {
        fontSize: responsiveFontSize(2),
        color: '#4F4F4F'
    },
    midComponent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: responsiveWidth(90),
      
        paddingVertical: responsiveHeight(2),
        borderColor: '#4F4F4F'
    },
    listImage: {
        height: responsiveHeight(7),
        width: responsiveHeight(7),
        borderRadius: responsiveHeight(2)
    },
    paymentImage: {
        height: responsiveHeight(7),
        width: responsiveHeight(7),
        resizeMode: 'contain',
        marginVertical: responsiveHeight(1),

    },
    cardText: {
        width: responsiveWidth(55),
        fontSize: responsiveFontSize(2.3)
    },
    paymentView: {
        width: responsiveWidth(90),
        borderBottomWidth: 0.2,
        paddingBottom: responsiveHeight(2)
    },
    price: {
        fontSize: responsiveFontSize(2),
        fontWeight: 'bold',
        paddingVertical: responsiveHeight(2)
    },
    buttonStyle: {
        backgroundColor: '#3F97A0',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginVertical: responsiveHeight(4),
        width: '100%',
    }



});
