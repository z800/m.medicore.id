const date      = new Date();
const namaHari  = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];

function formatName(label) {
   // your logic
}

function formatHari() {

  return this.hari() + ' ' + this.jam() + ':' + this.menit() + ':' + this.detik()
  
}

function hari() {

  return namaHari[date.getDay()]

}

function jam() {

  return date.getHours()

}

function menit() {

  return date.getMinutes()

}

function detik() {

  return date.getSeconds()

}

export {
  hari,
  jam,
  menit,
  detik,
  formatName,
  formatHari,
};
