import React from 'react';
import { Button, Container } from 'react-bootstrap';

const BackGround = () => {
    return (
        <div className="w-100">
            <Container>
                <div className="d-flex align-items-center justify-content-center" style={{height:'60vh',width:'100%'}}>
                    <div className="w-100">
                        <div className="row align-items-center">
                        <h1 >Car Store</h1>
                            <div className="col-12 col-md-6">
                                <p> “Buy the car you want, drive the road you want.”</p>
                            </div>

                        
                            <div className="col-12 col-md-6">
                                <p>A car (or automobile) is a wheeled motor vehicle used for transportation. Most definitions of cars say that they run primarily on roads, seat one-to-eight people, have four wheels and mainly transport people rather than goods.

Cars came into global use during the 20th century, and developed economies depend on them. The year 1886 is regarded as the birth year of the car when German inventor Karl Benz patented his Benz Patent-Motorwagen. Cars became widely available in the early 20th century. One of the first cars accessible to the masses was the 1908 Model T, an American car manufactured by the Ford Motor Company. Cars were rapidly adopted in the US, where they replaced animal-drawn carriages and carts. In Europe and other parts of the world, demand for automobiles did not increase until after World War II.

Cars have controls for driving, parking, passenger comfort, and a variety of lights. Over the decades, additional features and controls have been added to vehicles, making them progressively more complex. These include rear-reversing cameras, air conditioning, navigation systems, and in-car entertainment. Most cars in use in the early 2020s are propelled by an internal combustion engine, fueled by the combustion of fossil fuels. Electric cars, which were invented early in the history of the car, became commercially available in the 2000s and are predicted to cost less to buy than gasoline cars before 2025. The transition from fossil fuels to electric cars features prominently in most climate change mitigation scenarios, such as Project Drawdown's 100 actionable solutions for climate change.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default BackGround;