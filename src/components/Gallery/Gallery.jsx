import './Gallery.scss';
import childhood1 from '../../assets/images/gallery/1-childhood.jfif';
import youth2 from '../../assets/images/gallery/2-youth.jpg';
import youth3 from '../../assets/images/gallery/3-youth.jfif';
import youth4 from '../../assets/images/gallery/4-youth.jpg';
import marriage5 from '../../assets/images/gallery/5-marriage.JPG';
import withnama8 from '../../assets/images/gallery/8-withnama.jpg';
import mutt9 from '../../assets/images/gallery/9-mutt.jfif';
import park10 from '../../assets/images/gallery/10-park.jpg';
import shop11 from '../../assets/images/gallery/11-shop.JPG';
import bench12 from '../../assets/images/gallery/12-bench.jpg';
import ganpati13 from '../../assets/images/gallery/13-ganpati.JPG';
import sitting14 from '../../assets/images/gallery/14_sitting.JPG';


const data = [
    { id: 1,
    imgPath : childhood1,
    text: 'Narayana in his Teens'},
    { id: 2,
        imgPath : youth2,
    text: 'Narayana Chaitanya'},
    { id: 3,
        imgPath : youth3,
    text: 'Narayana Swami in a Satsang Program'},
    { id: 4,imgPath : youth4,
    text: 'Narayana Swami in a Satsang Program'},
    { id: 12,imgPath : bench12,
        text: 'Narayana at Vivekananda Yoga Shiksha Shibir, Kanyakumari in 2013'},
    { id: 5,imgPath : marriage5,
    text: 'Narayana entering Grihastashrama'},
    { id: 11,imgPath : shop11,
        text: 'Narayana at Desert Safari in 2015'},
    { id: 10,imgPath : park10,
        text: 'Narayana in Dubai Creek Park in 2017'},
    { id: 8,imgPath : withnama8,
    text: 'Narayana at Tirukoilur Sri Raghottama Theerta Mutt in 2018'},
    { id: 14,imgPath : sitting14,
        text: 'On 1st January 2019 @ Dubai'},  
    { id: 13,imgPath : ganpati13,
    text: 'Ganesh Visarjana in September 2020'},
    { id: 9,imgPath : mutt9,
        text: 'Narayana in October, 2020'},
   
];

const Gallery = () => {
    return(
        <div className='gallery-main'>
            {data.map(each => {
                return(
                    <div className='gallery-sub' key={each.id}>
                        <img src={each.imgPath} alt={each.imgPath}/>
                        <figcaption>{each.text}</figcaption>
                    </div>
                );
            })}
        </div>
    );
}

export default Gallery;