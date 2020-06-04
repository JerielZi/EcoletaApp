import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import {  Map, TileLayer, Marker, Popup} from 'react-leaflet';

import './styles.css';

import logo from '../../assets/logo.svg';

const CreatePoint = () => {
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
            <li className="selected"> 
              <img src="http://localhost:3333/uploads/oleo.svg" alt="Teste"/>
              <span>Óleo de Cozinha</span>
            </li>
            <li>
              <img src="http://localhost:3333/uploads/oleo.svg" alt="Teste"/>
              <span>Óleo de Cozinha</span>
            </li>
            <li>
              <img src="http://localhost:3333/uploads/oleo.svg" alt="Teste"/>
              <span>Óleo de Cozinha</span>
            </li>
            <li>
              <img src="http://localhost:3333/uploads/oleo.svg" alt="Teste"/>
              <span>Óleo de Cozinha</span>
            </li>
            <li>
              <img src="http://localhost:3333/uploads/oleo.svg" alt="Teste"/>
              <span>Óleo de Cozinha</span>
            </li>
            <li>
              <img src="http://localhost:3333/uploads/oleo.svg" alt="Teste"/>
              <span>Óleo de Cozinha</span>
            </li>
          </ul>
        </fieldset>

        <button type="submit">Registar ponto de coleta</button>
      </form>
    </div>
  );
};

export default CreatePoint;