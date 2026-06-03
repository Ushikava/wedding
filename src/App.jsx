import { useEffect, useRef, useState } from 'react'
import './App.css'

import group4   from './assets/WeddingImages/WelcomeSection/welcome_text.svg'
import cloud1   from './assets/WeddingImages/WelcomeSection/welcome_cloud.svg'
import photoHero from './assets/WeddingImages/WelcomeSection/welcome_photo.svg'

import weMarringBg from './assets/WeddingImages/MarrySection/we_marring_bg.svg'
import wePhrase from './assets/WeddingImages/MarrySection/we.svg'
import marriedPhrase from './assets/WeddingImages/MarrySection/marring!.svg'
import splash from './assets/WeddingImages/MarrySection/splash.svg'
import calendar from './assets/WeddingImages/MarrySection/calendar.svg'
import dateRow1 from './assets/WeddingImages/MarrySection/date_row_1.svg'
import dateRow2 from './assets/WeddingImages/MarrySection/date_row_2.svg'

import cloud2 from './assets/WeddingImages/LocationSection/cloud_2.svg'
import logo from './assets/WeddingImages/LocationSection/Location.svg'
import cafePhoto from './assets/WeddingImages/LocationSection/cafe_photo.svg'
import cafeName from './assets/WeddingImages/LocationSection/cafe_name.svg'
import cafeStreetBg from './assets/WeddingImages/LocationSection/cafe_street_bg.svg'
import cafeStreet from './assets/WeddingImages/LocationSection/cafe_street.svg'
import zagsName from './assets/WeddingImages/LocationSection/zags_name.svg'
import zagsPhoto from './assets/WeddingImages/LocationSection/zags_photo.svg'
import zagsStreetBg from './assets/WeddingImages/LocationSection/zags_street_bg.svg'
import zagsStreet from './assets/WeddingImages/LocationSection/zags_street.svg'
import photo2 from './assets/WeddingImages/LocationSection/photo_2.png'

import cloud3 from './assets/WeddingImages/TimeSection/cloud_3.svg'
import timeLogoBg from './assets/WeddingImages/TimeSection/logo_bg_yellow.svg'
import timeLogo from './assets/WeddingImages/TimeSection/Time.svg'
import timeListBg from './assets/WeddingImages/TimeSection/list_bg_1.svg'
import timeListElemBg1 from './assets/WeddingImages/TimeSection/list_element_1.svg'
import timeListElemBg2 from './assets/WeddingImages/TimeSection/list_element_2.svg'
import timeListElemBg3 from './assets/WeddingImages/TimeSection/list_element_3.svg'
import timeListElemBg4 from './assets/WeddingImages/TimeSection/list_element_4.svg'
import timeListElemBg5 from './assets/WeddingImages/TimeSection/list_element_5.svg'
import timePhoto from './assets/WeddingImages/TimeSection/time_photo.png'
import timeFlower from './assets/WeddingImages/TimeSection/time_flower.svg'
import timeBant from './assets/WeddingImages/TimeSection/time_bant.svg'

import cloud4 from './assets/WeddingImages/DetailsSection/cloud_4.svg'
import detailsLogo from './assets/WeddingImages/DetailsSection/details.svg'
import detailsSplash from './assets/WeddingImages/DetailsSection/details_splash.svg'
import detailsFlowers from './assets/WeddingImages/DetailsSection/details_flowers.svg'
import detailsText1 from './assets/WeddingImages/DetailsSection/details_text_1.svg'
import detailsSplash2 from './assets/WeddingImages/DetailsSection/details_splash_2.svg'
import detailsFlowers2 from './assets/WeddingImages/DetailsSection/details_flowers_2.svg'
import detailsText2 from './assets/WeddingImages/DetailsSection/details_text_2.svg'
import detailsRubles from './assets/WeddingImages/DetailsSection/details_rubles.svg'

