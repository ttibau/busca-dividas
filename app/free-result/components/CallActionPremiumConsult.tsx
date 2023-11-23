import React from 'react';
import PremiumCallAction from '@/app/images/premium-callaction.svg';
import Image from 'next/image';
import CallActionPremiumButton from './CallActionPremiumButton';
import Medal from '@/app/images/medal.png';

function CallActionPremiumConsult() {
  return (
    <div className="pl-5 pr-5 pb-20">
      <div className="flex items-center lg:gap-20 justify-center">
        <div className="hidden lg:block">
          <Image src={PremiumCallAction} alt="ICON" />
        </div>
        <div className="bg-base-100 rounded-lg shadow-lg px-5 pt-12 pb-5 lg:p-5 relative border-solid border-[2px] border-gray-900 flex flex-col items-center">
          <h1 className="text-center text-2xl font-semibold mb-5">
            Tenha acesso a todos os dados!{' '}
          </h1>
          <p className="max-w-[600px] text-center text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
            labore consequatur, laborum, itaque debitis aut quae ullam,
            similique autem modi odio molestias vero! Quis quod labore
            voluptates nam accusamus pariatur?
          </p>
          <div className="w-full mt-8 max-w-[220px]">
            <CallActionPremiumButton label="Consultar" />
          </div>
          <div className="w-20 ld:w-28 absolute -top-8 -left-6 lg:-right-8">
            <Image src={Medal} alt="MEDAL" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallActionPremiumConsult;
