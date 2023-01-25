"use client";
import {
    AppShell,
    ColorScheme,
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
import { useColorScheme } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { TbSun, TbMoonStars } from "react-icons/tb";
import { Hero } from "./common/Hero";
import { Home } from "./home/Home";
import { Projects } from "./projects/Projects";

export const App = () => {
    const preferredColorScheme = useColorScheme();
    const [colorScheme, setColorScheme] =
        useState<ColorScheme>(preferredColorScheme);
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

    const appState = localStorage.getItem("TAB");
    const initialState = appState ? JSON.parse(appState) : "home";
    const [tab, setTab] = useState(initialState);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        localStorage.setItem("TAB", JSON.stringify(tab));
    }, [tab]);

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
                                            color={
                                                colorScheme === "dark"
                                                    ? "green.5"
                                                    : "green.9"
                                            }
                                            onClick={() => toggleColorScheme()}
                                            style={{ margin: "10px" }}
                                        >
                                            {colorScheme === "dark" ? (
                                                <TbSun />
                                            ) : (
                                                <TbMoonStars />
                                            )}
                                        </ActionIcon>
                                        <SimpleGrid
                                            cols={2}
                                            spacing={0}
                                            style={{
                                                height: 50,
                                                marginTop: 0,
                                                marginBottom: 0,
                                            }}
                                        >
                                            <NavLink
                                                label={<Center>HOME</Center>}
                                                color={
                                                    colorScheme === "dark"
                                                        ? "green.5"
                                                        : "green.9"
                                                }
                                                active={tab === "home"}
                                                onClick={() => setTab("home")}
                                            />
                                            <NavLink
                                                label={
                                                    <Center>PROJECTS</Center>
                                                }
                                                color={
                                                    colorScheme === "dark"
                                                        ? "green.5"
                                                        : "green.9"
                                                }
                                                active={tab === "projects"}
                                                onClick={() =>
                                                    setTab("projects")
                                                }
                                            />
                                        </SimpleGrid>
                                    </Group>
                                </Header>
                            }
                        >
                            <Hero />
                            {tab === "home" ? <Home /> : <Projects />}
                        </AppShell>
                    </MantineProvider>
                </ColorSchemeProvider>
            );
        } else {
            return (
                <div>
                    <LoadingOverlay
                        loaderProps={{
                            size: "lg",
                            color:
                                colorScheme === "dark" ? "green.5" : "green.9",
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
