import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <div className="grid bg-[#d5d9de] pt-2 pb-2 text-[#767676] text-center justify-center">
                <div>
                    <Link passHref href="https://www.facebook.com/RCCG-Living-Grace-Durham-105454208869827">
                        <a><Image src="/images/facebook.png" width="24" height="24" alt="Facebook Icon"/></a>
                    </Link>
                    <Link passHref href="https://www.youtube.com/channel/UC523SAa2lt03Ri3XLswGRPA">
                        <a><Image src="/images/youtube.png" width="24" height="24" alt="Youtube Icon"/></a>
                    </Link>
                    <Link passHref href="https://github.com/LivingGrace">
                        <a><Image src="/images/github.png" width="24" height="24" alt="Github Icon"/></a>
                    </Link>
                </div>
                <div>
                    Copyright © {new Date().getFullYear()} RCCG Living Grace Durham
                </div>
            </div>
        </>
    )
}