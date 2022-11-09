import { Component, createRef } from 'react';
import PRODUCTS from 'data/products.json';
import Banner from 'components/Banner';
import ProductCard from '../components/ProductCard';

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.handler = null;
    this.observer = [];
    this.collectionsRef = createRef();
    this.seasonalRef = createRef();
  }

  componentDidMount() {
    document.title = 'MOMENTUM :: Memorial Jewelry';

    this.handler = () => {
      this.collectionsRef.current.style.transform = `translateX(${1400 - window.scrollY * 2.4}px)`;
    };
    window.addEventListener('scroll', this.handler);

    [...this.seasonalRef.current.children].forEach((el, index) => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.style.opacity = 1;
              entry.target.style.transform = 'translateY(0)';
            }, index * 40);
          } else {
            setTimeout(() => {
              entry.target.style = '';
            }, index * 40);
          }
        });
      });
      this.observer.push(observer);
      observer.observe(el);
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handler);

    this.observer.forEach(el => {
      el.disconnect();
    });
  }

  render() {
    return (
      <div>
        <Banner />
        <section className="section-title container">
          <h1 className="text-center">COLLECTION</h1>
          <br />
          <p className="flex-center">
            인권에 대한 무시와 경멸이 인류의 양심을 격분시키는 만행을 초래하였으며, 인간이 언론과
            신앙의 자유,
            <br />
            그리고 공포와 결핍으로부터의 자유를 누릴 수 있는 세계의 도래가 모든 사람들의 지고한
            열망으로서 천명되었다
          </p>
        </section>
        <section id="collectionProductsRoot">
          <section id="collectionProducts" ref={this.collectionsRef} className="flex flex-center">
            {PRODUCTS.filter(product => product.category === 'collection').map(
              ({ id, nameI18n, image, name, description }) => {
                return (
                  <ProductCard
                    key={`product-card-collection-${id}`}
                    id={id}
                    nameI18n={nameI18n}
                    image={image}
                    name={name}
                    description={description}
                  />
                );
              }
            )}
          </section>
        </section>
        <section className="section-title container">
          <h1 className="text-center">SEASONAL</h1>
          <br />
          <p className="flex-center">
            모든 사람은 의견의 자유와 표현의 자유에 대한 권리를 가진다. 이러한 권리는 간섭없이
            의견을 가질 자유와
            <br />
            국경에 관계없이 어떠한 매체를 통해서도 정보와 사상을 추구하고, 얻으며, 전달하는 자유를
            포함한다.
          </p>
        </section>
        <section id="seasonalProducts" ref={this.seasonalRef}>
          {PRODUCTS.filter(product => product.category === 'seasonal').map(
            ({ id, nameI18n, image, name, description }) => {
              return (
                <ProductCard
                  key={`product-card-seasonal-${id}`}
                  id={id}
                  nameI18n={nameI18n}
                  image={image}
                  name={name}
                  description={description}
                />
              );
            }
          )}
        </section>
      </div>
    );
  }
}

export default IndexPage;
