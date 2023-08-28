import './App.css'
import Card from './Card.jsx'
export default function Svc(){
    return(
        <>
            <section className='services'>
                <div className="services-header">
                    <h1 className='svc-ttl'>services</h1>
                    <p className='svc-subttl'>our services will improve your project,just trust us</p>
                </div>
                <div className="card-cont">
                <Card cardTitle='waves radio' cardSubTitle='card title non sense ' picSrc='waves test.jpg' />
                <Card cardTitle='blood test' cardSubTitle='card title non sense ' picSrc='blood test.avif'/>
                <Card cardTitle='pregnancy test' cardSubTitle='card title non sense ' picSrc='pregnancy test.jpg'/>
                </div>
            </section>
        </>
    )
}