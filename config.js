const { initializeApp } = require("firebase/app");

const firebaseConfig = {
    //YOUR FIREBASE PROJECT CONFIG HERE
  };

const firebaseapp = initializeApp(firebaseConfig);

module.exports = firebaseapp