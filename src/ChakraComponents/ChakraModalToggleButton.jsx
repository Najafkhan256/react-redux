import { Button } from "@chakra-ui/react";
import React from "react";

const ChakraModalToggleButton = ({ onOpen }) => {
  return (
    <div>
      <Button onClick={onOpen}>Open Modal</Button>
    </div>
  );
};

export default ChakraModalToggleButton;
