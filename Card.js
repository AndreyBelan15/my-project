// import unlike from '/public/img/unlike.svg';

function Card(props){
  return(
    <div className="card">
      <div className="favorite">
        <img width={32} height={32} src="/img/unlike.svg" alt="Unlike"/>
      </div>
      <img className="card__img" width={155} height={180} src={props.imageUrl} alt="Vazon"/>
      <h5 className="mt-10 mb-10">{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{props.price} грн.</b>
        </div>
        <button className="button">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#F2F2F2"/>
            <path d="M20.6653 15.1312H17.2021V11.6682C17.2021 10.3328 15.1311 10.3328 15.1311 11.6682V15.1312H11.668C10.3329 15.1312 10.3329 17.2022 11.668 17.2022H15.1311V20.6652C15.1311 22.0005 17.2021 22.0005 17.2021 20.6652V17.2022H20.6653C22.0005 17.2022 22.0005 15.1312 20.6653 15.1312Z" fill="#D3D3D3"/>
          </svg>
        </button>
      </div>
    </div>


  )
}

export default Card;

