import './App.css'
export default function Card({ cardTitle ,picSrc  ,cardSubTitle }){
    return(
        <>
            <div className='Svc-card'>
                <div className="card-pic" style={{backgroundImage : `url(${picSrc})`}}>
                <div className="hover-eff">
                    <p>more details</p>
                </div>
                </div>
                <div className="card-sentences">
                    <p className="card-ttl">{cardTitle}</p>
                    <p className="card-subttl">{cardSubTitle}Sub title non sense talk</p>
                </div>
            </div>
        </>
    )
}