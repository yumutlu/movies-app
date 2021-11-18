


function Searchbar(props) {

   
 const handleFormSubmit = (e)=>{
        e.preventDefault();
    }
 
        return (

            <form onSubmit={handleFormSubmit}>
                <div className="form-row mb-5 mt-5">
                    <div className="col-12">
                        <input onChange={props.searchMovieProp} type="text" className="form-control" placeholder="search popular movies.." />
                    </div>
                </div>
            </form>
        )
    
}

export default Searchbar
