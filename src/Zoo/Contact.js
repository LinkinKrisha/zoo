export default function Contact(){
    return(
    <div className="contact">
        <h1>Contact us</h1>
        <p>Phone: <a href="tel: 080 29776466">080-2977-6466</a></p>
        <p>Email: <a href="@bannerughattabiopark.org dd@bannerughattabiopark.org advs@bannerughattabiopark.org marketing@bannerughattabiopark.org rfozoo@bannerughattabiopark.org rfosafari@bannerughattabiopark.org rforc@bannerughattabiopark.org pro@bannerughattabiopark.org refund@bannerughattabiopark.org education@bannerughattabiopark.org">@bannerughattabiopark.org dd@bannerughattabiopark.org advs@bannerughattabiopark.org marketing@bannerughattabiopark.org rfozoo@bannerughattabiopark.org rfosafari@bannerughattabiopark.org rforc@bannerughattabiopark.org pro@bannerughattabiopark.org refund@bannerughattabiopark.org education@bannerughattabiopark.org</a></p>
        <p>Address: The Executive Director
            Bannerughatta Biological Park,Bannerghatta, 
                  Bangaluru,Karnataka.
                   Pin – 560 083</p>
                   <form>
          <div className="form-group">
            Name:
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
          Email:
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
           Message:
            <textarea id="message" name="message" rows="5.5"></textarea>
          </div>    
          <button type="submit">Send Message</button>
        </form>
    </div>
    );
    
    }