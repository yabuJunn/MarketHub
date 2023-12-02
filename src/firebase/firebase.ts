import { firebaseConfig } from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, updateDoc, getDocs, doc, getDoc, setDoc, DocumentData, deleteDoc } from "firebase/firestore";
import { dataUsers } from "../utilities/getDataUsers";
import { dispatch, state } from "../store";
import { changeLogedUserData, changeScreen } from "../store/actions";
import { Screens } from "../types/screens";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { makeid } from "../utilities/generateRandomID";
import { actualizarDataBaseProducts, databaseProducts, reiniciarDatabaseProducts } from "../utilities/databaseProducts";
import { databaseProduct } from "../types/databaseProductsType";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage();

export const registrarUsuario = async (nameParam: string, emailParam: string, cellphoneParam: string, passwordParam: string, identificationDocumentParam: string, userIDParam: string) => {
  const docRef = await addDoc(collection(db, "users"), {
    name: nameParam,
    email: emailParam,
    cellphone: cellphoneParam,
    password: passwordParam,
    identificationDocument: identificationDocumentParam,
    userID: userIDParam
  });
  console.log("Document written with ID: ", docRef.id);
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

export const subirProducto = async (productName: string, productDescription: string, productPrice: string, productImage: File, userFirebaseID: string) => {
  const imageURL: string | void = await subirArchivo(productImage)
  const productID = await subirDatosProducto(productName, productDescription, productPrice, imageURL, userFirebaseID)
  actualizarUploadedProductsDelUser(productID, userFirebaseID)
}

const pedirURL = async (path: string) => {
  const url = await getDownloadURL(ref(storage, `${path}`))
  return url
}

const subirArchivo = async (file: File) => {
  const randomID = makeid(15)
  const storageRef = await ref(storage, `imagesProductos/${randomID}`);
  await uploadBytes(storageRef, file).then((snapshot) => {
    console.log('Uploaded a blob or file!');
  });
  return await pedirURL(`imagesProductos/${randomID}`)
}

const subirDatosProducto = async (productName: string, productDescription: string, productPrice: string, productImageURL: string | void, userFirebaseID: string) => {
  const productRef = await addDoc(collection(db, "products"), {
    name: productName,
    description: productDescription,
    price: productPrice,
    imageURL: productImageURL,
    userFirebaseID: userFirebaseID,
    uploadDate: new Date()
  })
  console.log("Se subio el producto")
  await updateDoc(productRef, {
    productFirebaseID: productRef.id
  });
  return productRef.id
}

const actualizarUploadedProductsDelUser = async (productID: string, userFirebaseID: string) => {
  const userRef = doc(db, "users", userFirebaseID)
  const docSnap = await getDoc(userRef);
  console.log(docSnap.data())
  const actualUploadedProducts = docSnap.data()!.uploadedProducts
  console.log(actualUploadedProducts)
  if (actualUploadedProducts === undefined) {
    await updateDoc(userRef, {
      uploadedProducts: [productID]
    });
    console.log("Creado uploadedProducts")
  } else {
    await updateDoc(userRef, {
      uploadedProducts: [...actualUploadedProducts, productID]
    });
    console.log("Actualizado uploadedProducts")
  }
}

export const traerDatabaseProducts = async () => {
  reiniciarDatabaseProducts()
  const newProductsArray: Array<databaseProduct | DocumentData> = []
  const querySnapshot = await getDocs(collection(db, "products"));
  querySnapshot.forEach((doc) => {
    newProductsArray.push(doc.data())
  });
  actualizarDataBaseProducts(newProductsArray)
}

export const pedirProductData = async (productFirebaseID: string, clase: any) => {
  const docRef = doc(db, "products", productFirebaseID);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    clase.render(docSnap.data())
  } else {
    console.log("No such document!");
  }
}

export const borrarProduct = async (productFirebaseID: string) => {
  await deleteDoc(doc(db, "products", productFirebaseID));
  dispatch(
    changeScreen(Screens.myProductsPage)
    )
  console.log("Se borro")
}