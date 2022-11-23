import React from 'react'
import { Section3Liste } from '../../../untils/Listes'
import { BtnJenProfit } from '../../Buttons'

export default function Section3() {
  return (
    <section>
      <div className=" my-2 container-fluid" style={{ backgroundColor: '' }}>
        <div className=" ">
          <div className=" w-100 mt-2">
            <h2
              className="text-center"
              style={{ fontFamily: 'Century Gothic' }}
            >
              Notre métier
            </h2>
          </div>
        </div>

        <div className="">
          <div className="p-1 m-2  w-100">
            <h6 className="text-center fs-4 fw-light">
              Nous sommes un néo-courtier indépendant. Notre vocation première
              est d'offrir aux internautes la possibilité de bénéficier des
              meilleures offres de crédit du marché , et d'y souscrire
              directement en ligne.
            </h6>
          </div>
        </div>

        <div className=" mb-2 d-flex container justify-content-center">
          {Section3Liste}
        </div>

        {BtnJenProfit}
      </div>
    </section>
  )
}

/*<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>


<div className="  d-flex justify-content-center">{Section3Liste}</div>

        <div className=" bg-info text-center px-1 px-md-0 rounded justify-content-center d-flex  my-2">
          <div className=" py-4">
            <a
              href="mailto:p.ifee@gmail.com?subject=Prise%20d'information%20sur%20vos%20différentes%20formations&cc=ifee@gmail.com&body=Bonjour%20.%20Je%20intéressé%20par%20vos%20fomartions.%20Pouvez-vous%20m'en%20dire%20plus.?"
              className="fw-bold text-decoration-none text-dark"
            >
              Vous voulez d'une offre particulière.? Parlez-en avec un
              conseiller
            </a>
          </div>
        </div>*/
