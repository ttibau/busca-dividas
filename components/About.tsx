import React from 'react';
import AboutImage from '@/app/images/aboutUs.svg';
import Image from 'next/image';

function AboutComponent() {
  return (
    <section className="mx-auto bg-white flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      <Image
        src={AboutImage}
        alt="sobre"
        className="max-w-[300px] lg:max-w-[initial]"
      />
      <div>
        <span className="block text-xl md:text-2xl font-semibold text-primary">
          SOBRE
        </span>
        <span className="block uppercase font-bold text-2xl md:text-3xl">
          Quem somos nós
        </span>
        <p className="max-w-[580px] leading-5 text-base md:text-lg font-normal mt-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
          voluptas assumenda molestiae optio dolore quas temporibus, aspernatur
          earum asperiores magni, dolorem adipisci! Unde aliquid id eius nisi
          iure incidunt necessitatibus?
        </p>
        <ul className="mt-5 flex flex-col gap-8">
          <li>
            <div className="grid grid-cols-[40px_1fr] md:grid-cols-[48px_1fr] gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
                className="w-10 h-10 md:w-12 md:h-12 fill-primary border-[1px] border-solid border-primary p-2 rounded-full"
              >
                <path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z" />
              </svg>
              <div>
                <span className="block text-xl md:text-2xl font-semibold">
                  Consulta segura
                </span>
                <span className="block text-base md:text-lg font-normal leading-5">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </span>
              </div>
            </div>
          </li>
          <li>
            <div className="grid grid-cols-[40px_1fr] md:grid-cols-[48px_1fr] gap-5">
              <svg
                className="w-10 h-10 md:w-12 fill-primary md:h-12 border-[1px] border-solid border-primary p-2 rounded-full"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 320 512"
              >
                <path d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z" />
              </svg>
              <div>
                <span className="block text-xl md:text-2xl font-semibold">
                  Custo benefício
                </span>
                <span className="block text-base md:text-lg font-normal leading-5">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </span>
              </div>
            </div>
          </li>
          <li>
            <div className="grid grid-cols-[40px_1fr] md:grid-cols-[48px_1fr] gap-5">
              <svg
                className="w-10 h-10 md:w-12 fill-primary md:h-12 border-[1px] border-solid border-primary p-2 rounded-full"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 640 512"
              >
                <path d="M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L550.2 352H592c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48H516h-4-.7l-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48H48c-26.5 0-48 21.5-48 48V304c0 26.5 21.5 48 48 48H156.2l91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123z" />
              </svg>
              <div>
                <span className="block text-xl md:text-2xl font-semibold">
                  Simplicidade nas consultas
                </span>
                <span className="block text-base md:text-lg font-normal leading-5">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </span>
              </div>
            </div>
          </li>
        </ul>
        <button className="btn btn-active btn-primary h-[54px] text-white text-sm md:text-base font-medium mt-12 w-full">
          Clique para fazer uma consulta
        </button>
      </div>
    </section>
  );
}

export default AboutComponent;
