import { firebaseConfig } from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, updateDoc  } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const registrarUsuario = async (nameParam: string, emailParam: string, cellphoneParam: string, passwordParam: string) => {
    const docRef = await addDoc(collection(db, "users"), {
        name: nameParam,
        email: emailParam,
        cellphone: cellphoneParam,
        password: passwordParam
      });
      //console.log("Document written with ID: ", docRef.id);
      await updateDoc(docRef, {
        id: docRef.id
      });
      return docRef.id
}