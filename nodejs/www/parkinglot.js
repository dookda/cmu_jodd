
// var url = `https://5298-171-4-234-6.ap.ngrok.io`
// var url2 = "http://localhost:3000"

setInterval(() => {
    axios.get("/api/park_st").then(x => {
        var c = x.data.data[0]
        // console.log(c);
        document.getElementById('park-st-total').innerHTML = `ความจุ ${c.blank} คัน`
        document.getElementById('park-st-free').innerHTML = `ว่าง ${c.total} คัน`
    })
}, 5000)