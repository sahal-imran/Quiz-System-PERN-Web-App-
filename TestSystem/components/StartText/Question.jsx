import React, { useEffect } from "react";
import { Box, Typography, Checkbox } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import $ from "jquery";

const Question = ({
  activeQuestion,
  showParticularQuestionResult,
  questions,
  selectedAnswers,
  answeredQuestions,
  setSelectedAnswers,
}) => {
  useEffect(() => {
    /*** jquery for shuffeling stems */
    $.fn.shuffleChildren = function () {
      $.each(this.get(), function (index, el) {
        var $el = $(el);
        var $find = $el.children();

        $find.sort(function () {
          return 0.5 - Math.random();
        });

        $el.empty();
        $find.appendTo($el);
      });
    };
    $("#stems-parent-element").shuffleChildren();
  }, []);
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          flexDirection: "column",
          minHeight: "100px",
          p: 1,
          mt: 4,
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
          }}
        >
          Question {activeQuestion + 1}.
        </Typography>
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontSize: "18px",
            lineHeight: "26px",
            fontStyle: "normal",
            fontWeight: 500,
            color: "#252525",
            textAlign: "start",
            textTransform: "unset",
            mt: 0.5,
          }}
        >
          {questions[activeQuestion]?.question}
        </Typography>
      </Box>
      {/* Picture if any */}
      {questions[activeQuestion]?.image_flag > 0 && (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            flexDirection: "column",
            minHeight: "100px",
            p: 1,
            my: 2,
          }}
        >
          <img
            src={questions[activeQuestion]?.image_url}
            alt="picture"
            style={{
              height: "200px",
              objectFit: "contain",
              maxWidth: "100%",
            }}
          />
        </Box>
      )}

      {/* Options */}

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          flexDirection: "column",
          minHeight: "100px",
          p: 1,
          mb: 2,
        }}
        id="stems-parent-element"
      >
        {questions[activeQuestion]?.stems?.map((s, i) => (
          // <RadioGroup
          //   aria-labelledby="demo-controlled-radio-buttons-group"
          //   name="controlled-radio-buttons-group"
          //   value={value}
          //   onChange={handleChange}
          //   sx={{ width: "100%" }}
          //   key={i}
          // >

          <Box
            sx={
              questions[activeQuestion]?.answer?.filter((q) => q == i + 1)
                .length > 0 && showParticularQuestionResult
                ? {
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    px: 2,
                    borderRadius: "30px",
                    border: "1px solid #3f51b5",
                    background: "rgb(9,230,97,0.1)",
                    my: 0.5,
                  }
                : selectedAnswers?.filter((s) => s == i + 1)?.length > 0 &&
                  showParticularQuestionResult
                ? {
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    px: 2,
                    borderRadius: "30px",
                    border: "1px solid #3f51b5",
                    background: "rgb(230,9,97,0.1)",
                    my: 0.5,
                  }
                : {
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    px: 2,
                    borderRadius: "30px",
                    // border: "1px solid #3f51b5",
                    border: "1px solid lightgray",
                    // background: "rgb(9,230,97,0.1)",
                    background: "rgb(200,200,200,0.1)",
                    my: 0.5,
                  }
            }
            key={i}
          >
            {/* {console.log(
          "testing 77",
          selectedAnswers,
          i + 1,
          selectedAnswers?.filter((s) => s == i + 1)?.length > 0
        )} */}
            <FormControlLabel
              value={s}
              control={<Checkbox />}
              label={s}
              onClick={(e) => {
                // console.log(
                //   "option selected",
                //   selectedAnswers?.includes(i + 1)
                // );
                if (selectedAnswers?.includes(i + 1)) {
                  setSelectedAnswers(selectedAnswers.filter((a) => a != i + 1));
                } else {
                  setSelectedAnswers([...selectedAnswers, i + 1]);
                }
              }}
              checked={
                answeredQuestions
                  ?.filter((a) => a?.questionId == activeQuestion + 1)[0]
                  ?.selectedAnswer?.includes(i + 1)
                  ? true
                  : false
              }
            />
            {/* {console.log(
          "testig 7",
          answeredQuestions
            ?.filter(
              (a) => a?.questionId == activeQuestion + 1
            )[0]
            ?.selectedAnswer?.includes(i + 1)
        )} */}
            {showParticularQuestionResult && (
              <>
                {/* {answeredQuestions?.find(
                (a) =>
                  a?.questionId == questions[activeQuestion]?.id
              )?.selectedAnswer[0] ==
                i + 1 && (
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "18px",
                    lineHeight: "26px",
                    fontStyle: "normal",
                    fontWeight: 500,
                    color: "#252525",
                    textAlign: "start",
                    textTransform: "unset",
                  }}
                >
                  selected
                </Typography>
              )} */}

                {questions[activeQuestion]?.answer?.filter((q) => q == i + 1)
                  .length > 0 && (
                  <Typography
                    sx={{
                      fontFamily: "Work Sans",
                      fontSize: "18px",
                      lineHeight: "26px",
                      fontStyle: "normal",
                      fontWeight: 500,
                      color: "#252525",
                      textAlign: "start",
                      textTransform: "unset",
                    }}
                  >
                    Correct
                  </Typography>
                )}
              </>
            )}
          </Box>
          // </RadioGroup>
        ))}
      </Box>

      {/* Explanation if any */}
      {showParticularQuestionResult && (
        <>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
              flexDirection: "column",
              minHeight: "100px",
              p: 1,
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
              }}
            >
              Explanation:
            </Typography>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "18px",
                lineHeight: "26px",
                fontStyle: "normal",
                fontWeight: 500,
                color: "#252525",
                textAlign: "start",
                textTransform: "unset",
                mt: 0.5,
              }}
            >
              {questions[activeQuestion]?.explanation}
            </Typography>
          </Box>
          {questions[activeQuestion]?.explain_url && (
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
                flexDirection: "column",
                minHeight: "100px",
                p: 1,
                my: 2,
              }}
            >
              <img
                src={questions[activeQuestion]?.explain_url}
                alt="picture"
                style={{
                  height: "200px",
                  objectFit: "contain",
                  maxWidth: "100%",
                }}
              />
            </Box>
          )}
        </>
      )}
    </>
  );
};

export default Question;
