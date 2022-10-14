import React, { useState, useEffect } from "react";
import { Box, Container } from "@mui/system";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useTimer } from "react-timer-hook";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import IconButton from "@mui/material/IconButton";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Divider from "@mui/material/Divider";
import api from "../../utils/api";
import EndScreen from "../EndScreen/EndScreen";
import Question from "./Question";

function Start_Test() {
  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 5400);

  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });
  const [Progress, Set_Progress] = useState(0);
  const [activeState, setActiveState] = useState("play");

  // useEffect(() => {
  //   start;
  //   return () => {};
  // }, [Progress]);

  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  /************** */
  const [isTestEnded, setIsTestEnded] = useState(false);
  const [questions, setQuestions] = useState([]);
  //question array starts with 0
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [isQuestionAnswered, setIsQuestionAnswered] = useState(false);
  const [results, setResults] = useState([]);
  const [showParticularQuestionResult, setShowParticularQuestionResult] =
    useState(false);

  useState(() => {
    // let x = (activeQuestion / totalQuestions) * 100;
    // Set_Progress(parseInt(x));
  }, [activeQuestion]);

  useEffect(() => {
    api
      .get("/questions")
      .then((res) => {
        console.log("questions", res?.data);
        /*****sample test */
        let x = res?.data;
        let shuffled = shuffle(res?.data);

        shuffled = shuffled?.map((s, i) => {
          let obj = Object.assign(s, { id: i + 1 });
          return obj;
        });
        console.log("shuffled question", shuffled);
        /**************** */
        setQuestions(shuffled);
        setTotalQuestions(res?.data?.length);
      })
      .catch((err) => console.log(err));
  }, []);

  const nextQuestion = () => {
    /********** saving result */
    let resStatus = true;
    questions[activeQuestion]?.answer?.map((a) => {
      if (!selectedAnswers?.includes(parseInt(a))) {
        resStatus = false;
      }
    });
    console.log("res", resStatus);
    let arr = results;
    let obj = {
      questionId: activeQuestion + 1,
      resultStatus: resStatus,
    };
    arr = arr?.filter((a) => a?.questionId != activeQuestion + 1);
    // arr = arr?.filter((a) =>
    //   console.log("tessssssst", a?.questionId, activeQuestion + 1)
    // );
    arr.push(obj);
    setResults(arr);
    console.log("result array", results);

    /*********** */
    if (activeQuestion < totalQuestions - 1) {
      setIsQuestionAnswered(false);
      setSelectedAnswers([]);
      setActiveQuestion(activeQuestion + 1);
      setShowParticularQuestionResult(false);
    } else if (activeQuestion == totalQuestions - 1) {
      // console.log("test results", results);
      pause();
      setIsTestEnded(true);
    } else {
      //do nothing
    }
  };
  const prevQuestion = () => {
    if (activeQuestion == 0) {
      //do nothing
    } else {
      setActiveQuestion(activeQuestion - 1);
    }
  };
  const score = () => {
    setShowParticularQuestionResult(true);
    /******* chck if answer is correct */
    let correctAnswers = questions[activeQuestion]?.answer;
    // console.log("correctAnswers", correctAnswers);
    // console.log("answeredQuestions", answeredQuestions);

    // console.log(
    //   "answeredQuestions",
    //   answeredQuestions.find((a) => a)
    // );
  };
  const onSelectOption = () => {
    // console.log("selected ansers", selectedAnswers);
    /*** removing old anwer*/

    let SelAns = selectedAnswers;
    SelAns = SelAns?.filter((a) => a?.questionId !== activeQuestion + 1);
    console.log("SelAns", SelAns);
    /******** */

    let answerObject = {};
    if (selectedAnswers?.length > 0) {
      answerObject = {
        questionId: questions[activeQuestion]?.id,
        selectedAnswer: SelAns,
      };
      let array = answeredQuestions;
      /**** */
      array = array?.filter((a) => a?.questionId != activeQuestion + 1);

      /*** */
      array.push(answerObject);
      console.log("array of ansers", array);
      setAnsweredQuestions(array);
      setIsQuestionAnswered(true);
    }
  };

  useEffect(() => {
    onSelectOption();
    // console.log("selectedanswers", selectedAnswers);
  }, [selectedAnswers]);
  useEffect(() => {
    if (
      answeredQuestions?.filter((a) => a?.questionId == activeQuestion + 1)
        ?.length > 0
    ) {
      setIsQuestionAnswered(true);
    } else {
      setIsQuestionAnswered(false);
    }
  }, [activeQuestion]);

  const refreshTest = () => {
    window?.location?.reload();
    // restart();
    // setIsTestEnded(false);
    // setActiveQuestion(0);
    // setAnsweredQuestions([]);
    // setSelectedAnswers([]);
    // setIsQuestionAnswered(false);
    // setResults([]);
    // setShowParticularQuestionResult(false);
  };

  return (
    <>
      {isTestEnded ? (
        <EndScreen
          results={results}
          totalQuestions={totalQuestions}
          refreshTest={refreshTest}
          timeTaken={{
            seconds: 60 - seconds,
            minutes: hours > 0 ? 30 - minutes : 30 + (60 - minutes),
          }}
          pauseTimer={pause}
          resumeTimer={resume}
          restartTimer={restart}
        />
      ) : (
        <Box
          sx={{
            width: "100%",
            background: "#f4f5f6",
            p: { md: 4 },
            pb: { md: 4, xs: 4 },
          }}
        >
          <Container
            maxWidth="lg"
            sx={{
              minHeight: { md: "100vh", xs: "auto" },
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              flexDirection: "column",
              background: "white",
              borderRadius: { md: "8px" },
              border: { md: "1px solid #dadce0" },
              boxShadow: { md: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" },
              p: { md: 2 },
            }}
          >
            {/* Progress Bar */}
            <Box
              sx={{
                width: { md: "100%", xs: "100vw" },
                borderRadius: { md: "50px" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: { md: "row", xs: "column" },
                background: "#3f51b5",
                p: { md: 1, xs: 2 },
              }}
            >
              <Box
                sx={{
                  width: { md: "5%" },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mr: { md: 1 },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "16px",
                    lineHeight: "22px",
                    fontStyle: "normal",
                    fontWeight: 500,
                    color: "white",
                  }}
                >
                  {activeQuestion + 1}/{totalQuestions}
                </Typography>
              </Box>

              <Box
                sx={{
                  width: { md: "70%", xs: "100%" },
                  mx: { md: 1 },
                  my: { md: 0, xs: 2 },
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "8px",
                    borderRadius: "30px",
                    background: "white",
                  }}
                >
                  <Box
                    sx={{
                      // width: `${Progress}%`,
                      width: `${
                        ((activeQuestion + 1) / totalQuestions) * 100
                      }%`,
                      height: "8px",
                      borderRadius: "30px",
                      background: "green",
                    }}
                  ></Box>
                </Box>
              </Box>

              <Box
                sx={{
                  width: { md: "24%" },
                  ml: { md: 1 },
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <AccessTimeIcon
                    sx={{ fontSize: "22px", color: "white", mr: 0.5 }}
                  />
                  <Typography
                    sx={{
                      fontFamily: "Work Sans",
                      fontSize: "16px",
                      lineHeight: "22px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      color: "white",
                      width: "60px",
                    }}
                  >
                    {hours + ":" + minutes + ":" + seconds}
                  </Typography>
                </Box>
                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  sx={{ background: "white", mx: { md: 0, xs: 1 } }}
                />
                <IconButton
                  sx={{
                    background: "white",
                    "&:hover": { background: "white" },
                  }}
                  size="small"
                  onClick={() => {
                    if (activeState == "play") {
                      setActiveState("pause");
                      pause();
                    } else {
                      setActiveState("play");
                      resume();
                    }
                  }}
                >
                  {activeState == "play" ? (
                    <PauseIcon sx={{ color: "#3f51b5" }} />
                  ) : (
                    <PlayArrowIcon sx={{ color: "#3f51b5" }} />
                  )}
                </IconButton>
                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  sx={{ background: "white", mx: { md: 0, xs: 1 } }}
                />
                <Button
                  variant="contained"
                  sx={{
                    textTransform: "unset",
                    color: "",
                    background: "white",
                    "&:hover": { background: "white" },
                    borderRadius: "30px",
                    color: "#3f51b5",
                    fontFamily: "Work Sans",
                    fontSize: "16px",
                    lineHeight: "22px",
                    fontStyle: "normal",
                    fontWeight: 500,
                  }}
                  onClick={() => {
                    pause();
                    setIsTestEnded(true);
                  }}
                >
                  Finish test
                </Button>
              </Box>
            </Box>

            {/* Question */}
            {questions?.length > 0 && (
              <Question
                questions={questions}
                showParticularQuestionResult={showParticularQuestionResult}
                activeQuestion={activeQuestion}
                selectedAnswers={selectedAnswers}
                answeredQuestions={answeredQuestions}
                setSelectedAnswers={setSelectedAnswers}
              />
            )}

            {/* Button */}
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: { md: "row", xs: "column" },
                mt: 6,
                px: 1,
              }}
            >
              <Button
                variant="contained"
                sx={{
                  background: "#3f51b5",
                  color: "white",
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
                  boxShadow: "none",
                  "&:hover": { background: "#3f51b5" },
                  width: { md: "120px", xs: "100%" },
                }}
                onClick={() => prevQuestion()}
                disabled={activeState == "pause" ? true : activeQuestion == 0}
              >
                Previous
              </Button>
              <Button
                variant="contained"
                sx={{
                  background: "#3f51b5",
                  color: "white",
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
                  boxShadow: "none",
                  "&:hover": { background: "#3f51b5" },
                  width: { md: "120px", xs: "100%" },
                  mx: { md: 2 },
                  my: { md: 0, xs: 2 },
                }}
                onClick={() => score()}
                disabled={
                  activeState == "pause"
                    ? true
                    : isQuestionAnswered
                    ? false
                    : true
                }
              >
                Score
              </Button>
              <Button
                variant="contained"
                sx={{
                  background: "#3f51b5",
                  color: "white",
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
                  boxShadow: "none",
                  "&:hover": { background: "#3f51b5" },
                  width: { md: "120px", xs: "100%" },
                }}
                onClick={() => nextQuestion()}
                disabled={
                  activeState == "pause"
                    ? true
                    : activeQuestion < totalQuestions - 1
                    ? false
                    : totalQuestions != answeredQuestions?.length
                    ? true
                    : false
                }
              >
                {activeQuestion == totalQuestions - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </Container>
        </Box>
      )}
    </>
  );
}

export default Start_Test;

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
