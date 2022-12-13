import React, { useState } from 'react';
import image from '../Image/pic.png'
const Home = () => {


    const [Sum, setSum] = useState(0);

    const HandelSubmit = (event) => {


        const element = event.target;
        const numberOne = parseFloat(element.numberOne.value);
        const numberTwo = parseFloat(element.numberTwo.value);






        const valideNumberOne = !isNaN(numberOne);
        const valideNumberTwo = !isNaN(numberTwo);
        if (valideNumberOne && valideNumberTwo) {

            const sum = parseFloat(numberOne / numberTwo);
            setSum(sum);



        }
        else {
            alert('Please Input the Valide Number')
        }

        element.reset();


        event.preventDefault();




    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">


                        <img style={{ width: '600px', height: '400px' }} src={image} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    </div>
                    <form onSubmit={HandelSubmit} style={{ width: '600px', height: '400px' }} className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Enter the Number</span>
                                </label>
                                <input type="text" name='numberOne' placeholder="Number One" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Enter the Number</span>
                                </label>
                                <input type="text" name='numberTwo' placeholder="Number Two" className="input input-bordered " />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Result-Section</span>
                                </label>
                                <input type="text" value={Sum} placeholder="Result " className="input input-bordered" />
                            </div>



                            <div className="form-control mt-6">
                                <button className="btn btn-outline btn-success">Divide</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Home;