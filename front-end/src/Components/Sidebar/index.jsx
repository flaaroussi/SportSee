import './Sidebar.scss';
import { ReactComponent as YogaIcon } from '../../assets/images/YogaIcon.svg'
import { ReactComponent as SwimIcon } from '../../assets/images/SwimIcon.svg'
import { ReactComponent as BodyBuildIcon } from '../../assets/images/BodyBuildIcon.svg'
import { ReactComponent as BycIcon } from '../../assets/images/BycIcon.svg'

export default function Sidebar (){
   return(<aside className="sidebar">
      <nav>
      <YogaIcon className="sidebar__logo"  alt="logo yoga" />
      <SwimIcon className="sidebar__logo"  alt="logo swimming" />
      <BycIcon className="sidebar__logo"  alt="logo cycling" />
      <BodyBuildIcon className="sidebar__logo"  alt="logo body build" />
      </nav>     
      <footer className="sidebar__text">Copiryght, SportSee 2020</footer>
   </aside>)
}