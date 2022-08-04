import Head from "next/head";

type Time = {
    day: string
    time: string
};

const times: Time[] = [
    {
        day: "Sunday",
        time: "10:30-1PM"
    },
    {
        day: "1st Wednesday of the month (Holy Communion)",
        time: "6PM"
    },
    {
        day: "Wedensday",
        time: "6PM-7PM"
    },
    {
        day: "Last Friday of the month",
        time: "10PM"
    },
    {
        day: "Evangelism - Fourth Saturday",
        time: "12PM"
    }
]

const Times = () => (
    <>
        <div className="m-6">
            <Head>
                <title>RCCG Living Grace Durham - Times</title>
            </Head>
            <h1 className="text-[#1E88E5] text-[42px] md:text-[57px] text-bold select-none">Service times</h1>
            <div className="grid grid-col gap-3 pt-4">
                {times.map((time: Time) => (
                    <div key={time.day + time.time}>
                    <span className="text-[#666666] md:text-[30px] text-[20px] text-bold"
                          key={time.time + time.day}>{time.day} @ {time.time}</span>
                    </div>
                ))}
            </div>
        </div>
    </>
);

export default Times;