export const metadata = {
  title: "Trang không tồn tại | Thùy Dương Spa",
  description:
    "Rất tiếc, trang bạn tìm kiếm không tồn tại. Vui lòng quay lại trang chủ Thùy Dương Spa.",
};

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-primary-2 flex flex-col items-center justify-center bg-gradient-to-b from-pink-50 to-white text-center px-4">
      <h1 className="text-8xl font-bold text-green-400 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">
        Trang không tồn tại
      </h2>
      <p className="text-gray-500 max-w-md mb-8">
        Rất tiếc! Có vẻ như bạn đã đi lạc. Trang này có thể đã bị xóa hoặc địa
        chỉ không đúng.
      </p>

      <a
        href="/"
        className="bg-green-500 text-white px-6 py-3 rounded-full font-medium hover:bg-pink-600 transition-all duration-200"
      >
        Quay lại trang chủ
      </a>

      <div className="mt-10">
        <img
          src="/thuyduongshop.png"
          alt="Not Found"
          className="w-72 mx-auto opacity-80"
        />
      </div>
    </div>
  );
};

export default NotFoundPage;
