import React from "react";
import "./Statistic.css"
import TeamBlock from "./TeamBlock/TeamBlock";

function Statistic({props,map}){
    const firstTeam = {
        name: props.NameFirst,
        side: props.SideFirst,
        logo: props.LogoFirst,
        players: [
            {firstName: "Имя", lastName: "Фамилия", nick: "Frost", defusekit: true, weapon: "M4A4", hp: 100, armor: "Kevlar", money: 666, kills: 10, assists: 2, deaths: 3, cyp: 32},
            {firstName: "Имя", lastName: "Фамилия", nick: "X_UndeR", defusekit: true, weapon: "USP-S", hp: 50, armor: "Assaultsuit", money: 3021, kills: 7, assists: 1, deaths: 0, cyp: 12.2},
            {firstName: "Имя", lastName: "Фамилия", nick: "игрок3", defusekit: false, weapon: "AWP", hp: 0, armor: "Kevlar", money: 666, kills: 10, assists: 2, deaths: 3, cyp: 32},
            {firstName: "Имя", lastName: "Фамилия", nick: "игрок4", defusekit: false, weapon: "Five-Seven", hp: 14, armor: "Kevlar", money: 1002, kills: 15, assists: 0, deaths: 10, cyp: 3},
            {firstName: "Имя", lastName: "Фамилия", nick: "игрок5", defusekit: false, weapon: "AWP", hp: 3, armor: null, money: 0, kills: 0, assists: 0, deaths: 99, cyp: 2}
        ]
    }
    const secondTeam = {
        name: props.NameSecond,
        side: props.SideSecond,
        logo: props.LogoSecond,
        players: [
            {firstName: "Кирилл", lastName: "Симовин", nick: "Tamada", defusekit: false, weapon: "AWP", hp: 100, armor: "Kevlar", money: 666, kills: 10, assists: 2, deaths: 3, cyp: 32},
            {firstName: "Александр", lastName: "Федякин", nick: "ugly4", defusekit: false, weapon: "AK-47", hp: 34, armor: "Assaultsuit", money: 3021, kills: 7, assists: 1, deaths: 0, cyp: 12.2},
            {firstName: "Иван", lastName: "Музырев", nick: "muzyr", defusekit: false, weapon: "AWP", hp: 0, armor: "Kevlar", money: 666, kills: 10, assists: 2, deaths: 3, cyp: 32},
            {firstName: "Имя", lastName: "Фамилия", nick: "игрок4", defusekit: false, weapon: "Five-Seven", hp: 14, armor: "Kevlar", money: 1002, kills: 15, assists: 0, deaths: 10, cyp: 3},
            {firstName: "Имя", lastName: "Фамилия", nick: "s1mple", defusekit: false, weapon: "AWP", hp: 63, armor: null, money: 0, kills: 0, assists: 0, deaths: 99, cyp: 2}
        ]
    }
    return(
        <div class="statistic">
            <div class="statistic_maps">

            </div>
            <TeamBlock team={firstTeam} map={map}/>
            <TeamBlock team={secondTeam} map={map}/>
        </div>
    )
}

export default Statistic;