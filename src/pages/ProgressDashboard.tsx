import { PowerBIDashboardURL } from "../config";

function ProgressDashboard() {

    return (
        <>
            <iframe
                title="Progress Dashboard"
                width="100%"
                height="800px"
                src={PowerBIDashboardURL}
            ></iframe>
        </>
    );
}

export default ProgressDashboard;