import moment from "moment";

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
export const addPlant = ({
  title,
  streetName,
  flowers,
  dateAcquired,
  sunlight,
  temp,
  humidity,
  soilMix,
  daysBetweenWatering,
  wateringConditions,
  daysBetweenFertilizing,
  fertilizerPlan,
  plantingTime,
  pruning,
  harvestTime,
  propogation,
  pestsDiseases,
  notes,
}: IAddPlant) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/plants`;
  let objForUpdate: any = {};

  objForUpdate.title = title;

  if (streetName) {
    objForUpdate.streetName = streetName;
  }
  if (flowers) {
    objForUpdate.flowers = flowers;
  }
  if (dateAcquired) {
    objForUpdate.dateAcquired = dateAcquired;
  }
  if (sunlight) {
    objForUpdate.sunlight = sunlight;
  }
  if (temp) {
    objForUpdate.temp = temp;
  }
  if (humidity) {
    objForUpdate.humidity = humidity;
  }
  if (soilMix) {
    objForUpdate.soilMix = soilMix;
  }
  if (daysBetweenWatering) {
    objForUpdate.daysBetweenWatering = daysBetweenWatering;
  }
  if (wateringConditions) {
    objForUpdate.wateringConditions = wateringConditions;
  }
  if (daysBetweenFertilizing) {
    objForUpdate.daysBetweenFertilizing = daysBetweenFertilizing;
  }
  if (fertilizerPlan) {
    objForUpdate.fertilizerPlan = fertilizerPlan;
  }
  if (plantingTime) {
    objForUpdate.plantingTime = plantingTime;
  }
  if (pruning) {
    objForUpdate.pruning = pruning;
  }
  if (harvestTime) {
    objForUpdate.harvestTime = harvestTime;
  }
  if (propogation) {
    objForUpdate.propogation = propogation;
  }
  if (pestsDiseases) {
    objForUpdate.pestsDiseases = pestsDiseases;
  }
  if (notes) {
    objForUpdate.notes = notes;
  }

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

export interface IUpdatePlantDetails {
  id?: string;
  title?: string;
  streetName?: string;
  flowers?: string;
  dateAcquired?: string;
  sunlight?: string;
  temp?: string;
  humidity?: string;
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
export const updatePlantDetails = ({
  id,
  title,
  streetName,
  flowers,
  dateAcquired,
  sunlight,
  temp,
  humidity,
  soilMix,
  daysBetweenWatering,
  wateringConditions,
  daysBetweenFertilizing,
  fertilizerPlan,
  plantingTime,
  pruning,
  harvestTime,
  propogation,
  pestsDiseases,
  notes,
}: IUpdatePlantDetails) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/plants?id=${id}`;
  console.log(daysBetweenFertilizing, "days between");
  let objForUpdate: IUpdatePlantDetails = {};
  if (title) {
    objForUpdate.title = title;
  }
  if (streetName) {
    objForUpdate.streetName = streetName;
  }
  if (flowers) {
    objForUpdate.flowers = flowers;
  }
  if (dateAcquired) {
    objForUpdate.dateAcquired = dateAcquired;
  }
  if (sunlight) {
    objForUpdate.sunlight = sunlight;
  }
  if (temp) {
    objForUpdate.temp = temp;
  }
  if (humidity) {
    objForUpdate.humidity = humidity;
  }
  if (soilMix) {
    objForUpdate.soilMix = soilMix;
  }
  if (daysBetweenWatering) {
    objForUpdate.daysBetweenWatering = daysBetweenWatering;
  }
  if (wateringConditions) {
    objForUpdate.wateringConditions = wateringConditions;
  }
  if (daysBetweenFertilizing) {
    objForUpdate.daysBetweenFertilizing = daysBetweenFertilizing;
  }
  if (fertilizerPlan) {
    objForUpdate.fertilizerPlan = fertilizerPlan;
  }
  if (plantingTime) {
    objForUpdate.plantingTime = plantingTime;
  }
  if (pruning) {
    objForUpdate.pruning = pruning;
  }
  if (harvestTime) {
    objForUpdate.harvestTime = harvestTime;
  }
  if (propogation) {
    objForUpdate.propogation = propogation;
  }
  if (pestsDiseases) {
    objForUpdate.pestsDiseases = pestsDiseases;
  }
  if (notes) {
    objForUpdate.notes = notes;
  }

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
