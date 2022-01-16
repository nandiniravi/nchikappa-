import React from "react";
import './Bhajan.scss';
import data from '../constants';

const accordionBhajanData = data.accordionBhajanData;

const Bhajan = () => {
    return (
        <div className='bhajan'>
            <h2 className="title">Bhajan - Devotional Songs</h2>
        <p>In Shrimad Bhagavad Gita, Lord Krishna exemplifies the path to Moksha very well. These paths are like four different strands woven together to form one single rope, each one strengthened by the other and inter-dependent.
        Karma Yoga is doing the right thing at the right time. It means to follow dharma and accept whatever comes without expectation of any remuneration, gratitude, or recognition.
        It can be said that Bhakti is the simplest path. It can be practiced by anyone regardless of mental or physical abilities. It does not involve any extensive yogic practices.
        Bhakti is simply the path of love that removes hatred, jealously, lust, anger, ego, pride, arrogance. Instead one experiences feelings of peace, happiness, joy, ecstasy, bliss and wisdom.
        </p>
        <div className="accordion acc" id="accordionExample">
            {accordionBhajanData.map((each, index) => {
                return ( 
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button custom-colr" type="button" data-bs-toggle="collapse" data-bs-target={'#collapse' + index} aria-expanded="true" aria-controls={'collapse' + index}>
                            {each.accItemTitle}
                        </button>
                    </h2>
                    <div id={'collapse' + index} className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            {each.accItemBhajanList.map(each => {
                                return <a href={each.link} target="_blank" rel="noreferrer">
                                    <div className='bhajan-sub'>
                                    <i class="fa fa-file-pdf-o" style={{marginRight: "16px", marginTop: "2px"}}></i>{each.bhajanName}
                                    </div>
                                </a>
                            })}
                        
                        </div>
                    </div>
            </div>)
            })}
        </div>
        </div>
    );
}

export default Bhajan;