import { Link } from 'react-router-dom'
import {
  CreditExpressSommaireItems,
  CreditProListeItems,
  CreditProSommaireItems,
  FooterNosOffres,
  NavItems,
  ObjectisItems,
  PretPersonelListeItems1,
  PretPersonelListeItems2,
  PretPersonelListeItems3,
  PretPersonelListeItems4,
  PretPersonelSommaireItems,
  Section1Items,
  Section2Items,
  Section3Items,
  Section4Items,
  Section5Items,
} from '../../data'

export const NavItemsListe = (
  <ul className="navbar-nav">
    {NavItems.map(({ id, to, nameItems }) => (
      <li
        className="nav-item"
        key={id}
        style={{ fontFamily: 'Century Gothic' }}
      >
        <Link className="nav-link fw-bold" to={to}>
          {nameItems}
        </Link>
      </li>
    ))}
  </ul>
)

export const Section1CarrouselListe = (
  <div className="carousel-inner">
    <div
      className="carousel-item active"
      data-bs-interval="10000"
      style={{ height: '520px' }}
    >
      <img
        src={
          'https://static5.depositphotos.com/1037987/482/i/600/depositphotos_4822600-stock-photo-portrait-of-senior-couple-in.jpg'
        }
        className="d-block w-100"
        alt="..."
      />
      <div
        className="carousel-caption d-none d-md-block"
        style={{ position: 'absolute', top: 0, color: 'black' }}
      >
        <h2 style={{ fontFamily: 'avigea' }}>
          Some representative placeholder content for the first slide.
        </h2>
      </div>
    </div>
    {Section1Items.map(({ id, imagesrc, intituleText }) => (
      <div
        className="carousel-item bg-light"
        data-bs-interval="10000"
        key={id}
        style={{ height: '520px' }}
      >
        <img src={imagesrc} className="d-block w-100" alt="..." />
        <div
          className="carousel-caption d-block"
          style={{
            color: 'black',
            fontFamily: 'avigea',
          }}
        >
          <h6>Youdge a dit :</h6>
          <p style={{ width: '75%', marginInlineStart: '90px' }}>
            {intituleText}
          </p>
        </div>
      </div>
    ))}
  </div>
)

export const Section2Liste = (
  <>
    {Section2Items.map(({ id, imgsrc, nameItems }) => (
      <div className="col  d-flex align-items-center" key={id}>
        <div className=" ">
          <img
            src={imgsrc}
            alt={nameItems}
            height={50}
            className="h-100 w-100"
          />
        </div>
      </div>
    ))}
  </>
)

export const Section3Liste = (
  <div className="row w-100 ">
    {Section3Items.map(({ id, cover, title, to }) => (
      <Link
        to={to}
        className="text-decoration-none text-dark col-6 col-md"
        key={id}
      >
        <div className="nav-link  rounded my-2">
          <img
            src={cover}
            alt={title}
            className="w-100  rounded"
            height={200}
          />
        </div>
        <div
          className=" text-center fs-4 nav-link"
          style={{ fontFamily: ' Rockwell Condensed' }}
        >
          {title}
        </div>
      </Link>
    ))}
  </div>
)

export const Section4Liste = (
  <>
    {Section4Items.map(({ id, cover, title, text }) => (
      <div className="col-6 col-md my-2 my-md-0 " key={id}>
        <div className="w-100  ">
          <div className="justify-content-center d-flex ">
            <img src={cover} alt={title} className="w-25 h-25" />
          </div>
          <div className="my-1">
            <h4 className=" text-center fw-light">{title}</h4>
          </div>
          <div className="">
            <h6 className=" text-center ">{text}</h6>
          </div>
        </div>
      </div>
    ))}
  </>
)

export const Section5Liste = (
  <>
    {Section5Items.map(
      ({ id, cover, title, text, nameUser, loan, loanType }) => (
        <div className="col-6 col-md" key={id}>
          <div className="  ">
            <div className="">
              <div className=" ">
                <img
                  src={cover}
                  alt={title}
                  className="rounded-top w-100 h-100"
                />
              </div>
            </div>
            <div className=" my-3">
              <div className="  ">
                <div className="row " style={{ fontFamily: 'Agency FB' }}>
                  <h6 className="col-4 fw-bold">{nameUser} : </h6>
                  <h6 className="col fw-bold">
                    {loan} - {loanType}
                  </h6>
                </div>
                <h5
                  className="fw-normal my-2"
                  style={{ fontFamily: 'Calibri light' }}
                >
                  {text}
                </h5>
              </div>
            </div>
          </div>
        </div>
      )
    )}
  </>
)

export const FooterNosOffresListe = (
  <>
    {FooterNosOffres.map(({ id, nameOffre, to }) => (
      <h6 key={id} className="fw-light nav-items ">
        <Link className="nav-link" to={to}>
          {nameOffre}
        </Link>
      </h6>
    ))}
  </>
)

export const FooterNosPartenairesListe = (
  <div className="row">
    {Section2Items.map(({ id, nameItems }) => (
      <div
        className="col-12 col-md-6 text-start text-md-center fw-light"
        key={id}
      >
        {nameItems}
      </div>
    ))}
  </div>
)

export const PretPersonelListe1 = (
  <ul>
    {PretPersonelListeItems1.map(({ id, ListeItems }) => (
      <li key={id}>{ListeItems}</li>
    ))}
  </ul>
)

export const PretPersonelListe2 = (
  <ul>
    {PretPersonelListeItems2.map(({ id, item }) => (
      <li key={id} className="my-2">
        {item}
      </li>
    ))}
  </ul>
)

export const PretPersonelListe3 = (
  <ul>
    {PretPersonelListeItems3.map(({ id, items }) => (
      <li key={id} className="my-3">
        {items}
      </li>
    ))}
  </ul>
)

export const PretPersonelListe4 = (
  <ul>
    {PretPersonelListeItems4.map(({ id, items }) => (
      <li key={id} className="my-2">
        {items}
      </li>
    ))}
  </ul>
)

export const PretPersonelSommaireListe = (
  <ul className="text-center text-lg-start">
    {PretPersonelSommaireItems.map(({ id, items, tagert }) => (
      <li key={id} className="list-unstyled my-3">
        <a href={tagert} className="text-decoration-none text-black">
          {items}
        </a>
      </li>
    ))}
  </ul>
)

export const CrediExpressSommaireListe = (
  <ul className="text-center text-lg-start">
    {CreditExpressSommaireItems.map(({ id, items, tagert }) => (
      <li key={id} className="list-unstyled my-3">
        <a href={tagert} className="text-decoration-none text-black ">
          - {items}
        </a>
      </li>
    ))}
  </ul>
)

export const ObjectisItemsListe = (
  <>
    {ObjectisItems.map(({ id, nameObjectisItems }) => (
      <div className="col form-check" key={id}>
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id={id}
        />
        <label
          className="form-check-label"
          htmlFor={id}
          style={{ fontFamily: 'Century Gothic' }}
        >
          {nameObjectisItems}
        </label>
      </div>
    ))}
  </>
)

export const CreditProListe = (
  <ul>
    {CreditProListeItems.map(({ id, items }) => (
      <li key={id} className="py-2">
        {items}
      </li>
    ))}
  </ul>
)

export const CrediProSommaireListe = (
  <ul className="text-center ">
    {CreditProSommaireItems.map(({ id, items, tagert }) => (
      <li key={id} className="list-unstyled my-3">
        <a href={tagert} className="text-decoration-none text-black ">
          - {items}
        </a>
      </li>
    ))}
  </ul>
)
