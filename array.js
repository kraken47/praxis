let mbul = {nama: adi,
    umur: 27};

    console.log(mbul.nama);

//condition

let kondisi = 2;
if(kondisi === 3) {
    console.log("budi punya istri "+kondisi)
} else if (kondisi !== 3) {
   console.log("budi berencana menambah "+kondisi+" istri") 
}

//recursion
for (let i=0;i<5;i++){
    console.log(i);
}

for (let i=5;i>0;i--){
    console.log(i);
}

let j = 0;
while (j<5){
    console.log(j);
    j++
}
// template literal

let word1 = nasi;
let word2 = padang;
let gabungan = "";

console.log(`aku suka ${word1} ${word2}`);

//destructing
//destructing array
const hewan = [4, 'kucing', 'ikan tuna', 'lucu'];
const [jmlhKaki, namaHewan, food, ciri] = hewan; // associate ke array
console.log(ciri);

// let [a, b, c] = [1, 2, 3];
let [a, b, c, d,...bambang] = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //sisi kiri harus lebih pendek dari pada sisi kanan
console.log(a,b,c,d,bambang); //nge-destruct variabel a,b,c,d dari variabel bambang
console.log(bambang);

//looping array
let hewan = ['ikan', 'beruang', 'sapi', 'belalang', 'bekicot']; 
    for (let i=0; i<hewan.length; i++) {
        console.log(hewan[i])    
    }

let arr = [
    {
        firstName: 'Adi',
        lastName: 'Gunawan',
        nilai: 90
    },
    {
        firstName: 'Mia',
        lastName: 'Amalia',
        nilai: 70
    },
    {
        firstName: 'Ratna',
        lastName: 'Ningsih',
        nilai: 80
    }
]

hasil = arr.sort();
console.log(hasil);

//push, pop, shift, unshift, splice array

let hewan = ['ikan', 'beruang', 'sapi', 'belalang', 'bekicot']; 
let hapusPop = hewan.pop();
let tambahPush = hewan.push ('gajah');
let hapusShift = hewan.shift();
let tambahUnsfhit = hewan.unshift('kambing');
let hapusSplice = hewan.splice(1,3); //menghapus
let replaceSplice = hewan.splice (0,1, 'udang'); //replace index ke dengan ...
let replaceSplice2 = hewan.splice (0,2, 'udang', 'bulu babi');

console.log(hewan);

// object
// destruction object
const personalInformation = {
    firstName: "Bayu",
    lastName: "Tirto",
    status: "Mahasiswa",
    state: "Depok",
    zipCode: 15617
};

//const firstName = personalInformationm.zipCode

const { firstName, lastName, status, state, zipCode } = personalInformation; // associate property object
console.log(firstName);

personalInformation.state = 'Jakarta';
console.log(personalInformation);

// // callback
// // arrow function
function detikSatu(){
    setTimeout(() => {
        console.log("detik 1")
    }, 1000);
};

function detikDua(){
    setTimeout(() => {
        console.log("detik 2")
    }, 2000);
};

detikSatu();
detikDua();

// callback case 2
let kelas3 = [
    {nim: 2201901, nama: "Ihsan"},
    {nim: 2201902, nama: "Toni"}
];

function tambahSiswa(siswa, callback)
{
        kelas3.push(siswa);
        console.log('Selesai push ');
        callback();
}

function getKelas()
{
        console.log('Kelas3: ', kelas3)
}

// getKelas()
tambahSiswa({nim:2201903, nama: "Rifqie"}, getKelas);

//promise
let kelas3 =  [
    {nim: 2201901, nama: "Ihsan"},
    {nim: 2201902, nama: "Toni"}
];

function tambahSiswa(siswa){
    return new Promise((resolve, reject) => {
        setTimeout(function() {
        kelas3.push(siswa);
        const err = true

        if(!err){
            resolve()
        }else{
            reject('Error: wadidaw! ada yang salah nih.')
        }
    }, 1000);
})
}

function getKelas() {
    console.log('kelas:', kelas3);
}

tambahSiswa({nim: 2201903, nama:'Rifqie'})
    .then(getKelas)
    .catch(err => console.log(err))

//async

let kelas3 =  [
    {nim: 2201901, nama: "Ihsan"},
    {nim: 2201902, nama: "Toni"}
];

function tambahSiswa(siswa)
{
    return new Promise((resolve, reject) => {
        try {
            resolve()
            kelas3.push(siswa);
        }catch(err){
            console.log('Error: wadidaw! ada yang salah nih.')
        }
    })
}

function getKelas()
{
    console.log('kelas3:', kelas3)

}

async function init(){
    await tambahSiswa({nim: 2201903, nama:'Iki'})
    await getKelas()
}

init()