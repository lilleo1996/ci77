import {useParams} from 'react-router-dom';

const ProductDetail = () => {
    const params = useParams();
    console.log(params)

    return (
        <div className="product-detail">
            <h3>Product: {params.productId}</h3>
        </div>
    )
}

export default ProductDetail;