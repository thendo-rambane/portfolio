import { createStyles, Paper, Space, Text, Title } from "@mantine/core";
import React from "react";

type Props = {};

const useStyles = createStyles((theme) => ({
  text: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
  },
}));

export default function Home({}: Props) {
  return (
    <Paper
      shadow="xs"
      p="md"
      sx={(theme) => ({
        backgroundColor: theme.colors.gray[9],
      })}
    >
      <Title>Hello, my name is Thendo </Title>
      <Space h="md" />
      <Text size="xl">
        I am a web developer currently based in Pretoria South Africa, working
        primarily with React, Vue, and Laravel.
      </Text>
    </Paper>
  );
}
