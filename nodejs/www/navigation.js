// var myParam = location.search.split('a=')[1]
// console.log(myParam)

// var geo1 = L.latLng(18.796310866665927, 98.98285872330231)
// var geo2 = L.latLng(18.791249065436382, 98.98785923812387)
var geo = L.latLng(18.802888560323176, 98.95140062822396)
var map = L.map("map", {
    center: geo,
    zoom: 16
})

var osm1 = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    { attribution: "Chatchawan Khamkhuna" }
);

osm1.addTo(map)

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(onLocationFound);
}

function onLocationFound(e) {
    // console.log(e.coords.latitude, e.coords.longitude)

    var x = L.Routing.control({
        waypoints: [
            L.latLng(geo.lat, geo.lng),
            L.latLng(e.coords.latitude, e.coords.longitude)
        ]
    }).addTo(map);

    x.on('routesfound', function (e) {
        var r = e.routes[0];
        console.log(r);
        getDetail(r)
        // alert('Found ' + routes.length + ' route(s).');
    })

    // L.Routing.control({
    //     waypoints: [
    //         L.latLng(geo.lat, geo.lng),
    //         L.latLng(e.coords.latitude, e.coords.longitude)
    //     ],
    //     routeWhileDragging: true,
    //     // geocoder: L.Control.Geocoder.nominatim()
    // })
    //  L.Routing.on('routeselected', function (e) {
    //     var route = e.route;
    //     console.log(route);
    // getDetail(e.route)

    // })
    //     .addTo(map);

    // alert('Showing route between waypoints:\n' + JSON.stringify(route.inputWaypoints, null, 2));
}

async function getDetail(x) {
    // console.log();
    // document.getElementById("time1").innerHTML = Math.round(x.summary.totalTime / 60)
    // document.getElementById("dist").innerHTML = (x.summary.totalDistance / 1000).toFixed(2)
    var t = Math.round(x.summary.totalTime / 60)
    var dd = (x.summary.totalDistance / 1000)
    var d = dd.toFixed(2)

    console.log(t, d);

    // var url = `http://localhost:3000/api/insertdata/${d}/${t}`
    var url2 = `/api/insertdata/${d}/${t}`
    // console.log(url);
    await axios.get(url2).then(r => console.log(r))
    await display()
}

function display() {
    // var url = `http://localhost:3000/api/display_ts`
    var url2 = `/api/display_ts`

    axios.get(url2).then(r => {

        var a = r.data.data

        a.forEach(element => {

            document.getElementById("display").innerHTML += `เวลาที่ใช้เดินทาง ${element.times} นาที, ระยะทาง ${element.dist} กม.<p></p>`
            // console.log(element)
        });

    })

}





// function onLocationFound(e) {
//     console.log(e.coords.latitude, e.coords.longitude)
//     // var parking
//     // if (myParam == 1) {
//     //     parking = geo1
//     // }
//     // if (myParam == 2) {
//     //     parking = geo2
//     // }
//     // if (myParam == 3) {
//     //     parking = geo
//     // }


//     // var routing = L.Routing.control({
//     //     waypoints: [
//     //         L.latLng(e.coords.latitude, e.coords.longitude),
//     //         geo
//     //     ]
//     // })
//     // routing.addTo(map);

//     // console.log(geo);


//     L.Routing.control({
//         waypoints: [
//             L.latLng(geo.lat, geo.lng),
//             L.latLng(e.coords.latitude, e.coords.longitude)
//         ],
//         routeWhileDragging: true,
//         // geocoder: L.Control.Geocoder.nominatim()
//     })
//         .on('routeselected', function (e) {
//             var route = e.route;
//             getDetail(e.route)
//             // alert('Showing route between waypoints:\n' + JSON.stringify(route.inputWaypoints, null, 2));
//         })
//         .addTo(map);
// }

// function getDetail(x) {
//     console.log(x.summary);
//     document.getElementById("time1").innerHTML = Math.round(x.summary.totalTime / 60)
// }



