
import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable'

function ProductsPage () {
  
  const [products, setProducts] = useState(jsonData);
  
  const [filteredProducts, setFilteredProducts] = useState(jsonData);

  const productsCopy = [...products]

  const [search, setSearch] = useState('')

  const [filterInStock, setFilterInStock] = useState(false);

  
  const updateSearchAndFilter = event => {

    let newFilteredProductsArray;
    

    if(filterInStock){

      newFilteredProductsArray = products.filter(individualProduct => {
        return individualProduct.name.toLowerCase().includes(event.currentTarget.value.toLowerCase()) && individualProduct.inStock
      });
    
      } else {
        newFilteredProductsArray = products.filter(individualProduct => {
          return individualProduct.name.toLowerCase().includes(event.currentTarget.value.toLowerCase())
        });
  }
     
    setFilteredProducts(newFilteredProductsArray);
    setSearch(event.currentTarget.value);

  }


  
  const updateFilterInStock = event => {
    
    let newFilteredProductsArray;
    
    if(event.currentTarget.checked){

      newFilteredProductsArray = products.filter(individualProduct => {
        return individualProduct.name.toLowerCase().includes(search.toLowerCase()) && individualProduct.inStock
      });
    
      } else {
        newFilteredProductsArray = products.filter(individualProduct => {
          return individualProduct.name.toLowerCase().includes(search.toLowerCase())
        });
  }

  setFilteredProducts(newFilteredProductsArray)
  setFilterInStock(event.currentTarget.checked)
}



 




  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar 
        search={search} 
        updateSearchAndFilter={updateSearchAndFilter} 
        filterInStock={filterInStock} 
        updateFilterInStock={updateFilterInStock}

        /> 
        
        <div class="ProductTable">
        <ProductTable products={filteredProducts} />
        </div>
      </div>    
  )
}

export default ProductsPage