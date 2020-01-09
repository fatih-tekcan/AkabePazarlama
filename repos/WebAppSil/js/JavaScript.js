console.log("sayfa yüklendi");
document.writeln("Merhaba js");
//alert("merhaba alert");

//değişkenler için bir uygulama
//var ad = prompt("adınızı Giriniz: ");
//var ders = prompt("ders adını giriniz:");
//var dersnot1 = prompt("Birinci ders notunu giriniz: ");
//var dersnot2 = prompt("İkinci ders notunu giriniz: ");
//var ortalama = (Number(dersnot1) + Number(dersnot2)) / 2;

//console.log(ad + " İsimli öğrencinin " + ders + " Dersiden Not ortalaması:" + ortalama + "dır")

// matematiksel oporatorler

//var x = 10;
//var y = 20;
//var z = 30;
//var islem = (x+y*(z+x))/7;

//console.log("İşlem sonucu:" + islem)
//x++;
//console.log(x);
//y--;
//console.log(y);

// Karşılaştırma elemanları;

//console.log(x < z);
//console.log(z < x);
//var sonuc = z >= y;
//console.log("z >= y  " + sonuc)
//console.log(x == y);
//console.log("x == '11' "+ (x == "11"));
//console.log("x === '11'" + (x === "11"));
//console.log("x!=z  " + (x != z));
//console.log("x!='11'  " + (x != "11"));
//console.log("x!=='11'  " + (x !== "11"));

//Mantıksal operatörler

//  && ve and
//console.log((20 < 30) && (70 < 50));
//console.log((20 < 30) && (70 < 500));
//  || veya or

//console.log(1 < 0) || (2 < 9);
//console.log((1 < 0) || (2 < 9));

// ! not değil
//console.log("!")
//console.log(!(5 == 5));

// uygulama
//var a = prompt("a Sayısını Giriniz");
//var b = prompt("b Sayısını  Giriniz");
//var c = prompt("c Sayısını Giriniz");

//console.log("a en büyük mü? ", (a > b) && (a > c));
//console.log("a en büyük mü? ", ((a > b) && (a > c)));

// if else statedment
//var num = 10;
//var numa = 30;
//if (numa > num) {
//    console.log("30>20");
//}
//    else if (numa == num)
//{
//    console.log("30=10")
//}

// switch case
//var no = prompt("1 ile 5 arasında rakam giriniz: ");

//switch (no) {
//    case '1': console.log("Pazaretesi"); break;
//    case '2': console.log("Salı"); break;
//    case '3': console.log("Çarşamba"); break;
//    case '4': console.log("Perşembe"); break;
//    case '5': console.log("Cuma"); break;
//    default: console.log("Yanlış Değer girdiniz");
//}
// uygulama kullanıcının doğum yılına göre yaşını bulup ehliyet alabilir mi alamaz ise kaç yılı kaldığını söyleyelim.

//var dogumYili = prompt("Lütfen doğum yılınızı Giriniz:");

//var yas = 2019 - dogumYili;
//if (yas >= 18) {
//    console.log(yas + " Yaşındasınız Ehliyet Alabilirsiniz.");

//} else {
//    console.log("Şimdi " + (yas) + " Yaşındasın " + (18 - yas) + " Yıl sonra ehliyet alabilirsin");
//}

// 10 dan 100 e kadar for kullanarak:

//for (i = 10; i <= 100; i++) {
//    console.log("i =" + i);
//}

// 10 dan 100 e kadar 5 er 5er while ile

//var i = 10;
//while (i <= 100) {
//    console.log("i = " + i);
//   i= i + 5;
//}
//console.log("sonsuz döngü.");
// kullanıcan user ve ve password bilgisi alıp doğruluk kontrolu yapılacak.

//var userId = "fatihTekcan";
//var password = "25102019";
//var login = false;
//while (!login) {
//    userIdgrs = prompt("Kullanıcı Adınızı Giriniz:");
//    passwordgrs = prompt("şifrenizi giriniz:");

//    if (userId == userIdgrs && password == passwordgrs) {
//        console.log("Giriş Yapıldı");
//        alert("Giriş Yapıldı");
//        login=true
//    } else {
//        alert("giriş yapılmadı kullanıcı adı yada şifre yanlış");
//    }
//}

// diziler

//var marka = ["bmw", "opel", "ford", "mercedes"];
//var modeller = new Array("bmw model1", "corsa", "focus", "xl");
//var yıllar = new Array(2015, 2010, 2014, 2019);

//console.log(marka[0]);
//console.log(modeller[0]);

//modeller[0] = "Astra"; // 0 indexli elemena yeni atama yapıldı.

//console.log(modeller);

//marka.push("mazda");//dizinin sonuna ekleme yapıldı
//marka.unshift("dizinin başına ekleme");
//console.log(marka);

////marka.pop(); //dizinin sonundan çıkarma.
//console.log(marka);

////marka.shift(); // dizinin başından çıkarma
//console.log(marka);

//for (i = 0; i < marka.length; i++) {
//    console.log("Dizinin "+i+" inci elemanı= "+marka[i]);
//}

//console.log(marka.indexOf("Mazda"));//bulamaz ise -1 döndürür.
//console.log(marka.indexOf("mazda"));

//for (i = 0; i < modeller.length; i++) {
//    console.log(i);
//}
//console.log("foreach kullanımı");
//modeller.forEach(function (element)//elemen nesnesine sırasıyla tüm modelller dizisinin elemenlerı geliyor 
//{
//    console.log(element);

////});
//var marka = ["bmw", "opel", "ford", "mercedes"];
//var modeller = new Array("bmw model1", "corsa", "focus", "xl");
//var yıllar = new Array(2015, 2010, 2014, 2019);

