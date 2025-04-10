import { useNavigate } from "react-router-dom";

function ProductsPage() {

    const navigate = useNavigate();

    function navigateBackToHomePage() {
        navigate('/');
    }

    return <>
        <h1>Products</h1>
        <button onClick={ navigateBackToHomePage }>Back To Home Page</button>
    </>
}

export default ProductsPage;