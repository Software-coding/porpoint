# Yaraani Ethics — Interactive Web Presentation

عرض ويب تفاعلي احترافي باللغة العربية حول **الأخلاقيات في مشروع «يرعاني»**، مبني باستخدام HTML + CSS + Vanilla JavaScript بدون Frameworks.

## التشغيل

يمكن فتح `index.html` مباشرة في المتصفح، أو تشغيل خادم محلي:

```bash
python -m http.server 8080
```

ثم افتح:

```text
http://localhost:8080
```

## التحكم أثناء العرض

- `Arrow Down` / `Page Down` / `Space`: التالي.
- `Arrow Up` / `Page Up`: السابق.
- `Home`: أول العرض.
- `End`: آخر العرض.
- عجلة الماوس: انتقال مشهد بمشهد على Desktop.
- نقاط التنقل الجانبية: انتقال مباشر لأي قسم.

## محتوى العرض

1. الغلاف — Human First
2. رحلة الرعاية
3. أين تبدأ القضية الأخلاقية؟
4. الإطار الأخلاقي
5. Privacy by Design
6. Security & Access Control
7. Human in the Loop
8. Transparency
9. Safety First
10. Healthcare Provider Verification
11. Integrity & Accountability
12. Reliability & Accessibility
13. Ethics Across the Patient Journey
14. الخاتمة — الإنسان أولًا

## خصائص التصميم

- RTL كامل للعربية.
- Healthcare Technology visual system.
- Full-screen storytelling sections.
- Progressive reveal animation.
- SVG journey lines.
- Glass / depth / glow visual language.
- Custom desktop cursor.
- Responsive layouts.
- دعم `prefers-reduced-motion`.

## الملفات

- `index.html` — المحتوى والـsemantic structure.
- `style.css` — النظام البصري والتخطيطات والحركات.
- `script.js` — التنقل، Intersection Observer، keyboard/scroll interaction والحركات التفاعلية.
