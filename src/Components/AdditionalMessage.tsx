import React, { useState } from "react";
import { Box, Button, Group, Textarea, createStyles } from "@mantine/core";
import { useAppSelector, useAppDispatch } from "../app/store";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../Firebase/config";
import { IconArrowLeft } from "@tabler/icons";
import {
  additionalInfo,
  setAdditionalInfo,
  currentStep,
  setStep,
  all,
  setLoading,
} from "../app/Slice/booking";
type Props = {};

const AdditionalMessage = (props: Props) => {
  const Message = useAppSelector(additionalInfo);
  const Step = useAppSelector(currentStep);
  const Data = useAppSelector(all);
  const dispatch = useAppDispatch();

  const submitPrev = () => {
    dispatch(setStep(Step - 1));
  };
  const submit = async () => {
    dispatch(setLoading(true));
    await setDoc(doc(db, "Bookings", Data.personalInfo.email), {
      fullname: Data.personalInfo.fullname,
      email: Data.personalInfo.email,
      phoneNumber: Data.personalInfo.phone,
      duration: Data.importantInfo.duration,
      No_of_adults: Data.importantInfo.adults,
      No_of_children: Data.importantInfo.children,
      No_of_rooms: Data.importantInfo.rooms,
      club: Data.services.Club,
      daycare: Data.services.Daycare,
      feeding: Data.services.feeding,
      business: Data.services.feeding,
      vehicle: Data.services.vehicle,
      special_needs: Data.services.specialNeeds,
      message: Data.additionalInfo.message,
    })
      .then(() => dispatch(setLoading(false)))
      .then(() => dispatch(setStep(Step + 1)));
  };

  const useStyles = createStyles((theme) => ({
    textarea: {
      marginBottom: theme.spacing.md,
    },
  }));
  const { classes } = useStyles();

  return (
    <Box component={"div"}>
      <Textarea
        className={classes.textarea}
        value={Message.message}
        onChange={(e) => dispatch(setAdditionalInfo(e.target.value))}
      />
      <Group>
        <Button leftIcon={<IconArrowLeft />} onClick={() => submitPrev()}>
          Prev
        </Button>
        <Button
          loading={Data.loading}
          loaderPosition="right"
          onClick={() => submit()}>
          Submit
        </Button>
      </Group>
    </Box>
  );
};

export default AdditionalMessage;
