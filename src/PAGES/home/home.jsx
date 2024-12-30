import './Home.scss';
import psg_rch from '../../IMG/cote_roche.png';
import Card from '../../COMPONENTS/Card.jsx';


function Home() {
    return (
        <main>
            <section className='home_sct'>
              <div className="home_bannier">
                   <div className="home_bannier_cadre">
                       <img src={psg_rch} className="home_bannier_payasage" alt="paysage rocheux" title="Chez vous, partout et ailleurs"/>
                 </div>
                 <div className="home_bannier_cadre">
                       <p className="home_bannier_payasage_titre"> Chez vous, partout et ailleurs</p>
                   </div>
             </div>
             <div className="home_div">
                 <div className="home_div_display">
                     <Card />
                </div>
             </div>
            </section>
        </main>
    );
}

export default Home;