import { reactLogo } from '../constants/constants';
import SectionWrapper from '../hoc/SectionWrapper';
import BallCanvas from './canvas/Ball';

const technologies = [
    {
        name: "React",
        icon: reactLogo
    },
    // {
    //     name: "JS",
    //     icon: "https://icon2.cleanpng.com/20180810/ekz/11448a7a96ee808a3cdbaf0df9570976.webp"
    // },
    // {
    //     name: "Redux",
    //     icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmDkubK9ABMZZ4rmhRf9yNA9MvAF80lfJeGQ&s"
    // },
    // {
    //     name: "TS",
    //     icon: "https://w7.pngwing.com/pngs/74/362/png-transparent-typescript-plain-logo-icon-thumbnail.png"
    // },
    // {
    //     name: "Python",
    //     icon: "https://i.ibb.co.com/qMbnKt6m/Python-logo-notext-svg.png"
    // },
    // {
    //     name: "",
    //     icon: ""
    // },
    // {
    //     name: "",
    //     icon: ""
    // },
    // {
    //     name: "",
    //     icon: ""
    // },
    // {
    //     name: "",
    //     icon: ""
    // },
    // {
    //     name: "",
    //     icon: ""
    // },
    // {
    //     name: "",
    //     icon: ""
    // },
    // {
    //     name: "",
    //     icon: ""
    // },
]

const Tech = () => {
    return (
        <div className="flex flex-row flex-wrap justify-center gap-10">
            {technologies.map((technology) => (
                <div className="w-28 h-28" key={technology.name}>
                    <BallCanvas icon={technology.icon} />
                </div>
            ))}

            tech
        </div>
    );
};

export default SectionWrapper(Tech, "");