import React, { FormEvent, useState } from "react";
import { DateRangePicker, DateRangePickerValue } from "@mantine/dates";
import { Box, Button, NumberInput, Group, createStyles } from "@mantine/core";
import { useAppSelector, useAppDispatch } from "../app/store";
import {
  importantInfo,
  setImportantInfo,
  currentStep,
  setStep,
} from "../app/Slice/booking";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons";
import dayjs from "dayjs";

type Props = {};
const Duration = (props: Props) => {
  const dispatch = useAppDispatch();
  const Step = useAppSelector(currentStep);
  const ImportantInfo = useAppSelector(importantInfo);
  const days =
    ImportantInfo.duration !== ""
      ? JSON.parse(ImportantInfo.duration)
      : [null, null];

  const validateDate = (d: Date) => {
    if (d === null) {
      return null;
    } else {
      return new Date(d);
    }
  };
  const [date, setDate] = useState<DateRangePickerValue>([
    validateDate(days[0]),
    validateDate(days[1]),
  ]);
  const [adults, setAdults] = useState(ImportantInfo.adults);
  const [children, setChildren] = useState(ImportantInfo.children);
  const [rooms, setRooms] = useState(ImportantInfo.rooms);
  const [roomserror, setRoomError] = useState("");
  const [adulterror, setAdultError] = useState("");
  const [dateerror, setDateError] = useState("");

  const submitnextHandler = (e: FormEvent) => {
    e.preventDefault();
    if (adults === 0) {
      setAdultError("Minimum of 1 Adult must be present");
      return;
    }
    if (rooms === 0) {
      setRoomError("Minimum of 1 Room must be booked");
      return;
    }
    if (date[0] === null) {
      setDateError("Pick a date");
      return;
    }

    dispatch(setStep(Step + 1));
    dispatch(
      setImportantInfo({
        duration: JSON.stringify(date),
        rooms: rooms,
        adults: adults,
        children: children,
      })
    );
  };
  const submitprevHandler = () => {
    dispatch(
      setImportantInfo({
        duration: JSON.stringify(date),
        adults: adults,
        children: children,
        rooms: rooms,
      })
    );

    dispatch(setStep(Step - 1));
  };

  const useStyles = createStyles((theme) => ({
    gridBox: {
      display: "flex",
      flexDirection: "column",
      gap: theme.spacing.md,
      marginTop: theme.spacing.lg,
    },
    gridBtn: {
      paddingInline: theme.spacing.md,
    },
    input: {
      color: theme.colors.Amber[1],
    },
    weekend: {
      color: `${theme.colors.Marigold[1]} !important`,
    },
  }));
  const { classes, cx } = useStyles();

  return (
    <Box
      className={classes.gridBox}
      component="form"
      onSubmit={submitnextHandler}>
      <DateRangePicker
        error={dateerror}
        disableOutsideEvents
        required
        minDate={new Date()}
        allowLevelChange={false}
        dropdownType="modal"
        description="CheckIn date - CheckOut date"
        label="Select duration of stay"
        value={date}
        onChange={(e) => {
          setDate(e);
          setDateError("");
        }}
        dayClassName={(date, modifiers) =>
          cx({
            [classes.weekend]: modifiers.weekend,
          })
        }
      />
      <NumberInput
        label="Number of Adults"
        max={50}
        min={1}
        required
        hideControls
        description="A minimum of 1 is Required"
        error={adulterror}
        value={adults}
        onChange={(e: number) => {
          setAdults(e);
          setAdultError("");
        }}
      />
      <NumberInput
        label="Number of Children"
        max={50}
        min={0}
        description="Under 13"
        hideControls
        value={children}
        onChange={(e: number) => setChildren(e)}
      />
      <NumberInput
        label="Rooms"
        max={10}
        min={1}
        description="Maximum of 10! need more contact us"
        required
        error={roomserror}
        value={rooms}
        onChange={(e: number) => {
          setRooms(e);
          setRoomError("");
        }}
      />
      <Group>
        <Button
          leftIcon={<IconArrowLeft />}
          className={classes.gridBtn}
          type="button"
          onClick={() => submitprevHandler()}>
          Prev
        </Button>
        <Button
          rightIcon={<IconArrowRight />}
          className={classes.gridBtn}
          type="submit">
          Next
        </Button>
      </Group>
    </Box>
  );
};

export default Duration;
