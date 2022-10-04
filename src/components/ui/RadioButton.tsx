import React, { useState, useRef, useEffect } from 'react';
import { Radio, FormControl, Container, Text } from 'native-base';
import { FontFamily } from '../../utils/fontDetails'


type Props = {
  title?: string;
  items: string[];
  dir?: 'row' | 'column';
  onChange: (e: any) => void;
  value: string
  name: string
};


export const RadioButton = ({ title, items, dir = 'column', name, onChange, value }: Props) => {
  return (
    <Container alignSelf={'center'} w={'80%'}>
      <FormControl.Label
        _text={{
          fontSize: 14,
          fontFamily: FontFamily.bold
        }}>
        {title}
      </FormControl.Label>
      <Radio.Group
        flexDirection={dir}
        name={name}
        value={value}
        onChange={onChange}>
        {items.map((itemName) => (
          <Radio key={itemName} value={itemName} my={1} mr={3} bg="white">
            <Text marginRight={5}>
              {itemName}
            </Text>
          </Radio>
        ))}
      </Radio.Group>
    </Container>
  );
};
