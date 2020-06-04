import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import {  Map, TileLayer, Marker} from 'react-leaflet';
import api from '../../services/api';
import axios from 'axios';

import './styles.css';

import logo from '../../assets/logo.svg';

interface Item {
  id: number;
  title: string;
  image_url: string;
}

interface IPMACITIESResponse {
  local: string;
  idAreaAviso: string; 
}

const CreatePoint = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  
  useEffect(() => {
    api.get('items').then(response => {
      setItems(response.data);
    })
  }, []);

  /**
   * axios.get<pipipopo[]>('https://api.pipipopo.com/etc/etc')
  .then(response => response.json()) //chama a function json() pro seu response pra trasnformar em um json
  .then(response => { 
    //e aqui continua o que vc ja tinha feito
 }
   */
 
  useEffect(() => {
    axios.get<IPMACITIESResponse[]>('https://api.ipma.pt/open-data/distrits-islands.json')
    .then(response => {
       const cities = response.data.map(city => console.log(city));
      
      // setCities(cities);
      //console.log(cities)

    });
  }, []);

  return (
    <div id="page-create-point">
      <header>
        <img src={logo} alt="Ecoleta"/>

        <Link to="/">
          <FiArrowLeft />
          Voltar para home
        </Link>
      </header>

      <form>
        <h1>Registo do <br/> ponto de coleta</h1>

        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>

          <div className="field">
            <label htmlFor="name">Nome da entidade</label>
            <input 
            type="text"
            name="name"
            id="name"
            />
          </div>

          <div className="field-group">
          <div className="field">
            <label htmlFor="email">E-mail</label>
            <input 
            type="email"
            name="email"
            id="email"
            />
          </div>

          <div className="field">
            <label htmlFor="whatsapp">Whatsapp</label>
            <input 
            type="text"
            name="whatsapp"
            id="whatsapp"
            />
          </div>

          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Endereços</h2>
            <span>Selecione o endereço no mapa.</span>
          </legend>

          <Map center={[38.7100669, -9.311829]} zoom={15}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[38.7100669, -9.311829]} zoom={15}/>
          </Map>

          <div className="field-group">
            <div className="field">
              <label htmlFor="city">Cidade</label>
              <select name="city" id="city">
                <option value="0">Selecione uma cidade</option>
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Ítens de coletas</h2>
            <span>Selecione um ou mais itens abaixo.</span>
          </legend>

          <ul className="items-grid">
            {items.map(item =>(
            <li key={item.id}> 
              <img src={item.image_url} alt={item.title}/>
              <span>{item.title}</span>
            </li>            
            ))}
          </ul>
        </fieldset>

        <button type="submit">Registar ponto de coleta</button>
      </form>
    </div>
  );
};

export default CreatePoint;