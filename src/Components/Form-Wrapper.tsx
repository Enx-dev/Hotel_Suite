import React, { useEffect, useRef } from "react";
import PersonalInfo from "./PersonalInfo";
import Duration from "./Duration";
import Services from "./Services";
import AdditionalMessage from "./AdditionalMessage";
import { useAppSelector } from "../app/store";
import { currentStep } from "../app/Slice/booking";
//Components
import { Stepper, Container, Title } from "@mantine/core";
import Completed from "./Completed";
import { useStyles } from "./Styles";
import gsap from "gsap-trial";
type Props = {};

const FormWrapper = (props: Props) => {
  const step = useAppSelector(currentStep);
  const StepRef = useRef<HTMLButtonElement>(null);
  const { classes } = useStyles();
  useEffect(() => {
    gsap
      .timeline()
      .fromTo(
        ".mantine-Stepper-content",
        { opacity: 0.5 },
        { opacity: 1, duration: 1 }
      )
      .fromTo(".mantine-Title-root", { y: 10 }, { y: 0 }, "+=-0.5");
  }, [step]);
  return (
    <Container className={classes.container}>
      <Stepper
        size="xs"
        iconPosition="right"
        active={step}
        orientation="horizontal">
        <Stepper.Step ref={StepRef} className={classes.stepper}>
          <PersonalInfo />
        </Stepper.Step>
        <Stepper.Step ref={StepRef} className={classes.stepper}>
          <Duration />
        </Stepper.Step>
        <Stepper.Step ref={StepRef} className={classes.stepper}>
          <Title className={classes.title} order={1}>
            Additional Services
          </Title>
          <Title className={classes.subtTitle} order={2}>
            Select our additionl services for your added delight(optional)
          </Title>
          <Services />
        </Stepper.Step>
        <Stepper.Step ref={StepRef} className={classes.stepper}>
          <Title className={classes.title} order={1}>
            Additional Message
          </Title>
          <Title className={classes.subtTitle} order={2}>
            please fill additional important infomation not covered in this form
          </Title>
          <AdditionalMessage />
        </Stepper.Step>
        <Stepper.Completed>
          <Completed />
        </Stepper.Completed>
      </Stepper>
      {/* <Box component={"div"}>
        <Title order={1}>{PageTitle[step]}</Title>
        <Box component={"div"}>{DisplayPage()}</Box>

      </Box> */}
    </Container>
  );
};

export default FormWrapper;
