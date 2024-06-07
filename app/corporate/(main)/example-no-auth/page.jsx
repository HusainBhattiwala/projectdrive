export default function Page() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
      <div className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-3 xl:col-span-4 bg-blue-500">
        <img src="/images/login/new-login-banner.png" alt="" />
      </div>
      <div className="col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-2 bg-green-500">
        <h2>Sayak Mallick</h2>
      </div>
    </div>

  );
}
