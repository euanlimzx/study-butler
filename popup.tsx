import { ChakraProvider } from "@chakra-ui/react"
import { useState } from "react"
import { Flex, Text } from "@chakra-ui/react"

function IndexPopup() {
  return (
    <ChakraProvider>
      <Flex h="200px" w="200px" justifyContent="center" flexDirection="column" px="30px">
        <Text as="span" textAlign="start">Logged in as <Text as="span" fontWeight="bold" textAlign="start">euanlimzx</Text></Text>
        <Text textAlign="start">Current document selected: Google Docs</Text>
      </Flex>
    </ChakraProvider>
  )
}

export default IndexPopup
