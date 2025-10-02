import { cssLogo, htmlLogo, jsLogo, nextjsLogo, pythonLogo, reactLogo, reactReduxLogo, reactRouterLogo, reduxLogo, tsLogo } from '../constants/constants';
import SectionWrapper from '../hoc/SectionWrapper';
import BallCanvas from './canvas/Ball';

const technologies = [
    {
        name: "React",
        icon: reactLogo
    },
    {
        name: "JS",
        icon: jsLogo
    },
    {
        name: "Redux",
        icon: reduxLogo
    },
    {
        name: "TS",
        icon: tsLogo
    },
    {
        name: "Python",
        icon: pythonLogo
    },
    {
        name: "React Redux",
        icon: reactReduxLogo
    },
    {
        name: "Next Js",
        icon: nextjsLogo
    },
    {
        name: "React Router",
        icon: reactRouterLogo
    },
    {
        name: "HTML",
        icon: htmlLogo
    },
    {
        name: "CSS",
        icon: cssLogo
    },
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