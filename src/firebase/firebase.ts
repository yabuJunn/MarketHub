import { firebaseConfig } from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, updateDoc, getDocs, doc, getDoc } from "firebase/firestore";
import { dataUsers } from "../utilities/getDataUsers";
import { dispatch, state } from "../store";
import { changeLogedUserData } from "../store/actions";

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
}

export const traerDatosUsuarioRegistrado = async (userID: string) => {
  const docRef = doc(db, "users", userID);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    dispatch(
      changeLogedUserData(docSnap.data())
    )
  } else {
    console.log("No such document!");
  }
}