# Reservation emails με Resend.com + Supabase Edge Function

Η function δέχεται τα δεδομένα του form και στέλνει **2 emails** μέσω Resend:
1. **Στο ξενοδοχείο** (HOTEL_EMAIL): νέο αίτημα κράτησης με όλα τα πεδία.
2. **Στον πελάτη** (στο email που έδωσε): επιβεβαίωση «Λάβαμε το αίτημά σας».

---

## 1. Resend.com

1. Δημιούργησε λογαριασμό στο [resend.com](https://resend.com).
2. **API Key:** Dashboard → API Keys → Create. Αντιγράψε το key (ξεκινά με `re_`).
3. **Αποστολή email:**  
   - Για **δοκιμή** μπορείς να χρησιμοποιήσεις το default `onboarding@resend.dev` (αποστολή μόνο στο δικό σου email).  
   - Για **production** πρόσθεσε domain (Resend → Domains), κάνε verify και χρησιμοποίησε π.χ. `reservations@lafeyrahotel.gr` ως FROM.

---

## 2. Supabase

1. Δημιούργησε project στο [supabase.com](https://supabase.com).
2. Εγκατάστησε το Supabase CLI (αν δεν το έχεις):
   ```bash
   npm install -g supabase
   ```
3. Στο root του project (LaFeyra-Hotel-Site):
   ```bash
   supabase login
   supabase link --project-ref YOUR_PROJECT_REF
   ```
4. **Secrets** (τα βασικά για Resend):
   ```bash
   supabase secrets set RESEND_API_KEY=re_xxxxxxxxxxxx
   supabase secrets set HOTEL_EMAIL=lafeyra.hotel@gmail.com
   ```
   Προαιρετικά, αν έχεις verify domain στο Resend:
   ```bash
   supabase secrets set FROM_EMAIL=reservations@lafeyrahotel.gr
   ```
   (Αν δεν βάλεις `FROM_EMAIL`, χρησιμοποιείται `onboarding@resend.dev`.)

5. **Deploy** της function:
   ```bash
   supabase functions deploy send-reservation
   ```

6. Το **URL** της function θα είναι:
   ```
   https://YOUR_PROJECT_REF.supabase.co/functions/v1/send-reservation
   ```
   Βάλ’ το στο **`js/reservation-config.js`**:
   ```javascript
   window.RESERVATION_API_URL = 'https://YOUR_PROJECT_REF.supabase.co/functions/v1/send-reservation';
   ```

---

## 3. Τι παίρνει η function (body JSON)

- **Σύντομο form (index):** `{ name, email, message }`
- **Πλήρες form (contact):** `{ firstname, lastname, email, phone, arrival, departure, adults, children, accommodation, message }`

Όταν ο πελάτης υποβάλλει το form, το site κάνει `POST` σε αυτό το URL με τα δεδομένα. Η function στέλνει το mail στο ξενοδοχείο και το confirmation mail στον πελάτη. Αν το `RESERVATION_API_URL` στο site είναι κενό, τα forms συνεχίζουν να χρησιμοποιούν **mailto** (άνοιγμα email client).
