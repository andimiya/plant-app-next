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

export function getPostData(pid) {
  // const fullPath = path.join(postsDirectory, `${id}.md`);
  // const fileContents = fs.readFileSync(fullPath, "utf8");

  // // Use gray-matter to parse the post metadata section
  // const matterResult = matter(fileContents);

  // Combine the data with the id
  return {
    pid,
    id: 1,
    title: "Astrophytum ",
    // ...matterResult.data,
  };
}
