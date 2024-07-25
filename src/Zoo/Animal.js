import Propsan from "./Propsan"

<Propsan />
export default function Animal(props){
  const name =props.name
  const species=props.species
  const habitat=props.habitat
  const images=props.images
  const discription=props.discription
  return(
    
      <div className='Animal-container'>
         <img src={images} alt="Image"  id="image1"/>
         <br />
        <p>NAME: {name}</p>
        <p>SPECIES: {species}</p>
        <p>HABITAT: {habitat}</p>
        
        <div className="discription">
        <p>Discription:{discription}</p>  </div>
      </div>
);
}

