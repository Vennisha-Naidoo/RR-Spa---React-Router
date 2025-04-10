import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
    return <>
        <MainNavigation />
        <main>
            <h1>Error Occurred!</h1>
            <p>Page could not be found.</p>
        </main>
    </>;
}

export default ErrorPage;