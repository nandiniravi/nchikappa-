import React from "react";
import './WriteUps.scss';
import data from '../constants';

const accordionWriteupData = data.accordionWriteupData;

const WriteUps = () => {
    return (
        <div className='write-up'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div className="accordion acc" id="accordionExample">
            {accordionWriteupData.map((each, index) => {
                return ( 
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button custom-colr" type="button" data-bs-toggle="collapse" data-bs-target={'#collapse' + index} aria-expanded="true" aria-controls={'collapse' + index}>
                            {each.accItemTitle}
                        </button>
                    </h2>
                    <div id={'collapse' + index} className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            {each.accItemData}
                        </div>
                    </div>
            </div>)
            })}
        </div>
        </div>
    );
}

export default WriteUps;