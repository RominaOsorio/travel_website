import { useContext } from 'react'
import './main.scss'
import { IoLocationOutline } from 'react-icons/io5'
import { LuClipboardCheck } from 'react-icons/lu'
import { PlacesContext } from '../../context/PlacesContext'

const Main = () => {
  const { places } = useContext(PlacesContext)

  return (
    <section className='main container section'>
      <div className='secTitle'>
        <h3 className='title'>
          Most visited destinations
        </h3>
      </div>

      <div className='secContent grid'>
        {places?.map((place) => (
          <div key={place.id} className='singleDestination'>
            <div className='imageDiv'>
              <img src={place.imgSrc} alt={place.desTitle} />
            </div>

            <div className='cardInfo'>
              <h4 className='desTitle'>{place.desTitle}</h4>
              <span className='continent flex'>
                <IoLocationOutline className='icon' />
                <span className='name'>{place.location}</span>
              </span>

              <div className='fees flex'>
                <div className='grade'>
                  <span>{place.grade}<small> +1</small></span>
                </div>
                <div className='price'>
                  <h5>{place.fees}</h5>
                </div>
              </div>

              <div className='desc'>
                <p>{place.descripction}</p>
              </div>

              <button className='btn flex'>
                Details <LuClipboardCheck className='icon' />
              </button>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Main
