import React from 'react';
import { StyleSheet, Image } from 'react-native';
import Smallcard from './smallcard';
import { Box } from 'native-base';
import { NavigationButton } from './button';
import { FontFamily } from '../../utils/fontDetails'
import { Images } from '../../utils/imgDetails';
import { responsiveWidth } from 'react-native-responsive-dimensions'

type Props = {
    item: {
        id: number;
        title: string;
        screen?: string;
        description?: string;
        price?: string;
        flag?: boolean;
        expiryDate?: string
    };
    navigation: () => void;
    title2?: string;
    btnName?: string;
};

export default function ButtonCard({ navigation, item, btnName,title2 }: Props) {

    return (
        <Box alignItems={'center'}>
            <Smallcard
                key={item.id}
                title={item.title}
                title2={title2}
                children={
                    item.flag ?
                        <Image source={Images.CHECK} style={styles.checkStyle} />
                        :
                        <NavigationButton
                            text={btnName ? btnName : 'Add'}
                            btnStyle={styles.btnStyle}
                            txtStyle={styles.txtStyle}
                            onPress={() => navigation()}
                        />
                }
            />
           

        </Box>
    );
}
const styles = StyleSheet.create({
    btnStyle: {
        backgroundColor: '#429EA6',
        height: 31,
        width: 98,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtStyle: { color: '#fff', fontSize: 14, fontFamily: FontFamily.bold },
    navBtn: {
        backgroundColor: '#429EA6',
        height: 44,
        width: 174,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkStyle: {
        height: 30,
        width: 30,
        right: responsiveWidth(8)
    }
});
