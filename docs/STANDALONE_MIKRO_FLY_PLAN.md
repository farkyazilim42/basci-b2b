# Başçı B2B — Aboneliksiz Mikro Fly Bayi Portalı

## Amaç
Mevcut Windows sunucusunda çalışan, bağımsız, lisans ücreti gerektirmeyen bayi sipariş portalı.

## İlk sürüm
- Bayi girişi ve bayi bazında veri izolasyonu
- Mikro Fly API üzerinden stok ve bayi fiyatları
- Ürün kataloğu, hızlı sipariş ve sepet
- Siparişin güvenli şekilde Mikro Fly'a aktarılması
- Cari bakiye ve sipariş geçmişi
- Sanal POS için ileride uygulanacak ödeme sağlayıcı arayüzü

## Mimari
- Next.js + TypeScript (Windows üzerinde Node.js)
- SQL Server veya PostgreSQL: portal kimlik doğrulama, işlem günlüğü ve sipariş kuyruğu
- Sunucu tarafı Mikro Fly API adaptörü
- HTTPS ters proxy (IIS/ARR veya Caddy), Windows servis yöneticisi
- Mikro API erişim bilgileri yalnızca sunucu ortamında
- İşlem tekrarı koruması (idempotency), başarısız siparişlerde yeniden deneme, ayrıntılı log

## İlk teknik doğrulamalar
1. Windows Server sürümü ve Node.js uyumluluğu
2. Mikro Fly sürümü ve API lisansı / servis dokümantasyonu
3. Mikro API sunucu adresi, SSL, ağ erişimi (kimlik bilgileri GitHub'a yazılmayacak)
4. Bayi bazlı fiyat, stok birimi, cari hesap ve sipariş servislerinin testleri
5. Güvenli internet yayını ve yedekleme planı

## Önemli
Bu dal planlama ve geliştirme içindir. Medusa monorepo main dalında korunur; canlı sistem değiştirilmemiştir. Mikro SQL tablolarına doğrudan sipariş yazılmayacaktır.
