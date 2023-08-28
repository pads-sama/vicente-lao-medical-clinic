
const PageComponents = ({ title, button='', children }) => {
  return (
    <>
        <header className="bg-white shadow">
          <div className="flex justify-between px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold tracking-wide text-textColor font-opensans">{title}</h1>
            <button>{button}</button>
          </div>
        </header>
        <main>
          <div className="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">{children}</div>
        </main>
    </>
  )
}

export default PageComponents