//marka.push(prompt("marka giriniz."));
//modeller.push(prompt("model giriniz."));
//yıllar.push(prompt("model yılı giriniz."));

//for (i = 0; i < marka.length; i++) {
//    console.log(marka[i]);
//    console.log(" Marka");
//    console.log(modeller[i]);
//    console.log(" model ve");
//    console.log(2019 - yıllar[i]);
//    console.log(" Yaşında araçtır");

//}
//// object yapısi  /////////

//var arac = {
//    marka: "opel",
//    model: 'corsa',
//    yil: 2018,
//    renk: 'Mavi',
//    sınıf: 'B'
//}

//console.log(arac);
//console.log(arac['renk']);
//var kamyon = new Object();

//kamyon.marka = "man";
//kamyon.model = "big cdlk";
//kamyon.hacim = 30000;

//console.log(kamyon);
//var arabalar = [
//    {
//        marka: 'opel',
//        model: 'corsa',
//        yil: 2015,
//        renk: 'Mavi',
//        sınıf: 'B'
//    },
//    {
//        marka: 'mazda',
//        model: 'slx',
//        yil: 2018,
//        renk: 'Mavi',
//        sınıf: 'A'
//    },
//    {
//        marka: 'bmw',
//        model: 'cld',
//        yil: 2019,
//        renk: "sarı",
//        sınıf: 'C'
//    }
//]

//console.log("arabalar[0].marka=" + arabalar[0].marka);

