import { Link } from 'react-router';
import logo from '../assets/electronic-store-logo-mono.svg'
import payment from '../assets/electronic-store-footer-payment-gateway-icon.png'

const FootCom =()=>{
    return(
        <div>
            <div className="w-[90%] m-auto border-t-[1px] border-gray-500 py-16 flex">
                <div className='w-full flex justify-around items-start'>
                    <img src={logo} alt="" className='w-32'/>
                    <ul type="none">
                        <li className="text-2xl font-bold mb-8">Shop</li>
                        <li className='mb-3'>
                            <Link to="" className="text-md text-brandColor hover:underline hover:text-gray-600">Hot deal</Link>
                        </li>
                        <li className='mb-3'>
                            <Link to="" className="text-md text-brandColor hover:underline hover:text-gray-600">Category</Link>
                        </li>
                        <li className='mb-3'>
                            <Link to="" className="text-md text-brandColor hover:underline hover:text-gray-600">Brands</Link>
                        </li>
                    </ul>
                    <ul type="none">
                        <li className="text-2xl font-bold mb-8">Need help?</li>
                        <li className='mb-3'>
                            <Link to="" className="text-md text-brandColor hover:underline hover:text-gray-600">Contact</Link>
                        </li>
                        <li className='mb-3'>
                            <Link to="" className="text-md text-brandColor hover:underline hover:text-gray-600">Category</Link>
                        </li>
                        <li className='mb-3'>
                            <Link to="" className="text-md text-brandColor hover:underline hover:text-gray-600">FAQs</Link>
                        </li>
                        <li className='mb-3'>
                            <Link to="" className="text-md text-brandColor hover:underline hover:text-gray-600">Return Policy</Link>
                        </li>
                        <li className='mb-3'>
                            <Link to="" className="text-md text-brandColor hover:underline hover:text-gray-600">Privacy Policy</Link>
                        </li>
                    </ul>
                    <ul type="none">
                        <li className="text-2xl font-bold mb-8">Address</li>
                        <li>
                            <p className="text-md text-brandColor">2011st , Kok Kleang ,<br /> Sen Sok , Phnom Penh</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-full h-32 bg-[#27323F]">
                <div className="h-full m-auto flex items-center w-[90%] justify-between">
                    <p className='text-sm text-gray-400'>{new Date().getFullYear()} Electronic Store. Powered by Electronic Store</p>
                    <img src={payment} alt="" />
                </div>
            </div>
        </div>
    )
}
export default FootCom;