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
console.log("********** imagesLaunches (V3): **********");
console.log("Esta consulta devuelve los parches que se usaron para cada una de las misiones.");
console.log(imagesLaunches);
console.log("********** imagesRockets (V3): **********");
console.log("Esta consulta muestra las imagenes de los cohetes.");
console.log(imagesRockets);
console.log("********** imagesShips (V3): **********");
console.log("Esta consulta muestra las fotos de los barcos.");
console.log("imagesShips");

console.log("--------------------------------------------------");
console.log("QUERIES VERSION 4:");
console.log("--------------------------------------------------");
console.log("********** infoCapsules (V4): **********");
console.log("Esta consulta muestra las capsulas que son de tipo Dragon 1.0 y su estado es unknown, con su respectivo id.");
console.log(infoCapsules);
console.log("********** imagesDragons (V4): **********");
console.log("Esta consulta muiestra las imagenes de los dragons.");
console.log(imagesDragons);
console.log("********** articlesHistory (V4): **********");
console.log("Esta consulta muestra los articulos escritos de las misiones hechas.");
console.log(articlesHistory);