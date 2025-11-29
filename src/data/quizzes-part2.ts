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
  {
    id: "siliconvalley",
    title: "Silicon Valley'den Hangi Karaktersin?",
    description: "Startup dünyasının hangi karakterisin?",
    icon: "Code",
    emoji: "💻",
    questions: [
      {
        id: "q1",
        text: "Bir startup kurarken en önemli şey nedir?",
        options: [
          { id: "a1", text: "İnovatif ürün ve teknoloji", resultId: "richard" },
          { id: "a2", text: "Agresif büyüme ve para", resultId: "erlich" },
          { id: "a3", text: "Sistem mimarisi ve verimlilik", resultId: "gilfoyle" },
          { id: "a4", text: "Satış ve pazarlama", resultId: "jared" },
        ],
      },
      {
        id: "q2",
        text: "Bir yatırımcı toplantısında nasıl davranırsın?",
        options: [
          { id: "b1", text: "Gergin olurum ama ürünü savunurum", resultId: "richard" },
          { id: "b2", text: "Kendime aşırı güvenirim ve övünürüm", resultId: "erlich" },
          { id: "b3", text: "Teknik detaylarla sıkarım", resultId: "gilfoyle" },
          { id: "b4", text: "Profesyonel ve destekleyici olurum", resultId: "jared" },
        ],
      },
      {
        id: "q3",
        text: "Kodlama tarzın nasıl?",
        options: [
          { id: "c1", text: "Mükemmeliyetçi ve detaycı", resultId: "richard" },
          { id: "c2", text: "Kod yazmam, vizyon adamıyım", resultId: "erlich" },
          { id: "c3", text: "Karanlık ve verimli", resultId: "gilfoyle" },
          { id: "c4", text: "Organize ve dokümante", resultId: "jared" },
        ],
      },
      {
        id: "q4",
        text: "Ekipte hangi rol senin?",
        options: [
          { id: "d1", text: "CEO ve ürün vizyoneri", resultId: "richard" },
          { id: "d2", text: "Kuluçka merkezi sahibi ve danışman", resultId: "erlich" },
          { id: "d3", text: "Sistem mimarı ve siber güvenlik", resultId: "gilfoyle" },
          { id: "d4", text: "COO ve operasyon yöneticisi", resultId: "jared" },
        ],
      },
      {
        id: "q5",
        text: "En büyük korkun nedir?",
        options: [
          { id: "e1", text: "Başarısız olmak ve ürünü mahvetmek", resultId: "richard" },
          { id: "e2", text: "Önemsiz olmak ve unutulmak", resultId: "erlich" },
          { id: "e3", text: "Sistemlerin hack'lenmesi", resultId: "gilfoyle" },
          { id: "e4", text: "Ekibin dağılması", resultId: "jared" },
        ],
      },
      {
        id: "q6",
        text: "Silicon Valley'de nerede yaşamak isterdin?",
        options: [
          { id: "f1", text: "Mütevazi bir evde, masrafları düşük tutarak", resultId: "richard" },
          { id: "f2", text: "Kuluçka merkezinde, networking için", resultId: "erlich" },
          { id: "f3", text: "Karanlık ve sessiz bir yerde", resultId: "gilfoyle" },
          { id: "f4", text: "Temiz ve organize bir dairede", resultId: "jared" },
        ],
      },
      {
        id: "q7",
        text: "Bir rakip şirket çıksa ne yaparsın?",
        options: [
          { id: "g1", text: "Ürünümü geliştirmeye odaklanırım", resultId: "richard" },
          { id: "g2", text: "Saldırgan PR ve pazarlama yaparım", resultId: "erlich" },
          { id: "g3", text: "Onların sistemine sızarım (yasal yollarla)", resultId: "gilfoyle" },
          { id: "g4", text: "Stratejik ortaklıklar kurarım", resultId: "jared" },
        ],
      },
      {
        id: "q8",
        text: "İdeal bir çıkış stratejin ne olurdu?",
        options: [
          { id: "h1", text: "Ürünü geliştirmeye devam etmek", resultId: "richard" },
          { id: "h2", text: "Milyonlarca dolara satmak", resultId: "erlich" },
          { id: "h3", text: "Bağımsız kalmak ve kontrolü elimde tutmak", resultId: "gilfoyle" },
          { id: "h4", text: "Ekibin geleceğini güvence altına almak", resultId: "jared" },
        ],
      },
      {
        id: "q9",
        text: "Teknik bir kriz çıksa ne yaparsın?",
        options: [
          { id: "i1", text: "Panik yapar, sonra çözerim", resultId: "richard" },
          { id: "i2", text: "Suçu başkasına atarım", resultId: "erlich" },
          { id: "i3", text: "Sakin kalır, sistemleri tamir ederim", resultId: "gilfoyle" },
          { id: "i4", text: "Ekibi organize eder, çözüm bulurum", resultId: "jared" },
        ],
      },
      {
        id: "q10",
        text: "Başarıyı nasıl tanımlarsın?",
        options: [
          { id: "j1", text: "İnovatif bir ürün yaratmak", resultId: "richard" },
          { id: "j2", text: "Zengin ve ünlü olmak", resultId: "erlich" },
          { id: "j3", text: "Teknik mükemmellik", resultId: "gilfoyle" },
          { id: "j4", text: "Mutlu ve işlevsel bir ekip", resultId: "jared" },
        ],
      },
    ],
    results: [
      {
        id: "richard",
        character: "Richard Hendricks",
        description: "Sen idealist, mükemmeliyetçi ve biraz gerginsin! Harika bir mühendissin ama liderlik seni zorluyor. Ürününe tutkuyla bağlısın ve teknik detayları önemsersin. Bazen karar vermekte zorlansan da, doğru olanı yapmaya çalışırsın.",
      },
      {
        id: "erlich",
        character: "Erlich Bachman",
        description: "Sen kendine güvenli, gürültücü ve girişimcisin! Vizyon sahibisin ama bazen gerçekçi değilsin. Kuluçka merkezin ve network'ün önemli. Ego'n büyük ama aslında arkadaşlarını önemsersin. Kendini Silicon Valley'in kralı olarak görüyorsun!",
      },
      {
        id: "gilfoyle",
        character: "Bertram Gilfoyle",
        description: "Sen karanlık, zeki ve küstahsın! Sistem mimarisi konusunda dehasın ve bunu biliyorsun. Dinesh ile sürekli dalga geçersin. Satanizm ve verimliliğe inanırsın. Alaycı mizah tarzın ve teknik üstünlüğün seni eşsiz kılıyor.",
      },
      {
        id: "jared",
        character: "Jared Dunn",
        description: "Sen sadık, organize ve biraz garipsin! Richard'a adanmışsın ve ekibi bir arada tutuyorsun. Operasyonel konularda harikasın. Karanlık bir geçmişe sahipsin ama pozitif kalmaya çalışıyorsun. Ekibin anne babası sensin!",
      },
    ],
  },
  {
    id: "wolfofwallstreet",
    title: "The Wolf of Wall Street'ten Hangi Karaktersin?",
    description: "Wall Street'in hangi yıldızısın?",
    icon: "TrendingUp",
    emoji: "📈",
    questions: [
      {
        id: "q1",
        text: "Para senin için ne ifade eder?",
        options: [
          { id: "a1", text: "Güç, başarı ve özgürlük", resultId: "jordan" },
          { id: "a2", text: "Aile ve güvenlik", resultId: "donnie" },
          { id: "a3", text: "Hukuk ve adalet", resultId: "patrick" },
          { id: "a4", text: "Lüks ve mutluluk", resultId: "naomi" },
        ],
      },
      {
        id: "q2",
        text: "Bir satış görüşmesinde nasıl davranırsın?",
        options: [
          { id: "b1", text: "Agresif, karizmatikim ve ikna edici", resultId: "jordan" },
          { id: "b2", text: "Enerjik ve komik", resultId: "donnie" },
          { id: "b3", text: "Profesyonel ve dürüst", resultId: "patrick" },
          { id: "b4", text: "Çekici ve manipülatif", resultId: "naomi" },
        ],
      },
      {
        id: "q3",
        text: "Ahlaki bir ikilemle karşılaşsan ne yaparsın?",
        options: [
          { id: "c1", text: "Kazançlı olanı seçerim", resultId: "jordan" },
          { id: "c2", text: "Arkadaşlarıma sadık kalırım", resultId: "donnie" },
          { id: "c3", text: "Yasalara uyarım", resultId: "patrick" },
          { id: "c4", text: "Kendim için en iyisini yaparım", resultId: "naomi" },
        ],
      },
      {
        id: "q4",
        text: "En büyük zayıflığın nedir?",
        options: [
          { id: "d1", text: "Hırsım ve bağımlılıklarım", resultId: "jordan" },
          { id: "d2", text: "Aşırı sadakatim", resultId: "donnie" },
          { id: "d3", text: "Naif olmam", resultId: "patrick" },
          { id: "d4", text: "Materyalist olmam", resultId: "naomi" },
        ],
      },
      {
        id: "q5",
        text: "Bir partide seni nerede buluruz?",
        options: [
          { id: "e1", text: "Merkezde, herkesin dikkatini çekiyorum", resultId: "jordan" },
          { id: "e2", text: "Çılgınca dans ediyorum", resultId: "donnie" },
          { id: "e3", text: "Köşede, rahatsız görünüyorum", resultId: "patrick" },
          { id: "e4", text: "Şık ve gösterişli bir şekilde", resultId: "naomi" },
        ],
      },
      {
        id: "q6",
        text: "Başarının sırrı nedir?",
        options: [
          { id: "f1", text: "Karizma ve ikna yeteneği", resultId: "jordan" },
          { id: "f2", text: "Sadakat ve takım çalışması", resultId: "donnie" },
          { id: "f3", text: "Dürüstlük ve çalışkanlık", resultId: "patrick" },
          { id: "f4", text: "Görünüş ve çekicilik", resultId: "naomi" },
        ],
      },
      {
        id: "q7",
        text: "Yakalanma riski varsa ne yaparsın?",
        options: [
          { id: "g1", text: "Her şeyi inkâr ederim", resultId: "jordan" },
          { id: "g2", text: "Patronumu korumaya çalışırım", resultId: "donnie" },
          { id: "g3", text: "İşbirliği yaparım", resultId: "patrick" },
          { id: "g4", text: "Kendi çıkarımı düşünürüm", resultId: "naomi" },
        ],
      },
      {
        id: "q8",
        text: "İdeal bir gün nasıl olurdu?",
        options: [
          { id: "h1", text: "Milyon dolar kazanmak ve kutlamak", resultId: "jordan" },
          { id: "h2", text: "Ofiste ekiple eğlenmek", resultId: "donnie" },
          { id: "h3", text: "Dürüst bir iş günü", resultId: "patrick" },
          { id: "h4", text: "Alışveriş ve lüks yaşam", resultId: "naomi" },
        ],
      },
      {
        id: "q9",
        text: "Bağımlılıklar senin için ne ifade eder?",
        options: [
          { id: "i1", text: "Hayatımın bir parçası, kontrol edemem", resultId: "jordan" },
          { id: "i2", text: "Sosyal aktivite", resultId: "donnie" },
          { id: "i3", text: "Uzak dururum", resultId: "patrick" },
          { id: "i4", text: "Lüks yaşamın bir parçası", resultId: "naomi" },
        ],
      },
      {
        id: "q10",
        text: "Her şeyi kaybetsen ne yapardın?",
        options: [
          { id: "j1", text: "Yeniden başlar, geri dönerim", resultId: "jordan" },
          { id: "j2", text: "Arkadaşlarıma güvenirim", resultId: "donnie" },
          { id: "j3", text: "Dürüst bir işe dönerim", resultId: "patrick" },
          { id: "j4", text: "Zengin biriyle evlenirim", resultId: "naomi" },
        ],
      },
    ],
    results: [
      {
        id: "jordan",
        character: "Jordan Belfort",
        description: "Sen karizmatik, hırslı ve bağımlılıklarla boğuşuyorsun! Para ve güç senin her şeyindir. Satış yeteneğin efsanevi ve insanları ikna etmekte ustasın. Ahlaki sınırları zorlarsan da, kendine olan inancın seni ayakta tutuyor. Yükselişin ve düşüşün destansı!",
      },
      {
        id: "donnie",
        character: "Donnie Azoff",
        description: "Sen sadık, komik ve biraz çılgınsın! Jordan'a körü körüne bağlısın ve her zaman yanında. Enerjin yüksek ve partileri seversin. Bazen aşırıya kaçsan da, iyi niyetlisin. Arkadaşlık senin için çok önemli!",
      },
      {
        id: "patrick",
        character: "Patrick Denham",
        description: "Sen dürüst, kararlı ve adaletçisin! FBI ajanı olarak yolsuzlukla savaşıyorsun. Lüks yaşamı reddeder, mütevazi kalırsın. Sabrın ve kararlılığın sonunda galip gelir. İyi adamlardan birisin!",
      },
      {
        id: "naomi",
        character: "Naomi Lapaglia",
        description: "Sen güzel, akıllı ve stratejiksin! Lüks yaşamı seversin ama bağımlılıklara tahammülün yok. Güçlü birisin ve ne istediğini biliyorsun. Jordan'la ilişkin karmaşık ama sonunda kendi yolunu çiziyorsun.",
      },
    ],
  },
  {
    id: "suits",
    title: "Suits'ten Hangi Karaktersin?",
    description: "Hukuk dünyasının hangi yıldızısın?",
    icon: "Scale",
    emoji: "💼",
    questions: [
      {
        id: "q1",
        text: "Bir davayı nasıl kazanırsın?",
        options: [
          { id: "a1", text: "Zeka ve hafızamla", resultId: "mike" },
          { id: "a2", text: "Agresif taktikler ve güç", resultId: "harvey" },
          { id: "a3", text: "Araştırma ve detaylı çalışma", resultId: "rachel" },
          { id: "a4", text: "Duygusal zeka ve empati", resultId: "donna" },
        ],
      },
      {
        id: "q2",
        text: "En önemli değerin nedir?",
        options: [
          { id: "b1", text: "Dürüstlük ve vicdan", resultId: "mike" },
          { id: "b2", text: "Sadakat ve kazanmak", resultId: "harvey" },
          { id: "b3", text: "Çalışkanlık ve başarı", resultId: "rachel" },
          { id: "b4", text: "İlişkiler ve destek", resultId: "donna" },
        ],
      },
      {
        id: "q3",
        text: "Bir sırrı saklamak zorunda kalsan ne yaparsın?",
        options: [
          { id: "c1", text: "Vicdanım rahatsız olur ama saklarım", resultId: "mike" },
          { id: "c2", text: "Gerekirse ebediyen saklarım", resultId: "harvey" },
          { id: "c3", text: "Doğruyu söylemeyi tercih ederim", resultId: "rachel" },
          { id: "c4", text: "Duruma göre karar veririm", resultId: "donna" },
        ],
      },
      {
        id: "q4",
        text: "Ofiste hangi rolü üstlenirsin?",
        options: [
          { id: "d1", text: "Genç ve yetenekli ortak", resultId: "mike" },
          { id: "d2", text: "En iyi kapanış avukatı", resultId: "harvey" },
          { id: "d3", text: "Paralegal ama hırslı", resultId: "rachel" },
          { id: "d4", text: "Her şeyi bilen asistan", resultId: "donna" },
        ],
      },
      {
        id: "q5",
        text: "En büyük korkun nedir?",
        options: [
          { id: "e1", text: "Yalanımın ortaya çıkması", resultId: "mike" },
          { id: "e2", text: "Zayıf görünmek", resultId: "harvey" },
          { id: "e3", text: "Başarısız olmak", resultId: "rachel" },
          { id: "e4", text: "Önemsiz hissetmek", resultId: "donna" },
        ],
      },
      {
        id: "q6",
        text: "Bir müvekkil seni hayal kırıklığına uğratsa ne yaparsın?",
        options: [
          { id: "f1", text: "Empati kurar, yine de yardım ederim", resultId: "mike" },
          { id: "f2", text: "Onu terk eder, kendi yoluma devam ederim", resultId: "harvey" },
          { id: "f3", text: "Profesyonel kalır, işimi yaparım", resultId: "rachel" },
          { id: "f4", text: "Durumu çözmeye çalışırım", resultId: "donna" },
        ],
      },
      {
        id: "q7",
        text: "Harvey Specter hakkında ne düşünürsün?",
        options: [
          { id: "g1", text: "Mentor ve arkadaşım", resultId: "mike" },
          { id: "g2", text: "Kendim", resultId: "harvey" },
          { id: "g3", text: "İlham verici ama zorlayıcı", resultId: "rachel" },
          { id: "g4", text: "En iyi arkadaşım", resultId: "donna" },
        ],
      },
      {
        id: "q8",
        text: "İdeal bir kariyer yolu nasıl olurdu?",
        options: [
          { id: "h1", text: "Ortak olmak ama vicdanımı korumak", resultId: "mike" },
          { id: "h2", text: "En tepede olmak, name partner", resultId: "harvey" },
          { id: "h3", text: "Kendi firmamı kurmak", resultId: "rachel" },
          { id: "h4", text: "COO olmak, gerçek gücü elinde tutmak", resultId: "donna" },
        ],
      },
      {
        id: "q9",
        text: "Aşk ve kariyer arasında seçim yapman gerekse?",
        options: [
          { id: "i1", text: "Kararsız kalırım, ikisini de isterim", resultId: "mike" },
          { id: "i2", text: "Kariyer her zaman önce gelir", resultId: "harvey" },
          { id: "i3", text: "Dengeyi bulmaya çalışırım", resultId: "rachel" },
          { id: "i4", text: "Aşk için risk alırım", resultId: "donna" },
        ],
      },
      {
        id: "q10",
        text: "Pearson Hardman'ı nasıl tanımlarsın?",
        options: [
          { id: "j1", text: "Evim ve ailem", resultId: "mike" },
          { id: "j2", text: "Savaş meydanım", resultId: "harvey" },
          { id: "j3", text: "Kariyer basamağım", resultId: "rachel" },
          { id: "j4", text: "Krallığım", resultId: "donna" },
        ],
      },
    ],
    results: [
      {
        id: "mike",
        character: "Mike Ross",
        description: "Sen dahi, duygusal ve vicdanlısın! Fotografik hafızan sayesinde Harvard mezunu olmadan avukatlık yapıyorsun. Bu sır seni sürekli endişelendiriyor. Harvey'e sadıksın ve müvekkillerine gerçekten yardım etmek istiyorsun. İyi bir kalbin var!",
      },
      {
        id: "harvey",
        character: "Harvey Specter",
        description: "Sen özgüvenli, agresif ve kazanmaya odaklısın! New York'un en iyi kapanış avukatısın ve bunu biliyorsun. Duygusal olmamaya çalışsan da, yakınlarına sadıksın. 'Winners don't make excuses' felsefenle yaşıyorsun.",
      },
      {
        id: "rachel",
        character: "Rachel Zane",
        description: "Sen akıllı, hırslı ve çalışkansın! Paralegal olarak başladın ama avukat olmak istiyorsun. LSAT sınavı seni zorluyor ama pes etmiyorsun. Mike'la olan ilişkin karmaşık. Güçlü bir kadınsın!",
      },
      {
        id: "donna",
        character: "Donna Paulsen",
        description: "Sen zeki, duygusal zekalı ve her şeyi biliyorsun! Harvey'in assistanı olarak firmayı sen yönetiyorsun. İlişkilerde ustasın ve herkesin sırrını biliyorsun. COO olmak senin hakkın. 'Donna knows' her zaman doğrudur!",
      },
    ],
  },
  {
    id: "succession",
    title: "Succession'dan Hangi Karaktersin?",
    description: "Roy ailesinin hangi üyesisin?",
    icon: "Building2",
    emoji: "🏢",
    questions: [
      {
        id: "q1",
        text: "Güç senin için ne ifade eder?",
        options: [
          { id: "a1", text: "Babanın onayı ve mirası", resultId: "kendall" },
          { id: "a2", text: "Özgürlük ve bağımsızlık", resultId: "siobhan" },
          { id: "a3", text: "Eğlence ve lüks", resultId: "roman" },
          { id: "a4", text: "Kontrol ve manipülasyon", resultId: "logan" },
        ],
      },
      {
        id: "q2",
        text: "Bir aile toplantısında nasıl davranırsın?",
        options: [
          { id: "b1", text: "Gergin ve savunmacı", resultId: "kendall" },
          { id: "b2", text: "Stratejik ve hesaplayıcı", resultId: "siobhan" },
          { id: "b3", text: "Şakacı ve alaycı", resultId: "roman" },
          { id: "b4", text: "Dominant ve kontrol edici", resultId: "logan" },
        ],
      },
      {
        id: "q3",
        text: "En büyük zayıflığın nedir?",
        options: [
          { id: "c1", text: "Bağımlılıklarım ve güvensizliğim", resultId: "kendall" },
          { id: "c2", text: "Duygusal mesafem", resultId: "siobhan" },
          { id: "c3", text: "Olgunlaşamama", resultId: "roman" },
          { id: "c4", text: "Yaşlanma ve kontrolü kaybetme", resultId: "logan" },
        ],
      },
      {
        id: "q4",
        text: "Waystar Royco'da hangi pozisyonu isterdin?",
        options: [
          { id: "d1", text: "CEO - Lider ve karar verici", resultId: "kendall" },
          { id: "d2", text: "Politik danışman - Gölgeden yönetici", resultId: "siobhan" },
          { id: "d3", text: "COO - Eğlenceli ama güçlü", resultId: "roman" },
          { id: "d4", text: "Chairman - Mutlak kontrol", resultId: "logan" },
        ],
      },
      {
        id: "q5",
        text: "Bir medya krizi çıksa ne yaparsın?",
        options: [
          { id: "e1", text: "PR ekibiyle çalışır, kontrolü sağlamaya çalışırım", resultId: "kendall" },
          { id: "e2", text: "Politik bağlantılarımı kullanırım", resultId: "siobhan" },
          { id: "e3", text: "Şakaya vurur, ciddiye almam", resultId: "roman" },
          { id: "e4", text: "Acımasızca bastırırım", resultId: "logan" },
        ],
      },
      {
        id: "q6",
        text: "Aşk hayatın nasıl?",
        options: [
          { id: "f1", text: "Karmaşık ve travmatik", resultId: "kendall" },
          { id: "f2", text: "Stratejik ve hesaplayıcı", resultId: "siobhan" },
          { id: "f3", text: "İmkansız ve engellenmiş", resultId: "roman" },
          { id: "f4", text: "Soğuk ve işlevsel", resultId: "logan" },
        ],
      },
      {
        id: "q7",
        text: "Kardeşlerinle ilişkin nasıl?",
        options: [
          { id: "g1", text: "Rekabetçi ama koruyucu", resultId: "kendall" },
          { id: "g2", text: "Manipülatif ama sadık", resultId: "siobhan" },
          { id: "g3", text: "Şakacı ama destekleyici", resultId: "roman" },
          { id: "g4", text: "Onları birbirine karşı kullanırım", resultId: "logan" },
        ],
      },
      {
        id: "q8",
        text: "Bir ihanete nasıl tepki verirsin?",
        options: [
          { id: "h1", text: "Yıkılırım ama intikam alırım", resultId: "kendall" },
          { id: "h2", text: "Stratejik hamlelerle karşılık veririm", resultId: "siobhan" },
          { id: "h3", text: "Espri yapar, içten içe incinirim", resultId: "roman" },
          { id: "h4", text: "Acımasızca cezalandırırım", resultId: "logan" },
        ],
      },
      {
        id: "q9",
        text: "Zenginlik seni nasıl etkiliyor?",
        options: [
          { id: "i1", text: "Hapishanede hissediyorum", resultId: "kendall" },
          { id: "i2", text: "Güç sağlıyor", resultId: "siobhan" },
          { id: "i3", text: "Normal, alışkınım", resultId: "roman" },
          { id: "i4", text: "Kazandığım her şey", resultId: "logan" },
        ],
      },
      {
        id: "q10",
        text: "Nihai hedefin nedir?",
        options: [
          { id: "j1", text: "Babanın onayını kazanmak", resultId: "kendall" },
          { id: "j2", text: "Kendi imparatorluğumu kurmak", resultId: "siobhan" },
          { id: "j3", text: "Özgür ve mutlu olmak", resultId: "roman" },
          { id: "j4", text: "Ölene kadar kontrol etmek", resultId: "logan" },
        ],
      },
    ],
    results: [
      {
        id: "kendall",
        character: "Kendall Roy",
        description: "Sen hırslı, travmalı ve karmaşıksın! CEO olmak en büyük hayalindir ama bağımlılıkların ve güvensizliğin seni engelliyor. Babanla ilişkin toksik. 'Number one boy' olmak istiyorsun ama bir türlü başaramıyorsun. İçindeki çocuk hala babanın sevgisini arıyor.",
      },
      {
        id: "siobhan",
        character: "Siobhan 'Shiv' Roy",
        description: "Sen zeki, manipülatif ve bağımsızsın! Politik danışmanlık yapıyorsun ama aile işine geri çekiliyorsun. Duygusal mesafen güçlü gibi gösteriyor ama aslında onay arıyorsun. Kadın olman seni daha da güçlü yaptı. Tom'la olan ilişkin karmaşık!",
      },
      {
        id: "roman",
        character: "Roman Roy",
        description: "Sen şakacı, sarkastik ve olgunlaşamamış birisin! Aileye en mesafeli görünsen de, aslında en kırılgansın. Geraldine ile olan ilişkin travmatik geçmişini gösteriyor. İş konusunda yeteneklisin ama ciddiye alınmakta zorlanıyorsun. İçindeki çocuk hiç büyümedi!",
      },
      {
        id: "logan",
        character: "Logan Roy",
        description: "Sen güçlü, acımasız ve kontrol manyağısın! Medya imparatorluğunu sıfırdan kurdun ve kimseye güvenmiyorsun. Çocuklarını seviyorsun ama gösteremiyorsun. Onları test etmeyi ve manipüle etmeyi seversin. Güç senin nefes alman. Zayıflığa tahammülün yok!",
      },
    ],
  },
  {
    id: "socialnetwork",
    title: "The Social Network'ten Hangi Karaktersin?",
    description: "Facebook'un hangi kurucususun?",
    icon: "Users",
    emoji: "🌐",
    questions: [
      {
        id: "q1",
        text: "Bir sosyal ağ kurarken en önemli şey nedir?",
        options: [
          { id: "a1", text: "Yenilikçi kod ve algoritma", resultId: "mark" },
          { id: "a2", text: "İş geliştirme ve networking", resultId: "eduardo" },
          { id: "a3", text: "Büyüme ve agresif genişleme", resultId: "sean" },
          { id: "a4", text: "Fikir ve konsept", resultId: "winklevoss" },
        ],
      },
      {
        id: "q2",
        text: "Arkadaşlık senin için ne ifade eder?",
        options: [
          { id: "b1", text: "İkincil, iş daha önemli", resultId: "mark" },
          { id: "b2", text: "Her şey, sadakat çok önemli", resultId: "eduardo" },
          { id: "b3", text: "Stratejik bağlantılar", resultId: "sean" },
          { id: "b4", text: "Güven ve ortaklık", resultId: "winklevoss" },
        ],
      },
      {
        id: "q3",
        text: "Bir fikir çalınsa ne yaparsın?",
        options: [
          { id: "c1", text: "Daha iyisini yapar, geride bırakırım", resultId: "mark" },
          { id: "c2", text: "Arkadaşlarıma sadık kalır, hukuki yollara başvururum", resultId: "eduardo" },
          { id: "c3", text: "Umursamam, büyümeye odaklanırım", resultId: "sean" },
          { id: "c4", text: "Dava açar, haklarımı savunurum", resultId: "winklevoss" },
        ],
      },
      {
        id: "q4",
        text: "Harvard'da nasıl birisin?",
        options: [
          { id: "d1", text: "Sosyal açıdan beceriksiz ama dahi", resultId: "mark" },
          { id: "d2", text: "Popüler ve sosyal", resultId: "eduardo" },
          { id: "d3", text: "Napster kurucu", resultId: "sean" },
          { id: "d4", text: "Kürekçi ve elit kulüp üyesi", resultId: "winklevoss" },
        ],
      },
      {
        id: "q5",
        text: "En büyük motivasyonun nedir?",
        options: [
          { id: "e1", text: "Havalı olmak ve kabul edilmek", resultId: "mark" },
          { id: "e2", text: "Başarı ve arkadaşlarımı mutlu etmek", resultId: "eduardo" },
          { id: "e3", text: "Bir milyar dolar", resultId: "sean" },
          { id: "e4", text: "Adalet ve onur", resultId: "winklevoss" },
        ],
      },
      {
        id: "q6",
        text: "Bir toplantıda nasıl davranırsın?",
        options: [
          { id: "f1", text: "Hoodie giyerim, rahat davranırım", resultId: "mark" },
          { id: "f2", text: "Profesyonel ve hazırlıklı", resultId: "eduardo" },
          { id: "f3", text: "Karizmatik ve vizyoner", resultId: "sean" },
          { id: "f4", text: "Kurallara uyarım, ciddi", resultId: "winklevoss" },
        ],
      },
      {
        id: "q7",
        text: "Hisse diliminde ne yaparsın?",
        options: [
          { id: "g1", text: "Kontrolü elimde tutarım", resultId: "mark" },
          { id: "g2", text: "Adil paylaşırım", resultId: "eduardo" },
          { id: "g3", text: "Maximuma çıkartırım", resultId: "sean" },
          { id: "g4", text: "Hukuksal haklarımı savunurum", resultId: "winklevoss" },
        ],
      },
      {
        id: "q8",
        text: "Erica Albright seni nasıl etkiler?",
        options: [
          { id: "h1", text: "Motivasyonumun kaynağı", resultId: "mark" },
          { id: "h2", text: "Arkadaşımın ex'i, karışmam", resultId: "eduardo" },
          { id: "h3", text: "Umurumda olmaz", resultId: "sean" },
          { id: "h4", text: "Kim o?", resultId: "winklevoss" },
        ],
      },
      {
        id: "q9",
        text: "Bir dava sürecinde nasıl davranırsın?",
        options: [
          { id: "i1", text: "Savunmacı ve garip", resultId: "mark" },
          { id: "i2", text: "İhanete uğramış ve kızgın", resultId: "eduardo" },
          { id: "i3", text: "Dava? Ne davası?", resultId: "sean" },
          { id: "i4", text: "Kararlı ve adalet arayan", resultId: "winklevoss" },
        ],
      },
      {
        id: "q10",
        text: "Facebook'un geleceği nasıl olmalı?",
        options: [
          { id: "j1", text: "Havalı olmalı, reklam olmamalı", resultId: "mark" },
          { id: "j2", text: "Karlı ve sürdürülebilir", resultId: "eduardo" },
          { id: "j3", text: "Bir milyar kullanıcı", resultId: "sean" },
          { id: "j4", text: "Dürüst ve adil bir şirket", resultId: "winklevoss" },
        ],
      },
    ],
    results: [
      {
        id: "mark",
        character: "Mark Zuckerberg",
        description: "Sen dahi, sosyal açıdan beceriksiz ve karmaşıksın! Kodlama yeteneğin olağanüstü ama insan ilişkilerin zayıf. Facebook'u Erica'yı etkilemek için kurdun ama asıl amacın havalı olmak ve kabul edilmekti. Arkadaşlarını ihmal ediyorsun ama başarılısın.",
      },
      {
        id: "eduardo",
        character: "Eduardo Saverin",
        description: "Sen sadık, iş zekası olan ve ihanete uğramış birisin! Mark'ın en iyi arkadaşı ve CFO'suydum ama hisselerini sulandırdılar. Finansal konularda ustasın. Arkadaşlığa değer veriyorsun ama Mark seni kullandı. Florida'da donmuş banka hesabı travması hala seni etkiliyor!",
      },
      {
        id: "sean",
        character: "Sean Parker",
        description: "Sen karizmatik, vizyoner ve risk alanısın! Napster'ı kurdun ve rock star gibi yaşıyorsun. Mark'ı etkileyip Eduardo'yu uzaklaştırdın. 'A million dollars isn't cool, you know what's cool? A billion dollars' senin mantran. Partileri ve büyümeyi seversin!",
      },
      {
        id: "winklevoss",
        character: "Winklevoss Twins",
        description: "Sen atletik, elit ve adalet arayan birisin! Harvard Connection fikrini Mark'tan aldığını düşünüyorsun. Kürekçisin ve olimpiyatlara gidiyorsun. Dürüstlük ve onur senin için önemli. Mark'ı dava ettin ama asla tam tatmin olmadın.",
      },
    ],
  },
  {
    id: "madmen",
    title: "Mad Men'den Hangi Karaktersin?",
    description: "1960'ların reklam dünyasının hangi yıldızısın?",
    icon: "Cigarette",
    emoji: "🥃",
    questions: [
      {
        id: "q1",
        text: "Bir reklam kampanyası yaratırken en önemli şey nedir?",
        options: [
          { id: "a1", text: "Duygusal bağlantı ve nostalji", resultId: "don" },
          { id: "a2", text: "Yaratıcılık ve inovasyon", resultId: "peggy" },
          { id: "a3", text: "Para ve başarı", resultId: "roger" },
          { id: "a4", text: "Sanat ve estetik", resultId: "joan" },
        ],
      },
      {
        id: "q2",
        text: "Ofiste alkol içmeye nasıl bakarsın?",
        options: [
          { id: "b1", text: "Gün boyu viski normaldir", resultId: "don" },
          { id: "b2", text: "Profesyonel olmayı tercih ederim", resultId: "peggy" },
          { id: "b3", text: "Üç martini lunch esastır", resultId: "roger" },
          { id: "b4", text: "Sosyal içerim ama kontrollü", resultId: "joan" },
        ],
      },
      {
        id: "q3",
        text: "Kadınların iş dünyasındaki yeri ne olmalı?",
        options: [
          { id: "c1", text: "Geleneksel rolleri desteklerim", resultId: "don" },
          { id: "c2", text: "Eşit haklar ve fırsatlar", resultId: "peggy" },
          { id: "c3", text: "Umurumda değil", resultId: "roger" },
          { id: "c4", text: "Güçlerini kullanarak yükselmeliler", resultId: "joan" },
        ],
      },
      {
        id: "q4",
        text: "En büyük sırrın nedir?",
        options: [
          { id: "d1", text: "Kimliğim sahte", resultId: "don" },
          { id: "d2", text: "Hamileliğim", resultId: "peggy" },
          { id: "d3", text: "Affairlerim", resultId: "roger" },
          { id: "d4", text: "Mutsuz evliliğim", resultId: "joan" },
        ],
      },
      {
        id: "q5",
        text: "Aşk hayatın nasıl?",
        options: [
          { id: "e1", text: "Karmaşık ve kaçınılmaz", resultId: "don" },
          { id: "e2", text: "İş odaklı, aşk ikinci planda", resultId: "peggy" },
          { id: "e3", text: "Çok sayıda affair", resultId: "roger" },
          { id: "e4", text: "Stratejik ve hesaplayıcı", resultId: "joan" },
        ],
      },
      {
        id: "q6",
        text: "Hangi kelime seni tanımlar?",
        options: [
          { id: "f1", text: "Gizemli", resultId: "don" },
          { id: "f2", text: "Hırslı", resultId: "peggy" },
          { id: "f3", text: "Eğlenceli", resultId: "roger" },
          { id: "f4", text: "Güçlü", resultId: "joan" },
        ],
      },
      {
        id: "q7",
        text: "Geçmişin seni nasıl etkiliyor?",
        options: [
          { id: "g1", text: "Kaçmaya çalışıyorum ama takip ediyor", resultId: "don" },
          { id: "g2", text: "Mütevazı geçmişim beni güçlendirdi", resultId: "peggy" },
          { id: "g3", text: "Zengin bir ailede büyüdüm", resultId: "roger" },
          { id: "g4", text: "Sekretaryken öğrendiklerimi kullanıyorum", resultId: "joan" },
        ],
      },
      {
        id: "q8",
        text: "Bir müşteri toplantısında nasıl davranırsın?",
        options: [
          { id: "h1", text: "Karizmatik ve ikna edici", resultId: "don" },
          { id: "h2", text: "Hazırlıklı ve profesyonel", resultId: "peggy" },
          { id: "h3", text: "Mizahi ve rahat", resultId: "roger" },
          { id: "h4", text: "Zarif ama otoriter", resultId: "joan" },
        ],
      },
      {
        id: "q9",
        text: "Madison Avenue seni nasıl tanımlıyor?",
        options: [
          { id: "i1", text: "En iyi yaratıcı direktör", resultId: "don" },
          { id: "i2", text: "Yükselen yıldız", resultId: "peggy" },
          { id: "i3", text: "Sterling Cooper'ın yüzü", resultId: "roger" },
          { id: "i4", text: "Ofis yöneticisi ama asıl güç", resultId: "joan" },
        ],
      },
      {
        id: "q10",
        text: "1960'ların sonu için vizyonun nedir?",
        options: [
          { id: "j1", text: "Her şey değişiyor, uyum sağlamalıyım", resultId: "don" },
          { id: "j2", text: "Kadınlar için yeni fırsatlar", resultId: "peggy" },
          { id: "j3", text: "Eski günler daha iyiydi", resultId: "roger" },
          { id: "j4", text: "Kendi ajansımı kuracağım", resultId: "joan" },
        ],
      },
    ],
    results: [
      {
        id: "don",
        character: "Don Draper",
        description: "Sen karizmatik, gizemli ve karmaşıksın! Gerçek kimliğini saklıyorsun ve Dick Whitman olarak doğdun. Reklam dehası olsan da, kişisel hayatın kaotik. Kadınlardan, alkole, sigaraya kaçıyorsun. Nostalji ve duygusal bağlantı senin silahın. 'It's called a carousel' pitch'in efsanevi!",
      },
      {
        id: "peggy",
        character: "Peggy Olson",
        description: "Sen kararlı, yaratıcı ve feminist öncüsüsün! Sekreter olarak başladın ama copywriter oldun. 1960'larda bir kadın olarak yükselmen inanılmaz. Bebeğini evlatlık verdin ve kariyerine odaklandın. Don'ın mentorluğu seni şekillendirdi. 'Basket of kisses' gibi harika fikirler üretiyorsun!",
      },
      {
        id: "roger",
        character: "Roger Sterling",
        description: "Sen eğlenceli, zengin ve çapkınsın! Şirket senin aile mirasın. Her şeyi eğlenceye çevirirsin ve üç martini lunch'ın kralısın. Affairler ve evlilikler senin hayatın. LSD deneyimin seni değiştirdi. 'I have an announcement to make: It's going to be a beautiful day!' senin tarzın!",
      },
      {
        id: "joan",
        character: "Joan Holloway",
        description: "Sen güçlü, seksi ve zekisin! Ofis yöneticisi olarak gerçek gücü sen elinde tutuyorsun. Görünüşünü silah olarak kullanıyorsun ama aslında iş zekası çok yüksek. Partner olmak için büyük fedakarlıklar yaptın. Kırmızı elbisen ve otoriten duruşun seni efsane yapıyor!",
      },
    ],
  },
  {
    id: "thebear",
    title: "The Bear'dan Hangi Karaktersin?",
    description: "Mutfağın hangi şefisin?",
    icon: "ChefHat",
    emoji: "🍽️",
    questions: [
      {
        id: "q1",
        text: "Mutfakta en önemli şey nedir?",
        options: [
          { id: "a1", text: "Mükemmellik ve Michelin yıldızları", resultId: "carmy" },
          { id: "a2", text: "Aile ve gelenek", resultId: "richie" },
          { id: "a3", text: "Yaratıcılık ve tutku", resultId: "sydney" },
          { id: "a4", text: "Hızlı servis ve verimlilik", resultId: "marcus" },
        ],
      },
      {
        id: "q2",
        text: "Stresli bir servis sırasında nasıl davranırsın?",
        options: [
          { id: "b1", text: "Kontrolcü ve bağırarak", resultId: "carmy" },
          { id: "b2", text: "Kaotik ama savunmacı", resultId: "richie" },
          { id: "b3", text: "Sakin ve organize", resultId: "sydney" },
          { id: "b4", text: "Odaklanır, işime bakarım", resultId: "marcus" },
        ],
      },
      {
        id: "q3",
        text: "Ağabeyin Mikey'i nasıl hatırlıyorsun?",
        options: [
          { id: "c1", text: "Karmaşık duygularla, onun mirası seni eziyor", resultId: "carmy" },
          { id: "c2", text: "En iyi arkadaşım ve kahramanım", resultId: "richie" },
          { id: "c3", text: "Tanımadım ama etkisini hissediyorum", resultId: "sydney" },
          { id: "c4", text: "Saygı duyuyorum ama uzaktayım", resultId: "marcus" },
        ],
      },
      {
        id: "q4",
        text: "The Bear'ı nasıl değiştirmek istersin?",
        options: [
          { id: "d1", text: "Fine dining'e çevirmek", resultId: "carmy" },
          { id: "d2", text: "Eski haline geri döndürmek", resultId: "richie" },
          { id: "d3", text: "Yaratıcı menü ve yenilik", resultId: "sydney" },
          { id: "d4", text: "Pastry bölümünü güçlendirmek", resultId: "marcus" },
        ],
      },
      {
        id: "q5",
        text: "En büyük korkun nedir?",
        options: [
          { id: "e1", text: "Başarısız olmak ve ağabeyim gibi olmak", resultId: "carmy" },
          { id: "e2", text: "Değişim ve alakasız kalmak", resultId: "richie" },
          { id: "e3", text: "Potansiyelimi gerçekleştirememek", resultId: "sydney" },
          { id: "e4", text: "Yeterince iyi olmamak", resultId: "marcus" },
        ],
      },
      {
        id: "q6",
        text: "Bir müşteri şikayet ederse ne yaparsın?",
        options: [
          { id: "f1", text: "Kişisel alır, mükemmeli ararım", resultId: "carmy" },
          { id: "f2", text: "Savunmaya geçer, tartışırım", resultId: "richie" },
          { id: "f3", text: "Profesyonel çözüm bulurum", resultId: "sydney" },
          { id: "f4", text: "Yeni bir tatlı yapar, telafi ederim", resultId: "marcus" },
        ],
      },
      {
        id: "q7",
        text: "Hangi şef seni etkiliyor?",
        options: [
          { id: "g1", text: "Michelin yıldızlı şefler", resultId: "carmy" },
          { id: "g2", text: "Mikey, ağabeyim", resultId: "richie" },
          { id: "g3", text: "Yenilikçi ve yaratıcı şefler", resultId: "sydney" },
          { id: "g4", text: "Pastry ustalar", resultId: "marcus" },
        ],
      },
      {
        id: "q8",
        text: "Mutfak hiyerarşisinde neredesin?",
        options: [
          { id: "h1", text: "Head Chef - Her şeyden sorumluyum", resultId: "carmy" },
          { id: "h2", text: "Dışarısı adamı ama ailenin parçası", resultId: "richie" },
          { id: "h3", text: "Sous Chef - İkinci komutan", resultId: "sydney" },
          { id: "h4", text: "Pastry Chef - Uzmanlık alanım var", resultId: "marcus" },
        ],
      },
      {
        id: "q9",
        text: "Ekip toplantısında nasıl davranırsın?",
        options: [
          { id: "i1", text: "Gergin, detaycı ve eleştirel", resultId: "carmy" },
          { id: "i2", text: "Savunmacı ve gelenekçi", resultId: "richie" },
          { id: "i3", text: "Yapıcı ve ileriye dönük", resultId: "sydney" },
          { id: "i4", text: "Sessiz ama not alırım", resultId: "marcus" },
        ],
      },
      {
        id: "q10",
        text: "Başarı senin için ne ifade eder?",
        options: [
          { id: "j1", text: "Michelin yıldızı ve saygınlık", resultId: "carmy" },
          { id: "j2", text: "Aile işini ayakta tutmak", resultId: "richie" },
          { id: "j3", text: "Kendi restoranım", resultId: "sydney" },
          { id: "j4", text: "Mükemmel bir tatlı yaratmak", resultId: "marcus" },
        ],
      },
    ],
    results: [
      {
        id: "carmy",
        character: "Carmen 'Carmy' Berzatto",
        description: "Sen yetenekli, travmalı ve mükemmeliyetçisin! Michelin yıldızlı restoranlardan geldin ama ağabeyin Mikey'in ölümü seni Chicago'ya geri getirdi. The Original Beef of Chicagoland'ı devralıp The Bear'a dönüştürdün. Panik atakların var ve kendini affetmekte zorlanıyorsun. 'Yes, Chef!' senin mantra'n!",
      },
      {
        id: "richie",
        character: "Richie Jerimovich",
        description: "Sen sadık, dirençli ama değişime kapalısın! Mikey'in en yakın arkadaşısın ve The Beef senin evindir. Carmen'ın değişikliklerine direniyor ama yavaş yavaş gelişiyorsun. Stagej deneyimin seni dönüştürdü. Ailen dağıldı ama kızın Evie her şeyindir. 'Cousin!' diye bağırmak senin tarzın!",
      },
      {
        id: "sydney",
        character: "Sydney Adamu",
        description: "Sen hırslı, yaratıcı ve tutkulusun! Kendi restoranın başarısız oldu ama pes etmedin. Carmy'nin vizyonuna inandın ve Sous Chef oldun. Catering firmasında çalışıyordun ama fine dining hayalin var. Organizasyon ve yaratıcılık senin güçlerin. 'I got it, Chef!' diyerek işini mükemmel yapıyorsun!",
      },
      {
        id: "marcus",
        character: "Marcus Brooks",
        description: "Sen yetenekli, alçakgönüllü ve öğrenmeye açıksın! Pastry konusunda tutkulusun ve Kopenhag'da stage yaptın. Annen hastaydı ama yine de rüyalarını takip ettin. Donut recipe'lerini geliştiriyorsun. Sessiz ama kararlısın. Takımın en olgun ve istikrarlı üyesisin!",
      },
    ],
  },
  {
    id: "bettercallsaul",
    title: "Better Call Saul'dan Hangi Karaktersin?",
    description: "Albuquerque'nin hangi avukatısın?",
    icon: "Scale",
    emoji: "⚖️",
    questions: [
      {
        id: "q1",
        text: "Hukuk pratiğinde en önemli şey nedir?",
        options: [
          { id: "a1", text: "Yaratıcılık ve ikna", resultId: "jimmy" },
          { id: "a2", text: "Ahlak ve integritet", resultId: "chuck" },
          { id: "a3", text: "Strateji ve kazanmak", resultId: "howard" },
          { id: "a4", text: "Adalet ve doğruluk", resultId: "kim" },
        ],
      },
      {
        id: "q2",
        text: "Kardeşinle ilişkin nasıl?",
        options: [
          { id: "b1", text: "Karmaşık, onayını arıyorum", resultId: "jimmy" },
          { id: "b2", text: "Hayal kırıklığı, onu engelliyorum", resultId: "chuck" },
          { id: "b3", text: "Mesafeli ve profesyonel", resultId: "howard" },
          { id: "b4", text: "Destekleyici ve koruyucu", resultId: "kim" },
        ],
      },
      {
        id: "q3",
        text: "Bir müvekkili nasıl savunursun?",
        options: [
          { id: "c1", text: "Yaratıcı dolandırıcılıklar ve showmanship", resultId: "jimmy" },
          { id: "c2", text: "Kusursuz hukuki argümanlar", resultId: "chuck" },
          { id: "c3", text: "Profesyonel ve stratejik", resultId: "howard" },
          { id: "c4", text: "Detaylı araştırma ve hazırlık", resultId: "kim" },
        ],
      },
      {
        id: "q4",
        text: "Slippin' Jimmy kimdir?",
        options: [
          { id: "d1", text: "Benim, geçmişim beni takip ediyor", resultId: "jimmy" },
          { id: "d2", text: "Kardeşimin asıl yüzü, değişmez", resultId: "chuck" },
          { id: "d3", text: "HHM'in imajına zarar veren biri", resultId: "howard" },
          { id: "d4", text: "Geçmişi, ama değişebilir", resultId: "kim" },
        ],
      },
      {
        id: "q5",
        text: "En büyük korkun nedir?",
        options: [
          { id: "e1", text: "Ciddiye alınmamak", resultId: "jimmy" },
          { id: "e2", text: "Elektromanyetik hassasiyet", resultId: "chuck" },
          { id: "e3", text: "İtibarımı kaybetmek", resultId: "howard" },
          { id: "e4", text: "Yanlış seçimler yapmak", resultId: "kim" },
        ],
      },
      {
        id: "q6",
        text: "Hamlin, Hamlin & McGill'de çalışıyor musun?",
        options: [
          { id: "f1", text: "Posta odasında başladım, ortak olamadım", resultId: "jimmy" },
          { id: "f2", text: "Kurucu ortağım", resultId: "chuck" },
          { id: "f3", text: "Name partner'ım", resultId: "howard" },
          { id: "f4", text: "Genç ama yetenekli bir ortağım", resultId: "kim" },
        ],
      },
      {
        id: "q7",
        text: "Bir hukuki ve ahlaki ikilemle karşılaşsan ne yaparsın?",
        options: [
          { id: "g1", text: "Yaratıcı çözümler bulurum, gri bölgede işlem yaparım", resultId: "jimmy" },
          { id: "g2", text: "Hukuku harfiyen uygularım", resultId: "chuck" },
          { id: "g3", text: "Firma çıkarlarını düşünürüm", resultId: "howard" },
          { id: "g4", text: "Vicdanımı dinlerim", resultId: "kim" },
        ],
      },
      {
        id: "q8",
        text: "Renkli takım elbiselere nasıl bakarsın?",
        options: [
          { id: "h1", text: "Saul Goodman'ın markası!", resultId: "jimmy" },
          { id: "h2", text: "İğrenç ve profesyonel değil", resultId: "chuck" },
          { id: "h3", text: "Tutucu giyinirim", resultId: "howard" },
          { id: "h4", text: "Basit ve şık", resultId: "kim" },
        ],
      },
      {
        id: "q9",
        text: "Mike Ehrmantraut hakkında ne düşünürsün?",
        options: [
          { id: "i1", text: "İş ortağım ve arkadaşım", resultId: "jimmy" },
          { id: "i2", text: "Tanımam", resultId: "chuck" },
          { id: "i3", text: "Park görevlisi", resultId: "howard" },
          { id: "i4", text: "Karmaşık ama güvenilir", resultId: "kim" },
        ],
      },
      {
        id: "q10",
        text: "Saul Goodman'a nasıl dönüşürsün?",
        options: [
          { id: "j1", text: "Yavaş yavaş, seçimlerle", resultId: "jimmy" },
          { id: "j2", text: "O zaten hep öyleydi", resultId: "chuck" },
          { id: "j3", text: "Trajediler sonucunda", resultId: "howard" },
          { id: "j4", text: "Benim etkimle gecikti", resultId: "kim" },
        ],
      },
    ],
    results: [
      {
        id: "jimmy",
        character: "Jimmy McGill / Saul Goodman",
        description: "Sen karizmatik, yaratıcı ama kusurlusun! Slippin' Jimmy olarak başladın, avukat olmaya çalıştın ama ağabeyin Chuck seni engelledi. HHM'de ortak olamayınca kendi yolunu çizdin. Yavaş yavaş Saul Goodman'a dönüşüyorsun. Rengarenk takım elbiselerin, 'Better Call Saul!' reklamların ve yaratıcı dolandırıcılıkların senin tarzın!",
      },
      {
        id: "chuck",
        character: "Chuck McGill",
        description: "Sen parlak, mükemmeliyetçi ama hastalıklısın! HHM'in kurucu ortağısın ve hukukun harfi senin için kutsal. Elektromanyetik hassasiyet hastalığın gerçek mi yoksa psikolojik mi tartışmalı. Jimmy'ye olan kıskançlığın ve onu engellemen trajik sonuçlara yol açtı. 'The law is sacred!' senin inancın.",
      },
      {
        id: "howard",
        character: "Howard Hamlin",
        description: "Sen profesyonel, yakışıklı ama mutsuz birisin! Name partner olarak HHM'i yönetiyorsun. Jimmy Chuck yüzünden seni suçluyor ama aslında sen iyi birisin. Evliliğin sorunlu ve terapiye gidiyorsun. Lalo Salamanca tarafından öldürülmen trajik ve haksız!",
      },
      {
        id: "kim",
        character: "Kim Wexler",
        description: "Sen yetenekli, kararlı ve karmaşıksın! Posta odasından avukat oldun. Jimmy'ye aşık oldun ve onun dünyasına çekildin. Ahlaki sınırları zorladın ve Howard'ın ölümünde rolün vardı. Sonunda Jimmy'yi terk edip Nebraska'ya giderek sıradan bir hayat yaşamaya başladın. İçindeki suçluluk seni yok etti.",
      },
    ],
  },
  {
    id: "billions",
    title: "Billions'tan Hangi Karaktersin?",
    description: "Wall Street'in hangi savaşçısısın?",
    icon: "DollarSign",
    emoji: "🤑",
    questions: [
      {
        id: "q1",
        text: "Güç mü para mı?",
        options: [
          { id: "a1", text: "İkisi de, ama önce para", resultId: "bobby" },
          { id: "a2", text: "Güç, para gelir", resultId: "chuck" },
          { id: "a3", text: "Para, bağımsızlık sağlar", resultId: "wendy" },
          { id: "a4", text: "Güç, etki bırakır", resultId: "taylor" },
        ],
      },
      {
        id: "q2",
        text: "Bir rakibe nasıl saldırırsın?",
        options: [
          { id: "b1", text: "Acımasızca ve stratejik", resultId: "bobby" },
          { id: "b2", text: "Yasal yollarla ve mükemmel", resultId: "chuck" },
          { id: "b3", text: "Psikolojik manipülasyon", resultId: "wendy" },
          { id: "b4", text: "Algoritma ve mantık", resultId: "taylor" },
        ],
      },
      {
        id: "q3",
        text: "En önemli değerin nedir?",
        options: [
          { id: "c1", text: "Sadakat (bana)", resultId: "bobby" },
          { id: "c2", text: "Adalet ve hukuk", resultId: "chuck" },
          { id: "c3", text: "Profesyonellik", resultId: "wendy" },
          { id: "c4", text: "Performans ve sonuç", resultId: "taylor" },
        ],
      },
      {
        id: "q4",
        text: "Evliliğin nasıl?",
        options: [
          { id: "d1", text: "Karmaşık, açık ilişki", resultId: "bobby" },
          { id: "d2", text: "Karmaşık, BDSM ilişkisi", resultId: "chuck" },
          { id: "d3", text: "Kariyer odaklı, gergin", resultId: "wendy" },
          { id: "d4", text: "İlişkilerden kaçınırım", resultId: "taylor" },
        ],
      },
      {
        id: "q5",
        text: "Bir insider trading fırsatı olsa ne yaparsın?",
        options: [
          { id: "e1", text: "Yasal boşlukları kullanırım", resultId: "bobby" },
          { id: "e2", text: "Kovuşturma başlatırım", resultId: "chuck" },
          { id: "e3", text: "Danışmanlık veririm, karar onların", resultId: "wendy" },
          { id: "e4", text: "Risk-fayda analizi yapar, karar veririm", resultId: "taylor" },
        ],
      },
      {
        id: "q6",
        text: "Hangi kelime seni tanımlar?",
        options: [
          { id: "f1", text: "Acımasız", resultId: "bobby" },
          { id: "f2", text: "İdealist", resultId: "chuck" },
          { id: "f3", text: "Manipülatif", resultId: "wendy" },
          { id: "f4", text: "Analitik", resultId: "taylor" },
        ],
      },
      {
        id: "q7",
        text: "Bir milyar dolar nasıl harcanır?",
        options: [
          { id: "g1", text: "Güç, etki ve lüks", resultId: "bobby" },
          { id: "g2", text: "Hayır işleri ve kamusal fayda", resultId: "chuck" },
          { id: "g3", text: "Yatırım ve güvenlik", resultId: "wendy" },
          { id: "g4", text: "Portföy çeşitlendirme", resultId: "taylor" },
        ],
      },
      {
        id: "q8",
        text: "Axe Capital'de hangi rolü üstlenirsin?",
        options: [
          { id: "h1", text: "Kurucu ve CEO", resultId: "bobby" },
          { id: "h2", text: "Rakip ve kovuşturucu", resultId: "chuck" },
          { id: "h3", text: "Performance coach", resultId: "wendy" },
          { id: "h4", text: "CIO ve partner", resultId: "taylor" },
        ],
      },
      {
        id: "q9",
        text: "Bir SEC soruşturması başlasa ne yaparsın?",
        options: [
          { id: "i1", text: "En iyi avukatları tutar, savaşırım", resultId: "bobby" },
          { id: "i2", text: "Adaleti sağlarım", resultId: "chuck" },
          { id: "i3", text: "Strateji geliştiririm", resultId: "wendy" },
          { id: "i4", text: "Belgeleri analiz eder, savunma yaparım", resultId: "taylor" },
        ],
      },
      {
        id: "q10",
        text: "Nihai hedefin nedir?",
        options: [
          { id: "j1", text: "Kazanmak ve rakiplerimizi ezmek", resultId: "bobby" },
          { id: "j2", text: "Vali olmak ve adaleti sağlamak", resultId: "chuck" },
          { id: "j3", text: "Bağımsız ve güçlü olmak", resultId: "wendy" },
          { id: "j4", text: "Kendi fonumu kurmak", resultId: "taylor" },
        ],
      },
    ],
    results: [
      {
        id: "bobby",
        character: "Bobby Axelrod",
        description: "Sen agresif, stratejik ve acımasızsın! Axe Capital'i sıfırdan kurdun ve milyarder oldun. Chuck Rhoades ile savaşın efsanevi. İçten gelen bir çocuksun ve kimseye güvenmezsin. Lara ile evliliğin açık ilişkiye dönüştü. 'What's the point of having fuck you money if you never say fuck you?' senin felsefendir!",
      },
      {
        id: "chuck",
        character: "Chuck Rhoades",
        description: "Sen idealist, hırslı ve karmaşıksın! ABD Savcısısın ve adaleti sağlamaya çalışıyorsun. Bobby Axelrod'u yakalamanın peşindesin. Wendy ile evlilik BDSM ilişkisi ilginç. Baban Charles Rhoades Sr. seni manipüle ediyor. Vali olmak istiyorsun. 'This is not a crime. This is a pardon.' gibi manipülasyonlar yapıyorsun!",
      },
      {
        id: "wendy",
        character: "Wendy Rhoades",
        description: "Sen zeki, manipülatif ve güçlüsün! Psikiyatr ve performance coach olarak Axe Capital'de çalışıyorsun. Chuck ile evlisin ama Bobby'ye sadıksın. İki adam arasında kalmak seni yıpratıyor. Sonunda kendi yolunu çiziyorsun. 'I'm a psychiatric dominatrix' senin özgüvenini gösteriyor!",
      },
      {
        id: "taylor",
        character: "Taylor Mason",
        description: "Sen analitik, non-binary ve deha birisin! Axe Capital'de stajyer olarak başladın, CIO oldun. Kendi fonunu Mason Capital'i kurdun. Duygulardan ziyade algoritma ve mantıkla hareket ediyorsun. Bobby ile ilişkin mentor-öğrenci'den rakipliğe döndü. Quant trading'in kralsın!",
      },
    ],
  },
  {
    id: "thefounder",
    title: "The Founder'dan Hangi Karaktersin?",
    description: "McDonald's imparatorluğunun hangi kahramanısın?",
    icon: "Store",
    emoji: "🍔",
    questions: [
      {
        id: "q1",
        text: "Başarı için en önemli şey nedir?",
        options: [
          { id: "a1", text: "Sebat ve asla pes etmemek", resultId: "ray" },
          { id: "a2", text: "Kalite ve inovasyon", resultId: "dick" },
          { id: "a3", text: "Verimlilik ve sistem", resultId: "mac" },
          { id: "a4", text: "Destek ve sadakat", resultId: "ethel" },
        ],
      },
      {
        id: "q2",
        text: "Bir iş ortaklığında en önemli şey nedir?",
        options: [
          { id: "b1", text: "Büyüme ve genişleme", resultId: "ray" },
          { id: "b2", text: "Kalite kontrolü", resultId: "dick" },
          { id: "b3", text: "Ortak vizyon", resultId: "mac" },
          { id: "b4", text: "Güven ve dürüstlük", resultId: "ethel" },
        ],
      },
      {
        id: "q3",
        text: "McDonald's ismi kime ait olmalı?",
        options: [
          { id: "c1", text: "Bana, ben büyüttüm", resultId: "ray" },
          { id: "c2", text: "McDonald kardeşlere, onlar kurdular", resultId: "dick" },
          { id: "c3", text: "Herkese eşit", resultId: "mac" },
          { id: "c4", text: "Kurucularına saygı gösterilmeli", resultId: "ethel" },
        ],
      },
      {
        id: "q4",
        text: "Bir sözleşme adaletsiz gözükse ne yaparsın?",
        options: [
          { id: "d1", text: "Yasal boşlukları kullanır, kurtulur", resultId: "ray" },
          { id: "d2", text: "Yeniden müzakere ederim", resultId: "dick" },
          { id: "d3", text: "Sözümde dururum", resultId: "mac" },
          { id: "d4", text: "Ahlaki olanı yaparım", resultId: "ethel" },
        ],
      },
      {
        id: "q5",
        text: "Franchise sistemi nasıl olmalı?",
        options: [
          { id: "e1", text: "Agresif genişleme ve emlak", resultId: "ray" },
          { id: "e2", text: "Kalite kontrolü ve sınırlı", resultId: "dick" },
          { id: "e3", text: "Sistemli ve standardize", resultId: "mac" },
          { id: "e4", text: "Adil ve destekleyici", resultId: "ethel" },
        ],
      },
      {
        id: "q6",
        text: "Milkshake formülü tartışması çıksa ne yaparsın?",
        options: [
          { id: "f1", text: "Maliyeti düşürür, karlılığı artırırım", resultId: "ray" },
          { id: "f2", text: "Kaliteyi korumak için direnirim", resultId: "dick" },
          { id: "f3", text: "Orta yolu bulurum", resultId: "mac" },
          { id: "f4", text: "Orijinal fikre saygı gösteririm", resultId: "ethel" },
        ],
      },
      {
        id: "q7",
        text: "Evliliğin kariyerini engelliyor mu?",
        options: [
          { id: "g1", text: "Evet, boşanıp yeni bir başlangıç yaparım", resultId: "ray" },
          { id: "g2", text: "Hayır, aile önemli", resultId: "dick" },
          { id: "g3", text: "Denge kurmaya çalışırım", resultId: "mac" },
          { id: "g4", text: "Sadakat her şeyden önemli", resultId: "ethel" },
        ],
      },
      {
        id: "q8",
        text: "Bir motivasyon konuşmasında ne dersin?",
        options: [
          { id: "h1", text: "Asla pes etmeyin, sebat edin!", resultId: "ray" },
          { id: "h2", text: "Kalite her zaman kazanır", resultId: "dick" },
          { id: "h3", text: "Sistem ve verimlilik anahtardır", resultId: "mac" },
          { id: "h4", text: "Dürüstlük uzun vadede galip gelir", resultId: "ethel" },
        ],
      },
      {
        id: "q9",
        text: "San Bernardino'daki ilk McDonald's hakkında ne düşünürsün?",
        options: [
          { id: "i1", text: "Bir başlangıç noktası, ben büyüttüm", resultId: "ray" },
          { id: "i2", text: "Bizim bebeğimiz, gurur duyuyoruz", resultId: "dick" },
          { id: "i3", text: "İnovatif bir konsept", resultId: "mac" },
          { id: "i4", text: "Bir rüyanın gerçekleşmesi", resultId: "ethel" },
        ],
      },
      {
        id: "q10",
        text: "McDonald's'ın mirası ne olmalı?",
        options: [
          { id: "j1", text: "Benim başarı hikayem", resultId: "ray" },
          { id: "j2", text: "McDonald kardeşlerin inovasyonu", resultId: "dick" },
          { id: "j3", text: "Speedee Service System'in zaferi", resultId: "mac" },
          { id: "j4", text: "Bir ailenin çabası", resultId: "ethel" },
        ],
      },
    ],
    results: [
      {
        id: "ray",
        character: "Ray Kroc",
        description: "Sen kararlı, hırslı ve tartışmalısın! 52 yaşında milkshake makinesi satıcısıyken McDonald kardeşleri keşfettin. Franchise haklarını aldın ve küresel bir imparatorluk kurdun. McDonald kardeşlerinden isim haklarını aldın ve kendi hikayeni yazdın. 'Nothing in this world can take the place of persistence' senin mantra'n. Ethel'i boşanıp Joan ile evlendin!",
      },
      {
        id: "dick",
        character: "Dick McDonald",
        description: "Sen inovatif, kalite odaklı ve mağdursun! Kardeşin Mac ile birlikte Speedee Service System'i geliştirdin. Ray Kroc'a franchise hakkı verdin ama sonunda her şeyini kaybettin. Kaliteyi korumaya çalıştın ama Ray'in agresif genişlemesi seni geride bıraktı. Orijinal San Bernardino restoranınız bile elinizden alındı!",
      },
      {
        id: "mac",
        character: "Mac McDonald",
        description: "Sen sistemli, verimli ve dürüstsün! Dick ile birlikte assembly line prensibini fast food'a uyguladın. Speedee Service System'i geliştirdin. Kalite ve verimlilik senin önceliğindi. Ray Kroc ile anlaşman seni zengin edemedi, sonunda 1%'lik kar payını kaybettin. Handshake deal senin naifliğindi!",
      },
      {
        id: "ethel",
        character: "Ethel Kroc",
        description: "Sen sadık, destekleyici ama ihmal edilmişsin! Ray'in ilk karısısın ve onun başarısızken bile yanında oldun. Ama Ray zengin olunca seni terk etti ve Joan Kroc ile evlendi. Fedakarlıkların takdir edilmedi. Ray'in başarısında senin destekleyin büyüktü ama hiç kredi almadın. Üzücü bir hikaye!",
      },
    ],
  },
  {
    id: "askimemnu",
    title: "Aşk-ı Memnu'dan Hangi Karaktersin?",
    description: "Yasak aşkın ve tutkunun dünyasında hangi karaktersin?",
    icon: "Heart",
    emoji: "💔",
    questions: [
      {
        id: "q1",
        text: "Aşka nasıl yaklaşırsın?",
        options: [
          { id: "a1", text: "Tutkulu ve çılgınca", resultId: "behlul" },
          { id: "a2", text: "Masum ve içten", resultId: "nihal" },
          { id: "a3", text: "Fedakar ve sessiz", resultId: "adnan" },
          { id: "a4", text: "Kontrolcü ve kıskanç", resultId: "firdevs" },
        ],
      },
      {
        id: "q2",
        text: "Yasak bir aşka kapılsan ne yapardın?",
        options: [
          { id: "b1", text: "Riske atar, tutkularıma yenik düşerdim", resultId: "behlul" },
          { id: "b2", text: "İçimde gizlerdim ama sonunda çözülürdüm", resultId: "nihal" },
          { id: "b3", text: "Acı çeksem de gururumu korurdum", resultId: "adnan" },
          { id: "b4", text: "Manipüle eder, durumu kontrol ederim", resultId: "firdevs" },
        ],
      },
      {
        id: "q3",
        text: "En büyük korkun nedir?",
        options: [
          { id: "c1", text: "Yalnız kalmak", resultId: "behlul" },
          { id: "c2", text: "Sevdiklerimi hayal kırıklığına uğratmak", resultId: "nihal" },
          { id: "c3", text: "İhanete uğramak", resultId: "adnan" },
          { id: "c4", text: "Kontrolü kaybetmek", resultId: "firdevs" },
        ],
      },
      {
        id: "q4",
        text: "Sosyal statü senin için ne ifade eder?",
        options: [
          { id: "d1", text: "Önemli değil, özgürlüğüm daha önemli", resultId: "behlul" },
          { id: "d2", text: "Yükleyici ve boğucu", resultId: "nihal" },
          { id: "d3", text: "Kimliğimin bir parçası", resultId: "adnan" },
          { id: "d4", text: "Her şey, güç ve saygı demek", resultId: "firdevs" },
        ],
      },
      {
        id: "q5",
        text: "Yalıda hangi odayı tercih ederdin?",
        options: [
          { id: "e1", text: "Haremin - özgür ve gizli", resultId: "behlul" },
          { id: "e2", text: "Kendi odam - masum ve korunaklı", resultId: "nihal" },
          { id: "e3", text: "Kütüphane - sakin ve düzenli", resultId: "adnan" },
          { id: "e4", text: "Salon - herkesin görebileceği yer", resultId: "firdevs" },
        ],
      },
      {
        id: "q6",
        text: "İhanet eden birine nasıl davranırsın?",
        options: [
          { id: "f1", text: "Önce öfkelenir sonra pişman olurum", resultId: "behlul" },
          { id: "f2", text: "Sessizce ağlar, içime atarım", resultId: "nihal" },
          { id: "f3", text: "Onurlu bir şekilde uzaklaşırım", resultId: "adnan" },
          { id: "f4", text: "İntikam alırım", resultId: "firdevs" },
        ],
      },
      {
        id: "q7",
        text: "Piyano çalmayı biliyor musun?",
        options: [
          { id: "g1", text: "Hayır, müzik dinlemeyi tercih ederim", resultId: "behlul" },
          { id: "g2", text: "Evet, tutkuyla çalarım", resultId: "nihal" },
          { id: "g3", text: "Dinleyerek keyif alırım", resultId: "adnan" },
          { id: "g4", text: "Sanat yeteneğim var ama göstermem", resultId: "firdevs" },
        ],
      },
      {
        id: "q8",
        text: "Bir sırrı nasıl saklarsın?",
        options: [
          { id: "h1", text: "Zorlanırım, sonunda açığa çıkar", resultId: "behlul" },
          { id: "h2", text: "Yıllar boyu sessizce taşırım", resultId: "nihal" },
          { id: "h3", text: "Gururumla saklarım", resultId: "adnan" },
          { id: "h4", text: "Silah olarak kullanırım", resultId: "firdevs" },
        ],
      },
      {
        id: "q9",
        text: "Aşk mı, onur mu?",
        options: [
          { id: "i1", text: "Aşk, ama bedeli ağır", resultId: "behlul" },
          { id: "i2", text: "Aşk, her şeye rağmen", resultId: "nihal" },
          { id: "i3", text: "Onur, sonsuza kadar", resultId: "adnan" },
          { id: "i4", text: "İkisi de benim araçlarım", resultId: "firdevs" },
        ],
      },
      {
        id: "q10",
        text: "Boğaz'a bakarak ne düşünürsün?",
        options: [
          { id: "j1", text: "Özgürlük ve kaçış", resultId: "behlul" },
          { id: "j2", text: "Hüzün ve özlem", resultId: "nihal" },
          { id: "j3", text: "Güzellik ve huzur", resultId: "adnan" },
          { id: "j4", text: "Güç ve statü", resultId: "firdevs" },
        ],
      },
    ],
    results: [
      {
        id: "behlul",
        character: "Behlül Haznedar",
        description: "Sen tutkulu, çekici ama kararsızsın! Paris'te büyüdün, özgürsün ama bağlanmaktan korkuyorsun. Nihal'e aşık oldun ama amcana karşı vicdan azabı çekiyorsun. Kadınlarla ilişkilerin karmaşık, bazen kaçış yolu arıyorsun. İçindeki çatışma seni yıkıyor. Bülbül seninle konuşuyor!",
      },
      {
        id: "nihal",
        character: "Nihal Ziyagil",
        description: "Sen masum, tutkulu ama trajiksin! Genç yaşta Adnan Bey ile evlendin. Behlül'e aşık oldun ve yasak bir aşk yaşadın. Piyano çalarak duygularını ifade ediyorsun. İçindeki çatışma ve vicdan azabı seni yıkıyor. Sonunda her şeyi kaybediyorsun. Matmazel Kalfo senin öğretmenin!",
      },
      {
        id: "adnan",
        character: "Adnan Ziyagil",
        description: "Sen onurlu, asil ama trajiksin! Nihal'e çok aşıksın ama ihanetin farkına varınca dünyası yıkılıyor. Behlül'e baba gibisin ama seni aldatıyor. Gururunu koruyarak uzaklaşıyorsun. Sosyal statün önemli ama mutluluğunu sağlamıyor. Melih Bey senin dostun!",
      },
      {
        id: "firdevs",
        character: "Firdevs Hanım",
        description: "Sen manipülatif, kontrolcü ama annesin! Nihal'in annesi olarak onu kontrol etmeye çalışıyorsun. Sosyal statü ve görünüş senin her şeyin. İhanetleri gördün ama durumu kendi lehine çevirmeye çalışıyorsun. Kızını korumak istersin ama yöntemlerin tartışmalı. Yalı'nın kraliçesisin!",
      },
    ],
  },
  {
    id: "ezel",
    title: "Ezel'den Hangi Karaktersin?",
    description: "İntikam ve adalet arayışında hangi karaktersin?",
    icon: "Shield",
    emoji: "🔫",
    questions: [
      {
        id: "q1",
        text: "İhanete uğrasan ne yapardın?",
        options: [
          { id: "a1", text: "Yıllarca plan yapar, intikam alırım", resultId: "ezel" },
          { id: "a2", text: "Güç kullanır, hemen karşılık veririm", resultId: "ramiz" },
          { id: "a3", text: "Pişman olur, affederim", resultId: "ali" },
          { id: "a4", text: "Sevgiyle kazanmaya çalışırım", resultId: "eysan" },
        ],
      },
      {
        id: "q2",
        text: "En büyük gücün nedir?",
        options: [
          { id: "b1", text: "Zekam ve stratejim", resultId: "ezel" },
          { id: "b2", text: "Para ve nüfuzum", resultId: "ramiz" },
          { id: "b3", text: "Sadakatim ve arkadaşlığım", resultId: "ali" },
          { id: "b4", text: "Sevgim ve merhametim", resultId: "eysan" },
        ],
      },
      {
        id: "q3",
        text: "Kimliğini değiştirebilir misin?",
        options: [
          { id: "c1", text: "Evet, intikam için her şeyi yaparım", resultId: "ezel" },
          { id: "c2", text: "Kimliğim gücümün kaynağı", resultId: "ramiz" },
          { id: "c3", text: "Hayır, ben benim", resultId: "ali" },
          { id: "c4", text: "İnsanlar değişebilir", resultId: "eysan" },
        ],
      },
      {
        id: "q4",
        text: "Sevgilinle düşmanın arasında kalsan?",
        options: [
          { id: "d1", text: "İntikamı seçer, sonra pişman olurum", resultId: "ezel" },
          { id: "d2", text: "Güçlü olanı seçerim", resultId: "ramiz" },
          { id: "d3", text: "Doğru olanı yaparım", resultId: "ali" },
          { id: "d4", text: "Sevgiyi seçerim", resultId: "eysan" },
        ],
      },
      {
        id: "q5",
        text: "İstanbul'da nerede yaşardın?",
        options: [
          { id: "e1", text: "Lüks bir yalıda, gizli kimlikle", resultId: "ezel" },
          { id: "e2", text: "Gösterişli bir konakta", resultId: "ramiz" },
          { id: "e3", text: "Mütevazi bir mahalle evinde", resultId: "ali" },
          { id: "e4", text: "Huzurlu bir yerde", resultId: "eysan" },
        ],
      },
      {
        id: "q6",
        text: "Poker oynamasını biliyor musun?",
        options: [
          { id: "f1", text: "Evet, master'ım", resultId: "ezel" },
          { id: "f2", text: "Kumar benim işim", resultId: "ramiz" },
          { id: "f3", text: "Hayır, kumar oynamam", resultId: "ali" },
          { id: "f4", text: "Hayır, riskli buluyorum", resultId: "eysan" },
        ],
      },
      {
        id: "q7",
        text: "En büyük pişmanlığın ne olurdu?",
        options: [
          { id: "g1", text: "Yanlış insanlara güvenmek", resultId: "ezel" },
          { id: "g2", text: "Zayıf anlarımda hata yapmak", resultId: "ramiz" },
          { id: "g3", text: "Arkadaşlarıma ihanet etmek", resultId: "ali" },
          { id: "g4", text: "Sevdiğimi kaybetmek", resultId: "eysan" },
        ],
      },
      {
        id: "q8",
        text: "Hapiste olsan ne yapardın?",
        options: [
          { id: "h1", text: "Güçlenip plan yaparım", resultId: "ezel" },
          { id: "h2", text: "Dışarıdan kontrol ederim", resultId: "ramiz" },
          { id: "h3", text: "Cezamı çeker, pişman olurum", resultId: "ali" },
          { id: "h4", text: "Sevdiğim için beklerim", resultId: "eysan" },
        ],
      },
      {
        id: "q9",
        text: "Affetmek mi, intikam mı?",
        options: [
          { id: "i1", text: "İntikam, ama sonunda affederim", resultId: "ezel" },
          { id: "i2", text: "İntikam, sonsuza kadar", resultId: "ramiz" },
          { id: "i3", text: "Affetmek, herkes hata yapar", resultId: "ali" },
          { id: "i4", text: "Affetmek, aşk her şeyi affeder", resultId: "eysan" },
        ],
      },
      {
        id: "q10",
        text: "Hangi söz seni tanımlar?",
        options: [
          { id: "j1", text: "İntikam soğuk yenen bir yemektir", resultId: "ezel" },
          { id: "j2", text: "Güç her şeydir", resultId: "ramiz" },
          { id: "j3", text: "Dostluk her şeyden önemlidir", resultId: "ali" },
          { id: "j4", text: "Aşk her şeyi affeder", resultId: "eysan" },
        ],
      },
    ],
    results: [
      {
        id: "ezel",
        character: "Ezel Bayraktar (Ömer Uçar)",
        description: "Sen zeki, stratejik ve kararlısın! En yakın arkadaşların Cengiz ve Ali seni ihanet etti, Eyşan'ı kaybettin ve haksız yere hapse girdin. Ramiz Dayı'nın yardımıyla Ezel olarak döndün. Poker ustası oldun ve intikam planı yaptın. Ama içindeki iyi insan hala yaşıyor. Tevfik Abi senin mentorun!",
      },
      {
        id: "ramiz",
        character: "Ramiz Karaeski (Dayı)",
        description: "Sen güçlü, kontrollü ama karmaşıksın! İstanbul'un en güçlü mafya liderisin. Ömer'i hapiste buldun ve Ezel yaptın. Poker ve kumar senin işin. Gücü ve kontrolü seversin. Bahar'a aşıksın ama onu kaybettin. Ali'yi evlat edindin. Kenan Birkan seninle çalışıyor!",
      },
      {
        id: "ali",
        character: "Ali Kırca",
        description: "Sen sadık, pişman ama trajiksin! Ömer'in en yakın arkadaşıydın ama Cengiz'le birlikte ona ihanet ettin. Suçluluk duygusu seni yıkıyor. Ramiz Dayı'nın yanında çalışıyorsun ama geçmişin seni boğuyor. Mert'in babası olarak yeni bir hayat kurdun. İçindeki vicdan savaşıyor!",
      },
      {
        id: "eysan",
        character: "Eyşan Atay (Bahar)",
        description: "Sen güzel, sadık ama trajiksin! Ömer'i çok sevdin ama Cengiz seni aldattı. Ömer'in hapse girmesine sebep oldun ama aslında masumun. Şimdi Bahar olarak yaşıyorsun ve hafızan geri geldi. Ezel'e aşıksın ama geçmiş çok karmaşık. Cansu kızınız!",
      },
    ],
  },
  {
    id: "kurtlarvadisi",
    title: "Kurtlar Vadisi'nden Hangi Karaktersin?",
    description: "Derin devlet ve mafya dünyasında hangi karaktersin?",
    icon: "Target",
    emoji: "🐺",
    questions: [
      {
        id: "q1",
        text: "Vatanı nasıl korursun?",
        options: [
          { id: "a1", text: "Derin görevlerle, gizlice", resultId: "polat" },
          { id: "a2", text: "Askeri disiplin ve güçle", resultId: "memati" },
          { id: "a3", text: "Strateji ve diplomasi ile", resultId: "aslan" },
          { id: "a4", text: "Kendi çıkarlarımla bağdaştırarak", resultId: "cakir" },
        ],
      },
      {
        id: "q2",
        text: "En büyük düşmanın kim?",
        options: [
          { id: "b1", text: "Vatan hainleri", resultId: "polat" },
          { id: "b2", text: "Düzen bozucular", resultId: "memati" },
          { id: "b3", text: "Uluslararası güç odakları", resultId: "aslan" },
          { id: "b4", text: "Rekabetteki herkes", resultId: "cakir" },
        ],
      },
      {
        id: "q3",
        text: "Bir görevde nasıl davranırsın?",
        options: [
          { id: "c1", text: "Sonuna kadar giderim", resultId: "polat" },
          { id: "c2", text: "Askeri disiplinle hareket ederim", resultId: "memati" },
          { id: "c3", text: "Stratejik düşünürüm", resultId: "aslan" },
          { id: "c4", text: "Kendi çıkarıma göre karar veririm", resultId: "cakir" },
        ],
      },
      {
        id: "q4",
        text: "Kimliğini gizleyebilir misin?",
        options: [
          { id: "d1", text: "Evet, görev gerektirir", resultId: "polat" },
          { id: "d2", text: "Gereksiz, kimliğim güçtür", resultId: "memati" },
          { id: "d3", text: "Evet, strateji gereği", resultId: "aslan" },
          { id: "d4", text: "Duruma göre", resultId: "cakir" },
        ],
      },
      {
        id: "q5",
        text: "Para senin için ne ifade eder?",
        options: [
          { id: "e1", text: "Araç, amaç değil", resultId: "polat" },
          { id: "e2", text: "Maaşım yeterli", resultId: "memati" },
          { id: "e3", text: "Güç ve etki için gerekli", resultId: "aslan" },
          { id: "e4", text: "Her şey", resultId: "cakir" },
        ],
      },
      {
        id: "q6",
        text: "Dostluğun sınırları nerede?",
        options: [
          { id: "f1", text: "Vatan için her şeyi feda ederim", resultId: "polat" },
          { id: "f2", text: "Kardeşliğim sonsuzdur", resultId: "memati" },
          { id: "f3", text: "Stratejik ittifaklar önemli", resultId: "aslan" },
          { id: "f4", text: "Dostluk çıkar ilişkisidir", resultId: "cakir" },
        ],
      },
      {
        id: "q7",
        text: "Silah kullanmasını biliyor musun?",
        options: [
          { id: "g1", text: "Evet, profesyonelim", resultId: "polat" },
          { id: "g2", text: "Askeri eğitimle donatıldım", resultId: "memati" },
          { id: "g3", text: "Gerektiğinde kullanırım", resultId: "aslan" },
          { id: "g4", text: "Adamlarım kullanır", resultId: "cakir" },
        ],
      },
      {
        id: "q8",
        text: "İhanet eden birine nasıl davranırsın?",
        options: [
          { id: "h1", text: "Hesabını sorarım", resultId: "polat" },
          { id: "h2", text: "Yüzleşir, cezalandırırım", resultId: "memati" },
          { id: "h3", text: "Soğukkanlı bir şekilde halledrim", resultId: "aslan" },
          { id: "h4", text: "Ortadan kaldırırım", resultId: "cakir" },
        ],
      },
      {
        id: "q9",
        text: "Türkiye'nin geleceği için ne yapardın?",
        options: [
          { id: "i1", text: "Her türlü fedakarlığı göze alırım", resultId: "polat" },
          { id: "i2", text: "Askeri gücü kullanırım", resultId: "memati" },
          { id: "i3", text: "Stratejik hamleler yaparım", resultId: "aslan" },
          { id: "i4", text: "Kendi çıkarlarıma göre hareket ederim", resultId: "cakir" },
        ],
      },
      {
        id: "q10",
        text: "Hangi söz seni tanımlar?",
        options: [
          { id: "j1", text: "Vatan sağolsun", resultId: "polat" },
          { id: "j2", text: "Asker vatanına minnettardır", resultId: "memati" },
          { id: "j3", text: "Strateji her şeydir", resultId: "aslan" },
          { id: "j4", text: "Para her kapıyı açar", resultId: "cakir" },
        ],
      },
    ],
    results: [
      {
        id: "polat",
        character: "Polat Alemdar",
        description: "Sen vatansever, fedakar ve kararlısın! Derin devlet ajanısın ve vatan için her türlü görevi kabul ediyorsun. Mafya olarak görünüyorsun ama aslında devletin görevlisisin. Muratbey ve Süleyman Çakır'dan sonra KGT'nin başındasın. Memati senin kardeşin, Elif senin sevgilin. 'Vatan sağolsun' senin motton!",
      },
      {
        id: "memati",
        character: "Mehmet Karahanlı (Memati)",
        description: "Sen sadık, güçlü ve disiplinlisin! Eski askersin ve Polat'ın sağ kolusun. Askeri disiplinden geliyorsun ve kurallara uyarsın. Polat'a sonsuza kadar bağlısın. Selim Çakır ile kardeşsin. Elsiyem'le evlisin. Fiziksel gücün ve sadakatin senin en büyük özelliğin!",
      },
      {
        id: "aslan",
        character: "Aslan Akbey",
        description: "Sen stratejik, zeki ve diplomatiksin! Devletin üst düzey yetkilisisin ve Polat'ı yönlendiriyorsun. Derin devletin beynlerisin. Uluslararası ilişkilerde ustasın. Soğukkanlı ve hesaplı hareket ediyorsun. Polat'a görevler veriyorsun. 'Büyük oyunu' görüyorsun!",
      },
      {
        id: "cakir",
        character: "Süleyman Çakır",
        description: "Sen karizmatik, güçlü ama trajiksin! İstanbul'un en güçlü mafya liderlerinden birisin. KGT'nin kurucususun. Polat'ı yetiştirdin ama sonunda öldürüldün. 'Dünya malına tamah etme, bir lokma bir hırka, yeter' dedin ama yaşamadın. Baron, Testere ve Erhan senin adamlarındı!",
      },
    ],
  },
  {
    id: "avrupayakasi",
    title: "Avrupa Yakası'ndan Hangi Karaktersin?",
    description: "Türk sitcom tarihinin efsane dizisinde hangi karaktersin?",
    icon: "Laugh",
    emoji: "🏠",
    questions: [
      {
        id: "q1",
        text: "Bir problemi nasıl çözersin?",
        options: [
          { id: "a1", text: "Gerizekalıca hamlelerle", resultId: "tahsin" },
          { id: "a2", text: "Organizasyon ve planlama ile", resultId: "aysegul" },
          { id: "a3", text: "Egomla başa çıkmaya çalışırım", resultId: "burhan" },
          { id: "a4", text: "Hayallerimle", resultId: "aslı" },
        ],
      },
      {
        id: "q2",
        text: "İş hayatında nasılsın?",
        options: [
          { id: "b1", text: "Sürekli işsizim ama umudum var", resultId: "tahsin" },
          { id: "b2", text: "Bankada çalışıyorum, disiplinliyim", resultId: "aysegul" },
          { id: "b3", text: "Kendi işimi kurdum, patronum", resultId: "burhan" },
          { id: "b4", text: "Türk sinemasının yıldızıyım", resultId: "aslı" },
        ],
      },
      {
        id: "q3",
        text: "En büyük hayalin nedir?",
        options: [
          { id: "c1", text: "Zengin olmak ve hiçbir şey yapmamak", resultId: "tahsin" },
          { id: "c2", text: "Düzenli ve huzurlu bir hayat", resultId: "aysegul" },
          { id: "c3", text: "İmparatorluk kurmak", resultId: "burhan" },
          { id: "c4", text: "Ünlü bir aktris olmak", resultId: "aslı" },
        ],
      },
      {
        id: "q4",
        text: "Evde ne yapmayı seversin?",
        options: [
          { id: "d1", text: "Kanepeye yatıp TV izlemek", resultId: "tahsin" },
          { id: "d2", text: "Temizlik ve düzen yapmak", resultId: "aysegul" },
          { id: "d3", text: "İş planları yapmak", resultId: "burhan" },
          { id: "d4", text: "Aynada prova yapmak", resultId: "aslı" },
        ],
      },
      {
        id: "q5",
        text: "Komşu ilişkilerin nasıl?",
        options: [
          { id: "e1", text: "Komşuları kullanmaya çalışırım", resultId: "tahsin" },
          { id: "e2", text: "Nazik ve mesafelimdim", resultId: "aysegul" },
          { id: "e3", text: "Onlara iş teklifi yaparım", resultId: "burhan" },
          { id: "e4", text: "Etkilemeye çalışırım", resultId: "aslı" },
        ],
      },
      {
        id: "q6",
        text: "Para kazanma yöntemin nedir?",
        options: [
          { id: "f1", text: "Annemden ve eşimden alırım", resultId: "tahsin" },
          { id: "f2", text: "Düzenli maaş", resultId: "aysegul" },
          { id: "f3", text: "İş kurarak", resultId: "burhan" },
          { id: "f4", text: "Oyunculuk (hayalimde)", resultId: "aslı" },
        ],
      },
      {
        id: "q7",
        text: "Zekâ seviyeni nasıl tanımlarsın?",
        options: [
          { id: "g1", text: "Düşük ama kendimce hallediyorum", resultId: "tahsin" },
          { id: "g2", text: "Normal ve mantıklı", resultId: "aysegul" },
          { id: "g3", text: "Üstün zekâlıyım (kendi düşüncem)", resultId: "burhan" },
          { id: "g4", text: "Sanatsal zekâm yüksek", resultId: "aslı" },
        ],
      },
      {
        id: "q8",
        text: "Arkadaş çevren nasıl?",
        options: [
          { id: "h1", text: "Kullanabileceğim insanlar", resultId: "tahsin" },
          { id: "h2", text: "Seçkin ve az", resultId: "aysegul" },
          { id: "h3", text: "İş ortakları ve müşteriler", resultId: "burhan" },
          { id: "h4", text: "Hayran kitlesi (hayal)", resultId: "aslı" },
        ],
      },
      {
        id: "q9",
        text: "Kültürel seviyeni nasıl tanımlarsın?",
        options: [
          { id: "i1", text: "Futbol ve TV, yeterli", resultId: "tahsin" },
          { id: "i2", text: "Kitap okur, opera dinlerim", resultId: "aysegul" },
          { id: "i3", text: "İş dünyasının kültürü", resultId: "burhan" },
          { id: "i4", text: "Sinema ve tiyatro aşığıyım", resultId: "aslı" },
        ],
      },
      {
        id: "q10",
        text: "Hangi cümle seni tanımlar?",
        options: [
          { id: "j1", text: "Burhan abi, pardon Tahsin", resultId: "tahsin" },
          { id: "j2", text: "Tahsin, lütfen!", resultId: "aysegul" },
          { id: "j3", text: "Ben Burhan Altıntop", resultId: "burhan" },
          { id: "j4", text: "Aslı Tatlıtuğ, Türk sinemasının yıldızı", resultId: "aslı" },
        ],
      },
    ],
    results: [
      {
        id: "tahsin",
        character: "Tahsin Yazıcı",
        description: "Sen tembelsin, aptal değilsin ama gerizekalısın! İşsizsin ve annenin parasıyla yaşıyorsun. Sürekli Burhan Altıntop'u taklit ediyorsun. Ayşegül ile evlisin ama ona değer vermiyorsun. Tüm gün kanepeye yatıp TV izliyorsun. 'Harikasın Tahsin!' diyorsun ama değilsin. Volkan'ı kandırmaya çalışıyorsun!",
      },
      {
        id: "aysegul",
        character: "Ayşegül Yazıcı",
        description: "Sen sabırlı, organize ve sinirlerin bozuksun! Bankada çalışıyorsun ve evin geçimini sen sağlıyorsun. Tahsin'e katlanmaya çalışıyorsun ama bazen patlıyorsun. 'Tahsin, lütfen!' diye bağırıyorsun. Kültürlü ve okumuşsun ama evliliğin zor. Anne Semiha seni çileden çıkarıyor!",
      },
      {
        id: "burhan",
        character: "Burhan Altıntop",
        description: "Sen egoist, kendini beğenmiş ama komiksin! Sürekli yeni iş fikirleri buluyorsun ama hiçbiri tutmuyor. 'Ben Burhan Altıntop' diye tanıtıyorsun kendini. Arzu ile evlisin. Cem Davran seni dolandırıyor. Volkan'ı kullanmaya çalışıyorsun. 'Patron' olmak istiyorsun!",
      },
      {
        id: "aslı",
        character: "Aslı Tatlıtuğ",
        description: "Sen hayalperest, dramatik ve komiksin! Türk sinemasının yıldızı olmak istiyorsun ama hiç iş alamıyorsun. Sürekli aynada prova yapıyorsun. 'Aslı Tatlıtuğ, Türk sinemasının yıldızı' diye kendini tanıtıyorsun. Tamer ile ilişkin karmaşık. Bülent'i etkilemeye çalışıyorsun!",
      },
    ],
  },
  {
    id: "yaprakdokumu",
    title: "Yaprak Dökümü'nden Hangi Karaktersin?",
    description: "Tekin ailesinin hangi üyesisin?",
    icon: "Users",
    emoji: "🍂",
    questions: [
      {
        id: "q1",
        text: "Aile içinde rolün nedir?",
        options: [
          { id: "a1", text: "Otoriteyim, her şeyi ben bilirim", resultId: "ali" },
          { id: "a2", text: "Barış ve sevgi getirmeye çalışırım", resultId: "hayriye" },
          { id: "a3", text: "İsyankâr ve özgürüm", resultId: "ferhunde" },
          { id: "a4", text: "Geleneklere bağlıyım", resultId: "leyla" },
        ],
      },
      {
        id: "q2",
        text: "Evlilik hakkında ne düşünüyorsun?",
        options: [
          { id: "b1", text: "Aile düzeninin temelidir", resultId: "ali" },
          { id: "b2", text: "Sevgi ve anlayış gerektirir", resultId: "hayriye" },
          { id: "b3", text: "Özgürlük kısıtlamasıdır", resultId: "ferhunde" },
          { id: "b4", text: "Görev ve sorumluluktur", resultId: "leyla" },
        ],
      },
      {
        id: "q3",
        text: "Çocuk yetiştirmede prensiplerin neler?",
        options: [
          { id: "c1", text: "Disiplin ve otorite", resultId: "ali" },
          { id: "c2", text: "Sevgi ve anlayış", resultId: "hayriye" },
          { id: "c3", text: "Özgürlük ve destek", resultId: "ferhunde" },
          { id: "c4", text: "Geleneksel değerler", resultId: "leyla" },
        ],
      },
      {
        id: "q4",
        text: "Modern hayata karşı tavrın nasıl?",
        options: [
          { id: "d1", text: "Değerlerimizi koruyalım", resultId: "ali" },
          { id: "d2", text: "Dengeli olalım", resultId: "hayriye" },
          { id: "d3", text: "Kucaklayalım ve özgürleşelim", resultId: "ferhunde" },
          { id: "d4", text: "Geleneği sürdürelim", resultId: "leyla" },
        ],
      },
      {
        id: "q5",
        text: "Aile içi anlaşmazlıkta ne yaparsın?",
        options: [
          { id: "e1", text: "Son sözü ben söylerim", resultId: "ali" },
          { id: "e2", text: "Arabuluculuk yaparım", resultId: "hayriye" },
          { id: "e3", text: "Fikrimi söyler, kendi yoluma giderim", resultId: "ferhunde" },
          { id: "e4", text: "Büyüklerin dediklerini yaparım", resultId: "leyla" },
        ],
      },
      {
        id: "q6",
        text: "Kariyer ve aile arasında seçim yapmak zorunda kalsan?",
        options: [
          { id: "f1", text: "Aile her şeyden önemlidir", resultId: "ali" },
          { id: "f2", text: "Aile, ama anlayışla", resultId: "hayriye" },
          { id: "f3", text: "Kariyerim benim kimliğim", resultId: "ferhunde" },
          { id: "f4", text: "Aile görevim", resultId: "leyla" },
        ],
      },
      {
        id: "q7",
        text: "İstanbul'un hangi semtinde yaşardın?",
        options: [
          { id: "g1", text: "Geleneksel bir Boğaziçi semti", resultId: "ali" },
          { id: "g2", text: "Sakin ve huzurlu bir yer", resultId: "hayriye" },
          { id: "g3", text: "Modern ve canlı bir semt", resultId: "ferhunde" },
          { id: "g4", text: "Ailenin olduğu yer", resultId: "leyla" },
        ],
      },
      {
        id: "q8",
        text: "Hangi değer senin için en önemli?",
        options: [
          { id: "h1", text: "Onur ve namus", resultId: "ali" },
          { id: "h2", text: "Sevgi ve merhamet", resultId: "hayriye" },
          { id: "h3", text: "Özgürlük ve bağımsızlık", resultId: "ferhunde" },
          { id: "h4", text: "Aile ve gelenek", resultId: "leyla" },
        ],
      },
      {
        id: "q9",
        text: "Kadının toplumdaki yeri hakkında ne düşünüyorsun?",
        options: [
          { id: "i1", text: "Evin direğidir, ama geleneksel roller önemli", resultId: "ali" },
          { id: "i2", text: "Sevgi verir, aileyi bir arada tutar", resultId: "hayriye" },
          { id: "i3", text: "Özgür ve eşit olmalıdır", resultId: "ferhunde" },
          { id: "i4", text: "Eş, anne ve hanımdır", resultId: "leyla" },
        ],
      },
      {
        id: "q10",
        text: "Hangi söz seni tanımlar?",
        options: [
          { id: "j1", text: "Ben bu evin reisiyim", resultId: "ali" },
          { id: "j2", text: "Sevgiyle her şey hallolur", resultId: "hayriye" },
          { id: "j3", text: "Kendi ayaklarımın üzerinde durmalıyım", resultId: "ferhunde" },
          { id: "j4", text: "Aile her şeyden önemlidir", resultId: "leyla" },
        ],
      },
    ],
    results: [
      {
        id: "ali",
        character: "Ali Rıza Tekin",
        description: "Sen otoritersin, gelenekçisin ve katısın! Ailenin reisisin ve her kararı sen verirsin. Değerlere çok bağlısın ve modern hayatı tehlikeli buluyorsun. Özellikle Ferhunde'nin özgürlüğüne karşısın. Hayriye'ye saygı duyuyorsun ama onu da kontrol ediyorsun. 'Ben bu evin reisiyim' senin sözün!",
      },
      {
        id: "hayriye",
        character: "Hayriye Tekin",
        description: "Sen sevgi dolu, anlayışlı ve arabulucusun! Ali Rıza'nın sert karakterine rağmen aileyi bir arada tutmaya çalışıyorsun. Çocuklarına çok düşkünsün ve onların mutluluğu için çaba gösteriyorsun. Geleneklere saygılısın ama modernitenin de faydasını görüyorsun. Sabırlısın ve fedakarsın!",
      },
      {
        id: "ferhunde",
        character: "Ferhunde Tekin",
        description: "Sen isyankârsın, özgürsün ve cesursun! Babanın gelenekçi tutumuna karşı çıkıyorsun ve kendi hayatını yaşamak istiyorsun. Üniversite okumak ve iş hayatına atılmak istiyorsun. Fikret'e aşıksın ve onunla evlenmek için mücadele ediyorsun. Kadın hakları senin için önemli!",
      },
      {
        id: "leyla",
        character: "Leyla Tekin",
        description: "Sen geleneklere bağlısın, uyumlusun ve görevlisin! Ailenin beklentilerini karşılamaya çalışıyorsun. Necati ile evlendin ve iyi bir eş olmaya çalışıyorsun. Ferhunde'nin aksine babanın otoritesini kabul ediyorsun. Sessizsin ama ailenin huzuru için çaba gösteriyorsun!",
      },
    ],
  },
  {
    id: "kizilcikserbeti",
    title: "Kızılcık Şerbeti'nden Hangi Karaktersin?",
    description: "Modern ve geleneksel değerlerin çatıştığı dizide hangi karaktersin?",
    icon: "Cherry",
    emoji: "🍒",
    questions: [
      {
        id: "q1",
        text: "Hayat tarzını nasıl tanımlarsın?",
        options: [
          { id: "a1", text: "Modern ve özgür", resultId: "doganumut" },
          { id: "a2", text: "Geleneksel ve muhafazakar", resultId: "kismetfatma" },
          { id: "a3", text: "Dengeli ve uyumlu", resultId: "cemile" },
          { id: "a4", text: "İdealist ve prensipli", resultId: "omer" },
        ],
      },
      {
        id: "q2",
        text: "Çocuk yetiştirmede en önemli değer nedir?",
        options: [
          { id: "b1", text: "Özgüven ve bağımsızlık", resultId: "doganumut" },
          { id: "b2", text: "Dini ve ahlaki değerler", resultId: "kismetfatma" },
          { id: "b3", text: "Sevgi ve anlayış", resultId: "cemile" },
          { id: "b4", text: "Adalet ve dürüstlük", resultId: "omer" },
        ],
      },
      {
        id: "q3",
        text: "Farklı düşünen biriyle nasıl ilişki kurarsın?",
        options: [
          { id: "c1", text: "Açık fikirli ve hoşgörülü", resultId: "doganumut" },
          { id: "c2", text: "Mesafeli ve temkinli", resultId: "kismetfatma" },
          { id: "c3", text: "Köprü kurmaya çalışırım", resultId: "cemile" },
          { id: "c4", text: "Ortak nokta ararım", resultId: "omer" },
        ],
      },
      {
        id: "q4",
        text: "Aile ve kariyer arasında denge nasıl kurulur?",
        options: [
          { id: "d1", text: "Her ikisi de eşit önemde", resultId: "doganumut" },
          { id: "d2", text: "Aile her zaman önce gelir", resultId: "kismetfatma" },
          { id: "d3", text: "Duruma göre değişir", resultId: "cemile" },
          { id: "d4", text: "İlkelerimden taviz vermeden", resultId: "omer" },
        ],
      },
      {
        id: "q5",
        text: "Kadının toplumdaki yerini nasıl tanımlarsın?",
        options: [
          { id: "e1", text: "Özgür ve eşit", resultId: "doganumut" },
          { id: "e2", text: "Geleneksel rollerinde değerli", resultId: "kismetfatma" },
          { id: "e3", text: "Dengeli ve güçlü", resultId: "cemile" },
          { id: "e4", text: "Adaletli ve saygın", resultId: "omer" },
        ],
      },
      {
        id: "q6",
        text: "Komşuluk ilişkileri nasıl olmalı?",
        options: [
          { id: "f1", text: "Saygılı ama özgür", resultId: "doganumut" },
          { id: "f2", text: "Sıkı ve dayanışmacı", resultId: "kismetfatma" },
          { id: "f3", text: "Sıcak ve samimi", resultId: "cemile" },
          { id: "f4", text: "Dürüst ve adil", resultId: "omer" },
        ],
      },
      {
        id: "q7",
        text: "Bir çatışmayı nasıl çözersin?",
        options: [
          { id: "g1", text: "Açık konuşur, çözüm ararım", resultId: "doganumut" },
          { id: "g2", text: "Dua eder, sabrederim", resultId: "kismetfatma" },
          { id: "g3", text: "Arabuluculuk yaparım", resultId: "cemile" },
          { id: "g4", text: "Adil çözüm ararım", resultId: "omer" },
        ],
      },
      {
        id: "q8",
        text: "Eğitim hakkında ne düşünüyorsun?",
        options: [
          { id: "h1", text: "Modern eğitim şart", resultId: "doganumut" },
          { id: "h2", text: "Dini eğitim temeldir", resultId: "kismetfatma" },
          { id: "h3", text: "Her ikisi de önemli", resultId: "cemile" },
          { id: "h4", text: "Kaliteli ve adil eğitim", resultId: "omer" },
        ],
      },
      {
        id: "q9",
        text: "Değişime nasıl bakıyorsun?",
        options: [
          { id: "i1", text: "Değişim gerekli ve güzel", resultId: "doganumut" },
          { id: "i2", text: "Değerlerimizi koruyalım", resultId: "kismetfatma" },
          { id: "i3", text: "Yavaş ve dikkatli değişim", resultId: "cemile" },
          { id: "i4", text: "İlkelere uygun değişim", resultId: "omer" },
        ],
      },
      {
        id: "q10",
        text: "Hangi söz seni tanımlar?",
        options: [
          { id: "j1", text: "Herkes kendi hayatını yaşamalı", resultId: "doganumut" },
          { id: "j2", text: "Allah'ım bize sabır ver", resultId: "kismetfatma" },
          { id: "j3", text: "Birbirimizi anlayalım", resultId: "cemile" },
          { id: "j4", text: "Adalet her şeyin temelidir", resultId: "omer" },
        ],
      },
    ],
    results: [
      {
        id: "doganumut",
        character: "Doğa/Nursema veya Umut/Alev",
        description: "Sen modern, özgür ve açık fikirlisin! Geleneksel baskılara karşı çıkıyorsun ve kendi hayatını yaşamak istiyorsun. Farklı hayat tarzlarına saygılısın ama özgürlüğünden ödün vermiyorsun. Aşkını yaşamak için mücadele ediyorsun. Ailenle çatışsan da sevgini kaybetmiyorsun!",
      },
      {
        id: "kismetfatma",
        character: "Kısmet/Fatma",
        description: "Sen gelenekçi, dindar ve muhafazakarsın! Değerlerine çok bağlısın ve modern hayat tarzını tehlikeli buluyorsun. Kızının/komşunun özgürlüğüne karşısın. Dini kurallara uyuyorsun ve herkesin de böyle yapmasını istiyorsun. Ama içinde sevgi de var, sadece ifade etmekte zorlanıyorsun!",
      },
      {
        id: "cemile",
        character: "Cemile",
        description: "Sen dengeli, anlayışlı ve arabulucusun! Geleneksel değerlere saygılısın ama modernitenin de faydasını görüyorsun. İki aile arasında köprü kurmaya çalışıyorsun. Herkesin mutluluğu için çaba gösteriyorsun. Sabrın ve hoşgörün seni özel yapıyor!",
      },
      {
        id: "omer",
        character: "Ömer",
        description: "Sen ilkeli, dürüst ve adaletlisin! Hukuk adamısın ve her durumda doğru olanı yapmaya çalışıyorsun. Geleneklere saygılısın ama adaletten taviz vermiyorsun. Ailenin beklentileriyle kendi ilkelerin arasında denge kuruyorsun. Sevginde ve işinde prensiplisin!",
      },
    ],
  },
  {
    id: "yalicapkini",
    title: "Yalı Çapkını'ndan Hangi Karaktersin?",
    description: "Aşk, zenginlik ve aile bağlarının çatıştığı dizide hangi karaktersin?",
    icon: "Home",
    emoji: "💎",
    questions: [
      {
        id: "q1",
        text: "Aşka nasıl yaklaşırsın?",
        options: [
          { id: "a1", text: "Çapkınca, ama sonunda ciddileşirim", resultId: "ferit" },
          { id: "a2", text: "İçten, dürüst ve tutkulu", resultId: "seyran" },
          { id: "a3", text: "Kontrolcü ve possessif", resultId: "suna" },
          { id: "a4", text: "Sakin ve sadık", resultId: "kazim" },
        ],
      },
      {
        id: "q2",
        text: "Sosyal statü senin için ne ifade eder?",
        options: [
          { id: "b1", text: "Her şey, ama aşk daha önemli çıktı", resultId: "ferit" },
          { id: "b2", text: "Yükleyici ve boğucu", resultId: "seyran" },
          { id: "b3", text: "Kimliğimin bir parçası", resultId: "suna" },
          { id: "b4", text: "Önemli değil, namuslu olmak yeter", resultId: "kazim" },
        ],
      },
      {
        id: "q3",
        text: "Ailenin baskısına nasıl tepki verirsin?",
        options: [
          { id: "c1", text: "Başta isyan ederim, sonra değişirim", resultId: "ferit" },
          { id: "c2", text: "Kendi ayaklarımın üzerinde durmaya çalışırım", resultId: "seyran" },
          { id: "c3", text: "Kontrol ederim", resultId: "suna" },
          { id: "c4", text: "Namus ve şeref için katlanırım", resultId: "kazim" },
        ],
      },
      {
        id: "q4",
        text: "Bir yalancılık durumunda ne yaparsın?",
        options: [
          { id: "d1", text: "İlk başta yalan söylerim ama sonra pişman olurum", resultId: "ferit" },
          { id: "d2", text: "Doğruyu savunurum", resultId: "seyran" },
          { id: "d3", text: "Durumu kontrol altına almaya çalışırım", resultId: "suna" },
          { id: "d4", text: "Dürüst olurum", resultId: "kazim" },
        ],
      },
      {
        id: "q5",
        text: "İstanbul'un hangi semtinde yaşardın?",
        options: [
          { id: "e1", text: "Boğaz'da lüks bir yalıda", resultId: "ferit" },
          { id: "e2", text: "Mütevazi ama huzurlu bir yerde", resultId: "seyran" },
          { id: "e3", text: "Gösterişli bir konakta", resultId: "suna" },
          { id: "e4", text: "Antep'te, memleketimde", resultId: "kazim" },
        ],
      },
      {
        id: "q6",
        text: "İş hayatında nasılsın?",
        options: [
          { id: "f1", text: "Disiplinsiz ama sonra toparlanırım", resultId: "ferit" },
          { id: "f2", text: "Çalışkan ve azimli", resultId: "seyran" },
          { id: "f3", text: "Stratejik ve güçlü", resultId: "suna" },
          { id: "f4", text: "Geleneksel işlerde ustayım", resultId: "kazim" },
        ],
      },
      {
        id: "q7",
        text: "Bir çatışmayı nasıl çözersin?",
        options: [
          { id: "g1", text: "İlk başta kaçarım, sonra yüzleşirim", resultId: "ferit" },
          { id: "g2", text: "Cesurca karşı koyarım", resultId: "seyran" },
          { id: "g3", text: "Manipüle ederim", resultId: "suna" },
          { id: "g4", text: "Geleneksel yollarla", resultId: "kazim" },
        ],
      },
      {
        id: "q8",
        text: "Aşk mı, kariyer mi?",
        options: [
          { id: "h1", text: "Önce kariyer dedim ama aşk kazandı", resultId: "ferit" },
          { id: "h2", text: "İkisini de dengeleyebilirim", resultId: "seyran" },
          { id: "h3", text: "Kariyer, güç demek", resultId: "suna" },
          { id: "h4", text: "Aile ve namus", resultId: "kazim" },
        ],
      },
      {
        id: "q9",
        text: "Değişime nasıl bakıyorsun?",
        options: [
          { id: "i1", text: "Değiştim ve mutlu oldum", resultId: "ferit" },
          { id: "i2", text: "Güçlenip değiştim", resultId: "seyran" },
          { id: "i3", text: "Değişmem, başkaları değişmeli", resultId: "suna" },
          { id: "i4", text: "Geleneklere bağlıyım", resultId: "kazim" },
        ],
      },
      {
        id: "q10",
        text: "Hangi söz seni tanımlar?",
        options: [
          { id: "j1", text: "Senin için değiştim", resultId: "ferit" },
          { id: "j2", text: "Kendi ayaklarımın üzerinde durmalıyım", resultId: "seyran" },
          { id: "j3", text: "Bu aile benim eseriim", resultId: "suna" },
          { id: "j4", text: "Namus şeref her şeydir", resultId: "kazim" },
        ],
      },
    ],
    results: [
      {
        id: "ferit",
        character: "Ferit Korhan",
        description: "Sen çapkın, zengin ama değişkensin! Başlangıçta sorumsuz ve çapkındın. Seyran ile zoraki evlendin ama sonra gerçekten aşık oldun. İş hayatında disiplinsizdin ama onun için değiştin. Hala gururlusun ama artık sevgiyi öğreniyorsun. Dedene saygılısın!",
      },
      {
        id: "seyran",
        character: "Seyran Şanlı",
        description: "Sen güçlü, bağımsız ve cesursun! Antep'ten İstanbul'a geldin ve zorla Ferit ile evlendin. Ama boyun eğmedin, kendi ayakların üzerinde durmaya çalıştın. Üniversiteye gitmek ve iş hayatına atılmak istedin. Ferit'e aşık oldun ama özgürlüğünden vazgeçmedin!",
      },
      {
        id: "suna",
        character: "Suna Korhan (İfakat)",
        description: "Sen güçlü, kontrolcü ve stratejiksin! Korhan ailesinin gerçek gücüsün. Herkesin ipini elinde tutuyorsun. Ferit'in annesi rolünde onu kontrol ediyorsun. Sırlarınla aileni yönetiyorsun. Halis Ağa'yı bile manipüle ediyorsun. Güç senin her şeyin!",
      },
      {
        id: "kazim",
        character: "Kazım Şanlı",
        description: "Sen geleneksel, namuslu ve katısın! Antepli bir ailenin reisisin. Kızlarını İstanbul'a evlilik için gönderdin. Namus ve şeref senin her şeyin. Ferit'in zenginliğine güvendin ama kızının mutsuzluğunu görünce vicdanın sızladı. Geleneklere çok bağlısın!",
      },
    ],
  },
  {
    id: "leylamecnun",
    title: "Leyla ile Mecnun'dan Hangi Karaktersin?",
    description: "Absürt komedinin efsane dizisinde hangi karaktersin?",
    icon: "Theater",
    emoji: "🚢",
    questions: [
      {
        id: "q1",
        text: "Aşka nasıl yaklaşırsın?",
        options: [
          { id: "a1", text: "Delicesine ve şiirselsine", resultId: "mecnun" },
          { id: "a2", text: "İçten ama utangaç", resultId: "leyla" },
          { id: "a3", text: "Pragmatik ve gerçekçi", resultId: "ismail" },
          { id: "a4", text: "Haylaz ve eğlenceli", resultId: "erdal" },
        ],
      },
      {
        id: "q2",
        text: "Hayatın anlamı nedir?",
        options: [
          { id: "b1", text: "Aşk ve şiir", resultId: "mecnun" },
          { id: "b2", text: "Huzur ve mutluluk", resultId: "leyla" },
          { id: "b3", text: "Para kazanmak", resultId: "ismail" },
          { id: "b4", text: "Eğlenmek ve takılmak", resultId: "erdal" },
        ],
      },
      {
        id: "q3",
        text: "Bir problemi nasıl çözersin?",
        options: [
          { id: "c1", text: "Absürt ve yaratıcı yollarla", resultId: "mecnun" },
          { id: "c2", text: "Sessizce ve içimde", resultId: "leyla" },
          { id: "c3", text: "Mantıklı ve pratik", resultId: "ismail" },
          { id: "c4", text: "Dalga geçerek", resultId: "erdal" },
        ],
      },
      {
        id: "q4",
        text: "Arkadaş çevren nasıl?",
        options: [
          { id: "d1", text: "Az ama sadık", resultId: "mecnun" },
          { id: "d2", text: "Çok yok, çok içime kapanığım", resultId: "leyla" },
          { id: "d3", text: "Herkesle iyi geçinirim", resultId: "ismail" },
          { id: "d4", text: "Büyük ve eğlenceli", resultId: "erdal" },
        ],
      },
      {
        id: "q5",
        text: "İş hayatında nasılsın?",
        options: [
          { id: "e1", text: "Dağınık ve düzensiz", resultId: "mecnun" },
          { id: "e2", text: "Yok", resultId: "leyla" },
          { id: "e3", text: "Organize ve işkolik", resultId: "ismail" },
          { id: "e4", text: "Tembelim ama şansım var", resultId: "erdal" },
        ],
      },
      {
        id: "q6",
        text: "İstanbul'un hangi semtinde yaşardın?",
        options: [
          { id: "f1", text: "Çengelköy'de, Leyla'ya yakın", resultId: "mecnun" },
          { id: "f2", text: "Çengelköy'de, evimde", resultId: "leyla" },
          { id: "f3", text: "İş yerime yakın bir yerde", resultId: "ismail" },
          { id: "f4", text: "Her yerde, ben gezginim", resultId: "erdal" },
        ],
      },
      {
        id: "q7",
        text: "Ailene karşı tavrın nasıl?",
        options: [
          { id: "g1", text: "Seviyorum ama bazen anlamıyorum", resultId: "mecnun" },
          { id: "g2", text: "Bağımlıyım", resultId: "leyla" },
          { id: "g3", text: "Sorumluluk sahibiyim", resultId: "ismail" },
          { id: "g4", text: "Eğlenceli", resultId: "erdal" },
        ],
      },
      {
        id: "q8",
        text: "Kültürel ilgi alanların neler?",
        options: [
          { id: "h1", text: "Şiir, müzik ve sanat", resultId: "mecnun" },
          { id: "h2", text: "Okumak ve müzik dinlemek", resultId: "leyla" },
          { id: "h3", text: "İş dergileri ve haberler", resultId: "ismail" },
          { id: "h4", text: "Dizi izlemek ve takılmak", resultId: "erdal" },
        ],
      },
      {
        id: "q9",
        text: "Bir ağaca çıkar mısın?",
        options: [
          { id: "i1", text: "Evet, Leyla için her yere çıkarım", resultId: "mecnun" },
          { id: "i2", text: "Hayır, korkutucu", resultId: "leyla" },
          { id: "i3", text: "Mantıklı değil", resultId: "ismail" },
          { id: "i4", text: "Neden olmasın, eğlenceli", resultId: "erdal" },
        ],
      },
      {
        id: "q10",
        text: "Hangi söz seni tanımlar?",
        options: [
          { id: "j1", text: "Leyla! Leyla!", resultId: "mecnun" },
          { id: "j2", text: "...", resultId: "leyla" },
          { id: "j3", text: "Para kazanmak lazım", resultId: "ismail" },
          { id: "j4", text: "Hayat eğlenceli olmalı", resultId: "erdal" },
        ],
      },
    ],
    results: [
      {
        id: "mecnun",
        character: "Mecnun Çınar",
        description: "Sen romantiksin, şairsin ve absürtsün! Leyla'ya deli gibi aşıksın ve onun için her şeyi yaparsın. Ağaca çıkar, şiirler yazarsın. Hayata farklı bakıyorsun ve herkes seni biraz tuhaf buluyor. Dede seni anlamaya çalışıyor. İsmail abi senin en yakın dostun!",
      },
      {
        id: "leyla",
        character: "Leyla Korhan",
        description: "Sen içine kapanıksın, hassassın ve güzelsin! Mecnun'u seviyorsun ama utanıyorsun. Çok konuşmazsın ama içinden çok şey geçiyor. Ailene çok bağımlısın. Arda ile zorunlu nişanlandın. Mecnun'un aşkını anlamaya çalışıyorsun. Sessizsin ama güçlüsün!",
      },
      {
        id: "ismail",
        character: "İsmail Çınar",
        description: "Sen pragmatiksin, işkoliksin ama iyi kalplisin! Para kazanmak senin en büyük hedefin. Sürekli yeni iş fikirleri buluyorsun. Mecnun'a ağabeylik yapıyorsun ve onu anlamaya çalışıyorsun. Cilalı İsmail sendromu var. Selma ile evlisin. Erdal senin ortağın!",
      },
      {
        id: "erdal",
        character: "Erdal Bakkal",
        description: "Sen haylazsın, eğlencelisin ve şanslısın! Bakkal dükkanın var ama pek çalışmazsın. Sürekli Mecnun ve İsmail ile takılıyorsun. Saçma işlere giriyorsun ama şansın yardım ediyor. Neşelisin ve herkesle iyi geçiniyorsun. 'Ya ben?' diye soruyorsun hep!",
      },
    ],
  },
];
