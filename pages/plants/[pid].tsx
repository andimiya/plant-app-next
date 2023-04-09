import { Tabs, Typography } from "antd";
import { getAllPlantIds, getPostData } from "../../lib/plants";
const { TabPane } = Tabs;
const { Paragraph, Title } = Typography;

const Plant: React.FC = ({ postData }) => (
  <div>
    <Title>Plant Name: {postData.title}</Title>
    <Tabs>
      <TabPane tab="Plant Details" key="1">
        <Paragraph>ID: {postData.pid}</Paragraph>
      </TabPane>
      <TabPane tab="Gallery" key="2">
        Gallery
      </TabPane>
      <TabPane tab="Water/Fertilizer Log" key="3">
        Watering and fertilizing log
      </TabPane>
    </Tabs>
  </div>
);

export async function getStaticPaths() {
  const paths = getAllPlantIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.pid);
  console.log(postData, "post data");
  return {
    props: {
      postData,
    },
  };
}

export default Plant;
