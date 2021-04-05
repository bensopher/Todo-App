import todoIcon from './Todo List icon.svg';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <AppBar position="static">
            <Toolbar className="d-flex justify-content-between">
                <Avatar alt="app icon" src={todoIcon} />
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active text-white" to="/Todo-App">
                                Home
							</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/todo">
                                Todo
							</Link>
                        </li>
                    </ul>
                </nav>
            </Toolbar>
        </AppBar>
    )
}