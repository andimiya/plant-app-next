export const getAllPlants = async () => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/allPlants`;
  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};

export const getPlant = async (title: string) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/plants?title=${title}`;
  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};

export const waterPlant = async (id: string) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/plants?id=${id}`;
  return fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      watering: Date.now(),
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};

export const fertilizePlant = async (id: string) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/plants?id=${id}`;
  return fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fertilizing: Date.now(),
    }),
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
  notes?: string;
}
export const updatePlantDetails = async ({
  id,
  title,
  streetName,
  flowers,
  dateAcquired,
  sunlight,
  temp,
  humidity,
}: IUpdatePlantDetails) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/plants?id=${id}`;
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
