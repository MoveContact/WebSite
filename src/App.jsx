import './App.css'

function App() {
  return (
    <main className="privacy-page">
      <section className="hero">
        <img className="brand-logo" src="/Favicon.png" alt="Logo Move" />
        <p className="badge">Application mobile de sport</p>
        <h1>Politique de confidentialite Move</h1>
        <p className="subtitle">
          Votre vie privee compte. Cette page explique clairement quelles donnees
          sont collectees, pourquoi elles sont utilisees et comment vous gardez le controle.
        </p>
        <p className="updated">Derniere mise a jour : 16 mars 2026</p>
      </section>

      <section className="card-grid">
        <article className="policy-card">
          <h2>1. Donnees collectees</h2>
          <p>
            Move peut collecter votre nom, votre adresse courriel et vos donnees
            d&apos;entrainement (seances, progression, objectifs) pour faire fonctionner
            l&apos;application correctement.
          </p>
        </article>

        <article className="policy-card">
          <h2>2. Utilisation des donnees</h2>
          <p>
            Ces informations servent a creer votre profil, suivre vos performances
            et partager vos activites avec la communaute selon vos parametres de compte.
          </p>
        </article>

        <article className="policy-card">
          <h2>3. Conservation et suppression</h2>
          <p>
            Vos donnees restent disponibles tant que votre compte est actif.
            Vous pouvez demander la suppression de vos donnees a tout moment.
          </p>
        </article>

        <article className="policy-card">
          <h2>4. Vos droits</h2>
          <p>
            Vous pouvez demander l&apos;acces, la correction ou la suppression de vos donnees,
            ainsi que des precisions sur leur traitement.
          </p>
        </article>
      </section>

      <footer className="footer">
        <p>Contact confidentalite : justin.soulard11@gmail.com</p>
      </footer>
    </main>
  )
}

export default App