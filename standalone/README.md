# Başçı B2B – bağımsız bayi portalı

Medusa Cloud aboneliği gerektirmeyen Next.js uygulaması. Windows Server 2022 üzerinde Node.js ile çalışacak şekilde tasarlanmıştır.

## Yerel çalıştırma
Node.js 22 LTS veya uyumlu sürüm ve npm gerekir.
```powershell
cd standalone
npm install
npm run dev
```
Tarayıcı: http://localhost:3100

## Üretim için
```powershell
npm run build
npm run start
```
Üretimde Node uygulamasını Windows servisi olarak çalıştırın; IIS/ARR veya güvenilir ters proxy ile HTTPS sağlayın. 3100 portunu internete doğrudan açmayın.

## Durum
- Ürün kataloğu, sepet, hızlı sipariş ve demo sipariş geçmişi: örnek verilerle çalışır.
- Demo siparişleri yalnızca tarayıcı oturumunda tutulur; ERP'ye gönderilmez.
- Gerçek bayi girişi, veritabanı, rol yetkileri, fiyat kontrolü ve Mikro Fly API: **henüz uygulanmadı**.
- `lib/mikro.ts` gerçek entegrasyon için arayüz tanımlar. API endpointleri belgelenmeden tahmin edilmemiştir.
- Canlıya açmadan önce sunucu tarafı fiyat doğrulama, bayi izolasyonu, kalıcı sipariş kuyruğu, idempotency, rate limiting, CSRF/güvenlik ve loglama tamamlanmalıdır.
- Sanal POS daha sonra ayrı bir ödeme sağlayıcısı adaptörüyle eklenecektir.

Bu sürüm yalnızca değerlendirme demosudur; gerçek bayi verisi girmeyin.
