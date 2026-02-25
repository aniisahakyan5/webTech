import React, { useEffect, useState } from 'react';
import Calculator from './Calculator.jsx';
import TodoList from './TodoList.jsx';
import Weather from './Weather.jsx';
import Quotes from './Quotes.jsx';
import './ServicesDashboard.css';

const componentMap = {
  '/calculator': Calculator,
  '/todo': TodoList,
  '/weather': Weather,
  '/quotes': Quotes
};

const ServicesDashboard = () => {
  const [services, setServices] = useState([]);
  const [visibleIds, setVisibleIds] = useState([]);

  useEffect(() => {
    fetch('/services.json')
      .then(response => response.json())
      .then(data => {
        setServices(data.services);
        setVisibleIds(data.services.map(s => s.id)); // բոլորը սկզբում երևում են
      })
      .catch(error => console.error('Տվյալների ստացման սխալ:', error));
  }, []);

  const handleClose = (id) => {
    setVisibleIds(prev => prev.filter(visibleId => visibleId !== id));
  };

  return (
    <div className="dashboard">
      <h1>Ծառայությունների Վահանակ</h1>
      {services.map(service => {
        if (!visibleIds.includes(service.id)) return null;

        const Component = componentMap[service.init];
        return (
          <section key={service.id} className="service-block">
            <div className="service-header">
              <h2>{service.name}</h2>
              <button className="close-btn" onClick={() => handleClose(service.id)}>❌</button>
            </div>
            <Component />
          </section>
        );
      })}
    </div>
  );
};

export default ServicesDashboard;
