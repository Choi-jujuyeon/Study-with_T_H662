import DayCard from "@/components/DayCards";
import { NextPage } from "next";

const Home: NextPage = () => {
    return (
        <main className="py-24 px-12 min-h-screen flex flex-col justify-start items-center">
            <div className="font-semibold">Review English</div>
            <ul className="mt-12 w-full grid grid-cols-4 gap-4">
                <DayCard />
                <DayCard />
                <DayCard />
            </ul>
        </main>
    );
};

export default Home;
