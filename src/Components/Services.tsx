import React, { useState } from "react";
import { Box, Button, Checkbox, Group, createStyles } from "@mantine/core";
import { useAppSelector, useAppDispatch } from "../app/store";
import {
  setServices,
  currentStep,
  setStep,
  services,
} from "../app/Slice/booking";
import { IconArrowRight, IconArrowLeft } from "@tabler/icons";
type Props = {};

const Services = (props: Props) => {
  const Step = useAppSelector(currentStep);
  const sev = useAppSelector(services);
  const dispatch = useAppDispatch();
  const [daycare, setDaycare] = useState(sev.Daycare);
  const [feeding, setFeeding] = useState(sev.feeding);
  const [club, setClub] = useState(sev.Club);
  const [special, setSpecial] = useState(sev.specialNeeds);
  const [business, setBusiness] = useState(sev.business);
  const [vehicle, setVeichle] = useState(sev.vehicle);

  const submitPrevhandler = () => {
    dispatch(setStep(Step - 1));
    dispatch(
      setServices({
        Daycare: daycare,
        feeding: feeding,
        Club: club,
        specialNeeds: special,
        vehicle: business,
        business: vehicle,
      })
    );
  };
  const submitNexthandler = () => {
    dispatch(setStep(Step + 1));
    dispatch(
      setServices({
        Daycare: daycare,
        feeding: feeding,
        Club: club,
        specialNeeds: special,
        vehicle: business,
        business: vehicle,
      })
    );
  };

  const useStyles = createStyles((theme) => ({
    checkbox: {
      marginBottom: theme.spacing.md,
    },
  }));
  const { classes } = useStyles();
  return (
    <Box component={"div"}>
      <Checkbox
        className={classes.checkbox}
        checked={daycare}
        onChange={(e) => setDaycare(e.target.checked)}
        label=" Daycare Services(Children under the age of 12)"
      />
      <Checkbox
        className={classes.checkbox}
        checked={feeding}
        onChange={(e) => setFeeding(e.target.checked)}
        label="Would we be responsible for you feeding during your stay here?"
      />
      <Checkbox
        className={classes.checkbox}
        checked={club}
        onChange={(e) => setClub(e.target.checked)}
        label="Access to Vip room in underground Club(Must be above 18 and present an
        Id Card at Club entrance)"
      />
      <Checkbox
        className={classes.checkbox}
        checked={special}
        onChange={(e) => setSpecial(e.target.checked)}
        label="Any one with special needs?"
      />
      <Checkbox
        className={classes.checkbox}
        checked={vehicle}
        onChange={(e) => setVeichle(e.target.checked)}
        label="Are you coming with private vehicle?"
      />
      <Checkbox
        className={classes.checkbox}
        checked={business}
        onChange={(e) => setBusiness(e.target.checked)}
        label="Coming for business reasons?"
      />
      <Group>
        <Button
          leftIcon={<IconArrowLeft />}
          onClick={() => submitPrevhandler()}>
          Prev
        </Button>
        <Button
          rightIcon={<IconArrowRight />}
          onClick={() => submitNexthandler()}>
          Next
        </Button>
      </Group>
    </Box>
  );
};

export default Services;
