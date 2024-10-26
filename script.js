// Language translation script
const translations = {
    en: {
        title: "Roborock S8 MaxV Ultra: A User's Real Story",
        "story-link": "Story",
        "timeline-link": "Timeline",
        "media-link": "Photos & Videos",
        "update-link": "Latest Update",
        "story-title": "Disappointment and Test of Patience",
        "story-para1": "I purchased the Roborock S8 MaxV Ultra with great excitement, believing it to be the best robot vacuum on the market. I never expected that this device, bought with high hopes and a high price for less cleaning at home, would turn out to be such a disappointment. From the very first use, the device failed to perform its basic function: vacuuming dust and dirt.",
        "story-para2": "Initially, I thought it could be user error. I tried different modes and settings multiple times. However, the result was always the same: Roborock S8 MaxV Ultra left dirt behind, failing to fully clean the area. Frustrated, I immediately contacted Roborock customer support, sending videos, photos, and making numerous calls through WhatsApp. I was asked to send the device to the technical service, which I did, hoping for a resolution.",
        "story-para3": "The technical service reported that the device was 'working fine' and returned it to me. I tried again, and the same issues persisted. My family constantly complained, asking why the device was not working properly. This situation caused domestic stress and led to frequent arguments with my spouse. I contacted the technical service again and sent the device back for a second time.",
        "story-para4": "I also reached out to Roborock International, trying to get help from their global support. Despite extensive communication, where I was even told the device was likely DEFECTIVE, no replacement or refund was provided. It became clear that Roborock was unwilling to take responsibility or assist the customer. The device continued to exhibit the same issues, leaving me without a solution. Now, it sits at home in its box, awaiting the outcome of my consumer rights complaint...",
        "timeline-title": "Experience Timeline",
        "timeline1-date": "August 2024:",
        "timeline1-desc": "Roborock S8 MaxV Ultra was purchased brand new from Roborock's official website, and vacuuming issues emerged from the first use.",
        "timeline2-date": "August 2024:",
        "timeline2-desc": "Initial contact with customer support was made, with photos and videos sent.",
        "timeline3-date": "August 2024:",
        "timeline3-desc": "Device was sent to technical service, which claimed it 'worked fine' and returned it.",
        "timeline4-date": "September 2024:",
        "timeline4-desc": "Another 2 weeks of frustrating tests at home, with the same issues persisting...",
        "timeline5-date": "September 2024:",
        "timeline5-desc": "The device was sent back to technical service for the SECOND TIME, only to be returned with the same 'works fine' response. Customer service indicated that a foreign object blockage was the issue, contradicting the advertised features.",
        "timeline6-date": "October 2024:",
        "timeline6-desc": "Filed a complaint with the Consumer Rights Court; the process is ongoing.",
        "update-title": "Latest Update",
        "update-para": "Despite all communications with Roborock International, no resolution was reached. As a result, I filed a case in Consumer Rights Court and am awaiting the outcome. The Roborock S8 MaxV Ultra now sits boxed at home, a product I no longer wish to see.",
        "media-title": "Photos & Videos",
        "video-desc": "Video showing the vacuum's failure.",
        "photo1-desc": "Dirt and dust remaining on the floor after cleaning (Photo 1).",
        "photo2-desc": "Dirt and dust remaining on the floor after cleaning (Photo 2).",
        "video-desc2": "Failed cleaning attempt. (Video 2).",
        "video-desc3": "Another failed cleaning attempt. (Video 3).",
        "video-desc4": "Yet another failed cleaning attempt... (Video 4)."
    },
    tr: {
        title: "Roborock S8 MaxV Ultra: Bir Kullanıcının Gerçek Hikayesi",
        "story-link": "Hikaye",
        "timeline-link": "Zaman Çizelgesi",
        "media-link": "Fotoğraflar ve Videolar",
        "update-link": "Son Güncelleme",
        "story-title": "Hayal Kırıklığı ve Sabır Testi",
        "story-para1": "Roborock S8 MaxV Ultra’yı büyük bir heyecanla ve piyasadaki en iyi robot süpürge olduğu iddiasıyla satın aldım...",
        "story-para2": "İlk başta bunun kullanıcı hatası olabileceğini düşündüm. Farklı modlar ve ayarlarla tekrar tekrar denedim...",
        "story-para3": "Teknik servis cihazın 'sorunsuz' çalıştığını belirtti ve cihazı bana geri gönderdi...",
        "story-para4": "Roborock International ile de iletişime geçtim ve uluslararası destekten de yardım almaya çalıştım...",
        "timeline-title": "Deneyimin Zaman Çizelgesi",
        "timeline1-date": "Ağustos 2024:",
        "timeline1-desc": "Roborock S8 MaxV Ultra SIFIR OLARAK Roborock RESMİ websitesinden satın alındı...",
        "timeline2-date": "Ağustos 2024:",
        "timeline2-desc": "İlk müşteri desteğiyle iletişime geçildi, fotoğraf ve videolar gönderildi...",
        "timeline3-date": "Ağustos 2024:",
        "timeline3-desc": "Cihaz teknik servise gönderildi, 'sorunsuz' çalıştığı belirtilerek geri gönderildi...",
        "timeline4-date": "Eylül 2024:",
        "timeline4-desc": "Evde yine 2 hafta boyunca stresli bir şekilde denemeler yapıldı...",
        "timeline5-date": "Eylül 2024:",
        "timeline5-desc": "Cihaz İKİNCİ KEZ teknik servise gönderildi, yine 'sorunsuz' çalıştığı belirtildi...",
        "timeline6-date": "Ekim 2024:",
        "timeline6-desc": "Tüketici hakları mahkemesine başvuru yapıldı ve süreç devam ediyor...",
        "update-title": "Son Güncelleme",
        "update-para": "Roborock International ile tüm yazışmalara rağmen çözüm bulunamadı...",
        "media-title": "Fotoğraflar ve Videolar",
        "video-desc": "Robotun düzgün vakumlamadığına dair video.",
        "photo1-desc": "Temizlikten sonra hala yerde kalan toz ve kir (1. Fotoğraf).",
        "photo2-desc": "Temizlikten sonra hala yerde kalan toz ve kir (2. Fotoğraf).",
        "video-desc2": "Başarısız temizlik denemesi (1. Video).",
        "video-desc3": "Başka bir başarısız temizlik denemesi (2. Video).",
        "video-desc4": "Yine başarısız temizlik denemesi (3. Video)."
    }
};

// Language Switcher Function
function setLanguage(lang) {
    document.querySelectorAll(".lang").forEach(element => {
        const key = element.getAttribute("key");
        element.textContent = translations[lang][key];
    });
}
