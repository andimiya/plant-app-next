import { Tabs, TabsProps, Typography } from "antd";
import Gallery from "../components/Gallery/Gallery";
import WaterFertilizerLog from "../components/WaterFertilizerLog/WaterFertilizerLog";
import { getPlant } from "@/lib/plants";
const { Paragraph, Title } = Typography;

export interface IPlantData {
  _id: string;
  title: string;
  images: string[];
  watering: number[];
  fertilizing: number[];
}

export interface IProps {
  plantData: IPlantData;
}

const Plant = ({ plantData }: IProps) => {
  const onChange = () => {};
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Plant Details`,
      children: <Paragraph>Plant name: {plantData?.title}</Paragraph>,
    },
    {
      key: "2",
      label: `Gallery`,
      children: <Gallery images={plantData?.images} />,
    },
    {
      key: "3",
      label: `Water/Fertilizer Log`,
      children: <WaterFertilizerLog plantData={plantData} />,
    },
  ];
  return (
    <div>
      <Title>Plant Name: {plantData?.title}</Title>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
};

export const getServerSideProps = async ({ params }: any) => {
  const jsonData = await getPlant(params.pid);
  return {
    props: {
      plantData: jsonData,
    },
  };
};

export default Plant;
