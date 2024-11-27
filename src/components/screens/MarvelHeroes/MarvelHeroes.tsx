import { useEffect, useState } from "react";
import { IHeroes } from "../../../types/Heroes";
import { heroesData } from "../../../data/heroes";
import { ListHeroes } from "../../ui/ListHeroes/ListHeroes";

export const MarvelHeroes = () => {
  const [heros, setHeros] = useState<IHeroes[]>([]);

  const handleGetHeroesMarvel = ()=>{
    const result = heroesData.filter((hero)=>hero.publisher === "Marvel Comics");
    setHeros(result);
  };

  useEffect(()=>{
    handleGetHeroesMarvel()
  }, [])

  return <ListHeroes heroes={heros} title="Heroes de Marvel"/>

}
