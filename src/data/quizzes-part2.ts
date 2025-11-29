import { Quiz } from "./quizzes";

export const additionalQuizzes: Quiz[] = [
  {
    id: "lacasadepapel",
    title: "La Casa de Papel'den Hangi Karaktersin?",
    description: "Soygun ekibinin hangi üyesisin?",
    icon: "Banknote",
    emoji: "💰",
    questions: [
      {
        id: "q1",
        text: "Bir soygun planlarken en önemli şey nedir?",
        options: [
          { id: "a1", text: "Detaylı strateji ve planlama", resultId: "profesor" },
          { id: "a2", text: "Cesaret ve hızlı hareket", resultId: "tokyo" },
          { id: "a3", text: "Güvenilir bir ekip", resultId: "nairobi" },
          { id: "a4", text: "Soğukkanlılık ve disiplin", resultId: "berlin" },
        ],
      },
      {
        id: "q2",
        text: "En büyük zayıflığın nedir?",
        options: [
          { id: "b1", text: "Aşırı düşünmek", resultId: "profesor" },
          { id: "b2", text: "İçgüdülerime çok güvenmek", resultId: "tokyo" },
          { id: "b3", text: "Ailem için her şeyi riske atmak", resultId: "nairobi" },
          { id: "b4", text: "Aşırı özgüvenim", resultId: "berlin" },
        ],
      },
      {
        id: "q3",
        text: "Bir krizde nasıl davranırsın?",
        options: [
          { id: "c1", text: "Sakin kalır, yeni plan yaparım", resultId: "profesor" },
          { id: "c2", text: "Hızlı aksiyon alırım", resultId: "tokyo" },
          { id: "c3", text: "Ekibi bir arada tutmaya çalışırım", resultId: "nairobi" },
          { id: "c4", text: "Liderliği ele alırım", resultId: "berlin" },
        ],
      },
      {
        id: "q4",
        text: "Aşk senin için ne ifade eder?",
        options: [
          { id: "d1", text: "Zayıflık ve dikkat dağıtıcı", resultId: "profesor" },
          { id: "d2", text: "Tutku ve heyecan", resultId: "tokyo" },
          { id: "d3", text: "Aile ve bağlılık", resultId: "nairobi" },
          { id: "d4", text: "Karmaşık ama güçlü", resultId: "berlin" },
        ],
      },
      {
        id: "q5",
        text: "En büyük hedefin nedir?",
        options: [
          { id: "e1", text: "Mükemmel planı gerçekleştirmek", resultId: "profesor" },
          { id: "e2", text: "Özgürce yaşamak", resultId: "tokyo" },
          { id: "e3", text: "Ailem için iyi bir hayat", resultId: "nairobi" },
          { id: "e4", text: "Efsane olmak", resultId: "berlin" },
        ],
      },
      {
        id: "q6",
        text: "Ekipte hangi rol senin olurdu?",
        options: [
          { id: "f1", text: "Beyni, strateji yapan", resultId: "profesor" },
          { id: "f2", text: "Aksiyonu başlatan", resultId: "tokyo" },
          { id: "f3", text: "Ekibi motive eden", resultId: "nairobi" },
          { id: "f4", text: "Operasyon lideri", resultId: "berlin" },
        ],
      },
      {
        id: "q7",
        text: "Yakalanma riski varsa ne yapardın?",
        options: [
          { id: "g1", text: "Planı değiştirir, alternatif yol bulurum", resultId: "profesor" },
          { id: "g2", text: "Kaçar, sonra düşünürüm", resultId: "tokyo" },
          { id: "g3", text: "Ekibi korumaya çalışırım", resultId: "nairobi" },
          { id: "g4", text: "Son ana kadar mücadele ederim", resultId: "berlin" },
        ],
      },
      {
        id: "q8",
        text: "Hangi şehir kodu senin olurdu?",
        options: [
          { id: "h1", text: "Madrid - Merkez ve kontrol", resultId: "profesor" },
          { id: "h2", text: "Tokyo - Hızlı ve heyecanlı", resultId: "tokyo" },
          { id: "h3", text: "Nairobi - Sıcak ve canlı", resultId: "nairobi" },
          { id: "h4", text: "Berlin - Kültürlü ve güçlü", resultId: "berlin" },
        ],
      },
      {
        id: "q9",
        text: "Para senin için ne ifade eder?",
        options: [
          { id: "i1", text: "Sisteme karşı bir zafer", resultId: "profesor" },
          { id: "i2", text: "Özgürlük ve macera", resultId: "tokyo" },
          { id: "i3", text: "Ailem için güvenlik", resultId: "nairobi" },
          { id: "i4", text: "Başarının kanıtı", resultId: "berlin" },
        ],
      },
      {
        id: "q10",
        text: "Soygun bitince ne yapardın?",
        options: [
          { id: "j1", text: "Yeni planlar yaparım", resultId: "profesor" },
          { id: "j2", text: "Dünyayı gezerim", resultId: "tokyo" },
          { id: "j3", text: "Ailemle huzurlu yaşarım", resultId: "nairobi" },
          { id: "j4", text: "Görkemli bir hayat sürerim", resultId: "berlin" },
        ],
      },
    ],
    results: [
      {
        id: "profesor",
        character: "Profesor",
        description: "Sen zeki, stratejik ve her şeyi detaylarıyla planlarsın! Sakin görünüşünün altında çelik gibi bir irade var. Her ihtimali hesaplar ve asla panik yapmazsın. Ekibine liderlik ederken duygusal olmamaya çalışsan da, içinde derin bir merhamet taşırsın.",
      },
      {
        id: "tokyo",
        character: "Tokyo",
        description: "Sen tutkulu, cesur ve spontanesin! İçgüdülerine güvenirsin ve anı yaşarsın. Bazen düşünmeden hareket etsen de, bu senin gücün. Özgürlüğüne düşkünsün ve aşk için her şeyi göze alırsın. Hayat senin için bir macera!",
      },
      {
        id: "nairobi",
        character: "Nairobi",
        description: "Sen güçlü, koruyucu ve merhametlisin! Ekibini bir aile gibi görürsün ve herkesin moralini yüksek tutarsın. Liderlik vasıfların doğal ve herkes seni sever. Geçmişin zor olsa da, bu seni daha da güçlendirmiş.",
      },
      {
        id: "berlin",
        character: "Berlin",
        description: "Sen karizmatik, özgüvenli ve karmaşıksın! Lüksü ve güzelliği seversin. Duygusal olabilirsin ama bunu göstermemeyi tercih edersin. Ekibine sadıksın ve onuruna düşkün. Herkes senin liderliğine saygı duyar.",
      },
    ],
  },
  {
    id: "peakyblinders",
    title: "Peaky Blinders'dan Hangi Karaktersin?",
    description: "Birmingham'ın hangi çetesi üyesisin?",
    icon: "Crown",
    emoji: "🎩",
    questions: [
      {
        id: "q1",
        text: "Bir anlaşmada en önemli şey nedir?",
        options: [
          { id: "a1", text: "Güç ve kontrol", resultId: "tommy" },
          { id: "a2", text: "Aile ve sadakat", resultId: "arthur" },
          { id: "a3", text: "Para ve çıkar", resultId: "polly" },
          { id: "a4", text: "Adalet ve onur", resultId: "ada" },
        ],
      },
      {
        id: "q2",
        text: "Bir tehdit karşısında ne yaparsın?",
        options: [
          { id: "b1", text: "Stratejik düşünür, planlarım", resultId: "tommy" },
          { id: "b2", text: "Hemen saldırırım", resultId: "arthur" },
          { id: "b3", text: "Akıllıca hareket eder, manipüle ederim", resultId: "polly" },
          { id: "b4", text: "Diplomasi kullanırım", resultId: "ada" },
        ],
      },
      {
        id: "q3",
        text: "En büyük zayıflığın nedir?",
        options: [
          { id: "c1", text: "Duygularımı gösterememek", resultId: "tommy" },
          { id: "c2", text: "Öfke kontrolü", resultId: "arthur" },
          { id: "c3", text: "Ailem için her şeyi riske atmak", resultId: "polly" },
          { id: "c4", text: "İdealistliğim", resultId: "ada" },
        ],
      },
      {
        id: "q4",
        text: "İş ve aşk arasında seçim yapman gerekse?",
        options: [
          { id: "d1", text: "İş her zaman önce gelir", resultId: "tommy" },
          { id: "d2", text: "Kararsız kalırım", resultId: "arthur" },
          { id: "d3", text: "Aile her şeydir", resultId: "polly" },
          { id: "d4", text: "Aşk için her şeyi bırakırım", resultId: "ada" },
        ],
      },
      {
        id: "q5",
        text: "Hangi kelime seni tanımlar?",
        options: [
          { id: "e1", text: "Hırslı", resultId: "tommy" },
          { id: "e2", text: "Sadık", resultId: "arthur" },
          { id: "e3", text: "Koruyucu", resultId: "polly" },
          { id: "e4", text: "Bağımsız", resultId: "ada" },
        ],
      },
      {
        id: "q6",
        text: "Birmingham'da ne yapardın?",
        options: [
          { id: "f1", text: "İmparatorluk kurarım", resultId: "tommy" },
          { id: "f2", text: "Ailem için savaşırım", resultId: "arthur" },
          { id: "f3", text: "İşleri yönetirim", resultId: "polly" },
          { id: "f4", text: "Değişim için çalışırım", resultId: "ada" },
        ],
      },
      {
        id: "q7",
        text: "Savaş deneyimin seni nasıl etkiledi?",
        options: [
          { id: "g1", text: "Duygularımı kapattı", resultId: "tommy" },
          { id: "g2", text: "Travma yarattı", resultId: "arthur" },
          { id: "g3", text: "Güçlendirdi", resultId: "polly" },
          { id: "g4", text: "Barışçıl yaptı", resultId: "ada" },
        ],
      },
      {
        id: "q8",
        text: "Bir ihanete nasıl tepki verirsin?",
        options: [
          { id: "h1", text: "Soğuk intikam planlarım", resultId: "tommy" },
          { id: "h2", text: "Öfkeyle saldırırım", resultId: "arthur" },
          { id: "h3", text: "Akıllıca ödetiririm", resultId: "polly" },
          { id: "h4", text: "Affederim ama unutmam", resultId: "ada" },
        ],
      },
      {
        id: "q9",
        text: "Alkol ve kumar senin için ne ifade eder?",
        options: [
          { id: "i1", text: "Kontrollü kullanırım, iş için", resultId: "tommy" },
          { id: "i2", text: "Unutmak için sığınağım", resultId: "arthur" },
          { id: "i3", text: "Sosyal aktivite", resultId: "polly" },
          { id: "i4", text: "Uzak dururum", resultId: "ada" },
        ],
      },
      {
        id: "q10",
        text: "Nihai hedefin nedir?",
        options: [
          { id: "j1", text: "Yasal iş adamı olmak", resultId: "tommy" },
          { id: "j2", text: "Ailemle huzurlu yaşamak", resultId: "arthur" },
          { id: "j3", text: "Peaky Blinders'ı korumak", resultId: "polly" },
          { id: "j4", text: "Sosyal adalet sağlamak", resultId: "ada" },
        ],
      },
    ],
    results: [
      {
        id: "tommy",
        character: "Thomas Shelby",
        description: "Sen stratejik, hırslı ve soğukkanlısın! Duygularını içinde saklarsın ve her zaman bir plan yaparsın. Savaş travman seni değiştirdi ama güçlendirdi de. İmparatorluk kurmak istiyorsun ve bunun için her şeyi göze alırsın. Ailenin seni endişelendirse de, duygularını göstermekte zorlanırsın.",
      },
      {
        id: "arthur",
        character: "Arthur Shelby",
        description: "Sen sadık, tutkulu ve duygusalsın! Kardeşine körü körüne bağlısın ve ailen için her şeyi yaparsın. Savaş senin üzerinde derin izler bıraktı ve öfkenle başa çıkmakta zorlanırsın. İçinde iyi bir insan var ama karanlık geçmişin seni takip ediyor.",
      },
      {
        id: "polly",
        character: "Polly Gray",
        description: "Sen güçlü, koruyucu ve akıllısın! Shelby ailesinin anası konumundasın ve herkesi bir arada tutarsın. Sezgilerin güçlü ve manipülasyonda ustasın. Çocuklarını korumak senin her şeyindir ve bunu yaparken acımasız olabilirsin.",
      },
      {
        id: "ada",
        character: "Ada Shelby",
        description: "Sen bağımsız, idealist ve güçlüsün! Ailenin işlerine karışmak istemedin ve kendi yolunu çizdin. Sosyal adalete inanırsın ve kadın haklarını savunursun. Shelby ismini taşısan da, kendi kimliğini oluşturmaya kararlısın.",
      },
    ],
  },
  {
    id: "sherlock",
    title: "Sherlock'tan Hangi Karaktersin?",
    description: "Baker Street'in hangi sakinisisin?",
    icon: "Search",
    emoji: "🔍",
    questions: [
      {
        id: "q1",
        text: "Bir gizemi nasıl çözersin?",
        options: [
          { id: "a1", text: "Mantık ve dedüksiyon", resultId: "sherlock" },
          { id: "a2", text: "Pratik düşünce ve sağduyu", resultId: "john" },
          { id: "a3", text: "Zeka ve manipülasyon", resultId: "mycroft" },
          { id: "a4", text: "Yaratıcılık ve kaos", resultId: "moriarty" },
        ],
      },
      {
        id: "q2",
        text: "Sosyal ilişkilerde nasılsın?",
        options: [
          { id: "b1", text: "Sosyal becerilerim zayıf", resultId: "sherlock" },
          { id: "b2", text: "İyi bir arkadaşım", resultId: "john" },
          { id: "b3", text: "İnsanları uzaktan gözlemlerim", resultId: "mycroft" },
          { id: "b4", text: "İnsanlarla oynamayı severim", resultId: "moriarty" },
        ],
      },
      {
        id: "q3",
        text: "En büyük motivasyonun nedir?",
        options: [
          { id: "c1", text: "Entellektüel meydan okuma", resultId: "sherlock" },
          { id: "c2", text: "İnsanlara yardım etmek", resultId: "john" },
          { id: "c3", text: "Güç ve kontrol", resultId: "mycroft" },
          { id: "c4", text: "Oyun ve eğlence", resultId: "moriarty" },
        ],
      },
      {
        id: "q4",
        text: "Duygular senin için ne ifade eder?",
        options: [
          { id: "d1", text: "Zayıflık ve dikkat dağıtıcı", resultId: "sherlock" },
          { id: "d2", text: "İnsanlığın bir parçası", resultId: "john" },
          { id: "d3", text: "Kullanılabilir bir araç", resultId: "mycroft" },
          { id: "d4", text: "Oyun malzemesi", resultId: "moriarty" },
        ],
      },
      {
        id: "q5",
        text: "Boş vaktinde ne yaparsın?",
        options: [
          { id: "e1", text: "Zihin sarayımda dolaşırım", resultId: "sherlock" },
          { id: "e2", text: "Blog yazarım", resultId: "john" },
          { id: "e3", text: "Hükümeti yönetirim", resultId: "mycroft" },
          { id: "e4", text: "Planlar yaparım", resultId: "moriarty" },
        ],
      },
      {
        id: "q6",
        text: "Bir suçla karşılaşsan ne yapardın?",
        options: [
          { id: "f1", text: "Anında analiz eder, çözerim", resultId: "sherlock" },
          { id: "f2", text: "Scotland Yard'a bildiririm", resultId: "john" },
          { id: "f3", text: "MI6'ya yönlendiririm", resultId: "mycroft" },
          { id: "f4", text: "Daha büyük bir suç planlarım", resultId: "moriarty" },
        ],
      },
      {
        id: "q7",
        text: "En büyük düşmanınla nasıl başa çıkarsın?",
        options: [
          { id: "g1", text: "Zekamla alt ederim", resultId: "sherlock" },
          { id: "g2", text: "Sadakatle desteklerim", resultId: "john" },
          { id: "g3", text: "Diplomatik çözerim", resultId: "mycroft" },
          { id: "g4", text: "Oyuna çeviririm", resultId: "moriarty" },
        ],
      },
      {
        id: "q8",
        text: "Londr a'da nerede yaşamak isterdin?",
        options: [
          { id: "h1", text: "221B Baker Street", resultId: "sherlock" },
          { id: "h2", text: "Rahat bir daire", resultId: "john" },
          { id: "h3", text: "Diogenes Club", resultId: "mycroft" },
          { id: "h4", text: "Gizli bir üs", resultId: "moriarty" },
        ],
      },
      {
        id: "q9",
        text: "Hangi müzik aletini çalardın?",
        options: [
          { id: "i1", text: "Keman", resultId: "sherlock" },
          { id: "i2", text: "Müzik dinlemeyi tercih ederim", resultId: "john" },
          { id: "i3", text: "Çalmam, dinlerim", resultId: "mycroft" },
          { id: "i4", text: "Her şey bir senfoni", resultId: "moriarty" },
        ],
      },
      {
        id: "q10",
        text: "Hayatının anlamı nedir?",
        options: [
          { id: "j1", text: "Gizemleri çözmek", resultId: "sherlock" },
          { id: "j2", text: "İyi bir insan olmak", resultId: "john" },
          { id: "j3", text: "İngiltere'yi korumak", resultId: "mycroft" },
          { id: "j4", text: "Kaos yaratmak", resultId: "moriarty" },
        ],
      },
    ],
    results: [
      {
        id: "sherlock",
        character: "Sherlock Holmes",
        description: "Sen dahi, gözlemci ve sosyal açıdan zorlayıcısın! Zihnin sarayında her detayı saklarsın ve sıradan insanların göremediği şeyleri görürsün. Duygularını anlamakta zorlansan da, doğru insanlara derinden bağlanırsın. Her şey senin için bir bulmaca!",
      },
      {
        id: "john",
        character: "John Watson",
        description: "Sen sadık, cesur ve sağduyulusun! Sherlock'un dengeleyicisisin ve onun insani yanını ortaya çıkarırsın. Savaş tecrüben seni güçlendirdi ve maceraya hazır. İyi bir arkadaşsın ve her zaman doğru olanı yapmaya çalışırsın.",
      },
      {
        id: "mycroft",
        character: "Mycroft Holmes",
        description: "Sen zeki, güçlü ve mesafelisin! Sherlock'tan bile daha zeki olduğun söylenir ama tembel görünürsün. Hükümeti gölgeden yönetirsin ve her şeyden haberdarsın. İnsanlarla yakın ilişkiler kurmaktan kaçınırsın çünkü mesafen gücündür.",
      },
      {
        id: "moriarty",
        character: "Jim Moriarty",
        description: "Sen karmaşık, tehlikeli ve tutkulusun! Hayatı bir oyun olarak görürsün ve Sherlock senin mükemmel rakibin. Kaos yaratmaktan keyif alırsın ve ahlaki sınırların olmadığı. Zeki ve karizmatiksin ama aynı zamanda son derece tehlikelisin.",
      },
    ],
  },
  {
    id: "thewitcher",
    title: "The Witcher'dan Hangi Karaktersin?",
    description: "Kıtanın hangi kahramanısın?",
    icon: "Swords",
    emoji: "🗡️",
    questions: [
      {
        id: "q1",
        text: "Bir canavar ile karşılaşsan ne yapardın?",
        options: [
          { id: "a1", text: "Analiz eder, zayıf noktasını bulur öldürürüm", resultId: "geralt" },
          { id: "a2", text: "Büyü kullanarak kontrol ederim", resultId: "yennefer" },
          { id: "a3", text: "Şarkıyla sakinleştiririm", resultId: "jaskier" },
          { id: "a4", text: "Kaderi değiştirmeye çalışırım", resultId: "ciri" },
        ],
      },
      {
        id: "q2",
        text: "En önemli değerin nedir?",
        options: [
          { id: "b1", text: "Tarafsızlık", resultId: "geralt" },
          { id: "b2", text: "Güç", resultId: "yennefer" },
          { id: "b3", text: "Dostluk", resultId: "jaskier" },
          { id: "b4", text: "Özgürlük", resultId: "ciri" },
        ],
      },
      {
        id: "q3",
        text: "Büyü senin için ne ifade eder?",
        options: [
          { id: "c1", text: "Bir araç, dikkatli kullanılmalı", resultId: "geralt" },
          { id: "c2", text: "Güç ve kimlik", resultId: "yennefer" },
          { id: "c3", text: "Büyülü ama tehlikeli", resultId: "jaskier" },
          { id: "c4", text: "İçimde olan bir şey", resultId: "ciri" },
        ],
      },
      {
        id: "q4",
        text: "Kader inancın nasıl?",
        options: [
          { id: "d1", text: "Kadere inanmam, seçimler yaparım", resultId: "geralt" },
          { id: "d2", text: "Kaderi manipüle edebilirim", resultId: "yennefer" },
          { id: "d3", text: "Kaderin akışına bırakırım", resultId: "jaskier" },
          { id: "d4", text: "Kadere bağlıyım ama mücadele ederim", resultId: "ciri" },
        ],
      },
      {
        id: "q5",
        text: "İnsanlar seni nasıl tanımlar?",
        options: [
          { id: "e1", text: "Soğuk ama adil", resultId: "geralt" },
          { id: "e2", text: "Güçlü ve kararlı", resultId: "yennefer" },
          { id: "e3", text: "Neşeli ve sadık", resultId: "jaskier" },
          { id: "e4", text: "Genç ama güçlü", resultId: "ciri" },
        ],
      },
      {
        id: "q6",
        text: "Hangi silah senin olurdu?",
        options: [
          { id: "f1", text: "Gümüş kılıç", resultId: "geralt" },
          { id: "f2", text: "Büyü ve kaos", resultId: "yennefer" },
          { id: "f3", text: "Lüt ve şarkılar", resultId: "jaskier" },
          { id: "f4", text: "İçimdeki güç", resultId: "ciri" },
        ],
      },
      {
        id: "q7",
        text: "Aşk senin için ne ifade eder?",
        options: [
          { id: "g1", text: "Karmaşık ama güçlü", resultId: "geralt" },
          { id: "g2", text: "Zayıflık ve güç aynı anda", resultId: "yennefer" },
          { id: "g3", text: "Şarkıların konusu", resultId: "jaskier" },
          { id: "g4", text: "Aile ve bağlılık", resultId: "ciri" },
        ],
      },
      {
        id: "q8",
        text: "En büyük korkun nedir?",
        options: [
          { id: "h1", text: "Seçim yapmak zorunda kalmak", resultId: "geralt" },
          { id: "h2", text: "Güçsüz olmak", resultId: "yennefer" },
          { id: "h3", text: "Yalnız kalmak", resultId: "jaskier" },
          { id: "h4", text: "Kaderi yerine getirmek", resultId: "ciri" },
        ],
      },
      {
        id: "q9",
        text: "Kıtada nerede yaşamak isterdin?",
        options: [
          { id: "i1", text: "Kaer Morhen - Yalnız ve huzurlu", resultId: "geralt" },
          { id: "i2", text: "Aretuza - Güç ve bilgi", resultId: "yennefer" },
          { id: "i3", text: "Yolda - Macera ve şarkılar", resultId: "jaskier" },
          { id: "i4", text: "Cintra - Evim ve ailem", resultId: "ciri" },
        ],
      },
      {
        id: "q10",
        text: "Nihai hedefin nedir?",
        options: [
          { id: "j1", text: "Huzurlu bir hayat", resultId: "geralt" },
          { id: "j2", text: "Gerçek gücü bulmak", resultId: "yennefer" },
          { id: "j3", text: "Efsanevi şarkılar yaratmak", resultId: "jaskier" },
          { id: "j4", text: "Kaderimi anlamak", resultId: "ciri" },
        ],
      },
    ],
    results: [
      {
        id: "geralt",
        character: "Geralt of Rivia",
        description: "Sen güçlü, disiplinli ve gizemlisin! Mutasyonlar seni süper insan yaptı ama yalnızlığa mahkum etti. Tarafsız görünsen de, derin bir ahlak anlayışın var. İnsanlar seni canavar dese de, sen en insani olanısın. Aşkı ve dostluğu bulduğunda, her şeyi korursun.",
      },
      {
        id: "yennefer",
        character: "Yennefer of Vengerberg",
        description: "Sen güçlü, kararlı ve karmaşıksın! Güzellik için bedel ödedin ve güç peşinde koştun. Zor bir geçmişin var ama bu seni kırılmaz yaptı. İçinde derin bir boşluk hissediyorsun ama gerçek aşk ve amacı bulduğunda, her şeyi değiştirmeye hazırsın.",
      },
      {
        id: "jaskier",
        character: "Jaskier (Dandelion)",
        description: "Sen neşeli, sadık ve romantiksin! Şarkılarınla efsaneler yaratırsın ve en tehlikeli anlarda bile mizahını kaybetmezsin. Geralt'ın en sadık arkadaşısın ve macera senin hayatın. İnsanları sevmeyi ve hayatın güzelliklerini görmeyi biliyorsun.",
      },
      {
        id: "ciri",
        character: "Cirilla (Ciri)",
        description: "Sen genç, güçlü ve kadere bağlısın! İçinde büyük bir güç taşıyorsun ve herkes seni arıyor. Zor bir çocukluk geçirdin ama bu seni güçlendirdi. Geralt senin kaderin ve onunla birlikte kaderini yerine getirmeye çalışıyorsun. Özgürlük senin için her şey!",
      },
    ],
  },
  {
    id: "brooklyn99",
    title: "Brooklyn Nine-Nine'dan Hangi Karaktersin?",
    description: "99. bölgenin hangi dedektifisin?",
    icon: "Shield",
    emoji: "🚔",
    questions: [
      {
        id: "q1",
        text: "Bir davayı nasıl çözersin?",
        options: [
          { id: "a1", text: "Sezgilerim ve hızlı hareket", resultId: "jake" },
          { id: "a2", text: "Disiplin ve prosedürler", resultId: "amy" },
          { id: "a3", text: "Sakinlikle ve stratejiyle", resultId: "holt" },
          { id: "a4", text: "Mizah ve şans", resultId: "charles" },
        ],
      },
      {
        id: "q2",
        text: "Dosyalama sistemin nasıl?",
        options: [
          { id: "b1", text: "Kaotik ama işe yarıyor", resultId: "jake" },
          { id: "b2", text: "Mükemmel ve renkli etiketli", resultId: "amy" },
          { id: "b3", text: "Dijital ve düzenli", resultId: "holt" },
          { id: "b4", text: "Dosya ne?", resultId: "charles" },
        ],
      },
      {
        id: "q3",
        text: "En sevdiğin aktivite nedir?",
        options: [
          { id: "c1", text: "Die Hard maratonu", resultId: "jake" },
          { id: "c2", text: "Renklendirme kitapları", resultId: "amy" },
          { id: "c3", text: "Klasik müzik dinlemek", resultId: "holt" },
          { id: "c4", text: "Yemek yapmak", resultId: "charles" },
        ],
      },
      {
        id: "q4",
        text: "Bir hata yaptığında ne yaparsın?",
        options: [
          { id: "d1", text: "Espriyle geçiştiririm", resultId: "jake" },
          { id: "d2", text: "Panik yaparım", resultId: "amy" },
          { id: "d3", text: "Kabul eder, düzeltirim", resultId: "holt" },
          { id: "d4", text: "Aşırı özür dilerim", resultId: "charles" },
        ],
      },
      {
        id: "q5",
        text: "Hangi kelime seni tanımlar?",
        options: [
          { id: "e1", text: "Eğlenceli", resultId: "jake" },
          { id: "e2", text: "Mükemmeliyetçi", resultId: "amy" },
          { id: "e3", text: "Disiplinli", resultId: "holt" },
          { id: "e4", text: "Sadık", resultId: "charles" },
        ],
      },
      {
        id: "q6",
        text: "İdeal bir tatil nereye olurdu?",
        options: [
          { id: "f1", text: "Las Vegas - Heyecan", resultId: "jake" },
          { id: "f2", text: "Washington D.C. - Müzeler", resultId: "amy" },
          { id: "f3", text: "Ev - Huzur", resultId: "holt" },
          { id: "f4", text: "Paris - Yemekler", resultId: "charles" },
        ],
      },
      {
        id: "q7",
        text: "Kaptan Holt hakkında ne düşünürsün?",
        options: [
          { id: "g1", text: "Harika ama katı bir baba figürü", resultId: "jake" },
          { id: "g2", text: "Rol modelim ve örnek alırım", resultId: "amy" },
          { id: "g3", text: "Kendim", resultId: "holt" },
          { id: "g4", text: "Saygı duyarım ve severim", resultId: "charles" },
        ],
      },
      {
        id: "q8",
        text: "Halloween Heist'te stratejin ne olurdu?",
        options: [
          { id: "h1", text: "Son dakikada sürpriz hamle", resultId: "jake" },
          { id: "h2", text: "Detaylı plan, her şey hesaplı", resultId: "amy" },
          { id: "h3", text: "Gözlemci kalır, son anda devreye girerim", resultId: "holt" },
          { id: "h4", text: "Jake'e yardım ederim", resultId: "charles" },
        ],
      },
      {
        id: "q9",
        text: "En büyük hayalin nedir?",
        options: [
          { id: "i1", text: "En iyi dedektif olmak", resultId: "jake" },
          { id: "i2", text: "Kaptan olmak", resultId: "amy" },
          { id: "i3", text: "Departmanı mükemmelleştirmek", resultId: "holt" },
          { id: "i4", text: "Jake'le ortaklık yapmak", resultId: "charles" },
        ],
      },
      {
        id: "q10",
        text: "Bir partide seni nerede buluruz?",
        options: [
          { id: "j1", text: "Dans pistinde, herkesin dikkatini çekerek", resultId: "jake" },
          { id: "j2", text: "Organizasyonu kontrol ederken", resultId: "amy" },
          { id: "j3", text: "Köşede, sakin bir şekilde", resultId: "holt" },
          { id: "j4", text: "Yemeklerin başında", resultId: "charles" },
        ],
      },
    ],
    results: [
      {
        id: "jake",
        character: "Jake Peralta",
        description: "Sen eğlenceli, yetenekli ve çocuksu bir dedektifsin! Die Hard sevgin efsanevi ve işini seversin. Bazen olgunlaşmakta zorlansan da, önemli anlarda ciddileşebilirsin. En iyi arkadaşların her şeyindir ve romantik bir ruhun var.",
      },
      {
        id: "amy",
        character: "Amy Santiago",
        description: "Sen organize, hırslı ve mükemmeliyetçisin! Renkli dosya etiketlerin ve planların ünlü. Kaptan olmak en büyük hayalindir ve bunun için çok çalışıyorsun. Bazen aşırı rekabetçi olsan da, iyi kalplisin ve sadık bir arkadaşsın.",
      },
      {
        id: "holt",
        character: "Raymond Holt",
        description: "Sen disiplinli, ilkeli ve sakinsin! Duygularını göstermekte zorlanırsın ama derin bir şefkat ve adalet duygusun var. Ekibine baba gibisin ve herkesin gelişmesini istersin. Corgilerine olan sevgin efsanevi!",
      },
      {
        id: "charles",
        character: "Charles Boyle",
        description: "Sen sadık, tutkulu ve yemek aşığısın! Jake'in en iyi arkadaşısın ve onun için her şeyi yaparsın. Biraz abartılı olsan da, kalbin altın değerinde. Yemek yapmayı ve dostlarını mutlu etmeyi seversin.",
      },
    ],
  },
  {
    id: "naruto",
    title: "Naruto'dan Hangi Karaktersin?",
    description: "Konoha'nın hangi ninjası sensin?",
    icon: "Flame",
    emoji: "🍥",
    questions: [
      {
        id: "q1",
        text: "Ninja yolun nedir?",
        options: [
          { id: "a1", text: "Asla pes etmemek", resultId: "naruto" },
          { id: "a2", text: "Güç ve intikam", resultId: "sasuke" },
          { id: "a3", text: "Bilgi ve strateji", resultId: "sakura" },
          { id: "a4", text: "Dostlarımı korumak", resultId: "kakashi" },
        ],
      },
      {
        id: "q2",
        text: "En önemli değerin nedir?",
        options: [
          { id: "b1", text: "Dostluk ve bağlar", resultId: "naruto" },
          { id: "b2", text: "Güç ve hırs", resultId: "sasuke" },
          { id: "b3", text: "Akıl ve gelişim", resultId: "sakura" },
          { id: "b4", text: "Koruma ve fedakarlık", resultId: "kakashi" },
        ],
      },
      {
        id: "q3",
        text: "Bir düşmanla nasıl başa çıkarsın?",
        options: [
          { id: "c1", text: "Konuşarak ikna etmeye çalışırım", resultId: "naruto" },
          { id: "c2", text: "Tüm gücümle saldırırım", resultId: "sasuke" },
          { id: "c3", text: "Stratejik hareket ederim", resultId: "sakura" },
          { id: "c4", text: "Sakin ve hesaplı davranırım", resultId: "kakashi" },
        ],
      },
      {
        id: "q4",
        text: "En büyük hayalin nedir?",
        options: [
          { id: "d1", text: "Hokage olmak", resultId: "naruto" },
          { id: "d2", text: "Kardeşimin intikamını almak", resultId: "sasuke" },
          { id: "d3", text: "En güçlü kunoichi olmak", resultId: "sakura" },
          { id: "d4", text: "Köyü korumak", resultId: "kakashi" },
        ],
      },
      {
        id: "q5",
        text: "Hangi jutsu senin olurdu?",
        options: [
          { id: "e1", text: "Rasengan", resultId: "naruto" },
          { id: "e2", text: "Chidori", resultId: "sasuke" },
          { id: "e3", text: "Medical Ninjutsu", resultId: "sakura" },
          { id: "e4", text: "Sharingan", resultId: "kakashi" },
        ],
      },
      {
        id: "q6",
        text: "Geçmişin seni nasıl etkiledi?",
        options: [
          { id: "f1", text: "Daha güçlü yaptı", resultId: "naruto" },
          { id: "f2", text: "Karanlığa itti", resultId: "sasuke" },
          { id: "f3", text: "Daha kararlı yaptı", resultId: "sakura" },
          { id: "f4", text: "Daha dikkatli yaptı", resultId: "kakashi" },
        ],
      },
      {
        id: "q7",
        text: "Takım çalışması senin için ne ifade eder?",
        options: [
          { id: "g1", text: "Her şey, takım bir aile", resultId: "naruto" },
          { id: "g2", text: "Gerekirse kabul ederim", resultId: "sasuke" },
          { id: "g3", text: "Önemli ve güçlendirici", resultId: "sakura" },
          { id: "g4", text: "Hayati öneme sahip", resultId: "kakashi" },
        ],
      },
      {
        id: "q8",
        text: "En büyük korkun nedir?",
        options: [
          { id: "h1", text: "Yalnız kalmak", resultId: "naruto" },
          { id: "h2", text: "Güçsüz olmak", resultId: "sasuke" },
          { id: "h3", text: "Arkadaşlarımı koruyamamak", resultId: "sakura" },
          { id: "h4", text: "Geçmişin tekrarı", resultId: "kakashi" },
        ],
      },
      {
        id: "q9",
        text: "Bir öğretmende ne ararsın?",
        options: [
          { id: "i1", text: "İnanç ve destek", resultId: "naruto" },
          { id: "i2", text: "Güç ve bilgi", resultId: "sasuke" },
          { id: "i3", text: "Rehberlik ve anlayış", resultId: "sakura" },
          { id: "i4", text: "Deneyim ve hikmet", resultId: "kakashi" },
        ],
      },
      {
        id: "q10",
        text: "Nihai hedefin nedir?",
        options: [
          { id: "j1", text: "Herkes tarafından tanınmak", resultId: "naruto" },
          { id: "j2", text: "Geçmişle barışmak", resultId: "sasuke" },
          { id: "j3", text: "Güçlü ve faydalı olmak", resultId: "sakura" },
          { id: "j4", text: "Yeni nesli yetiştirmek", resultId: "kakashi" },
        ],
      },
    ],
    results: [
      {
        id: "naruto",
        character: "Naruto Uzumaki",
        description: "Sen iyimser, kararlı ve asla pes etmezsin! Zor bir çocukluk geçirdin ama bu seni daha güçlü yaptı. Dostlukları her şeyden değerli görürsün ve herkes tarafından tanınmak istiyorsun. Hokage olma hayalin seni her zaman motive eder. İçindeki dokuz kuyruklu tilki gibi, sınırsız bir enerjin var!",
      },
      {
        id: "sasuke",
        character: "Sasuke Uchiha",
        description: "Sen güçlü, kararlı ve karmaşıksın! Ailenin trajedisi seni derinden etkiledi ve intikam peşinde koştun. Güç arayışın seni karanlığa itti ama içinde hala iyilik var. Yalnız görünsen de, derin bağlar kurabiliyorsun. Zamanla gerçek gücün dostlukta olduğunu anlıyorsun.",
      },
      {
        id: "sakura",
        character: "Sakura Haruno",
        description: "Sen kararlı, akıllı ve gelişime açıksın! Başlangıçta zayıf görünsen de, çok çalışarak en güçlü kunoichi haline geldin. Medical ninjutsu konusunda ustasın ve arkadaşlarını korumak için her şeyi yaparsın. Naruto ve Sasuke'ye olan bağlılığın seni güçlendirdi.",
      },
      {
        id: "kakashi",
        character: "Kakashi Hatake",
        description: "Sen sakin, bilge ve güçlüsün! Zor bir geçmişin var ama bu seni harika bir öğretmen yaptı. Sharingan'ın ve Copy Ninja unvanın ünlü. Arkadaşlarını korumak senin en büyük önceliğin ve yeni nesli yetiştirmekten gurur duyuyorsun. Make-out Paradise okumayı seversin!",
      },
    ],
  },
  {
    id: "avatar",
    title: "Avatar: The Last Airbender'dan Hangi Karaktersin?",
    description: "Hangi ulusun bükücüsüsün?",
    icon: "Wind",
    emoji: "🌊",
    questions: [
      {
        id: "q1",
        text: "Hangi elementi bükmek isterdin?",
        options: [
          { id: "a1", text: "Hava - Özgürlük ve esneklik", resultId: "aang" },
          { id: "a2", text: "Su - Akış ve uyum", resultId: "katara" },
          { id: "a3", text: "Toprak - Güç ve dayanıklılık", resultId: "toph" },
          { id: "a4", text: "Ateş - Tutku ve enerji", resultId: "zuko" },
        ],
      },
      {
        id: "q2",
        text: "En önemli değerin nedir?",
        options: [
          { id: "b1", text: "Barış ve denge", resultId: "aang" },
          { id: "b2", text: "Merhamet ve özen", resultId: "katara" },
          { id: "b3", text: "Özgürlük ve bağımsızlık", resultId: "toph" },
          { id: "b4", text: "Onur ve kurtuluş", resultId: "zuko" },
        ],
      },
      {
        id: "q3",
        text: "Bir düşmanla nasıl başa çıkarsın?",
        options: [
          { id: "c1", text: "Konuşmayı ve barışı tercih ederim", resultId: "aang" },
          { id: "c2", text: "Koruyucu ve savunmacı olurum", resultId: "katara" },
          { id: "c3", text: "Doğrudan ve güçlü saldırırım", resultId: "toph" },
          { id: "c4", text: "Stratejik ve kararlı davranırım", resultId: "zuko" },
        ],
      },
      {
        id: "q4",
        text: "En büyük korkun nedir?",
        options: [
          { id: "d1", text: "Sorumluluğu yerine getirememek", resultId: "aang" },
          { id: "d2", text: "Sevdiklerimi kaybetmek", resultId: "katara" },
          { id: "d3", text: "Özgürlüğümü kaybetmek", resultId: "toph" },
          { id: "d4", text: "Onurumu yeniden kazanamamak", resultId: "zuko" },
        ],
      },
      {
        id: "q5",
        text: "Hangi hayvan rehberin olurdu?",
        options: [
          { id: "e1", text: "Uçan bizon - Appa", resultId: "aang" },
          { id: "e2", text: "Kutup ayısı köpeği - Naga", resultId: "katara" },
          { id: "e3", text: "Köstebek ayısı", resultId: "toph" },
          { id: "e4", text: "Ejderha - Druk", resultId: "zuko" },
        ],
      },
      {
        id: "q6",
        text: "Bir öğretmende ne ararsın?",
        options: [
          { id: "f1", text: "Sabır ve anlayış", resultId: "aang" },
          { id: "f2", text: "Şefkat ve rehberlik", resultId: "katara" },
          { id: "f3", text: "Sert ama adil eğitim", resultId: "toph" },
          { id: "f4", text: "Disiplin ve bilgelik", resultId: "zuko" },
        ],
      },
      {
        id: "q7",
        text: "Geçmişin seni nasıl şekillendirdi?",
        options: [
          { id: "g1", text: "Sorumluluğumu anlamama yardım etti", resultId: "aang" },
          { id: "g2", text: "Daha güçlü ve koruyucu yaptı", resultId: "katara" },
          { id: "g3", text: "Bağımsız olmayı öğretti", resultId: "toph" },
          { id: "g4", text: "Doğru yolu bulmama yardımcı oldu", resultId: "zuko" },
        ],
      },
      {
        id: "q8",
        text: "Takım çalışmasında rolün nedir?",
        options: [
          { id: "h1", text: "Lider ve barış sağlayıcı", resultId: "aang" },
          { id: "h2", text: "Destekleyici ve iyileştirici", resultId: "katara" },
          { id: "h3", text: "Güç ve savunma", resultId: "toph" },
          { id: "h4", text: "Strateji ve saldırı", resultId: "zuko" },
        ],
      },
      {
        id: "q9",
        text: "En büyük gücün nedir?",
        options: [
          { id: "i1", text: "Merhamet ve esneklik", resultId: "aang" },
          { id: "i2", text: "Şefkat ve şifa", resultId: "katara" },
          { id: "i3", text: "Dayanıklılık ve güç", resultId: "toph" },
          { id: "i4", text: "Kararlılık ve büyüme", resultId: "zuko" },
        ],
      },
      {
        id: "q10",
        text: "Dünyada dengeyi nasıl sağlarsın?",
        options: [
          { id: "j1", text: "Barış ve anlayış yoluyla", resultId: "aang" },
          { id: "j2", text: "Şefkat ve iyileşme ile", resultId: "katara" },
          { id: "j3", text: "Güç ve adaletle", resultId: "toph" },
          { id: "j4", text: "Değişim ve gelişimle", resultId: "zuko" },
        ],
      },
    ],
    results: [
      {
        id: "aang",
        character: "Aang",
        description: "Sen neşeli, barışsever ve güçlüsün! Avatar olarak dünyanın dengesini sağlamak senin görevin. 100 yıl buzda kaldın ama ruhun hala genç. Barışı tercih edersin ve öldürmekten kaçınırsın. Appa ve arkadaşların senin ailendir. İçinde büyük bir güç var ama bunu merhamet ve anlayışla kullanırsın.",
      },
      {
        id: "katara",
        character: "Katara",
        description: "Sen şefkatli, güçlü ve koruyucusun! Su bükücüsü olarak şifa yeteneğine sahipsin. Annenin kaybı seni derinden etkiledi ama daha da güçlendirdi. Ekibinin anne figürüsün ve herkese özen gösterirsin. Zamanla en güçlü su bükücülerinden biri oldun.",
      },
      {
        id: "toph",
        character: "Toph Beifong",
        description: "Sen güçlü, bağımsız ve cesursun! Görme engeline rağmen dünyanın en güçlü toprak bükücüsüsün. Metal bükmeyi icat ettin! Aşırı koruyucu ailenden kaçtın ve kendi yolunu çizdin. Sert görünsen de, içinde yumuşak bir kalp taşırsın. Özgürlüğüne düşkünsün!",
      },
      {
        id: "zuko",
        character: "Prince Zuko",
        description: "Sen karmaşık, kararlı ve gelişime açıksın! Babanın onayını kazanmak için yıllarca Avatar'ı kovaladın. Yüzündeki yara geçmişinin bir hatırlatıcısı. Zaman içinde doğru yolu buldun ve Aang'ın müttefiki oldun. Onur ve kurtuluş yolculuğun ilham verici. İçindeki iyi ve kötü arasında mücadele ediyorsun.",
      },
    ],
  },
];
