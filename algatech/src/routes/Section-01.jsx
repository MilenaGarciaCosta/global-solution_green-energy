import "../css/Section-01.css";
import agua from "../img/agua-imagem1.png";
import CelulaAlga from "../img/imagem-alga1.png";
import algaSustentabilidade from "../img/imagem-alga3.png"

const Section01 = () => {
  return (
    <>
      <section className="container-potencial">
        <div className="ctn-explicacao">
          <h1>Aproveitando o Potencial das Algas </h1>
          <p id="text-alga">
            Sustentabilidade Impulsionada por Algas: Revelando a Notável
            Capacidade das Algas de Absorver CO₂ e Gerar Energia Renovável
          </p>
          <div className="btn-potencial">
            <button id="btn-explore">Explorar Agora</button>
            <button id="btn-learn">Saiba Mais</button>
          </div>
        </div>
        <img src={agua} id="img-agua" alt="" />
      </section>

      <section className="container-Beneficios">
        <div id="img-bolha"></div>
        <div className="containerBeneficios">
          <h1>Benefícios das algas</h1>
          <div className="beneficiosItens">
            <div>
              <h2>A notável capacidade das algas de absorver CO₂ e gerar</h2>
            </div>

            <div>
              <h2>Da produção de biocombustíveis à purificação de água</h2>
            </div>

            <div>
              <h2>
                A excepcional eficiência das algas na conversão da luz solar e
                do CO₂ em
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="containerPoderDaAlga">
        <img src={CelulaAlga} alt="Célula de Alga" />
        <div className="informacoesCelulaAgua">
          <h1>Desbloqueando o poder das algas</h1>
          <p>
            Descubra como os painéis solares integrados com algas estão
            revolucionando a indústria de energia renovável. Aprenda sobre a
            ciência por trás desta tecnologia inovadora e seu profundo
          </p>
          <div className="botoesPoderDaAlga">
            <button id="btn-co">Comece agora</button>
            <p>Sustentabilidade em ação</p>
          </div>
        </div>
      </section>

      <section className="containerSustentabilidade">
        <div className="informacoesSustentabilidade">
          <h1>Capacitação para uma economia sustentável </h1>
          <p>
            Junte-se a nós numa viagem de gestão ambiental à medida que
            revelamos as capacidades notáveis das tecnologias baseadas em algas.
            Explore estudos de caso, aceda à nossa calculadora de poupanças
          </p>
          <div className="btn-potencial">
            <button id="btn-explore">Explore mais</button>
            <button id="btn-learn">Comece aqui</button>
          </div>
        </div>
        <img src={algaSustentabilidade} alt="" />
      </section>
    </>
  );
};

export default Section01;
