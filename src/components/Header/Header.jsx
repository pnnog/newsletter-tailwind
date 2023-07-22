import { ToogleTheme } from '../ToogleTheme/ToogleTheme'

export const Header  = ({userData}) =>{
  
  return(
    <div className="flex h-20 bg-auditoreDark-100 dark:bg-dark-200 justify-between items-center px-5 sm:rounded-xl sm:m-5" >
      {<span className="text-gray-100"> Olá, {userData?.user || 'Usuário'}</span>}
      <h1>Auditore Newsletter</h1>
      <ToogleTheme  />
    </div>
  )
}