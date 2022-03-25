import React from 'react';
import { Flex } from '../src/comp-flex';

export default { title: 'Flex' };

export const primary = () => (
  <Flex>
    <Flex>
      Hello Flex default child 1
    </Flex>
    <Flex>
      Hello Flex default child 2
    </Flex>
  </Flex>
  );

export const secondary = () => (
  <Flex flexDirection='column'>
    <Flex>
      Hello Flex column child 1
    </Flex>
    <Flex>
      Hello Flex column child 2
    </Flex>
  </Flex>
);
