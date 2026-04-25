import { useState, useEffect } from "react";

const TOPICS = [
  {
    id: "security",
    title: "أمن المعلومات والاختراق",
    icon: "🛡️",
    color: "#00d4ff",
    sections: [
      {
        title: "الاختراق الإلكتروني والهاكر",
        qa: [
          { q: "ما تعريف الاختراق الإلكتروني؟", a: "محاولة للكشف أو سرقة أو تخريب أو الوصول غير المصرح به للمعلومات التي يمتلكها الأشخاص أو المؤسسات" },
          { q: "ما تعريف الهاكر (Hacker)؟", a: "شخص ذو خبرة احترافية بالبرمجيات ويمكن أن تكون مهامه ذات أغراض ضارة" },
        ]
      },
      {
        title: "أنواع الهجمات الإلكترونية",
        qa: [
          { q: "ما أنواع الهجمات الإلكترونية؟ (عددها مع الشرح)", a: "١- الهندسة الاجتماعية\n٢- البرامج الضارة" },
          { q: "ما تعريف الهندسة الاجتماعية؟", a: "تعتمد على المهارات الاجتماعية والحيل النفسية لإقناع الأشخاص بالإفصاح عن معلوماتهم السرية واستخدامها لتحقيق غايات ضارة" },
          { q: "ما طرق تنفيذ هجمات الهندسة الاجتماعية؟", a: "١- رسائل الاصطياد الإلكتروني\n٢- مكان العمل" },
          { q: "ما تعريف البرامج الضارة؟", a: "برامج حاسوبية مصممة لغرض إلحاق ضرر معين مثل التخريب أو التجسس" },
          { q: "ما أنواع البرامج الضارة؟ (عددها مع الشرح)", a: "١- فايروسات الحاسوب\n٢- ديدان الحاسوب\n٣- برامج التجسس" },
        ]
      },
      {
        title: "فايروسات الحاسوب",
        qa: [
          { q: "ما تعريف فايروسات الحاسوب؟", a: "برنامج مضر بالحاسوب يستطيع أن ينسخ نفسه" },
          { q: "ما أعراض الإصابة بالفايروسات؟ (عددها)", a: "١- الحاسوب يعمل ببطء شديد\n٢- إضاءة مصباح القرص الصلب\n٣- تلف بعض الملفات\n٤- ظهور مربعات حوار ورسائل خطأ\n٥- إعادة تشغيل الحاسوب بشكل تلقائي" },
        ]
      },
      {
        title: "ديدان الحاسوب",
        qa: [
          { q: "ما تعريف ديدان الحاسوب؟", a: "برامج حاسوبية خبيثة تعمل بشكل مستقل" },
          { q: "ما أهم طرق انتشار ديدان الحاسوب؟", a: "١- التنزيل التلقائي للملفات\n٢- فتح وتنزيل الملفات المرافقة للبريد الإلكتروني\n٣- التسلل من الثغرات الأمنية في أنظمة التشغيل" },
          { q: "ما أهم الأضرار التي تسببها ديدان الحاسوب؟", a: "١- التلف أو الفقدان بالملفات\n٢- فتح ما يسمى بالباب الخلفي في الحاسوب المصاب للتحكم به\n٣- تتيح للمخترق أن يستخدم الحاسوب المصاب لمهاجمة حواسيب أخرى" },
        ]
      },
      {
        title: "برامج التجسس",
        qa: [
          { q: "ما تعريف برامج التجسس؟", a: "برامج تهدف إلى جمع معلومات من شخص أو مؤسسة بدون علمهم لتسليمها لجهة أخرى" },
          { q: "ما أنواع برامج التجسس؟", a: "١- برامج الرصد والتسجيل\n٢- برنامج تتبع تصرفات المستخدم" },
          { q: "ما أعراض وجود برامج التجسس؟", a: "١- محاولة الحاسوب إرسال بيانات\n٢- صفحة بداية متصفح الإنترنت تختلف عن الصفحة التي ضُبط عليها\n٣- استخدام متصفح أو محرك بحث لم يسبق اختياره" },
        ]
      },
      {
        title: "أمن المعلومات والتشفير",
        qa: [
          { q: "ما تعريف أمن المعلومات؟", a: "التدابير التقنية والإدارية المستخدمة لحماية المعلومات من الوصول غير المصرح به أو كشفها أو إلحاق الضرر بها" },
          { q: "ما عناصر أمن المعلومات؟ (عددها)", a: "١- سرية البيانات: الحفاظ على المعلومات باستخدام الطرائق الحديثة للتشفير\n٢- سلامة المعلومات وتكاملها: الحفاظ على المعلومات من الحذف أو التعديل أو الإضافة\n٣- توافر المعلومات: تكون المعلومات قابلة للوصول إليها عند الطلب" },
          { q: "ما تعريف التشفير؟", a: "عملية تغيير البيانات ووضعها بشكل غير مفهوم لا يمكن إرجاعها لوضعها الأصلي إلا للشخص المصرح" },
          { q: "ما تعريف التشفير المتناظر؟", a: "نظام تشفير يعتمد على مفتاح واحد يُستخدم بعمليتي التشفير وفك التشفير" },
        ]
      },
      {
        title: "مكافح الفايروسات والجدار الناري",
        qa: [
          { q: "ما تعريف مكافح الفايروسات؟", a: "برنامج حاسوبي يستخدم لحجب البرامج الضارة وكشفها وإزالتها من الفايروسات وبرامج التجسس" },
          { q: "ما أنواع مكافح الفايروسات؟", a: "١- برنامج نورتون\n٢- برنامج مكافي\n٣- برنامج كاسبر سكاي\n٤- برنامج أفيرا" },
          { q: "ما تعريف الجدار الناري وأنواعه؟", a: "برنامج يراقب ويسيطر على جميع البيانات الداخلة والخارجة من الشبكة\nأنواعه:\n١- جدار ناري لحماية المؤسسات\n٢- جدار ناري لحاية الحواسيب الشخصية\n٣- جدار ناري في نظام تشغيل Windows" },
        ]
      },
      {
        title: "التهديدات المادية والحماية",
        qa: [
          { q: "ما التهديدات المادية؟", a: "١- عرض الأجهزة المادية للتخريب والسرقة\n٢- انقطاع الخدمات كانقطاع الطاقة الكهربائية أو خدمة الإنترنت\n٣- كوارث طبيعية كالفيضانات والحرائق" },
          { q: "ما إجراءات الحماية المادية؟", a: "١- كاميرات مراقبة على الأبواب والأسوار\n٢- قفل الأبواب باستخدام بصمة اليد أو العين أو البطاقات الذكية\n٣- توعية العاملين وتدريبهم على القواعد السليمة دوريًا" },
        ]
      }
    ]
  },
  {
    id: "windows",
    title: "صيانة Windows",
    icon: "💻",
    color: "#a855f7",
    sections: [
      {
        title: "التحديث والترقية",
        qa: [
          { q: "ما الفرق بين التحديث (Update) والترقية (Upgrade)؟", a: "التحديث (Update): يصلح الأخطاء ويحسن الأداء دون تغيير نظام التشغيل\nالترقية (Upgrade): مصدر جديد من نفس النظام يوفر تحسينات جوهرية للأداء العام" },
          { q: "ما تعريف Windows Update؟", a: "خدمة تقدمها شركة مايكروسوفت لإضافة خصائص جديدة لنظام التشغيل أو تصحيح خلل أو تصحيح ثغرات أمنية" },
          { q: "ما خطوات إجراء Windows Update؟", a: "Start → Settings → Update & Security → Windows Update → Check for Update" },
          { q: "كيف تميز بين الترقية والتحديث من خلال الرقم؟", a: "مثال: Windows 8.1\nالرقم (8) يمثل نسخة الترقية\nالرقم (1) بعد الفاصلة يمثل نسخة التحديث" },
          { q: "متى يتم التحديث بانتظام؟", a: "يتم التحديث أسبوعيًا أو بانتظام" },
        ]
      },
      {
        title: "صيانة نظام التشغيل",
        qa: [
          { q: "ما الصيانة الوقتية للحاسوب (Troubleshoot)؟", a: "صيانة تعتمد على إجراءات لتحديد المشكلة التي أوقفت نظام التشغيل" },
          { q: "لماذا نصطنع الحاسوب ولا يعمل بسبب القرص؟", a: "لأن نظام التشغيل لا يتوقف مساحة القرص الصلب → تنقصي إصلاحها → يحفظ بنسخة احتياطية لملفات نظام التشغيل القديمة" },
          { q: "ما طرائق علاج البرامج؟", a: "١- تدريب نظام التشغيل بشكل منتظم\n٢- الاحتفاظ بساحة خالية في القرص\n٣- ترقية وتحديث البرامج\n٤- أدوات لصيانة نظام التشغيل" },
          { q: "ما مزايا الصيانة؟", a: "١- الاحتفاظ بساحة خالية في القرص\n٢- ترقية وتحديث البرامج (Drivers)\n٣- أدوات لصيانة نظام التشغيل" },
        ]
      },
      {
        title: "Disk Cleanup وإدارة القرص",
        qa: [
          { q: "ما خطوات Disk Cleanup عند التحديث؟", a: "كلينت (Disk Cleanup) → تنظيف الكتب → اختيار القسم (Drives) → اختيار الجزء المطلوب → ok" },
          { q: "ما Previous Windows Installation؟", a: "ملفات تثبيت الويندوز السابق، ويمكن حذفها لتوفير مساحة" },
          { q: "كيف تحسين سعة التخزين؟", a: "Start → Settings → System → Storage → Storage Sense → تشغيل الخاصية" },
          { q: "كيف تُحسّن القرص (Optimize)؟", a: "InSPC → Properties → Tools → Optimize → Settings Change → ok" },
          { q: "كيف تفحص القرص بحثًا عن الأخطاء؟", a: "CTRL + TAGt → Del → إلقى حل أجزاء الخطأ → التحقق\nأو: This PC → Properties → Tools → Check → ScanDvie" },
        ]
      },
      {
        title: "أقسام القرص (Partitions)",
        qa: [
          { q: "كيف تنشئ قسمًا جديدًا في القرص؟", a: "This PC → manage → Disk management → New Partition" },
          { q: "كيف تحذف قسمًا في القرص؟", a: "كليك يمين على القسم → Delete Volume → CLEAR" },
          { q: "ما أنظمة الملفات المستخدمة؟", a: "NTFS و FAT32" },
          { q: "ما الفرق بين NTFS و FAT32؟", a: "NTFS: نظام ملفات أكثر أمانًا وكفاءة وحجم ملف أكبر\nFAT32: نظام أقدم ومتوافق مع معظم الأجهزة" },
          { q: "كيف تُنسّق قسمًا (Format)؟", a: "This PC → Format → Start → FAT32 → ok" },
        ]
      },
      {
        title: "إعادة تشغيل وإيقاف Windows",
        qa: [
          { q: "كيف تُعيد تشغيل الحاسوب؟", a: "Start → Power → Restart" },
          { q: "ما اختصار إدارة المهام؟", a: "CTRL + ALT + DELETE → Task Manager" },
          { q: "ما اختصار إغلاق البرنامج المتوقف؟", a: "CTRL + ALT + DEL → Task Manager → End Task" },
        ]
      }
    ]
  },
  {
    id: "powerpoint",
    title: "برنامج PowerPoint",
    icon: "📊",
    color: "#f97316",
    sections: [
      {
        title: "فتح وتشغيل PowerPoint",
        qa: [
          { q: "كيف تفتح برنامج PowerPoint من القائمة؟", a: "Start → All Programs → MS PowerPoint" },
          { q: "كيف تفتح ملف PowerPoint موجود مسبقًا؟", a: "File → Open → اختيار الملف" },
          { q: "كيف تنشئ ملف PowerPoint جديد؟", a: "File → New" },
        ]
      },
      {
        title: "التنسيق في PowerPoint",
        qa: [
          { q: "كيف تكتب عبارة باللون الأحمر والخط المسطر؟", a: "اكتب العبارة → ظللها → من Homepage اختر أداة A ▼ للون الأحمر → اختر أداة الخط المسطر (U)" },
          { q: "كيف تغير نوع الخط وحجمه في PowerPoint؟", a: "ظلل النص → نختار نوع الخط من الأداة (مثل: ابجدصوز) → نختار الحجم من الأداة (مثل: 16)" },
          { q: "ما خطوات تنسيق عبارة بخط معين وحجم ولون؟", a: "١- اكتب العبارة\n٢- ظللها\n٣- غير نوع الخط\n٤- غير الحجم\n٥- غير اللون من أداة A ▼\n٦- اضغط Underline إذا مطلوب" },
        ]
      },
      {
        title: "حفظ ملف PowerPoint",
        qa: [
          { q: "كيف تحفظ ملف PowerPoint؟", a: "File → Save (للحفظ نفس المكان)\nأو File → Save As → اختر المكان والاسم" },
          { q: "كيف تحفظ ملف PowerPoint باسم آخر؟", a: "File → Save As → اختيار الرقم/الاسم → Save" },
        ]
      }
    ]
  },
  {
    id: "word",
    title: "برنامج Word - تنسيق الخط",
    icon: "📝",
    color: "#22c55e",
    sections: [
      {
        title: "أدوات تنسيق الخط (Font)",
        qa: [
          { q: "كيف تغير نوع الخط للنص المظلل؟", a: "نختار اسم الخط من الأداة في شريط الأدوات (مثل: Times New Roman)" },
          { q: "كيف تغير حجم النص المظلل؟", a: "نختار الرقم من أداة حجم الخط (مثل: 36)" },
          { q: "ما أداة الخط الغامق وما رمزها؟", a: "B - للخط الغامق (Bold)" },
          { q: "ما أداة الخط المائل وما رمزها؟", a: "I - للخط المائل (Italic)" },
          { q: "ما أداة الخط المسطر وما رمزها؟", a: "U - للخط المسطر (Underline)" },
          { q: "ما أداة تحديد لون الخط؟", a: "أداة A ▼ في شريط الأدوات تُستخدم لتحديد لون الخط" },
          { q: "ما أداة تظليل النص؟", a: "أداة S (أو أداة تظليل) لتظليل النص المحدد" },
          { q: "ما أداة النص بتوسط خط (Strikethrough)؟", a: "أداة ABC ← تضع خطًا في وسط النص" },
          { q: "ما أداة مسح التنسيق؟", a: "أداة A (مسح التنسيق) تزيل كل تنسيق النص" },
          { q: "ما أداة لون خلفية النص؟", a: "أداة تحديد لون ضلفية النص المحدد نختار الأداة (الأصفر عادةً)" },
          { q: "ما أداة تحديد حالة الأحرف (كبيرة أو صغيرة)؟", a: "أداة A/a (Aa) ← تحدد هل الأحرف كبيرة أو صغيرة" },
        ]
      },
      {
        title: "مكان أدوات الخط",
        qa: [
          { q: "أين توجد أدوات الخط (Font) في Word؟", a: "في تبويب Homepage (الصفحة الرئيسية) في مجموعة Font" },
          { q: "ما مكونات مجموعة Font في شريط الأدوات؟", a: "نوع الخط، حجم الخط، Bold(B)، Italic(I)، Underline(U)، لون الخط، تظليل النص، مسح التنسيق، حالة الأحرف" },
        ]
      }
    ]
  }
];

