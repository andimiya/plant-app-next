import { Tabs, TabsProps, Typography } from "antd";
import { getPostData } from "../../lib/plants";
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

  return parsedData ? (
    <div>
      <Title>Plant Name: {parsedData.title}</Title>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export async function getStaticPaths() {
  return {
    paths: [{ params: { pid: "tomato" } }],
    fallback: true,
  };
}

export async function getStaticProps(context: any) {
  const postData = await getPostData(context.params.pid);
  return {
    props: {
      postData: JSON.stringify(postData),
    },
  };
}

export default Plant;
