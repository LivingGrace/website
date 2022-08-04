import '../src/styles/globals.css';
import type {AppProps} from 'next/app';
import Navigation from "../src/components/layout/Navigation";
import Footer from "../src/components/layout/Footer";

export default function App({Component, pageProps}: AppProps) {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="border-[#D9D9D9] border-b-2">
                <div className="m-8">
                    <Navigation/>
                </div>
            </div>
            <div className="mx-4 my-8">
                <Component {...pageProps} />
            </div>
            <footer className="mt-auto">
                <Footer/>
            </footer>
        </div>
    );
}
