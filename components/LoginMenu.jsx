import { Icon1 } from "../components/icons/Icon1";
import { Icon2 } from "../components/icons/Icon2";
import { Icon3 } from "../components/icons/Icon3";
import { Icon4 } from "../components/icons/Icon4";
import { Icon5 } from "../components/icons/Icon5";
import { Icon6 } from "../components/icons/Icon6";
import { Icon7 } from "../components/icons/Icon7";
import { Icon8 } from "../components/icons/Icon8";
import { Icon9 } from "../components/icons/Icon9";
import Image from "next/image";

import bg from '../assets/img/bg-solo2.png'




export function LoginMenu(props) {


    return (
        <div className="h-screen text-gray-950 relative overflow-hidden" >

            <div className={`group ${props.clicked ? 'animate-zoom-in' : ''}`}>
                <Image src={bg} alt="Background" className="w-screen h-screen" />
            </div>
            <div className={`${props.clicked ? 'invisible' : ''} fixed top-[14%] left-[45%] 2xl:top-[14%] 2xl:left-[47%] w-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-[140%] duration-200`}>
                <Icon1 handleClickButton={props.handleClickButton} />
            </div>
            <div className={`${props.clicked ? 'invisible' : ''} fixed top-[22%] left-[32%] 2xl:top-[22%] 2xl:left-[34%] w-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-[140%] duration-200`}>
                <Icon2  handleClickButton={props.handleClickButton} />
            </div>
            <div className={`${props.clicked ? 'invisible' : ''} fixed top-[40%] left-[27%] 2xl:top-[42%] 2xl:left-[29%] w-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-[140%] duration-200`}>
                <Icon3  handleClickButton={props.handleClickButton} />
            </div>
            <div className={`${props.clicked ? 'invisible' : ''} fixed top-[60%] left-[29%] 2xl:top-[62%] 2xl:left-[31%] w-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-[140%] duration-200`}>
                <Icon4  handleClickButton={props.handleClickButton} />
            </div>
            <div className={`${props.clicked ? 'invisible' : ''} fixed top-[73%] left-[38%] 2xl:top-[73%] 2xl:left-[41%] w-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-[140%] duration-200`}>
                <Icon5  handleClickButton={props.handleClickButton} />
            </div>
            <div className={`${props.clicked ? 'invisible' : ''} fixed top-[73%] left-[50%] 2xl:top-[73%] 2xl:left-[52%] w-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-[140%] duration-200`}>
                <Icon6  handleClickButton={props.handleClickButton} />
            </div>
            <div className={`${props.clicked ? 'invisible' : ''} fixed top-[60%] left-[58%] 2xl:top-[62%] 2xl:left-[60%] w-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-[140%] duration-200`}>
                <Icon7  handleClickButton={props.handleClickButton} />
            </div>
            <div className={`${props.clicked ? 'invisible' : ''} fixed top-[40%] left-[61%] 2xl:top-[42%] 2xl:left-[63%] w-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-[140%] duration-200`}>
                <Icon8  handleClickButton={props.handleClickButton} />
            </div>
            <div className={`${props.clicked ? 'invisible' : ''} fixed top-[22%] left-[57%] 2xl:top-[22%] 2xl:left-[59%] w-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-[140%] duration-200`}>
                <Icon9  handleClickButton={props.handleClickButton} />
            </div>

        </div >
    )


}