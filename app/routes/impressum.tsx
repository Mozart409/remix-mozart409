import { Footer } from "~/ui/footer";

export default function Impressum() {
  return (
    <div>
      <div className="mx-auto max-w-prose md:mt-5 md:max-w-3xl prose prose-lg xl:prose-lg">
        <div>
          <div className="mx-auto prose prose-lg prose-headings:underline prose-a:text-primary-600 md:prose-lg lg:prose-2xl">
            <h1 id="impressum">Impressum</h1>
            <h2 id="angaben-gemaess-5-tmg">Angaben gemäß § 5 TMG</h2>
            <p>
              Amadeus Mader
              <br />
              Schinkelstr. 40
              <br />
              80805 München
            </p>
            <h2 id="kontakt">Kontakt</h2>
            <p>
              Telefon: +49 (0) 1608302204
              <br />
              Telefax: +49 (0) 8999954450
              <br />
              E-Mail: amadeus@mozart409.com
            </p>
            <h2 id="umsatzsteuer-id">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
              <br />
              DE274786143
            </p>
            <h2 id="angaben-zur-berufshaftpflichtversicherung">
              Angaben zur Berufshaftpflichtversicherung
            </h2>
            <p>
              <strong>Name und Sitz des Versicherers:</strong>
              <br />
              Württembergische Versicherung AG
              <br />
              70163 Stuttgart
            </p>
            <p>
              <strong>Geltungsraum der Versicherung:</strong>
              <br />
              Deutschland
            </p>
            <h2 id="redaktionell-verantwortlicher">
              Redaktionell Verantwortlicher
            </h2>
            <p>
              Amadeus Mader
              <br />
              Schinkelstr. 40
              <br />
              80805 München
            </p>
            <h2 id="eu-streitschlichtung">EU-Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="external"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              .<br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
            <h2 id="verbraucherstreitbeilegunguniversalschlichtungsstelle">
              Verbraucher­streit­beilegung/Universal­schlichtungs­stelle
            </h2>
            <p>
              Wir nehmen an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teil. Zuständig ist
              die Universalschlichtungsstelle des Zentrums für Schlichtung e.V., Straßburger Straße 8, 77694 Kehl am
              Rhein (
              <a
                href="https://www.verbraucher-schlichter.de"
                target="_blank"
                rel="noopener noreferrer"
                className="external"
              >
                https://www.verbraucher-schlichter.de
              </a>
              ).
            </p>
            <h3 id="haftung-fuer-inhalte">Haftung für Inhalte</h3>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
              Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
              übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf
              eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
              bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer
              konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir
              diese Inhalte umgehend entfernen.
            </p>
            <h3 id="haftung-fuer-links">Haftung für Links</h3>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
              Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
              wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
              Zeitpunkt der Verlinkung nicht erkennbar.
            </p>
            <p>
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
              Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links
              umgehend entfernen.
            </p>
            <h3 id="urheberrecht">Urheberrecht</h3>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
            <p>
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
              beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
              Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden
              von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
