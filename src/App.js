import Card from './components/Card';
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  return (
    <div className="wrapper clear">

      {/*==== Корзина ====*/}
      <Drawer/>

        {/*======= Див Хедер и логотип =======*/}
      <Header/>

      {/*====== Див ВСЕ ВАЗОНЫ И С  поиском ======*/}
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все вазоны</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search"/>
            <input placeholder="Поиск ..."/>
          </div>
        </div>

        {/*===== Див с карточками товара =====*/}

        <div className="d-flex justify-between">    {/*flex-wrap*/}
           <Card/>


          {/*<div className="card">*/}
          {/*  <img className="card__img" width={155} height={180} src="/img/vazons/vazon2.jpg" alt="Vazon"/>*/}
          {/*  <h5 className="mt-10 mb-10">Красивая и стильная коллекция из трех вазонов</h5>*/}
          {/*  <div className="d-flex justify-between align-center">*/}
          {/*    <div className="d-flex flex-column">*/}
          {/*      <span>Цена:</span>*/}
          {/*      <b>55 555 грн.</b>*/}
          {/*    </div>*/}
          {/*    <button className="button">*/}
          {/*      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
          {/*        <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#F2F2F2"/>*/}
          {/*        <path d="M20.6653 15.1312H17.2021V11.6682C17.2021 10.3328 15.1311 10.3328 15.1311 11.6682V15.1312H11.668C10.3329 15.1312 10.3329 17.2022 11.668 17.2022H15.1311V20.6652C15.1311 22.0005 17.2021 22.0005 17.2021 20.6652V17.2022H20.6653C22.0005 17.2022 22.0005 15.1312 20.6653 15.1312Z" fill="#D3D3D3"/>*/}
          {/*      </svg>*/}
          {/*    </button>*/}
          {/*  </div>*/}
          {/*</div>*/}

          {/*<div className="card">*/}
          {/*  <img className="card__img" width={155} height={180} src="/img/vazons/vazon3.jpg" alt="Vazon"/>*/}
          {/*  <h5 className="mt-10 mb-10">Красивая и стильная коллекция из трех вазонов</h5>*/}
          {/*  <div className="d-flex justify-between align-center">*/}
          {/*    <div className="d-flex flex-column">*/}
          {/*      <span>Цена:</span>*/}
          {/*      <b>55 555 грн.</b>*/}
          {/*    </div>*/}
          {/*    <button className="button">*/}
          {/*      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
          {/*        <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#F2F2F2"/>*/}
          {/*        <path d="M20.6653 15.1312H17.2021V11.6682C17.2021 10.3328 15.1311 10.3328 15.1311 11.6682V15.1312H11.668C10.3329 15.1312 10.3329 17.2022 11.668 17.2022H15.1311V20.6652C15.1311 22.0005 17.2021 22.0005 17.2021 20.6652V17.2022H20.6653C22.0005 17.2022 22.0005 15.1312 20.6653 15.1312Z" fill="#D3D3D3"/>*/}
          {/*      </svg>*/}
          {/*    </button>*/}
          {/*  </div>*/}
          {/*</div>*/}

          {/*<div className="card">*/}
          {/*  <img className="card__img" width={155} height={180} src="/img/vazons/vazon4.jpg" alt="Vazon"/>*/}
          {/*  <h5 className="mt-10 mb-10">Красивая и стильная коллекция из трех вазонов</h5>*/}
          {/*  <div className="d-flex justify-between align-center">*/}
          {/*    <div className="d-flex flex-column">*/}
          {/*      <span>Цена:</span>*/}
          {/*      <b>55 555 грн.</b>*/}
          {/*    </div>*/}
          {/*    <button className="button">*/}
          {/*      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
          {/*        <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#F2F2F2"/>*/}
          {/*        <path d="M20.6653 15.1312H17.2021V11.6682C17.2021 10.3328 15.1311 10.3328 15.1311 11.6682V15.1312H11.668C10.3329 15.1312 10.3329 17.2022 11.668 17.2022H15.1311V20.6652C15.1311 22.0005 17.2021 22.0005 17.2021 20.6652V17.2022H20.6653C22.0005 17.2022 22.0005 15.1312 20.6653 15.1312Z" fill="#D3D3D3"/>*/}
          {/*      </svg>*/}
          {/*    </button>*/}
          {/*  </div>*/}
          {/*</div>*/}

        </div>


      </div>
    </div>
  );
}

export default App;
