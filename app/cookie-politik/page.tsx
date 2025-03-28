import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Politik | Give Golfklub',
  description: 'Læs om hvordan Give Golfklub bruger cookies på vores hjemmeside',
}

export default function CookiePolitik() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Cookie Politik</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-4">Hvad er cookies?</h2>
          <p className="text-gray-600">
            Cookies er små tekstfiler, der gemmes på din computer eller mobilenhed, når du besøger vores hjemmeside. 
            De hjælper os med at gøre din oplevelse på hjemmesiden bedre og mere personlig.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Hvilke typer cookies bruger vi?</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Nødvendige cookies</h3>
              <p className="text-gray-600">
                Disse cookies er nødvendige for at hjemmesiden kan fungere korrekt. De kan ikke slås fra, 
                da de er essentielle for grundlæggende funktioner som sikkerhed og navigation.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Præference cookies</h3>
              <p className="text-gray-600">
                Disse cookies husker dine indstillinger og præferencer, så du får en mere personlig oplevelse 
                når du besøger vores hjemmeside.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Statistiske cookies</h3>
              <p className="text-gray-600">
                Vi bruger disse cookies til at forstå, hvordan besøgende bruger vores hjemmeside. 
                Dette hjælper os med at forbedre vores hjemmeside og gøre den mere relevant for vores brugere.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Hvordan kan du administrere cookies?</h2>
          <p className="text-gray-600">
            Du kan altid ændre dine cookie-indstillinger ved at klikke på &quot;Cookie-indstillinger&quot; i bunden af siden. 
            Du kan også slette cookies fra din browser gennem dine browserindstillinger.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Kontakt</h2>
          <p className="text-gray-600">
            Har du spørgsmål om vores brug af cookies? Kontakt os gerne på info@givegolfklub.dk
          </p>
        </section>
      </div>
    </div>
  )
} 