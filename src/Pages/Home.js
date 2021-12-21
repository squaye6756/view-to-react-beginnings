import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className='row'>
                <div className='item'>
                    <button>
                        <Link to='/placeholder-link-1'>placeholder#1</Link>
                    </button>
                </div>
                <div className='item'>
                    <button>
                        <Link to='/placeholder-link-2'>placeholder#2</Link>
                    </button>
                </div>
                <div className='item'>
                    <button>
                        <Link to='/placeholder-link-3'>placeholder#3</Link>
                    </button>
                </div>
            </div>
            <div className='row'>
                <div className='item'>
                    <button>
                        <Link to='/placeholder-link-4'>placeholder#4</Link>
                    </button>
                </div>
                <div className='item'>
                    <button>
                        <Link to='/placeholder-link-5'>placeholder#5</Link>
                    </button>
                </div>
                <div className='item'>
                    <button>
                        <Link to='/placeholder-link-6'>placeholder#6</Link>
                    </button>
                </div>
            </div>
            <div className='row'>
                <div className='item'>
                    <button>
                        <Link to='/placeholder-link-7'>placeholder#7</Link>
                    </button>
                </div>
                <div className='item'>
                    <button>
                        <Link to='/placeholder-link-8'>placeholder#8</Link>
                    </button>
                </div>
                <div className='item'>
                    <button>
                        <Link to='/placeholder-link-9'>placeholder#9</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home;
