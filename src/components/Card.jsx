import React from "react";

import { Stack} from "@chakra-ui/react"
import {Image} from "@chakra-ui/react"
import {Text} from "@chakra-ui/react"

import {Flex} from "@chakra-ui/react"
import {Box} from "@chakra-ui/react"

const Card = ({ myData }) => {
  const { name, picture, email } = myData;
  
  return (
   <>
  
<Box align='center' justify='space-between'>
    <Flex bg='purple.400' p='3' borderRadius='xl' m='3px' w='70%' justify='space-between' >
<Flex align='center'>
<Stack>
<Text >{name.first+' '+ name.last}</Text>
<Text>{email}</Text>
</Stack>
</Flex>
<Flex>
<Image src={picture.medium} alt="Photo" borderRadius="90px"/>
</Flex>
</Flex>
</Box>


</>
  );
};

export default Card;