import { useEffect, useState } from "react";
import { LoginForm } from '../components/LoginForm'
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

import bg from '../assets/img/bg3.png'




export function LoginMenuExtend(props) {




    const [zoom, setZoom] = useState(false);


    useEffect(() => {
      if(props.clicked) {
        setZoom(true);
        setTimeout(() => {
          setZoom(false);
        }, 2000);
      }
    },[props.clicked])

    return (
        < div className="h-screen text-gray-950 relative overflow-hidden" >
            <div className="group animate-zoom-out-left">
            <Image src={bg} alt="Background" className="w-screen h-screen" />
            </div>

            <div className={`${zoom ? 'invisible' : ''} fixed top-[13%] left-[24%] 2xl:top-[12%] 2xl:left-[25%] w-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-[140%] duration-200`}>
                <Icon1 setOpenLoginForm={props.setOpenLoginForm} />
            </div>
            <div className={`${zoom ? 'invisible' : ''} fixed top-[20%] left-[12%] 2xl:top-[18%] 2xl:left-[14%] w-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-[140%] duration-200`}>
                <Icon2 setOpenLoginForm={props.setOpenLoginForm} />
            </div>
            <div className={`${zoom ? 'invisible' : ''} fixed top-[36%] left-[6%] 2xl:top-[36%] 2xl:left-[7%] w-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-[140%] duration-200`}>
                <Icon3 setOpenLoginForm={props.setOpenLoginForm} />
            </div>
            <div className={`${zoom ? 'invisible' : ''} fixed top-[55%] left-[6%] 2xl:top-[59%] 2xl:left-[9%] w-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-[140%] duration-200`}>
                <Icon4 setOpenLoginForm={props.setOpenLoginForm} />
            </div>
            <div className={`${zoom ? 'invisible' : ''} fixed top-[71%] left-[18%] 2xl:top-[71%] 2xl:left-[19%] w-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-[140%] duration-200`}>
                <Icon5 setOpenLoginForm={props.setOpenLoginForm} />
            </div>
            <div className={`${zoom ? 'invisible' : ''} fixed top-[71%] left-[29%] 2xl:top-[71%] 2xl:left-[29%] w-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-[140%] duration-200`}>
                <Icon6 setOpenLoginForm={props.setOpenLoginForm} />
            </div>
            <div className={`${zoom ? 'invisible' : ''} fixed top-[55%] left-[37%] 2xl:top-[59%] 2xl:left-[38%] w-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-[140%] duration-200`}>
                <Icon7 setOpenLoginForm={props.setOpenLoginForm} />
            </div>
            <div className={`${zoom ? 'invisible' : ''} fixed top-[36%] left-[39%] 2xl:top-[36%] 2xl:left-[40%] w-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-[140%] duration-200`}>
                <Icon8 setOpenLoginForm={props.setOpenLoginForm} />
            </div>
            <div className={`${zoom ? 'invisible' : ''} fixed top-[20%] left-[35%] 2xl:top-[18%] 2xl:left-[35%] w-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-[140%] duration-200`}>
                <Icon9 setOpenLoginForm={props.setOpenLoginForm} />
            </div>


            {
                props.openLoginForm && (
                    <div className={`${zoom ? 'invisible' : ''} fixed top-[36%] left-[63%] w-1/4 overflow-hidden transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 `} >
                        <LoginForm />
                    </div>
                )
            }

        </div >
    )


}