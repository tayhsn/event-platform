import { RocketLogo } from './RockeatLogo';

export const Footer = () => {
   return (
      <div className='w-full h-14 bg bg-gray-900 border-t border-gray-600 flex items-center justify-between px-4 text-sm text-gray-300'>
         <div className='flex items-center justify-around'>
            <RocketLogo />
            <p className='ml-4'>Rocketseat - Todos os direitos reservados</p>
         </div>

         <div>
            <p>Políticas de privacidade</p>
         </div>
      </div>
   );
};
