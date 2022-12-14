import {
  AspectRatio,
  Card,
  Title,
  Image,
  Text,
  createStyles,
  Container,
  SimpleGrid,
  Center,
} from "@mantine/core";

const mockdata = [
  {
    title: "【JPHACKS 2022】 Innovator認定 & MIRAISE賞",
    image: require("../imgs/JPHACKS2022.jpg"),
    url: "https://jphacks.com/2022/result/innovator/#:~:text=%E3%81%9F%E3%83%81%E3%83%BC%E3%83%A0%E3%81%A7%E3%81%99%E3%80%82-,VRooM%20(A_2207%3A%E3%81%8F%E3%81%BE%E3%81%95%E3%82%93),-Hacking%20Sprint%20A",
    date: "November 2022",
  },
  {
    title: "【インターン】 Be Doctor Consulting 株式会社",
    image: require("../imgs/BeDoctor.jpeg"),
    url: "https://www.wantedly.com/companies/company_1306143",
    date: "November 2022 ~",
  },
  {
    title: "【インターン】 Langsmith 株式会社",
    image: require("../imgs/LangsmithEditor.png"),
    url: "https://corp.langsmith.co.jp/",
    date: "April 2022 ~",
  },
  {
    title: "【JPHACKS 2021】 審査員特別賞 & Innovator認定 & アドソル日進株式会社賞 & インフィニオンテクノロジーズジャパン株式会社賞 & 株式会社インテリジェントウェイブ賞 & ノキアソリューションズ&ネットワークス合同会社賞",
    image: require("../imgs/JPHACKS2021.png"),
    url: "https://jphacks.com/2021/result/innovator/#:~:text=%E5%A7%94%E5%93%A1%E7%89%B9%E5%88%A5%E8%B3%9E-,Blicky%20(F_2103%3A%E3%82%A6%E3%83%9E%E3%82%B7%E3%82%AB%E3%82%A6%E3%82%B7),-Hacking%20Sprint%20F",
    date: "November 2021",
  },
];

const useStyles = createStyles((theme) => ({
  card: {
    transition: "transform 150ms ease, box-shadow 150ms ease",

    "&:hover": {
      transform: "scale(1.01)",
      boxShadow: theme.shadows.md,
    },
  },
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
  },
}));

export const Projects = () => {
  const { classes } = useStyles();

  const cards = mockdata.map((article) => (
    <Card
      key={article.title}
      p="md"
      radius="md"
      component="a"
      href="#"
      className={classes.card}
    >
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} />
      </AspectRatio>
      <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
        {article.date}
      </Text>
      <Text className={classes.title} mt={5}>
        {article.title}
      </Text>
    </Card>
  ));
  return (
    <>
      <Center my="xl">
        <Title>PROJECTS</Title>
      </Center>
      <Container my="xl">
        <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
          {cards}
        </SimpleGrid>
      </Container>
    </>
  );
};
