import React, { useState } from 'react';

import iconDown from '../images/icon-down.svg';
import iconUp from '../images/icon-up.svg';
import facebook from '../images/icon-facebook.svg';
import instagram from '../images/icon-instagram.svg';
import twitter from '../images/icon-twitter.svg';
import youtube from '../images/icon-youtube.svg';

import '../scss/main.scss';

import { Dashboard } from '../components/Dashboard';
import { Overview } from '../components/Overview';

export function SocialMedia() {
    const [changeTheme, setChangeTheme] = useState(true);

    return(
        <div className='socialMedia'>
            <main className={changeTheme ? 'darkMode' : 'lightMode'}>
                <div className='dashboard'>
                    <header className='headerD'>
                        <div className='title'>
                            <h1>Social Media Dashboard</h1>
                            <p>Total Followers: 23,004</p>
                        </div>

                        <label className={changeTheme ? 'toggleDark ' : 'toggleLight'}>
                            <div className='name'>Dark Mode</div>
                            <input type="checkbox"/>
                            <span onClick={() => setChangeTheme(!changeTheme)}/>
                        </label>
                    </header>

                    <div className='cards'>
                        <Dashboard 
                            id = 'card1'
                            headerC = 'headerBackColorF'

                            image = {facebook}
                            description = 'Ícone do Facebook - Descrição: Letra F da cor preta com um background azul para o dark mode e para o light Mode é a Letra F da cor branca com um background azul'
                            name = '@nathanf'

                            number = '1987'
                            type = 'FOLLOWERS'

                            icon = {iconUp}
                            description2 = 'Ícone de uma seta verde direcionada para cima'
                            color = 'greenC'
                            viewsF = '12'
                        />

                        <Dashboard 
                            id = 'card2'
                            headerC = 'headerBackColorT'

                            image = {twitter}
                            description = 'Ícone do Twitter - Descrição: Passáro azul'
                            name = '@nathanf'

                            number = '1044'
                            type = 'FOLLOWERS'

                            icon = {iconUp}
                            description2 = 'Ícone de uma seta verde direcionada para cima'
                            color = 'greenC'
                            viewsF = '99'
                        />

                        <Dashboard 
                            id = 'card3'
                            headerC = 'headerBackImageI'

                            image = {instagram}
                            description = 'Ícone do Instagram - Descrição: Câmera com um tipo de amarelo com rosa misturados'
                            name = 'realnathanf'

                            number = '11k'
                            type = 'FOLLOWERS'

                            icon = {iconUp}
                            description2 = 'Ícone de uma seta verde direcionada para cima'
                            color = 'greenC'
                            viewsF = '1099'
                        />

                        <Dashboard 
                            id = 'card4'
                            headerC = 'headerBackColorY'

                            image = {youtube}
                            description = 'Ícone do YouTube - Descrição: Fundo vermelho que tem um retângulo preto com um ícone vermelho virado para o lado direito para o dark mode e para o light mode é um fundo vermelho que tem um retângulo branco com um ícone vermelho virado para o lado direito'
                            name = 'Nathan F.'

                            number = '8239'
                            type = 'SUBSCRIBERS'

                            icon = {iconDown}
                            description2 = 'Ícone de uma seta vermelha direcionada para baixo'
                            color = 'redC'
                            viewsF = '144'
                        />
                    </div>
                </div>
                
                <h2>Overview - Today</h2>

                    <div className='overview'>
                        <Overview 
                            area = 'a1'
                            title = 'Page Views'
                            icon = {facebook}
                            description = 'Ícone do Facebook - Descrição: Letra F da cor preta com um background azul para o dark mode e para o light Mode é a Letra F da cor branca com um background azul'

                            number = '87'

                            icon2 = {iconUp}
                            description2 = 'Ícone de uma seta verde direcionada para cima'
                            color = 'greenColor'
                            number2 = '3'
                        />

                        <Overview 
                            area = 'a2'
                            title = 'Likes'
                            icon = {facebook}
                            description = 'Ícone do Facebook - Descrição: Letra F da cor preta com um background azul para o dark mode e para o light Mode é a Letra F da cor branca com um background azul'

                            number = '52'

                            icon2 = {iconDown}
                            description2 = 'Ícone de uma seta vermelha direcionada para baixo'
                            color = 'redColor'
                            number2 = '2'
                        />

                        <Overview 
                            area = 'a3'
                            title = 'Likes'
                            icon = {instagram}
                            description = 'Ícone do Instagram - Descrição: Câmera com um tipo de amarelo com rosa misturados'

                            number = '5462'

                            icon2 = {iconUp}
                            description2 = 'Ícone de uma seta verde direcionada para cima'
                            color = 'greenColor'
                            number2 = '2257'
                        />

                        <Overview 
                            area = 'a4'
                            title = 'Profile Views'
                            icon = {instagram}
                            description = 'Ícone do Instagram - Descrição: Câmera com um tipo de amarelo com rosa misturados'

                            number = '52k'

                            icon2 = {iconUp}
                            description2 = 'Ícone de uma seta verde direcionada para cima'
                            color = 'greenColor'
                            number2 = '1375'
                        />

                        <Overview 
                            area = 'a5'
                            title = 'Retweets'
                            icon = {twitter}
                            description = 'Ícone do Twitter - Descrição: Passáro azul'

                            number = '117'

                            icon2 = {iconUp}
                            description2 = 'Ícone de uma seta verde direcionada para cima'
                            color = 'greenColor'

                            number2 = '303'
                        />
                        
                        <Overview 
                            area = 'a6'
                            title = 'Likes'
                            icon = {twitter}
                            description = 'Ícone do Twitter - Descrição: Passáro azul'

                            number = '507'

                            icon2 = {iconUp}
                            description2 = 'Ícone de uma seta verde direcionada para cima'
                            color = 'greenColor'

                            number2 = '553'
                        />

                        <Overview 
                            area = 'a7'
                            title = 'Likes'
                            icon = {youtube}
                            description = 'Ícone do YouTube - Descrição: Fundo vermelho que tem um retângulo preto com um ícone vermelho virado para o lado direito para o dark mode e para o light mode é um fundo vermelho que tem um retângulo branco com um ícone vermelho virado para o lado direito'

                            number = '107'

                            icon2 = {iconDown}
                            description2 = 'Ícone de uma seta vermelha direcionada para baixo'
                            color = 'redColor'

                            number2 = '19'
                        />

                        <Overview 
                            area = 'a8'
                            title = 'Total Views'
                            icon = {youtube}
                            description = 'Ícone do YouTube - Descrição: Fundo vermelho que tem um retângulo preto com um ícone vermelho virado para o lado direito para o dark mode e para o light mode é um fundo vermelho que tem um retângulo branco com um ícone vermelho virado para o lado direito'

                            number = '1407'

                            icon2 = {iconDown}
                            description2 = 'Ícone de uma seta vermelha direcionada para baixo'
                            color = 'redColor'

                            number2 = '12'
                        />
                    </div>
            </main>
        </div>
    );
}