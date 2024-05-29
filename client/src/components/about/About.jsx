import './About.css';
import heroImg from './image/jamie-street-_94HLr_QXo8-unsplash.jpg';


export function About(params) {
    return (
        <div className='aboutContainer'>
            <img className='heroImg' src={heroImg} alt="image-example" />
            <h2 className='title'> Welcome to CampCompass!</h2>
            <div className="container">
                <p className='subtitle'>
                    We are a group of outdoor enthusiasts and nature lovers united by our shared passion for camping and outdoor adventures. Our mission is to provide all camping enthusiasts with an easy and convenient way to plan their camping trips, discover new and exciting destinations, and share their experiences with the community.

                    Our Story
                    The idea for CampCompass was born during one of our regular camping trips. As we sat around the campfire exchanging stories and tips, we realized how helpful it would be to have a single place where we could gather and share all this information. Thus, we began work on our app, driven by the desire to make camping planning easy and enjoyable for everyone.

                    Our Mission
                    Our mission is to inspire people to explore the great outdoors and spend more time in nature. We believe that time spent camping is not only fun but also beneficial for the body and mind. That's why we created CampCompass, to help more people discover the joys of camping and enjoy nature in a safe and well-organized way.

                    What We Offer
                    Campground Directory: Explore and browse a variety of campgrounds, sorted by location and amenities.
                    Camping Trip Planning: Create personalized plans for your camping trips, including routes, dates, and packing lists.
                    Reviews and Ratings: Read and leave reviews for the campgrounds you've visited, helping other camping enthusiasts make informed choices.
                    Interactive Maps: Use our interactive maps to plan your routes and find the best camping spots.
                    Tips and Articles: Learn new camping tips and tricks from our community and experts in the field.
                    Our Team
                    We are a small but dedicated team of people who share a passion for camping and technology. We believe that with our skills and experience, we can make camping planning easier and more fun for everyone.

                    {/* Name Surname - Founder and CEO
                    Name Surname - Chief Technology Officer
                    Name Surname - User Interface Designer
                    Name Surname - Content and Communications Specialist
                    Get In Touch
                    If you have any questions, suggestions, or just want to share your camping experience, feel free to contact us. You can email us at [email address] or find us on social media [social media links]. */}
                </p>
            </div>

        </div>
    )
}