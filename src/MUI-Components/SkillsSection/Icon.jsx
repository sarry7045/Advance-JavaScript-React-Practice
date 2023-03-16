import { Box, Typography } from "@mui/material";
import React from "react";

const Icon = ({ src, name }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: 6,
        }}
      >
        <img src={src} height="40px" width="40px" alt={name} />
        <Typography variant="body1" sx={{ mt: 1, color: "gray" }}>
          {" "}
          {name}
        </Typography>
      </Box>
    </>
  );
};

export default Icon;
