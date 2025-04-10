import { Link, useNavigate } from "react-router-dom";

function ProductsPage() {

    const navigate = useNavigate();

    const PRODUCTS = [
        { id: 'p1', title: 'Product One' },
        { id: 'p2', title: 'Product Two' },
        { id: 'p3', title: 'Product Three' }
    ]

    function navigateBackToHomePage() {
        navigate('/');
    }

    return <>
        <h1>Products</h1>
        <ul>
            {
                PRODUCTS.map((product) => (
                    <li key={ product.id }>
                        <Link to={`/products/${product.id}`}>{ product.title }</Link>
                    </li>
                ))
            }
        </ul>
        <button onClick={ navigateBackToHomePage }>Back To Home Page</button>
    </>
}

export default ProductsPage;