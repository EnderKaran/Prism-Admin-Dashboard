# Prism - Modern React Admin Paneli

Prism, verilerinizi yönetmek ve görselleştirmek için tasarlanmış, modern, duyarlı ve zengin özelliklere sahip bir admin paneli uygulamasıdır. Bu proje, bir yönetici panelinde bulunması gereken temel özellikleri modern bir arayüzle sunmak amacıyla geliştirilmiştir. React, Tailwind CSS, Recharts ve React Big Calendar gibi güçlü teknolojiler kullanılarak hem estetik hem de fonksiyonel bir kullanıcı deneyimi hedeflenmiştir.

## Canlı Demo

Canlı Demoyu Görüntüle: [https://enderkaran.github.io/Prism-Admin-Dashboard/](https://enderkaran.github.io/Prism-Admin-Dashboard/)  

<img width="1348" height="603" alt="image" src="https://github.com/user-attachments/assets/2fa8e91f-39ba-4910-a1af-acdf2493dfc0" />

## Öne Çıkan Özellikler

### 1. İnteraktif Dashboard
- **İstatistik Kartları (StatCard):** Toplam müşteri, sipariş, gelir gibi önemli metrikleri anlık olarak gösteren dinamik kartlar.  
- **Veri Odaklı Grafikler (StatisticsChart):** Recharts kütüphanesi kullanılarak oluşturulmuş, aylık satışları ve istatistikleri görselleştiren interaktif ve duyarlı grafikler.  
- **Coğrafi Veri Haritası (DemographicsMap):** Müşterilerin dünya üzerindeki dağılımını gösteren, react-simple-maps ile oluşturulmuş demografi haritası.  

### 2. Yönetim Sayfaları
- **Takvim (CalendarPage):** React Big Calendar kullanılarak oluşturulmuş, etkinlik ekleme, düzenleme ve görüntüleme özelliklerine sahip tam fonksiyonel takvim sayfası.  
- **Profil Sayfası (ProfilePage):** Kullanıcıların kişisel bilgilerini ve adreslerini görüntüleyebileceği, modal pencereler üzerinden düzenleyebileceği profil yönetim sayfası.  
- **Sipariş Listesi (RecentOrders):** Son siparişleri ürün görselleri, fiyatları ve durumları (Teslim Edildi, Beklemede, İptal) ile birlikte listeleyen modern tablo.  

### 3. Kullanıcı Arayüzü ve Deneyimi
- **Aydınlık ve Karanlık Mod:** Tek bir tıklama ile uygulama genelinde tema değiştirmeye olanak tanıyan tam tema desteği.  
- **Duyarlı Tasarım:** Tailwind CSS’in mobile-first yaklaşımıyla geliştirilmiş, tüm ekran boyutlarında kusursuz çalışan bir arayüz.  
- **Modern Bileşenler:** Bildirimler (NotificationDropdown), kullanıcı menüsü (ProfileDropdown) ve form girişleri (FormInput) gibi yeniden kullanılabilir ve modern arayüz bileşenleri.  
- **Otomatik Dağıtım:** GitHub Actions ile main branch’e yapılan her push’ta projenin otomatik olarak derlenip GitHub Pages’e dağıtılması.  

## Teknoloji Yığını

| Teknoloji | Açıklama |
|------------|-----------|
| React | Uygulama çatısı |
| Vite | Geliştirme ve derleme aracı |
| Tailwind CSS | Modern ve duyarlı stil altyapısı |
| Recharts | Grafik ve veri görselleştirme kütüphanesi |
| React Big Calendar | Takvim ve etkinlik yönetimi |
| React Simple Maps | Coğrafi veri haritaları oluşturma |
| Lucide React | Hafif ve modern ikon seti |
| React Router DOM | Sayfa yönlendirme sistemi |
| GitHub Actions & GitHub Pages | Sürekli entegrasyon ve otomatik dağıtım |

## Başlarken

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin.

### Kurulum

Depoyu klonlayın:
```bash
git clone https://github.com/EnderKaran/Prism-Admin-Dashboard.git
cd admin-dashboard
```

Bağımlılıkları yükleyin (bazı eski bağımlılıklar için --legacy-peer-deps gerekebilir):
```bash
npm install --legacy-peer-deps
```

## Proje Yapısı

Proje, sorumlulukların ayrılması ilkesine dayanan, ölçeklenebilir ve bakımı kolay bir yapıya sahiptir.
```
Prism-Admin-Dashboard/
├── node_modules/
├── public/
│   └── 404.html                 # GitHub Pages yönlendirme dosyası
├── src/
│   ├── assets/                  # Görseller, fontlar vb.
│   ├── components/
│   │   ├── Charts/              # Grafik bileşenleri
│   │   │   ├── DemographicsMap.jsx
│   │   │   └── StatisticsChart.jsx
│   │   ├── Dropdowns/           # Açılır menü bileşenleri
│   │   │   ├── NotificationDropdown.jsx
│   │   │   └── ProfileDropdown.jsx
│   │   ├── Form/                # Form elemanları
│   │   │   └── FormInput.jsx
│   │   ├── Layout/              # Sayfa düzeni bileşenleri
│   │   │   ├── Header.jsx
│   │   │   └── Sidebar.jsx
│   │   ├── Modals/              # Modal bileşenleri
│   │   │   ├── EditAddressModal.jsx
│   │   │   ├── EditPersonalInfoModal.jsx
│   │   │   └── EventModal.jsx
│   │   └── Tables/              # Tablo bileşenleri
│   │       ├── RecentOrders.jsx
│   │       └── StatCard.jsx
│   ├── pages/                   # Sayfa bileşenleri
│   │   ├── CalendarPage.jsx
│   │   ├── DashboardContent.jsx
│   │   └── ProfilePage.jsx
│   ├── App.css                  # Global stil ve takvim özelleştirmeleri
│   ├── App.jsx                  # Ana bileşen ve yönlendirme
│   └── main.jsx                 # Uygulamanın giriş noktası
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Katkıda Bulunma

Katkılar memnuniyetle karşılanmaktadır. Öneri, geliştirme veya hata bildirimi için Pull Request veya Issue açabilirsiniz.