//var namazVakitleri = [
//    { "Aksam": "17:43", "AyinSekliURL": "http://namazvakti.diyanet.gov.tr/images/dolunay.gif", "Gunes": "08:11", "GunesBatis": "17:36", "GunesDogus": "08:18", "HicriTarihKisa": "14.4.1441", "HicriTarihUzun": "14 R.AHİR 1441", "Ikindi": "15:22", "Imsak": "06:39", "KibleSaati": "11:01", "MiladiTarihKisa": "11.12.2019", "MiladiTarihKisaIso8601": "11.12.2019", "MiladiTarihUzun": "11 Aralık 2019 Çarşamba", "MiladiTarihUzunIso8601": "2019-12-11T00:00:00.0000000+03:00", "Ogle": "13:02", "Yatsi": "19:09" },
//    { "Aksam": "17:43", "AyinSekliURL": "http://namazvakti.diyanet.gov.tr/images/d1.gif", "Gunes": "08:12", "GunesBatis": "17:36", "GunesDogus": "08:19", "HicriTarihKisa": "15.4.1441", "HicriTarihUzun": "15 R.AHİR 1441", "Ikindi": "15:22", "Imsak": "06:40", "KibleSaati": "11:02", "MiladiTarihKisa": "12.12.2019", "MiladiTarihKisaIso8601": "12.12.2019", "MiladiTarihUzun": "12 Aralık 2019 Perşembe", "MiladiTarihUzunIso8601": "2019-12-12T00:00:00.0000000+03:00", "Ogle": "13:02", "Yatsi": "19:09" },
//    { "Aksam": "17:43", "AyinSekliURL": "http://namazvakti.diyanet.gov.tr/images/d2.gif", "Gunes": "08:13", "GunesBatis": "17:36", "GunesDogus": "08:20", "HicriTarihKisa": "16.4.1441", "HicriTarihUzun": "16 R.AHİR 1441", "Ikindi": "15:22", "Imsak": "06:41", "KibleSaati": "11:02", "MiladiTarihKisa": "13.12.2019", "MiladiTarihKisaIso8601": "13.12.2019", "MiladiTarihUzun": "13 Aralık 2019 Cuma", "MiladiTarihUzunIso8601": "2019-12-13T00:00:00.0000000+03:00", "Ogle": "13:03", "Yatsi": "19:09" },
//    { "Aksam": "17:43", "AyinSekliURL": "http://namazvakti.diyanet.gov.tr/images/d3.gif", "Gunes": "08:14", "GunesBatis": "17:36", "GunesDogus": "08:21", "HicriTarihKisa": "17.4.1441", "HicriTarihUzun": "17 R.AHİR 1441", "Ikindi": "15:22", "Imsak": "06:42", "KibleSaati": "11:02", "MiladiTarihKisa": "14.12.2019", "MiladiTarihKisaIso8601": "14.12.2019", "MiladiTarihUzun": "14 Aralık 2019 Cumartesi", "MiladiTarihUzunIso8601": "2019-12-14T00:00:00.0000000+03:00", "Ogle": "13:03", "Yatsi": "19:10" },
//    { "Aksam": "17:43", "AyinSekliURL": "http://namazvakti.diyanet.gov.tr/images/d4.gif", "Gunes": "08:14", "GunesBatis": "17:36", "GunesDogus": "08:21", "HicriTarihKisa": "18.4.1441", "HicriTarihUzun": "18 R.AHİR 1441", "Ikindi": "15:23", "Imsak": "06:42", "KibleSaati": "11:03", "MiladiTarihKisa": "15.12.2019", "MiladiTarihKisaIso8601": "15.12.2019", "MiladiTarihUzun": "15 Aralık 2019 Pazar", "MiladiTarihUzunIso8601": "2019-12-15T00:00:00.0000000+03:00", "Ogle": "13:04", "Yatsi": "19:10" },
//    { "Aksam": "17:44", "AyinSekliURL": "http://namazvakti.diyanet.gov.tr/images/d5.gif", "Gunes": "08:15", "GunesBatis": "17:37", "GunesDogus": "08:22", "HicriTarihKisa": "19.4.1441", "HicriTarihUzun": "19 R.AHİR 1441", "Ikindi": "15:23", "Imsak": "06:43", "KibleSaati": "11:03", "MiladiTarihKisa": "16.12.2019", "MiladiTarihKisaIso8601": "16.12.2019", "MiladiTarihUzun": "16 Aralık 2019 Pazartesi", "MiladiTarihUzunIso8601": "2019-12-16T00:00:00.0000000+03:00", "Ogle": "13:04", "Yatsi": "19:10" },
//    { "Aksam": "17:44", "AyinSekliURL": "http://namazvakti.diyanet.gov.tr/images/d6.gif", "Gunes": "08:16", "GunesBatis": "17:37", "GunesDogus": "08:23", "HicriTarihKisa": "20.4.1441", "HicriTarihUzun": "20 R.AHİR 1441", "Ikindi": "15:23", "Imsak": "06:44", "KibleSaati": "11:04", "MiladiTarihKisa": "17.12.2019", "MiladiTarihKisaIso8601": "17.12.2019", "MiladiTarihUzun": "17 Aralık 2019 Salı", "MiladiTarihUzunIso8601": "2019-12-17T00:00:00.0000000+03:00", "Ogle": "13:05", "Yatsi": "19:11" },
//    { "Aksam": "17:44", "AyinSekliURL": "http://namazvakti.diyanet.gov.tr/images/d7.gif", "Gunes": "08:16", "GunesBatis": "17:37", "GunesDogus": "08:23", "HicriTarihKisa": "21.4.1441", "HicriTarihUzun": "21 R.AHİR 1441", "Ikindi": "15:24", "Imsak": "06:44", "KibleSaati": "11:04", "MiladiTarihKisa": "18.12.2019", "MiladiTarihKisaIso8601": "18.12.2019", "MiladiTarihUzun": "18 Aralık 2019 Çarşamba", "MiladiTarihUzunIso8601": "2019-12-18T00:00:00.0000000+03:00", "Ogle": "13:05", "Yatsi": "19:11" },
//    { "Aksam": "17:45", "AyinSekliURL": "http://namazvakti.diyanet.gov.tr/images/sondordun.gif", "Gunes": "08:17", "GunesBatis": "17:38", "GunesDogus": "08:24", "HicriTarihKisa": "22.4.1441", "HicriTarihUzun": "22 R.AHİR 1441", "Ikindi": "15:24", "Imsak": "06:45", "KibleSaati": "11:04", "MiladiTarihKisa": "19.12.2019", "MiladiTarihKisaIso8601": "19.12.2019", "MiladiTarihUzun": "19 Aralık 2019 Perşembe", "MiladiTarihUzunIso8601": "2019-12-19T00:00:00.0000000+03:00", "Ogle": "13:06", "Yatsi": "19:11" },
//    { "Aksam": "17:45", "AyinSekliURL": "http://namazvakti.diyanet.gov.tr/images/sd1.gif", "Gunes": "08:18", "GunesBatis": "17:38", "GunesDogus": "08:25", "HicriTarihKisa": "23.4.1441", "HicriTarihUzun": "23 R.AHİR 1441", "Ikindi": "15:24", "Imsak": "06:45", "KibleSaati": "11:05", "MiladiTarihKisa": "20.12.2019", "MiladiTarihKisaIso8601": "20.12.2019", "MiladiTarihUzun": "20 Aralık 2019 Cuma", "MiladiTarihUzunIso8601": "2019-12-20T00:00:00.0000000+03:00", "Ogle": "13:06", "Yatsi": "19:12" },
//    { "Aksam": "17:45", "AyinSekliURL": "http://namazvakti.diyanet.gov.tr/images/sd2.gif", "Gunes": "08:18", "GunesBatis": "17:38", "GunesDogus": "08:25", "HicriTarihKisa": "24.4.1441", "HicriTarihUzun": "24 R.AHİR 1441", "Ikindi": "15:25", "Imsak": "06:46", "KibleSaati": "11:05", "MiladiTarihKisa": "21.12.2019", "MiladiTarihKisaIso8601": "21.12.2019", "MiladiTarihUzun": "21 Aralık 2019 Cumartesi", "MiladiTarihUzunIso8601": "2019-12-21T00:00:00.0000000+03:00", "Ogle": "13:07", "Yatsi": "19:12" },
//    { "Aksam": "17:46", "AyinSekliURL": "http://namazvakti.diyanet.gov.tr/images/sd3.gif", "Gunes": "08:19", "GunesBatis": "17:39", "GunesDogus": "08:26", "HicriTarihKisa": "25.4.1441", "HicriTarihUzun": "25 R.AHİR 1441", "Ikindi": "15:25", "Imsak": "06:46", "KibleSaati": "11:06", "MiladiTarihKisa": "22.12.2019", "MiladiTarihKisaIso8601": "22.12.2019", "MiladiTarihUzun": "22 Aralık 2019 Pazar", "MiladiTarihUzunIso8601": "2019-12-22T00:00:00.0000000+03:00", "Ogle": "13:07", "Yatsi": "19:13" },
//    { "Aksam": "17:46", "AyinSekliURL": "http://namazvakti.diyanet.gov.tr/images/sd4.gif", "Gunes": "08:19", "GunesBatis": "17:39", "GunesDogus": "08:26", "HicriTarihKisa": "26.4.1441", "HicriTarihUzun": "26 R.AHİR 1441", "Ikindi": "15:26", "Imsak": "06:47", "KibleSaati": "11:06", "MiladiTarihKisa": "23.12.2019", "MiladiTarihKisaIso8601": "23.12.2019", "MiladiTarihUzun": "23 Aralık 2019 Pazartesi", "MiladiTarihUzunIso8601": "2019-12-23T00:00:00.0000000+03:00", "Ogle": "13:08", "Yatsi": "19:13" },
//    { "Aksam": "17:47", "AyinSekliURL": "http://namazvakti.diyanet.gov.tr/images/sd5.gif", "Gunes": "08:20", "GunesBatis": "17:40", "GunesDogus": "08:27", "HicriTarihKisa": "27.4.1441", "HicriTarihUzun": "27 R.AHİR 1441", "Ikindi": "15:26", "Imsak": "06:47", "KibleSaati": "11:07", "MiladiTarihKisa": "24.12.2019", "MiladiTarihKisaIso8601": "24.12.2019", "MiladiTarihUzun": "24 Aralık 2019 Salı", "MiladiTarihUzunIso8601": "2019-12-24T00:00:00.0000000+03:00", "Ogle": "13:08", "Yatsi": "19:14" },
//    { "Aksam": "17:48", "AyinSekliURL": "http://namazvakti.diyanet.gov.tr/images/sd6.gif", "Gunes": "08:20", "GunesBatis": "17:41", "GunesDogus": "08:27", "HicriTarihKisa": "28.4.1441", "HicriTarihUzun": "28 R.AHİR 1441", "Ikindi": "15:27", "Imsak": "06:48", "KibleSaati": "11:07", "MiladiTarihKisa": "25.12.2019", "MiladiTarihKisaIso8601": "25.12.2019", "MiladiTarihUzun": "25 Aralık 2019 Çarşamba", "MiladiTarihUzunIso8601": "2019-12-25T00:00:00.0000000+03:00", "Ogle": "13:09", "Yatsi": "19:14" },
//    { "Aksam": "17:48", "AyinSekliURL": "http://namazvakti.diyanet.gov.tr/images/ruyet.gif", "Gunes": "08:20", "GunesBatis": "17:41", "GunesDogus": "08:27", "HicriTarihKisa": "29.4.1441", "HicriTarihUzun": "29 R.AHİR 1441", "Ikindi": "15:28", "Imsak": "06:48", "KibleSaati": "11:08", "MiladiTarihKisa": "26.12.2019", "MiladiTarihKisaIso8601": "26.12.2019", "MiladiTarihUzun": "26 Aralık 2019 Perşembe", "MiladiTarihUzunIso8601": "2019-12-26T00:00:00.0000000+03:00", "Ogle": "13:09", "Yatsi": "19:15" },
//    { "Aksam": "17:49", "AyinSekliURL": "http://namazvakti.diyanet.gov.tr/images/r1.gif", "Gunes": "08:21", "GunesBatis": "17:42", "GunesDogus": "08:28", "HicriTarihKisa": "1.5.1441", "HicriTarihUzun": "1 C.EVVEL 1441", "Ikindi": "15:28", "Imsak": "06:49", "KibleSaati": "11:09", "MiladiTarihKisa": "27.12.2019", "MiladiTarihKisaIso8601": "27.12.2019", "MiladiTarihUzun": "27 Aralık 2019 Cuma", "MiladiTarihUzunIso8601": "2019-12-27T00:00:00.0000000+03:00", "Ogle": "13:10", "Yatsi": "19:15" },
//    { "Aksam": "17:49", "AyinSekliURL": "http://namazvakti.diyanet.gov.tr/images/r2.gif", "Gunes": "08:21", "GunesBatis": "17:42", "GunesDogus": "08:28", "HicriTarihKisa": "2.5.1441", "HicriTarihUzun": "2 C.EVVEL 1441", "Ikindi": "15:29", "Imsak": "06:49", "KibleSaati": "11:09", "MiladiTarihKisa": "28.12.2019", "MiladiTarihKisaIso8601": "28.12.2019", "MiladiTarihUzun": "28 Aralık 2019 Cumartesi", "MiladiTarihUzunIso8601": "2019-12-28T00:00:00.0000000+03:00", "Ogle": "13:10", "Yatsi": "19:16" },
//    { "Aksam": "17:50", "AyinSekliURL": "http://namazvakti.diyanet.gov.tr/images/r3.gif", "Gunes": "08:21", "GunesBatis": "17:43", "GunesDogus": "08:28", "HicriTarihKisa": "3.5.1441", "HicriTarihUzun": "3 C.EVVEL 1441", "Ikindi": "15:30", "Imsak": "06:49", "KibleSaati": "11:10", "MiladiTarihKisa": "29.12.2019", "MiladiTarihKisaIso8601": "29.12.2019", "MiladiTarihUzun": "29 Aralık 2019 Pazar", "MiladiTarihUzunIso8601": "2019-12-29T00:00:00.0000000+03:00", "Ogle": "13:11", "Yatsi": "19:17" },
//    { "Aksam": "17:51", "AyinSekliURL": "http://namazvakti.diyanet.gov.tr/images/r4.gif", "Gunes": "08:22", "GunesBatis": "17:44", "GunesDogus": "08:29", "HicriTarihKisa": "4.5.1441", "HicriTarihUzun": "4 C.EVVEL 1441", "Ikindi": "15:30", "Imsak": "06:50", "KibleSaati": "11:10", "MiladiTarihKisa": "30.12.2019", "MiladiTarihKisaIso8601": "30.12.2019", "MiladiTarihUzun": "30 Aralık 2019 Pazartesi", "MiladiTarihUzunIso8601": "2019-12-30T00:00:00.0000000+03:00", "Ogle": "13:11", "Yatsi": "19:17" },
//    { "Aksam": "17:52", "AyinSekliURL": "http://namazvakti.diyanet.gov.tr/images/r5.gif", "Gunes": "08:22", "GunesBatis": "17:45", "GunesDogus": "08:29", "HicriTarihKisa": "5.5.1441", "HicriTarihUzun": "5 C.EVVEL 1441", "Ikindi": "15:31", "Imsak": "06:50", "KibleSaati": "11:11", "MiladiTarihKisa": "31.12.2019", "MiladiTarihKisaIso8601": "31.12.2019", "MiladiTarihUzun": "31 Aralık 2019 Salı", "MiladiTarihUzunIso8601": "2019-12-31T00:00:00.0000000+03:00", "Ogle": "13:12", "Yatsi": "19:18" },
//    { "Aksam": "17:52", "AyinSekliURL": "http://namazvakti.diyanet.gov.tr/images/r5.gif", "Gunes": "08:22", "GunesBatis": "17:45", "GunesDogus": "08:29", "HicriTarihKisa": "6.5.1441", "HicriTarihUzun": "6 Cemaziyelevvel 1441", "Ikindi": "15:32", "Imsak": "06:50", "KibleSaati": "11:11", "MiladiTarihKisa": "01.01.2020", "MiladiTarihKisaIso8601": "01.01.2020", "MiladiTarihUzun": "01 Ocak 2020 Çarşamba", "MiladiTarihUzunIso8601": "2020-01-01T00:00:00.0000000+03:00", "Ogle": "13:12", "Yatsi": "19:19" },
//    { "Aksam": "17:53", "AyinSekliURL": "http://namazvakti.diyanet.gov.tr/images/r6.gif", "Gunes": "08:22", "GunesBatis": "17:46", "GunesDogus": "08:29", "HicriTarihKisa": "7.5.1441", "HicriTarihUzun": "7 Cemaziyelevvel 1441", "Ikindi": "15:32", "Imsak": "06:50", "KibleSaati": "11:12", "MiladiTarihKisa": "02.01.2020", "MiladiTarihKisaIso8601": "02.01.2020", "MiladiTarihUzun": "02 Ocak 2020 Perşembe", "MiladiTarihUzunIso8601": "2020-01-02T00:00:00.0000000+03:00", "Ogle": "13:13", "Yatsi": "19:20" },
//    { "Aksam": "17:54", "AyinSekliURL": "http://namazvakti.diyanet.gov.tr/images/ilkdordun.gif", "Gunes": "08:22", "GunesBatis": "17:47", "GunesDogus": "08:29", "HicriTarihKisa": "8.5.1441", "HicriTarihUzun": "8 Cemaziyelevvel 1441", "Ikindi": "15:33", "Imsak": "06:50", "KibleSaati": "11:13", "MiladiTarihKisa": "03.01.2020", "MiladiTarihKisaIso8601": "03.01.2020", "MiladiTarihUzun": "03 Ocak 2020 Cuma", "MiladiTarihUzunIso8601": "2020-01-03T00:00:00.0000000+03:00", "Ogle": "13:13", "Yatsi": "19:20" },
//    { "Aksam": "17:55", "AyinSekliURL": "http://namazvakti.diyanet.gov.tr/images/i1.gif", "Gunes": "08:22", "GunesBatis": "17:48", "GunesDogus": "08:29", "HicriTarihKisa": "9.5.1441", "HicriTarihUzun": "9 Cemaziyelevvel 1441", "Ikindi": "15:34", "Imsak": "06:51", "KibleSaati": "11:13", "MiladiTarihKisa": "04.01.2020", "MiladiTarihKisaIso8601": "04.01.2020", "MiladiTarihUzun": "04 Ocak 2020 Cumartesi", "MiladiTarihUzunIso8601": "2020-01-04T00:00:00.0000000+03:00", "Ogle": "13:14", "Yatsi": "19:21" },
//    { "Aksam": "17:56", "AyinSekliURL": "http://namazvakti.diyanet.gov.tr/images/i2.gif", "Gunes": "08:22", "GunesBatis": "17:49", "GunesDogus": "08:29", "HicriTarihKisa": "10.5.1441", "HicriTarihUzun": "10 Cemaziyelevvel 1441", "Ikindi": "15:35", "Imsak": "06:51", "KibleSaati": "11:14", "MiladiTarihKisa": "05.01.2020", "MiladiTarihKisaIso8601": "05.01.2020", "MiladiTarihUzun": "05 Ocak 2020 Pazar", "MiladiTarihUzunIso8601": "2020-01-05T00:00:00.0000000+03:00", "Ogle": "13:14", "Yatsi": "19:22" },
//    { "Aksam": "17:57", "AyinSekliURL": "http://namazvakti.diyanet.gov.tr/images/i3.gif", "Gunes": "08:22", "GunesBatis": "17:50", "GunesDogus": "08:29", "HicriTarihKisa": "11.5.1441", "HicriTarihUzun": "11 Cemaziyelevvel 1441", "Ikindi": "15:36", "Imsak": "06:51", "KibleSaati": "11:15", "MiladiTarihKisa": "06.01.2020", "MiladiTarihKisaIso8601": "06.01.2020", "MiladiTarihUzun": "06 Ocak 2020 Pazartesi", "MiladiTarihUzunIso8601": "2020-01-06T00:00:00.0000000+03:00", "Ogle": "13:15", "Yatsi": "19:23" },
//    { "Aksam": "17:58", "AyinSekliURL": "http://namazvakti.diyanet.gov.tr/images/i4.gif", "Gunes": "08:22", "GunesBatis": "17:51", "GunesDogus": "08:29", "HicriTarihKisa": "12.5.1441", "HicriTarihUzun": "12 Cemaziyelevvel 1441", "Ikindi": "15:37", "Imsak": "06:51", "KibleSaati": "11:15", "MiladiTarihKisa": "07.01.2020", "MiladiTarihKisaIso8601": "07.01.2020", "MiladiTarihUzun": "07 Ocak 2020 Salı", "MiladiTarihUzunIso8601": "2020-01-07T00:00:00.0000000+03:00", "Ogle": "13:15", "Yatsi": "19:24" },
//    { "Aksam": "17:59", "AyinSekliURL": "http://namazvakti.diyanet.gov.tr/images/i5.gif", "Gunes": "08:22", "GunesBatis": "17:52", "GunesDogus": "08:29", "HicriTarihKisa": "13.5.1441", "HicriTarihUzun": "13 Cemaziyelevvel 1441", "Ikindi": "15:37", "Imsak": "06:51", "KibleSaati": "11:16", "MiladiTarihKisa": "08.01.2020", "MiladiTarihKisaIso8601": "08.01.2020", "MiladiTarihUzun": "08 Ocak 2020 Çarşamba", "MiladiTarihUzunIso8601": "2020-01-08T00:00:00.0000000+03:00", "Ogle": "13:15", "Yatsi": "19:25" },
//    { "Aksam": "18:00", "AyinSekliURL": "http://namazvakti.diyanet.gov.tr/images/i6.gif", "Gunes": "08:22", "GunesBatis": "17:53", "GunesDogus": "08:29", "HicriTarihKisa": "14.5.1441", "HicriTarihUzun": "14 Cemaziyelevvel 1441", "Ikindi": "15:38", "Imsak": "06:51", "KibleSaati": "11:17", "MiladiTarihKisa": "09.01.2020", "MiladiTarihKisaIso8601": "09.01.2020", "MiladiTarihUzun": "09 Ocak 2020 Perşembe", "MiladiTarihUzunIso8601": "2020-01-09T00:00:00.0000000+03:00", "Ogle": "13:16", "Yatsi": "19:25" },
//    { "Aksam": "18:01", "AyinSekliURL": "http://namazvakti.diyanet.gov.tr/images/dolunay.gif", "Gunes": "08:22", "GunesBatis": "17:54", "GunesDogus": "08:29", "HicriTarihKisa": "15.5.1441", "HicriTarihUzun": "15 Cemaziyelevvel 1441", "Ikindi": "15:39", "Imsak": "06:51", "KibleSaati": "11:17", "MiladiTarihKisa": "10.01.2020", "MiladiTarihKisaIso8601": "10.01.2020", "MiladiTarihUzun": "10 Ocak 2020 Cuma", "MiladiTarihUzunIso8601": "2020-01-10T00:00:00.0000000+03:00", "Ogle": "13:16", "Yatsi": "19:26" }]

