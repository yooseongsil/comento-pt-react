import React, { createRef } from "react";
import Jumbotron from "./Jumbotron";
import PRODUCTS from '../../resources/products.json';
import ProductCard from "../../components/ProductCard";

export class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.collectionEv = null;
    this.collectionRef = createRef()
    this.seasonalRef = createRef()
    this.observers = [];
  }
 
  componentDidMount() {
    if (this.collectionRef.current) {
      this.collectionEv = () => this.collectionRef.current.style.transform = `translateX(${1400 - window.scrollY * 2.4}px)`;
      window.addEventListener('scroll', this.collectionEv);
    }
    if (this.seasonalRef.current && this.seasonalRef.current.children.length !== 0) {
      [...this.seasonalRef.current.children].forEach((el, index) => {
        const ob = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
              }, index * 40)
            } else {
              setTimeout(() => {
                entry.target.style = '';
              }, index * 40)
            }
          })
        })
        this.observers.push(ob)
        ob.observe(el);
      });
    }
  }

  componentWillUnmount() {
    this.observers.forEach((ob) => ob.disconnect());
    window.removeEventListener('scroll', this.collectionEv);
  }

  render() {
    const collectionProducts = PRODUCTS.filter(({ category }) => category === 'collection').map((p) => <ProductCard key={p.id} {...p} />);
    const seasonalProducts = PRODUCTS.filter(({ category }) => category === 'seasonal').map((p) => <ProductCard key={p.id} {...p} />);

    return (
      <main id='content'>
        <Jumbotron />
        <section className="section-title container">
          <h1 className="text-center">COLLECTION</h1>
          <br />
          <p className="flex-center">
            인권에 대한 무시와 경멸이 인류의 양심을 격분시키는 만행을 초래하였으며, 인간이 언론과 신앙의 자유,<br />
            그리고 공포와 결핍으로부터의 자유를 누릴 수 있는 세계의 도래가 모든 사람들의 지고한 열망으로서 천명되었다
          </p>
        </section>
        <section id="collectionProductsRoot">
          <section ref={this.collectionRef} id="collectionProducts" className="flex flex-center">
            {collectionProducts}
          </section>
        </section>
        <section className="section-title container">
          <h1 className="text-center">SEASONAL</h1>
          <br />
          <p className="flex-center">
            모든 사람은 의견의 자유와 표현의 자유에 대한 권리를 가진다. 이러한 권리는 간섭없이 의견을 가질 자유와<br />
            국경에 관계없이 어떠한 매체를 통해서도 정보와 사상을 추구하고, 얻으며, 전달하는 자유를 포함한다. 
          </p>
        </section>
        <section ref={this.seasonalRef} id="seasonalProducts">
          {seasonalProducts}
        </section>
      </main>
    );
  }
}

export default IndexPage;
