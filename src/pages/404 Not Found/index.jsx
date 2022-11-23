import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  useEffect(() => {
    document.title = `ZETO - Error`
  }, [])
  return (
    <section>
      <div className=" container-fluid py-5">
        <div className=" ">
          <img
            src={
              'https://dam.muyinteresante.com.mx/wp-content/uploads/2020/04/error-404.jpg'
            }
            alt="404 Not Found"
            className="w-100 h-100"
          />
        </div>

        <div className="py-2  justify-content-center d-flex">
          <button
            className="btn btn-primary text-white nav-items"
            style={{ fontFamily: 'Century Gothic' }}
          >
            <Link to="/" className="nav-link">
              Retour à l'acceuil
            </Link>
          </button>
        </div>
      </div>
    </section>
  )
}

export default NotFound