//console.log(namazVakitleri);

//for (i = 0; i < namazVakitleri.length; i++) {
//    if (namazVakitleri[i].MiladiTarihKisa == "12.12.2019") {
//        console.log("Namaz Vakitleri= İmsak: " + namazVakitleri[i].Imsak + " Öğle Namazi: " + namazVakitleri[i].Ogle + " İkindi: " + namazVakitleri[i].Ikindi + " Akşam: " + namazVakitleri[i].Aksam + " Yatsı: " + namazVakitleri[i].Yatsi);
//        document.writeln("Namaz Vakitleri= İmsak: " + namazVakitleri[i].Imsak + " Öğle Namazi: " + namazVakitleri[i].Ogle + " İkindi: " + namazVakitleri[i].Ikindi + " Akşam: " + namazVakitleri[i].Aksam + " Yatsı: " + namazVakitleri[i].Yatsi);
//        break;
//    }
//    else { console.log("Vakit bulunamadı"); }

//}

///// object uygulama

// 1.) Personel bilgilerini giriyoruz

//var personelx = {
//    ad: "fatih",
//    soyad: "tekcan",
//    cinsiyet: "erkek",
//    telefon: "5466336977",
//    adres: "İzmir",
//    Meslek: "Bilgisayar Müh.",
//    yabanciDiller: ['İnglizce', 'Almanca'],
//    hobiler: ["Yüzme", "okuma", "sinema", "spor", "traking"],
//    extra: {
//        ad: "Mehmet",
//        soyad: "tekcan",
//        cinsiyet: "erkek",
//        telefon: "5466336977",
//        adres: "İzmir",
//        Meslek: "Bilgisayar Müh.",
//        yabanciDiller: ['İnglizce', 'Almanca'],
//        hobiler: ["Yüzme", "okuma", "sinema", "spor", "traking"],
//        extra: {
//            ad: "Mehmet",
//            soyad: "tekcan",
//            cinsiyet: "erkek",
//            telefon: "5466336977",
//            adres: "İzmir",
//            Meslek: "Bilgisayar Müh.",
//            yabanciDiller: ['İnglizce', 'Almanca'],
//            hobiler: ["Yüzme", "okuma", "sinema", "spor", "traking"],
//        }
//    }

