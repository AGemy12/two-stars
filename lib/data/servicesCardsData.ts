interface AdvantagesTypes {
  first: string;
  second: string;
  third: string;
}

interface StepsTypes {
  first: string;
  second: string;
  third: string;
}
interface serviceDataTypes {
  id: number;
  serviceTitle: string;
  serviceDescription: string;
  serviceImgSrc: string;
  serviceImgInModel?: string;
  serviceImgAlt?: string;
  serviceImgTitle?: string;
  steps?: StepsTypes;
  advantages?: AdvantagesTypes;
}

export const servicesCardData: serviceDataTypes[] = [
  {
    id: 1,
    serviceTitle: "تطوير خطوط إنتاج المصانع",
    serviceDescription:
      "تحليل الخطوط الحالية وتحديد نقاط الضعف لتحسين الكفاءة باستخدام أحدث التقنيات.",
    serviceImgSrc: "/assets/media/services/factory_production_text.jpg",
    serviceImgInModel:
      "/assets/media/services/model/factory_production_model.jpg",
    serviceImgAlt: "Factory production improvement",
    serviceImgTitle: "Factory production improvement",
    steps: {
      first: "دراسة الوضع الحالي للخطوط",
      second: "تحديد نقاط الضعف وإيجاد الحلول",
      third: "تنفيذ تقنيات حديثة لتحسين الأداء",
    },
    advantages: {
      first: "زيادة الإنتاجية ",
      second: "تحسين جودة المنتجات ",
      third: "تقليل الوقت والتكاليف ",
    },
  },
  {
    id: 2,
    serviceTitle: "تصميم وتصنيع آلات حسب الطلب",
    serviceDescription:
      "تصميم آلات مخصصة تلبي احتياجاتك الخاصة باستخدام أحدث التقنيات.",
    serviceImgSrc: "/assets/media/services/machinery-design_text.jpg",
    serviceImgInModel:
      "/assets/media/services/model/machinery_design_model.jpg",
    serviceImgAlt: "Customized machinery design",
    serviceImgTitle: "Customized machinery design",
    steps: {
      first: "فهم متطلبات العميل بدقة",
      second: "تصميم نموذج ثلاثي الأبعاد للمعدات",
      third: "تصنيع المعدات باستخدام مواد وتقنيات متطورة",
    },
    advantages: {
      first: "زيادة الكفاءة",
      second: "تحسين الإنتاجية",
      third: "تلبية احتياجات محددة لا يمكن للمعدات القياسية تحقيقه",
    },
  },
  {
    id: 3,
    serviceTitle: "بناء مشاريع من البداية (معامل – مصانع)",
    serviceDescription:
      "نقوم ببناء المشاريع من التخطيط إلى التنفيذ لضمان تحقيق رؤيتك.",
    serviceImgSrc: "/assets/media/services/building_projects_text.jpg",
    serviceImgInModel: "/assets/media/hero-carousel/building-projects.jpg",
    serviceImgAlt: "Building factories from scratch",
    serviceImgTitle: "Building factories from scratch",
    steps: {
      first: "إعداد دراسات جدوى تفصيلية",
      second: "تصميم المخططات الهندسية",
      third: "الإشراف على مراحل التنفيذ حتى تشغيل المصنع",
    },
    advantages: {
      first: "تحقيق رؤية العميل بشكل كامل",
      second: "تقليل الأخطاء أثناء التنفيذ",
      third: "توفير الوقت والجهد",
    },
  },
  {
    id: 4,
    serviceTitle: "تطوير معامل ومصانع الحلويات والشوكولاتة",
    serviceDescription:
      "تحسين عمليات إنتاج الحلويات والشوكولاتة باستخدام معدات مخصصة.",
    serviceImgSrc:
      "/assets/media/services/sweets_and_chocolate_factories_text.jpg",
    serviceImgInModel:
      "/assets/media/services/model/sweets_and_chocolate_factories_model.jpg",
    serviceImgAlt: "Improving sweets and chocolate factories",
    serviceImgTitle: "Improving sweets and chocolate factories",
    steps: {
      first: "تحسين عمليات التصنيع",
      second: "توفير معدات مخصصة لهذه الصناعة",
      third: "تدريب فرق العمل على التقنيات الحديثة",
    },
    advantages: {
      first: "تحسين جودة المنتجات",
      second: "تقليل الهدر في المواد الخام",
      third: "زيادة الإنتاجية",
    },
  },
  {
    id: 5,
    serviceTitle: "تطوير معامل ومصانع الأغذية",
    serviceDescription:
      "تطوير خطوط إنتاج الأغذية لضمان الكفاءة والجودة العالية.",
    serviceImgSrc: "/assets/media/services/food_factories_text.jpg",
    serviceImgInModel: "/assets/media/services/model/food_factories_model.jpg",
    serviceImgAlt: "Improving food factories",
    serviceImgTitle: "Improving food factories",
    steps: {
      first: "تحديث تقنيات الإنتاج",
      second: "تقديم حلول للحفاظ على سلامة الأغذية",
      third: "تصميم معدات متطورة تلبي احتياجات الصناعة",
    },
    advantages: {
      first: "ضمان الامتثال للمعايير الغذائية",
      second: "تحسين كفاءة العمليات",
      third: "تعزيز سمعة المصنع في السوق",
    },
  },
  {
    id: 6,
    serviceTitle: "تطوير خطط استراتيجية",
    serviceDescription:
      "إنشاء خطط استراتيجية مبتكرة لتحقيق أهدافك قصيرة وطويلة الأمد.",
    serviceImgSrc: "/assets/media/services/strategic_plans_text.jpg",
    serviceImgInModel:
      "/assets/media/services/model/business_development_model.jpg",
    serviceImgAlt: "Strategic planning development",
    serviceImgTitle: "Strategic planning development",
    steps: {
      first: "تحديث تقنيات الإنتاج",
      second: "تقديم حلول للحفاظ على سلامة الأغذية",
      third: "تصميم معدات متطورة تلبي احتياجات الصناعة",
    },
    advantages: {
      first: "ضمان الامتثال للمعايير الغذائية",
      second: "تحسين كفاءة العمليات",
      third: "تعزيز سمعة المصنع في السوق",
    },
  },
  {
    id: 7,
    serviceTitle: "تطوير خطط مبيعات ومشتريات",
    serviceDescription:
      "تصميم خطط مبيعات ومشتريات فعالة لتحسين الأداء وزيادة الأرباح.",
    serviceImgSrc: "/assets/media/services/sales_and_purchases_text.jpg",
    serviceImgInModel:
      "/assets/media/services/model/sales_and_purchases_model.jpg",
    serviceImgAlt: "Sales and purchase planning",
    serviceImgTitle: "Sales and purchase planning",
    steps: {
      first: "تحليل الأداء الحالي",
      second: "تحديد احتياجات السوق",
      third: "إعداد خطط فعالة لتحقيق الأهداف",
    },
    advantages: {
      first: "زيادة الإيرادات",
      second: "تحسين إدارة التكاليف",
      third: "تعزيز العلاقة مع العملاء والموردين",
    },
  },
  {
    id: 8,
    serviceTitle: "(HR) تنظيم إدارة الموارد البشرية",
    serviceDescription:
      "تنظيم الموارد البشرية لتحسين بيئة العمل وزيادة الإنتاجية.",
    serviceImgSrc: "/assets/media/services/hr_regulation_text.jpg",
    serviceImgInModel: "/assets/media/services/model/hr_regulation_model.jpg",
    serviceImgAlt: "HR management regulation",
    serviceImgTitle: "HR management regulation",
    steps: {
      first: "تحليل الأداء الحالي",
      second: "تحديد احتياجات السوق",
      third: "إعداد خطط فعالة لتحقيق الأهداف",
    },
    advantages: {
      first: "زيادة الإيرادات",
      second: "تحسين إدارة التكاليف",
      third: "تعزيز العلاقة مع العملاء والموردين",
    },
  },
  {
    id: 9,
    serviceTitle: "تحسين بيئة وجودة العمل",
    serviceDescription:
      "تحسين بيئة العمل لتحقيق إنتاجية أعلى وجودة أفضل للموظفين.",
    serviceImgSrc: "/assets/media/services/quality of work_text.jpg",
    serviceImgInModel: "/assets/media/services/model/quality_of_work_model.jpg",
    serviceImgAlt: "Work environment improvement",
    serviceImgTitle: "Work environment improvement",
    steps: {
      first: "تقييم بيئة العمل الحالية",
      second: "تحسين ظروف العمل",
      third: "وغيرها ISO تطبيق أنظمة الجودة",
    },
    advantages: {
      first: " زيادة إنتاجية الموظفين",
      second: "تحسين جودة المنتجات والخدمات",
      third: "تعزيز رضا العملاء",
    },
  },
  {
    id: 10,
    serviceTitle: "عقود استشارية لتطوير الأعمال",
    serviceDescription:
      "عقود استشارية متخصصة لتحسين الأداء وتحقيق أهداف العمل بكفاءة.",
    serviceImgSrc: "/assets/media/services/consulting_contracts_text.jpg",
    serviceImgInModel: "/assets/media/services/model/strategic_plans_model.jpg",
    serviceImgAlt: "Consulting contracts for business development",
    serviceImgTitle: "Consulting contracts for business development",
    steps: {
      first: "تحليل نقاط القوة والضعف",
      second: "تقديم توصيات مبنية على التحليل",
      third: "متابعة تنفيذ الاستراتيجيات لضمان النجاح",
    },
    advantages: {
      first: "تحسين الكفاءة التشغيلية",
      second: "تعزيز التنافسية",
      third: "تحقيق الأهداف بسرعة أكبر",
    },
  },
];
