import { getAllLaunchesImgLinks } from "./storage/v3.js";

let images = await getAllLaunchesImgLinks();
console.log(images)