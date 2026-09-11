# CanliMuzik.fm — Updated

Bu güncelleme şunları ekler:

- Geliştirilmiş UI: marquee (kayan yazı), daha büyük oynatıcı, chatbox
- Playlist (playlist.json) ve örnek girdiler (placeholders dahil)
- PWA destek altyapısı: manifest.json ve service-worker.js
- media/README.md — çevrimdışı kullanım için MP3 dosyası yükleme talimatı

Offline (çevrimdışı) kullanım:
- Service worker, sayfanın HTML/CSS/JS dosyalarını önbelleğe alır.
- Eğer `media/` klasörüne MP3 dosyaları yüklerseniz, site offline olduğunda bu dosyalar HTML5 audio ile çalabilir. YouTube embedleri offline çalışmaz.

Yapmanız gerekenler:
- Eğer 90'lar şarkılarını offline çalmak istiyorsanız, MP3 dosyalarını `media/` klasörüne yükleyin ve playlist.json veya video.json yerine kendi mp3 yolunuzu kullanın.
- Playlist için YouTube ID'lerini kullanabilirsiniz veya mp3 ile çevrimdışı oynatmayı tercih edebilirsiniz.
