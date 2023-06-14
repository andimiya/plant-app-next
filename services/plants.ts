import moment from "moment";
import { formData } from "./formData";
import { IPlantData } from "@/pages/plants/[pid]";

export const getAllPlants = async () => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/allPlants`;
  try {
    const res = await fetch(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "*",
      },
    });
    return res.json();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error, "ERRORRRR");
    // data = JSON.stringify(error);
  }
};

export const getPlant = async (title: string) => {
  let data = [];
  const url = `${process.env.NEXT_PUBLIC_API_URL}/plants?title=${title}`;
  try {
    const res = await fetch(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "*",
      },
    });

    data = await res.json();
  } catch (error) {
    // throw new Error(`Error fetching plant: ${title}: ${error}`);
  }
  return data;
};

export const waterPlant = (id: string) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/plants?id=${id}`;
  return fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      watering: moment(),
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};

export const fertilizePlant = (id: string) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/plants?id=${id}`;
  return fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fertilizing: moment(),
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};

export const setPrimaryImage = (id: string, imageUrl: string) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/images?id=${id}&imageUrl=${imageUrl}`;
  return fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};

export const deleteImage = (id: string, imageUrl: string) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/plants?id=${id}&imageUrl=${imageUrl}`;
  return fetch(url, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};

export interface IAddPlant {
  title: string;
  streetName?: string;
  flowers?: string;
  dateAcquired?: string;
  humidity?: string;
  sunlight?: string;
  temp?: string;
  soilMix?: string;
  wateringConditions?: string;
  daysBetweenWatering?: number;
  fertilizerPlan?: string;
  daysBetweenFertilizing?: number;
  plantingTime?: string;
  pruning?: string;
  harvestTime?: string;
  propogation?: string;
  pestsDiseases?: string;
  notes?: string;
}
export const addPlant = (props: any) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/plants`;
  let objForUpdate: any = {};
  objForUpdate.title = props.title;

  formData.fields.forEach((value) => {
    if (value.name) {
      objForUpdate[value.name] = props[value.name];
    }
  });

  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(objForUpdate),
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};

export const updatePlantDetails = (props: any) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/plants?id=${props.id}`;

  let objForUpdate: any = {};

  formData.fields.forEach((value) => {
    if (value.name) {
      objForUpdate[value.name] = props[value.name];
    }
  });

  return fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(objForUpdate),
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};
