# Lafeyra Hotel – Site (στο workspace)

Αυτό το site είναι μέσα στο workspace **LaFeyra Hotel**. Το αρχικό backup που σου είχαμε είχε **φωτογραφίες μέσα** (φάκελος `uploads/`). Οι εικόνες πρέπει να βρίσκονται στον γονικό φάκελο `LaFeyra Hotel/uploads/` με την ίδια δομή.

## Δομή

```
LaFeyra Hotel/
├── LaFeyra-Hotel-Site/    ← το νέο site (καθαρός κώδικας)
│   ├── index.html
│   ├── css/style.css
│   ├── css/room.css
│   ├── js/main.js
│   ├── rooms/
│   │   ├── double-room-mountain-view.html
│   │   ├── sea-view-suite.html
│   │   └── quadruple-studio-ground-floor.html
│   └── README.md
├── uploads/               ← οι φωτό (από το αρχικό backup)
│   ├── 2021/03/           ← λογότυπο, hero, δωμάτια, γκαλερί, εστιατόριο
│   └── 2023/06/           ← (προαιρετικά) φωτό Double Room
├── index.html             ← το παλιό static backup
└── ...
```

## Φωτογραφίες

Το backup είχε μέσα φωτό. Για να εμφανίζονται στο site, ο φάκελος **uploads** πρέπει να είναι στο **LaFeyra Hotel** (δίπλα στο LaFeyra-Hotel-Site), με υποφακέλους:

- **uploads/2021/03/** — χρειάζονται:  
  `cropped-favicon-lafeyra-150x150.png`, `home-page-limenaria-copy-1536x498.jpg`, `home_banner2-720x720.jpg`, `12quadruple-studio-gallery-1110x570.jpg`, `DSC1549-Edit-Custom_800x650-768x624.jpg`, `IMG_9634-Banner_1920x708-768x283.jpg`, `SON3372-1110x570.jpg`, `og_default_image-1110x600.jpg`, `home-banner-376x308.jpg`, `DSC6963-Banner_1920x878-500x229.jpg`
- **uploads/2023/06/** — (για τη σελίδα Double Room):  
  `SON3411-1536x1024.jpg`, `SON3411-1110x570.jpg`, `SON3412-1110x570.jpg`

Αν έχεις ακόμα το πλήρες backup με τις φωτό, απλά βεβαιώσου ότι ο φάκελος **uploads** (με 2021/03 και αν υπάρχει 2023/06) βρίσκεται μέσα στο **LaFeyra Hotel**.

## Πώς να το ανοίξετε local

- **Node.js:** Διπλό κλικ στο `start.bat` → http://localhost:3000  
- **Python:** Διπλό κλικ στο `start-python.bat` → http://localhost:8000  

(Τρέχει ο server από μέσα στο φάκελο `LaFeyra-Hotel-Site`.)

Ή απλά ανοίξτε το `LaFeyra-Hotel-Site/index.html` με διπλό κλικ στο browser.
