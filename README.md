## function açarak degişkenlerimi atayıp,txtKrediTutari value ulaştım.

## listeVade id ile çektim,verdigim optionsların value'sini çektim 

## if & else if vererek faiz oranlarını hesapladım.

## innerHTML ile ekrana döktüm..

## function krediHesapla() {

## var cekilecekTutar, VadeSayisi;

## var aylikTaksit, OdenecekToplamTutar;

## cekilecekTutar = document.getElementById("txtKrediTutari").value;

## var liste = document.getElementById("listeVade");

     VadeSayisi = liste.options[liste.selectedIndex].value;

## if (VadeSayisi == 12) {

       OdenecekToplamTutar = cekilecekTutar * 1.3;

## } else if (VadeSayisi == 24) {

## OdenecekToplamTutar = cekilecekTutar \* 1.4;

## } else if (VadeSayisi == 36) {

       OdenecekToplamTutar = cekilecekTutar * 1.5;

## } else if (VadeSayisi == 48) {

## OdenecekToplamTutar = cekilecekTutar \* 1.7;

## }

## aylikTaksit = OdenecekToplamTutar / VadeSayisi;

## document.querySelector("#sonuc").innerHTML =

    ##   "Toplam Geri Ödeme: " +
     ##  OdenecekToplamTutar.toLocaleString("tr-TR", {
       ##  style: "currency",
       ##  currency: "TRY",
       ##  minimumFractionDigits: 2,
      }) +
     ##  " | Aylık Taksit Tutarı: " +
     ##  aylikTaksit.toLocaleString("tr-TR", {
       ##  style: "currency",
       ##  currency: "TRY",
      ##   minimumFractionDigits: 2,
      });

}
