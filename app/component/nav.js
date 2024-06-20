import Link from "next/link";


export default function Home() {
    return (
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <Link href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <svg className="bi me-2" width="40" height="32">
                        <use xlinkHref="#bootstrap"></use>
                    </svg>
                    <img className="Wing" src="/img/Wing.png" alt="Wing" style={{ height: "50px", marginLeft: "10px" }} />
                    <span className="fs-4">Chayodom</span>
                </Link>

                <ul className="nav nav-pills">
                    <li className="nav-item text-uppercase"><Link href="/" className="nav-link active me-3">Home</Link></li>
                    <li className="nav-item text-uppercase"><Link href="/about" className="nav-link active me-3">About</Link></li>
                    <li className="nav-item text-uppercase"><Link href="/Dashboard" className="nav-link active me-3">Dashboard</Link></li>  
                </ul>
            </header>
        </div>
    );
}
