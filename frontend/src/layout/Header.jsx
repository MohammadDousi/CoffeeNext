import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='flex justify-between items-center bg-[#000000] backdrop-blur-[4px] m-10 rounded-2xl h-[96px] text-white'>
      <div className='flex mx-10'>
        <img className='p-4' src="" alt="logo" />
        <ul className='flex xl:[&>*]:p-5 text-bgItemLightColor'>
          <li className='[&>*]:transition-colors [&>*]:hover:text-primaryColor'><Link to='/homepage'>صفحه اصلی</Link></li>
          <li className='[&>*]:transition-colors [&>*]:hover:text-primaryColor relative group'><Link to='/homepage'>فروشگاه</Link>
            <ul className='flex flex-col text-white mt-5 bg-bgDarkColor w-[208px] h-[272px] absolute right-1 top-10 rounded-2xl justify-center gap-4 pr-5 invisible group-hover:visible transition-all child:transition-colors child-hover:text-orange-30 '>
              <li><Link to='/shopping/1'>قهوه ویژه</Link></li>
              <li><Link to='/shopping/2'>ویژه در سطح جهانی</Link></li>
              <li><Link to='/shopping/3'>قهوه درجه یک</Link></li>
              <li><Link to='/shopping/4'>ترکیبات تجاری</Link></li>
              <li><Link to='/shopping/5'>کپسول قهوه</Link></li>
              <li><Link to='/shopping/6'>قهوه زینو برزیلی</Link></li>
            </ul>
          </li>
          <li className='[&>*]:transition-colors [&>*]:hover:text-primaryColor'><Link to='/homepage'>دیکشنری</Link></li>
          <li className='[&>*]:transition-colors [&>*]:hover:text-primaryColor'><Link to='/homepage'>بلاگ</Link></li>
          <li className='[&>*]:transition-colors [&>*]:hover:text-primaryColor'><Link to='/homepage'>درباره ما</Link></li>
          <li className='[&>*]:transition-colors [&>*]:hover:text-primaryColor'><Link to='/homepage'>تماس با ما</Link></li>
        </ul>
      </div>
      <div></div>
    </div>
  )
}
