export interface QuizOption {
  id: string;
  text: string;
  resultId: string;
}

export interface QuizQuestion {
  id: string;
  text: string;
  options: QuizOption[];
}

export interface QuizResult {
  id: string;
  character: string;
  description: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  icon: string;
  emoji: string;
  questions: QuizQuestion[];
  results: QuizResult[];
}

import { additionalQuizzes } from "./quizzes-part2";

export const quizzes: Quiz[] = [
  {
    id: "friends",
    title: "Friends'ten Hangi Karaktersin?",
    description: "Arkadaş grubunun hangi üyesi senin karakterine en yakın?",
    icon: "Coffee",
    emoji: "☕️",
    questions: [
      {
        id: "q1",
        text: "Boş vaktinde ne yapmayı seversin?",
        options: [
          { id: "a1", text: "Kahve içip arkadaşlarla sohbet etmek", resultId: "rachel" },
          { id: "a2", text: "Yemek yapmak ve yeni tarifler denemek", resultId: "monica" },
          { id: "a3", text: "Şarkı söylemek veya müzik yapmak", resultId: "phoebe" },
          { id: "a4", text: "Spor yapmak veya TV izlemek", resultId: "joey" },
        ],
      },
      {
        id: "q2",
        text: "En büyük korkun nedir?",
        options: [
          { id: "b1", text: "Yanlış kararlar vermek", resultId: "ross" },
          { id: "b2", text: "Düzensizlik ve kaos", resultId: "monica" },
          { id: "b3", text: "Sıradan bir hayat yaşamak", resultId: "phoebe" },
          { id: "b4", text: "Yalnız kalmak", resultId: "joey" },
        ],
      },
      {
        id: "q3",
        text: "İdeal bir cumartesi akşamın nasıl olurdu?",
        options: [
          { id: "c1", text: "Şık bir restoranda akşam yemeği", resultId: "rachel" },
          { id: "c2", text: "Ev temizleyip düzenli bir gece geçirmek", resultId: "monica" },
          { id: "c3", text: "Spontane bir maceraya atılmak", resultId: "phoebe" },
          { id: "c4", text: "Pizza yiyip film izlemek", resultId: "joey" },
        ],
      },
      {
        id: "q4",
        text: "Arkadaşların seni nasıl tanımlar?",
        options: [
          { id: "d1", text: "Şık ve popüler", resultId: "rachel" },
          { id: "d2", text: "Organize ve sorumluluk sahibi", resultId: "monica" },
          { id: "d3", text: "Yaratıcı ve özgür ruhlu", resultId: "phoebe" },
          { id: "d4", text: "Komik ve sevimli", resultId: "joey" },
        ],
      },
      {
        id: "q5",
        text: "Hangi kelime seni en iyi tanımlar?",
        options: [
          { id: "e1", text: "Hırslı", resultId: "rachel" },
          { id: "e2", text: "Mükemmeliyetçi", resultId: "monica" },
          { id: "e3", text: "Sanatçı", resultId: "phoebe" },
          { id: "e4", text: "Sadık", resultId: "joey" },
        ],
      },
      {
        id: "q6",
        text: "İlişkilerde en çok neye önem verirsin?",
        options: [
          { id: "f1", text: "Tutku ve romantizm", resultId: "rachel" },
          { id: "f2", text: "Güven ve istikrar", resultId: "monica" },
          { id: "f3", text: "Özgürlük ve anlayış", resultId: "phoebe" },
          { id: "f4", text: "Sadakat ve paylaşım", resultId: "joey" },
        ],
      },
      {
        id: "q7",
        text: "Bir sorunla karşılaştığında ilk tepkin ne olur?",
        options: [
          { id: "g1", text: "Analiz edip çözüm ararım", resultId: "ross" },
          { id: "g2", text: "Hemen harekete geçip düzeltirim", resultId: "monica" },
          { id: "g3", text: "Akışına bırakırım, hallolur gider", resultId: "phoebe" },
          { id: "g4", text: "Arkadaşlarımdan destek isterim", resultId: "joey" },
        ],
      },
      {
        id: "q8",
        text: "Hayalindeki tatil nereye olurdu?",
        options: [
          { id: "h1", text: "Paris'te lüks bir otel", resultId: "rachel" },
          { id: "h2", text: "Her şeyin planlandığı organize bir tur", resultId: "monica" },
          { id: "h3", text: "Keşfedilmemiş egzotik bir ada", resultId: "phoebe" },
          { id: "h4", text: "İtalya'da yemek turu", resultId: "joey" },
        ],
      },
      {
        id: "q9",
        text: "İş hayatında hangi pozisyon sana uygun?",
        options: [
          { id: "i1", text: "Moda veya PR yöneticisi", resultId: "rachel" },
          { id: "i2", text: "Şef veya organizasyon uzmanı", resultId: "monica" },
          { id: "i3", text: "Müzisyen veya sanatçı", resultId: "phoebe" },
          { id: "i4", text: "Oyuncu veya sosyal medya yöneticisi", resultId: "joey" },
        ],
      },
      {
        id: "q10",
        text: "Bir partide seni nerede buluruz?",
        options: [
          { id: "j1", text: "Merkezdeyim, herkesin dikkatini çekiyorum", resultId: "rachel" },
          { id: "j2", text: "Mutfaktayım, her şeyi kontrol ediyorum", resultId: "monica" },
          { id: "j3", text: "Köşede gitar çalıp şarkı söylüyorum", resultId: "phoebe" },
          { id: "j4", text: "Yemeklerin yanındayım, herkesle sohbet ediyorum", resultId: "joey" },
        ],
      },
    ],
    results: [
      {
        id: "rachel",
        character: "Rachel Green",
        description: "Sen şık, hırslı ve kararlısın! Hayattan ne istediğini biliyorsun ve hedeflerine ulaşmak için çok çalışıyorsun. Moda ve tarzına önem verirsin, arkadaşların seni sevimli ve destekleyici bulur.",
      },
      {
        id: "monica",
        character: "Monica Geller",
        description: "Sen organize, sorumluluk sahibi ve mükemmeliyetçisin! Her şeyin planlanmasını ve düzenli olmasını seversin. Arkadaşların seni güvenilir ve sadık biri olarak görür.",
      },
      {
        id: "phoebe",
        character: "Phoebe Buffay",
        description: "Sen özgür ruhlu, yaratıcı ve eğlencelisin! Farklı olmaktan çekinmezsin ve hayata kendine özgü bir bakış açısıyla bakarsın. Müziği ve sanatı seviyorsun.",
      },
      {
        id: "joey",
        character: "Joey Tribbiani",
        description: "Sen sevimli, sadık ve komiksin! Yemek yemeyi ve arkadaşlarınla vakit geçirmeyi çok seversin. Saf kalbin ve pozitif enerjinle herkesi mutlu edersin.",
      },
      {
        id: "ross",
        character: "Ross Geller",
        description: "Sen zeki, tutkulu ve bazen aşırı düşünüyorsun! Bilimi ve tarihi seviyorsun. Arkadaşların seni biraz garip ama çok sevimli bulur.",
      },
    ],
  },
  {
    id: "got",
    title: "Game of Thrones'tan Hangi Karaktersin?",
    description: "Westeros'un hangi kahramanının ruhunu taşıyorsun?",
    icon: "Sword",
    emoji: "⚔️",
    questions: [
      {
        id: "q1",
        text: "Bir krize nasıl yaklaşırsın?",
        options: [
          { id: "a1", text: "Stratejik düşünür ve planlarım", resultId: "tyrion" },
          { id: "a2", text: "Güç ve kararlılıkla çözerim", resultId: "daenerys" },
          { id: "a3", text: "Onur ve doğruluk yolunu seçerim", resultId: "jon" },
          { id: "a4", text: "Zekamı ve bilgimi kullanırım", resultId: "sansa" },
        ],
      },
      {
        id: "q2",
        text: "En önemli değerin nedir?",
        options: [
          { id: "b1", text: "Aile", resultId: "sansa" },
          { id: "b2", text: "Adalet", resultId: "daenerys" },
          { id: "b3", text: "Onur", resultId: "jon" },
          { id: "b4", text: "Bilgi", resultId: "tyrion" },
        ],
      },
      {
        id: "q3",
        text: "İdeal bir lider nasıl olmalı?",
        options: [
          { id: "c1", text: "Adaletli ve merhametli", resultId: "daenerys" },
          { id: "c2", text: "Zeki ve stratejik", resultId: "tyrion" },
          { id: "c3", text: "Cesur ve fedakar", resultId: "jon" },
          { id: "c4", text: "Güçlü ve kararlı", resultId: "sansa" },
        ],
      },
      {
        id: "q4",
        text: "Hangi silah senin favorin?",
        options: [
          { id: "d1", text: "Zeka ve diplomasi", resultId: "tyrion" },
          { id: "d2", text: "Güç ve cesaret", resultId: "daenerys" },
          { id: "d3", text: "Kılıç ve onur", resultId: "jon" },
          { id: "d4", text: "Sabır ve strateji", resultId: "sansa" },
        ],
      },
      {
        id: "q5",
        text: "En büyük hedefin nedir?",
        options: [
          { id: "e1", text: "Dünyayı değiştirmek", resultId: "daenerys" },
          { id: "e2", text: "Ailemi korumak", resultId: "sansa" },
          { id: "e3", text: "Doğru olanı yapmak", resultId: "jon" },
          { id: "e4", text: "Hayatta kalmak ve gelişmek", resultId: "tyrion" },
        ],
      },
      {
        id: "q6",
        text: "Bir savaşta hangi rolü üstlenirdin?",
        options: [
          { id: "f1", text: "Komutan, savaşı yönlendiren", resultId: "daenerys" },
          { id: "f2", text: "Stratejist, planları yapan", resultId: "tyrion" },
          { id: "f3", text: "Savaşçı, ön saflarda savaşan", resultId: "jon" },
          { id: "f4", text: "Diplomat, ittifaklar kuran", resultId: "sansa" },
        ],
      },
      {
        id: "q7",
        text: "İhanet eden birine nasıl davranırsın?",
        options: [
          { id: "g1", text: "Affetmem, intikam alırım", resultId: "daenerys" },
          { id: "g2", text: "Durumu analiz eder, en mantıklı adımı atarım", resultId: "tyrion" },
          { id: "g3", text: "Onuruma yakışanı yaparım", resultId: "jon" },
          { id: "g4", text: "Öğrenirim ve bir daha güvenmem", resultId: "sansa" },
        ],
      },
      {
        id: "q8",
        text: "Güç ile merhamet arasında seçim yapman gerekse?",
        options: [
          { id: "h1", text: "Güç, ama adaletli kullanırım", resultId: "daenerys" },
          { id: "h2", text: "Her ikisinin dengesini kurarım", resultId: "tyrion" },
          { id: "h3", text: "Merhamet, ama gerekirse güç kullanırım", resultId: "jon" },
          { id: "h4", text: "Duruma göre değişir, stratejik davranırım", resultId: "sansa" },
        ],
      },
      {
        id: "q9",
        text: "En büyük zayıflığın nedir?",
        options: [
          { id: "i1", text: "Aşırı idealistim", resultId: "daenerys" },
          { id: "i2", text: "Çok düşünürüm", resultId: "tyrion" },
          { id: "i3", text: "Çok merhametliyim", resultId: "jon" },
          { id: "i4", text: "Güvenmekte zorlanırım", resultId: "sansa" },
        ],
      },
      {
        id: "q10",
        text: "Westeros'u nasıl yönetirdin?",
        options: [
          { id: "j1", text: "Ezilenleri kurtarır, zalimleri cezalandırırım", resultId: "daenerys" },
          { id: "j2", text: "Akıllıca kanunlar yapar, diplomasiyi kullanırım", resultId: "tyrion" },
          { id: "j3", text: "Herkes için adil ve onurlu bir düzen kurarım", resultId: "jon" },
          { id: "j4", text: "Kuzey'i önce korur, sonra genişletirim", resultId: "sansa" },
        ],
      },
    ],
    results: [
      {
        id: "tyrion",
        character: "Tyrion Lannister",
        description: "Sen zeki, kurnaz ve mizah duygun güçlü! Kitapları ve şarabı seversin. Fiziksel güce değil zekaya güvenirsin ve en zor durumlardan bile çıkış yolu bulursun.",
      },
      {
        id: "daenerys",
        character: "Daenerys Targaryen",
        description: "Sen güçlü, kararlı ve adalet duygun yüksek! Ezilenler için savaşırsın ve hedeflerine ulaşmak için her şeyi göze alırsın. Doğal bir lider olma yeteneğin var.",
      },
      {
        id: "jon",
        character: "Jon Snow",
        description: "Sen onurlu, cesur ve fedakarsın! Doğru olanı yapmak için her şeyi göze alırsın. Bazen melankolik olsan da, insanlar senin dürüstlüğüne güvenir.",
      },
      {
        id: "sansa",
        character: "Sansa Stark",
        description: "Sen güçlü, dayanıklı ve stratejiksin! Hayatın zorluklarından güçlenerek çıktın. Ailene sadıksın ve liderlik vasıfların zamanla gelişti.",
      },
    ],
  },
  {
    id: "hp",
    title: "Harry Potter'dan Hangi Karaktersin?",
    description: "Hogwarts'ın hangi öğrencisine benziyorsun?",
    icon: "Sparkles",
    emoji: "✨",
    questions: [
      {
        id: "q1",
        text: "Hangi ders senin favorin olurdu?",
        options: [
          { id: "a1", text: "İksir Yapımı", resultId: "hermione" },
          { id: "a2", text: "Karanlık Sanatlara Karşı Savunma", resultId: "harry" },
          { id: "a3", text: "Çeşni Dersleri", resultId: "ron" },
          { id: "a4", text: "Büyücülük Tarihi", resultId: "hermione" },
        ],
      },
      {
        id: "q2",
        text: "En önemli özelliğin nedir?",
        options: [
          { id: "b1", text: "Cesaret", resultId: "harry" },
          { id: "b2", text: "Zeka", resultId: "hermione" },
          { id: "b3", text: "Sadakat", resultId: "ron" },
          { id: "b4", text: "Liderlik", resultId: "harry" },
        ],
      },
      {
        id: "q3",
        text: "Bir problemi nasıl çözersin?",
        options: [
          { id: "c1", text: "Kitaplarda araştırırım", resultId: "hermione" },
          { id: "c2", text: "İçgüdülerime güvenirim", resultId: "harry" },
          { id: "c3", text: "Arkadaşlarımdan yardım isterim", resultId: "ron" },
          { id: "c4", text: "Yaratıcı çözümler bulurum", resultId: "hermione" },
        ],
      },
      {
        id: "q4",
        text: "İdeal bir gün nasıl geçer?",
        options: [
          { id: "d1", text: "Kütüphanede okuyarak", resultId: "hermione" },
          { id: "d2", text: "Quidditch oynayarak", resultId: "harry" },
          { id: "d3", text: "Arkadaşlarla vakit geçirerek", resultId: "ron" },
          { id: "d4", text: "Yeni büyüler öğrenerek", resultId: "harry" },
        ],
      },
      {
        id: "q5",
        text: "En büyük korkun nedir?",
        options: [
          { id: "e1", text: "Başarısız olmak", resultId: "hermione" },
          { id: "e2", text: "Sevdiklerimi kaybetmek", resultId: "harry" },
          { id: "e3", text: "Yalnız kalmak", resultId: "ron" },
          { id: "e4", text: "Karanlık büyü", resultId: "harry" },
        ],
      },
      {
        id: "q6",
        text: "Hangi Hogwarts binası sana uygun?",
        options: [
          { id: "f1", text: "Gryffindor - Cesaret ve kahramanlık", resultId: "harry" },
          { id: "f2", text: "Ravenclaw - Zeka ve bilgi", resultId: "hermione" },
          { id: "f3", text: "Hufflepuff - Sadakat ve çalışkanlık", resultId: "ron" },
          { id: "f4", text: "Gryffindor - Macera ve heyecan", resultId: "harry" },
        ],
      },
      {
        id: "q7",
        text: "Voldemort ile karşılaşsan ne yapardın?",
        options: [
          { id: "g1", text: "Tüm bilgimi kullanıp savunma büyüsü yaparım", resultId: "hermione" },
          { id: "g2", text: "Cesurca karşı koyarım", resultId: "harry" },
          { id: "g3", text: "Arkadaşlarımı korumaya çalışırım", resultId: "ron" },
          { id: "g4", text: "Stratejik düşünür, kaçış planı yaparım", resultId: "hermione" },
        ],
      },
      {
        id: "q8",
        text: "Sınavlara nasıl hazırlanırsın?",
        options: [
          { id: "h1", text: "Haftalarca önceden planlı çalışırım", resultId: "hermione" },
          { id: "h2", text: "Pratik yaparak ve deneyerek öğrenirim", resultId: "harry" },
          { id: "h3", text: "Son gün tıkıştırırım, ama hallederim", resultId: "ron" },
          { id: "h4", text: "Notları düzenli tutup sistematik çalışırım", resultId: "hermione" },
        ],
      },
      {
        id: "q9",
        text: "Hangi büyülü yaratık senin patronusun olurdu?",
        options: [
          { id: "i1", text: "Su samuru - Koruyucu ve sevecen", resultId: "hermione" },
          { id: "i2", text: "Geyik - Cesur ve güçlü", resultId: "harry" },
          { id: "i3", text: "Terrier - Sadık ve arkadaş canlısı", resultId: "ron" },
          { id: "i4", text: "Kartal - Özgür ve zeki", resultId: "hermione" },
        ],
      },
      {
        id: "q10",
        text: "Hogsmeade'de en sevdiğin mekan neresi olurdu?",
        options: [
          { id: "j1", text: "Flourish and Blotts - Kitapçı", resultId: "hermione" },
          { id: "j2", text: "Zonko's - Şaka malzemeleri dükkanı", resultId: "harry" },
          { id: "j3", text: "Three Broomsticks - Pub", resultId: "ron" },
          { id: "j4", text: "Honeydukes - Şekerleme dükkanı", resultId: "ron" },
        ],
      },
    ],
    results: [
      {
        id: "harry",
        character: "Harry Potter",
        description: "Sen cesur, kararlı ve lider ruhlusun! Zorluklarla yüzleşmekten çekinmezsin ve sevdiklerin için her şeyi göze alırsın. İnsanlar senin cesaretine hayran kalır.",
      },
      {
        id: "hermione",
        character: "Hermione Granger",
        description: "Sen zeki, çalışkan ve sorumluluk sahibisin! Kitapları seversin ve her zaman en doğru cevabı ararsın. Arkadaşların seni akıllı ve güvenilir bulur.",
      },
      {
        id: "ron",
        character: "Ron Weasley",
        description: "Sen sadık, komik ve samimi birisin! Arkadaşlarını çok seversin ve onlar için her şeyi yaparsın. Bazen kendine güvenmekte zorlansan da, gerçek bir kahramansın.",
      },
    ],
  },
  {
    id: "stranger",
    title: "Stranger Things'ten Hangi Karaktersin?",
    description: "Hawkins çetesinin hangi üyesisin?",
    icon: "Zap",
    emoji: "⚡️",
    questions: [
      {
        id: "q1",
        text: "Paranormal bir olayla karşılaşsan ne yapardın?",
        options: [
          { id: "a1", text: "Bilimsel açıklamalar arardım", resultId: "dustin" },
          { id: "a2", text: "Hemen arkadaşlarımı uyarırdım", resultId: "mike" },
          { id: "a3", text: "Gizemli güçlerimi kullanırdım", resultId: "eleven" },
          { id: "a4", text: "Cesurca yüzleşirdim", resultId: "steve" },
        ],
      },
      {
        id: "q2",
        text: "En sevdiğin aktivite nedir?",
        options: [
          { id: "b1", text: "D&D oynamak", resultId: "mike" },
          { id: "b2", text: "Radyo ile iletişim kurmak", resultId: "dustin" },
          { id: "b3", text: "Sakin bir yerde düşünmek", resultId: "eleven" },
          { id: "b4", text: "Arkadaşlarıma göz kulak olmak", resultId: "steve" },
        ],
      },
      {
        id: "q3",
        text: "Bir liderin en önemli özelliği nedir?",
        options: [
          { id: "c1", text: "Stratejik düşünme", resultId: "mike" },
          { id: "c2", text: "Bilgi ve zeka", resultId: "dustin" },
          { id: "c3", text: "Güç ve kararlılık", resultId: "eleven" },
          { id: "c4", text: "Koruyuculuk", resultId: "steve" },
        ],
      },
      {
        id: "q4",
        text: "En büyük gücün nedir?",
        options: [
          { id: "d1", text: "Zekam", resultId: "dustin" },
          { id: "d2", text: "Liderlik yeteneğim", resultId: "mike" },
          { id: "d3", text: "İçimdeki güç", resultId: "eleven" },
          { id: "d4", text: "Sadakatim", resultId: "steve" },
        ],
      },
      {
        id: "q5",
        text: "İdeal bir arkadaşlık nasıl olmalı?",
        options: [
          { id: "e1", text: "Birbirimize güvenmeliyiz", resultId: "mike" },
          { id: "e2", text: "Birlikte her şeyin üstesinden gelmeliyiz", resultId: "steve" },
          { id: "e3", text: "Birbirimizi olduğumuz gibi kabul etmeliyiz", resultId: "eleven" },
          { id: "e4", text: "Eğlenceli ve destekleyici olmalı", resultId: "dustin" },
        ],
      },
      {
        id: "q6",
        text: "Upside Down'da kaybolsan ilk ne yapardın?",
        options: [
          { id: "f1", text: "Bir kaçış planı yapardım", resultId: "mike" },
          { id: "f2", text: "Radyoyla yardım çağırırdım", resultId: "dustin" },
          { id: "f3", text: "Güçlerimi kullanıp çıkış arardım", resultId: "eleven" },
          { id: "f4", text: "Sakin kalıp güvenli bir yer bulurdum", resultId: "steve" },
        ],
      },
      {
        id: "q7",
        text: "Hawkins Laboratuvarı'nda ne yapardın?",
        options: [
          { id: "g1", text: "Planı organize eder, ekibi yönetirdim", resultId: "mike" },
          { id: "g2", text: "Teknolojik cihazları inceleyip hack'lerdim", resultId: "dustin" },
          { id: "g3", text: "Telekinetik güçlerle kapıları açardım", resultId: "eleven" },
          { id: "g4", text: "Gruba gözcülük yapar, korudum", resultId: "steve" },
        ],
      },
      {
        id: "q8",
        text: "Mind Flayer'a karşı hangi silahı kullanırdın?",
        options: [
          { id: "h1", text: "Stratejik bir plan ve takım çalışması", resultId: "mike" },
          { id: "h2", text: "Bilim ve teknoloji", resultId: "dustin" },
          { id: "h3", text: "Telekinetik güçlerim", resultId: "eleven" },
          { id: "h4", text: "Cesaret ve beyzbol sopam", resultId: "steve" },
        ],
      },
      {
        id: "q9",
        text: "1980'lerde yaşamak nasıl olurdu senin için?",
        options: [
          { id: "i1", text: "D&D ve arkadaşlarımla harika!", resultId: "mike" },
          { id: "i2", text: "Vintage teknoloji cennet!", resultId: "dustin" },
          { id: "i3", text: "Daha basit, daha sakin bir hayat", resultId: "eleven" },
          { id: "i4", text: "Retro müzik ve moda harika olurdu", resultId: "steve" },
        ],
      },
      {
        id: "q10",
        text: "Starcourt Mall'da hangi dükkan senin favorin olurdu?",
        options: [
          { id: "j1", text: "Arcade - Oyun salonu", resultId: "mike" },
          { id: "j2", text: "Radio Shack - Elektronik mağazası", resultId: "dustin" },
          { id: "j3", text: "Gap - Basit ve rahat kıyafetler", resultId: "eleven" },
          { id: "j4", text: "Scoops Ahoy - Dondurma dükkanı", resultId: "steve" },
        ],
      },
    ],
    results: [
      {
        id: "mike",
        character: "Mike Wheeler",
        description: "Sen sadık, stratejik ve lider ruhlusun! Arkadaşların senin rehberliğine güvenir. Planlar yapmayı ve herkesi bir arada tutmayı seversin.",
      },
      {
        id: "dustin",
        character: "Dustin Henderson",
        description: "Sen neşeli, zeki ve meraklısın! Bilim ve teknoloji tutkunu olan sen, her zaman eğlenceli fikirlerle ortaya çıkarsın. Pozitif enerjinle herkesi mutlu edersin.",
      },
      {
        id: "eleven",
        character: "Eleven",
        description: "Sen güçlü, gizemli ve kararlısın! İçinde büyük bir güç taşıyorsun ve sevdiklerin için her şeyi göze alırsın. Bazen yalnız hissedebilirsin ama gerçek gücün dostluklarında.",
      },
      {
        id: "steve",
        character: "Steve Harrington",
        description: "Sen koruyucu, sadık ve cesursun! Başta soğuk görünsen de, aslında içten ve arkadaşların için her şeyi yapabilecek kadar fedakarsın. Anne baba gibsin!",
      },
    ],
  },
  {
    id: "office",
    title: "The Office'ten Hangi Karaktersin?",
    description: "Dunder Mifflin'in hangi çalışanısın?",
    icon: "Briefcase",
    emoji: "📋",
    questions: [
      {
        id: "q1",
        text: "İş yerinde nasıl birisin?",
        options: [
          { id: "a1", text: "Hırslı ve yarışmacı", resultId: "dwight" },
          { id: "a2", text: "Sakin ve komik", resultId: "jim" },
          { id: "a3", text: "Organizasyon kuruyorum", resultId: "angela" },
          { id: "a4", text: "Herkesle iyi geçiniyorum", resultId: "pam" },
        ],
      },
      {
        id: "q2",
        text: "Boş vaktinde ne yaparsın?",
        options: [
          { id: "b1", text: "Hobi işlerimle uğraşırım", resultId: "dwight" },
          { id: "b2", text: "Arkadaşlarla takılırım", resultId: "jim" },
          { id: "b3", text: "Planlar yaparım", resultId: "angela" },
          { id: "b4", text: "Sanat ve yaratıcılıkla ilgilenirim", resultId: "pam" },
        ],
      },
      {
        id: "q3",
        text: "Mizah anlayışın nasıl?",
        options: [
          { id: "c1", text: "Ciddi ve katı", resultId: "dwight" },
          { id: "c2", text: "Şakacı ve alaycı", resultId: "jim" },
          { id: "c3", text: "İnce ve zarif", resultId: "angela" },
          { id: "c4", text: "Sevimli ve içten", resultId: "pam" },
        ],
      },
      {
        id: "q4",
        text: "İdeal bir patron nasıl olmalı?",
        options: [
          { id: "d1", text: "Disiplinli ve ciddi", resultId: "dwight" },
          { id: "d2", text: "Rahat ve eğlenceli", resultId: "jim" },
          { id: "d3", text: "Kuralcı ve düzenli", resultId: "angela" },
          { id: "d4", text: "Destekleyici ve anlayışlı", resultId: "pam" },
        ],
      },
      {
        id: "q5",
        text: "En önemli değerin nedir?",
        options: [
          { id: "e1", text: "Başarı ve güç", resultId: "dwight" },
          { id: "e2", text: "Özgürlük ve eğlence", resultId: "jim" },
          { id: "e3", text: "Düzen ve disiplin", resultId: "angela" },
          { id: "e4", text: "Dostluk ve samimiyet", resultId: "pam" },
        ],
      },
      {
        id: "q6",
        text: "Ofiste bir kriz çıksa ne yapardın?",
        options: [
          { id: "f1", text: "Liderliği ele alır, talimatlar veririm", resultId: "dwight" },
          { id: "f2", text: "Espri yapar, gerginliği azaltırım", resultId: "jim" },
          { id: "f3", text: "Prosedürlere uyulmasını sağlarım", resultId: "angela" },
          { id: "f4", text: "Herkesi sakinleştirir, arabuluculuk yaparım", resultId: "pam" },
        ],
      },
      {
        id: "q7",
        text: "Michael Scott hakkında ne düşünürsün?",
        options: [
          { id: "g1", text: "Bir gün onun yerini alacağım", resultId: "dwight" },
          { id: "g2", text: "Eğlenceli ama bazen dayanılmaz", resultId: "jim" },
          { id: "g3", text: "Profesyonel değil ama iyi niyetli", resultId: "angela" },
          { id: "g4", text: "Bazen sıkıcı ama aslında iyi kalpli", resultId: "pam" },
        ],
      },
      {
        id: "q8",
        text: "Terfi teklifi alsan ama başka şehre taşınman gerekse?",
        options: [
          { id: "h1", text: "Hemen kabul ederim, kariyer her şeyden önemli", resultId: "dwight" },
          { id: "h2", text: "İyi düşünürüm, belki daha iyisi vardır", resultId: "jim" },
          { id: "h3", text: "Tüm artı eksileri listeler, analiz yaparım", resultId: "angela" },
          { id: "h4", text: "Reddederim, ailem ve dostlarım burada", resultId: "pam" },
        ],
      },
      {
        id: "q9",
        text: "Ofis partisinde ne yaparsın?",
        options: [
          { id: "i1", text: "Partinin sorumlusuyum, her şeyi organize ederim", resultId: "dwight" },
          { id: "i2", text: "Şakalar yapar, eğlenceyi doruğa çıkarırım", resultId: "jim" },
          { id: "i3", text: "Protokolü izler, kurallardan sapmam", resultId: "angela" },
          { id: "i4", text: "Dekorasyonu halleder, herkesle sohbet ederim", resultId: "pam" },
        ],
      },
      {
        id: "q10",
        text: "Dunder Mifflin'de hangi departmanda çalışmak isterdin?",
        options: [
          { id: "j1", text: "Satış - Rekabet ve başarı", resultId: "dwight" },
          { id: "j2", text: "Satış - Kolay iş, iyi para", resultId: "jim" },
          { id: "j3", text: "Muhasebe - Düzen ve kurallar", resultId: "angela" },
          { id: "j4", text: "Resepsiyon - İnsanlarla iletişim", resultId: "pam" },
        ],
      },
    ],
    results: [
      {
        id: "dwight",
        character: "Dwight Schrute",
        description: "Sen ciddi, hırslı ve kararlısın! İşine tutkuyla bağlısın ve her zaman en iyisi olmak için çalışırsın. Biraz garip olabilirsin ama aslında sadık bir arkadaşsın.",
      },
      {
        id: "jim",
        character: "Jim Halpert",
        description: "Sen sakin, komik ve akıllısın! Şakalar yapmayı ve hayatı hafife almayı seversin. Arkadaşların seni eğlenceli ve güvenilir bulur.",
      },
      {
        id: "angela",
        character: "Angela Martin",
        description: "Sen düzenli, kuralcı ve mükemmeliyetçisin! Her şeyin yerli yerinde olmasını seversin. Biraz katı görünebilirsin ama aslında çok hassas bir kalbin var.",
      },
      {
        id: "pam",
        character: "Pam Beesly",
        description: "Sen sevecen, yaratıcı ve sakinsin! Sanat ve yaratıcılığa ilgi duyuyorsun. İnsanlar senin içtenliğine ve dostluğuna değer verir.",
      },
    ],
  },
  {
    id: "breakingbad",
    title: "Breaking Bad'den Hangi Karaktersin?",
    description: "Albuquerque'nin hangi karakteri senin ruhunu yansıtıyor?",
    icon: "Flask",
    emoji: "🧪",
    questions: [
      {
        id: "q1",
        text: "Zor bir kararla karşı karşıyaykasın, ne yaparsın?",
        options: [
          { id: "a1", text: "Mantıklı düşünür, risk-fayda analizi yaparım", resultId: "walter" },
          { id: "a2", text: "İçgüdülerime güvenirim", resultId: "jesse" },
          { id: "a3", text: "Yasal yolları araştırırım", resultId: "hank" },
          { id: "a4", text: "Soğukkanlı ve stratejik davranırım", resultId: "gus" },
        ],
      },
      {
        id: "q2",
        text: "En önemli motivasyonun nedir?",
        options: [
          { id: "b1", text: "Ailemi korumak", resultId: "walter" },
          { id: "b2", text: "Özgür olmak", resultId: "jesse" },
          { id: "b3", text: "Adaleti sağlamak", resultId: "hank" },
          { id: "b4", text: "Kontrol ve güç", resultId: "gus" },
        ],
      },
      {
        id: "q3",
        text: "Bir iş ortağında ne ararsın?",
        options: [
          { id: "c1", text: "Yetenek ve güvenilirlik", resultId: "walter" },
          { id: "c2", text: "Sadakat ve dostluk", resultId: "jesse" },
          { id: "c3", text: "Dürüstlük ve integritet", resultId: "hank" },
          { id: "c4", text: "Disiplin ve profesyonellik", resultId: "gus" },
        ],
      },
      {
        id: "q4",
        text: "Stresli durumlarda nasıl tepki verirsin?",
        options: [
          { id: "d1", text: "Planlarım ve çözüm üretirim", resultId: "walter" },
          { id: "d2", text: "Duygusal olur, ama sonra toparlanırım", resultId: "jesse" },
          { id: "d3", text: "Hemen harekete geçerim", resultId: "hank" },
          { id: "d4", text: "Sakin kalır, durumu kontrol altına alırım", resultId: "gus" },
        ],
      },
      {
        id: "q5",
        text: "Hangi söz seni en iyi tanımlar?",
        options: [
          { id: "e1", text: "Bilim ve mantık her şeyin temelidir", resultId: "walter" },
          { id: "e2", text: "Herkes ikinci şansı hak eder", resultId: "jesse" },
          { id: "e3", text: "Doğru olanı yapmak her zaman en iyisidir", resultId: "hank" },
          { id: "e4", text: "Sabır ve disiplin başarının anahtarıdır", resultId: "gus" },
        ],
      },
      {
        id: "q6",
        text: "Bir laboratuvarda çalışsan ne yapardın?",
        options: [
          { id: "f1", text: "En mükemmel ürünü yaratmak için çalışırım", resultId: "walter" },
          { id: "f2", text: "İşi halleder, kimseye zarar vermemeye çalışırım", resultId: "jesse" },
          { id: "f3", text: "Yasalara uygun iş yaparım", resultId: "hank" },
          { id: "f4", text: "Sistematik ve profesyonel çalışırım", resultId: "gus" },
        ],
      },
      {
        id: "q7",
        text: "En büyük pişmanlığın ne olurdu?",
        options: [
          { id: "g1", text: "Gururum yüzünden yardım istememek", resultId: "walter" },
          { id: "g2", text: "Yanlış insanlara güvenmek", resultId: "jesse" },
          { id: "g3", text: "İşahane yerine gönül koymak", resultId: "hank" },
          { id: "g4", text: "Duygusal davranıp planı bozmak", resultId: "gus" },
        ],
      },
      {
        id: "q8",
        text: "Kimya bilgini nerede kullanırdın?",
        options: [
          { id: "h1", text: "Öğretmen olur, gençlere aktarırım", resultId: "walter" },
          { id: "h2", text: "Yaratıcı işlerde, sanat gibi", resultId: "jesse" },
          { id: "h3", text: "Adli bilimde, suçluları yakalamada", resultId: "hank" },
          { id: "h4", text: "İş dünyasında, karlı projelerde", resultId: "gus" },
        ],
      },
      {
        id: "q9",
        text: "New Mexico çölünde ne yapardın?",
        options: [
          { id: "i1", text: "İzole bir yer, çalışmak için ideal", resultId: "walter" },
          { id: "i2", text: "Özgürlük hissi veriyor, rahatlatıcı", resultId: "jesse" },
          { id: "i3", text: "İzleme ve operasyon için stratejik", resultId: "hank" },
          { id: "i4", text: "İş yeri, her şey kontrol altında", resultId: "gus" },
        ],
      },
      {
        id: "q10",
        text: "Hayatında en önemli şey nedir?",
        options: [
          { id: "j1", text: "Mirası ve saygınlığım", resultId: "walter" },
          { id: "j2", text: "Özgürlük ve huzur bulmak", resultId: "jesse" },
          { id: "j3", text: "Doğru olanı yapmak ve adalet", resultId: "hank" },
          { id: "j4", text: "İmparatorluk kurmak ve kontrol", resultId: "gus" },
        ],
      },
    ],
    results: [
      {
        id: "walter",
        character: "Walter White",
        description: "Sen zeki, stratejik ve kararlısın! Kimya bilgine güveniyorsun ve her zaman bir plan yapıyorsun. Ailene derinden bağlısın ve onları korumak için her şeyi göze alırsın. Bazen egon seni ele veriyor olsa da, yeteneklerin inkar edilemez.",
      },
      {
        id: "jesse",
        character: "Jesse Pinkman",
        description: "Sen duygusal, sadık ve vicdanlısın! İyi bir kalbin var ve yaptığın hataların farkındasın. Özgürlüğüne düşkünsün ve sevdiklerin için her şeyi yapabilirsin. Hayatın zorlukları seni güçlendirdi.",
      },
      {
        id: "hank",
        character: "Hank Schrader",
        description: "Sen cesur, dürüst ve kararlısın! Adalet duygun güçlü ve doğru olanı yapmak için her şeyi göze alırsın. Ailene sadıksın ve işini ciddiye alıyorsun. Mizah duygun sayesinde zor anları atlatırsın.",
      },
      {
        id: "gus",
        character: "Gustavo Fring",
        description: "Sen sakin, stratejik ve disiplinlisin! Her zaman kontrollü ve profesyonelsin. Sabır ve planlama senin en büyük silahın. Dışarıdan normal görünürken, içinde büyük bir kararlılık taşıyorsun.",
      },
    ],
  },
  {
    id: "wednesday",
    title: "Wednesday'den Hangi Karaktersin?",
    description: "Nevermore Academy'nin hangi öğrencisisin?",
    icon: "Ghost",
    emoji: "🕷️",
    questions: [
      {
        id: "q1",
        text: "Sosyal etkileşimlerden nasıl keyif alırsın?",
        options: [
          { id: "a1", text: "Almam, yalnızlığı tercih ederim", resultId: "wednesday" },
          { id: "a2", text: "Yakın arkadaşlarımla kaliteli vakit geçiririm", resultId: "enid" },
          { id: "a3", text: "Herkesin merkezinde olmayı severim", resultId: "bianca" },
          { id: "a4", text: "Sakin ve romantik anları severim", resultId: "xavier" },
        ],
      },
      {
        id: "q2",
        text: "Bir gizemi nasıl çözersin?",
        options: [
          { id: "b1", text: "Mantıklı düşünür, ipuçlarını analiz ederim", resultId: "wednesday" },
          { id: "b2", text: "Arkadaşlarımdan yardım alırım", resultId: "enid" },
          { id: "b3", text: "Yeteneklerimi kullanırım", resultId: "bianca" },
          { id: "b4", text: "Sezgilerime güvenirim", resultId: "xavier" },
        ],
      },
      {
        id: "q3",
        text: "En önemli değerin nedir?",
        options: [
          { id: "c1", text: "Özgünlük ve bağımsızlık", resultId: "wednesday" },
          { id: "c2", text: "Dostluk ve sadakat", resultId: "enid" },
          { id: "c3", text: "Güç ve kontrol", resultId: "bianca" },
          { id: "c4", text: "Sanat ve yaratıcılık", resultId: "xavier" },
        ],
      },
      {
        id: "q4",
        text: "Boş vaktinde ne yaparsın?",
        options: [
          { id: "d1", text: "Karanlık romanlar okur, çello çalarım", resultId: "wednesday" },
          { id: "d2", text: "Renkli kıyafetler tasarlar, blog yazarım", resultId: "enid" },
          { id: "d3", text: "Yeteneklerimi geliştiririm", resultId: "bianca" },
          { id: "d4", text: "Resim yapar, sanat üretirim", resultId: "xavier" },
        ],
      },
      {
        id: "q5",
        text: "Hangi kelime seni tanımlar?",
        options: [
          { id: "e1", text: "Karanlık", resultId: "wednesday" },
          { id: "e2", text: "Neşeli", resultId: "enid" },
          { id: "e3", text: "Güçlü", resultId: "bianca" },
          { id: "e4", text: "Sanatçı", resultId: "xavier" },
        ],
      },
      {
        id: "q6",
        text: "Nevermore'da hangi yeteneğe sahip olmak isterdin?",
        options: [
          { id: "f1", text: "Psişik görüler", resultId: "wednesday" },
          { id: "f2", text: "Kurt dönüşümü", resultId: "enid" },
          { id: "f3", text: "Denizkızı güçleri", resultId: "bianca" },
          { id: "f4", text: "Resimlerimi canlandırmak", resultId: "xavier" },
        ],
      },
      {
        id: "q7",
        text: "Bir tehditle karşılaşsan ne yapardın?",
        options: [
          { id: "g1", text: "Soğukkanlı kalır, stratejik hareket ederim", resultId: "wednesday" },
          { id: "g2", text: "Arkadaşlarımla birlikte hareket ederim", resultId: "enid" },
          { id: "g3", text: "Güçlerimi kullanarak domine ederim", resultId: "bianca" },
          { id: "g4", text: "Yaratıcı çözümler bulurum", resultId: "xavier" },
        ],
      },
      {
        id: "q8",
        text: "Aşk hayatında nasılsın?",
        options: [
          { id: "h1", text: "Duygularımı ifade etmekte zorlanırım", resultId: "wednesday" },
          { id: "h2", text: "Romantik ve tutkulu", resultId: "enid" },
          { id: "h3", text: "İlişkileri kontrol etmeyi severim", resultId: "bianca" },
          { id: "h4", text: "Sanatımla aşkımı ifade ederim", resultId: "xavier" },
        ],
      },
      {
        id: "q9",
        text: "Moda tarzın nasıl?",
        options: [
          { id: "i1", text: "Tamamen siyah, gotik", resultId: "wednesday" },
          { id: "i2", text: "Renkli, çılgın ve eğlenceli", resultId: "enid" },
          { id: "i3", text: "Şık, gösterişli ve pahalı", resultId: "bianca" },
          { id: "i4", text: "Sanatçı ve bohem", resultId: "xavier" },
        ],
      },
      {
        id: "q10",
        text: "Ailenle ilişkin nasıl?",
        options: [
          { id: "j1", text: "Karmaşık, mesafeli", resultId: "wednesday" },
          { id: "j2", text: "Sevgi dolu ve destekleyici", resultId: "enid" },
          { id: "j3", text: "Baskıcı ve beklenti dolu", resultId: "bianca" },
          { id: "j4", text: "Anlaşılmama duygusu yaşarım", resultId: "xavier" },
        ],
      },
    ],
    results: [
      {
        id: "wednesday",
        character: "Wednesday Addams",
        description: "Sen karanlık, zeki ve gizemlisin! Yalnızlığı tercih edersin ve toplumsal normlara uymaktan hoşlanmazsın. Keskin zekan ve analitik düşünce tarzınla her zaman bir adım öndesin. Duygularını göstermekte zorlansan da, gerçek dostlarına sadıksın.",
      },
      {
        id: "enid",
        character: "Enid Sinclair",
        description: "Sen neşeli, renkli ve enerjiksin! Dostlukları çok önemsersin ve herkesle iyi geçinmeye çalışırsın. Optimist bakış açın ve pozitif enerjinle çevreni aydınlatırsın. Kurt dönüşümün gibi, içindeki güçlü yanını keşfetmeye başlıyorsun.",
      },
      {
        id: "bianca",
        character: "Bianca Barclay",
        description: "Sen güçlü, kararlı ve rekabetçisin! Liderlik vasıfların güçlü ve kontrolü elinde tutmayı seversin. Yeteneklerine güveniyorsun ancak zamanla zayıf yanlarını da gösterebiliyorsun. Ailen seni baskı altında tutsa da kendi yolunu çiziyorsun.",
      },
      {
        id: "xavier",
        character: "Xavier Thorpe",
        description: "Sen sanatçı ruhlu, duygusal ve yeteneklisin! Resim yaparak duygularını ifade edersin ve sezgilerin güçlüdür. Bazen yanlış anlaşılsan da, iyi niyetlisin. Ailenin gölgesinden çıkmaya çalışıyorsun ve kendi kimliğini arıyorsun.",
      },
    ],
  },
  {
    id: "squidgame",
    title: "Squid Game'den Hangi Karaktersin?",
    description: "Hayatta kalma oyunlarında hangi karakter sensin?",
    icon: "Target",
    emoji: "🟥",
    questions: [
      {
        id: "q1",
        text: "Hayatta kalmak için ne yaparsın?",
        options: [
          { id: "a1", text: "Stratejik ittifaklar kurarım", resultId: "gihun" },
          { id: "a2", text: "Her şeyi risk eder, akıllı oynarım", resultId: "sangwoo" },
          { id: "a3", text: "Güçlülere yakın dururum", resultId: "saebyeok" },
          { id: "a4", text: "İnsanlara güvenmem, yalnız hareket ederim", resultId: "ilnam" },
        ],
      },
      {
        id: "q2",
        text: "En önemli değerin nedir?",
        options: [
          { id: "b1", text: "İnsanlık ve merhamet", resultId: "gihun" },
          { id: "b2", text: "Zeka ve strateji", resultId: "sangwoo" },
          { id: "b3", text: "Aile ve hayatta kalma", resultId: "saebyeok" },
          { id: "b4", text: "Oyun ve eğlence", resultId: "ilnam" },
        ],
      },
      {
        id: "q3",
        text: "Bir krizde nasıl davranırsın?",
        options: [
          { id: "c1", text: "Başkalarına yardım etmeye çalışırım", resultId: "gihun" },
          { id: "c2", text: "Mantıklı ve soğukkanlı kararlar alırım", resultId: "sangwoo" },
          { id: "c3", text: "Hayatta kalmaya odaklanırım", resultId: "saebyeok" },
          { id: "c4", text: "Durumu gözlemler, fırsat kollarım", resultId: "ilnam" },
        ],
      },
      {
        id: "q4",
        text: "İnsanlara nasıl güvenirsin?",
        options: [
          { id: "d1", text: "Herkese ikinci şans veririm", resultId: "gihun" },
          { id: "d2", text: "Sadece bana fayda sağlayanlara", resultId: "sangwoo" },
          { id: "d3", text: "Çok az kişiye, temkinli davranırım", resultId: "saebyeok" },
          { id: "d4", text: "Kimseye, herkes birer oyuncu", resultId: "ilnam" },
        ],
      },
      {
        id: "q5",
        text: "Paranın önemi senin için ne?",
        options: [
          { id: "e1", text: "Sevdiklerimi kurtarmak için gerekli", resultId: "gihun" },
          { id: "e2", text: "Özgürlük ve yeni başlangıç", resultId: "sangwoo" },
          { id: "e3", text: "Ailem için hayat kurtarıcı", resultId: "saebyeok" },
          { id: "e4", text: "Sadece bir oyunun parçası", resultId: "ilnam" },
        ],
      },
      {
        id: "q6",
        text: "Hangi oyunda daha başarılı olurdun?",
        options: [
          { id: "f1", text: "Takım gerektiren oyunlar", resultId: "gihun" },
          { id: "f2", text: "Zeka ve strateji oyunları", resultId: "sangwoo" },
          { id: "f3", text: "Hız ve çeviklik oyunları", resultId: "saebyeok" },
          { id: "f4", text: "Hepsinde, oyunları biliyorum", resultId: "ilnam" },
        ],
      },
      {
        id: "q7",
        text: "Birini feda etmen gerekse ne yapardın?",
        options: [
          { id: "g1", text: "Kendimi feda ederdim", resultId: "gihun" },
          { id: "g2", text: "En mantıklı seçeneği seçerdim", resultId: "sangwoo" },
          { id: "g3", text: "Ailemi korumak için her şeyi yapardım", resultId: "saebyeok" },
          { id: "g4", text: "İnsanların seçimlerini izlerdim", resultId: "ilnam" },
        ],
      },
      {
        id: "q8",
        text: "Oyundan sonra ne yapardın?",
        options: [
          { id: "h1", text: "Adaleti sağlamaya çalışırdım", resultId: "gihun" },
          { id: "h2", text: "Yeni bir hayat kurardım", resultId: "sangwoo" },
          { id: "h3", text: "Ailemle yeniden buluşurdum", resultId: "saebyeok" },
          { id: "h4", text: "Tekrar oyun izlerdim", resultId: "ilnam" },
        ],
      },
      {
        id: "q9",
        text: "En büyük korkunun nedir?",
        options: [
          { id: "i1", text: "Sevdiklerimi kaybetmek", resultId: "gihun" },
          { id: "i2", text: "Başarısız olmak", resultId: "sangwoo" },
          { id: "i3", text: "Kardeşimi koruyamamak", resultId: "saebyeok" },
          { id: "i4", text: "Sıkılmak", resultId: "ilnam" },
        ],
      },
      {
        id: "q10",
        text: "Hayata bakış açın nasıl?",
        options: [
          { id: "j1", text: "İyimser, insanlık hala var", resultId: "gihun" },
          { id: "j2", text: "Pragmatik, herkes kendine bakar", resultId: "sangwoo" },
          { id: "j3", text: "Gerçekçi, hayatta kalmak zor", resultId: "saebyeok" },
          { id: "j4", text: "Hayat bir oyun, eğlenmeliyiz", resultId: "ilnam" },
        ],
      },
    ],
    results: [
      {
        id: "gihun",
        character: "Seong Gi-hun",
        description: "Sen duygusal, merhametli ve iyimsersin! İnsanlığa olan inancını kaybetmezsin ve başkalarına yardım etmeye çalışırsın. Zayıf anların olsa da, vicdanın her zaman yol göstericin. Sonunda doğru olanı yapmaya çalışırsın.",
      },
      {
        id: "sangwoo",
        character: "Cho Sang-woo",
        description: "Sen zeki, stratejik ve pragmatiksin! Hayatta kalmak için mantığını kullanırsın ve duygusal kararlar almaktan kaçınırsın. Başarı odaklısın ancak bu bazen ahlaki sınırlarını zorlar. Baskı altında zor kararlar alabilirsin.",
      },
      {
        id: "saebyeok",
        character: "Kang Sae-byeok",
        description: "Sen güçlü, bağımsız ve kararlısın! Ailenin için her şeyi göze alırsın ve hayatta kalmak senin önceliğin. Başlangıçta mesafeli olsan da, güvendiğin insanlara sadıksın. Zor geçmişine rağmen umudunu kaybetmemişsin.",
      },
      {
        id: "ilnam",
        character: "Oh Il-nam",
        description: "Sen gizemli, zeki ve oyuncu ruhlusun! Hayatı bir oyun gibi görürsün ve her durumda sakin kalırsın. İnsanları gözlemlemekten ve onların seçimlerini izlemekten keyif alırsın. Görünenden çok daha fazlasını biliyorsun.",
      },
    ],
  },
  ...additionalQuizzes,
];
