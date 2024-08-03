import './About.css';
import heroImg from './image/NOjamie-street-_94HLr_QXo8-unsplash.jpg';


export function About() {
    return (
        <>
            <div className="backgroundContainerAbout">
                <img src={heroImg} alt="" />
            </div>

            <div className='aboutContainer'>

                <h2 className='title'> Welcome to CampCompass!</h2>

                <p className='subtitle'>
                    We are a group of outdoor enthusiasts and nature lovers united by our shared passion for camping and outdoor adventures. Our mission is to provide all camping enthusiasts with an easy and convenient way to plan their camping trips, discover new and exciting destinations, and share their experiences with the community.

                    Our Mission
                    Our mission is to inspire people to explore the great outdoors and spend more time in nature. We believe that time spent camping is not only fun but also beneficial for the body and mind. That's why we created CampCompass, to help more people discover the joys of camping and enjoy nature in a safe and well-organized way.

                    What We Offer
                    Campground Directory: Explore and browse a variety of campgrounds, sorted by location and amenities.
                    Camping Trip Planning: Create personalized plans for your camping trips, including routes, dates, and packing lists.
                    Reviews and Ratings: Read and leave reviews for the campgrounds you've visited, helping other camping enthusiasts make informed choices.
                    Interactive Maps: Use our interactive maps to plan your routes and find the best camping spots.
                    Tips and Articles: Learn new camping tips and tricks from our community and experts in the field.
                </p>

            </div>
        </>
    )
}