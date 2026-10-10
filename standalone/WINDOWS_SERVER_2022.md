# Windows Server 2022 — Başçı B2B test kurulumu

Bu belge yalnızca ilk demo kurulumu içindir. İnternete açmadan önce gerçek kullanıcı doğrulaması ve güvenlik katmanı tamamlanmalıdır.

## Ön koşullar
- Node.js 22 LTS (uyumlu güncel yama sürümü)
- Git
- Windows Server 2022
- Uygulama için ayrılmış klasör ve düşük yetkili servis hesabı

## Komutlar (PowerShell)
```powershell
git clone --branch feature/standalone-mikro-fly-portal https://github.com/farkyazilim42/basci-b2b.git
cd basci-b2b\standalone
npm install
npm run typecheck
npm run build
npm run start
```
Tarayıcıdan sunucu üzerinde http://localhost:3100 açın.

## Yayın
- İnternet yayını için IIS + URL Rewrite + ARR veya başka bir güvenilir reverse proxy kullanın.
- HTTPS sertifikası ve 443 portu ile erişim sağlayın.
- 3100 portunu yalnızca loopback veya yerel ağdan erişilebilir tutun.
- Uygulamayı ayrı, düşük yetkili Windows servis hesabında çalıştırın.
- Firewall, erişim logları, güncellemeler ve yedekleme politikası uygulayın.

## Mikro Fly API
- Mikro Fly sürüm ve servis erişimi doğrulanmadan URL/endpoint tahmini yapılmayacak.
- API kimlik bilgileri GitHub'a commit edilmeyecek.
- Siparişler yalnızca desteklenen Mikro API üzerinden oluşturulacak.
- Kalıcı kuyruk ve idempotency olmadan gerçek sipariş akışı aktif edilmeyecek.

## Not
`standalone` bağımsız npm uygulamasıdır. Medusa'nın mevcut `apps/backend` ve `apps/storefront` uygulamalarını çalıştırmak gerekmez.
