import React, { useState, useEffect } from "react";
import { Box, Container } from "@mui/system";
import Button from "@mui/material/Button";
import Link from "next/link";
import { Link as AnchorLink } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";

function Instruction() {
  const router = useRouter();
  const { test_id } = router.query; // Use this ID to request a particular test from backend.
  return (
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
            Practice Test
          </Typography>
        </Box>

        {/* Instruction Box */}
        <Box
          sx={{
            width: "100%",
            height: "calc(100% - 60px)",
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            flexDirection: "column",
            p: 3,
          }}
        >
          <Box
            sx={{
              display: { md: "flex", xs: "none" },
              justifyContent: "center",
              alignItems: "start",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: { md: "20px", xs: "18px" },
                lineHeight: "28px",
                fontStyle: "normal",
                fontWeight: 500,
                color: "#252525",
                textAlign: "start",
                textTransform: "capitalize",
              }}
            >
              72 Questions
            </Typography>
            <Box
              sx={{
                width: "1px",
                height: "26px",
                mx: 3,
                background: "rgb(0,0,0,1)",
              }}
            ></Box>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: { md: "20px", xs: "18px" },
                lineHeight: "28px",
                fontStyle: "normal",
                fontWeight: 500,
                color: "#252525",
                textAlign: "start",
                textTransform: "unset",
              }}
            >
              1 hour 30 minutes
            </Typography>
            <Box
              sx={{
                width: "1px",
                height: "26px",
                mx: 3,
                background: "rgb(0,0,0,1)",
              }}
            ></Box>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: { md: "20px", xs: "18px" },
                lineHeight: "28px",
                fontStyle: "normal",
                fontWeight: 500,
                color: "#252525",
                textAlign: "start",
                textTransform: "unset",
              }}
            >
              85% correct required to pass
            </Typography>
          </Box>
          <Box
            sx={{
              display: { md: "none", xs: "flex" },
              justifyContent: "center",
              alignItems: "start",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: { md: "20px", xs: "18px" },
                lineHeight: "28px",
                fontStyle: "normal",
                fontWeight: 500,
                color: "#252525",
                textAlign: "start",
                textTransform: "capitalize",
              }}
            >
              <Box component={"span"} sx={{ fontSize: "20px" }}>
                Questions:{" "}
              </Box>{" "}
              72
            </Typography>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: { md: "20px", xs: "18px" },
                lineHeight: "28px",
                fontStyle: "normal",
                fontWeight: 500,
                color: "#252525",
                textAlign: "start",
                textTransform: "capitalize",
              }}
            >
              <Box component={"span"} sx={{ fontSize: "20px" }}>
                Time:{" "}
              </Box>{" "}
              1 hour 30 minutes
            </Typography>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: { md: "20px", xs: "18px" },
                lineHeight: "28px",
                fontStyle: "normal",
                fontWeight: 500,
                color: "#252525",
                textAlign: "start",
                textTransform: "capitalize",
              }}
            >
              <Box component={"span"} sx={{ fontSize: "20px" }}>
                Passing marks:{" "}
              </Box>{" "}
              85% correct required to pass
            </Typography>
          </Box>

          {/* Instruction heading */}
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontSize: "24px",
              lineHeight: "32px",
              fontStyle: "normal",
              fontWeight: 600,
              color: "#252525",
              textAlign: "start",
              textTransform: "unset",
              mt: 6,
            }}
          >
            Instructions
          </Typography>

          {/* Instruction Content */}
          <Box sx={{ maxWidth: { md: "70%", xs: "100%" } }}>
            <ul>
              <li>You can pause the test at any time and resume later.</li>
              <li>You can retake the test as many times as you would like.</li>
              <li>
                The progress bar at the top of the screen will show your
                progress as well as time remaining in the test. If you run out
                of time , don't worry; you will still be able to finish the
                test.
              </li>
              <li>
                You can skip a question to come back to at the end of the exam.
              </li>
              <li>
                You can also use "Mark for review" to come back to question you
                are unsure about before you submit your test.
              </li>
              <li>
                If you want to finish the test and see your results immediately,
                press the stop button.
              </li>
            </ul>
          </Box>

          {/* Button to start the test */}
          <Link href="/starttest">
            <AnchorLink
              sx={{
                px: 3,
                py: 1.5,
                background: "#3f51b5",
                color: "white",
                textTransform: "capitalize",
                borderRadius: "8px",
                fontFamily: "Work Sans",
                fontSize: "20px",
                lineHeight: "28px",
                fontStyle: "normal",
                fontWeight: 500,
                alignSelf: { md: "start", xs: "center" },
                cursor: "pointer",
                textDecoration: "none",
                mt: 6,
              }}
            >
              begin test
            </AnchorLink>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}

export default Instruction;
