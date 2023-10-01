import { getAllLaunchesImgLinks, getAllRocketsImg, getAllShipsImg } from "./storage/v3.js";
import { getAllCapsulesSerialAndStatus, getAllDragonsImg, getAllHistoryArticles } from "./storage/v4.js";

let imagesLaunches = await getAllLaunchesImgLinks();
let imagesRockets = await getAllRocketsImg();
let imagesShips = await getAllShipsImg();

let infoCapsules = await getAllCapsulesSerialAndStatus();
let imagesDragons = await getAllDragonsImg();
let articlesHistory = await getAllHistoryArticles();

console.log("--------------------------------------------------");
console.log("QUERIES VERSION 3:");
console.log("--------------------------------------------------");
console.log("********** imagesLaunches (V3): **********",imagesLaunches);
console.log("********** imagesRockets (V3): **********",imagesRockets);
console.log("********** imagesShips (V3): **********",imagesShips);

console.log("--------------------------------------------------");
console.log("QUERIES VERSION 4:");
console.log("--------------------------------------------------");
console.log("********** infoCapsules (V4): **********", infoCapsules);
console.log("********** imagesDragons (V4): **********", imagesDragons);
console.log("********** articlesHistory (V4): **********", articlesHistory);