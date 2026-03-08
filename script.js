import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";

// 自分のプロジェクトの情報を設定
const firebaseConfig = {
    apiKey: "AIzaSyDpQB1hTfz0NXU4qxNWpxmPom8_dSSusq0",
    authDomain: "tamaki-test-01.firebaseapp.com",
    projectId: "tamaki-test-01",
    storageBucket: "tamaki-test-01.firebasestorage.app",
    messagingSenderId: "529064242693",
    appId: "1:529064242693:web:bf4c51ddd666aec8fbf66c"
};

//初期化してappをexportしておく
export const app = initializeApp(firebaseConfig);
