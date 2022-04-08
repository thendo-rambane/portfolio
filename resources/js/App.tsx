import { useState } from "react";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
  Container,
} from "@mantine/core";
import MainHeader from "./components/Header";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";

export default function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider theme={{ colorScheme }} withGlobalStyles>
        <MainHeader
          links={[
            { link: "/", label: "Home" },
            { link: "/portfolio", label: "Portfolio" },
            { link: "/blog", label: "Blog" },
            { link: "/contact", label: "Contact" },
          ]}
        />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </Container>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
