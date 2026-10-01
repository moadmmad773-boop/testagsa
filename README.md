# شقتك اليومية

صفحة عربية RTL لحجز شقة يومية، مبنية بملفات HTML وCSS وJavaScript بدون مكتبات خارجية.

## الملفات المهمة

- `index.html` — الصفحة الرئيسية.
- `styles.css` — التصميم المتجاوب.
- `app.js` — التفاعلات وفتح الروابط.
- `config.js` — روابط Airbnb وجاذر والموقع والصور وواتساب.
- `server.js` — خادم محلي بسيط عند الحاجة.
- `public/` — الصور المحلية وملف تعريف المسارات الخاص بالمعاينة.

## الرفع إلى GitHub

1. أنشئ مستودعًا جديدًا على GitHub.
2. ارفع جميع الملفات الموجودة في هذه الحزمة إلى جذر المستودع.
3. من إعدادات المستودع اختر **Settings → Pages**.
4. في **Build and deployment** اختر **Deploy from a branch**.
5. اختر الفرع `main` والمجلد `/root` ثم اضغط **Save**.

## تعديل الروابط

افتح `config.js` وعدّل القيم بين علامتي الاقتباس:

```js
window.APP_CONFIG = {
  booking: {
    airbnb: 'https://www.airbnb.com/',
    gathern: 'https://gathern.co/',
  },
  galleryDriveUrl: 'https://drive.google.com/',
  locationUrl: 'https://www.google.com/maps',
  whatsappNumber: '971500000000',
};
```

بعد أي تعديل ارفع الملف المحدّث إلى GitHub.

## تشغيل محلي

```bash
node server.js
```

ثم افتح `http://localhost:3000`.
