export type Language = "ar" | "en";

export type Service = { id: string; slug: string; icon: string; ar: { name: string; description: string }; en: { name: string; description: string } };
export type Project = { id: string; title: string; category: string; description: string; image: string };
export type SiteContent = { services: Service[]; projects: Project[]; stats: { labelAr: string; labelEn: string; value: string }[] };

export const content: SiteContent = {
  services: [
    { id: "web", slug: "web-development", icon: "globe", ar: { name: "تطوير الويب", description: "منصات ويب سريعة وآمنة وقابلة للتوسع." }, en: { name: "Web Development", description: "Fast, secure, scalable web platforms." } },
    { id: "design", slug: "product-design", icon: "sparkles", ar: { name: "تصميم المنتجات", description: "تجارب رقمية واضحة تجمع الجمال بالنتائج." }, en: { name: "Product Design", description: "Clear digital experiences built for outcomes." } },
    { id: "ai", slug: "ai-solutions", icon: "brain", ar: { name: "حلول الذكاء الاصطناعي", description: "ذكاء عملي داخل منتجاتك وعملياتك." }, en: { name: "AI Solutions", description: "Practical intelligence inside your products and operations." } },
    { id: "automation", slug: "automation", icon: "workflow", ar: { name: "الأتمتة", description: "نربط أدواتك ونختصر الأعمال المتكررة." }, en: { name: "Automation", description: "Connect tools and eliminate repetitive work." } },
    { id: "mobile", slug: "mobile-apps", icon: "smartphone", ar: { name: "تطبيقات الجوال", description: "تطبيقات مصممة للاستخدام اليومي والنمو." }, en: { name: "Mobile Applications", description: "Mobile products designed for daily use and growth." } },
    { id: "cloud", slug: "cloud-solutions", icon: "cloud", ar: { name: "الحلول السحابية", description: "بنية موثوقة مع أمن ومراقبة وتوسع." }, en: { name: "Cloud Solutions", description: "Reliable infrastructure with security and scale." } },
  ],
  projects: [
    { id: "nawa", title: "نواة — سوق رقمي", category: "E-commerce", description: "منصة تجارة إلكترونية تعيد تعريف تجربة الشراء.", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=80" },
    { id: "sahab", title: "سحاب — عمليات أذكى", category: "Automation", description: "لوحة عمليات تربط الفريق والبيانات في مكان واحد.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80" },
  ],
  stats: [{ labelAr: "مشروعاً أطلقناه", labelEn: "Projects launched", value: "24" }, { labelAr: "عميلاً يثق بنا", labelEn: "Clients", value: "18" }, { labelAr: "خدمات متخصصة", labelEn: "Specialized services", value: "9" }, { labelAr: "سنوات من الخبرة", labelEn: "Years of experience", value: "7" }],
};
