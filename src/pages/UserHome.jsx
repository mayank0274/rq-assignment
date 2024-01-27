import { Box } from "@chakra-ui/react";
import React from "react";
import { Profile } from "../components/user/Profile";
import { DataAnalytics } from "../components/user/DataAnalytics";

export const UserHome = () => {
  return (
    <Box
      display={"flex"}
      width={"100%"}
      flexDir={{ base: "column", sm: "column", md: "row", lg: "row" }}
    >
      <Profile />
      <DataAnalytics />
    </Box>
  );
};
