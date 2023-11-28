import { firebaseConfig } from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, updateDoc, getDocs, doc, getDoc } from "firebase/firestore";
import { dataUsers } from "../utilities/getDataUsers";

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

export const traerDatosUsers = async () => {
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    dataUsers.push(doc.data())
  });
  console.log(dataUsers)
}

export const traerDatosUsuarioRegistrado = async (userID: string) => {
  console.log(`Requesting data from user ${userID}`)
  const docRef = doc(db, "users", userID);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    console.log("No such document!");
  }
}