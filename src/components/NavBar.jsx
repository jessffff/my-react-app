import React from 'react';

function NavBar({ onPrev, onNext, showPrev, showNext }) {
    return (
        <nav>
            {showPrev && <button onClick={onPrev}>Précédent</button>}
            {showNext && <button onClick={onNext}>Suivant</button>}
        </nav>
    );
}


export default NavBar;
