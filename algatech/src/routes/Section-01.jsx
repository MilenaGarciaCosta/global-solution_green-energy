import "../css/Section-01.css" 
import agua from "../img/agua-imagem1.png"


const Section01 = () => {
  return (
    <>
    <section className='container-potencial'>
      <div className='ctn-explicacao'>
        <h1>Aproveitando o Potencial das Algas </h1>
        <p id="text-alga">Sustentabilidade Impulsionada por Algas: Revelando a Notável Capacidade das Algas de Absorver CO₂ e Gerar Energia Renovável</p>
        <div className='btn-potencial'>
          <button id='btn-explore'>Explorar Agora</button>
          <button id='btn-learn'>Saiba Mais</button>
        </div>
      </div>
      <div className='ctn-image'>
       <img src={agua} id="img-agua" alt="" />
      </div>
    </section>

    <section className="container-Beneficios">
        <div id="img-bolha"></div>
        
    </section>
    </>
    
  );
};

export default Section01;
