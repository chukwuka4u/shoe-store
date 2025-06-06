import { initializeApp } from 'firebase/app';
import firebaseConfig from '@/lib/utils/firebaseConfig';
import { getFirestore, collection, getDocs, doc, getDoc, setDoc, addDoc, updateDoc, query, orderBy, limit } from 'firebase/firestore/lite';

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const getShoes = async (l) => {
    const shoeCol = collection(db, "shoes")
    const q = l ? query(shoeCol, orderBy("title", "desc"), limit(l)) : shoeCol;
    const docsSnapshot = await getDocs(q)
    const shoeList = docsSnapshot.docs.map((doc) => {
        const { id } = doc;
        const obj = doc.data()
        return ({ ...obj, id });
    })
    return shoeList;
}

export const getShoe = async (id) => {
    const docRef = doc(db, "shoes", id)
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const { id } = docSnap;
        const obj = docSnap.data()
        return ({ ...obj, id });
    } else {
        console.log("No such document!");
    }
}

export const writeOrder = async (cartItems) => {
    //write to db and try to get id
    const postsRef = collection(db, "orders")
    const docRef = await addDoc(postsRef, { fulfilled: false });
    const innerColRef = collection(db, `orders/${docRef.id}/items`)
    cartItems.map(async (i) => await addDoc(innerColRef, {
        image: i.image,
        title: i.title,
        price: i.price,
        size: i.size,
        quantity: i.quantity
    }))
    return docRef.id
}
export const getOrder = async (id) => {
    const docRef = doc(db, "orders", id)
    const docSnap = await getDoc(docRef)
    const innerColRef = collection(db, `orders/${id}/items`)
    const docsSnapshot = await getDocs(innerColRef)
    const productList = docsSnapshot.docs.map((v) => v.data())
    const data = docSnap.data()
    return { data, productList }
}

export const fulfilled = async (id) => {
    const docRef = doc(db, "orders", id)
    await updateDoc(docRef, { fulfilled: true })
}

export const getBrandShoes = async (name) => {
    const shoeCol = collection(db, name)
    const docsSnapshot = await getDocs(shoeCol)
    const shoeList = docsSnapshot.docs.map((doc) => {
        const { id } = doc;
        const obj = doc.data()
        return ({ ...obj, id });
    })
    return shoeList;
}

export const getBrandShoe = async (name, id) => {
    const docRef = doc(db, name, id)
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const { id } = docSnap;
        const obj = docSnap.data()
        return ({ ...obj, id });
    } else {
        console.log("No such document!");
    }
}

export const saveUserDetails = async (uid, form) => {
    await setDoc(doc(db, 'users', uid), {
        firstName: form.firstName,
        lastName: form.lastName,
        gender: form.gender,
        email: form.email
    });
}
export const getUserDetails = async (uid) => {
    const dataSnapshot = await getDoc(doc(db, 'users', uid));
    const data = dataSnapshot.data()
    return ({ ...data })
}