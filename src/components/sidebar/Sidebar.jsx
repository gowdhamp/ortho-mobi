import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';
import sih from '../../assets/images/sih.jpg';
import bit from '../../assets/images/bit.png';
import sidebar_items from '../../assets/JsonData/sidebar_routes.json';

const SidebarItem = (props) => {
  const active = props.active ? 'active' : '';

  return (
    <div className="sidebar__item">
      <div className={`sidebar__item-inner ${active}`}>
        <i className={props.icon}></i>
        <span>{props.title}</span>
      </div>
    </div>
  );
};

const Sidebar = (props) => {
  const activeItem = sidebar_items.findIndex(
    (item) => item.route === props.location.pathname
  );

  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <i className="bx bx-plus-medical"></i>
        <h3> Ortho Mobi</h3>
      </div>
      {sidebar_items.map((item, index) => (
        <Link to={item.route} key={index}>
          <SidebarItem
            title={item.display_name}
            icon={item.icon}
            active={index === activeItem}
          />
        </Link>
      ))}
      <div className="sidebar_partners">
        <img src={sih} alt="sih_logo" width="150px" height="60px"></img>
        <img src={bit} alt="sih_logo" width="60px"></img>
      </div>
    </div>
  );
};

export default Sidebar;
