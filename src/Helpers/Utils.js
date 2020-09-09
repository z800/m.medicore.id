function formatName(label) {
   // your logic
}

function formatDate(date) {

  const dates   = date;
  const jam     = dates.getHours()
  const menit   = dates.getMinutes()
  const detik   = dates.getSeconds()

  return 'dd'

}

// Now you have to export each function you want
export {
   formatName,
   formatDate,
};
