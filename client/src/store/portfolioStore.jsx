import { observable } from "mobx";

class PortfolioStore {

  @observable certifications = [
    {title: 'Responsive Web Design', institute: 'FreeCodeCamp', link: "https://www.freecodecamp.org/certification/dubask/responsive-web-design",
    smallImg: "/responsiveWebDe Small.jpg", smallImgAlt: "responsiveWebDeSmall", bigImg: "responsiveWebDesign.png", bigImgAlt: 'responsiveWebDeBig',details: 'From applied visual design to flexbox. 300 hours of responsivness and flexebility '},

    {title: 'JS - The Weird Parts', institute: 'Anthony Alecia', link: 'https://www.udemy.com/certificate/UC-GTBY8TWK/', smallImg: "/jswp.jpg", smallImgAlt: "javaScript the weird parts", bigImg: 'JavaScript the Weird Parts.jpg', bigImgAlt: 'JS Weird Parts', details: 'Gaining a deep understanding of Javascript, learn how Javascript works under the hood. objects and object literals, function expressions, prototypical inheritance, functional programming, scope chains, function constructors (plus new ES6 features), immediately invoked function expressions (IIFEs), call, apply, bind, and more.'},

    {title: 'Code Wars (Algorithm)', smallImg: 'codewarssmall.png', smallImgAlt: 'codewarsSmall', 
    details: 'Codewars is an educational community for computer programming. On the platform, software developers train on programming challenges known as kata.',bigImg:'https://www.codewars.com/users/Dash_9/badges/large', bigImgAlt: 'codwarsBig'}
  ]

  @observable projects = [
    {title: 'Portfolio', titleImg: 'portfolio3.jpg', titleImgAlt: 'portfolio', link: 'https://www.drordvash.com', bigImg:'meetme.jpg', bigImgAlt: 'meetmePortfolio', type: 'website', details:''},
    
    {title: 'WheresMyFood', titleImg: 'whereismyfood.jpg', titleImgAlt: 'wmf', link:'https://whereismyfood.herokuapp.com/', bigImg:'wheremyfoodat.png', bigImgAlt: 'wmfBig', type: 'webapp', details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'},

    {title: 'WheresMyFood', titleImg: 'wmf.jpg', titleImgAlt: 'wmf', link:'https://whereismyfood.herokuapp.com/', bigImg:'triplan.png', bigImgAlt: 'wmfBig', type: 'webapp', details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'},

    {title: 'WheresMyFood', titleImg: 'wmf.jpg', titleImgAlt: 'wmf', link:'https://whereismyfood.herokuapp.com/', bigImg:'triplan.png', bigImgAlt: 'wmfBig', type: 'webapp', details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'},

    // {title: 'WheresMyFood', titleImg: 'wmf.jpg', titleImgAlt: 'wmf', link:'https://whereismyfood.herokuapp.com/', bigImg:'triplan.png', bigImgAlt: 'wmfBig', type: 'webapp', details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'},


    // {title: 'WheresMyFood', titleImg: 'wmf.jpg', titleImgAlt: 'wmf', link:'https://whereismyfood.herokuapp.com/', bigImg:'triplan.png', bigImgAlt: 'wmfBig', type: 'webapp', details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'}
  ]

}
const store = new PortfolioStore();

export default store;