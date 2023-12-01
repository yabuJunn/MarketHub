import { Timestamp } from "firebase/firestore";

export interface databaseProduct {
    name: string,
    description: string,
    price: string,
    imageURL: string,
    uploadDate: Timestamp,
    userFirebaseID: string,
    productFirebaseID: string
}