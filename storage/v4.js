export const getAllCapsulesSerialAndStatus = async () => {
  let config = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      options: {
        select: {
          status: "unknown",
          type: "Dragon 1.0",
        },
      },
    }),
  };

  let res = await (
    await fetch("https://api.spacexdata.com/v4/capsules/query", config)
  ).json();

  return res.docs;
};

export const getAllDragonsImg = async () => {
  let config = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      options: {
        select: {
          flickr_images: 1,
        },
      },
    }),
  };

  let res = await (
    await fetch("https://api.spacexdata.com/v4/dragons/query", config)
  ).json();

  let images = res.docs.map((element) => {
    let { flickr_images } = element;
    return flickr_images;
  });
  return images;
};

export const getAllHistoryArticles = async () => {
  let config = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      options: {
        select: {
          links: {
            article: 1,
          },
        },
      },
    }),
  };

  let res = await (
    await fetch("https://api.spacexdata.com/v4/history/query", config)
  ).json();

  let articles = res.docs.map(element => {
    let { article } = element.links;
    return article;
  });

  return articles;
};
