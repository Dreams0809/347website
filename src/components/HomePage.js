import React from 'react'
import './css/homepage.css'


export default function HomePage(){
    
    return(

       <div>
            <div className="header"> 347 </div>
            <div className="card-content"> 
                {/* <a href="/" className="SS1 font"> GEAR </a>  */}
                <a href="/" class="font">Gear</a>
            </div>
            <div class="card"> 
                {/* <img src="public/photos/metrocard.gif" alt="u"> */}
                <div class="card-content"> 
                    <a href="/" class="font">Youtube</a> 
                </div>
            </div>
            <div class="card"> 
                {/* <img src="public/photos/train.gif" alt="b"> */}
                <div class="card-content"> 
                    <a href="/" class="font"> Instagram</a> 
                </div>
            </div>
            <div class="card"> 
                {/* <img src="public/photos/timbs.gif" alt="w"> */}
                <div class="card-content"> 
                    <a href="/" class="font"> Spotify</a>
                </div>
            </div>
            <div class="card"> 
                {/* <img src="public/photos/jalenbrunson.gif" alt="a"> */}
                <div class="card-content"> 
                    <a href="/" class="font"> Apple Pod</a>
                </div>
            </div>

       </div>
   
    )
}