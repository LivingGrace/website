import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const Contact = () => (
    <div className="m-6">
        <Head>
            <title>RCCG Living Grace Durham - Contact</title>
        </Head>
        <h1 className="text-[#1E88E5] text-[42px] md:text-[57px] text-bold select-none">Contact</h1>

        <div className="flex flex-row gap-6 justify-between">
            <div className="grid pt-3 gap-6 text-[#666666] md:text-[38px] text-[24px] text-bold">
                <p>
                    Facebook
                    <br />
                    <Link href="https://www.facebook.com/RCCG-Living-Grace-Durham-105454208869827">
                        <a className="md:text-[24px] text-[16px]">RCCG Living Grace Durham</a>
                    </Link>
                </p>
                <p>
                    Contact Number
                    <br />
                    <Link href="tel:+447950927152">
                        <a className="md:text-[24px] text-[16px]">07950927152</a>
                    </Link>
                </p>
                <p>
                    Address
                    <br />
                    <a className="md:text-[24px] text-[16px]">
                        House of Grace
                        <br/>
                        Frankland Lane
                        <br/>
                        DH1 5TA
                        <br/>
                        Durham
                    </a>
                </p>
            </div>
            <div className="pl-8">
                <Image src="/images/map.png" width="800" height="500" alt="Map of the church"/>
            </div>
        </div>
    </div>
);

export default Contact;