import cloud5 from './assets/WeddingImages/DresscodeSection/cloud_5.svg'
import dresscodeLogo from './assets/WeddingImages/DresscodeSection/dresscode.svg'
import dresscodeText1 from './assets/WeddingImages/DresscodeSection/dresscode_text_1.svg'
import dresscodeText2 from './assets/WeddingImages/DresscodeSection/dresscode_text_2.svg'
import dresscodeBubbles from './assets/WeddingImages/DresscodeSection/dresscode_bubbles.svg'
import dresscodeHearts from './assets/WeddingImages/DresscodeSection/dresscode_hearts.svg'
import dresscodeUnderline from './assets/WeddingImages/DresscodeSection/dresscode_underline.svg'
import dresscodeRound from './assets/WeddingImages/DresscodeSection/dresscode_round.svg'
import dresscodeRow from './assets/WeddingImages/DresscodeSection/dresscode_row.svg'
import dresscodeText3 from './assets/WeddingImages/DresscodeSection/dresscode_text_3.svg'
import dresscodeText4 from './assets/WeddingImages/DresscodeSection/dresscode_text_4.svg'
import dresscodePhotoBg from './assets/WeddingImages/DresscodeSection/dresscode_photo_bg.svg'
import dresscodePhoto from './assets/WeddingImages/DresscodeSection/dresscode_photo.png'
import dresscodeSplash from './assets/WeddingImages/DresscodeSection/dresscode_splash.svg'

import cloud6 from './assets/WeddingImages/ProfileSection/cloud_6.svg'
import profileLogo from './assets/WeddingImages/ProfileSection/Profile.svg'
import profileBg from './assets/WeddingImages/ProfileSection/profile_bg.svg'
import profileText from './assets/WeddingImages/ProfileSection/profile_text.svg'
import profileBtn from './assets/WeddingImages/ProfileSection/profile_btn_n.svg'
import profileBtnActive from './assets/WeddingImages/ProfileSection/profile_btn_a.svg'
import profileRow from './assets/WeddingImages/ProfileSection/profile_row.svg'

import cloud7 from './assets/WeddingImages/ChatSection/cloud_7.svg'
import chatBg from './assets/WeddingImages/ChatSection/chat_bg.svg'
import chatLogo from './assets/WeddingImages/ChatSection/Chat.svg'
import chatText from './assets/WeddingImages/ChatSection/chat_text.svg'
import chatBtn from './assets/WeddingImages/ChatSection/chat_btn_n.svg'
import chatBtnActive from './assets/WeddingImages/ChatSection/chat_btn_a.svg'
import chatRow from './assets/WeddingImages/ChatSection/chat_row.svg'

import waitingPhoto from './assets/WeddingImages/WaitingSection/waiting_photo.png'
import waitingSplash from './assets/WeddingImages/WaitingSection/waiting_splash.svg'
import waitingText from './assets/WeddingImages/WaitingSection/waiting_text.svg'
import waitingText2 from './assets/WeddingImages/WaitingSection/waiting_text_2.svg'

import cloud8 from './assets/WeddingImages/TimerSection/cloud_8.svg'
import timerSplash from './assets/WeddingImages/TimerSection/timer_splash.svg'
import timerText from './assets/WeddingImages/TimerSection/timer_text.svg'
import timerDate from './assets/WeddingImages/TimerSection/timer_date.svg'
import timerTimeBlock from './assets/WeddingImages/TimerSection/timer_time_block.svg'


const DESIGN_WIDTH = 412
const WEDDING_DATE = new Date('2026-07-31T14:00:00')

function getTimeLeft() {
  const diff = WEDDING_DATE - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days:    Math.floor(diff / 86400000),
    hours:   Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  }
}

const CRITICAL_IMAGES = [
  group4, cloud1, photoHero,
  weMarringBg, wePhrase, marriedPhrase, splash,
]

function preloadImages(urls) {
  return Promise.all(urls.map(src => new Promise(resolve => {
    const img = new Image()
    img.onload = resolve
    img.onerror = resolve
    img.src = src
  })))
}

