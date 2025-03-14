import '../styles/components/Footer.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import avatarOne from '../assets/avatarOne.png'
import avatarTwo from '../assets/avatarTwo.png'
import avatarThree from '../assets/avatarThree.png'

const ctaAll = () => {
    return (
        <section>
            <div className="cnt-cardCTAservices">
                <div className="cardCTAservices">
                    <h2 className="titleCardCTAServ">Designing the Future of Architecture Today</h2>
                    <p className="textCardCTAServ">Crafting Spaces That Reflect Your Dreams</p>
                    <div className="btn-fatherCTAbtn">
                        <button className="btn-OneCtaServices">Contact Us<i className=" arrowCtaServices bi bi-arrow-up-right"></i></button>
                        <button className="btn-TwoCtaServices">Our Services<i className="arrowCtaServices bi bi-arrow-up-right"></i></button>
                    </div>
                    <div className="team-section">
                        <div className="team-images">
                            <img src={avatarOne} alt="Person 1" className="team-member one" />
                            <img src={avatarTwo} alt="Person 2" className="team-member two" />
                            <img src={avatarThree} alt="Person 3" className="team-member three" />
                        </div>
                        <h2>Shaping Spaces, Inspiring Futures</h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ctaAll;