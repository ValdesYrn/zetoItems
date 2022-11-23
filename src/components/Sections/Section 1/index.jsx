import React from 'react'
import styled from 'styled-components'
import { ObjectisItemsListe } from '../../../untils/Listes'
import { BtnJenProfit } from '../../Buttons'

export default function Section1() {
  const Div = styled.div`
    border-radius: 15px;
    background: linear-gradient(
      0deg,
      rgba(34, 193, 195, 1) 0%,
      rgba(226, 235, 244, 1) 100%
    );

    box-shadow: 0 0 2em #3799f9;
    &:hover {
      animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
      transform: translate3d(0, 0, 0);
      backface-visibility: hidden;
      perspective: 1000px;
    }

    @keyframes shake {
      10%,
      90% {
        transform: translate3d(-1px, 0, 0);
      }

      20%,
      80% {
        transform: translate3d(2px, 0, 0);
      }

      30%,
      50%,
      70% {
        transform: translate3d(-4px, 0, 0);
      }

      40%,
      60% {
        transform: translate3d(4px, 0, 0);
      }
    }
  `
  return (
    <section className="">
      <Div className="container py-2 my-3">
        <div className="p-2">
          <h2 className="text-center">
            Besoin de crédit.? Vous êtes au bon endroit. Choisissez votre
            montant et votre durée de remboursement un peu plus bas.
          </h2>
        </div>
        <div className=" m-2 row">
          <div>
            <h4 className="col-lg-5  p-2">
              J'aimerais ...{' '}
              <span
                className="fst-italic "
                style={{ fontSize: '0.6em', color: '#808894' }}
              >
                ( facultatif )
              </span>
            </h4>
            <div className="row col">{ObjectisItemsListe}</div>
          </div>

          <div>
            <label for="exampleDataList" class="form-label"></label>
            <input
              class="form-control"
              list="datalistOptions"
              id="exampleDataList"
              placeholder="Cliquez pour choisir un montant ou défnissez le par vous-même..."
            />
            <datalist id="datalistOptions">
              <option value="1.500€" />
              <option value="12.458€" />
              <option value="7.542€" />
              <option value="45.08€" />
              <option value="126.055€" />
            </datalist>
          </div>

          <div>
            <label for="exampleDataList" class="form-label"></label>
            <input
              class="form-control"
              placeholder="Définissez votre mensualité et délai de remboursement vous-même..."
            />
          </div>
        </div>
      </Div>
      {BtnJenProfit}
    </section>
  )
}
