import React, { useState } from 'react';
import { Box, Text, View } from 'native-base';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { FontFamily } from '../../utils/fontDetails';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment'

type Props = {
  title?: string
  setDate?: any

};


export const DatePicker = ({ title, setDate }: Props) => {
  const [open, setOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState('')


  return (
    <Box ml="20px">
      <Text style={styles.textStyles}>
        {title ? title : 'Please enter your certificate issue date'}
      </Text>
      <Box flexDirection={'row'}>
        <TouchableOpacity style={styles.mainView} onPress={() => {
          setOpen(true)
        }}>
          <>
            <DateTimePickerModal
              isVisible={open}
              mode="date"
              display='spinner'
              onConfirm={(d) => {
                setDate(moment(d).format('DD-MM-YYYY'))
                setSelectedDate(moment(d).format('DD-MM-YYYY'))
                setOpen(false)
              }}
              onCancel={() => { setOpen(false) }}
            />
            <Text style={styles.dateStyle}>{selectedDate}</Text>
          </>
        </TouchableOpacity>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  textStyles: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: FontFamily.bold,

  },
  mainView: {
    width: '95%',
    backgroundColor: "#E5E5E5",
    height: 40,
    marginTop: 10,
    borderRadius: 10,
    justifyContent: "center",
    paddingLeft: 10
  },
  dateStyle: {
    fontSize: 14,
    fontFamily: FontFamily.bold,
    fontWeight: '600'
  }

})