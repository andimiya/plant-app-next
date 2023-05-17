export async function getAllPlants() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/allPlants`;
  const res = await fetch(url);
  return res.json();
  // return [
  //   {
  //     params: {
  //       pid: "tomato",
  //       title: "Tomato",
  //     },
  //   },
  // ];
  // });
}

export async function getPlant(title) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/plants?title=${title}`;
  const res = await fetch(url);
  return res.json();
}
