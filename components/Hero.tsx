'use client';

import Image from 'next/image';
import TestimonialsAvatars from './TestimonialsAvatars';
import config from '@/config';
import ConsultImage from '@/app/images/consultar-cpf.jpg';
import Teste from '@/app/images/consultar-cpf.svg';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import React from 'react';

const Hero = () => {
  const [value, setValue] = useState<string>('');
  const [requiredValue, setRequiredValue] = React.useState<boolean>(false);
  const router = useRouter();

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

    if (inputValue) {
      setRequiredValue(false);
    } else {
      setRequiredValue(true);
    }
  };

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (value && value.length) {
      //@ts-ignore
      document.getElementById('my_modal_3').showModal();

      setTimeout(() => {
        router.push('/result');
      }, 3000);
    } else {
      setRequiredValue(true);
    }
  }

  return (
    <section
      id="consult"
      className="mx-auto bg-base-200 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20"
    >
      <div className="flex flex-col gap-0 lg:gap-0 items-center justify-center text-center lg:text-left lg:items-start">
        <h1 className="font-bold text-4xl lg:text-6xl tracking-tight mb-2">
          Faça agora mesmo uma <br /> consulta do seu <br /> CPF / CNPJ
        </h1>
        <p className="text-lg opacity-80 leading-relaxed mb-8 font-medium">
          Descubra suas informações somente com o seu CPF / CNPJ
        </p>
        <div className="">
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="flex items-center gap-5"
          >
            <div className="relative">
              <input
                onChange={(e) => handleChange(e)}
                value={value}
                type="text"
                placeholder="CPF/CNPJ"
                className="input input-bordered input-lg w-full max-w-xs bg-gray-200 text-black text-lg border-[2px] h-[72px]"
              />
              {requiredValue && (
                <span className="text-sm text-red-600 font-medium mt-1 flex items-center gap-2 absolute -bottom-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                    className="fill-red-600"
                  >
                    <path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
                  </svg>
                  Esse campo é obrigatório
                </span>
              )}
            </div>
            <button
              type="submit"
              className="btn btn-active btn-primary h-[72px] text-white text-sm md:text-base font-medium"
            >
              Consultar
            </button>
          </form>
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
      <dialog id="my_modal_3" className="modal ">
        <div className="modal-box flex flex-col items-center justify-center min-h-[200px] max-w-[360px] shadow-lg">
          <form method="dialog">
            <span className="loading loading-bars loading-lg bg-primary"></span>
          </form>
          <h3 className="font-semibold text-xl uppercase text-center">
            Aguarde!
          </h3>
          <p className="text-base font-medium">Estamos fazendo sua busca</p>
        </div>
      </dialog>
    </section>
  );
};

export default Hero;
