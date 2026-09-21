# ATHR Digital Platform

منصة ATHR جديدة مبنية من الصفر، وليست نسخة من المستودع السابق.

## الحالة الحالية

تم تنفيذ أول نسخة تشغيلية مستقلة تحتوي على:

- واجهة عربية RTL مع تبديل كامل إلى English LTR.
- هوية ATHR داكنة وفاخرة ومتجاوبة.
- Navbar ثابت ومتغير عند التمرير.
- Hero بصري خفيف بدون مكتبات 3D ثقيلة.
- خدمات ومشاريع منظمة من مصدر بيانات مشترك.
- نموذج طلب مشروع فعلي يرسل إلى API ويحتوي على validation وحالات loading/success.
- Express API مع health endpoint وcontact endpoint.
- دعم production static serving.
- reduced-motion وmobile responsive layout.

## التشغيل

```bash
npm install
npm run dev
```

يفتح Vite الواجهة عبر الخادم المدمج. لفحص المشروع:

```bash
npm run typecheck
npm run build
```

## خارطة الطريق

النسخة التالية ستضيف قاعدة بيانات MySQL/Drizzle، نظام الهوية، RBAC، CMS، بوابة العملاء، المشاريع، الفواتير، المدفوعات، الدعم، الرسائل والإشعارات. سيتم إضافة كل وحدة فوق عقود API واضحة، مع اختبارات ownership وpermissions قبل اعتبارها جاهزة للإنتاج.
