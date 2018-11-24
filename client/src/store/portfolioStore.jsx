import { observable } from "mobx";

class PortfolioStore {

  @observable certifications = [
    {title: 'Responsive Web Design', institute: 'FreeCodeCamp', link: "https://www.freecodecamp.org/certification/dubask/responsive-web-design",
    smallImg: '/img/responsiveWebDeSmall.jpg', smallImgAlt: "responsiveWebDeSmall", bigImg: '/img/responsiveWebDesign.png', bigImgAlt: 'responsiveWebDeBig',details: 'From applied visual design to flexbox. 300 hours of responsivness and flexebility '},

    {title: 'Structure & Readability', institute: 'Benjamin Melki', link: 'https://www.udemy.com/certificate/UC-Z6CAIZQG/', smallImg: "/img/jswp.jpg", smallImgAlt: "javaScript the weird parts", bigImg: '/img/JavaScripttheWeirdParts.jpg', bigImgAlt: 'JS Weird Parts', details: 'apply a systematic approach to properly start any mobile, web or desktop software project: organize the flow of any program. organize projects folders structure. files names. code high quality, readable and maintainable code properly name variables and write good code comments simplify their conditional structures. create good functions and classes'},

    {title: 'JS - The Weird Parts', institute: 'Anthony Alecia', link: 'https://www.udemy.com/certificate/UC-GTBY8TWK/', smallImg: "/img/jswp.jpg", smallImgAlt: "javaScript the weird parts", bigImg: '/img/JavaScripttheWeirdParts.jpg', bigImgAlt: 'JS Weird Parts', details: 'Gaining a deep understanding of Javascript, learn how Javascript works under the hood. objects and object literals, function expressions, prototypical inheritance, functional programming, scope chains, function constructors (plus new ES6 features), immediately invoked function expressions (IIFEs), call, apply, bind, and more.'},

    {title: 'Code Wars (Algorithm)', smallImg: '/img/codewarssmall.png', smallImgAlt: 'codewarsSmall', 
    details: 'Codewars is an educational community for computer programming. On the platform, software developers train on programming challenges known as kata.',bigImg:'https://www.codewars.com/users/Dash_9/badges/large', bigImgAlt: 'codwarsBig'}
  ]

  @observable projects = [
    {title: 'Portfolio', titleImg: '/img/portfolio3.jpg', titleImgAlt: 'portfolio', link: 'https://www.drordvash.com', bigImg:'/img/meetme.jpg', bigImgAlt: 'meetmePortfolio', type: 'website', details:'Technologies: HTML/CSS, React & Mobx, NodeJs, NodeMailer'},
    
    {title: 'WheresMyFood', titleImg: '/img/whereismyfood.jpg', titleImgAlt: 'wmf', link:'https://whereismyfood.herokuapp.com/', bigImg:'/img/wheremyfoodat.png', bigImgAlt: 'wmfBig', type: 'webapp', details:'Delivery App including 3 sides (client, delivery employee, restaurant) that monitors the progress of food prapration and delivery time and progress via google maps. Technologies: jQuery, GoogleMaps, NodeJs, '},

    {title: 'WheresMyFood', titleImg: '/img/wmf.jpg', titleImgAlt: 'wmf', link:'https://whereismyfood.herokuapp.com/', bigImg:'/img/triplan.png', bigImgAlt: 'wmfBig', type: 'webapp', details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'},

    {title: 'WheresMyFood', titleImg: '/img/wmf.jpg', titleImgAlt: 'wmf', link:'https://whereismyfood.herokuapp.com/', bigImg:'/img/triplan.png', bigImgAlt: 'wmfBig', type: 'webapp', details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'},

  ]

}
const store = new PortfolioStore();

export default store;