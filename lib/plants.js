export function getAllPlantIds() {
  // const fileNames = fs.readdirSync(postsDirectory);

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  // return fileNames.map((fileName) => {
  return [
    {
      params: {
        pid: "tomato",
        title: "Tomato",
      },
    },
  ];
  // });
}

export async function getPostData(pid) {
  const url = `${process.env.NEXT_PUBLIC_DEV_URL}/api/plants?title=${pid}`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data, "dataa");
  return data;
}
