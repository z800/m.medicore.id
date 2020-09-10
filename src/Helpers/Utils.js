const namaHari  = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];
const Avatar    = "iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAIAAAAiOjnJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFHGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDE4LTEyLTExVDIwOjQzOjE5KzA1OjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOC0xMi0xM1QyMTozOToyOCswNTozMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOC0xMi0xM1QyMTozOToyOCswNTozMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozNTI3MzUwOS0xODFjLTJlNGEtOTZmMy1lZmZlM2I1NTUwNTUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzUyNzM1MDktMTgxYy0yZTRhLTk2ZjMtZWZmZTNiNTU1MDU1IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MzUyNzM1MDktMTgxYy0yZTRhLTk2ZjMtZWZmZTNiNTU1MDU1Ij4gPHhtcE1NOkhpc3Rvcnk";

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

function generateRandomString(length) {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

function generateRandomData(length) {
  console.log( length )

  let result = [];
  for (let i = 0; i < length; i++) {
    result.push({
      id: Math.floor(Math.random() * 1000),
      photo: Avatar,
      name: this.generateRandomString(15),
      phone: '+62 188 649 7200',
    });
  }
  console.log( result )
  return result;
};

export {
  hari,
  jam,
  menit,
  detik,
  formatName,
  formatHari,
  generateRandomData,
  generateRandomString
};
