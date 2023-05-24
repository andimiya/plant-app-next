export const getAllPlants = async () => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/allPlants`;
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
