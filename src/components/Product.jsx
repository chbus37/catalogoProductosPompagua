import './Product.css';

const Product = ({ nombre, imagen, descripcion }) => {
    return (
        <div className='productCard'>
            <h2 className='nombre'>{nombre}</h2>
            <img className='imagen' src={imagen} alt={nombre} />
            <p className='descripcion'>{descripcion}</p>
            <a
                className='btn btn-enlace'
                href="https://bit.ly/pompagua"
                target="_blank"
                rel="noopener noreferrer"
            >
                Pedir por Whatsapp
            </a>
        </div>
    )
}

export default Product
