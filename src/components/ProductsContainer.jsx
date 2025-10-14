import { useEffect, useState } from 'react';
import Product from '../components/Product.jsx'
import './ProductsContainer.css'

const ProductsContainer = () => {

    const [productosData, setProductosData] = useState([]);

    useEffect(() => {
        fetch('/productos.json')
            .then(res => res.json())
            .then(data => {
                setProductosData(data);
                console.log(data);
            });
    }, [])
    return (
        <div className='productsContainer'>
            {
                productosData.map(producto => {
                    return (
                        <Product key={producto.id} nombre={producto.nombre} imagen={producto.imagen} descripcion={producto.descripcion} />
                    )
                })
            }
        </div>
    )
}

export default ProductsContainer
