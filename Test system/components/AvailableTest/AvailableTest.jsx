import React, { useState, useEffect } from "react";
import { Box, Container } from "@mui/system";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import api from "../../utils/api";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Link from "next/link";
import { Link as AnchorLink } from "@mui/material";

function AvailableTest() {
  const [Tests, setTests] = React.useState("");
  const handleChange = (event) => {
    setTests(event.target.value);
  };
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: { md: "100vh", xs: "auto" },
          background: "#f4f5f6",
          p: { md: 4 },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            flexDirection: "column",
            background: "white",
            borderRadius: { md: "8px" },
            border: { md: "1px solid #dadce0" },
            boxShadow: { md: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" },
            overflow: "hidden",
          }}
        >
          {/* Title bar */}
          <Box
            sx={{
              width: "100%",
              height: "60px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#3f51b5",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "30px",
                lineHeight: "36px",
                fontStyle: "normal",
                fontWeight: 700,
                color: "white",
                textAlign: "start",
                textTransform: "capitalize",
              }}
            >
              Available tests
            </Typography>
          </Box>
          {/* Instruction Box */}
          <Box
            sx={{
              width: "100%",
              height: "calc(100% - 60px)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              p: 3,
            }}
          >
            <Box sx={{ minWidth: "300px" }}>
              <FormControl size="small" fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Available test
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={Tests}
                  label="Available test"
                  onChange={handleChange}
                  sx={{
                    "&::-webkit-scrollbar": { width: "6px" },
                    "&::-webkit-scrollbar-track": {
                      boxShadow: "inset 0 0 5px grey",
                      borderRadius: "10px",
                    },
                    "&::-webkit-scrollbar-thumb": {
                      background: "red",
                      borderRadius: "10px",
                    },
                    maxHeight: "100px",
                  }}
                >
                  <MenuItem value={10}>
                    <Link href={"/instruction/1"}> 
                    {/* href={`/instruction/${id's}`} */}
                      <AnchorLink
                        sx={{
                          textDecoration: "none",
                          color: "rgba(0, 0, 0, 0.7)",
                        }}
                      >
                        Ten
                      </AnchorLink>
                    </Link>
                  </MenuItem>
                  <MenuItem value={20}>
                    <Link href={"/instruction/2"}>
                      <AnchorLink
                        sx={{
                          textDecoration: "none",
                          color: "rgba(0, 0, 0, 0.7)",
                        }}
                      >
                        twenty
                      </AnchorLink>
                    </Link>
                  </MenuItem>
                  <MenuItem value={30}>
                    <Link href={"/instruction/3"}>
                      <AnchorLink
                        sx={{
                          textDecoration: "none",
                          color: "rgba(0, 0, 0, 0.7)",
                        }}
                      >
                        Thirty
                      </AnchorLink>
                    </Link>
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default AvailableTest;
