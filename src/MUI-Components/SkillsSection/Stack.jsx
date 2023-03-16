import React from "react";
import { styled, Box, Typography } from "@mui/material";
import { icons } from "./IconsData";
import Icon from "./Icon";

const Stack = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    maxWidth: "1300px",
    display: "flex",
    justifyContent: "space-between",
    mx: "auto",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  }));

  const StackBox = styled(Box)(({ theme }) => ({
    marginLeft: "1.5rem",
    flex: 1,
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
      marginLeft: "0",
      marginTop: "3rem",
    },
  }));
  return (
    <>
      <Box sx={{ maxWidth: "1300px", mx: "auto", my: 12 }}>
        <CustomBox sx={{ my: 5, padding: 2 }}>
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h5"
              sx={{ color: "black", textAlign: "center", mb: 3 }}
            >
              Programming Skills{" "}
            </Typography>

            <Typography
              variant="h5"
              sx={{ color: "black", textAlign: "center", mb: 3 }}
            >
              Here's what I can help you with.{" "}
            </Typography>
          </Box>
          <StackBox>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {icons.map((item, i) => {
                if (i < 2) {
                  return <Icon key={item.id} name={item.name} src={item.src} />;
                } else {
                  return "";
                }
              })}
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {icons.map((item, i) => {
                if (i >= 2 && i < 4) {
                  return <Icon key={item.id} name={item.name} src={item.src} />;
                } else {
                  return "";
                }
              })}
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {icons.map((item, i) => {
                if (i >= 4 && i < 6) {
                  return <Icon key={item.id} name={item.name} src={item.src} />;
                } else {
                  return "";
                }
              })}
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {icons.map((item, i) => {
                if (i >= 6 && i < 8) {
                  return <Icon key={item.id} name={item.name} src={item.src} />;
                } else {
                  return "";
                }
              })}
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {icons.map((item, i) => {
                if (i >= 8 && i < 10) {
                  return <Icon key={item.id} name={item.name} src={item.src} />;
                } else {
                  return "";
                }
              })}
            </Box>

            {/* <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {icons.map((item, i) => {
                if (i >= 10 && i < 12) {
                  return <Icon key={item.id} name={item.name} src={item.src} />;
                } else {
                  return "";
                }
              })}
            </Box> */}
          </StackBox>
        </CustomBox>
      </Box>
    </>
  );
};

export default Stack;
