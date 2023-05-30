import React, { useState } from "react";
import { useRef } from 'react';
import "./InfoContainer.css"
import Login from "../../Login/Login";
import Editor from "../../components/Editor/Editor";
import Notification from "../../components/Notification/Notification";

function InfoContainer(props){

  //----------Всё, что связано с селекторами страны и города-----------
  const countries =[ // Данные стран и городов
  {name: "Россия", flagPath: "img/flags/mini/Russia.svg", cities: ["Пугачёв", "Самара", "Саратов", "Сызрань", "Балаково", "Тольятти"]},
  {name: "Остров Мэн", flagPath: "img/flags/mini/IsleOfMan.svg", cities: ["Дуглас", "Рамси", "Пил", "Каслтаун", "Лакси", "Онкан"]},
  {name: "Албания", flagPath: "img/flags/mini/Albania.svg", cities: ["Берат", "Буррели", "Влёра", "Гирокастра", "Грамши", "Дуррес"]},
  {name: "Испания", flagPath: "img/flags/mini/Spain.svg", cities: ["Барселона", "Мадрид", "Валенсия", "Севилья", "Мурсия", "Пальма"]},
  {name: "Белиз", flagPath: "img/flags/mini/Belize.svg", cities: ["Белиз Сити", "Сан-Игнасио", "Бельмопан", "Сан-Педро", "Коросаль", "Дангрига"]},
  {name: "Косово", flagPath: "img/flags/mini/Kosovo.svg", cities: ["Витина", "Вучитрн", "Глоговац", "Гнилане", "Дечани", "Джяковица"]}
]
const [countrySelectorActive, setCountrySelectorActive] = useState(false); //Селектор страны
const [citySelectorActive, setCitySelectorActive] = useState(false); // Селектор города

const [citySelected, setCitySelected] = useState('Укажите город'); // Здесь хранится выбранный город
const [valueCity, setValueCity] = useState('Укажите город'); //Для селектора города

const [countrySelected, setCountrySelected] = useState('Укажите страну'); // Здесь хранится выбранная страна
const [valueCountry, setValueCountry] = useState('Укажите страну'); //Для селектора страны

const [teamCity, setTeamCity] = useState(props.city);
const [teamCountry, setTeamCountry] = useState(props.country);
const [teamFlagPath, setTeamFlagPath] = useState(props.flagPath);

function findFlag(countryBuf){
  for (let i = 0; i < countries.length; ++i){
    if (countries[i].name == countryBuf)
      return countries[i].flagPath;
  }
}
const toggleCountry = () => { // Функция toggle для селектора страны
  setCountrySelectorActive(!countrySelectorActive);
};

const toggleCity = () => { // Функция toggle для селектора города
  setCitySelectorActive(!citySelectorActive);
};

const getElemByCountry = (country) => { // Функция, возвращающая элемент "страны" по её названию
  for(let i = 0; i < countries.length; ++i){
      if(countries[i].name === country){
          return countries[i];
      }
  }
}
//--------------------------------------------------------------------

//-------------------------------------------------------------------
    //_____ Фрагменты, отвечающие за отображение ошибок_________
    const [errorList, setErrorList] = useState([]); //список появляющихся ошибок
    function showError(desc){ //"вывести ошибку"
        let toastProperties = {
            description: desc,
            border: "1px solid #FF1E1E"
        };
        setErrorList([...errorList, toastProperties]);
    }

    //Провекра "изменения локации"
    function checkLocation(){
      if (countrySelected == "Укажите страну")
        setEditorActive(!editorActive);
      else {
        if (citySelected == "Укажите город")
          showError("Вы не указали город");
        else {
          setTeamCity(citySelected); 
          setTeamCountry(countrySelected); 
          setTeamFlagPath(findFlag(countrySelected));
          setEditorActive(!editorActive);
        }
      }
      
    }
/////////////////////////////////////////////////////////////////////

const [editorActive, setEditorActive] = useState(false);

  const ImageToggleOnMouseOver = ({primaryImg, secondaryImg, alt}) => {
    const imageRef = useRef(null);
    
    return (
      <img 
        onMouseOver={() => {
          imageRef.current.src = secondaryImg;
          imageRef.current.className = "hovered";
        }}
        onMouseOut={() => {
          imageRef.current.src= primaryImg;
          imageRef.current.className = "";
        }}
        src={primaryImg} 
        alt={alt}
        ref={imageRef}
        className=""
      />
    )
  }

  const showLogo = () => {
    return(
      props.isCapAdmin ? 
      <div className="team_logo">
        <label for="file-input">
          <ImageToggleOnMouseOver
            primaryImg={"../../" + props.logo}
            secondaryImg={"../../img/PhotoHover.svg"}
            alt={props.name} 
          />
        </label>
        <input id="file-input" type="file"/>
      </div>
      :
      <div className="team_logo">
        <img src={"../../" + props.logo} alt={props.name}/>
      </div>
    );
    
  }

    return(
        <div>
          <div className="info_container">
              <div className="team_info">
                {showLogo()}
                <div className="info_teamname">
                  <div className="flag_location">
                    <img src={"../../" + teamFlagPath} alt={teamCountry}/>
                    <p>{teamCountry}, {teamCity}</p>
                    {props.isCapAdmin ? <Editor size="15px" depth={2} onClick={() => setEditorActive(true)}/> 
                            : <></>}
                  </div>
                  <p>{props.name}</p>
                </div>
              </div>
              <div className="top_position">
                <p>Место в рейтинге</p>
                <p>#{props.topPosition}</p>
              </div>
            </div>

            <Notification props={errorList}></Notification>
            <Login active={editorActive} setActive={setEditorActive}>
            <div className="header_splash_window">
                <div className="logo_splash_window"></div>
            </div>
            <div className="info_text">
                <p>Укажите локацию команды</p>
            </div> 
            <div className="col_center_gap30">
                 
                <div className="col_center_gap10">
                    
                    <div className="row_center_6">
                        <div className="text-field_half">
                            <div className="text-field_half_selector">
                                <div className="text_field_half_select" onClick={() => toggleCountry()}>
                                    <p className={countrySelected === valueCountry ? "onStart" : "choosed"}>{countrySelected}</p>
                                        <img src="../../img/arrow.svg" id="arrowIcon" className={countrySelectorActive ? 'rotate' : null} alt="arrow"/>
                                </div>
                                <ul className={ countrySelectorActive ? 'select_list' : 'select_list hide'}>
                                    {countries.map((country) =>
                                        <li className='text_field_half_options' onClick={() => {setCountrySelected(country.name); setCitySelected(valueCity); toggleCountry()}}>
                                            <img src={"../../" + country.flagPath} alt={country.name}/>
                                            <p>{country.name}</p>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                        {countrySelected !== "Укажите страну" ?
                            <div className="text-field_half">
                                <div className="text-field_half_selector">
                                    <div className="text_field_half_select" onClick={() => toggleCity()}>
                                        <p className={citySelected === valueCity ? "onStart" : "choosed"}>{citySelected}</p>
                                        <img src="../../img/arrow.svg" id="arrowIcon" className={citySelectorActive ? 'rotate' : null} alt="arrow"/>
                                    </div>
                                    <ul className={ citySelectorActive ? 'select_list' : 'select_list hide'}>
                                        {getElemByCountry(countrySelected).cities.map((city) =>
                                            <li className='text_field_half_options' onClick={() => {setCitySelected(city); toggleCity()}}>
                                                <p>{city}</p>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        :
                            <></>
                        }
                    </div>
                </div>
                <div className="full_grey_button">
                    <input type="submit" value="Сохранить" onClick={() => checkLocation()}/>
                </div>
              </div>
            </Login>
        </div>
    )
}

export default InfoContainer;