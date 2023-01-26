import { Flex } from "@chakra-ui/react";
import React from "react";
import AuthModal from "../../Modal/Auth/AuthModal";
import AuthButtons from "./AuthButtons";

type Props = {};

const RightContent: React.FC = ({}: Props) => {
  return (
    <Flex justify="center" align="center">
      <AuthModal />
      <AuthButtons />
    </Flex>
  );
};
export default RightContent;
