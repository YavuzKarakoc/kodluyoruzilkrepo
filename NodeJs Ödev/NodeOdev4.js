const fs = require("fs");



//  verilen dosyayı istenildiği gibi oluşturma

const writefile = () =>
  fs.writeFile(
    "example.json", '{"name": "Employee 1 Name", "salary": 2000} ',"utf-8",
    (err) => {
      if (err) console.log(err);
      console.log("DOSYA BAŞARILI BİR ŞEKİLDE OLUŞTURULDU.");
      
    }
  );
  writefile();

// oluşturulan dosyayı  okuma  bilgilerini görme

// const readfile = () =>
//   fs.readFile("example.json", "utf-8", (err, data) => {
//     if (err) console.log(err);
//     console.log(data);
//     console.log("DOSYA OKUNDU");
    
//   });
// readfile();


// oluşturulan dosyaya yeni bir json ekleme yani güncelleme

// const appendfile = () =>
//   fs.appendFile(
//     "example.json",
//     ',{"name": "Employee 2 Name", "salary": 1000}',
//     "utf-8",
//     (err) => {
//       if (err) console.log(err);
//       console.log("YENI VERI EKLENDI.");
      
//     }
//   );
// appendfile();


// oluşturulan dosyayı  silme

// const deletefile = () =>
//   fs.unlink("example.json", (err) => {
//     if (err) console.log(err);
//     console.log("DOSYA SILINDI.");
//   });
// deletefile();