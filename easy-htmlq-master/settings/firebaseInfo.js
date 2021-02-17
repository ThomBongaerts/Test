// Initialize Firebase
var config = {
	apiKey: "AIzaSyBd6HJHGQhnaG_pBGj4PfNQ0SVuzhFDkgI",
    authDomain: "easy-htmlq-tb.firebaseapp.com",
    databaseURL: "https://easy-htmlq-tb-default-rtdb.firebaseio.com",
    projectId: "easy-htmlq-tb",
    storageBucket: "easy-htmlq-tb.appspot.com",
    messagingSenderId: "155895821766",
    appId: "1:155895821766:web:304f97f0ceb38eedbaeec7",
    measurementId: "G-CMV3FY0ZK1"
};
firebase.initializeApp(config);
var rootRef = firebase.database().ref();