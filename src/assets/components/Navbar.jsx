
const Navbar = () => {
  return (
    <header className="h-16 flex items-center shadow-sm">
    <nav className="flex justify-between items-center w-9/12 mx-auto">
      <a href="/" className="text-zinc-800 font-bold uppercase">
        <img src="/images/logo.png" alt="logo" />
      </a>
      <div className="space-x-5 flex items-center">
        <ul className="space-x-5 sm:flex hidden">
          <li className="hover:text-primary"><a href="/">How it works?</a></li>
          <li className="hover:text-primary"><a href="/">Features</a></li>
          <li className="hover:text-primary"><a href="/">About us</a></li>
        </ul>
        <button
          className="font-medium px-5 py-1 border border-primary rounded text-primary"
        >
          Login
        </button>
      </div>
    </nav>
  </header>
  )
}

export default Navbar