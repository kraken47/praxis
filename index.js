const express = require('express')
const app = express()

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => res.send('halo gais'))
app.get('/home', (req, res) => res.send('ini tampilan home'))

app.get('/', (req, res) => {
    var x, y, z
    x = 5
    y = 3
    z = x + y

    return res.send(`The value of z is ${z}`)
})

app.post('/', (req, res) => {
    let email = req.body.email

    return res.send('The email value is '+email)
})

app.post('/tambah', (req, res) => {

    let a = parseInt(req.body.a)
    b = parseInt(req.body.b)
    c = parseInt(req.body.c)

    c = a + b

   
    return res.send("hasil "+a+" ditambah dengan "+b+" adalah "+c+" dan tipe data a:"+typeof a+", b:"+typeof b+", c:"+typeof c+".")
})  


app.post('/kurang', (req, res) =>{
    let a = parseInt(req.body.a)
    b = parseInt(req.body.b)
    c = parseInt(req.body.c)

    c = a - b

    return res.send("hasil "+a+" dikurang dengan "+b+" adalah "+c+" dan tipe data a:"+typeof a+", b:"+typeof b+", c:"+typeof c+".")
})

app.post('/kali', (req, res) => {


    let a = parseInt(req.body.a)
    b = parseInt(req.body.b)
    c = parseInt(req.body.c)

    c = a * b
    

    return res.send("hasil "+a+" dikali dengan "+b+" adalah "+c+" dan tipe data a:"+typeof a+", b:"+typeof b+", c:"+typeof c+".")

})

app.post('/bagi', (req, res) => {


    let a = parseInt(req.body.a)
    b = parseInt(req.body.b)
    c = parseInt(req.body.c)

    c = a/b
    

    return res.send("hasil "+a+" dibagi dengan "+b+" adalah "+c+" dan tipe data a:"+typeof a+", b:"+typeof b+", c:"+typeof c+".")

})

app.post('/keling', (req, res) => {
    
    let keliling = parseInt(req.body.keliling)
    diameter = parseInt(req.body.diameter)
    hasil = parseFloat(req.body.keliling)

    keliling = Math.PI*diameter    
    hasil = keliling.toFixed(2);
    return res.send("keliling lingkaran dengan diameter "+diameter+" cm adalah "+hasil+" cm.")

})
app.post('/kelseg3', (req, res) => {
    
    let alas = parseInt(req.body.alas)
    tinggi = parseInt(req.body.tinggi)
    keliling = parseInt(req.body.keliling)

    keliling = 1/2*alas*tinggi

    return res.send("alas segitiga sama kaki "+alas+" cm dan tingginya "+tinggi+" cm, maka keliling segitiga tersebut adalah "+keliling+" cm.")

})

app.post('/kelpersegi', (req, res) => {
    
    let sisi = parseInt(req.body.sisi)
    hasil = parseInt(req.body.hasil)

    hasil = 4*sisi

    return res.send("keliling persegi yang sisinya "+sisi+" cm adalah "+hasil+" cm.")

})

app.listen(3300, () => {
    console.log(`Example app listening on port 3300`)
}) //gitlab123