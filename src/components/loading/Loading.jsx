import logo from '../../assets/image/app-logo.png'
const Loading = () => {
    return (
        <div role="status" className="w-full h-screen fixed bg-[rgba(86,85,85,0.9)] z-50 flex flex-col justify-center items-center gap-10">
            <img className='animate__animated animate__flash circle-1 animate__infinite	infinite' src={logo} alt="" />
            <div className="text-3xl skeleton-text">در حال دریافت اطلاعات</div>
        </div>
    );
};

export default Loading;