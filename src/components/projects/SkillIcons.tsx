import { Group, ThemeIcon, useMantineColorScheme } from "@mantine/core";
import React from "react";
import {
  SiNextdotjs,
  SiPython,
  SiReact,
  SiTypescript,
  SiStreamlit,
  SiFastapi,
  SiDocker,
  SiGo,
  SiTerraform,
  SiGooglecloud,
  SiPrometheus,
  SiGrafana,
} from "react-icons/si";

interface SkillIconsProps {
  skills: string[];
}

export const SkillIcons = ({ skills }: SkillIconsProps) => {
  const { colorScheme } = useMantineColorScheme();

  const toIcon = (skill: string) => {
    switch (skill) {
      case "Docker":
        return <SiDocker />;
      case "React":
        return <SiReact />;
      case "Python":
        return <SiPython />;
      case "Streamlit":
        return <SiStreamlit />;
      case "FastAPI":
        return <SiFastapi />;
      case "TypeScript":
        return <SiTypescript />;
      case "Next.js":
        return <SiNextdotjs />;
      case "Go":
        return <SiGo />;
      case "Terraform":
        return <SiTerraform />;
      case "Google Cloud":
        return <SiGooglecloud />;
      case "Prometheus":
        return <SiPrometheus />;
      case "Grafana":
        return <SiGrafana />;
    }
  };
  return (
    <Group position="center" spacing="xs">
      {skills.map((skill: string) => (
        <ThemeIcon
          variant="light"
          color={colorScheme === "dark" ? "green.5" : "green.9"}
          key={skill}
          style={{ backgroundColor: "transparent" }}
        >
          {toIcon(skill)}
        </ThemeIcon>
      ))}
    </Group>
  );
};
