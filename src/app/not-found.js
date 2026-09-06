import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <section className="error-page py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-12">
              <div className="error-inner text-center p-5 bg-light rounded-4 shadow-sm">
                <div className="error-top mb-4">
                  <h1 className="display-1 fw-bold text-primary">404</h1>
                  <i className="fa fa-frown-o fa-3x text-muted"></i>
                </div>
                <h2 className="fw-bold text-dark mb-3">Sorry! The Page Was Not Found</h2>
                <p className="text-secondary mb-4">
                  The page you are looking for might have been moved, renamed, or is temporarily unavailable.
                </p>
                <div className="error-button">
                  <Link href="/" className="theme-btn px-4 py-2">
                    Return To Homepage
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