// ===== Quiz Generator =====
function generateQuiz(topics) {
  const allQA = [];
  topics.forEach(topic => {
    topic.sections.forEach(section => {
      section.qa.forEach(item => {
        allQA.push({ ...item, topicTitle: topic.title, topicColor: topic.color });
      });
    });
  });
  return allQA.sort(() => Math.random() - 0.5).slice(0, 15);
}

// ===== Flashcard Component =====
function Flashcard({ item, index }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      style={{
        cursor: "pointer",
        perspective: "1000px",
        marginBottom: "16px",
      }}
    >
      <div style={{
        position: "relative",
        minHeight: "120px",
        transformStyle: "preserve-3d",
        transition: "transform 0.5s",
        transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
      }}>
        {/* Front */}
        <div style={{
          position: "absolute",
          width: "100%",
          backfaceVisibility: "hidden",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: "14px",
          padding: "20px 24px",
          minHeight: "120px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
        }}>
          <div style={{ flex: 1, textAlign: "right" }}>
            <div style={{ fontSize: "11px", color: "#888", marginBottom: "8px", letterSpacing: "1px" }}>
              س {index + 1} • اضغط للإجابة
            </div>
            <div style={{ fontSize: "16px", color: "#f0f0f0", lineHeight: "1.7", fontWeight: "500" }}>
              {item.q}
            </div>
          </div>
          <div style={{ fontSize: "24px", marginLeft: "16px", opacity: 0.4 }}>❓</div>
        </div>
        {/* Back */}
        <div style={{
          position: "absolute",
          width: "100%",
          backfaceVisibility: "hidden",
          transform: "rotateY(180deg)",
          background: "rgba(0,212,255,0.08)",
          border: "1px solid rgba(0,212,255,0.3)",
          borderRadius: "14px",
          padding: "20px 24px",
          minHeight: "120px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "0 4px 20px rgba(0,212,255,0.15)",
        }}>
          <div style={{ flex: 1, textAlign: "right" }}>
            <div style={{ fontSize: "11px", color: "#00d4ff", marginBottom: "8px", letterSpacing: "1px" }}>
              ✅ الإجابة
            </div>
            <div style={{ fontSize: "15px", color: "#e0f7ff", lineHeight: "1.8", whiteSpace: "pre-line" }}>
              {item.a}
            </div>
          </div>
          <div style={{ fontSize: "24px", marginLeft: "16px", opacity: 0.5 }}>💡</div>
        </div>
      </div>
    </div>
  );
}

