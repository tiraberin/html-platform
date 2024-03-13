document.getElementById('penjumlahan').addEventListener('click', function () {
  var bilangan1 = parseFloat(document.getElementById('bilangan1').value);
  var bilangan2 = parseFloat(document.getElementById('bilangan2').value);
  var hasil = bilangan1 + bilangan2;
  document.getElementById('hasil').value = hasil;
});

document.getElementById('pengurangan').addEventListener('click', function () {
  var bilangan1 = parseFloat(document.getElementById('bilangan1').value);
  var bilangan2 = parseFloat(document.getElementById('bilangan2').value);
  var hasil = bilangan1 - bilangan2;
  document.getElementById('hasil').value = hasil;
});