//};
//console.log(personelx.extra.ad);
//var personel = {
//    ad: "fatih",
//    soyad: "tekcan",
//    cinsiyet: "erkek",
//    telefon: "5466336977",
//    adres: "İzmir",
//    Meslek: "Bilgisayar Müh.",
//    yabanciDiller: ['İnglizce', 'Almanca'],
//    hobiler: ["Yüzme", "okuma", "sinema", "spor", "traking"]
//};
////2.)
//console.log("Bilinen Dil sayısı " + personel.yabanciDiller.length);
////3.)
//personel.hobiler.forEach(function (element) {
//    console.log("***"+element);

//});

////4.)
//var tumPersonel = [{
//    ad: "fatih",
//    soyad: "tekcan",
//    cinsiyet: "erkek",
//    telefon: "5466336977",
//    adres: "İzmir",
//    Meslek: "Bilgisayar Müh.",
//    yabanciDiller: ['İnglizce', 'Almanca'],
//    hobiler: ["Yüzme", "okuma", "sinema", "spor", "traking"],
//    ex: []
//},
//{
//    ad: "Mehmet",
//    soyad: "tekcan",
//    cinsiyet: "erkek",
//    telefon: "5466336977",
//    adres: "İzmir",
//    Meslek: "Bilgisayar Müh.",
//    yabanciDiller: ['İnglizce', 'Almanca'],
//    hobiler: ["Yüzme", "okuma", "sinema", "spor", "traking"],
//    ex: []

