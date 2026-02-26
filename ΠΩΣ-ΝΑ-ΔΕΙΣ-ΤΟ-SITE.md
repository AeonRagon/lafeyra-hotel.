# Πώς να δεις το site Lafeyra Hotel

Υπάρχουν **2 τρόποι**. Ο πιο αξιόπιστος είναι ο **Τρόπος 2** (με local server).

---

## Τρόπος 1: Άνοιγμα με διπλό κλικ

1. Άνοιξε τον φάκελο στο PC:
   ```
   Desktop → WebDev Sites Backups → LaFeyra Hotel → LaFeyra-Hotel-Site
   ```
   (Ή από το Cursor: αριστερό panel → **LaFeyra-Hotel-Site**.)

2. Κάνε **διπλό κλικ** στο αρχείο **index.html**.

3. Θα ανοίξει το site στο default browser (Chrome, Edge, κ.λπ.).

**Σημείωση:** Αν οι εικόνες δεν φαίνονται, χρησιμοποίησε τον Τρόπο 2.

---

## Τρόπος 2: Με local server (προτεινόμενο)

1. Μπες μέσα στον φάκελο **LaFeyra-Hotel-Site** (όπως πάνω).

2. Κάνε **διπλό κλικ** στο **start.bat**.
   - Θα ανοίξει ένα μαύρο παράθυρο (terminal).
   - Μετά από λίγα δευτερόλεπτα θα ανοίξει και το browser στο: **http://localhost:3000**

3. Αν **δεν** ανοίξει μόνο του το browser, άνοιξε εσύ Chrome ή Edge και πήγαινε στη διεύθυνση:
   ```
   http://localhost:3000
   ```

4. Για να σταματήσεις τον server: κλείσε το μαύρο παράθυρο ή πάτα **Ctrl+C** μέσα σε αυτό.

**Αν δεν έχεις Node.js:** Κάνε διπλό κλικ στο **start-python.bat** αντί για start.bat και άνοιξε στο browser: **http://localhost:8000**

---

## Τι πρέπει να βλέπεις

- **Αρχική σελίδα:** Hero με τίτλο "Lafeyra Hotel & Suites", μενού πάνω, sections: Rooms, Restaurant, Gallery, Location, φόρμα κράτησης.
- **Menu → Rooms:** Ανοίγει ξεχωριστή σελίδα με grid και τα 3 δωμάτια (Double Room, Family Studio, Sea View Suite).
- **View details** σε κάθε δωμάτιο: Ανοίγει η σελίδα του συγκεκριμένου δωματίου.

Οι εικόνες είναι προσωρινά placeholders (χρωματιστά πλαίσια με κείμενο). Όταν βάλεις τις δικές σου φωτό στο φάκελο **uploads**, αλλάζεις τα URLs στο site.

---

## Σύνοψη paths

| Τι θες να ανοίξεις | Που βρίσκεται |
|--------------------|----------------|
| **Το νέο site (καθαρός κώδικας)** | **LaFeyra-Hotel-Site** → index.html ή start.bat |
| Το παλιό static backup | **LaFeyra Hotel** (ρίζα) → index.html |

**Άρα:** Για να δεις το site που φτιάξαμε, πάντα άνοιξε/τρέξε κάτι **μέσα στο LaFeyra-Hotel-Site**, όχι το index.html που είναι ακριβώς μέσα στο "LaFeyra Hotel".
