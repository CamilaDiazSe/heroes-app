import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../heroes/HeroCard';

export const SearchScreen = ({history}) => {

    const location = useLocation();
    console.log(location);

    const {q = ''} = queryString.parse(location.search);
 

    const [{ searchText }, handleInputChange] = useForm({
        searchText: q
    });

    const heroesFiltered = useMemo (()=>getHeroesByName(q),[q]);

    const handleSearch = (e) =>{
        e.preventDefault();
        history.push(`?q=${ searchText }`);
    }

    return (
        <>
            <h1>Search Screen</h1>
            <hr/>

            <div className="row">
                <h4>Search form</h4>
                <hr/>   
                <form onSubmit= { handleSearch }>
                    <input
                        type="text"
                        placeholder="Find your Hero"
                        className="form-control"
                        name="searchText"
                        autoComplete="off" 
                        value={ searchText }
                        onChange={ handleInputChange }
                    />
                    <button
                        type="submit"
                        className="btn mt-1 btn-block btn-outline-primary"
                    >
                        Search...
                    </button>
                </form>
            </div>
            <div className="col-7">
                <h4>Results</h4>
                <hr/>
                {
                    (q=== '')
                    &&
                    <div className="alert alert-info">
                        Search a hero
                    </div>
                }
                {
                    (q!== '' && heroesFiltered.length=== 0)
                    &&
                    <div className="alert alert-danger">
                        There is not a hero with {q}
                    </div>
                }
                {
                    heroesFiltered.map(hero=>(
                        <HeroCard 
                            key={ hero.id }
                            {...hero}
                        />        
                    ))
                }
            </div>
        </>
    )
}
