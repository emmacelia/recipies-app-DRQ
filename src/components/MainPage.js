import React, { Component } from 'react';
export class MainPage extends Component {
    render() {
        return <div className="App-intro">
            <br></br>

            <br></br>

            <em>  <h1> Welcome to Recipie Tracker</h1> </em>

            <br></br>

            //creates carosel
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                    <li data-target="#myCarousel" data-slide-to="3"></li>
                    <li data-target="#myCarousel" data-slide-to="4"></li>
                    <li data-target="#myCarousel" data-slide-to="5"></li>
                </ol>

                <div class="carousel-inner">
                    <div class="item active">
                    </div>
                    <div class="item">
                    </div>
                </div>

                //creates the first image
                <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left"></span>
                    <img src="https://tse3.mm.bing.net/th?id=OIP.ijYgX7frE05tB-PxIjAcsQHaE8&pid=Api&P=0" alt="Italian Trulli"></img>

                    <span class="sr-only"></span>
                </a>

                //creates the second image
                <a class="right carousel-control" href="#myCarousel" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right"></span>
                    <img src=" https://tse1.mm.bing.net/th?id=OIP.ONeiDABCq58kwVK7IMbDtgHaE8&pid=Api&P=0" alt="Italian Trulli"></img>

                    <span class="sr-only"></span>
                </a>

                //creates the third image
                <a class="right carousel-control" href="#myCarousel" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right"></span>
                    <img src=" https://tse1.mm.bing.net/th?id=OIP.de_d32w-aqOIbl7Msqq1dgHaE8&pid=Api&P=0" alt="Italian Trulli"></img>

                    <span class="sr-only"></span>
                </a>
            </div>

            <br></br>

            <em>
                <h2>
                "A recipie is a story that ends with a good meal"
    
                </h2>
     
            </em>

            

        </div>;
    }
}