// ===== Quiz Mode =====
function QuizMode({ onBack }) {
  const [questions] = useState(() => generateQuiz(TOPICS));
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [results, setResults] = useState([]);

  const q = questions[current];

  const handleReveal = () => setShowAnswer(true);

  const handleAnswer = (correct) => {
    const newScore = correct ? score + 1 : score;
    setScore(newScore);
    setResults([...results, { q: q.q, correct }]);
    if (current + 1 >= questions.length) {
      setDone(true);
    } else {
      setCurrent(current + 1);
      setShowAnswer(false);
    }
  };

  if (done) {
    const pct = Math.round((score / questions.length) * 100);
    const grade = pct >= 80 ? "ممتاز 🏆" : pct >= 60 ? "جيد 👍" : "راجع المادة 📚";
    return (
      <div style={{ textAlign: "center", padding: "40px 20px" }}>
        <div style={{ fontSize: "80px", marginBottom: "16px" }}>
          {pct >= 80 ? "🎉" : pct >= 60 ? "👏" : "📖"}
        </div>
        <h2 style={{ color: "#00d4ff", fontSize: "28px", margin: "0 0 8px" }}>انتهى الاختبار!</h2>
        <p style={{ color: "#888", marginBottom: "24px" }}>نتيجتك: {grade}</p>
        <div style={{
          background: "rgba(255,255,255,0.05)",
          borderRadius: "20px",
          padding: "30px",
          marginBottom: "30px",
          maxWidth: "400px",
          margin: "0 auto 30px",
        }}>
          <div style={{ fontSize: "64px", fontWeight: "900", color: pct >= 80 ? "#22c55e" : pct >= 60 ? "#f97316" : "#ef4444" }}>
            {score}/{questions.length}
          </div>
          <div style={{ color: "#aaa", marginTop: "8px" }}>{pct}% صحيح</div>
        </div>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <button onClick={onBack} style={btnStyle("#00d4ff")}>رجوع للمادة</button>
          <button onClick={() => window.location.reload()} style={btnStyle("#a855f7")}>اختبار جديد</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "700px", margin: "0 auto", padding: "20px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "30px" }}>
        <button onClick={onBack} style={{ background: "none", border: "none", color: "#888", cursor: "pointer", fontSize: "14px" }}>
          ← رجوع
        </button>
        <div style={{ color: "#888", fontSize: "14px" }}>
          سؤال {current + 1} من {questions.length} • النقاط: {score}
        </div>
      </div>

      <div style={{
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "20px",
        padding: "32px",
        marginBottom: "24px",
        textAlign: "right",
      }}>
        <div style={{ fontSize: "12px", color: "#888", marginBottom: "12px" }}>السؤال</div>
        <div style={{ fontSize: "18px", color: "#f0f0f0", lineHeight: "1.7" }}>{q.q}</div>
      </div>

      {!showAnswer ? (
        <button onClick={handleReveal} style={{ ...btnStyle("#00d4ff"), width: "100%", fontSize: "16px", padding: "16px" }}>
          اكشف الإجابة 👁️
        </button>
      ) : (
        <>
          <div style={{
            background: "rgba(0,212,255,0.08)",
            border: "1px solid rgba(0,212,255,0.3)",
            borderRadius: "16px",
            padding: "24px",
            marginBottom: "20px",
            textAlign: "right",
          }}>
            <div style={{ fontSize: "12px", color: "#00d4ff", marginBottom: "12px" }}>✅ الإجابة الصحيحة</div>
            <div style={{ fontSize: "16px", color: "#e0f7ff", lineHeight: "1.8", whiteSpace: "pre-line" }}>{q.a}</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            <button onClick={() => handleAnswer(true)} style={btnStyle("#22c55e")}>عرفتها ✅</button>
            <button onClick={() => handleAnswer(false)} style={btnStyle("#ef4444")}>ما عرفتها ❌</button>
          </div>
        </>
      )}

      {/* Progress bar */}
      <div style={{ marginTop: "30px", background: "rgba(255,255,255,0.1)", borderRadius: "10px", height: "6px" }}>
        <div style={{
          height: "100%",
          width: `${((current) / questions.length) * 100}%`,
          background: "linear-gradient(90deg, #00d4ff, #a855f7)",
          borderRadius: "10px",
          transition: "width 0.4s ease",
        }} />
      </div>
    </div>
  );
}

function btnStyle(color) {
  return {
    background: `linear-gradient(135deg, ${color}22, ${color}44)`,
    border: `1px solid ${color}66`,
    color: color,
    borderRadius: "12px",
    padding: "12px 24px",
    cursor: "pointer",
    fontSize: "15px",
    fontFamily: "inherit",
    fontWeight: "600",
    transition: "all 0.2s",
  };
}

// ===== Main App =====
export default function App() {
  const [activeTopicId, setActiveTopicId] = useState(null);
  const [activeSectionIdx, setActiveSectionIdx] = useState(null);
  const [mode, setMode] = useState("home"); // home | study | quiz
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const activeTopic = TOPICS.find(t => t.id === activeTopicId);

  const handleSearch = (q) => {
    setSearchQuery(q);
    if (!q.trim()) { setSearchResults([]); return; }
    const results = [];
    TOPICS.forEach(topic => {
      topic.sections.forEach(section => {
        section.qa.forEach(item => {
          if (item.q.includes(q) || item.a.includes(q)) {
            results.push({ ...item, topicTitle: topic.title, sectionTitle: section.title, topicColor: topic.color });
          }
        });
      });
    });
    setSearchResults(results);
  };

  // ===== HOME =====
  if (mode === "home") {
    return (
      <div style={{
        minHeight: "100vh",
        background: "#0a0a12",
        color: "#f0f0f0",
        fontFamily: "'Cairo', 'Tajawal', sans-serif",
        direction: "rtl",
      }}>
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap" rel="stylesheet" />

        {/* Header */}
        <div style={{
          background: "linear-gradient(135deg, #0d0d1f 0%, #0a0a18 100%)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          padding: "40px 24px 30px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: "-60px", left: "50%", transform: "translateX(-50%)",
            width: "400px", height: "200px",
            background: "radial-gradient(ellipse, rgba(0,212,255,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
          <div style={{ fontSize: "48px", marginBottom: "12px" }}>🖥️</div>
          <h1 style={{
            margin: "0 0 6px",
            fontSize: "clamp(22px, 5vw, 32px)",
            fontWeight: "900",
            background: "linear-gradient(135deg, #00d4ff, #a855f7)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            مادة الحاسوب — الرابع الإعدادي العلمي
          </h1>
          <p style={{ color: "#666", fontSize: "14px", margin: "0 0 24px" }}>
            المنهج العراقي • بيئة تفاعلية للمراجعة والحفظ
          </p>

          {/* Search */}
          <div style={{ maxWidth: "500px", margin: "0 auto", position: "relative" }}>
            <input
              value={searchQuery}
              onChange={e => handleSearch(e.target.value)}
              placeholder="ابحث عن سؤال أو كلمة..."
              style={{
                width: "100%",
                padding: "14px 20px 14px 48px",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "14px",
                color: "#f0f0f0",
                fontSize: "15px",
                fontFamily: "inherit",
                outline: "none",
                boxSizing: "border-box",
                textAlign: "right",
              }}
            />
            <span style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", fontSize: "20px" }}>🔍</span>
          </div>

          {/* Search Results */}
          {searchResults.length > 0 && (
            <div style={{
              maxWidth: "600px", margin: "16px auto 0",
              background: "#111",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "14px",
              maxHeight: "300px",
              overflowY: "auto",
              textAlign: "right",
            }}>
              {searchResults.map((r, i) => (
                <div key={i} style={{
                  padding: "16px 20px",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}>
                  <div style={{ fontSize: "12px", color: r.topicColor, marginBottom: "6px" }}>
                    {r.topicTitle} • {r.sectionTitle}
                  </div>
                  <div style={{ fontSize: "14px", color: "#ddd", marginBottom: "6px" }}>{r.q}</div>
                  <div style={{ fontSize: "13px", color: "#888", whiteSpace: "pre-line" }}>{r.a}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Stats Bar */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "32px",
          padding: "20px 24px",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}>
          {[
            { label: "موضوع", value: TOPICS.length, color: "#00d4ff" },
            { label: "سؤال", value: TOPICS.reduce((a, t) => a + t.sections.reduce((b, s) => b + s.qa.length, 0), 0), color: "#a855f7" },
            { label: "قسم", value: TOPICS.reduce((a, t) => a + t.sections.length, 0), color: "#22c55e" },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "24px", fontWeight: "900", color: s.color }}>{s.value}</div>
              <div style={{ fontSize: "12px", color: "#666" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Topic Cards */}
        <div style={{ padding: "30px 20px", maxWidth: "900px", margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "16px",
            marginBottom: "30px",
          }}>
            {TOPICS.map(topic => (
              <div
                key={topic.id}
                onClick={() => { setActiveTopicId(topic.id); setActiveSectionIdx(null); setMode("study"); }}
                style={{
                  background: `linear-gradient(135deg, ${topic.color}11 0%, ${topic.color}06 100%)`,
                  border: `1px solid ${topic.color}33`,
                  borderRadius: "18px",
                  padding: "28px 24px",
                  cursor: "pointer",
                  transition: "all 0.25s",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
              >
                <div style={{
                  position: "absolute", top: "-20px", right: "-20px",
                  fontSize: "80px", opacity: 0.08,
                }}>{topic.icon}</div>
                <div style={{ fontSize: "36px", marginBottom: "14px" }}>{topic.icon}</div>
                <div style={{ fontSize: "18px", fontWeight: "700", color: "#f0f0f0", marginBottom: "8px" }}>
                  {topic.title}
                </div>
                <div style={{ fontSize: "13px", color: "#666" }}>
                  {topic.sections.length} قسم • {topic.sections.reduce((a, s) => a + s.qa.length, 0)} سؤال
                </div>
                <div style={{
                  marginTop: "20px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "13px",
                  color: topic.color,
                  fontWeight: "600",
                }}>
                  ادرس الآن ←
                </div>
              </div>
            ))}
          </div>

          {/* Quiz Button */}
          <div style={{ textAlign: "center" }}>
            <button
              onClick={() => setMode("quiz")}
              style={{
                background: "linear-gradient(135deg, #a855f7, #00d4ff)",
                border: "none",
                borderRadius: "16px",
                padding: "18px 48px",
                color: "#fff",
                fontSize: "17px",
                fontFamily: "inherit",
                fontWeight: "700",
                cursor: "pointer",
                boxShadow: "0 8px 30px rgba(168,85,247,0.3)",
                transition: "transform 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.transform = "scale(1.04)"}
              onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
            >
              🎯 ابدأ اختبار تجريبي
            </button>
            <p style={{ color: "#555", fontSize: "13px", marginTop: "10px" }}>
              15 سؤال عشوائي من كل المادة
            </p>
          </div>
        </div>
      </div>
    );
  }

  // ===== QUIZ MODE =====
  if (mode === "quiz") {
    return (
      <div style={{
        minHeight: "100vh",
        background: "#0a0a12",
        color: "#f0f0f0",
        fontFamily: "'Cairo', 'Tajawal', sans-serif",
        direction: "rtl",
        padding: "20px",
      }}>
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap" rel="stylesheet" />
        <QuizMode onBack={() => setMode("home")} />
      </div>
    );
  }

  // ===== STUDY MODE =====
  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0a12",
      color: "#f0f0f0",
      fontFamily: "'Cairo', 'Tajawal', sans-serif",
      direction: "rtl",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap" rel="stylesheet" />

      {/* Top Bar */}
      <div style={{
        background: "#0d0d1f",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "16px 20px",
        display: "flex",
        alignItems: "center",
        gap: "16px",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}>
        <button
          onClick={() => setMode("home")}
          style={{ background: "none", border: "none", color: "#888", cursor: "pointer", fontSize: "14px" }}
        >
          🏠 الرئيسية
        </button>
        <div style={{ flex: 1 }} />
        <button onClick={() => setMode("quiz")} style={btnStyle("#a855f7")}>
          🎯 اختبار
        </button>
      </div>

      {/* Topic Tabs */}
      <div style={{
        display: "flex",
        gap: "8px",
        padding: "16px 20px",
        overflowX: "auto",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}>
        {TOPICS.map(topic => (
          <button
            key={topic.id}
            onClick={() => { setActiveTopicId(topic.id); setActiveSectionIdx(null); }}
            style={{
              background: activeTopicId === topic.id
                ? `linear-gradient(135deg, ${topic.color}33, ${topic.color}11)`
                : "rgba(255,255,255,0.04)",
              border: `1px solid ${activeTopicId === topic.id ? topic.color + "66" : "rgba(255,255,255,0.08)"}`,
              color: activeTopicId === topic.id ? topic.color : "#888",
              borderRadius: "10px",
              padding: "8px 16px",
              cursor: "pointer",
              fontSize: "13px",
              fontFamily: "inherit",
              fontWeight: activeTopicId === topic.id ? "700" : "400",
              whiteSpace: "nowrap",
              transition: "all 0.2s",
            }}
          >
            {topic.icon} {topic.title}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "24px 20px" }}>
        {activeTopic && (
          <>
            <h2 style={{
              fontSize: "22px",
              fontWeight: "900",
              color: activeTopic.color,
              marginBottom: "24px",
              paddingBottom: "12px",
              borderBottom: `2px solid ${activeTopic.color}33`,
            }}>
              {activeTopic.icon} {activeTopic.title}
            </h2>

            {/* Section Tabs */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
              <button
                onClick={() => setActiveSectionIdx(null)}
                style={{
                  ...btnStyle(activeSectionIdx === null ? activeTopic.color : "#555"),
                  fontSize: "13px",
                  padding: "8px 14px",
                }}
              >
                الكل
              </button>
              {activeTopic.sections.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSectionIdx(i)}
                  style={{
                    ...btnStyle(activeSectionIdx === i ? activeTopic.color : "#555"),
                    fontSize: "13px",
                    padding: "8px 14px",
                  }}
                >
                  {s.title}
                </button>
              ))}
            </div>

            {/* Cards */}
            {(activeSectionIdx === null ? activeTopic.sections : [activeTopic.sections[activeSectionIdx]]).map((section, si) => (
              <div key={si} style={{ marginBottom: "32px" }}>
                <div style={{
                  fontSize: "14px",
                  fontWeight: "700",
                  color: activeTopic.color,
                  marginBottom: "14px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}>
                  <div style={{
                    width: "4px", height: "20px",
                    background: activeTopic.color,
                    borderRadius: "2px",
                  }} />
                  {section.title}
                </div>
                {section.qa.map((item, qi) => {
                  const globalIdx = activeSectionIdx === null
                    ? activeTopic.sections.slice(0, si).reduce((a, s) => a + s.qa.length, 0) + qi
                    : qi;
                  return <Flashcard key={qi} item={item} index={globalIdx} />;
                })}
              </div>
            ))}

            <div style={{
              textAlign: "center",
              padding: "20px",
              color: "#555",
              fontSize: "13px",
            }}>
              اضغط على أي بطاقة لكشف الإجابة ✨
            </div>
          </>
        )}
      </div>
    </div>
  );
}
