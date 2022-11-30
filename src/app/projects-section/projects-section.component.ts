import { Component } from '@angular/core';

interface IProject {
  img: string;
  title: string;
  description: string;
  siteURL: string;
  codeURL: string;
}

@Component({
  selector: 'projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.css'],
})
export class ProjectsSectionComponent {
  projects: IProject[] = [
    {
      img: 'https://matiasnetto.com.ar/_next/image?url=%2Fimages%2Fprojects%2FUrbanClothes%2Furban-clothes-img-1.jpg&w=1920&q=75',
      title: 'Urban Clothes (e-commerce)',
      description:
        'Urban clothes es una pagina web, estilo E-commerce, con diferentes categorías, productos con distintos talles, la posibilidad de agregar productos con descuento y hasta un carrito de compras para organizar tu pedido. Desarrollado con React, Redux y Styled-Components en el FrontEnd y Firebase como base de datos ',
      siteURL: 'https://catalogue-with-cart.web.app/',
      codeURL: 'https://github.com/matiasnetto/urban-clothes-commerce',
    },
    {
      img: 'https://matiasnetto.com.ar/_next/image?url=%2Fimages%2Fprojects%2FObraSocial%2Fobra-social-img-1.jpg&w=1920&q=75',
      title: 'Obra social',
      description:
        ' Obra social app es una aplicación web de gestión de turnos, con capacidad de registrar turnos en distintas fechas y horarios, con distintos doctores y visualizar una cartilla medica y de clínicas. Desarrollado con un Frontend (React) y un Backend (Node.js) independientes entre si, utilizando MongoDB, Express y MaterialUI como principales librerías. ',
      siteURL: 'https://obra-social-app.herokuapp.com/#/login',
      codeURL: 'https://github.com/matiasnetto/obra-social-frontend',
    },
    {
      img: 'https://matiasnetto.com.ar/_next/image?url=%2Fimages%2Fprojects%2FPersonalWebPage%2Fpersonal-web-page-img-1.jpg&w=1920&q=75',
      title: 'Página personal',
      description:
        ' Página personal destinada a mostrar mi marca personal, proyectos y estudios, para asi hacerme conocer frente a empresas y clientes. Cuenta con una estetica personal y animaciones que atraen la atencion del visitante. ',
      siteURL: 'https://matiasnetto.com.ar/',
      codeURL: 'https://github.com/matiasnetto/portfolio',
    },
    {
      img: 'https://matiasnetto.com.ar/_next/image?url=%2Fimages%2Fprojects%2FCreditCardForm%2Fcredit-card-form-img-1.png&w=1920&q=75',
      title: 'Credit card',
      description:
        'Un simple pero agradable formulario de tarjeta de credito desarrollado con React y TypeScript. Contiene un efecto 3D en la tarjeta y la posibilidad de elegir entre Mastercard o Visa',
      siteURL: 'https://matiasnetto.github.io/react-credit-card-form/',
      codeURL: 'https://github.com/matiasnetto/react-credit-card-form',
    },
  ];
}
