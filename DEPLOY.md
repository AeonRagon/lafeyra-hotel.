# Πώς να βάλεις το site live (GitHub + Vercel)

## 1. GitHub – ανέβασμα κώδικα

### Α. Άνοιξε GitHub και δημιούργησε νέο repo
1. Πήγαινε στο [github.com](https://github.com) και κάνε login.
2. Κλικ **"New"** (ή **"Create repository"**).
3. Όνομα repo π.χ. `lafeyra-hotel` (ή ό,τι θες).
4. **Public**, μην τικάρεις README / .gitignore (τα έχουμε ήδη τοπικά).
5. **Create repository**.

### Β. Στον υπολογιστή σου (PowerShell)

Άνοιξε PowerShell και τρέξε **μέσα στο φάκελο του site** (`LaFeyra-Hotel-Site`):

```powershell
cd "c:\Users\Manos\Desktop\WebDev Sites Backups\LaFeyra Hotel\LaFeyra-Hotel-Site"
```

Μετά, ένα-ένα:

```powershell
git init
git add .
git commit -m "Initial commit - LaFeyra Hotel site"
```

Έπειτα **σύνδεσε** το repo (αντικατέστησε `TON-USERNAME` και `lafeyra-hotel` με το δικό σου repo):

```powershell
git remote add origin https://github.com/TON-USERNAME/lafeyra-hotel.git
git branch -M main
git push -u origin main
```

Θα ζητήσει login στο GitHub (username + password ή Personal Access Token). Αν χρησιμοποιείς 2FA, χρειάζεσαι **Personal Access Token** αντί για password.

---

## 2. Vercel – deploy live

1. Πήγαινε στο [vercel.com](https://vercel.com) και κάνε **Sign up** (ή Login) με **GitHub**.
2. **"Add New..." → Project**.
3. Επίλεξε το repo **lafeyra-hotel** (ή το όνομά του).
4. **Import**.
5. Ρυθμίσεις:
   - **Framework Preset:** Other (ή leave as is).
   - **Root Directory:** άφησε κενό (το site είναι η ρίζα του repo).
   - **Build Command:** άφησε κενό (στατικό site).
   - **Output Directory:** άφησε κενό.
6. **Deploy**.

Μετά από λίγα λεπτά θα πάρεις ένα link τύπου:  
`https://lafeyra-hotel-xxxx.vercel.app`

Αυτό είναι το **live** site για τα πρώτα σου test.

---

## 3. Επόμενα (optional)

- **Custom domain:** Vercel → Project → Settings → Domains → πρόσθεσε το domain σου.
- **Supabase:** Χρήσιμο αν αργότερα θες φόρμες (π.χ. contact), κρατήσεις ή database. Για απλό στατικό site δεν χρειάζεται ακόμα.

---

## Αν χρειάζεσαι Personal Access Token (GitHub)

1. GitHub → **Settings** (προφίλ) → **Developer settings** → **Personal access tokens**.
2. **Generate new token (classic)**.
3. Δώσε scope **repo**.
4. Αντί για password στο `git push`, βάλε αυτό το token.
