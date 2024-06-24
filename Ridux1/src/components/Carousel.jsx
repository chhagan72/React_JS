import React from 'react'

const carasole = () => {
    return (
        <div classNameName="container-fluid">
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src="https://imgs.search.brave.com/D18BcGzPDpyL6wjIkL-3qL5fQUo5ymWXPo7zBKaGtN0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9kMjdq/c3dtNWFuM2Vmdy5j/bG91ZGZyb250Lm5l/dC9hcHAvdXBsb2Fk/cy8yMDE5LzA3L2lu/c2VydC1pbWFnZS1o/dG1sLmpwZw" className="d-block w-100 " height="550px" alt="..."/>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://imgs.search.brave.com/p9S1xTuKM4wAFg9-hTW75eozZeYV8baizA_qmcY6nLU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE0/OTgwNTAxMDgwMjMt/YzUyNDlmNGRmMDg1/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TVRoOGZH/TnZaR1Z5ZkdWdWZE/QjhmREI4Zkh3dw" className="d-block w-100"  height="550px" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://imgs.search.brave.com/JupdiivI6j1_et-0KtPA54oJ4tG-o1BJEJPGdIoLsEE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by93/b3JraW5nLWNvZGVf/MTA5OC0xOTg1OC5q/cGc_c2l6ZT02MjYm/ZXh0PWpwZw" className="d-block w-100" height="550px" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default carasole