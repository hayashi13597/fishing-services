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
  apiKey: "AIzaSyBWslEMR9JIpHgiQFYDW6lnzkm74qT3OqM",
  authDomain: "projectfilm-5bbac.firebaseapp.com",
  projectId: "projectfilm-5bbac",
  storageBucket: "projectfilm-5bbac.appspot.com",
  messagingSenderId: "811602729224",
  appId: "1:811602729224:web:48981d3d7e0ef011fc74bd",
  measurementId: "G-Z9Z4ZLE99T",
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