//},
//{
//    ad: "murat",
//    soyad: "tekcan",
//    cinsiyet: "erkek",
//    telefon: "5466336977",
//    adres: "İzmir",
//    Meslek: "Bilgisayar Müh.",
//    yabanciDiller: ['İnglizce', 'Almanca'],
//    hobiler: ["Yüzme", "okuma", "sinema", "spor", "traking"],
//    ex: [{
//        ad: "fatih",
//        soyad: "tekcan",
//        cinsiyet: "erkek",
//        telefon: "5466336977",
//        adres: "İzmir",
//        Meslek: "Bilgisayar Müh.",
//        yabanciDiller: ['İnglizce', 'Almanca'],
//        hobiler: ["Yüzme", "okuma", "sinema", "spor", "traking"]
//    },
//    {
//        ad: "ex1",
//        soyad: "tekcan",
//        cinsiyet: "erkek",
//        telefon: "5466336977",
//        adres: "İzmir",
//        Meslek: "Bilgisayar Müh.",
//        yabanciDiller: ['İnglizce', 'Almanca'],
//        hobiler: ["Yüzme", "okuma", "sinema", "spor", "traking"]
//    },
//    {
//        ad: "murat",
//        soyad: "tekcan",
//        cinsiyet: "erkek",
//        telefon: "5466336977",
//        adres: "İzmir",
//        Meslek: "Bilgisayar Müh.",
//        yabanciDiller: ['İnglizce', 'Almanca'],
//        hobiler: ["Yüzme", "okuma", "sinema", "spor", "traking"],
//        extra: {
//            ad: "Mehmet",
//            soyad: "tekcan",
//            cinsiyet: "erkek",
//            telefon: "5466336977",
//            adres: "İzmir",
//            Meslek: "Bilgisayar Müh.",
//            yabanciDiller: ['İnglizce', 'Almanca'],
//            hobiler: ["Yüzme", "okuma", "sinema", "spor", "traking"],
//            extra: {
//                ad: "Mehmet",
//                soyad: "tekcan",
//                cinsiyet: "erkek",
//                telefon: "5466336977",
//                adres: "İzmir",
//                Meslek: "Bilgisayar Müh.",
//                yabanciDiller: ['İnglizce', 'Almanca'],
//                hobiler: ["Yüzme", "okuma", "sinema", "spor", "traking"],
//            }
//        }
//    }]
//}];

