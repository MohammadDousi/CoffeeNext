import img1 from '../../src/assets/image/blogs/blog-1.png'
import img2 from '../../src/assets/image/blogs/blog-2.png'
const AboutUs = () => {
  return (
    <div className="w-full">
      <div className="w-full h-screen bg-aboutus bg-fixed bg-center bg-cover bg-no-repeat flex flex-col justify-end md:justify-center items-center md:items-end">
        <div className="w-full md:w-1/2 h-82 p-6 m-5 text-white float-left bg-[#7e8a8a] md:bg-transparent">
          <p>خوش آمدید به سایت قهوه فروشی ما! ما با افتخار به ارائه بهترین و با کیفیت ترین قهوه ها مشغولیم. امیدواریم تجربه خوشایندی را برای شما ایجاد کنیم. با تشکر از حمایت شما و انتخاب ما.</p>
          <p className='hidden md:flex'>تمامی قهوه های ما از بهترین دانه های قهوه انتخاب شده و با دقت و آرامش برای شما تهیه می شوند. ما به ارائه تجربه ای منحصر به فرد و لذت بخش از مصرف قهوه برای مشتریانمان اهمیت ویژه ای می دهیم.</p>
        </div>
      </div>
      <div className=" w-full lg:w-[1260px] mx-auto p-10 flex flex-col gap-10 dark:text-white">
        <h4 className='p-10 text-center font-semibold text-xl md:text-3xl' data-aos="fade-down">ما میتونیم کمکتون کنیم تا بیزینس خود را راه اندازی کنید</h4>
        <div className='grid  grid-cols-1 md:grid-cols-2 gap-10 items-center justify-items-center'>
          <span className='hidden text-center md:flex' data-aos="fade-up" data-aos-duration="1000">  امیدواریم تجربه خوشایندی را برای شما ایجاد کنیم. با تشکر از حمایت شما و انتخاب ما امیدواریم تجربه خوشایندی را برای شما ایجاد کنیم. با تشکر از حمایت شما و انتخاب ما امیدواریم تجربه خوشایندی را برای شما ایجاد کنیم. با تشکر از حمایت شما و انتخاب ماامیدواریم تجربه خوشایندی را برای شما ایجاد کنیم. با تشکر از حمایت شما و انتخاب ما</span>
          <img src={img1} data-aos="fade-right" alt={img1} className='w-72 h-72 object-cover rounded-full'/>
          <span className='flex flex-row text-center md:hidden ' data-aos="fade-up" data-aos-duration="1000">  امیدواریم تجربه خوشایندی را برای شما ایجاد کنیم. با تشکر از حمایت شما و انتخاب ما امیدواریم تجربه خوشایندی را برای شما ایجاد کنیم. با تشکر از حمایت شما و انتخاب ما امیدواریم تجربه خوشایندی را برای شما ایجاد کنیم. با تشکر از حمایت شما و انتخاب ماامیدواریم تجربه خوشایندی را برای شما ایجاد کنیم. با تشکر از حمایت شما و انتخاب ما</span>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-items-center'>
          <img src={img2} data-aos="fade-left" alt={img2} className='w-72 h-72 object-cover rounded-full'/>
          <span className='text-center' data-aos="fade-up" data-aos-duration="1000"> امیدواریم تجربه خوشایندی را برای شما ایجاد کنیم. با تشکر از حمایت شما و انتخاب ما امیدواریم تجربه خوشایندی را برای شما ایجاد کنیم. با تشکر از حمایت شما و انتخاب ما امیدواریم تجربه خوشایندی را برای شما ایجاد کنیم. با تشکر از حمایت شما و انتخاب ما امیدواریم تجربه خوشایندی را برای شما ایجاد کنیم. با تشکر از حمایت شما و انتخاب ما</span>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;