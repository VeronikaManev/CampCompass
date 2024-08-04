import '../about/About.css';
import heroImg from './image/pexels-xue-guangjian-815005-1687845.jpg';


export function PrivacyPolicy() {
    return (
        <>
            <div className="backgroundContainerAbout">
                <img src={heroImg} alt="" />
            </div>

            <div className='aboutContainer'>

                <h2 className='title'> Privacy Policy</h2>

                <p className='subtitle'>

                    Introduction:
                    <br />
                    At CampCompass, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this policy carefully.
                    <br />
                    <br />
                    Information We Collect:
                    <br />
                    Personal Information: When you register on our site or create a new campsite, we collect personal information such as your email address, password, and any other details you provide.
                    <br />
                    Campsite Information: Information related to campsites, including titles, descriptions, locations, images, and other related details.
                    Usage Data: We may collect data about how you interact with our site, including your IP address, browser type, and pages visited.
                    <br />
                    <br />
                    How We Use Your Information:
                    <br />
                    We use your information to:
                    <br />
                    Provide and maintain our services, including managing user accounts and campsite listings.
                    Process user registrations and campsite submissions.
                    Improve our website and user experience.
                    Communicate with you about your account or our services.
                    <br />
                    <br />
                    Data Storage and Protection:
                    <br />
                    We implement reasonable measures to protect your data from unauthorized access, use, or disclosure. Your information is stored securely and only for as long as necessary to fulfill the purposes outlined in this policy.
                    <br />
                    <br />
                    Sharing Your Information:
                    <br />
                    We do not share your personal information with third parties except as necessary to:
                    <br />
                    Provide our services and support.
                    Comply with legal obligations or respond to lawful requests by public authorities.
                    <br />
                    <br />
                    Your Rights:
                    <br />
                    You have the right to:
                    <br />
                    Access and update your personal information.
                    Request deletion of your data.
                    Opt-out of receiving communications from us.
                    <br />
                    <br />
                    Cookies and Tracking Technologies:
                    <br />
                    We use cookies and similar technologies to enhance your experience on our site. You can manage your cookie preferences through your browser settings.
                    Changes to This Policy
                    <br />
                    We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the date of the latest revision will be indicated at the top of the policy.
                    <br />
                    <br />
                    Contact Us:
                    <br />
                    If you have any questions about this Privacy Policy or our data practices, please contact us at:
                    <br />
                    Email: campcompass@example.com
                    <br />
                    <br />
                    Thank you for trusting CampCompass with your information.
                </p>
            </div>
        </>
    )
}