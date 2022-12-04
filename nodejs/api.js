const express = require('express')
const app = express()

const { Pool } = require('pg')
const db = new Pool({
    user: 'postgres',
    host: 'postgis',
    database: 'geodb',
    password: '1234',
    port: '5432'
})



app.get("/api/getdata", (req, res) => {
    // console.log("backend");
    var sql = `select * from public.time_display`
    db.query(sql).then((x) => {
        res.status(200).json({
            status: "ok",
            data: x.rows
        })
    })
})

// **********************Time Stamp***************

app.get("/api/display_ts", (req, res) => {
    // console.log("backend");
    var sql = `select * from public.time_display where ts >= (now() - interval '5 minutes');`
    db.query(sql).then((x) => {
        res.status(200).json({
            data: x.rows
        })
    })
})


// ***********get python******************
app.get("/api/park_st", (req, res) => {
    // console.log("backend");
    var sql = `select * from public.park_st;`
    db.query(sql).then((x) => {
        res.status(200).json({
            data: x.rows
        })
    })
})


// *****************In sert ข้อมูลเข้าใน MySql*******************
app.get("/api/insertdata/:d/:t", (req, res) => {
    // console.log("backend");
    const d = req.params.d
    const t = req.params.t

    //    const t =res.params

    var sql = `insert into time_display (dist, times, ts) values (${d},${t},now())`
    console.log(sql);
    db.query(sql).then((x) => {
        res.status(200).json({
            status: "ok"


        })
        if (sql = 0) {
            sql = `update time_display set dist = 0`
        }
    })
})

module.exports = app

//



// ****************Delete ข้อมูลใน MySql***************

// app.get("/api/insertdata/:d/:t", (req, res) => {
//     console.log("backend");
//     const d = req.params.d
//     const t = req.params.t

//     //    const t =res.params

//     var sql = `delete from time_display where dist = 0`
//     console.log(sql);
//     db.query(sql).then((x) => {
//         res.status(200).json({
//             status: "ok"
//         })
//     })
// })




// ****************test***************************

// app.get("/api/insertdata/:d/:t", (req, res) => {
//     console.log("backend");
//     const d = req.params.d
//     const t = req.params.t

//     //    const t =res.params

//     var sql = `update time_display set dist = 0`
//     console.log(sql);
//     db.query(sql).then((x) => {
//         res.status(200).json({
//             status: "ok"
//         })
//     })
// })







