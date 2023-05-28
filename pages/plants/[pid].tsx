import { Tabs, TabsProps } from "antd";
import Gallery from "../components/Gallery/Gallery";
import WaterFertilizerLog from "../components/WaterFertilizerLog/WaterFertilizerLog";
import { getPlant } from "@/lib/plants";
import { Header } from "semantic-ui-react";

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
      children: <p>Plant name: {plantData?.title}</p>,
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
      <Header as="h1" size="huge">
        {plantData?.title}
      </Header>
      <div className="ui hidden divider"></div>
      <Tabs
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
        style={{ fontSize: "1.5rem" }}
      />
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
