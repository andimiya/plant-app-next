import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { getAllPlants, getPlant } from "@/services/plants";
import { IPlantData } from "../[pid]";
import Tabs from "@/components/Tabs/Tabs";
import Gallery from "@/components/Gallery/Gallery";
import PIDHeader from "@/components/PIDHeader/PIDHeader";
interface IProps {
  plant: IPlantData;
}
const GalleryPage = ({ plant }: IProps) => {
  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
  };
  useEffect(() => {
    refreshData();
  }, []);

  if (router.isFallback) return null;

  return (
    <div>
      <PIDHeader title={plant?.title} image={plant?.images[0]} />
      {!plant?.images?.length ? (
        <div>Empty</div>
      ) : (
        <Gallery
          images={plant.images}
          plantId={plant._id}
          plantName={plant.title}
          refreshData={refreshData}
        />
      )}
    </div>
  );
};

interface IParam {
  params: {
    pid: string;
  };
}
export async function getStaticProps({ params }: IParam) {
  const plantData = await getPlant(params.pid);
  // redirect to main blog posts page if post doesn't exist, or any other page you want
  if (!plantData) return { redirect: "/", permanent: false };

  return {
    props: {
      plant: {
        ...plantData,
      },
    },
  };
}

export async function getStaticPaths() {
  const plants = await getAllPlants();

  return {
    paths: plants?.map((plant: IPlantData) => {
      return {
        params: {
          pid: plant.title,
        },
      };
    }),
    fallback: true,
  };
}

export default GalleryPage;
