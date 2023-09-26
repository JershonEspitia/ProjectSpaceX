export const getAllLaunchesImgLinks = async () => {
  let res = await (
    await fetch("https://api.spacexdata.com/v3/launches")
  ).json();
  let images = res.map((element) => {
    let { mission_patch: img, mission_patch_small: img_small } = element.links;
    return { img, img_small };
  });
  return images;
};
