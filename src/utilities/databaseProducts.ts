import { DocumentData } from "firebase/firestore";
import { databaseProduct } from "../types/databaseProductsType";
import { traerDatabaseProducts } from "../firebase/firebase";

export let databaseProducts: Array<databaseProduct | DocumentData> = []

export const reiniciarDatabaseProducts = () => {
    databaseProducts = []
}

export const pedirProducts = async () => {
    //Especificamente primero el traerDatabaseProducts y luego el reiniciarDatabaseProducts para que no se dupliquen los productos
    //reiniciarDatabaseProducts()
    await traerDatabaseProducts()
}