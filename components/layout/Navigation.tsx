import Image from "next/image";
import Link from "next/link";

type Route = {
    name: string;
    path: string;
}

const routes: Route[] = [
    {
        name: "About us",
        path: "/about"
    },
    {
        name: "Times",
        path: "/times"
    }
];


export default function Navigation() {
    // noinspection HtmlUnknownTarget
    return (
        <div className="flex flex-row gap-6">
            <div>
                <Link passHref href="/">
                    <a>
                        <Image
                            src="/images/logo.png"
                            className="align-middle"
                            alt="Image of Logo"
                            width="64"
                            height="64"
                        />
                    </a>
                </Link>
            </div>

            {routes.map((route) => (
                <Link passHref href={route.path} key={route.path}>
                    <button key={route.path}>
                        {route.name}
                    </button>
                </Link>
            ))}
            <div className="grow"/>

            <Link passHref href="/contact">
                <button className="rounded-full bg-[#3F51B5] px-4 py-2 font-medium text-white">Contact</button>
            </Link>
        </div>
    );
}