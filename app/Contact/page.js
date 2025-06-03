import StylishContactForm from "../components/contactform";


export default function ContactPage() {
  return (
    <div className="min-h-screen  flex items-center justify-center p-6">
      <div className="max-w-6xl bg-color1 rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden">
        
        {/* Section infos */}
        <div className="md:w-1/2 p-8 bg- flex flex-col justify-center space-y-6">
          <h2 className="text-4xl font-extrabold text-secondary">Contactez Renthouse</h2>
          <p className="text-secondary">
            Nous sommes disponibles pour répondre à toutes vos questions et vous aider à trouver votre maison idéale.
          </p>

          <div className="space-y-4 text-secondary">
            <div className="flex items-center space-x-3">
              <svg
                className="w-6 h-6 text-secondary"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 10h18M3 14h18M7 6h10M7 18h10" />
              </svg>
              <span>123  Lac2 , Tunis</span>
            </div>
            <div className="flex items-center space-x-3">
              <svg
                className="w-6 h-6 text-secondary"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13 1.21.45 2.39.94 3.5a2 2 0 0 1-.45 2.11L8.09 10a16 16 0 0 0 6 6l1.67-1.67a2 2 0 0 1 2.11-.45c1.11.49 2.29.81 3.5.94a2 2 0 0 1 1.72 2z" />
              </svg>
              <span>+21622242812</span>
            </div>
            <div className="flex items-center space-x-3">
              <svg
                className="w-6 h-6 text-secondary"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16v16H4z" />
                <path d="M22 4L12 14.01 2 4" />
              </svg>
              <span>contact@renthouse.com</span>
            </div>
          </div>

          {/* Image */}
          <div className="mt-8">
            <img
              src="/images/rent.jpg"
              alt="Bâtiment Renthouse"
              className="rounded-lg shadow-md"
              loading="lazy"
            />
          </div>
        </div>

        {/* Formulaire */}
        <div className="md:w-1/2 p-8">
         <StylishContactForm/>
        </div>
      </div>
    </div>
  );
}

