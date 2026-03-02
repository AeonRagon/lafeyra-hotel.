# Σύνδεση domain: Site (Vercel) + Email (Resend)

Domain: **lafeyra-hotel.gr**

---

## Μέρος 1: Domain στο Site (Vercel)

Έτσι το site ανοίγει από `https://lafeyra-hotel.gr` αντί για `lafeyra-hotel-xxxx.vercel.app`.

### 1.1 Πού βάζεις το domain στο Vercel

1. Πήγαινε στο [vercel.com](https://vercel.com) → **Dashboard**.
2. Κλικ στο project **lafeyra-hotel** (το site που κάνει deploy από GitHub).
3. Πάνω στο **Settings** (tab).
4. Αριστερά στο menu: **Domains**.
5. Στο πεδίο **"Add"** / **"Add domain"** γράψε: **lafeyra-hotel.gr** → Enter/Add.
6. (Προαιρετικά) Πρόσθεσε και **www.lafeyra-hotel.gr** με το ίδιο τρόπο.

### 1.2 Τι θα σου δείξει το Vercel

Αμέσως μετά το Add, το Vercel θα σου δείξει **τι records να βάλεις** στον πάροχο του domain. Συνήθως:

- Για **lafeyra-hotel.gr** (χωρίς www):
  - **Type:** A  
  - **Name:** `@` ή κενό (root)  
  - **Value:** `76.76.21.21` (ή ό,τι γράφει ακριβώς το Vercel)

- Για **www.lafeyra-hotel.gr**:
  - **Type:** CNAME  
  - **Name:** `www`  
  - **Value:** `cname.vercel-dns.com` (ή ό,τι γράφει το Vercel)

Κράτα ανοιχτή τη σελίδα Domains στο Vercel – εκεί φαίνονται τα ακριβή values.

### 1.3 Πού αλλάζεις τα DNS (παράδοχος domain)

1. Πήγαινε στο panel όπου διαχειρίζεσαι το **lafeyra-hotel.gr** (όπου βλέπεις την "Ανανέωση").
2. Ξεκίνα **DNS** / **DNS Records** / **Ζώνη DNS** / **Name servers** (όπως το λέει ο πάροχος).
3. **Αφαίρεσε** τα παλιά A ή CNAME που έδειχναν σε άλλο name server/site (αν θες πλήρως το site στο Vercel).
4. **Πρόσθεσε** τα records που σου είπε το Vercel (A για `@`, CNAME για `www`).
5. Αποθήκευσε.

### 1.4 Έλεγχος

- Περίμενε 5–60 λεπτά (DNS propagation).
- Στο Vercel → **Domains** το domain θα πάει σε **Verified** όταν τα records είναι σωστά.
- Άνοιξε **https://lafeyra-hotel.gr** (και **https://www.lafeyra-hotel.gr** αν το πρόσθεσες).

---

## Μέρος 2: Domain στο Resend (για τα emails)

Έτσι τα mail κράτησης θα στέλνονται από `reservations@lafeyra-hotel.gr` (ή όποιο address θες) και θα φτάνουν στο **lafeyra.hotel@gmail.com** χωρίς 403.

### 2.1 Πρόσθεσε το domain στο Resend

1. Πήγαινε στο [resend.com](https://resend.com) → login.
2. **Domains** → **Add Domain**.
3. Γράψε: **lafeyra-hotel.gr** → **Add**.

### 2.2 DNS records που ζητά το Resend

Το Resend θα σου δείξει 2–3 records (π.χ. SPF, DKIM, ίσως MX). Παράδειγμα:

| Type | Name  | Value (παράδειγμα – αντικατέστησε με αυτά που δείχνει το Resend) |
|------|--------|------------------------------------------------------------------|
| TXT  | `resend._domainkey` ή παρόμοιο | Κείμενο που σου δίνει το Resend |
| TXT  | `@` ή root | `v=spf1 include:resend.com ~all` ή ό,τι δείχνει |
| MX   | (αν ζητηθεί) | Ό,τι δείχνει το Resend |

1. Πήγαινε πάλι στο **DNS Management** του domain σου.
2. Πρόσθεσε **ακριβώς** τα records που εμφανίζει το Resend (copy-paste Name και Value).
3. Αποθήκευσε και περίμενε 5–60 λεπτά.

### 2.3 Verify στο Resend

1. Στο Resend → **Domains** → δίπλα στο lafeyra-hotel.gr πάτα **Verify** (ή κάνε refresh).
2. Όταν γίνει **Verified**, μπορείς να στέλνεις από addresses τύπου `οτιδήποτε@lafeyra-hotel.gr`.

### 2.4 From address και Supabase

Διάλεξε ένα “από” address, π.χ. **reservations@lafeyra-hotel.gr**.

Στον υπολογιστή σου (PowerShell, μέσα στο φάκελο του project):

```powershell
cd "c:\Users\Manos\Desktop\WebDev Sites Backups\LaFeyra Hotel\LaFeyra-Hotel-Site"
npx supabase link --project-ref vezvgsbhpcnutdwdmfys
npx supabase secrets set FROM_EMAIL=reservations@lafeyra-hotel.gr
```

(Αν έχεις κάνει ήδη `supabase link`, τρέξε μόνο το `secrets set`.)

Μετά την αλλαγή, η φόρμα κράτησης θα στέλνει από **reservations@lafeyra-hotel.gr** και τα mail θα φτάνουν κανονικά στο **lafeyra.hotel@gmail.com**.

---

## Σύνοψη

| Βήμα | Πού | Τι κάνεις |
|------|-----|-----------|
| 1 | Vercel → Project → **Settings** → **Domains** | Add **lafeyra-hotel.gr** (και optional **www**) |
| 2 | Πάροχος domain (DNS) | Βάλε A + CNAME που ζητά το Vercel, αφαίρεσε παλιά |
| 3 | Resend → Domains | Add **lafeyra-hotel.gr** |
| 4 | Πάροχος domain | Βάλε TXT (και MX αν ζητηθεί) που ζητά το Resend |
| 5 | Resend | Verify domain |
| 6 | Terminal | `npx supabase secrets set FROM_EMAIL=reservations@lafeyra-hotel.gr` |

Αν πεις σε ποιον πάροχο έχεις το domain (π.χ. GoDaddy, grnet), μπορώ να σου γράψω πιο συγκεκριμένα πού να πατήσεις για τα DNS.
