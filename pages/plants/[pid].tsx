import { Tabs, TabsProps } from "antd";
import Gallery from "../components/Gallery/Gallery";
import WaterFertilizerLog from "../components/WaterFertilizerLog/WaterFertilizerLog";
import { getPlant } from "@/lib/plants";
import PlantDetails from "../components/PlantDetails/PlantDetails";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export interface IPlantData {
  _id: string;
  title: string;
  images: string[];
  watering: number[];
  fertilizing: number[];
  streetName?: string;
  flowers?: string;
  dateAcquired?: string;
  humidity?: string;
  sunlight?: string;
  temp?: string;
  soilMix?: string;
  wateringConditions?: string;
  fertilizerPlan?: string;
  plantingTime?: string;
  pruning?: string;
  harvestTime?: string;
  propogation?: string;
  pestsDiseases?: string;
  notes?: string;
}

export interface IProps {
  plantData: IPlantData;
}

const Plant = () => {
  const [plantData, setPlantData] = useState<IPlantData>();
  const [isLoading, setLoading] = useState<boolean>(false);
  const { asPath } = useRouter();

  const title: string = asPath.replace("/plants/", "");

  const getPlantData = (title: string) => {
    getPlant(title).then((data) => {
      setPlantData(data);
    });
  };

  const refreshData = (title: string) => {
    setLoading(true);
    getPlantData(title);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getPlantData(title);
    setLoading(false);
  }, [title]);

  const onChange = () => {};
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Plant Details`,
      children: (
        <PlantDetails
          plantData={plantData}
          isLoading={isLoading}
          refreshData={refreshData}
        />
      ),
    },
    {
      key: "2",
      label: `Gallery`,
      children: (
        <Gallery
          images={plantData?.images}
          plantId={plantData?._id}
          plantName={plantData?.title}
        />
      ),
    },
    {
      key: "3",
      label: `Water/Fertilizer Log`,
      children: <WaterFertilizerLog plantData={plantData} />,
    },
  ];
  return (
    <div>
      <h1>{plantData?.title}</h1>
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
