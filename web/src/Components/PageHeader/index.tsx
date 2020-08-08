import React from 'react';

import { Link } from "react-router-dom";

import logo from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg'

import './styles.css';

interface IPageHeaderProps {
  title: string
  subtitle?: string
}

const PageHeader: React.FC<IPageHeaderProps> = ( { children, title, subtitle }) => {
  return (
    <header className="page-header">
        <div className="top-bar-container">
          <Link to="/">
            <img src={backIcon} alt="Voltar"/>
          </Link>
          <img src={logo} alt="Proffy"/>
        </div>

        <div className="header-content">
          <strong>{title}</strong>
          { subtitle && (
            <p>{subtitle}</p>
          ) }
          { children }
        </div>
      </header>
  )
}

export default PageHeader