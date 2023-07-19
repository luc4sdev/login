import { useState } from "react";
import { LoginMenu } from "../components/LoginMenu";
import { LoginMenuExtend } from "../components/LoginMenuExtend";

export default function Home() {

  const [clicked, setClicked] = useState(false);
  const [newForm, setNewForm] = useState(false);
  const [openLoginForm, setOpenLoginForm] = useState(false)

  function handleClickButton(value, doc) {
    setClicked(true)
    setTimeout(() => {
      setNewForm(true);
    }, 1000);

    if(value === 'login') {
      setOpenLoginForm(true)
    }
    else if(value === 'docs') {
      setShowDocs(true)
      setText(doc)
    }

  }

  return (

      <>
        <div className={`${newForm ? 'vlock' : 'hidden'}`}>
          <LoginMenuExtend clicked={clicked} openLoginForm={openLoginForm} setOpenLoginForm={setOpenLoginForm} />
        </div>

       <div className={`${!newForm ? 'block' : 'hidden'}`}>
         <LoginMenu clicked={clicked} handleClickButton={handleClickButton} />
       </div>
      </>

  )
}
