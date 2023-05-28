import {Link, NavLink} from 'react-router-dom';
import { useRef, useState } from 'react';
import Login from '../Login/Login'
import Notification from '../components/Notification/Notification';
import { request, setAuthToken, getAuthToken, setStoredPlayerNick,  getStoredPlayerNick } from '../components/MyAxios/MyAxios';
import './Header.css';
import axios from 'axios';

const Header = () => {
    const [loginActive, setLoginActive, children1] = useState(false); //Состояния модального окна "логин"
    const [signupActive, setSignupActive, children2] = useState(false); // Состояния модального окна "регистрации"


    const [selectorActive, setSelectorActive] = useState(false); // Состояния селектора стран
    const toggleClass = () => { // функция toggle для селектора
        setSelectorActive(!selectorActive);
    };
    const [value, setValue] = useState('Выберите страну'); //"Значение" в селекторе
    // База Стран для селектора
    const [countries, setCountries] = useState([]);
    
    // const countries =[
    //     {name: "Россия", flagPath: "../img/flags/mini/Russia.svg"},
    //     {name: "Остров Мэн", flagPath: "../img/flags/mini/IsleOfMan.svg"},
    //     {name: "Албания", flagPath: "../img/flags/mini/Albania.svg"},
    //     {name: "Испания", flagPath: "../img/flags/mini/Spain.svg"},
    //     {name: "Белиз", flagPath: "../img/flags/mini/Belize.svg"},
    //     {name: "Косово", flagPath: "../img/flags/mini/Kosovo.svg"}
    // ]

    //_____ Фрагменты, отвечающие за отображение ошибок_________
    const [errorList, setErrorList] = useState([]); //список появляющихся ошибок
    function showError(desc){ //"вывести ошибку"
        let toastProperties = {
            description: desc,
            border: "1px solid #FF1E1E"
        };
        setErrorList([...errorList, toastProperties]);
    }

    //_____Вывод уведомлений______
    function notificationEmpty(){ //"вывести ошибку"
        let toastProperties = {
            description: "У вас нет уведомлений",
            border: "1px solid white"
        };
        setErrorList([...errorList, toastProperties]);
    }
    function kickFromTeamNotification(){
        showError("Вас исключили из команды");
    }
    
    ////////////////////////////

    const [isAuthorized, setIsAuthorized] = useState(getAuthToken() !== null && getAuthToken() !== "null" && getAuthToken() !== "undefined"); //Для проверки на авторизованность
    const [playerNick, setPlayerNick] = useState((getStoredPlayerNick() !== null && getStoredPlayerNick() !== "null" && getStoredPlayerNick() !== "undefined") ? getStoredPlayerNick() : "");

    const nameRef = useRef(null);
    const surnameRef = useRef(null);
    const passwordRef = useRef(null);
    const emailRef = useRef(null);
    const nickRef = useRef(null);

    const nickLoginRef = useRef(null);
    const passwordLoginRef = useRef(null);

    const onLogin = () =>{
        request("POST", "/auth/login", 
        {
            password: passwordLoginRef.current.value,
            nick: nickLoginRef.current.value
        }).then((resp) => {
            setIsAuthorized(true);
            setAuthToken(resp.data.token);
            setStoredPlayerNick(resp.data.nick);
            setPlayerNick(resp.data.nick);
        }).catch((error) => {
            setIsAuthorized(false);
        });
        setLoginActive(!loginActive);
    }

    const onRegistration = () =>{
        request("POST", "/auth/register", 
        {
            firstName: nameRef.current.value,
            lastName: surnameRef.current.value,
            password: passwordRef.current.value,
            email: emailRef.current.value,
            nick: nickRef.current.value,
            country: value
        }).then((resp) => {
            setIsAuthorized(true);
            setAuthToken(resp.data.token);
            setStoredPlayerNick(resp.data.nick);
            setPlayerNick(resp.data.nick);
        }).catch((error) => {
            setIsAuthorized(false);
        });
        setSignupActive(!signupActive);
    }

    const initCountries = () =>{
        if(countries.length === 0){
            request("GET", "/country", {}).then((resp) => {
                setCountries(resp.data);
            });
        }
    }

    return(
        <header className='Header'>
            <div className='Header-content'>
                <div className="Header-logo"></div>
                <nav className='Navigation'>
                    <ul className='Navigation-list'>
                        <li className='Navigation-link'>
                            <NavLink to='/tournaments' style={({ isActive }) => ({  // Если вкладка активна, то текст становится белым
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
                    {isAuthorized ? 
                        <div className="Profile">
                            <div className="notification_icon" onClick={() => notificationEmpty()}>
                                <svg 
                                    width="20" 
                                    height="24" 
                                    viewBox="0 0 20 24" 
                                    fill="none" 
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path 
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M19.2857 18.4688C17.1429 18.4688 17.1429 10.5625 17.1429 10.5625C17.1429 7.25481 14.9193 4.47613 11.8971 3.6395C12.0486 3.34337 12.1429 3.01275 12.1429 2.65625C12.1429 1.46528 11.1836 0.5 10 0.5C8.81643 0.5 7.85714 1.46528 7.85714 2.65625C7.85714 3.01275 7.95143 3.34337 8.10286 3.6395C5.08071 4.47613 2.85714 7.25481 2.85714 10.5625C2.85714 10.5625 2.85714 18.4688 0.714286 18.4688C0.32 18.4688 0 18.7908 0 19.1875C0 19.5842 0.32 19.9062 0.714286 19.9062H7.24357C7.18429 20.137 7.14286 20.3756 7.14286 20.625C7.14286 22.2127 8.42214 23.5 10 23.5C11.5779 23.5 12.8571 22.2127 12.8571 20.625C12.8571 20.3756 12.8157 20.137 12.7564 19.9062H19.2857C19.68 19.9062 20 19.5842 20 19.1875C20 18.7908 19.68 18.4688 19.2857 18.4688ZM9.28571 2.65625C9.28571 2.26022 9.60643 1.9375 10 1.9375C10.3936 1.9375 10.7143 2.26022 10.7143 2.65625C10.7143 3.05228 10.3936 3.375 10 3.375C9.60643 3.375 9.28571 3.05228 9.28571 2.65625ZM4.28571 10.5625C4.28571 7.39209 6.84929 4.8125 10 4.8125C13.1507 4.8125 15.7143 7.39209 15.7143 10.5625C15.7143 10.6473 15.7171 12.6605 15.995 14.7097C16.045 15.0784 16.1264 15.6656 16.275 16.3125H3.72429C3.87286 15.6656 3.95429 15.0784 4.00429 14.7097C4.28286 12.6605 4.28571 10.6473 4.28571 10.5625ZM10 22.0625C9.21214 22.0625 8.57143 21.4178 8.57143 20.625C8.57143 20.5273 8.58929 20.4137 8.62714 20.2663L8.90429 19.1875H11.095L11.3729 20.2663C11.4107 20.4137 11.4286 20.5273 11.4286 20.625C11.4286 21.4178 10.7879 22.0625 10 22.0625ZM2.92714 18.4688C3.18714 18.0282 3.38143 17.5279 3.53286 17.0312H16.4671C16.6186 17.5279 16.8129 18.0282 17.0729 18.4688H2.92714Z" 
                                    />
                                </svg>
                            </div>
                            <Link to={"/player/" + playerNick} style={{textDecoration: "none"}}>
                                <div className='Authorized' style={{width: playerNick.length * 15 +"px"}}>
                                    <p>{playerNick}</p>
                                </div>
                            </Link>
                            <div className="exit_icon" onClick={() => console.log("Вышел")}>
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
                        </div>
                        :
                            <button className="Login-btn" onClick={() => {setLoginActive(true); initCountries()}}>
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
                    }
                </div>
            </div>
            {/*Окно логина*/}
            <Login active={loginActive} setActive={setLoginActive}>
                <div className="header_splash_window">
                    <div className="logo_splash_window"></div>
                </div>
                <div className="col_center_gap30">
                    <div className="col_right_gap20">
                        <div className="col_center_gap10">
                            <div className="text-field">
                                <input className="text-field_input" type="text" name="login" id="loginLogin" placeholder="Никнейм пользователя" ref={nickLoginRef}/>
                            </div>
                            <div className="text-field">
                                <input className="text-field_input" type="password" name="password" id="passwordLogin" placeholder="Пароль" ref={passwordLoginRef}/>
                            </div>
                        </div>
                    </div>
                    <div className="keeplogin">
                        <input type="checkbox" name="loginkeeping" id="loginkeeping" value="loginkeeping"/>
                        <label for="loginkeeping">Запомнить меня</label>
                    </div>
                    </div>
                    <div className ="col_center_gap_20">
                    <div className="full_grey_button">
                        <input type="submit" id="loginsubmit" value="Войти" onClick={onLogin}/>
                    </div>
                    <div className="transparent_grey_border_button text">
                        <a className="close">
                        <input type="submit" id="loginsubmit" value="Регистрация"  onClick={() => {setSignupActive(true); setLoginActive(false)}} />
                        </a>
                    </div>
                    </div>
                    
            </Login>
            <Notification props={errorList}></Notification>
            {/* Окно регистрации */}
            <Login active={signupActive} setActive={setSignupActive} >
                <div className="header_splash_window" onClick={() => selectorActive ? toggleClass() : null}>
                    <div className="logo_splash_window"></div>
                </div>
                <div className="col_center_gap30" onClick={() => selectorActive ? toggleClass() : null}>
                    <div className="col_center_gap10">
                        <div className="row_center_6">
                            <div className="text-field_half">
                                <input className="text-field_half input" type="text" name="name" id="name" placeholder="Имя пользователя" ref={nameRef}/>
                            </div>
                            <div className="text-field_half">
                                <input className="text-field_half input" type="text" name="surname" id="surname" placeholder="Фамилия пользователя" ref={surnameRef}/>
                            </div>
                        </div>
                        <div className="row_center_6">
                            <div className="text-field_half">
                                <input className="text-field_half input" type="password" name="password" id="passwordRegistration" placeholder="Пароль" ref={passwordRef}/>
                            </div>
                            <div className="text-field_half">
                                <input className="text-field_half input" type="email" name="email" id="email" placeholder="Почта" ref={emailRef}/>
                            </div>
                        </div>
                        <div className="row_center_6">
                            <div className="text-field_half">
                                <input className="text-field_half input" type="text" name="nick" id="nickRegistration" placeholder="Никнейм пользователя" ref={nickRef}/>
                            </div>
                            <div className="text-field_half">
                                <div className="text-field_half_selector">
                                    <div className="text_field_half_select" onClick={() => toggleClass()}>
                                        <p className={value === "Выберите страну" ? "onStart" : "choosed"}>{value}</p>
                                        <img src="../img/arrow.svg" id="arrowIcon" className={selectorActive ? 'rotate' : null} alt="arrow"/>
                                    </div>
                                    <ul className={ selectorActive ? 'select_list' : 'select_list hide'}>
                                        {countries.map((country) =>
                                            <li key={country.countryRU} className='text_field_half_options' onClick={setValue.bind(this, country.countryRU)}>
                                                <img src={"../img/flags/mini/" + country.countryENG +".svg"} alt={country.countryRU}/>
                                                <p>{country.countryRU}</p>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="full_grey_button">
                        <input type="submit" id="loginsubmit" value="Зарегистрироваться" onClick={onRegistration}/>
                    </div>
                </div>
            </Login>
        </header>
    )
    
    
};

export default Header;