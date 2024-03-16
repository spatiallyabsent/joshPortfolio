import { useRouteError } from 'react-router-dom';
// used example from 20-React/23-Ins_React-Router
export default function ErrorPage() {
    const { error } = useRouteError();
    return (
        <div id="error-page">
            <h1>Error</h1>
            <p>
                Sorry, an unexpected error has occurred.
            </p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
} 