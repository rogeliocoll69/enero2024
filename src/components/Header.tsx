import React from 'react';
import logo from "../logo.png"


function Header() {
    return(
        <header className=" flex flex-row justify-between px-5 py-4 bg-blue-300 text-black">
        <div className='w-12 h-12'>
        <img src={logo} alt="Logotipo de la aplicación" />
        </div>    
       <div className='text-red-800 text-lg'>
        Inicio
       </div>
       <div className=' text-blue-700 text-lg'>
        Razas
       </div>
       <div className=' text-purple-800 font-bold'>
        Escalas de Poder
       </div>
       <div className=' text-yellow-500 font-semibold'>
        contactanos
       </div>
       <div className=' text-orange-600 font-bold'>
        Acerca de Nosotros
       </div>
       <div className='text-blue-950 font-bold mr-8'>
        Iniciar Seccion
       </div>
      </header>

    );
}
export default Header;
