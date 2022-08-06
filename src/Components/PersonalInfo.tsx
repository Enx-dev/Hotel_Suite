import { TextInput, Box, Button, Title, Group } from "@mantine/core";
import React, { FormEvent, useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../app/store";
import axios, { AxiosRequestConfig, AxiosRequestHeaders } from "axios";
import {
  personalInfo,
  setPersonalInfo,
  currentStep,
  setStep,
} from "../app/Slice/booking";
import { IconArrowRight } from "@tabler/icons";
import { useStyles } from "./Styles";

const PersonalInfo = () => {
  const PersonalInfo = useAppSelector(personalInfo);
  const Step = useAppSelector(currentStep);
  const dispatch = useAppDispatch();
  const [name, setName] = useState(PersonalInfo.fullname);
  const [email, setEmail] = useState(PersonalInfo.email);
  const [tel, setTel] = useState(PersonalInfo.phone);
  const [telerror, setTelErrror] = useState("");
  const [loading, setLoading] = useState(false);
  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const config: AxiosRequestConfig = {
      headers: {
        apikey: "hMQreFTgUZJq3bkJ4KzhCDufDIqLQY2J",
      },
    };
    const { data } = await axios.get(
      `https://api.apilayer.com/number_verification/validate?number=${tel}`,
      config
    );
    if (data.valid) {
      dispatch(setPersonalInfo({ fullname: name, email: email, phone: tel }));
      dispatch(setStep(Step + 1));
      setLoading(false);
    } else {
      setTelErrror("Invalid Format");
      setLoading(false);
    }
  };
  const { classes } = useStyles();

  return (
    <Box
      component={"form"}
      className={classes.gridBox}
      onSubmit={submitHandler}>
      <Box>
        <Title className={classes.title} order={1}>
          Personal Info
        </Title>
        <Title className={classes.subtTitle} order={2}>
          Plese fill the infomation below
        </Title>
      </Box>
      <TextInput
        className={classes.input}
        placeholder="Your name"
        label="Full name"
        description="This name will reflect on the recipt issused"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextInput
        type="email"
        placeholder="example@gmail.com"
        label="Contact Email"
        description="This email will be used as a contact email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextInput
        type="tel"
        error={telerror}
        placeholder="000-000-000-000"
        label="Contacts phone number"
        description="Enter phone number in international format"
        required
        value={tel}
        onChange={(e) => {
          setTel(e.target.value);
          setTelErrror("");
        }}
      />
      <Button
        loading={loading}
        loaderPosition="left"
        className={classes.gridBtn}
        rightIcon={<IconArrowRight />}
        type="submit">
        Next
      </Button>
    </Box>
  );
};

export default PersonalInfo;
