import Sidebar from "./Sidebar";
import { handleOptions } from "./handleOptions";
import { handleSidebar } from "./handleSidebar";
import logo from './assets/images/logo.svg';
import todoIcon from "./assets/images/icon-todo.svg"
import reminderIcon from './assets/images/icon-reminders.svg'
import planningIcon from './assets/images/icon-planning.svg'
import calenderIcon from './assets/images/icon-calendar.svg'
import arrowUp from './assets/images/icon-arrow-up.svg'
import arrowDown from './assets/images/icon-arrow-down.svg'
import menu from './assets/images/icon-menu.svg'

function Navbar() {
  return (
    <nav className="flex p-5 md:w-[90%] md:mx-auto xl:w-[88rem] font-medium text-sm">
      <Sidebar func={handleSidebar} />
      <div className="flex grow sm:gap-6 xl:gap-12 items-center">

        <div className='md:pr-2 h-fit'>
          <img className="w-16 lg:w-20 2xl:w-24 h-auto" src={logo} alt="Logo" />
        </div>

        <ul className="hidden sm:flex justify-between items-center sm:gap-4  xl:gap-10 ">
          <li className="relative">

            <div className="flex items-center" onClick={(e) => handleOptions(e, 'D')}>
              <a className='inline mr-2 ' href="#">Features</a>
              <img className="w-3" src={arrowDown} alt="" />
              <img className='hidden w-3' src={arrowUp} alt="" />
            </div>

            {/* DropDown starts here */}
            <div className="absolute w-max text-[13px] top-[2.5rem] right-0 bg-white border-2 shadow-2xl rounded-md features__options tracking-wide py-4 px-3 lg:p-5 hidden">
              <ul className="features__options flex flex-col gap-2">
                <li>
                  <img className="inline w-4 mr-3" src={todoIcon} alt="" /> Todo List
                </li>
                <li>
                  <img className="inline w-4 mr-3" src={calenderIcon} alt="" /> Calendar
                </li>
                <li>
                  <img className="inline w-4 mr-3" src={reminderIcon} alt="" /> Remainders
                </li>
                <li>
                  <img className="inline w-4 mr-3" src={planningIcon} alt="" /> Planning
                </li>
              </ul>
            </div>
            {/* DropDown ends here */}

          </li>
          <li className="relative">
            <div className="flex items-center" onClick={(e) => handleOptions(e, 'D')}>
              <a className='inline mr-2 ' href="#">Company</a>
              <img className=' inline w-3' src={arrowDown} alt="" />
              <img className='hidden w-3' src={arrowUp} alt="" />
            </div>

            {/* DropDown starts here */}
            <div className="absolute w-max text-[13px] top-[2.5rem] left-0 bg-white border-2 shadow-2xl rounded-md px-6 py-4 tracking-wide hidden
            ">
              <ul className="company__options flex flex-col gap-1 lg:gap-3">
                <li>
                  History
                </li>
                <li>
                  Our Team
                </li>
                <li>
                  Blog
                </li>
              </ul>
            </div>
            {/* DropDown ends here */}
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </div>
      {/* Hamburger Menu */}
      <div className='sm:hidden' >
        <img className='w-7 menu' src={menu} alt="" onClick={(e) => handleSidebar(e)} />
      </div>

      <div className="hidden sm:flex sm:gap-5">
        <button className='login text-[color:var(--Medium-Gray)]'>Login</button>
        <button className='text-[color:var(--Medium-Gray)] sm:py-1 sm:px-2 sm:border-2 sm:border-gray-400 sm:rounded-xl hover:border-[color:var(--Almost-Black)] lg:px-4 lg:py-2'>Register</button>
      </div>
    </nav>
  )
}

export default Navbar