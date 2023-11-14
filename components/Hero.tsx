'use client';

import Image from 'next/image';
import TestimonialsAvatars from './TestimonialsAvatars';
import config from '@/config';
import ConsultImage from '@/app/images/consultar-cpf.jpg';
import Teste from '@/app/images/consultar-cpf.svg';
import { ChangeEvent, useState } from 'react';

const Hero = () => {
  const [value, setValue] = useState<string>('');

  const MAX_LENGTH_CNPJ = 18; // Defina o tamanho máximo de um CNPJ

  const applyMask = (inputValue: string) => {
    let maskedValue = inputValue.replace(/\D/g, '');

    if (maskedValue.length <= 11) {
      maskedValue = maskedValue.replace(
        /^(\d{3})(\d{3})(\d{3})(\d{2})$/,
        '$1.$2.$3-$4'
      );
    } else {
      maskedValue = maskedValue.replace(
        /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
        '$1.$2.$3/$4-$5'
      );
    }

    return maskedValue;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (inputValue.length <= MAX_LENGTH_CNPJ) {
      const maskedValue = applyMask(inputValue);
      setValue(maskedValue);
    }
  };

  return (
    <section className="mx-auto bg-base-200 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      <div className="flex flex-col gap-0 lg:gap-0 items-center justify-center text-center lg:text-left lg:items-start">
        <h1 className="font-bold text-4xl lg:text-6xl tracking-tight mb-2">
          Faça agora mesmo uma <br /> consulta do seu <br /> CPF / CNPJ
        </h1>
        <p className="text-lg opacity-80 leading-relaxed mb-8 font-medium">
          Descubra suas informações somente com o seu CPF / CNPJ
        </p>
        <div className="flex items-center gap-5">
          <input
            onChange={(e) => handleChange(e)}
            value={value}
            type="text"
            placeholder="CPF/CNPJ"
            className="input input-bordered input-lg w-full max-w-xs bg-gray-200 text-black text-lg border-[2px] h-[72px]"
          />
          <button className="btn btn-active btn-primary h-[72px] text-white text-sm md:text-base font-medium">
            Consultar
          </button>
        </div>
      </div>
      <div className="lg:w-full max-w-[620px]">
        <Image
          src={Teste}
          alt="Product Demo"
          className="w-full"
          priority={true}
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default Hero;
