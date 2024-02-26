function krediHesapla() {
  var cekilecekTutar, VadeSayisi;
  var aylikTaksit, OdenecekToplamTutar;

  cekilecekTutar = document.getElementById("txtKrediTutari").value;

  var liste = document.getElementById("listeVade");
  VadeSayisi = liste.options[liste.selectedIndex].value;

  if (VadeSayisi == 6) {
    OdenecekToplamTutar = cekilecekTutar * 1.4;
  } else if (VadeSayisi == 12) {
    OdenecekToplamTutar = cekilecekTutar * 1.7;
  } else if (VadeSayisi == 24) {
    OdenecekToplamTutar = cekilecekTutar * 1.6;
  } else if (VadeSayisi == 36) {
    OdenecekToplamTutar = cekilecekTutar * 1.8;
  } else if (VadeSayisi == 48) {
    OdenecekToplamTutar = cekilecekTutar * 2.0;
  }
  aylikTaksit = OdenecekToplamTutar / VadeSayisi;

  document.querySelector("#sonuc").innerHTML =
    "Toplam Geri Ödeme: " +
    OdenecekToplamTutar.toLocaleString("tr-TR", {
      style: "currency",
      currency: "TRY",
      minimumFractionDigits: 2,
    }) +
    " | Aylık Taksit Tutarı: " +
    aylikTaksit.toLocaleString("tr-TR", {
      style: "currency",
      currency: "TRY",
      minimumFractionDigits: 2,
    });
}
