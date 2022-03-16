import Container from "../components/container";
import axios from 'axios';
import Link from "next/link";
import React, {useState, useEffect} from 'react';
import Cards from "./cards";

const about = () =>{
    const [usuarios, setUsuarios] = useState([]);
    const obtenerUsuarios = async () => {
    const res = await axios.get(
      "https://my-json-server.typicode.com/K3BIN/Rutas/lista1"
    );
    const users = await res.data;
    setUsuarios(users);
  };
  useEffect(() => {
    obtenerUsuarios();
  }, []);
  
    return(
        <Container>
            <div className="row mt-5">
        <div className="col" />
        <div className="col">
          <h1>Colaboradores</h1>
          <nav>
            {usuarios.map((item) => (
              <div key={item.id}>
                <hr/><hr/>
                
                    <Cards imagen={item.pic_profile} titulo={`${item.first_name} ${item.last_name}`} />
                  
              </div>
            ))}
          </nav>
        </div>
        <div className="col" />
      </div>
        </Container>
    );
}

export default about; 