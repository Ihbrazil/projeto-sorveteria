import Image from "next/image";
import estilos from "./sabores.module.css";

import image1 from "../../../public/sabor_oreo.png";
import image2 from "../../../public/sabor_pistache.png";
import image3 from "../../../public/sabor_cookies_avela.png";
import image4 from "../../../public/sabor_kiwi.png";
import image5 from "../../../public/sabor_morango.png";
import image6 from "../../../public/sabor_limao.png"

export default function Sabores() {
    return (
      <>
        <main>
        <section className={estilos.secao_banner}>
          <div className={estilos.texto_banner}>
            <h1>NOSSOS SABORES</h1>
          </div>
        </section>

        <section className={estilos.secao_nossos_sabores}>
          <div className={estilos.container_card}>
            <Image className={estilos.img_card} src={image1} alt="Sorvete de Oreo" />
            <h3>Sorvete de Oreo</h3>
            <p>
              Delicioso sorvete sabor Oreo. Uma explosão de sabor.
            </p>
          </div>

          <div className={estilos.container_card}>
            <Image className={estilos.img_card} src={image2} alt="Sorvete de Pistache" />
            <h3>Sorvete Pistache</h3>
            <p>
              Cremoso sorvete sabor Pistache com pedacinhos de semente.
            </p>
          </div>

          <div className={estilos.container_card}>
            <Image className={estilos.img_card} src={image3} alt="Sorvete de Cookies & Avelã" />
            <h3>Sorvete de Cookies & Avelã</h3>
            <p>
              O nosso melhor sorvete. Você vai adorar o sabor.
            </p>
          </div>

          <div className={estilos.container_card}>
            <Image className={estilos.img_card} src={image4} alt="Sorvete de Kiwi" />
            <h3>Sorvete de Kiwi</h3>
            <p>
              Delicioso e refrescante sorvete sabor Kiwi. Rico em vitamina C.
            </p>
          </div>

          <div className={estilos.container_card}>
            <Image className={estilos.img_card} src={image5} alt="sorvetes diversos" />
            <h3>Sorvete de Oreo</h3>
            <p>
              Delicioso sorvete sabor Oreo. Uma explosão de sabor.
            </p>
          </div>

          <div className={estilos.container_card}>
            <Image className={estilos.img_card} src={image6} alt="sorvetes diversos" />
            <h3>Sorvete de Oreo</h3>
            <p>
              Delicioso sorvete sabor Oreo. Uma explosão de sabor.
            </p>
          </div>
        </section>
      </main>
      </>
    );
  }