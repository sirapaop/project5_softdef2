# project5_softdef2

วิธีติดตั้ง CDTI PROFILE :

1. การสร้าง Web API ด้วย Express ที่รองรับการทำงาน CRUD ต้องการ Package ดังต่อไปนี้

    ให้ทำการ Install โดยการใช้คำสั่ง npm install ชื่อpackage --save
    โดย package ที่ผมใช้งานมีดังนี้
    ❑ express : สำหรับใช้สร้าง Web API
    ❑ mongoose : สำหรับใช้ในการเชื่อมต่อกับฐานข้อมูล MongoDB
    ❑ body-parser : สำหรับใช้จัดการข้อมูลที่ได้รับมา
    ❑ cors : ใช้เพื่อให้ฝั่ง Back End ยินยอมให้ฝั่ง Front End เชื่อมต่อเข้ามา
    ❑ multer : ใช้สำหรับ upload ไฟล์รูป
    ❑ nodemon : ใช้สำหรับ refresh หน้า
    อย่าลืมตรวจสอบไฟล์ package.json ว่ามีการติดตั้งเรียบร้อยแล้วหรือไม่

2.เชื่อมต่อ database ที่เป็น mongodb ของท่านใน file config/mongodb.config.js
3.run npm start ใน terminal เพื่อเริ่มใช้งาน
4. เข้า localhost:3000 เพื่อใช้งาน  CDTI PROFILE