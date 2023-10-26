/**
 * @fileoverview Defines Search.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import {
  Flex,
  InputGroup,
  InputLeftElement,
  Input,
  IconButton,
} from '@chakra-ui/react';
import { FC } from 'react';
import { FiSearch, FiBell } from 'react-icons/fi';

export type Props = {
  notifies: number;
};

const Component: FC<Props> = ({ notifies }: Props) => (
  <Flex alignContent={'center'}>
    <InputGroup
      backgroundColor={'white'}
      mb={4}
      border={'none'}
      borderColor={'white'}
      borderRadius="10px"
      mr={2}
    >
      <InputLeftElement pointerEvents={'none'}>
        <FiSearch color={'gray'} />
      </InputLeftElement>
      <Input type={'number'} placeholder={'Search'} borderRadius={'10px'} />
    </InputGroup>
    <IconButton
      aria-label={'Notifications'}
      icon={<FiBell />}
      fontSize={'sm'}
      bgColor={'white'}
      borderRadius={'50%'}
      p={'10px'}
    />
    <Flex
      w={30}
      h={25}
      backgroundColor={'deltaColor2.500'}
      borderRadius={'50%'}
      color={'white'}
      align={'center'}
      justify={'center'}
      ml={'-3'}
      mt={'-2'}
      zIndex={'100'}
      fontSize={'xs'}
    >
      {notifies}
    </Flex>
  </Flex>
);

Component.displayName = 'Search';

export default Component;