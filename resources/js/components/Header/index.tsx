import React, { useState } from "react";
// import { ReactComponent as TRLogo } from "../../../images/logo.svg";

import { createStyles, Header, Container, Group, Burger } from "@mantine/core";
import { useBooleanToggle } from "@mantine/hooks";
import { HeaderLinkProps, HeaderSimpleProps } from "./types";
import ColourSchemeToggle from "../ColourSchemeToggle";
import Logo from "../Logo";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("xs")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
          : theme.colors[theme.primaryColor][0],
      color:
        theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 3 : 7],
    },
  },
}));

function StyledLink(props: HeaderLinkProps) {
  const { classes, cx } = useStyles();
  let resolved = useResolvedPath(props.to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <Link
      to={props.to}
      className={cx(classes.link, {
        [classes.linkActive]: match,
      })}
    >
      {props.label}
    </Link>
  );
}

function MainHeader({ links }: HeaderSimpleProps) {
  const [opened, toggleOpened] = useBooleanToggle(false);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <StyledLink label={link.label} to={link.link} key={link.label} />
  ));

  return (
    <Header height={60} mb={120}>
      <Container className={classes.header}>
        <Logo />
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        <Burger
          opened={opened}
          onClick={() => toggleOpened()}
          className={classes.burger}
          size="sm"
        />
      </Container>
    </Header>
  );
}

export default MainHeader;
