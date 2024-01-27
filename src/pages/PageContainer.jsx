import React from "react";
import { Box } from "@chakra-ui/react";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Navigate, Outlet, useOutlet } from "react-router-dom";

export const PageContainer = () => {
  const outlet = useOutlet();
  return (
    <Box display={"flex"}>
      <Sidebar />
      {outlet ? <Outlet /> : <Navigate to={"home"} />}
    </Box>
  );
};
