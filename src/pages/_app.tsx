import '../styles/globals.css';
import type {AppProps} from 'next/app';
import Navigation from "../../components/layout/Navigation";

export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <div className="border-[#D9D9D9] border-b-2">
                <div className="m-8">
                    <Navigation/>
                </div>
            </div>
            <div className="mx-4 my-8">
                <Component {...pageProps} />
            </div>
        </>
    );
}
