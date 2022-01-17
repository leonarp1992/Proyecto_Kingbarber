function Footer(){
    return(
        <div>
            {/*<!-- Footer-->*/}
                <footer className="bg-dark py-4 mt-auto">
                  <div className="container px-5">
                    <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                      <div className="col-auto">
                        <div className="small m-0 text-white">
                          Copyright 2021 &copy; MisionTIC 2022
                        </div>
                      </div>
                      <div className="col-auto">
                        <a className="link-light small" href="#!">
                          <i className="bi bi-instagram"> @barberking</i>
                        </a>
                        <span className="text-white mx-1">&middot;</span>
                        <a className="link-light small" href="#!">
                          <i className="bi bi-facebook"> BarbeKing</i>
                        </a>
                        <span className="text-white mx-1">&middot;</span>
                        <a className="link-light small" href="#!">
                          <i className="bi bi-whatsapp"> 3009000800</i>
                        </a>
                      </div>
                    </div>
                  </div>
                </footer>
                {/*<!-- Bootstrap core JS-->*/}
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
                {/*<!-- Core theme JS-->*/}
                <script src={process.env.PUBLIC_URL + '/js/scripts.js'}></script>

        </div>
    )           
}
export default Footer;
