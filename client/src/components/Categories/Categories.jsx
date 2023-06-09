import React from 'react'
import "./Categories.scss"
import {Link} from 'react-router-dom'
export const Categories = () => {
  return (
    <div className='categories'>
        <div className="col">
            <div className="row"><img src="https://i.pinimg.com/564x/f6/be/ff/f6beff31704a5cb6380860cc3f72f446.jpg" alt="" />
            <button>
                <Link className="link" to={"/products/1"}>
                Sale
                </Link>
            </button>
            </div>
            <div className="row"><img src="https://i.pinimg.com/564x/42/83/c8/4283c8606fb09bc528eb39a34b5f49db.jpg" alt="" />
            <button>
                <Link className="link" to={"/products/1"}>
                Girl
                </Link>
            </button>
            </div>
        </div>
        <div className="col">
            <div className="row"><img src="https://i.pinimg.com/564x/6a/df/27/6adf27a15e4cf50be944a82459e0abdb.jpg" alt="" />
            <button>
                <Link className="link" to={"/products/1"}>
                Nwe Season
                </Link>
            </button>
            </div>
        </div>

        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row"><img src="https://i.pinimg.com/564x/54/72/c0/5472c07923e1ea85fd2598ee7b809b28.jpg" alt="" />
            <button>
                <Link className="link" to={"/products/1"}>
                boy
                </Link>
            </button>
                    </div>
                    
                    </div>
                <div className="col">
                    <div className="row"> <img src="https://i.pinimg.com/564x/12/05/d6/1205d67a4aeb1a06a89384b261002c9e.jpg" alt="" />
            <button>
                <Link className="link" to={"/products/1"}>
                Accessories
                </Link>
            </button>
                    </div>
                   </div>
            </div>
            <div className="row"><img src="https://i.pinimg.com/564x/e3/04/c2/e304c25475ea5df94378ea7a945f7709.jpg" alt="" />
            <button>
                <Link className="link" to={"/products/1"}>
                Shoes
                </Link>
            </button>
            </div>
        </div>
    </div>
  )
}
