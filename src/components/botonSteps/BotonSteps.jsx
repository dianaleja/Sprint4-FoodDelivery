import { Button, ChakraProvider, Box } from '@chakra-ui/react';
import React from 'react';

const BotonSteps = () => {
  return (
    <ChakraProvider>
      <Box d="flex" justifyContent="center" alignItems="center" h="100vh">
        <Button bg="#FFE031" width="90%" maxWidth="90vw" height="44px">
          Next
        </Button>
      </Box>
    </ChakraProvider>
  );
};

export default BotonSteps;

