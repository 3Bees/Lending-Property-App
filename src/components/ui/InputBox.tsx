/* eslint-disable prettier/prettier */
import React, { ChangeEvent, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Box, Input, Text } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { FontFamily } from '../../utils/fontDetails'
import { TextInput } from 'react-native-gesture-handler';

type Props = {
  inputTitle: string;
  dropdown: boolean;
  multilneFlag?: boolean;
  inputHeight?: number
  onChange?: (e: string | ChangeEvent<any>) => void
  value?: string
};

const InputBox = ({ inputTitle, dropdown, multilneFlag, inputHeight, value }: Props) => {
  return (
    <Box w="90%" mb={3} alignSelf={'center'} >
      <Text
        mx="1"
        my="2"
        style={styles.TextStyle}
        maxWidth="86%"
        fontWeight={500}
      >
        {inputTitle}
      </Text>
      <Box
        bg="#E8E8E8"
        pt={2}
        pb={2}
        flexDirection="row"
        alignItems="center"
        borderRadius={8}>
        <Input w="90%" value={value} variant="unstyled" style={{ textAlignVertical: 'top' }} height={inputHeight ? inputHeight : '10'} multiline={multilneFlag} />
        {dropdown ? (
          <>
            <Box
              borderWidth={1}
              height="90%"
              mx="1"
              borderColor="#C8C8C8"></Box>
            <Box mr="2">
              <TouchableOpacity>
                <AntDesign name="caretup" color="grey" />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign name="caretdown" color="grey" />
              </TouchableOpacity>
            </Box>
          </>
        ) : null}
      </Box>
    </Box>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  TextStyle: { fontSize: 14, fontFamily: FontFamily.bold }
});