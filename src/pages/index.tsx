import Head from 'next/head';
import Image from "next/image";
import Quote from "../../components/text/Quote";

type PastorQuote = {
    author: string
    title: string
    image: string
    text: string
};

const quotes: PastorQuote[] = [
    {
        author: "Tom Ademuwagun",
        title: "Pastor of RCCG Living Grace Durham",
        image: "/images/pastor.png",
        text: "Welcome to Our Church Family. My name is Tom Ademuwagun, the Pastor of RCCG Living Grace Durham. The church started with my family and our two children at the time in February 2008, with a sister who was a Durham University student. I am a Solicitor of the Supreme Court of England & Wales but also a Senior Social Work Practitioner. Our Journey in the ministry, in the UK, started at Living Word Darlington UK in 2006 before we were sent forth to start a Parish in the City of Durham by a serial church planter, Pastor Akinwumi Thomas. Since 2008, the church of God has since flourished with beautiful souls and blessings. Over a decade and a half, so many souls have been won for Jesus! " +
            "Our vision is to win souls and transform lives, impacting generations." +
            "Deuteronomy 32:30, “One man will chase a thousand and two put ten thousand to flight“." +
            "The RCCG Vision & Mission is: " +
            "To make heaven, " +
            "To take as many people with us," +
            "To have a member of RCCG in every family of all nations," +
            "To accomplish No. 1 above, holiness will be our lifestyle," +
            "To accomplish No. 2 and 3 above, we will plant churches within five minutes walking distance in every city and town of developing countries and within five minutes driving distance in every city and town of developed countries," +
            "We will pursue these objectives until every Nation in the world is reached for the Lord Jesus Christ."
    }
]

export default function Home() {
    return (
        <div className="overflow-hidden">
            <Head>
                <title>RCCG Living Grace Durham - Home</title>
            </Head>

            <div className="mx-6 select-none">
                <div className="flex flex-row gap-6 justify-between">
                    <div>
                        <h1 className="tracking-tight lg:w-[30rem] w-[20rem] md:text-left text-center md:text-[57px] text-[40px] font-bold text-[#1E88E5]">
                            Welcome to
                            <p className="text-black">RCCG Living Grace Durham</p>
                        </h1>
                        <h2 className="text-[16px] md:text-[22px] w-[20rem] md:w-[28rem] md:text-left text-center text-[#949494]">Transforming lives, impacting generations.</h2>
                    </div>
                    <div className="grow md:pl-[25rem]">
                        <Image
                            width="900"
                            height="500"
                            alt="An image of the church"
                            src="/images/church.png"
                        />
                    </div>
                </div>

                <div className="flex lg:flex-row gap-6 md:pt-5 pt-12 flex-col md:justify-between">
                    {quotes.map((quote) => (
                        <Quote image={quote.image} message={quote.text} author={quote.author} title={quote.title}
                               key={quote.author}/>
                    ))}
                </div>
            </div>
        </div>
    );
}
