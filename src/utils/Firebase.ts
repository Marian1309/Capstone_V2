import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, User, getAuth, signInWithPopup } from 'firebase/auth'
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDrYFfe9SL8k1x-n54MxOgxLlmfEsEmvKY',
  authDomain: 'capstonev2-fc24c.firebaseapp.com',
  projectId: 'capstonev2-fc24c',
  storageBucket: 'capstonev2-fc24c.appspot.com',
  messagingSenderId: '787684314903',
  appId: '1:787684314903:web:7cadbcb1079e350ae13152'
}

// Initialize Firebase
initializeApp(firebaseConfig)

const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth()

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth: User) => {
  const userDocRef = doc(db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userDocRef)
  // have method exists, whick helps us to know wheather a user exists or not

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch (err: any) {
      throw new Error(err.message)
    }
  }

  return userDocRef
}
