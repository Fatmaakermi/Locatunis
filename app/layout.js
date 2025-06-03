import { Montserrat} from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Header from "./components/header";



const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight:["400","500","600","700" ],
});



export const metadata = {
  title: "Loca Tunise",
  description: "une plateforme permet aux particuliers de consulter des des locations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
       
      >
       <Header/>
        <Navbar/>
      
        {children} 
        <Footer/>
       
      </body>
    </html>
  );
}
