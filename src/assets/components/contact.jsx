import '../css/contact.css'
function Contact(){
    return(
        <div className='contact'>
            <div className="heading-box">
                <h3>Cartelle</h3>
                <div >
                <p>cartella@design.com</p>
                <p>+123-3655-3287</p>
                </div>
                <div className='main-coll-box'>
                    <ul>
                        <p className='top'>MAIN</p>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Our Shop</li>
                        <li>Blog posts</li>
                    </ul>
                    <ul>
                        <p className='top'>COLLECTIONS</p>
                        <li>Fall Collection</li>
                        <li>The Essentials</li>
                        <li>After Dark</li>
                        <li>Studio Edit</li>
                    </ul>
            
                    <ul>
                    <p className='top'>HELP</p>
                        <li>Support</li>
                        <li>Shipping & Returns</li>
                        <li>Terms</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className='mail-btn-box'>
                    
                    <button className='mail-btn' onClick={()=>window.location.href='mailto:sathishkumar200664@gmail.com'} >Write Email</button>
                </div>
                <div>
                    <p>Created by sathish kumar.All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Contact