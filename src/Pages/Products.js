import { useNavigate } from "react-router-dom";

function ProductsPage() {

    const navigate = useNavigate();

    function navigateBackToHomePage() {
        navigate('/');
    }

    return <>
        <h1>Products</h1>
        <ul>
            <li>Product 1</li>
            <li>Product 2</li>
            <li>Product 3</li>
        </ul>
        <button onClick={ navigateBackToHomePage }>Back To Home Page</button>
    </>
}

export default ProductsPage;