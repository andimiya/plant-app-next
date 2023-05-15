import { Tabs, TabsProps, Typography } from "antd";
import { getAllPlantIds, getPostData } from "../../lib/plants";
import Gallery from "../components/Gallery/Gallery";
const { Paragraph, Title } = Typography;

interface PostData {
  title: string;
  pid: string;
  images: [];
}

const Plant = ({ postData }: any) => {
  let parsedData: PostData | null = null;
  if (postData) {
    parsedData = JSON.parse(postData);
  }

  const onChange = () => {};

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Plant Details`,
      children: <Paragraph>Plant name: {parsedData?.title}</Paragraph>,
    },
    {
      key: "2",
      label: `Gallery`,
      children: <Gallery images={parsedData?.images} />,
    },
    {
      key: "3",
      label: `Water/Fertilizer Log`,
      children: `Content of Tab Pane 3`,
    },
  ];

  parsedData ? (
    <div>
      <Title>Plant Name: {postData.title}</Title>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export async function getStaticPaths() {
  const paths = getAllPlantIds();
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({}: any) {
  const postData = await getPostData();
  return {
    props: {
      postData: JSON.stringify(postData),
    },
  };
}

export default Plant;
