import { handleOptions } from "./handleOptions";
import todoIcon from "./assets/images/icon-todo.svg"
import reminderIcon from './assets/images/icon-reminders.svg'
import planningIcon from './assets/images/icon-planning.svg'
import calenderIcon from './assets/images/icon-calendar.svg'
import arrowUp from './assets/images/icon-arrow-up.svg'
import arrowDown from './assets/images/icon-arrow-down.svg'
import close from './assets/images/icon-close-menu.svg'

// eslint-disable-next-line react/prop-types
export default function Sidebar({ func }) {
  const handleSidebar = func;

  return (
    <div className="sidebar hidden sm:hidden fixed h-full top-0 right-0 bg-white  w-[69%]">
      <img className="close ml-auto mr-9 mt-5" src={close} alt="" onClick={(e) => handleSidebar(e)} />
      <ul className="text-base ml-9 mt-9">
        <li className="features" >
          <div className="flex items-center" onClick={(e) => handleOptions(e)}>
            <a className='inline mr-5' href="#" >Features</a>
            <img className="w-3" src={arrowDown} alt="" />
            <img className='hidden w-3' src={arrowUp} alt="" />
          </div>

          {/* dropdown starts here */}
          <ul className="features__options mt-5 hidden">
            <li className="ml-3 mb-2">
              <img className="inline w-4 mr-3" src={todoIcon} alt="" /> Todo List
            </li>
            <li className="ml-3 mb-2">
              <img className="inline w-4 mr-3" src={calenderIcon} alt="" /> Calendar
            </li>
            <li className="ml-3 mb-2">
              <img className="inline w-4 mr-3" src={reminderIcon} alt="" /> Remainder
            </li>
            <li className="ml-3 mb-2">
              <img className="inline w-4 mr-3" src={planningIcon} alt="" /> Planning
            </li>
          </ul>
          {/* dropdown ends here */}

        </li>
        <li>
          <div className="flex items-center" onClick={(e) => handleOptions(e)}>
            <a className='inline mr-5' href="#" >Company</a>
            <img className='ArrowDownC w-3' src={arrowDown} alt="" />
            <img className='ArrowUpC hidden w-3' src={arrowUp} alt="" />
          </div>

          {/* dropdown starts here */}
          <ul className="company__options hidden mt-5">
            <li className="ml-3 mb-2">
              History
            </li>
            <li className="ml-3 mb-2">
              Our Team
            </li>
            <li className="ml-3 mb-2">
              Blog
            </li>
          </ul>
          {/* dropdown ends here */}

        </li>
        <li>
          <a href="#">Careers</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
      <div className="flex flex-col justify-center items-center gap-[1rem] mt-10">
        <button className='login text-[color:var(--Medium-Gray)]'>Login</button>
        <button className='text-[color:var(--Medium-Gray)] border-2 w-[60%] py-1 border-gray-400 rounded-2xl hover:border-[color:var(--Almost-Black)]'>Register</button>
      </div>
    </div>
  )
}
