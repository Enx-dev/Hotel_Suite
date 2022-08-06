import React, { useState } from "react";
import { Button, Container, Box, Title, Group, Modal } from "@mantine/core";
import { useAppDispatch } from "../app/store";
import { reset } from "../app/Slice/booking";
type Props = {};

const Completed = (props: Props) => {
  const [opened, setOpened] = useState(false);
  const dispatch = useAppDispatch();
  return (
    <Container>
      <Box>
        <Title order={5}>Booking details updated</Title>
        <Title sx={{ marginBottom: "1rem" }}>Proceed to Checkout</Title>
      </Box>
      <Group>
        <Button onClick={() => setOpened(true)} sx={{ paddingInline: "2rem" }}>
          Reset
        </Button>
        <Button sx={{ paddingInline: "2rem" }}>Proceed</Button>
      </Group>
      <Modal opened={opened} onClose={() => setOpened(false)}>
        <Title order={3}>This will reset your progress</Title>
        <Group sx={{ marginBlock: "1rem" }}>
          <Button
            onClick={() => dispatch(reset())}
            sx={{ backgroundColor: "red" }}>
            Confirm
          </Button>
        </Group>
      </Modal>
    </Container>
  );
};

export default Completed;
