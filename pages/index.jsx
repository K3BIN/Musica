import Container from "../components/container";
import axios from 'axios';
import Link from "next/link";
import React, {useState, useEffect} from 'react';

const index = () => {  
    const [instrumentos, setInstrumentos] = useState([]);
    const obtenerInstrumentos = async () => {
    const res = await axios.get(
      "https://my-json-server.typicode.com/K3BIN/Rutas/instrumentos"
    );
    const instrumentos = await res.data;
    setInstrumentos(instrumentos);
  };
  useEffect(() => {
    obtenerInstrumentos();
  }, []);
    return(
        <Container>
        {/**Header card */}
        <header className="row">
        <div className="col-md-12">
          <div className="card card-body bg-secondary text-light">
            <div className="row">
              <div className="col-md-4">
                <img
                  src="instrumentos.png "
                  alt="intrumentos"
                  className="img-fluid rounded-circle"
                />
              </div>
              <div className="col-md-8">
                <h1>Una amplia selección de recursos</h1>
                <h4>#MusciForAll</h4>
                <p>
                  Elige entre los tantos cursos musicales que tenemos en nuestro catálogo para que aprendas y desarrolles tus habilidades al maximo.
                  Aprende con cursos online gratis música, mezcla, producción musical y más, de la mano de una de las mejores escuelas de música del mundo: Berklee College of Music. Conviértete en un músico integral y consigue los mejores trabajos en música. Aprende a tocar guitarra eléctrica, acústica y más.
                </p>
                <p>En este curso aprenderás a definir el rol y las responsabilidades de un productor musical, apreciar la importancia de tener una metodología para que con el tiempo elabores tus propias estrategias de trabajo, capturar tu instinto musical y convertirlo en herramientas útiles, preparar tu DAW (Digital Audio Workstation) para analizar una canción de modo eficiente, maximizar el impacto de la estructura de una canción o tema musical y mucho más.</p>
                <a href="/Saber_Mas">Saber más</a>
              </div>
            </div>
          </div>
        </div>
        </header>

        {/**iconos */}
        <div className="row py-4">
        <div className="col md-12">
          <div className="card">
          <div className="row">
          <div className="col-md-2">
                <img
                  src="play.png "
                  alt="intrumentos"
                  className="img-fluid rounded-circle"
                />
            </div>
            <div className="col-md-10">
                <p>Aprende habilidades a 
                    tu ritmo 
                </p>
            </div>
          </div>
          </div>
        </div>
        <div className="col md-12">
          <div className="card">
          <div className="row">
          <div className="col-md-2">
                <img
                  src="fav.png "
                  alt="intrumentos"
                  className="img-fluid rounded-circle"
                />
            </div>
            <div className="col-md-10">
                <p>Nuestros cursos son 
                    impartidos por expertos
                </p>
            </div>
          </div>
          </div>
        </div>
        <div className="col md-12">
          <div className="card h-100">
          <div className="row">
          <div className="col-md-3">
                <img
                  src="record.png "
                  alt="intrumentos"
                  className="img-fluid rounded-circle"
                />
            </div>
            <div className="col-md-9">
                <p>Reproduce contenido 
                     cuando quieras
                </p>
            </div>
          </div>
          </div>
        </div>
      </div>
            
       {/**cursos */}     
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-dark">
            <div className="row">
              <div className="col-md-12">
                <h1 className="tex-center text-light">Cursos populares</h1>
              </div>
              {instrumentos.map(({ title, img }, i) => (
                <div className="col-md-4 p-2" key={i}>
                  <div className="card h-100">
                    <div className="overflow">
                      <img src={img} alt="" className="card-img-top" />
                    </div>
                    <div className="card-body">
                      <h3>{title}</h3>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam officiis enim accusantium distinctio nemo doloremque veritatis alias consequatur vero dolore sequi laborum deleniti repudiandae, quibusdam dicta temporibus repellat perspiciatis incidunt.</p>
                      <a href="#!"> Know more</a>
                    </div>
                  </div>
                </div>
              ))}
            
            </div>
            <div className="col-md-12">
              <div className="text-center mt-3">
                <Link href="/porfolio">
                  <a className="btn btn-outline-light">More Projects</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
        </Container>
    );
}
export default index;