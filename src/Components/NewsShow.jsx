import { useParams } from "react-router-dom";


function NewsShow (){



    //-------------------------------------



const egyptNews = [
    {
        id: 1,
        headline: "مصر تستعد لإطلاق مشروع جديد لتحسين البنية التحتية",
        summary: "تعمل الحكومة المصرية على تطوير مشاريع جديدة لتحسين البنية التحتية في مختلف أنحاء البلاد. من المتوقع أن يساهم هذا المشروع في تعزيز النمو الاقتصادي وخلق فرص عمل جديدة. يشمل المشروع تطوير الطرق والجسور والمدن الجديدة، وهو جزء من خطة أكبر لتحديث البنية التحتية في البلاد. كما تهدف الحكومة إلى تحسين الوصول إلى الخدمات العامة من خلال هذه المشاريع. كتبه الصحفي أحمد المصري، ويشمل المشروع تحديث وتوسيع الشبكات الكهربائية والمياه وتطوير أنظمة الصرف الصحي.",
        date: "2024-08-25",
        Journalist: "كتبه الصحفي أحمد المصري",
        imageUrl: "/src/assets/images/penya.webp",
        articleUrl: "https://www.egypttoday.com/Article/1/2024/08/25/infrastructure-project",
      },
      {
        id: 2,
        headline: "مؤتمر دولي حول الطاقة المتجددة في القاهرة",
        summary: "يستضيف مركز القاهرة الدولي للمؤتمرات مؤتمرًا دوليًا حول الطاقة المتجددة، حيث يتحدث فيه خبراء عالميون عن أحدث التقنيات والابتكارات في هذا المجال. سيشهد المؤتمر مشاركة واسعة من دول مختلفة تهدف إلى تبادل الخبرات وتعزيز التعاون الدولي. هذا المؤتمر يمثل خطوة مهمة نحو تحقيق أهداف التنمية المستدامة في مصر. من المتوقع أن يتم مناقشة الاستراتيجيات الجديدة لتعزيز استخدام الطاقة المتجددة في البلاد. كتبه الصحفي محمد علي، وستتضمن الجلسات مناقشات حول الحلول الممكنة لتقليل انبعاثات الكربون وتحقيق الاستدامة البيئية.",
        date: "2024-08-24",
        Journalist: "كتبه الصحفي محمد علي",
        imageUrl: "/src/assets/images/taka.jpg",
        articleUrl: "https://www.almasryalyoum.com/news/2024/08/24/renewable-energy-conference",
      },
      {
        id: 3,
        headline: "نجاح حملة تطعيم جديدة ضد الأمراض المعدية",
        summary: "أعلنت وزارة الصحة عن نجاح الحملة الوطنية للتطعيم ضد الأمراض المعدية، التي شهدت مشاركة واسعة من المواطنين في جميع أنحاء البلاد. الحملة استهدفت تطعيم الملايين من الأطفال والبالغين ضد الأمراض مثل الحصبة والإنفلونزا. تمت الحملة بالتعاون مع المنظمات الدولية لضمان تحقيق أعلى معايير الأمان والفعالية. هذا النجاح يعكس التزام الحكومة بصحة المواطنين والوقاية من الأمراض. كتبه الصحفي نور الدين عبد الله، حيث سجلت الحملة أرقامًا قياسية في عدد المشاركين ونسب التطعيم مقارنة بالسنوات السابقة.",
        date: "2024-08-23",
        Journalist: "كتبه الصحفي نور الدين عبد الله",
        imageUrl: "/src/assets/images/lekah.jpg",
        articleUrl: "https://www.youm7.com/news/2024/08/23/vaccination-campaign",
      },
      {
        id: 4,
        headline: "مصر تعلن عن اكتشافات أثرية جديدة في الأقصر",
        summary: "أعلنت وزارة السياحة والآثار المصرية عن اكتشافات جديدة في الأقصر تشمل مقابر وتوابيت تعود إلى العصر الفرعوني. من المتوقع أن يعزز هذا الاكتشاف السياحة الثقافية في المنطقة. تشمل الاكتشافات تماثيل وقطع أثرية نادرة تسلط الضوء على حياة المصريين القدماء. هذا الاكتشاف يضاف إلى سلسلة من الاكتشافات الأخيرة التي تعزز من مكانة مصر كوجهة رئيسية للسياحة الثقافية. كتبه الصحفي عمرو السعيد، وتمثل هذه الاكتشافات إضافة هامة للمجموعة الوطنية التي توثق التاريخ الفرعوني.",
        date: "2024-08-26",
        Journalist: "كتبه الصحفي عمرو السعيد",
        imageUrl: "/src/assets/images/tourism.jpg",
        articleUrl: "https://www.almasryalyoum.com/news/2024/08/26/archaeological-discoveries",
      },
      {
        id: 5,
        headline: "افتتاح أكبر مركز طبي في القاهرة",
        summary: "تم افتتاح أكبر مركز طبي في القاهرة، والذي يهدف إلى تقديم خدمات صحية متكاملة باستخدام أحدث التقنيات الطبية. يأتي هذا المشروع كجزء من جهود تحسين الرعاية الصحية في مصر. يتضمن المركز مرافق حديثة تشمل أقسام متخصصة لعلاج الأمراض المزمنة والجراحة. يسعى المركز إلى تقديم الرعاية الصحية على أعلى مستوى للمواطنين والمقيمين في القاهرة. كتبه الصحفي خالد حسن، ومن المتوقع أن يسهم المركز في تخفيف الضغط على المستشفيات العامة وزيادة فرص الوصول إلى الرعاية المتخصصة.",
        date: "2024-08-27",
        Journalist: "كتبه الصحفي خالد حسن",
        imageUrl: "/src/assets/images/medical-center.jpg",
        articleUrl: "https://www.youm7.com/news/2024/08/27/medical-center",
      },
    {
      id:6,
      headline: "زيادة الاستثمار في قطاع التكنولوجيا في مصر",
      summary: "أعلنت الحكومة المصرية عن خطة لزيادة الاستثمار في قطاع التكنولوجيا، تشمل دعم الشركات الناشئة وتطوير البنية التحتية الرقمية. الهدف هو تعزيز الابتكار وتحفيز النمو الاقتصادي. هذه الخطة تأتي في إطار رؤية مصر 2030 لتعزيز الاقتصاد الرقمي. تشمل الاستثمارات تطوير البنية التحتية اللازمة لدعم التحول الرقمي في القطاعات المختلفة. من المتوقع أن تسهم هذه الاستثمارات في خلق فرص عمل جديدة وزيادة تنافسية الاقتصاد المصري. كتبه الصحفي مصطفى شعبان.",
      date: "2024-08-28",
      Journalist: "كتبه الصحفي مصطفى شعبان",
      imageUrl: "/src/assets/images/tecno.jpg",
      articleUrl: "https://www.almasryalyoum.com/news/2024/08/28/tech-investment"
    },
    {
      id:7,
      headline: "تحسن في العلاقات الاقتصادية بين مصر والاتحاد الأوروبي",
      summary: "شهدت العلاقات الاقتصادية بين مصر والاتحاد الأوروبي تحسنًا ملحوظًا، حيث تم توقيع عدة اتفاقيات تعاون تهدف إلى تعزيز التجارة والاستثمار بين الجانبين. هذه الاتفاقيات تهدف إلى تقوية العلاقات الاقتصادية وتعزيز الاستثمارات المشتركة. تشمل الاتفاقيات قطاعات مختلفة مثل الطاقة والتكنولوجيا والنقل. من المتوقع أن تسهم هذه الخطوات في تعزيز النمو الاقتصادي وتحسين التبادل التجاري بين مصر ودول الاتحاد الأوروبي. كتبه الصحفي يوسف سلامة.",
      date: "2024-08-29",
      Journalist: "كتبه الصحفي يوسف سلامة",
      imageUrl: "/src/assets/images/19.jpg",
      articleUrl: "https://www.egypttoday.com/Article/1/2024/08/29/eu-relations"
    },
    {
      id:8,
      headline: "زيادة في عدد السياح القادمين إلى مصر هذا الصيف",
      summary: "شهدت مصر زيادة كبيرة في عدد السياح خلال الصيف الحالي، حيث أظهرت التقارير ارتفاعًا في الحجوزات وزيارة الأماكن السياحية الرئيسية، مما يساهم في انتعاش قطاع السياحة. هذه الزيادة تعكس تحسن الوضع الأمني وجاذبية مصر كوجهة سياحية. تسعى الحكومة إلى الاستفادة من هذه الطفرة السياحية من خلال تطوير المزيد من الخدمات السياحية. من المتوقع أن يستمر هذا النمو في عدد السياح خلال السنوات القادمة، مما يعزز من مكانة مصر على خريطة السياحة العالمية. كتبه الصحفي عبدالرحمن حسين.",
      date: "2024-08-30",
      Journalist: "كتبه الصحفي عبدالرحمن حسين",
      imageUrl: "/src/assets/images/egyptian-temple.jpg",
      articleUrl: "https://www.youm7.com/news/2024/08/30/tourism-increase"
    },
    {
      id:9,
      headline: "فوز منتخب مصر في تصفيات كأس العالم",
      summary: "حقق منتخب مصر فوزًا هامًا في تصفيات كأس العالم بعد أداء رائع أمام منتخب نيجيريا. المباراة شهدت تألق العديد من اللاعبين المصريين، ومن المتوقع أن يعزز هذا الفوز فرص المنتخب في التأهل إلى البطولة.",
      date: "2024-08-25",
      Journalist:"كتبه الصحفي محمد عبد الله",
      imageUrl: "/src/assets/images/Sport1.jfif",
    },
    {
      id:10,
      headline: "الأهلي يفوز بالدوري المصري للمرة الـ 42",
      summary: "توج النادي الأهلي بلقب الدوري المصري الممتاز للمرة الـ 42 في تاريخه بعد فوزه على نادي الزمالك في مباراة حاسمة. شهدت المباراة أداءً قوياً من لاعبي الأهلي، واحتفل الفريق باللقب مع جماهيره في استاد القاهرة.",
      date: "2024-08-24",
      Journalist:"كتبه الصحفي أحمد سالم",
      imageUrl: "/src/assets/images/sport2.jpg",
    },
    {
      id:11,
      headline: "إطلاق بطولة جديدة لألعاب القوى في مصر",
      summary: "أعلنت الاتحاد المصري لألعاب القوى عن إطلاق بطولة جديدة تهدف إلى تعزيز رياضة ألعاب القوى في مصر. ستشمل البطولة مسابقات في الجري، القفز، والرمي، ومن المتوقع أن تشهد مشاركة واسعة من الرياضيين من مختلف أنحاء البلاد.",
      date: "2024-08-23",
      Journalist:"كتبه الصحفي علي رشاد",
      imageUrl: "/src/assets/images/sport3.jpg",
    },
    {
      
      id:12,
      headline: "إبراهيموفيتش يزور القاهرة لدعم تطوير كرة القدم المصرية",
      summary: "قام النجم السويدي زلاتان إبراهيموفيتش بزيارة القاهرة للقاء المسؤولين المصريين والمساهمة في تطوير كرة القدم في البلاد. إبراهيموفيتش أعرب عن إعجابه بالبنية التحتية الرياضية في مصر وأكد على أهمية دعم المواهب الشابة.",
      date: "2024-08-22",
      Journalist:"كتبه الصحفي سامي يوسف",
      imageUrl: "/src/assets/images/sport4.jpg",
    },
    {
      id:13,
      headline: "الزمالك يتعاقد مع مدرب عالمي جديد",
      summary: "أعلن نادي الزمالك عن تعاقده مع المدرب العالمي خورخي جيسوس لقيادة الفريق في الموسم القادم. يعتبر جيسوس من أفضل المدربين في العالم، ومن المتوقع أن يعزز قدومه من فرص الزمالك في المنافسة على البطولات المحلية والقارية.",
      date: "2024-08-21",
      Journalist:"كتبه الصحفي مصطفى خالد",
      imageUrl: "/src/assets/images/sport5.jpg",
    },
    {
      id:14,
      headline: "عودة الجماهير للملاعب في مصر بعد غياب طويل",
      summary: "أعلنت وزارة الرياضة المصرية عن السماح بعودة الجماهير للملاعب بعد غياب طويل بسبب جائحة كورونا. من المتوقع أن تشهد المباريات حضوراً جماهيرياً كبيراً، مما سيعزز من الأجواء الرياضية في البلاد.",
      date: "2024-08-20",
      Journalist:"كتبه الصحفي خالد محمود",
      imageUrl: "/src/assets/images/sport6.jpg",
    },
    {
      id:15,
      headline: "افتتاح معرض جديد للفن الحديث في القاهرة",
      summary: "تم افتتاح معرض جديد للفن الحديث في القاهرة يضم أعمالًا لفنانين مصريين ودوليين. يشمل المعرض لوحات ومنحوتات وأعمال تركيبية تجسد تجارب فنية معاصرة. يُعد هذا المعرض فرصة للجمهور لاكتشاف الفنون الحديثة والتفاعل مع الفنانين المشاركين.",
      date: "2024-08-25",
      Journalist:"كتبه الصحفي أحمد عبد الله",
      imageUrl: "/src/assets/images/3-1.jpg",
      articleUrl: "https://www.artnews.com/article/2024/08/25/art-exhibition-cairo"
    },
    {
      id: 16,
      headline: "مهرجان الجونة السينمائي يكرم الفنانين الشباب",
      summary: "شهد مهرجان الجونة السينمائي هذا العام تكريم مجموعة من الفنانين الشباب الذين أبدعوا في مختلف المجالات السينمائية. شمل التكريم أعمالهم الإخراجية والتمثيلية التي لاقت إشادة من النقاد والجمهور. يعتبر هذا المهرجان منصة هامة لعرض المواهب الشابة وتسليط الضوء على تجاربهم الفنية.",
      date: "2024-08-24",
      Journalist:"كتبه الصحفي يوسف مراد",
      imageUrl: "/src/assets/images/gona.jpg",
      articleUrl: "https://www.filmnews.com/article/2024/08/24/gouna-festival-honors-young-artists"
    },
    {
      id: 17,
      headline: "إطلاق فيلم جديد يستكشف تاريخ الفنون التشكيلية في مصر",
      summary: "أُطلق فيلم جديد في دور السينما المصرية يستعرض تاريخ الفنون التشكيلية في مصر منذ العصور القديمة حتى اليوم. يقدم الفيلم تحليلًا عميقًا للأعمال الفنية والمعارض التي شكلت المشهد الفني المصري، ويشمل مقابلات مع فنانين ونقاد بارزين.",
      date: "2024-08-23",
      Journalist:"كتبه الصحفي علي حسن",
      imageUrl: "/src/assets/images/art-ta4kili.jpg",
      articleUrl: "https://www.cinemaegypt.com/article/2024/08/23/art-history-film"
    },
    {
      id: 18,
      headline: "الموسيقى التقليدية المصرية تحيي مهرجان عالمي",
      summary: "شاركت فرق موسيقية مصرية في مهرجان عالمي للموسيقى التقليدية، حيث قدموا عروضًا موسيقية تعكس التراث المصري العريق. لاقت العروض إعجابًا كبيرًا من الحضور، وتمثل مشاركة مصر في هذا المهرجان تعزيزًا للتبادل الثقافي والفني بين الدول.",
      date: "2024-08-22",
      Journalist:"كتبه الصحفي سامي رشاد",
      imageUrl: "/src/assets/images/angham.jpg",
      articleUrl: "https://www.musicworld.com/article/2024/08/22/egyptian-traditional-music-festival"
    }
  ];
  
  
  
  //----------------------------------------
  
  const { id } = useParams();
  
  
    const filteredNews = egyptNews.filter(item=>item.id==id);
    
    console.log(filteredNews[0].headline)

    





  return (
    <div className="mt-40">
  {filteredNews && <div dir="rtl" className="p-8 rounded-lg shadow-2xl m-3">
    
    <h1 className="dark:text-white text-black text-xl font-semibold mb-2">{filteredNews[0].headline}</h1>
    <img src={filteredNews[0].imageUrl}    alt={filteredNews[0].headline}
              className="w-full h-[15rem] mb-2"/>
              
            <p className="mb-2 dark:text-white text-black">{filteredNews[0].summary}</p>
            <p className="text-lg text-green-800 mb-2">{filteredNews[0].date}</p>
            <p className="text-sm text-gray-500">{filteredNews[0].Journalist}</p>
    
  
  
  
  
  
  
  
  </div>}  
  </div>

  );
}

export default NewsShow ;