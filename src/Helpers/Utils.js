const namaHari  = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];

function formatName(label) {
   // your logic
}

function formatHari(date) {
  return this.hari(date) + ', ' + this.jam(date) + ':' + this.menit(date) + ':' + this.detik(date)
}

function hari(date) {
  return namaHari[date.getDay()]
}

function jam(date) {
  return ( date.getHours() < 10 ? '0' : '') + date.getHours()
}

function menit(date) {
  return ( date.getMinutes() < 10 ? '0' : '') + date.getMinutes()
}

function detik(date) {
  return ( date.getSeconds() < 10 ? '0' : '') + date.getSeconds()
}

export {
  hari,
  jam,
  menit,
  detik,
  formatName,
  formatHari,
};
