import Image from "next/image";
import image from '../../assets/img/icons/indicadores-de-desempenho.png'
import { useState } from "react";
export function Icon5(props) {

  const [hover, setHover] = useState(false);

  return (
    <div className="w-auto">
      <button type="button" onMouseMove={() => setHover(true)} >
        <Image src={image} alt="Indicadores de desempenho" className={`w-24 2xl:w-28 brightness-100 ${hover ? 'brightness-50' : ''} transition-brightness`} />
      </button>
      {hover && (
        <div className="absolute w-full h-full -top-[5%] transform flex flex-col justify-center items-center" onMouseOut={() => setHover(false)}>
          <button type="button" value='login' onClick={props.setOpenLoginForm ? () => { props.setOpenLoginForm(true); } : e => props.handleClickButton(e.target.value)} className="bg-tranparent text-gray-300 hover:text-gray-50 text-sm font-bold rounded w-[90%] h-full">Indicadores de desempenho</button>
        </div>
      )}
    </div>
  )
}