export default function App() {
  const pageRef = useRef(null)
  const [ready, setReady] = useState(false)
  const [timeLeft, setTimeLeft] = useState(getTimeLeft)
  const [profilePressed, setProfilePressed] = useState(false)
  const [chatPressed, setChatPressed] = useState(false)

  useEffect(() => {
    preloadImages(CRITICAL_IMAGES).then(() => setReady(true))
  }, [])

  useEffect(() => {
    const applyZoom = () => {
      if (pageRef.current) {
        pageRef.current.style.zoom = window.innerWidth / DESIGN_WIDTH
      }
    }
    applyZoom()
    window.addEventListener('resize', applyZoom)
    return () => window.removeEventListener('resize', applyZoom)
  }, [])

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      {!ready && (
        <div className="preloader">
          <div className="preloader__spinner" />
        </div>
      )}
      <div className="page" ref={pageRef} style={{ visibility: ready ? 'visible' : 'hidden' }}>

      {/* ══════════════════════════ HERO ══════════════════════════════ */}
      <section className="hero">
        <img src={cloud1} className="hero__blob" alt="" aria-hidden="true" />

        <div className="hero__stage">
          <img src={group4} alt="" className="hero__group4" aria-hidden="true" />
          <div className="hero__photos">
            <img src={photoHero} alt="Юля и Даниил" className="hero__photo hero__photo--main" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════ MARRY SECTION ═════════════════════ */}
      <div className="marry-section">
        <img src={splash}        alt="Сплюш"        className="marry-section__splash" aria-hidden="true" />
        <img src={weMarringBg}   alt="СвадьбаФон"   className="marry-section__bg" aria-hidden="true" />
        <img src={wePhrase}      alt="МЫ"           className="marry-section__we" />
        <img src={marriedPhrase} alt="ЖЕНИМСЯ"      className="marry-section__married" />
        <img src={calendar}      alt="Календарь"    className="marry-section__calendar" />
        <img src={dateRow1}      alt="Стрелка1"     className="marry-section__daterow1" />
        <img src={dateRow2}      alt="Стрелка2"     className="marry-section__daterow2" />
      </div>

      {/* ══════════════════════════ LOCATION SECTION ═════════════════════ */}
      <div className="location-section">
        <img src={cloud2}         alt=""        className="location-section__cloud"       aria-hidden="true" />

        <img src={logo}           alt=""        className="location-section__logo"        aria-hidden="true" />
        
        <img src={cafePhoto}      alt=""        className="location-section__photo"       aria-hidden="true" />
        <span                                   className="location-section__banket">#БАНКЕТ</span>
        <img src={cafeName}       alt=""        className="location-section__name"        aria-hidden="true" />
        <img src={cafeStreetBg}   alt=""        className="location-section__street-bg"   aria-hidden="true" />
        <img src={cafeStreet}     alt=""        className="location-section__street"      aria-hidden="true" />
      
        <img src={zagsPhoto}      alt=""        className="location-section__z_photo"     aria-hidden="true" />
        <span                                   className="location-section__ceremony">#ЦЕРЕМОНИЯ</span>
        <img src={zagsName}       alt=""        className="location-section__z_name"      aria-hidden="true" />
        <img src={zagsStreetBg}   alt=""        className="location-section__z_street-bg" aria-hidden="true" />
        <img src={zagsStreet}     alt=""        className="location-section__z_street"    aria-hidden="true" />
      
        <img src={photo2}         alt=""        className="location-section__photo2"      aria-hidden="true" />
      </div>

      {/* ══════════════════════════ TIME SECTION ═════════════════════ */}
      <div className="time-section">
        <img src={cloud3}         alt=""        className="time-section__cloud"       aria-hidden="true" />
        <img src={timeLogoBg}         alt=""        className="time-section__logo_bg"     aria-hidden="true" />
        <img src={timeLogo}           alt=""        className="time-section__logo"        aria-hidden="true" />
        <img src={timeListBg}         alt=""        className="time-section__list_bg"     aria-hidden="true" />
        <img src={timeListElemBg1}    alt=""  className="time-section__list_elem_bg time-section__list_elem_bg--1" aria-hidden="true" />
        <span className="time-section__list_name time-section__list_name--1">Сбор гостей у ЗАГСа</span>
        <span className="time-section__list_time time-section__list_time--1">14:20</span>

        <img src={timeListElemBg2}    alt=""  className="time-section__list_elem_bg time-section__list_elem_bg--2" aria-hidden="true" />
        <span className="time-section__list_name time-section__list_name--2">Церемония</span>
        <span className="time-section__list_time time-section__list_time--2">14:40</span>

        <img src={timeListElemBg3}    alt=""  className="time-section__list_elem_bg time-section__list_elem_bg--3" aria-hidden="true" />
        <span className="time-section__list_name time-section__list_name--3">Фотосессия</span>
        <span className="time-section__list_time time-section__list_time--3">15:10</span>

        <img src={timeListElemBg4}    alt=""  className="time-section__list_elem_bg time-section__list_elem_bg--4" aria-hidden="true" />
        <span className="time-section__list_name time-section__list_name--4">Банкет</span>
        <span className="time-section__list_time time-section__list_time--4">18:00</span>

        <img src={timeListElemBg5}    alt=""  className="time-section__list_elem_bg time-section__list_elem_bg--5" aria-hidden="true" />
        <span className="time-section__list_name time-section__list_name--5">Финал</span>
        <span className="time-section__list_time time-section__list_time--5">00:00</span>

        <img src={timePhoto}           alt=""        className="time-section__photo"        aria-hidden="true" />
        <img src={timeFlower}           alt=""        className="time-section__flower"        aria-hidden="true" />
        <img src={timeBant}           alt=""        className="time-section__bant"        aria-hidden="true" />
      </div>


      {/* ══════════════════════════ DETAILS SECTION ═════════════════════ */}
      <div className="details-section">
        <img src={cloud4}         alt=""        className="details-section__cloud"       aria-hidden="true" />
        <img src={detailsLogo}    alt=""        className="details-section__logo"       aria-hidden="true" />
        <img src={detailsSplash}  alt=""        className="details-section__splash"     aria-hidden="true" />
        <img src={detailsFlowers} alt=""        className="details-section__flowers"    aria-hidden="true" />
        <img src={detailsText1}   alt=""        className="details-section__text-1"    aria-hidden="true" />
        <img src={detailsSplash2} alt=""        className="details-section__splash-2"  aria-hidden="true" />
        <img src={detailsFlowers2} alt=""       className="details-section__flowers-2" aria-hidden="true" />
        <img src={detailsText2}   alt=""        className="details-section__text-2"    aria-hidden="true" />
        <img src={detailsRubles}   alt=""        className="details-section__rubles"    aria-hidden="true" />

        <img src={dresscodeLogo}    alt=""        className="dresscode-section__logo"       aria-hidden="true" />

      </div>

      {/* ══════════════════════════ DRESSCODE SECTION ═════════════════════ */}
      <div className="dresscode-section">
        <img src={cloud5}         alt=""        className="dresscode-section__cloud"       aria-hidden="true" />
        <img src={dresscodeText1}   alt=""        className="dresscode-section__text-1"    aria-hidden="true" />
        <img src={dresscodeText2}   alt=""        className="dresscode-section__text-2"    aria-hidden="true" />
        <img src={dresscodeBubbles}   alt=""        className="dresscode-section__bubbles"    aria-hidden="true" />
        <img src={dresscodeHearts}   alt=""        className="dresscode-section__hearts"    aria-hidden="true" />
        <img src={dresscodeUnderline}   alt=""        className="dresscode-section__underline"    aria-hidden="true" />
        <img src={dresscodeRound}   alt=""        className="dresscode-section__round"    aria-hidden="true" />
        <img src={dresscodeRow}   alt=""        className="dresscode-section__row"    aria-hidden="true" />
        <img src={dresscodeText3}   alt=""        className="dresscode-section__text-3"    aria-hidden="true" />
        <img src={dresscodeText4}   alt=""        className="dresscode-section__text-4"    aria-hidden="true" />
        <img src={dresscodePhotoBg}   alt=""        className="dresscode-section__photo-bg"    aria-hidden="true" />
        <img src={dresscodePhoto}   alt=""        className="dresscode-section__photo"    aria-hidden="true" />
        <img src={dresscodeSplash}   alt=""        className="dresscode-section__splash"    aria-hidden="true" />
      </div>

      {/* ══════════════════════════ PROFILE SECTION ═════════════════════ */}
      <div className="profile-section">
        <img src={cloud6}         alt=""        className="profile-section__cloud"       aria-hidden="true" />
        <img src={profileLogo}    alt=""        className="profile-section__logo"       aria-hidden="true" />
        <img src={profileBg}      alt=""        className="profile-section__bg"       aria-hidden="true" />
        <img src={profileText}    alt=""        className="profile-section__text"       aria-hidden="true" />
        <img
          src={profilePressed ? profileBtnActive : profileBtn}
          alt="Перейти"
          className="profile-section__btn"
          onPointerDown={() => setProfilePressed(true)}
          onPointerUp={() => { setProfilePressed(false); window.open('https://docs.google.com/forms/d/e/1FAIpQLSfmpmGbXAqhnv5-Vm1iq_WyvDd39m25ycg0qlC_NfCDJ-Zl0Q/viewform?usp=publish-editor', '_blank') }}
          onPointerLeave={() => setProfilePressed(false)}
        />
        <img src={profileRow}     alt=""        className="profile-section__row"       aria-hidden="true" />
      </div>

      {/* ══════════════════════════ CHAT SECTION ═════════════════════ */}
      <div className="chat-section">
        <img src={cloud7}         alt=""        className="chat-section__cloud"       aria-hidden="true" />
        <img src={chatBg}         alt=""        className="chat-section__bg"       aria-hidden="true" />
        <img src={chatLogo}       alt=""        className="chat-section__logo"       aria-hidden="true" />
        <img src={chatText}       alt=""        className="chat-section__text"       aria-hidden="true" />
        <img
          src={chatPressed ? chatBtnActive : chatBtn}
          alt="Перейти"
          className="chat-section__btn"
          onPointerDown={() => setChatPressed(true)}
          onPointerUp={() => { setChatPressed(false); window.open('https://vk.me/join/iv1MqxEtEdM7JvkcFJoLQCQGLkLaRzJmrT0=', '_blank') }}
          onPointerLeave={() => setChatPressed(false)}
        />
        <img src={chatRow}        alt=""        className="chat-section__row"       aria-hidden="true" />
      </div>

      {/* ══════════════════════════ WAITING SECTION ═════════════════════ */}
      <div className="waiting-section">
        <img src={cloud8}         alt=""        className="waiting-section__cloud"       aria-hidden="true" />
        <img src={waitingPhoto}         alt=""        className="waiting-section__photo"       aria-hidden="true" />
        <img src={waitingSplash}         alt=""        className="waiting-section__splash"       aria-hidden="true" />
        <img src={waitingText}         alt=""        className="waiting-section__text"       aria-hidden="true" />
        <img src={waitingText2}         alt=""        className="waiting-section__text-2"       aria-hidden="true" />
      </div>

      {/* ══════════════════════════ TIMER SECTION ═════════════════════ */}
      <div className="timer-section">
        <img src={timerSplash}         alt=""        className="timer-section__splash"       aria-hidden="true" />
        <img src={timerText}         alt=""        className="timer-section__text"       aria-hidden="true" />
        <img src={timerDate}         alt=""        className="timer-section__date"       aria-hidden="true" />
        <div className="timer-section__blocks">
          <div className="timer-section__block">
            <span className="timer-section__label">дней</span>
            <div className="timer-section__block-img">
              <img src={timerTimeBlock} alt="" aria-hidden="true" />
              <span className="timer-section__value">{String(timeLeft.days).padStart(2, '0')}</span>
            </div>
          </div>
          <div className="timer-section__block">
            <span className="timer-section__label">часов</span>
            <div className="timer-section__block-img">
              <img src={timerTimeBlock} alt="" aria-hidden="true" />
              <span className="timer-section__value">{String(timeLeft.hours).padStart(2, '0')}</span>
            </div>
          </div>
          <div className="timer-section__block">
            <span className="timer-section__label">минут</span>
            <div className="timer-section__block-img">
              <img src={timerTimeBlock} alt="" aria-hidden="true" />
              <span className="timer-section__value">{String(timeLeft.minutes).padStart(2, '0')}</span>
            </div>
          </div>
          <div className="timer-section__block">
            <span className="timer-section__label">секунд</span>
            <div className="timer-section__block-img">
              <img src={timerTimeBlock} alt="" aria-hidden="true" />
              <span className="timer-section__value">{String(timeLeft.seconds).padStart(2, '0')}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
    </>
  )
}
