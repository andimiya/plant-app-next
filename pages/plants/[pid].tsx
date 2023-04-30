import { Tabs, Typography } from "antd";
import { getAllPlantIds, getPostData } from "../../lib/plants";
import Gallery from "../components/Gallery/Gallery";
import { useRouter } from "next/router";
const { TabPane } = Tabs;
const { Paragraph, Title } = Typography;

interface Post {
  postData: {
    title: string;
    pid: string;
    imageData: [];
  };
}

const Plant = ({ postData }: Post) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Title>Plant Name: {postData.title}</Title>
      <Tabs>
        <TabPane tab="Plant Details" key="1">
          <Paragraph>ID: {postData.pid}</Paragraph>
        </TabPane>
        <TabPane tab="Gallery" key="2">
          <Gallery images={postData} />
        </TabPane>
        <TabPane tab="Water/Fertilizer Log" key="3">
          Watering and fertilizing log
        </TabPane>
      </Tabs>
    </div>
  );
};

export async function getStaticPaths() {
  const paths = getAllPlantIds();
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }: any) {
  const postData = await getPostData(params.pid);
  console.log(postData, "post data");
  return {
    props: {
      postData: JSON.stringify(postData),
    },
  };
}

export default Plant;
