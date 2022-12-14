import React from 'react';
import {Box, Text, Image, Center, VStack, Heading} from 'native-base';

const header = ({title, subtitle}: any) => {
  return (
    <Box>
      <Center>
        <VStack space={4} alignItems="center">
          {/* <Image source={witbiticon} alt="Alternate Text" size="xl" /> */}
          {title && <Heading>{title}</Heading>}
          {subtitle && <Text>{subtitle}</Text>}
        </VStack>
      </Center>
    </Box>
  );
};

export default header;
