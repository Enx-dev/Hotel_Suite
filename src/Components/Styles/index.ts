import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  container: {
    marginBlock: theme.spacing.lg,
    maxWidth: "500px",
  },
  stepper: {
    marginBlock: "1rem",
  },
  title: {
    color: theme.colors.Amber[6],
  },
  subtTitle: {
    color: theme.colors.Amber[4],
    fontSize: theme.fontSizes.md,
    marginBottom: "1rem",
  },
  gridBox: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.md,
    marginTop: theme.spacing.lg,
  },
  gridBtn: {
    alignSelf: "baseline",
    paddingInline: theme.spacing.md,
  },
  input: {
    color: theme.colors.Amber[1],
  },
}));
