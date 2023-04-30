import {Link, NavLink} from 'react-router-dom';
import Login from '../Login/Login'
import './Header.css';
import { useState } from 'react';

const Header = () => {
    const [loginActive, setLoginActive, children1] = useState(false); //состояния модального окна "логин"
    const [signupActive, setSignupActive, children2] = useState(false); // состояния модального окна "регистрации"
    const [selectorActive, setSelectorActive] = useState(false); // состояния селектора
    
    const toggleClass = () => { // функция toggle для селектора
        setSelectorActive(!selectorActive);
    };

    const [value, setValue] = useState('Выберите страну'); //Для селектора страны

    const countries =[
        {name: "Россия", flagPath: "img/flags/mini/Russia.svg"},
        {name: "Остров Мэн", flagPath: "img/flags/mini/IsleOfMan.svg"},
        {name: "Албания", flagPath: "img/flags/mini/Albania.svg"},
        {name: "Испания", flagPath: "img/flags/mini/Spain.svg"},
        {name: "Белиз", flagPath: "img/flags/mini/Belize.svg"},
        {name: "Косово", flagPath: "img/flags/mini/Kosovo.svg"}
    ]

    return(
        <header className='Header'>
        <div className='Header-content'>
            <div className="Header-logo"></div>
            <nav className='Navigation'>
                <ul className='Navigation-list'>
                    <li className='Navigation-link'>
                        <NavLink to='/tournaments' style={({ isActive }) => ({  // если активна, то текст белый
                            color: isActive ? 'var(--text-01)' : 'var(--text-02)'})}>
                           Турниры
                        </NavLink>
                    </li>
                    <li className='Navigation-link'>
                        <NavLink to='/' style={({ isActive }) => ({ 
                            color: isActive ? 'var(--text-01)' : 'var(--text-02)'})}>
                                Матчи
                        </NavLink>
                    </li>
                    <li className='Navigation-link' >
                        <NavLink to='/results' style={({ isActive }) => ({ 
                            color: isActive ? 'var(--text-01)' : 'var(--text-02)' })}>
                                Результаты
                        </NavLink>
                    </li>
                    <li className='Navigation-link'>
                        <NavLink to='/top' style={({ isActive }) => ({ 
                            color: isActive ? 'var(--text-01)' : 'var(--text-02)' })}>
                                Топ команд
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className="Login">
                <button className="Login-btn" onClick={() => setLoginActive(true)}>
                
                    <span className="Login-btn-name" >
                        <a>Личный кабинет</a>
                    </span>
                    <div className="Login-btn-icon">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M10.4674 4.49769C10.5238 4.27849 10.5779 4.21386 10.6862 4.08461C10.9595 3.75817 11.3053 3.48953 11.6801 3.30592C12.3045 3 13.1163 3 14.7399 3H16.2599C17.8835 3 18.6952 3 19.3197 3.30592C19.9176 3.59882 20.4011 4.08229 20.694 4.68018C20.9999 5.30464 20.9999 6.11642 20.9999 7.74V16.26C20.9999 17.8836 20.9999 18.6954 20.694 19.3198C20.4011 19.9177 19.9176 20.4012 19.3197 20.6941C18.6952 21 17.8835 21 16.2599 21H14.7399C13.1163 21 12.3045 21 11.6801 20.6941C11.3053 20.5105 10.9595 20.2418 10.6862 19.9154C10.5779 19.7861 10.5238 19.7215 10.4674 19.5023C10.4271 19.3459 10.4501 19.0195 10.512 18.8702C10.5986 18.6611 10.7155 18.556 10.9491 18.3457L17.174 12.7433C17.6154 12.346 17.6154 11.6539 17.174 11.2567L10.9491 5.65434C10.7155 5.44402 10.5986 5.33886 10.512 5.12976C10.4501 4.98051 10.4271 4.65414 10.4674 4.49769ZM14.5 12C14.5 11.5899 14.253 11.2374 13.8997 11.0831L10.6402 8.36687C9.98886 7.8241 9 8.28725 9 9.13509V11L3 11.0001C2.44771 11.0001 2 11.4478 2 12.0001C2 12.5523 2.44772 13.0001 3 13.0001L9 13V14.865C9 15.7128 9.98886 16.176 10.6402 15.6332L13.8997 12.917C14.253 12.7627 14.5 12.4102 14.5 12Z" />
                        </svg>
                    </div>
                </button>
            </div>
        </div>
        <Login active={loginActive} setActive={setLoginActive}>
        <div className="header_splash_window">
                <div className="logo_splash_window"></div>
            </div>
            <div className="col_center_gap30">
                <div className="col_right_gap20">
                <div className="col_center_gap10">
                    <div className="text-field">
                    <input className="text-field_input" type="text" name="login" id="login" placeholder="Имя пользователя" />
                    </div>
                    <div className="text-field">
                    <input className="text-field_input" type="password" name="password" id="password" placeholder="Пароль" />
                    </div>
                </div>
                <div className="keeplogin">
                    <input type="checkbox" name="loginkeeping" id="loginkeeping" value="loginkeeping"/>
                    <label for="loginkeeping">Запомнить меня</label>
                </div>
                </div>
                <div className ="col_center_gap_20">
                <div className="full_grey_button">
                    <input type="submit" id="loginsubmit" value="Войти" />
                </div>
                <div className="transparent_grey_border_button text">
                    <a className="close">
                    <input type="submit" id="loginsubmit" value="Регистрация"  onClick={() => {setSignupActive(true); setLoginActive(false)}} />
                    </a>
                </div>
                </div>
            </div>
        </Login>
        <Login active={signupActive} setActive={setSignupActive} >
            <div className="header_splash_window" onClick={() => selectorActive ? toggleClass() : null}>
                <div className="logo_splash_window"></div>
            </div>
            <div className="col_center_gap30" onClick={() => selectorActive ? toggleClass() : null}>
                <div className="col_center_gap10">
                <div className="row_center_6">
                    <div className="text-field_half">
                    <input className="text-field_half input" type="text" name="login" id="login" placeholder="Имя пользователя"/>
                    </div>
                    <div className="text-field_half">
                    <input className="text-field_half input" type="text" name="login" id="login" placeholder="Фамилия пользователя"/>
                    </div>
                </div>
                <div className="row_center_6">
                    <div className="text-field_half">
                    <input className="text-field_half input" type="password" name="login" id="login" placeholder="Пароль"/>
                    </div>
                    <div className="text-field_half">
                    <input className="text-field_half input" type="text" name="login" id="login" placeholder="Почта"/>
                    </div>
                </div>
                <div className="row_center_6">
                    <div className="text-field_half">
                    <input className="text-field_half input" type="text" name="login" id="login" placeholder="Никнейм пользователя"/>
                    </div>
                    <div className="text-field_half">
                    <div className="text-field_half_selector">
                        <div className="text_field_half_select" onClick={() => toggleClass()}>
                            <p className={value === "Выберите страну" ? "onStart_country" : "choosed_country"}>{value}</p>
                            <img src="img/arrow.svg" id="arrowIcon" className={selectorActive ? 'rotate' : null} alt="arrow"/>
                        </div>
                        <ul className={ selectorActive ? 'select_list' : 'select_list hide'}>
                            {countries.map((country) =>
                                <li className='text_field_half_options' onClick={setValue.bind(this, country.name)}>
                                    <img src={country.flagPath} alt={country.name}/>
                                    <p>{country.name}</p>
                                </li>
                            )}
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
                <div className="full_grey_button">
                <input type="submit" id="loginsubmit" value="Зарегистрироваться"/>
                </div>
            </div>
        </Login>
    </header>
    )
    
    
};

export default Header;