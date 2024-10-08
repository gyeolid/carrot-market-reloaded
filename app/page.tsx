export default function Home(){
  return (
    <main className="bg-gray-300 h-screen flex items-center justify-center p-5 dark:bg-gray-700">
      <div className="bg-white shadow-lg p-5 rounded-2xl w-full max-w-screen-sm flex flex-col gap-3">
        <input type="text" placeholder='Search here...' className='w-full rounded-full h-10 bg-gray-200 pl-5  outline-none ring' />
        <button className='bg-black text-white py-2 rounded-full active:scale-95  transition-transform font-medium outline-none'>Search</button>
      </div>
    </main>
  );
}