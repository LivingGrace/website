import Image from "next/image";

type QuoteProps = {
    image: string
    message: string
    author: string
    title: string
};

export default function Quote({image, message, author, title}: QuoteProps) {
    return (
        <div className="flex grow shrink-0 my-10 text-[19px] lg:w-[30rem] w-[20rem] text-[#949494] md:pt-5 gap-6">
            <div>
                <Image
                    width="256"
                    height="256"
                    src={image}
                    alt={`Image of ${author}`}
                />
            </div>
            <div>
                <p>“{message.trim()}”</p>
                <p>{author}</p>
                {title}
            </div>
        </div>
    );
}