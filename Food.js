import React, { useState } from 'react';
export default function Food() {
    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);
    const API_ID = "18ea9fd5";
    const API_KEY = "eaec06f952263681a8c3aca72bcc1972";
    const submitHandle = (e) => {
        e.preventDefault();
        fetch(`https://api.edamam.com/search?q=${search}&app_id=${API_ID}&app_key=${API_KEY}`)
            .then(res => res.json())
            .then(data => setData(data.hits));
    }
    const handleChange = (e) => {
        setSearch(e.target.value);
    }
    return (
        <div className='bg-light text-light'>
            
            <center>
                <h1 className='bg-dark text-light'>Select Food Recipe</h1>
                <form onSubmit={submitHandle}>
                    <input type='text' value={search} onChange={handleChange} placeholder='Search item' className='w-50 p-2 mb-2 text-dark'/>
                    <input type='submit' value="Search" className='btn btn-primary text-dark p-2 mb-2'/>
                </form>
            </center>
            <div className='container-fluid'>
                <div className='row'>
                    {data.map((item) => (
                        <div className='col-md-4'style={{backgroundColor:'skyblue'}} key={item.recipe.label}>
                            <div className='card m-2 mb-2'style={{width:450,backgroundColor:'rgb(247, 207, 213)'}}>
                                <img src={item.recipe.image} className="card-img-top img-fluid" alt="Recipe"/>
                                <div className="card-body">
                                    <h5 className="card-title">{item.recipe.label}</h5>
                                    <p>Amount of calories:₹{Math.round(item.recipe.calories)}</p>
                                    <a href="#" className="btn btn-primary">{Math.round(item.recipe.totalWeight) - 500}</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
