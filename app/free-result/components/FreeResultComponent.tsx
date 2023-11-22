import React from 'react';
import result from '@/shared/exemple-result.json';
import '../style/style.css';

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
        <div className="bg-base-100 w-full rounded-lg p-8 ml-12 mr-12 shadow-lg mb-12">
          <div className="flex flex-col md:flex-row gap-0 md:gap-5 items-center">
            <h2 className="text-2xl font-semibold text-gray-800 text-center mt-8">
              Resultado para o CPF/CNPJ:
            </h2>
            <div className="flex flex-col items-center mt-8">
              <span className="bg-gray-200 shadow-lg text-2xl p-2 rounded-lg">
                {result.sintese.reg.cpf}
              </span>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-20 mt-12">
            <div className="overflow-x-auto mt-8">
              <span className="block text-xl font-semibold ml-2 mb-5 bg-base-200 max-w-max p-2 rounded-lg shadow-lg">
                - Dados de registro:
              </span>
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <td>Nome:</td>
                    <td>{handleShowValue(result.sintese.reg.nome)}</td>
                  </tr>
                  <tr>
                    <td>CPF:</td>
                    <td>{handleShowValue(result.sintese.reg.cpf)}</td>
                  </tr>
                  <tr>
                    <td>Primeiro nome:</td>
                    <td>{handleShowValue(result.sintese.reg.primeiro_nome)}</td>
                  </tr>
                  <tr>
                    <td>Nome do meio:</td>
                    <td>{handleShowValue(result.sintese.reg.nome_meio)}</td>
                  </tr>
                  <tr>
                    <td>Ultimo nome:</td>
                    <td>{handleShowValue(result.sintese.reg.ultimo_nome)}</td>
                  </tr>
                  <tr>
                    <td>Gênero:</td>
                    <td>{handleShowValue(result.sintese.reg.sexo)}</td>
                  </tr>
                  <tr>
                    <td>Data de nascimento:</td>
                    <td>{handleShowValue(result.sintese.reg.nascimento)}</td>
                  </tr>
                  <tr>
                    <td>Nome da mãe:</td>
                    <td>{handleShowValue(result.sintese.reg.mae)}</td>
                  </tr>
                  <tr>
                    <td>Nome do pai:</td>
                    <td>{handleShowValue(result.sintese.reg.pai)}</td>
                  </tr>
                  <tr>
                    <td>Estado civil:</td>
                    <td>{handleShowValue(result.sintese.reg.estado_civil)}</td>
                  </tr>
                  <tr>
                    <td>RG:</td>
                    <td>{handleShowValue(result.sintese.reg.rg)}</td>
                  </tr>
                  <tr>
                    <td>Nacionalidade:</td>
                    <td>{handleShowValue(result.sintese.reg.nacionalidade)}</td>
                  </tr>
                  <tr>
                    <td>Titulo de eleitor:</td>
                    <td>
                      {handleShowValue(result.sintese.reg.titulo_eleitor)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="overflow-x-auto">
              <span className="block text-xl font-semibold ml-2 mb-5 bg-base-200 max-w-max p-2 rounded-lg shadow-lg mt-8">
                - Dados de contato:
              </span>
              <div className="mt-8">
                {/* telefone */}
                <div>
                  <span className="block text-lg font-semibold mb-2">
                    Telefone(s):
                  </span>
                  <div className="flex flex-col gap-2">
                    {result.telefones.registro.map((tel, i: number) => {
                      return (
                        <span key={i} className="block">
                          {`(${tel.ddd}) ${tel.telefone}`}{' '}
                        </span>
                      );
                    })}
                  </div>
                </div>
                {/* emails */}
                <div className="mt-5">
                  <span className="block text-lg font-semibold mb-2">
                    Email(s):
                  </span>
                  <div className="flex flex-col gap-2">
                    {result.emails.registro.map((email, i: number) => {
                      return (
                        <span key={i} className="block">
                          {`${email.email}`}
                        </span>
                      );
                    })}
                  </div>
                </div>
                {/* irmãos */}
                <div>
                  <span className="block text-xl font-semibold ml-2 mb-5 bg-base-200 max-w-max p-2 rounded-lg shadow-lg mt-8">
                    - Irmão(s):
                  </span>
                  <div className="flex flex-col gap-2">
                    {result.parentes.irmaos.registro.map((irmao, i: number) => {
                      return (
                        <div key={i}>
                          <span className="">{`${irmao.nome} - `}</span>
                          <span className="font-semibold">{`Nascido em ${irmao.nascimento}`}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <div>
                <span className="block text-xl font-semibold ml-2 mb-5 bg-base-200 max-w-max p-2 rounded-lg shadow-lg mt-8">
                  - Endereço(s):
                </span>
                <div>
                  {result.enderecos.registro.map((address, i: number) => {
                    return (
                      <div key={i}>
                        <span className="block text-lg font-medium mb-4 mt-4">
                          Endereço: {i + 1}
                        </span>
                        <ul>
                          <li>
                            <span className="font-bold text-sm">
                              Endereço:{' '}
                            </span>
                            <span className="text-sm">
                              {address.endCompleto}
                            </span>
                          </li>
                          <li>
                            <span className="font-bold text-sm">Bairro: </span>
                            <span className="text-sm">{address.bairro}</span>
                          </li>
                          <li>
                            <span className="font-bold text-sm">Cidade: </span>
                            <span className="text-sm">{address.cidade}</span>
                          </li>
                          <li>
                            <span className="font-bold text-sm">Número: </span>
                            <span className="text-sm">{address.numero}</span>
                          </li>
                          <li>
                            <span className="font-bold text-sm">
                              Complemento:{' '}
                            </span>
                            <span className="text-sm">{address.compl}</span>
                          </li>
                          <li>
                            <span className="font-bold text-sm">CEP: </span>
                            <span className="text-sm">{address.cep}</span>
                          </li>
                          <li>
                            <span className="font-bold text-sm">UF: </span>
                            <span className="text-sm">{address.uf}</span>
                          </li>
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div>
                <span className="block text-xl font-semibold ml-2 mb-5 bg-base-200 max-w-max p-2 rounded-lg shadow-lg mt-8">
                  - Filho(s):
                </span>
                <div className="flex flex-col gap-2">
                  {result.parentes.filhos.qtd &&
                    result.parentes.filhos.registro.length > 0 &&
                    result.parentes.filhos.registro.map((filho, i: number) => {
                      return (
                        <div key={i}>
                          <span className="">{`${filho.nome} - `}</span>
                          <span className="font-semibold">{`Nascido em ${filho.nascimento}`}</span>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FreeResultComponent;
