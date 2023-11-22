import React from 'react';
import result from '@/shared/exemple-result.json';

function FreeResultComponent() {
  function handleShowValue(value: string) {
    if (value) {
      return value;
    } else {
      return '-';
    }
  }

  return (
    <div className="min-h-screen bg-base-300 pt-[220px]">
      <div className="flex flex-col items-center pl-5 pr-5">
        <div className="bg-base-100 max-w-max w-full rounded-lg p-8 ml-12 mr-12 shadow-lg">
          <div className="flex flex-col md:flex-row gap-8 justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 text-center">
                Resultado para o CPF/CNPJ:
              </h2>
              <div className="flex flex-col items-center mt-8">
                <input
                  value={result.sintese.reg.cpf}
                  type="text"
                  placeholder="CPF/CNPJ"
                  className="input text-center input-bordered input-lg w-full max-w-xs bg-gray-200 text-black text-2xl border-[2px] h-[72px]"
                />
              </div>
            </div>
            <ul className="grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] gap-5">
              <li>
                <span className="block w-full bg-primary text-white text-lg text-center rounded-t-lg p-2">
                  Nome
                </span>
                <span className="block w-full bg-base-200 shadow-lg py-4 px-2 text-center">
                  {handleShowValue(result.sintese.reg.nome)}
                </span>
              </li>
              <li>
                <span className="block w-full bg-primary text-white text-lg text-center rounded-t-lg p-2">
                  Primeiro nome
                </span>
                <span className="block w-full bg-base-200 shadow-lg py-4 px-2 text-center">
                  {handleShowValue(result.sintese.reg.primeiro_nome)}
                </span>
              </li>
              <li>
                <span className="block w-full bg-primary text-white text-lg text-center rounded-t-lg p-2">
                  Sobrenome
                </span>
                <span className="block w-full bg-base-200 shadow-lg py-4 px-2 text-center">
                  {handleShowValue(result.sintese.reg.ultimo_nome)}
                </span>
              </li>
              <li>
                <span className="block w-full bg-primary text-white text-lg text-center rounded-t-lg p-2">
                  Gênero
                </span>
                <span className="block w-full bg-base-200 shadow-lg py-4 px-2 text-center">
                  {handleShowValue(result.sintese.reg.sexo)}
                </span>
              </li>
              <li>
                <span className="block w-full bg-primary text-white text-lg text-center rounded-t-lg p-2">
                  Data de nascimento:
                </span>
                <span className="block w-full bg-base-200 shadow-lg py-4 px-2 text-center">
                  {handleShowValue(result.sintese.reg.nascimento)}
                </span>
              </li>
              <li>
                <span className="block w-full bg-primary text-white text-lg text-center rounded-t-lg p-2">
                  Nome da mãe:
                </span>
                <span className="block w-full bg-base-200 shadow-lg py-4 px-2 text-center">
                  {handleShowValue(result.sintese.reg.mae)}
                </span>
              </li>
              <li>
                <span className="block w-full bg-primary text-white text-lg text-center rounded-t-lg p-2">
                  Nome do pai:
                </span>
                <span className="block w-full bg-base-200 shadow-lg py-4 px-2 text-center">
                  {handleShowValue(result.sintese.reg.pai)}
                </span>
              </li>
              <li>
                <span className="block w-full bg-primary text-white text-lg text-center rounded-t-lg p-2">
                  Estado civil:
                </span>
                <span className="block w-full bg-base-200 shadow-lg py-4 px-2 text-center">
                  {handleShowValue(result.sintese.reg.estado_civil)}
                </span>
              </li>
              <li>
                <span className="block w-full bg-primary text-white text-lg text-center rounded-t-lg p-2 text-center">
                  RG:
                </span>
                <span className="block w-full bg-base-200 shadow-lg py-4 px-2 text-center">
                  {handleShowValue(result.sintese.reg.rg)}
                </span>
              </li>
              <li>
                <span className="block w-full bg-primary text-white text-lg text-center rounded-t-lg p-2">
                  Nacionalidade:
                </span>
                <span className="block w-full bg-base-200 shadow-lg py-4 px-2 text-center">
                  {handleShowValue(result.sintese.reg.nacionalidade)}
                </span>
              </li>
              <li>
                <span className="block w-full bg-primary text-white text-lg text-center rounded-t-lg p-2">
                  Título de eleitor:
                </span>
                <span className="block w-full bg-base-200 shadow-lg py-4 px-2 text-center">
                  {handleShowValue(result.sintese.reg.titulo_eleitor)}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FreeResultComponent;
