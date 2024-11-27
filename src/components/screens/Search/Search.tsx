import { useEffect, useState } from "react";
import { useForm } from "../../../hooks/useForm"
import { IHeroes } from "../../../types/Heroes";
import { heroesData } from "../../../data/heroes";
import { Form, InputGroup } from "react-bootstrap";
import { CardHero } from "../../ui/CardHero/CardHero";
import styles from "./Search.module.css";


export const Search = () => {

  const  {values, handleChange} = useForm({
    search: ""
  });

  const {search} = values;

  const [heros, setHeros] = useState<IHeroes[]>([]);

  useEffect(()=>{
//METODO QUE FILTRA TODOS LOS ELEMENTOS, EL lowercase pasa todo a minuscula, el trim() borra espacios y el includes(search) hace que se busque lo que incluya el search
    const result = heroesData.filter((h)=> h.superhero.toLowerCase().trim().includes(search));

    setHeros(result);
    
  },[search]);

  return (
    <div className={styles.containerSearch}>
      <div>
        <InputGroup className="mb-3">
          <InputGroup.Text>Ingrese heroe</InputGroup.Text>

          <Form.Control onChange={handleChange} type="text" name="search" />

        </InputGroup>
      </div>

      <div className={styles.containerList}>
        {
          heros.length > 0 ? (
            <>
                {heros.map((hero)=>(
                  <div key={hero.id}  style={{width: "60%"}}>
                    <CardHero hero={hero} />
                  </div>
                ))}
            </>
          )
          : 
          <div>
            <h2>NO coincide la busqueda</h2>
          </div>
        }
      </div>

    </div>
  )
}
