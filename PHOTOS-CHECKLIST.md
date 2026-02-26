# Φωτογραφίες – τι ψάχνουμε στα backup-uploads

Τα backup που λένε «uploads» συνήθως έχουν την ίδια δομή με το WordPress: **uploads/έτος/μήνας/** (π.χ. 2021/03).

## Από το index.html και τις σελίδες δωματίων

### uploads/2021/03/
| Αρχείο | Χρήση |
|--------|--------|
| `cropped-favicon-lafeyra-150x150.png` | Λογότυπο header |
| `home-page-limenaria-copy-1536x498.jpg` | Hero αρχική σελίδα |
| `home_banner2-720x720.jpg` | Κάρτα Double Room |
| `12quadruple-studio-gallery-1110x570.jpg` | Family Studio + hero Quadruple |
| `DSC1549-Edit-Custom_800x650-768x624.jpg` | Sea View Suite |
| `IMG_9634-Banner_1920x708-768x283.jpg` | Εστιατόριο (background) |
| `SON3372-1110x570.jpg` | Γκαλερί 1 |
| `og_default_image-1110x600.jpg` | Γκαλερί 2 |
| `home-banner-376x308.jpg` | Γκαλερί 3 |
| `DSC6963-Banner_1920x878-500x229.jpg` | Hero σελίδα Sea View Suite |

### uploads/2023/06/ (αν υπάρχει)
| Αρχείο | Χρήση |
|--------|--------|
| `SON3411-1536x1024.jpg` | Hero Double Room Mountain View |
| `SON3411-1110x570.jpg` | Gallery Double Room |
| `SON3412-1110x570.jpg` | Gallery Double Room |

---

## Πώς να ελέγξεις τα backup-uploads σου

1. Άνοιξε τους φακέλους που ανέφερες (στο Explorer).
2. Κοίτα αν υπάρχουν υποφάκελοι **2021/03** και (προαιρετικά) **2023/06**.
3. Σύγκρινε με το παραπάνω checklist: αν βρεις τα ίδια ονόματα αρχείων, είναι οι φωτό του site.

Για να δουλέψει το site: **αντιγράψτε** το περιεχόμενο (όλο το δέντρο 2021/03, 2023/06 κ.λπ.) μέσα σε έναν φάκελο **uploads** που να βρίσκεται **μέσα στο LaFeyra Hotel** (δίπλα στο LaFeyra-Hotel-Site).

```
LaFeyra Hotel/
├── LaFeyra-Hotel-Site/
├── uploads/          ← εδώ: 2021/03/ και 2023/06/ με τα αρχεία
│   ├── 2021/
│   │   └── 03/
│   │       ├── cropped-favicon-lafeyra-150x150.png
│   │       ├── home-page-limenaria-copy-1536x498.jpg
│   │       └── ...
│   └── 2023/
│       └── 06/
│           └── ...
└── index.html
```
