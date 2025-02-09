"use client";

import Logo from "./Logo";

// import React, { useState } from "react";
// import SectionTitle from "../pieces/SectionTitle";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";

export default function About() {
  //   const [activeTab, setActiveTab] = useState(1);
  //   const [isTransitioning, setIsTransitioning] = useState(false);

  //   const tabContent = [
  //     {
  //       id: 1,
  //       title: "كلمة المؤسسين",
  //       type: "p",
  //       content: `منذ انطلاق رؤية صاحب السمو الملكي الأمير محمد بن سلمان -حفظه الله- كان من الضروري أن نواكب هذه الرؤية
  //       الطموحة ونساهم في تحقيق أهدافها. وبعد سنوات من الخبرة في الأعمال التجارية والصناعية، واجهنا العديد من التحديات
  //       التي منحتنا القوة والإصرار لتأسيس مجموعة توستارز للأعمال. نحن اليوم فخورون بتقديم خدمات متقدمة تلبي احتياجات
  //       المصانع والشركات، مع التركيز على الابتكار وتقديم أفكار خارج الصندوق. هدفنا الأساسي هو تمكين عملائنا من تحقيق
  //       .أهدافهم بأعلى كفاءة وجودة`,
  //       imgSrc: "/assets/media/about/founder's_speech.jpg",
  //       imgAlt: "Founders' message",
  //       imgTitle: "Founders' message",
  //     },
  //     {
  //       id: 2,
  //       title: "الرؤية",
  //       type: "p",
  //       content: `نسعى لأن نكون الخيار الأول للشركات والمصانع في المملكة العربية السعودية وخارجها لتقديم حلول مبتكرة وشاملة تعزز
  // الكفاءة، الإنتاجية، والاستدامة. نهدف إلى تحقيق الريادة في تصميم وتصنيع المعدات الصناعية وتطوير الأعمال، مما يساهم
  // .في تحقيق أهداف رؤية المملكة 2`,
  //       imgSrc: "/assets/media/about/vision.jpg",
  //       imgAlt: "Vision image",
  //       imgTitle: "Vision",
  //     },
  //     {
  //       id: 3,
  //       title: "الرسالة",
  //       type: "p",
  //       content: `تقديم خدمات متكاملة ومتطورة في مجال تطوير الأعمال الصناعية والتجارية، مع التركيز على الابتكار، الجودة، وتلبية
  // .احتياجات العملاء بشكل كامل. نحن ملتزمون بجعل عمليات الإنتاج أكثر كفاءة، وتعزيز الاستدامة البيئية والاجتماعية`,
  //       imgSrc: "/assets/media/about/message.jpg",
  //       imgAlt: "Mission image",
  //       imgTitle: "Mission",
  //     },
  //     {
  //       id: 4,
  //       title: "الأهداف",
  //       type: "ul",
  //       content: [
  //         "رفع كفاءة الإنتاج : تطوير خطوط الإنتاج وتحسينها لتحقيق أعلى معدلات الإنتاجية والجودة",
  //         ".توفير حلول مبتكرة : تصميم معدات وآلات تلبي احتياجات السوق وتواكب أحدث التقنيات",
  //         "تحقيق الاستدامة : دمج مفاهيم الاستدامة في جميع مراحل العمل",
  //         ".دعم رؤية : 2030 المساهمة في تحقيق أهداف الرؤية من خلال تعزيز النمو الصناعي والتجاري",
  //         ".تطوير بيئة العمل : تحسين جودة بيئة العمل ورفع رضا الموظفين لتحقيق أقصى إنتاجية",
  //       ],
  //       imgSrc: "/assets/media/about/goals.jpg",
  //       imgAlt: "Goals image",
  //       imgTitle: "Goals",
  //     },
  //   ];
  //   const activeTabData = tabContent.find((tab) => tab.id === activeTab);

  //   const handleTabChange = (tabId: number) => {
  //     setIsTransitioning(true);
  //     setTimeout(() => {
  //       setActiveTab(tabId);
  //       setIsTransitioning(false);
  //     }, 300);
  //   };

  //   useEffect(() => {
  //     AOS.init({
  //       duration: 1500,
  //       easing: "ease-in-out",
  //       once: true,
  //     });
  //   }, []);

  return (
    // <section className="mb-12 md:mb-[100px]">
    //   <SectionTitle title="مــن نــحــن ؟" />
    //   <div className="container mx-auto my-8">
    //     <div className="flex justify-center md:justify-start gap-2 md:gap-4 my-12">
    //       {tabContent.map((tab) => (
    //         <button
    //           key={tab.id}
    //           className={`px-2 md:px-3 py-1 border-b-2 text-[0.80rem] md:text-[1.1rem] rounded-md duration-300 hover:text-black hover:bg-gold text-nowrap ${
    //             activeTab === tab.id
    //               ? "border-gold text-black bg-gold"
    //               : "border-gold border-[2px] text-white"
    //           }`}
    //           onClick={() => handleTabChange(tab.id)}
    //         >
    //           {tab.title}
    //         </button>
    //       ))}
    //     </div>
    //     <div className="text-lg text-gray-800 flex items-center md:items-start justify-center md:justify-start gap-10 flex-wrap md:flex-nowrap">
    //       {activeTabData ? (
    //         activeTabData.type === "p" ? (
    //           <>
    //             <div className="w-[90%] md:max-w-[40%]">
    //               <p className="text-off_wihte text-[1rem] text-justify leading-9">
    //                 {activeTabData.content as string}
    //               </p>
    //             </div>
    //             {activeTabData.imgSrc && (
    //               <div className="w-[90%] md:w-[60%]">
    //                 <img
    //                   src={activeTabData.imgSrc}
    //                   alt={activeTabData.imgAlt}
    //                   title={activeTabData.imgTitle}
    //                   className="rounded-lg shadow-spread w-full"
    //                 />
    //               </div>
    //             )}
    //           </>
    //         ) : (
    //           <>
    //             <div className="w-[90%] md:w-[40%]">
    //               <ul className="flex flex-col gap-4">
    //                 {(activeTabData.content as string[]).map((item, index) => (
    //                   <li
    //                     className="text-off_wihte text-[0.9rem] relative before:absolute before:top-3 md:before:top-2 before:-right-4 before:w-[8px] before:h-[8px] before:bg-transparent before:border-[1px] before:border-gold before:rounded-full"
    //                     key={index}
    //                   >
    //                     {item}
    //                   </li>
    //                 ))}
    //               </ul>
    //             </div>
    //             {activeTabData.imgSrc && (
    //               <div className="w-[90%] md:w-[60%]">
    //                 <img
    //                   src={activeTabData.imgSrc}
    //                   alt={activeTabData.imgAlt}
    //                   title={activeTabData.imgTitle}
    //                   className="rounded-lg shadow-md full"
    //                 />
    //               </div>
    //             )}
    //           </>
    //         )
    //       ) : (
    //         <p>المحتوى غير متوفر.</p>
    //       )}
    //     </div>
    //   </div>
    // </section>
    <section className="mb-[75px] md:mb-[100px] min-h-screen">
      <div className="bg-section_bg bg-contain bg-center bg-no-repeat w-full ">
        <div className="relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.95)] h-full py-12">
          <div className=" relative mx-[20px] md:mx-[100px] grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className=" relative p-2 rounded-md  bg-about_vesion bg-cover bg-center bg-no-repeat h-[60vh] bg-off_wihte shadow-white_shadow  overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.55)]"></div>
              <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-[rgba(0,0,0,0.75)] flex items-center justify-center flex-col gap-4">
                <h4 className="text-black text-xl flex items-center justify-center min-w-[200px] mx-auto my-2 p-2 shadow-md relative bg-gold rounded-sm">
                  {" "}
                  الـرؤيـة{" "}
                </h4>
                <p className="w-11/12 mx-auto py-2 text-off_wihte text-justify leading-7">
                  نسعى لأن نكون الخيار الأول للشركات والمصانع في المملكة العربية
                  السعودية وخارجها لتقديم حلول مبتكرة وشاملة تعزز الكفاءة،
                  الإنتاجية، والاستدامة. نهدف إلى تحقيق الريادة في تصميم وتصنيع
                  المعدات الصناعية وتطوير الأعمال، مما يساهم في تحقيق أهداف رؤية
                  المملكة 2030.
                </p>
              </div>
            </div>
            <div className=" relative p-2 rounded-md  bg-about_message bg-cover bg-center bg-no-repeat h-[60vh] bg-off_wihte shadow-white_shadow  overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.55)]"></div>
              <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-[rgba(0,0,0,0.75)] flex items-center justify-center flex-col gap-4">
                <h4 className="text-black text-xl flex items-center justify-center min-w-[200px] mx-auto my-2 p-2 shadow-md relative bg-gold rounded-sm">
                  {" "}
                  الـرسـالـة{" "}
                </h4>
                <p className="w-11/12 mx-auto py-2 text-off_wihte text-justify leading-7">
                  نسعى لأن نكون الخيار الأول للشركات والمصانع في المملكة العربية
                  السعودية وخارجها لتقديم حلول مبتكرة وشاملة تعزز الكفاءة،
                  الإنتاجية، والاستدامة. نهدف إلى تحقيق الريادة في تصميم وتصنيع
                  المعدات الصناعية وتطوير الأعمال، مما يساهم في تحقيق أهداف رؤية
                  المملكة 2030.
                </p>
              </div>
            </div>
            <div className=" relative p-2 rounded-md  bg-about_golas bg-cover bg-center bg-no-repeat h-[70vh] bg-off_wihte shadow-white_shadow  overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.55)]"></div>
              <div className="absolute bottom-0 left-0 w-full min-h-[60vh] bg-[rgba(0,0,0,0.75)] py-2  flex items-center justify-center flex-col gap-4">
                <h4 className="text-black text-xl flex items-center justify-center min-w-[200px] shadow-md mx-auto mb-2 py-2 relative bg-gold px-1 rounded-sm ">
                  {" "}
                  الأهــداف{" "}
                </h4>
                <p className="w-11/12 mx-auto py-2 text-off_wihte text-justify leading-7 border-b-[1px] border-b-[rgba(255,255,255,0.1)]">
                  تقدم شركة تو ستارز أهداف متكاملة ومتطورة في مجال تطوير الأعمال
                  الصناعية والتجارية، مع التركيز على الابتكار، الجودة، وتلبية
                  احتياجات العملاء بشكل كامل.
                </p>
                <ul className="flex flex-col gap-2 w-[85%] mx-auto my-2">
                  <li>
                    <h5 className="text-gold text-[1rem]">دعم رؤية 2030:</h5>
                    <span className="text-off_wihte text-[0.85rem] mr-2">
                      المساهمة في تحقيق أهداف الرؤية من خلال تعزيز النمو الصناعي
                      والتجاري.
                    </span>
                  </li>
                  <li>
                    <h5 className="text-gold text-[1rem]">
                      {" "}
                      تحقيق الاستدامة:{" "}
                    </h5>
                    <span className="text-off_wihte text-[0.85rem] mr-2">
                      دمج مفاهيم الاستدامة في جميع مراحل العمل.
                    </span>
                  </li>
                  <li>
                    <h5 className="text-gold text-[1rem]">
                      {" "}
                      توفير حلول مبتكرة:{" "}
                    </h5>
                    <span className="text-off_wihte text-[0.85rem] mr-2">
                      تصميم معدات وآلات تلبي احتياجات السوق وتواكب أحدث
                      التقنيات.
                    </span>
                  </li>
                  <li>
                    <h5 className="text-gold text-[1rem]">
                      {" "}
                      رفع كفاءة الإنتاج:{" "}
                    </h5>
                    <span className="text-off_wihte text-[0.85rem] mr-2">
                      طوير خطوط الإنتاج وتحسينها لتحقيق أعلى معدلات الإنتاجية
                      والجودة.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className=" relative p-2 rounded-md  bg-about_founder_speech bg-cover bg-center bg-no-repeat h-[70vh] bg-off_wihte shadow-white_shadow  overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.55)]"></div>
              <div className="absolute bottom-0 left-0 w-full min-h-[60vh] bg-[rgba(0,0,0,0.75)] py-2  flex items-center justify-center flex-col gap-4">
                <h4 className="text-black text-xl flex items-center justify-center min-w-[200px] shadow-md mx-auto mb-2 py-2 relative bg-gold px-1 rounded-sm ">
                  {" "}
                  كـلـمـة الـمؤسـسـيـن{" "}
                </h4>
                <p className="w-11/12 mx-auto py-2 text-off_wihte text-justify leading-7 border-b-[1px] border-b-[rgba(255,255,255,0.1)]">
                  منذ انطلاق رؤية صاحب السمو الملكي الأمير محمد بن سلمان - حفظه
                  الله - كان من الضروري أن نواكب هذه الرؤية الطموحة ونساهم في
                  تحقيق أهدافها.
                </p>
                <ul className="flex flex-col gap-2 w-[85%] mx-auto my-2">
                  <li>
                    <h5 className="text-gold text-[1rem]">01</h5>
                    <span className="text-off_wihte text-[0.85rem]">
                      بعد سنوات من الخبرة في الأعمال التجارية والصناعية، واجهنا
                      العديد من التحديات التي منحتنا القوة والإصرار لتأسيس
                      مجموعة توستارز للأعمال.
                    </span>
                  </li>
                  <li>
                    <h5 className="text-gold text-[1rem]">02</h5>
                    <span className="text-off_wihte text-[0.85rem]">
                      نحن اليوم فخورون بتقديم خدمات متقدمة تلبي احتياجات المصانع
                      والشركات، مع التركيز على الابتكار وتقديم أفكار خارج
                      الصندوق.
                    </span>
                  </li>
                  <li>
                    <h5 className="text-gold text-[1rem]">03</h5>
                    <span className="text-off_wihte text-[0.85rem]">
                      هدفنا الأساسي هو تمكين عملائنا من تحقيق أهدافهم بأعلى
                      كفاءة وجودة.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
