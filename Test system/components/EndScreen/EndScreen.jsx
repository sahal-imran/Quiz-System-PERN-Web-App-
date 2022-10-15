import React, { useState, useEffect } from "react";
import { Box, Container } from "@mui/system";
import Button from "@mui/material/Button";
import Link from "next/link";
import { Link as AnchorLink } from "@mui/material";
import Typography from "@mui/material/Typography";

function EndScreen({
  results,
  refreshTest,
  totalQuestions,
  timeTaken,
  resumeTimer,
  restartTimer,
}) {
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  useEffect(() => {
    console.log("end results", results);
    let c = 0,
      w = 0;
    results?.map((r) => {
      r?.resultStatus ? c++ : w++;
    });
    setCorrect(c);
    setWrong(w);
  }, [results]);

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
            Test has been ended
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
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 2,
            }}
          >
            Total questions:
            <Box
              component={"span"}
              sx={{
                ml: 1,
                fontWeight: 400,
                color: "#252525",
                textAlign: "start",
              }}
            >
              {totalQuestions}
            </Box>
          </Typography>
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
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 1,
            }}
          >
            Correct questions:
            <Box
              component={"span"}
              sx={{
                ml: 1,
                fontWeight: 400,
                color: "#252525",
                textAlign: "start",
              }}
            >
              {correct}
            </Box>
          </Typography>
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
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 1,
            }}
          >
            Percentage:
            <Box
              component={"span"}
              sx={{
                ml: 1,
                fontWeight: 400,
                color: "#252525",
                textAlign: "start",
              }}
            >
              {((correct / totalQuestions) * 100).toFixed(2)}
            </Box>
          </Typography>
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
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 1,
            }}
          >
            Wrong questions:
            <Box
              component={"span"}
              sx={{
                ml: 1,
                fontWeight: 400,
                color: "#252525",
                textAlign: "start",
              }}
            >
              {wrong}
            </Box>
          </Typography>
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
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 1,
            }}
          >
            Time Taken:
            <Box
              component={"span"}
              sx={{
                ml: 1,
                fontWeight: 400,
                color: "#252525",
                textAlign: "start",
              }}
            >
              {timeTaken?.minutes < 60 ? (
                <>
                  {timeTaken?.minutes - 1} minutes {timeTaken?.seconds} seconds
                </>
              ) : (
                <>
                  1 hour {timeTaken?.minutes - 60} minutes {timeTaken?.seconds}{" "}
                  seconds
                </>
              )}
            </Box>
          </Typography>
          {/* <Link
            href="#"
            //   href="/starttest"
            onClick={() => window.location.reload()} */}
          {/* > */}
          <AnchorLink
            onClick={() => refreshTest()}
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
            Want to give test again?
          </AnchorLink>
          {/* </Link> */}
        </Box>
      </Container>
    </Box>
  );
}

export default EndScreen;
