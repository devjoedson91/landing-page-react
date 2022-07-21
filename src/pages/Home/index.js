import { useState } from 'react';
import './styles.scss';
import {
    FaCalendarMinus,
    FaCalendarCheck,
    FaTv,
    FaRegDizzy,
    FaRegPaperPlane,
    FaGift
} from "react-icons/fa";

import logoMilhas from '../../assets/LOGO-SEMANA-DAS-MILHAS.png';
import norton from '../../assets/FotoNorton05.png';

export default function Home() {

    const [count, setCount] = useState([]);

    function countDown() {

        const actualDate = new Date();
        const futureDate = new Date('02 August 2022 09:00:00 GMT-0300');
        const timeStamOff = futureDate.getTime() - actualDate.getTime();

        const days = Math.floor(timeStamOff / (24 * 60 * 60 * 1000));
        const hours = (Math.floor(timeStamOff / (60 * 60 * 1000))) % 24;
        const minutes = (Math.floor(timeStamOff / (60 * 1000))) % 60;
        const seconds = (Math.floor(timeStamOff / (1000))) % 60;

        const total = [days, hours, minutes, seconds];

        setCount(total);

    }

    setInterval(countDown, 1000);

    const [days, hours, minutes, seconds] = count;

   
    return (

        <div className="App">

            <div className='main-bg bg-image'>
                <div className="main-content">

                    <div className="left-column">
                        <div className="header-container">
                            <div className="header-img">
                                <img src={logoMilhas} alt="LOGO-SEMANA-DAS-MILHAS" width="200" />
                            </div>
                            <div className="header-icon">
                                <FaCalendarMinus size={30} color='#1bde25' />
                                <span>02 a 07 de agosto</span>
                            </div>
                        </div>

                        <div className="content-section">
                            <h1>
                                O passo a passo para lucrar R$ 36 mil reais por ano, através do seu cartão de crédito
                            </h1>
                            <p>
                                Mesmo que você não entenda nada sobre Milhas Aéreas
                            </p>
                        </div>

                        <div className="form-main">
                            <form action="#" className="needs-validation">
                                <label className="form-label">E-mail*</label>
                                <input type="text" name="email" className="form-control has-error" id="email" placeholder="Digite seu e-mail" />
                                <button type="submit" className="btn-primary">Aperte aqui e <br /> garanta o seu lugar</button>
                            </form>
                        </div>

                    </div>

                </div>
            </div>

            <div className="cronolist">
                <div className="cronolist-container">
                    <div className="cronolist-content">
                        <div className="item-container">
                            <FaCalendarCheck size={40} />
                        </div>
                        <span>02 A 07 DE AGOSTO</span>
                    </div>
                    <div className="cronolist-content">
                        <div className="item-container">
                            <FaTv size={40} />
                        </div>
                        <span>3 EPISÓDIOS</span>
                    </div>
                    <div className="cronolist-content">
                        <div className="item-container">
                            <FaRegDizzy size={40} />
                        </div>
                        <span>TOTALMENTE ONLINE E GRATUITO</span>
                    </div>
                    <div className="cronolist-content">
                        <div className="item-container">
                            <FaRegPaperPlane size={40} />
                        </div>
                        <span>GRUPO VIP COM MATERIAL EXCLUSIVO</span>
                    </div>
                    <div className="cronolist-content">
                        <div className="item-container">
                            <FaGift size={40} />
                        </div>
                        <span>PRESENTES ESPECIAIS</span>
                    </div>
                </div>

            </div>

            <div className="mentor-container">
                <div className="mentor-content">

                    <div className="section-column image-center">
                        <img src={norton} alt="FotoNorton05" />
                    </div>

                    <div className="section-column">
                        <div className='section-content'>
                            <h2>CONHEÇA O SEU MENTOR</h2>

                            <p>
                                Norton Reveno pediu demissão de um dos melhores empregos do Brasil – como engenheiro concursado da Petrobras – pra ensinar as pessoas a terem uma renda extra garantida com seu cartão de crédito
                            </p>
                            <p>
                                Ele já negociou mais de 65 milhões de milhas, o que é equivalente a quase dois milhões de reais e já botou mais de 20 milhões de reais no bolso dos seus +9.000 alunos.
                            </p>
                            <p>
                                Hoje ele é considerado o Maior Especialista em Milhas e Cartões de Crédito do Brasil e ensina mais de 500 mil pessoas a ter uma nova fonte de renda, do absoluto zero e mesmo que você ainda nem tenha cartão de crédito.
                            </p>
                            <p>
                                Sua missão é ensinar as pessoas como gerarem uma nova fonte de renda, mesmo sem ter experiência e nenhum conhecimento prévio em um mercado bilionário fora do radar da maioria das pessoas.
                            </p>
                            <p>
                                E nos próximos dias ele vai te dar uma oportunidade única de começar o ano com uma Nova Renda Extra Garantida, por isso, aperte no botão abaixo e cadastre-se agora na Nova Semana das Milhas!
                            </p>

                            <h2>A Semana das Milhas começa em:</h2>

                            <div className="cronometer">
                                <div className="days">
                                    <span className="timer">{days}</span>
                                    <span className="time">dias</span>
                                </div>
                                <div className="hours">
                                    <span className="timer">{hours}</span>
                                    <span className="time">horas</span>
                                </div>
                                <div className="min">
                                    <span className="timer">{minutes}</span>
                                    <span className="time">minutos</span>
                                </div>
                                <div className="sec">
                                    <span className="timer">{seconds}</span>
                                    <span className="time">segundos</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="container-subfooter">
                <div className="subfooter-content">
                    <h1>FAÇA SUA INSCRIÇÃO GRATUITAMENTE!</h1>
                    <p>Participe da Semana das Milhas e descubra como transformar o seu cartão de crédito em uma máquina de gerar dinheiro todos os meses.</p>
                    <button type="submit" className="btn-primary">quero colocar dinheiro no bolso</button>

                </div>
            </div>

            <footer className="gtco-footer">
                <div className="copyright">
                    <small className="block">&copy; 2022 - norton reveno</small>
                    <small className="block">todos os direitos reservados</small>
                </div>
            </footer>

        </div>

    );
}
