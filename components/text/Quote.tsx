import Image from "next/image";

type QuoteProps = {
    image: string
    message: string
    author: string
    title: string
};

export default function Quote({image, message, author, title}: QuoteProps) {
    return (
        <div className="flex grow md:pt-3 gap-6">
            <div className="shrink-0">
                <Image
                    width="256"
                    height="256"
                    src={image}
                    alt={`Image of ${author}`}
                />
            </div>
            <div className="text-[19px] text-[#949494]">
                <p>“{message.trim()}”</p>
                <p>{author}</p>
                {title}
            </div>
        </div>
    );
}