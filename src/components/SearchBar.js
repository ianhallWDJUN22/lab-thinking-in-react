

function SearchBar(props) {

    const { search, updateSearchAndFilter, filterInStock, updateFilterInStock } = props;

    return(
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }} >
            <label>Search</label>
            <input type="text" value={search} onChange={updateSearchAndFilter}/>
            <div>
                <input type="checkbox" value={filterInStock} onChange={updateFilterInStock}/>
                <label>Only show in stock products</label>
            </div>
        </div>
    )
}

export default SearchBar