//personel adı ve bildiği diileri yazdıralım.

//tumPersonel.forEach(function (tumPersonel) {
//    console.log(">>>>>>>>>>>\n"+tumPersonel.ad);
//    tumPersonel.yabanciDiller.forEach(function (element) {
//        console.log(element);
//    })
//        console.log(">>>>>>>>>>")
//});

////// Fonksiyonlar function()

//function toplama(x, y) {
//    return (x + y);
//}
//var sonuc = toplama(29, 56);
//console.log(sonuc);

///// yaş hesaplama
//var now = 2019;
//function yas(dYili) {
//    return now - dYili;

//}
//console.log("fatihin yaşı " + yas(1989));

///// emeklilik Kalan yıl hesabı hesaplama
//emeklilikKalan('fatih', 1989);
//function emeklilikKalan(ad, dYili) {
//    if ((65 - yas(dYili)) > 0) {
//        console.log(ad + " " + (65 - yas(dYili)) + " yıl sonra emekli olabilir.");
//    } else if ((65 - yas(dYili)) == 0) {
//        console.log("Emeklilik yaşınızdasınız")
//    } else {
//        console.log("Emeklilik yaşınızı" - 1 * yas(dYili) + " önce tamamlamışsınız");
//    }
//}

//// function uygulamalar.
////1. girilen sayının tek mi çift mi olduğunu bulma.

//var sayi = prompt("Bir sayı giriniz. ");
//sayiKontrol(sayi)
//function sayiKontrol(sayi) {
//    if (sayi % 2 == 0) {
//        console.log("Girilen " + sayi + " sı çifttir");
//    } else {
//        console.log("Girilen " + sayi + " sı tektir");
//    }

//}
//console.log("sayının faktöriyeli = " + factorial(sayi));
////2. girilen sayının fatöriyelini hesaplayan program

//function factorial(sayi) {
//    if (sayi > 1) {
//        return sayi * factorial(sayi - 1);
//    }
//        else { return 1; }

//}
//var current = new Date();
//console.log("date " + current.getMinutes() + "-" + current.getSeconds() + "-" + current.getMilliseconds());
//var son = 0;
//for (i = 0; i < 1000; i++) {
//    var son = i + son;
//}
//console.log(son);
//var current = new Date();
//console.log("date " + current.getMinutes() + "-" + current.getSeconds() + "-" + current.getMilliseconds());

