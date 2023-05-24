import { useEffect, useState } from "react";
import { Tabs, TabsProps, Typography } from "antd";
import Gallery from "../components/Gallery/Gallery";
import { useRouter } from "next/router";
const { Paragraph, Title } = Typography;

export interface IPlantData {
  _id: string;
  title: string;
  images: string[];
  watering: number[];
  fertilizing: number[];
}

const Plant = () => {
  const [plantData, setPlantData] = useState<IPlantData>();
  const [isLoading, setLoading] = useState<boolean>(false);
  const { asPath } = useRouter();

  const title = asPath.replace("/plants/", "");

  useEffect(() => {
    setLoading(true);
    const url = `${process.env.NEXT_PUBLIC_API_URL}/plants?title=${title}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPlantData(data);
        setLoading(false);
      });
  }, [title]);

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
      children: `Content of Tab Pane 3`,
    },
  ];

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <Title>Plant Name: {plantData?.title}</Title>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
};

export default Plant;
