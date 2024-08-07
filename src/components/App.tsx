"use client";
import {
  AppShell,
  ColorSchemeProvider,
  Header,
  MantineProvider,
  ActionIcon,
  Group,
  NavLink,
  SimpleGrid,
  Center,
  LoadingOverlay,
} from "@mantine/core";
import type { ColorScheme } from "@mantine/core";
import { useColorScheme } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { TbSun, TbMoonStars } from "react-icons/tb";
import { Archieve } from "./archieve/Archieve";
import { Hero } from "./common/Hero";
import { Home } from "./home/Home";
import { Projects } from "./projects/Projects";

export const App = () => {
  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] =
    useState<ColorScheme>(preferredColorScheme);
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  const [tab, setTab] = useState("home");
  const [isClient, setIsClient] = useState(false);

  const app = () => {
    if (isClient && tab) {
      return (
        <ColorSchemeProvider
          colorScheme={colorScheme}
          toggleColorScheme={toggleColorScheme}
        >
          <MantineProvider
            theme={{ colorScheme }}
            withGlobalStyles
            withNormalizeCSS
          >
            <AppShell
              padding="md"
              navbarOffsetBreakpoint="sm"
              asideOffsetBreakpoint="sm"
              header={
                <Header height={50}>
                  <Group position="apart">
                    <ActionIcon
                      variant="outline"
                      color={colorScheme === "dark" ? "green.5" : "green.9"}
                      onClick={() => toggleColorScheme()}
                      style={{ margin: "10px" }}
                    >
                      {colorScheme === "dark" ? <TbSun /> : <TbMoonStars />}
                    </ActionIcon>
                    <SimpleGrid
                      cols={3}
                      spacing={0}
                      style={{
                        height: 50,
                        marginTop: 0,
                        marginBottom: 0,
                      }}
                    >
                      <NavLink
                        label={<Center>HOME</Center>}
                        color={colorScheme === "dark" ? "green.5" : "green.9"}
                        active={tab === "home"}
                        onClick={() => setTab("home")}
                      />
                      <NavLink
                        label={<Center>PROJECTS</Center>}
                        color={colorScheme === "dark" ? "green.5" : "green.9"}
                        active={tab === "projects"}
                        onClick={() => setTab("projects")}
                      />
                      <NavLink
                        label={<Center>ARCHIVE</Center>}
                        color={colorScheme === "dark" ? "green.5" : "green.9"}
                        active={tab === "archive"}
                        onClick={() => setTab("archive")}
                      />
                    </SimpleGrid>
                  </Group>
                </Header>
              }
            >
              <Hero />
              {tab === "home" ? (
                <Home />
              ) : tab === "projects" ? (
                <Projects />
              ) : (
                <Archieve />
              )}
            </AppShell>
          </MantineProvider>
        </ColorSchemeProvider>
      );
    } else {
      return (
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            translate: "-50% -50%",
          }}
        >
          <LoadingOverlay
            loaderProps={{
              size: "lg",
              color: colorScheme === "dark" ? "green.5" : "green.9",
              variant: "dots",
            }}
            visible={true}
          />
        </div>
      );
    }
  };
  useEffect(() => {
    setIsClient(true);
  }, []);

  return <>{app()}</>;
};
