import img1 from '../../src/assets/image/blogs/blog-1.png'
import img2 from '../../src/assets/image/blogs/blog-2.png'
const AboutUs = () => {
  return (
    <div className="w-full">
      <div className="w-full sm:h-[80vh] h-[30vh] bg-aboutus bg-no-repeat sm:bg-cover bg-contain bg-fixed ">
        <div className="lg:w-1/3 sm:w-1/2 w-full sm:px-0 p-5 absolute md:top-[30%] top-[15%] sm:left-[10%] sm:right-auto right-0 sm:mx-0 mx-auto text-white md:text-xl sm:text-lg text-sm sm:bg-transparent bg-abouteus-color rounded-lg">
          <p>خوش آمدید به سایت قهوه فروشی ما! ما با افتخار به ارائه بهترین و با کیفیت ترین قهوه ها مشغولیم. امیدواریم تجربه خوشایندی را برای شما ایجاد کنیم. با تشکر از حمایت شما و انتخاب ما.</p>
          <p className='sm:flex hidden'>تمامی قهوه های ما از بهترین دانه های قهوه انتخاب شده و با دقت و آرامش برای شما تهیه می شوند. ما به ارائه تجربه ای منحصر به فرد و لذت بخش از مصرف قهوه برای مشتریانمان اهمیت ویژه ای می دهیم.</p>
        </div>
      </div>
      <div className="lg:w-[1260px] w-full mx-auto flex flex-col gap-10 dark:text-white p-10">
        <h4 className='p-10 text-center font-semibold md:text-3xl text-xl' data-aos="fade-down">ما میتونیم کمکتون کنیم تا بیزینس خود را راه اندازی کنید</h4>
        <div className='grid sm:grid-cols-2 gap-10 grid-cols-1 items-center justify-items-center'>
          <span className='text-center sm:flex hidden' data-aos="fade-up" data-aos-duration="1000">  امیدواریم تجربه خوشایندی را برای شما ایجاد کنیم. با تشکر از حمایت شما و انتخاب ما امیدواریم تجربه خوشایندی را برای شما ایجاد کنیم. با تشکر از حمایت شما و انتخاب ما امیدواریم تجربه خوشایندی را برای شما ایجاد کنیم. با تشکر از حمایت شما و انتخاب ماامیدواریم تجربه خوشایندی را برای شما ایجاد کنیم. با تشکر از حمایت شما و انتخاب ما</span>
          <img src={img1} data-aos="fade-right" alt="" className='w-72 h-72 object-cover rounded-full'/>
          <span className='text-center sm:hidden flex' data-aos="fade-up" data-aos-duration="1000">  امیدواریم تجربه خوشایندی را برای شما ایجاد کنیم. با تشکر از حمایت شما و انتخاب ما امیدواریم تجربه خوشایندی را برای شما ایجاد کنیم. با تشکر از حمایت شما و انتخاب ما امیدواریم تجربه خوشایندی را برای شما ایجاد کنیم. با تشکر از حمایت شما و انتخاب ماامیدواریم تجربه خوشایندی را برای شما ایجاد کنیم. با تشکر از حمایت شما و انتخاب ما</span>
        </div>
        <div className='grid sm:grid-cols-2 gap-10 grid-cols-1 items-center justify-items-center'>
          <img src={img2} data-aos="fade-left" alt="" className='w-72 h-72 object-cover rounded-full'/>
          <span className='text-center' data-aos="fade-up" data-aos-duration="1000"> امیدواریم تجربه خوشایندی را برای شما ایجاد کنیم. با تشکر از حمایت شما و انتخاب ما امیدواریم تجربه خوشایندی را برای شما ایجاد کنیم. با تشکر از حمایت شما و انتخاب ما امیدواریم تجربه خوشایندی را برای شما ایجاد کنیم. با تشکر از حمایت شما و انتخاب ما امیدواریم تجربه خوشایندی را برای شما ایجاد کنیم. با تشکر از حمایت شما و انتخاب ما</span>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;