import { NextPage } from "next";
const Home: NextPage = () => {
    return (
        <main className="bg-red-100 ">
            <div>Review English</div>
            <ul>
                <li>
                    <button>Day 1</button>
                </li>
                <li>
                    <button>Day 2</button>
                </li>
                <li>
                    <button>Day 3</button>
                </li>
            </ul>
        </main>
    );
};
export default Home;
