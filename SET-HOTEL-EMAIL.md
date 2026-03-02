# Ρύθμιση email ξενοδοχείου (lafeyra.hotel@gmail.com)

Τα emails κράτησης τώρα πάνε στο **manos3291@gmail.com**. Για να πάνε στο **lafeyra.hotel@gmail.com**, βάλε το secret από το terminal.

## Βήματα

1. **Άνοιξε PowerShell ή Terminal** στο φάκελο του project:
   ```
   cd "c:\Users\Manos\Desktop\WebDev Sites Backups\LaFeyra Hotel\LaFeyra-Hotel-Site"
   ```

2. **Σύνδεση και σύνδεση με το project** (χρησιμοποίησε `npx supabase` – δεν χρειάζεται εγκατάσταση):
   ```
   npx supabase login
   npx supabase link --project-ref vezvgsbhpcnutdwdmfys
   ```
   - Το `login` θα ανοίξει browser για σύνδεση.
   - Το `link` μπορεί να ζητήσει database password – αν δεν θυμάσαι, δοκίμασε Enter ή άφησέ το κενό.

3. **Άλλαξε το email που δέχεται τις κρατήσεις:**
   ```
   npx supabase secrets set HOTEL_EMAIL=lafeyra.hotel@gmail.com
   ```

4. **Τέλος.** Την επόμενη φορά που κάποιος θα στείλει φόρμα κράτησης, το mail θα πάει στο **lafeyra.hotel@gmail.com**. Δεν χρειάζεται redeploy της function.

---

**Σημείωση:** Το `RESEND_API_KEY` αν ήδη το είχες βάλει πριν, μένει ως έχει. Άλλαξες μόνο το `HOTEL_EMAIL`.
