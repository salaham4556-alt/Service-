import express from "express";
import fs from "fs";

const app = express();

// endpoint يستقبل أي صورة
app.post("/upload", (req, res) => {
  const timestamp = Date.now();
  const writeStream = fs.createWriteStream(`uploads/img_${timestamp}.jpg`);
  
  req.pipe(writeStream); // يأخذ كل البيانات مباشرة
  req.on("end", () => res.sendStatus(200)); // انتهاء الإرسال
});

app.listen(3000, () => console.log("Server running on port 3000"));
