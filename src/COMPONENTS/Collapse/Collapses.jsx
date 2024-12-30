import { useState } from 'react';
import './Collapse.scss'; 
import flecheHaut from '../../IMG/Vector-fleche-ouvert.svg';

function Collapses ({id,name,description}){

    const [open, setOpen] = useState(false);
    const [style, setStyle] = useState("p_show");
    const [rotateClass, setRotateClass] = useState("rotate-back");

    function ChangeStyle () {
        if (!open) {
            setOpen(true);
            setStyle("p_show_active");
            setRotateClass("rotate");
        } else {
            setOpen(false);
            setStyle("p_show");
            setRotateClass("rotate-back");
        }
    };

    return (
        <div id={id} key={id}>
            <div className='collapse_div_titre' onClick={ChangeStyle}>
                {name}
                <img src={flecheHaut} alt='fleche' className={rotateClass}></img>
            </div>
            <div className={'collapse_div_des_show'}>
                <p className={style}>
                    {description}
                </p>
            </div>
        </div>
    )
};

export default Collapses;