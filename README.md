#React Crypto Portfolio App

Diese Anwendung ist ein Dashboard, das simulierte Kryptowährungsdaten verwendet (basierend auf CoinGecko-Datenstrukturen), um ein Portfolio zu visualisieren. Sie demonstriert die Arbeit mit modernen React-Konzepten, UI-Bibliotheken und State Management.

[Demo ansehen](https://davlikdev.github.io/crypto-portfolio-tracker/)

## ✨ Funktionen

* **Dashboard-Layout:** Responsive Benutzeroberfläche mit Header, Sidebar und Hauptinhalt (Layout-Komponenten von Ant Design).
* **Krypto-Statistiken:** Anzeige von aktuellen Kursen, Marktkapitalisierung und Preisänderungen (1h, 24h, 7d).
* **Portfolio-Übersicht:** * Kreisdiagramm (Pie Chart) zur Visualisierung der Asset-Verteilung.
    * Detaillierte Tabelle mit aktuellen Beständen, Werten und Profit/Verlust-Berechnung.
* **Asset-Management:**
    * Hinzufügen neuer Assets über einen "Drawer" (Seitenleiste) mit Formularvalidierung.
    * Automatische Berechnung des Gesamtwerts beim Eingeben der Menge.
* **Informationen:** Modal-Fenster mit detaillierten Informationen zu jeder Münze.
* **Globaler Status:** Verwendung der React Context API (`CryptoContext`) zur Verwaltung von Daten und Ladezuständen in der gesamten App.

## 🛠 Technologien

* **[React](https://reactjs.org/)** - JavaScript-Bibliothek zum Erstellen von Benutzeroberflächen.
* **[Ant Design](https://ant.design/)** - UI-Bibliothek für React (verwendete Komponenten: Layout, Card, Statistic, Table, Drawer, Modal, Form, Spin, etc.).
* **[React Chartjs 2](https://react-chartjs-2.js.org/)** & **[Chart.js](https://www.chartjs.org/)** - Für die Datenvisualisierung (Diagramme).
* **JavaScript (ES6+)** - Programmiersprache.

## 📦 Installation und Start

Befolgen Sie diese Schritte, um das Projekt lokal auszuführen:

1.  **Repository klonen:**
    ```bash
    git clone [https://github.com/IhrUsername/react-crypto-app.git](https://github.com/IhrUsername/react-crypto-app.git)
    cd react-crypto-app
    ```

2.  **Abhängigkeiten installieren:**
    ```bash
    npm install
    ```

3.  **Entwicklungsserver starten:**
    ```bash
    npm run dev
    ```
    Die App sollte nun unter `http://localhost:5173` (oder einem ähnlichen Port) verfügbar sein.
