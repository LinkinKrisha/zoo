import Animal from "./Animal";

<Animal />
export default function Propsan() {
    return (
      <div className="animal-discription">
        <h1>Animals</h1>
       <Animal 
       name="Elephant"
       species="Elephas maximus (Asian Elephant)"
       habitat="Forests and grasslands"
       images="https://upload.wikimedia.org/wikipedia/commons/b/b1/African_Elephant_8.jpg"
       discription="Elephants are the largest land animals on Earth. They are known for their long trunks, tusks, and large ears."/>
        <Animal
          name="Lion"
          species="Panthera leo"
          habitat="Grasslands and savannas"
          images="https://wallpapercave.com/wp/wp2034447.jpg"
          discription="Lions are majestic animals known for their strength and pride. They are social animals and live in groups called prides."
       />

<Animal 
        name="Tiger"
        species="Panthera tigris"
        habitat="Forests, grasslands, and mangrove swamps"
        images="https://getwallpapers.com/wallpaper/full/1/a/d/986543-best-tiger-hd-wallpaper-2880x1800-desktop.jpg"
        discription="Tigers are the largest members of the cat family and are known for their distinctive orange coat with black stripes. They are solitary animals and excellent hunters."
      />

<Animal 



        name="Giraffe"
        species="Giraffa camelopardalis"
        habitat="Savannahs, grasslands, and open woodlands"
        images="https://hdqwalls.com/wallpapers/giraffe-to.jpg"
        discription="Giraffes are known for their long necks, which can reach up to 6 feet in length. They are herbivores and feed on leaves from trees and shrubs. Giraffes are social animals and live in groups called towers."
      />
      </div>
    );
  }
  
  
