import seriesData from "../api/seriesData.json";    
import { SeriesCard } from "./SeriesCard";


export function Shelbycar(){
    return(
        <ul>
            {seriesData.map((car) => <SeriesCard key={car.name}  car={car} />
            )}
        </ul>
    )
}





//uncomment for the videos before the looping video

//2nd way to export the Component by adding the export at the beginging of the function
// export function Shelbycar ()  {                 
//     const carname = "Shelby Supersnake"         //dynamic varialbes


//     //conditional rendering
//     let age = 19
//     let supercar = "yes"
//     if (age <= 18)  supercar = "No"

//     //dynamic function
//     function sum (){
//         const summary = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ea necessitatibus aperiam vitae laborum fugit quo sint expedita earum modi asperiores odio facilis consectetur velit, corrupti rem beatae ipsa eaque."
//         return summary
//     }
    

//     //actual return element of function
//     return(
//     <div>
//         <div>
//             <img src="https://images.pexels.com/photos/18038881/pexels-photo-18038881/free-photo-of-sports-shelby-mustang-on-parking-lot.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="car photo" width="40%" height="40%"/>
//         </div>
//         <h2>Name: {carname} </h2>
//         <h3>price: {500 + 390 } </h3>                       
//         <p>
//             Summary: {sum()}
//         </p>
//         <button> {supercar == "yes" ? "Buy now":"Not available"} </button>
//     </div>
//     );
// };

// // export default Shelbycar                        //1st way to export the component




