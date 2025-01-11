import React from "react";
import LinkItem from "../pieces/LinkItem";
import FooterSectionsTitle from "../pieces/FooterSectionsTitle";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-black shadow-spread py-4 mt-8">
      <div className="container flex items-start justify-between md:flex-nowrap flex-wrap pt-8 border-b-[1px] border-b-gold">
        <div className="max-w-[350px] flex flex-col gap-4 justify-center items-center">
          <Logo />
          <p className="w-full p-4 md:p-0 md:w-5/6 mx-auto text-off_wihte text-justify">
            مجموعة تو ستارز تقدم خدمات متكاملة ومتطورة في مجال تطوير الأعمال
            الصناعية والتجارية، مع التركيز على الابتكار، الجودة، وتلبية
            .احتياجات العملاء بشكل كامل. نحن ملتزمون بجعل عمليات الإنتاج أكثر
            كفاءة، وتعزيز الاستدامة البيئية والاجتماعية
          </p>
        </div>
        <div className="w-fit my-4">
          <FooterSectionsTitle title="خدماتنا" />
          <div className="flex items-start justify-between w-full">
            <div className="flex items-start justify-center md:justify-start md:flex-nowrap flex-wrap  gap-0 md:gap-2 mx-auto py-4 ">
              <ul className="w-fit flex items-center md:items-start justify-center flex-col p-4 md:pb-[unset] pb-0 relative before:absolute before:-left-1 before:top-0  before:w-[1px] before:h-[200px] before:bg-[rgba(255,255,255,0.1)] before:hidden md:before:block">
                <LinkItem
                  title="تطوير خطوط إنتاج المصانع"
                  path="##"
                  customStyle="after:hidden text-[0.8rem] md:text-[0.85rem]"
                  customLinkStyle="!p-0 mb-3"
                />
                <LinkItem
                  title="تصميم وتصنيع آلات حسب الطلب"
                  path="##"
                  customStyle="after:hidden text-[0.8rem] md:text-[0.85rem]"
                  customLinkStyle="!p-0 mb-3"
                />
                <LinkItem
                  title="بناء مشاريع من البداية (معامل – مصانع)"
                  path="##"
                  customStyle="after:hidden text-[0.8rem] md:text-[0.85rem]"
                  customLinkStyle="!p-0 mb-3"
                />
                <LinkItem
                  title="تطوير معامل ومصانع الحلويات والشوكولاتة"
                  path="##"
                  customStyle="after:hidden text-[0.8rem] md:text-[0.85rem]"
                  customLinkStyle="!p-0 mb-3"
                />
                <LinkItem
                  title="تطوير معامل ومصانع الأغذية"
                  path="##"
                  customStyle="after:hidden text-[0.8rem] md:text-[0.85rem]"
                  customLinkStyle="!p-0 mb-3"
                />
                <LinkItem
                  title="تطوير معامل ومصانع الشوكولاته"
                  path="##"
                  customStyle="after:hidden text-[0.8rem] md:text-[0.85rem]"
                  customLinkStyle="!p-0 mb-3"
                />
              </ul>
              <ul className="w-fit flex items-center md:items-start justify-center flex-col p-4 md:pt-[unset] pt-0">
                <LinkItem
                  title="تطوير خطط استراتيجية"
                  path="##"
                  customStyle="after:hidden text-[0.8rem] md:text-[0.85rem]"
                  customLinkStyle="!p-0 mb-3"
                />
                <LinkItem
                  title="تطوير خطط مبيعات ومشتريات"
                  path="##"
                  customStyle="after:hidden text-[0.8rem] md:text-[0.85rem]"
                  customLinkStyle="!p-0 mb-3"
                />
                <LinkItem
                  title="(HR) تنظيم إدارة الموارد البشرية"
                  path="##"
                  customStyle="after:hidden text-[0.8rem] md:text-[0.85rem]"
                  customLinkStyle="!p-0 mb-3"
                />
                <LinkItem
                  title="تحسين بيئة وجودة العمل"
                  path="##"
                  customStyle="after:hidden text-[0.8rem] md:text-[0.85rem]"
                  customLinkStyle="!p-0 mb-3"
                />
                <LinkItem
                  title="عقود استشارية لتطوير الأعمال"
                  path="##"
                  customStyle="after:hidden text-[0.8rem] md:text-[0.85rem]"
                  customLinkStyle="!p-0 mb-3"
                />
                {/* <LinkItem title="" path="##" customStyle="after:hidden text-[0.8rem] md:text-[0.85rem]" customLinkStyle="!py-0 mb-3" /> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container pt-8 pb-4 w-fit mx-auto flex items-center gap-6 ">
        <span className="text-off_wihte relative after:absolute after:-left-3 after:top-[20%]  after:w-[2px] after:h-[70%] after:bg-gold">
          جميع الحقوق محفوظة 2025
        </span>
        <Logo logoStyle="!w-[50px]" />
      </div>
    </footer>
  );
}
