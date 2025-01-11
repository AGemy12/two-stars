import React from "react";
import NestedListLink from "./NestedListLink";

export default function NestedList() {
  return (
    <div className="w-full flex items-start justify-center gap-16 p-8 bg-light_opacity_bg rounded-md">
      <ul>
        <NestedListLink
          title="تطوير خطوط إنتاج المصانع"
          path="##"
          customStyle="after:hidden text-[0.9rem]"
          customLinkStyle="!py-0 mb-4 group"
        />
        <NestedListLink
          title="تصميم وتصنيع آلات حسب الطلب"
          path="##"
          customStyle="after:hidden text-[0.9rem]"
          customLinkStyle="!py-0 mb-4 group"
        />
        <NestedListLink
          title="بناء مشاريع من البداية (معامل – مصانع)"
          path="##"
          customStyle="after:hidden text-[0.9rem]"
          customLinkStyle="!py-0 mb-4 group"
        />
        <NestedListLink
          title="تطوير معامل ومصانع الحلويات والشوكولاتة"
          path="##"
          customStyle="after:hidden text-[0.9rem]"
          customLinkStyle="!py-0 mb-4 group"
        />
        <NestedListLink
          title="تطوير معامل ومصانع الأغذية"
          path="##"
          customStyle="after:hidden text-[0.9rem]"
          customLinkStyle="!py-0 mb-4 group"
        />
        <NestedListLink
          title="تطوير معامل ومصانع الشوكولاته"
          path="##"
          customStyle="after:hidden text-[0.9rem]"
          customLinkStyle="!py-0 mb-4 group"
        />
      </ul>
      <ul>
        <NestedListLink
          title="تطوير خطط استراتيجية"
          path="##"
          customStyle="after:hidden text-[0.9rem]"
          customLinkStyle="!py-0 mb-4 group"
        />
        <NestedListLink
          title="تطوير خطط مبيعات ومشتريات"
          path="##"
          customStyle="after:hidden text-[0.9rem]"
          customLinkStyle="!py-0 mb-4 group"
        />
        <NestedListLink
          title="(HR) تنظيم إدارة الموارد البشرية"
          path="##"
          customStyle="after:hidden text-[0.9rem]"
          customLinkStyle="!py-0 mb-4 group"
        />
        <NestedListLink
          title="تحسين بيئة وجودة العمل"
          path="##"
          customStyle="after:hidden text-[0.9rem]"
          customLinkStyle="!py-0 mb-4 group"
        />
        <NestedListLink
          title="عقود استشارية لتطوير الأعمال"
          path="##"
          customStyle="after:hidden text-[0.9rem]"
          customLinkStyle="!py-0 mb-4 group"
        />
      </ul>
    </div>
  );
}
