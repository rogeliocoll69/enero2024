import React from 'react';
import logo from "../logo.png"


function Header() {
    return(
        <header className=" flex flex-row justify-between px-5 py-4 bg-blue-300 ">
        <div className='w-12 h-12'>
        <img src={logo} alt="Logotipo de la aplicación" />
        </div>    
       <div className='text-primary text-lg'>
        Inicio
       </div>
       <div className=' text-secondary text-lg'>
        Razas
       </div>
       <div className=' text-neutral font-bold'>
        Escalas de Poder
       </div>
       <div className=' text-neutral font-semibold'>
        contactanos
       </div>
       <div className=' text-orange-600 font-serif'>
        Acerca de Nosotros
       </div>
       <div className='text-blue-950 font-sans mr-8'>
        Iniciar Seccion
       </div>
      </header>

    );
}
export default Header;
