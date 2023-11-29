import { firebaseConfig } from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, updateDoc, getDocs, doc, getDoc } from "firebase/firestore";
import { dataUsers } from "../utilities/getDataUsers";
import { dispatch, state } from "../store";
import { changeLogedUserData, changeScreen } from "../store/actions";
import { Screens } from "../types/screens";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const registrarUsuario = async (nameParam: string, emailParam: string, cellphoneParam: string, passwordParam: string, identificationDocumentParam: string, userIDParam: string) => {
  const docRef = await addDoc(collection(db, "users"), {
    name: nameParam,
    email: emailParam,
    cellphone: cellphoneParam,
    password: passwordParam,
    identificationDocument: identificationDocumentParam,
    userID: userIDParam
  });
  //console.log("Document written with ID: ", docRef.id);
  await updateDoc(docRef, {
    firebaseID: docRef.id
  });
  return docRef.id
}

export const traerDatosUsers = async () => {
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    dataUsers.push(doc.data())
    console.log(dataUsers)
  });
}

export const traerDatosUsuarioRegistrado = async (firebaseID: string) => {
  const docRef = doc(db, "users", firebaseID);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    dispatch(
      changeLogedUserData(docSnap.data())
    )
  } else {
    console.log("No such document!");
  }
}

export const actualizarDatosDeUsuarioRegistrado = async (emailParam: string, phoneParam: string, identificationDocumentParam: string, firebaseID: string) => {
  const userRef = doc(db, "users", firebaseID);
  await updateDoc(userRef, {
    email: emailParam,
    cellphone: phoneParam,
    identificationDocument: identificationDocumentParam
  });
  alert("Datos actualizados")
  await traerDatosUsuarioRegistrado(firebaseID)
  dispatch(
    changeScreen(Screens.userInformation)
  )
}