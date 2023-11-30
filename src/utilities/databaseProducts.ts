import { DocumentData } from "firebase/firestore";
import { databaseProduct } from "../types/databaseProductsType";

export let databaseProducts: Array<databaseProduct | DocumentData> = []

export const reiniciarDatabaseProducts = () => {
    databaseProducts = []
}

console.log("Prueba")