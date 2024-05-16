import img from '../../assets/image/error-404.png'
const NotFound = () => {
    return (
        <div className='lg:w-[1260px] h-[90vh] mx-auto flex justify-center dark:text-white dark:bg-darken'>
            <div className='w-full flex justify-center items-center'>
                <div className='w-1/3 flex justify-center'>
                    <img src={img} alt="" className="w-[50%]" />
                </div>
                <div className='w-1/2 lg:text-3xl md:text-2xl text-center [&>*]:font-[Morabba] [&>*]:leading-loose'>
                    <p>
                        صفحه مورد نظر پیدا نشد با عرض پوزش، صفحه‌ای که به دنبال آن هستید پیدا نشد. لطفاً از منو یا جستجوی سایت استفاده کنید تا به صفحه مورد نظرتان برسید.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NotFound;