import {
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { getAuth } from "firebase/auth";
import { initializeApp, getApp, getApps } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import ToastNotify from "../toast";

const firebaseConfig = {
  apiKey: "AIzaSyAyvhDbEo_r3VRv4-3RNLO_fshGIplaC5o",
  authDomain: "ocdaokyda-b3992.firebaseapp.com",
  projectId: "ocdaokyda-b3992",
  storageBucket: "ocdaokyda-b3992.appspot.com",
  messagingSenderId: "1058056226442",
  appId: "1:1058056226442:web:ff550b43c7e91f4a844f73",
  measurementId: "G-JBB5QZ49WS",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const dbFirebase = getFirestore();
export const storageFirebase = getStorage(app);
class Authentication {
  authenticationFirebase = getAuth(app);
  signFacebook(AccountCallback: (re: any) => void) {
    const provider = new FacebookAuthProvider();

    signInWithPopup(this.authenticationFirebase, provider)
      .then((account) => {
        AccountCallback(account);
      })
      .catch(() => {});
  }
  signGoogle(AccountCallback: (re: any) => void) {
    const provider = new GoogleAuthProvider();
    signInWithPopup(this.authenticationFirebase, provider)
      .then((account) => {
        AccountCallback(account);
      })
      .catch(() => {});
  }
  signGithub(AccountCallback: (re: any) => void) {
    const provider = new GithubAuthProvider();
    signInWithPopup(this.authenticationFirebase, provider)
      .then((account) => {
        AccountCallback(account);
      })
      .catch(() => {
        ToastNotify("Không thể kết nối bên thứ ba!").info();
      });
  }
  handleLogout() {
    signOut(getAuth())
      .then(() => {
        ToastNotify("Bạn đăng xuất thành công").success();
      })
      .catch((err) => {
        console.log(err.message);
        ToastNotify("Bạn chưa đăng nhập").info();
      });
  }
}

export default new Authentication();
