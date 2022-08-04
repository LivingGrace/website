import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";

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
    const router = useRouter();
    console.log(router.route);

    // noinspection HtmlUnknownTarget
    return (
        <div className="flex flex-row gap-6 select-none">
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
                    <button className="hover:text-[#1E88E5]" key={route.path}>
                        {route.name}
                    </button>
                </Link>
            ))}
            <div className="grow"/>
            <Link passHref href="/contact">
                <button className="hover:text-[#1E88E5]">Contact</button>
            </Link>
        </div>
    );
}