//var ogrenciler = [
//    {
//        ad: "fatih",
//        soyad: "tekcan",
//        bölüm:"Bilgisayar müh"
//    },
//    {
//        ad: "mehmet",
//        soyad: "tekcan",
//        bölüm: "Bilgisayar müh"
//    },
//    {
//        ad: "hasan",
//        soyad: "tekcan",
//        bölüm: "Bilgisayar müh"
//    }
//]
//yazdir(ogrenciler);
//function yazdir(ogrenciler) {
//    for (i = 0; i < ogrenciler.length; i++) {
//        console.log(ogrenciler[i].ad +
//        ogrenciler[i].soyad+
//        ogrenciler[i].bölüm)

//    }

//    ogrenciler.forEach(function (item) {
//        console.log("itemlar" + item.ad + item.soyad + item.bölüm);
//    });
//};
//vakit(namazVakitleri);
//function vakit(namazVakitleri) {
//    for (i = 0; i < namazVakitleri.length; i++) {
//        if (namazVakitleri[i].MiladiTarihKisa == "12.12.2019") {
//            console.log("Namaz Vakitleri= İmsak: " + namazVakitleri[i].Imsak + " Öğle Namazi: " + namazVakitleri[i].Ogle + " İkindi: " + namazVakitleri[i].Ikindi + " Akşam: " + namazVakitleri[i].Aksam + " Yatsı: " + namazVakitleri[i].Yatsi);
//            document.writeln("Namaz Vakitleri= İmsak: " + namazVakitleri[i].Imsak + " Öğle Namazi: " + namazVakitleri[i].Ogle + " İkindi: " + namazVakitleri[i].Ikindi + " Akşam: " + namazVakitleri[i].Aksam + " Yatsı: " + namazVakitleri[i].Yatsi);
//            break;
//        }
//        else { console.log("Vakit bulunamadı"); }

//    }
//}

//console.log("ne olacak" + namazVakitleri);

//var request = new XMLHttpRequest();
//request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
//request.onload = function () {

//    // Begin accessing JSON data here
//    var data = JSON.parse(this.response);
//    if (request.status >= 200 && request.status < 400) {
//        data.forEach(movie => {
//             console.log(movie.title);


//            console.log(movie.description); 

//        });
//    } else {
//        const errorMessage = document.createElement('marquee');
//        errorMessage.textContent = `Gah, it's not working!`;
//        app.appendChild(errorMessage);
//    }
//}

//request.send();

//var request = new XMLHttpRequest();
//request.open('GET', 'https://ezanvakti.herokuapp.com/vakitler?ilce=9560', true);
//request.onload = function () {

//    // Begin accessing JSON data here
//    var data = JSON.parse(this.response);
//    if (request.status >= 200 && request.status < 400) {
//        data.forEach(namaz => {

//            console.log("*************************************** ");
//            console.log("Tarih: " + namaz.MiladiTarihKisa);
//            console.log("İmsak: " + namaz.Imsak);
//            console.log("Öğlen: " + namaz.Ogle);
//            console.log("İkindi: " + namaz.Ikindi);
//            console.log("Akşam: " + namaz.Aksam);
//            console.log("Yatsı: " + namaz.Yatsi);





//        });
//    } else {
//        const errorMessage = document.createElement('marquee');
//        errorMessage.textContent = `Gah, it's not working!`;
//        app.appendChild(errorMessage);
//    }
//}

//request.send();



// BİR CÜMLENİ İÇİNDE İSTENİLEN KARAKTER SAYISINA GÖRE özet çıkarılsın.

var soz = "Onun          merhametci sütindir,                 biz de onun süt emer çocuklarıyız.\
Bu sözün sonu gelmez.Sen yine o fil hikayesine dön,  yine o                  hikayeye başla da onu anlat.\
Fil yavrularına dokunanlar hikayesinin sonu Fil onların her birerinin ağızlarını koklamakta,\
    hepsinin midelerinin etrafında dönüp                 dolaşmakta, Yavrusunu kim kebabedip yemişse, bularak öc almağa,\
    kuvvetini göstermeğe öalışmaktaydı.Sen de Tanrı kullarının etlerini yemekte,\
    onların aleyhinde bulunup günah kazanmaktasın.Kendinize gelin, sizin  ağzınızı koklıyan da Tanrı'dır.\
Doğrudan başka kim              canını kurtarabilir? Bir adamın kabirde ağzını koklıyan Münker,\
    yahut Nekir olursa           yazıklar olsun o acınmağa değer kişiye! O ulu  meleklerden ne ağzını gizlemeye imkan var,\
    ne güzel kokularla iyi bir hale         getirmeye çare.Mezara girene, onlara  yaltaklanmak mümkün değil; akıl,\
    fikir için hileye     sapmaya      yol yok!  Saçma  sapan  söyliyen  adamın  başına gürzleri iner, pençeleri batar.";

console.log(soz);
console.log("soz.length " + soz.length);
var newsoz = soz.replace(/^\s+|\s+$/gm, '');
console.log("soz.trim.length " + newsoz.length);

soz.trim()

var ozet = soz.substring(0)
var sonsoz = "";
for (i = 0; i < soz.length; i++) {

    if ((soz.substring(i, i + 1) == " ") && (soz.substring(i + 1, i + 2) == " ")) { }
    else {
        sonsoz = sonsoz + soz.substring(i, i + 1);
    }
}
console.log("sonsoz length = " + sonsoz.length);
console.log("sonsoz= " + sonsoz);

var sozdizi = sonsoz.split(' ');
console.log(sozdizi);





