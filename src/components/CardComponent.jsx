import React from "react";
import Card from "./Card";

import { InputGroup,Input,InputLeftElement } from '@chakra-ui/react'
import { Stack} from "@chakra-ui/react"
import { Button} from "@chakra-ui/react"
import {Image} from "@chakra-ui/react"
import {Text} from "@chakra-ui/react"
import {Heading} from "@chakra-ui/react"
import {Flex} from "@chakra-ui/react"
import {Box} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

const CardComponent = ({ cardInfo }) => {
  const history = useNavigate()
  
  return (<>
  <Button m='10px' bg='red'  onClick={() => history("/Login")}>
        Logout
      </Button>
    <Flex p='4' justify='center' align='center' >
      
    <Heading as='h1'>CONTACT LIST</Heading>
 </Flex>
 <Box p='4'>
 <InputGroup >
 <InputLeftElement 
  pointerEvents='none'
  borderColor='whiteAlpha.100'  />
 <Input type='tel' placeholder='Search' borderColor='whiteAlpha.100' color='white' />
 </InputGroup>
 </Box>

        <div className="grid grid-three-column">
          {cardInfo.map((curVal, id) => {
            return <Card key={id} myData={curVal} />;
          })}
        </div>
    
    </>
  );
};

export default CardComponent;