function krediHesapla(){
var cekilecekTutar = document.getElementById("txtKrediTutari").value;

var liste = document.getElementById("listeVade");
var VadeSayisi = liste.options[liste.selectedIndex].value; 

if(VadeSayisi == 6){
    OdenecekToplamTutar = cekilecekTutar * 1.6
}
else if (VadeSayisi == 12){
    OdenecekToplamTutar = cekilecekTutar * 2.0
}
else if (VadeSayisi == 24){
    OdenecekToplamTutar = cekilecekTutar * 2.8
}
else if (VadeSayisi == 36){
    OdenecekToplamTutar = cekilecekTutar * 3.5
}
else if (VadeSayisi == 48){
    OdenecekToplamTutar = cekilecekTutar * 4.5
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


