import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Dishimg from '../../assets/images/dish.png'
import Dish07 from '../../assets/images/dish_07.png'
import Dish08 from '../../assets/images/dish_08.png'
import Dish09 from '../../assets/images/dish_09.png'
import Dish04 from '../../assets/images/dish_04.png'
import Dish05 from '../../assets/images/dish_05.png'
import Dish06 from '../../assets/images/dish_06.png'
import Dish01 from '../../assets/images/dish_01.png'
import Dish02 from '../../assets/images/dish_02.png'
import Dish03 from '../../assets/images/dish_03.png'
import Desert1 from '../../assets/images/desert1.png'
import Desert2 from '../../assets/images/desert2.png'
import Desert3 from '../../assets/images/desert3.png'
import Desert4 from '../../assets/images/desert4.png'

function MenuSection() {

    const [tabMenu, tabActive] = useState({ a: true });


    return (
        <>
            <section className="our_menu_section row_inner_am light_texchur">
                <div className="side_shape">
                    <img className="right_side" src={Dishimg} alt="img" />
                </div>
                <div className="container">
                    <div className="section_title text-center" data-aos="fade-up" data-aos-duration={1500} >
                        <span className="sub_text">Erkunden Sie unser Menu</span>
                        <h2>beliebtesten Speisen</h2>
                    </div>
                    <ul className="nav nav-tabs" id="myTab" role="tablist" data-aos="fade-up" data-aos-duration={1500} >
                        <li className="nav-item">
                            <Link className={`nav-link ${tabMenu.a && "active"}`}
                                onClick={() => tabActive({ a: true })} id="starters-tab" data-toggle="tab" to="#starters" role="tab" aria-controls="starters" aria-selected="true" >
                                Vorspeisen
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${tabMenu.b && "active"}`}
                                onClick={() => tabActive({ b: true })} id="steaks-tab" data-toggle="tab" to="#steaks" role="tab" aria-controls="steaks" aria-selected="false" >
                                Hauptgerichte
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${tabMenu.c && "active"}`}
                                onClick={() => tabActive({ c: true })} id="special-tab" data-toggle="tab" to="#special" role="tab" aria-controls="special" aria-selected="false" >
                                Dessert
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${tabMenu.d && "active"}`}
                                onClick={() => tabActive({ d: true })} id="deserts-tab" data-toggle="tab" to="#deserts" role="tab" aria-controls="deserts" aria-selected="false" >
                                Getränke
                            </Link>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent" data-aos="fade-up" data-aos-duration={1500} >

                        <div className={`tab-pane fade ${tabMenu.a && "show active"}`} id="starters" role="tabpanel" aria-labelledby="starters-tab" >
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12">
                                        <div className="dish_box">
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={Dish07} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>Vitello Tonato</h3>
                                                    <p>
                                                        rosagebratene Kalbsrückenscheiben auf Thunfisch-Kapern Sauce
                                                    </p>
                                                    <span className="price">€14.90</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="dish_box">
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={Dish08} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>Rinderkraftbrühe</h3>
                                                    <p>
                                                        mit Pfannkuchenstreifen und Lauchzwiebeln 
                                                    </p>
                                                    <span className="price">€7.90</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="dish_box">
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={Dish09} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>Getrüffeltes Rote beete Carpaccio</h3>
                                                    <p>
                                                        mit Rucola, gehobeltem Parmesan und Pinienkerne
                                                    </p>
                                                    <span className="price">€14.90</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="dish_box">
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={Dish04} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>Thunfischsashimi</h3>
                                                    <p>
                                                        angebraten mit Wasabi, Sojasauce und Wakami-Sesam-AlgenSalat
                                                    </p>
                                                    <span className="price">€14.50</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="dish_box">
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={Dish05} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>Lachssashimi im Noriblatt</h3>
                                                    <p>
                                                        gebacken im Tempuramantel, Sesamecreme und eingelegtem
                                                        Ingwer
                                                    </p>
                                                    <span className="price">€14.50</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="dish_box">
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={Dish06} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>Gratinierter Ziegenkäsetaler</h3>
                                                    <p>
                                                        mit Rosmarinhonig und mariniertem Salat
                                                    </p>
                                                    <span className="price">€10.90</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                <a href='https://cdn.shopify.com/s/files/1/0756/4568/2002/files/HuG_Karte-7_2.pdf?v=1740935225' /* download={'Speisekarte07.09.2023.pdf'} */ className="btn m-3 btn_primary">ganze Speisekarte</a>      
                                </div>
                            </div>
                        </div>
                        <div className={`tab-pane fade ${tabMenu.b && "show active"}`} id="steaks" role="tabpanel" aria-labelledby="steaks-tab" >
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12">
                                        <div className="dish_box">
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={Dish01} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>Pulled Pork Burger</h3>
                                                    <p>
                                                        mit Sweet-Baby-Ray BBQSauce, hausgemachter Coleslaw-Salat, Sesam Bun und Potato
                                                    </p>
                                                    <span className="price">€18.90</span>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="dish_box">
{/*                                             <span className="new">NEW</span> */}
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={Dish02} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>Roastbeef</h3>
                                                    <p>
                                                        mit hausgemachter Remoulade, Bratkartoffeln, und Salatgarnitur 
                                                    </p>
                                                    <span className="price">€22.50</span>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="dish_box">
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={Dish03} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>Rumpsteak</h3>
                                                    <p>
                                                        mit Beilage, Sauce nach Wahl und Beilagensalat
                                                    </p>
                                                    <span className="price">€26.00/200g</span><br></br>
                                                    <span className="price">€36.00/300g</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="dish_box">
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={Dish04} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>Asia Platte Hof&Gut</h3>
                                                    <p>
                                                        mit Lachssashimi im Tempurateig, angebratenes Thunfischsashimi,
                                                        knuspriger Maishuhnsalat, Sojasauce, eingelegter Ingwer, Wasabi,
                                                        Sesamcreme und Wakame-Sesam-Algensalat
                                                    </p>
                                                    <span className="price">€29.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="dish_box">
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={Dish05} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>Wiener Schnitzel vom Kalb</h3>
                                                    <p>
                                                        mit Zitrone, Preiselbeeren, Potato Dippers und Beilagensalat
                                                    </p>
                                                    <span className="price">€26.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="dish_box">
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={Dish06} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>Itzenburger</h3>
                                                    <p>
                                                        mit 180g Rindfleisch, Emmentaler, Sesam-Bun, Salat, Gurke, Tomate,
                                                        Zwiebeln und Potato Dippers
                                                    </p>
                                                    <span className="price">€17.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                <a href='https://cdn.shopify.com/s/files/1/0756/4568/2002/files/HuG_Karte-7_2.pdf?v=1740935225' /* download={'Speisekarte07.09.2023.pdf'} */ className="btn m-3 btn_primary">ganze Speisekarte</a>      
                                </div>
                            </div>
                        </div>
                        <div className={`tab-pane fade ${tabMenu.c && "show active"}`} id="special" role="tabpanel" aria-labelledby="special-tab" >
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12">
                                        <div className="dish_box">
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={Dish07} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>Creme Brulee</h3>
                                                    <p>
                                                        mit hausgemachtem Sorbet
                                                    </p>
                                                    <span className="price">€10.90</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="dish_box">
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={Dish08} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>Schokoladenmousse</h3>
                                                    <p>
                                                        mit Himbeeren-Chili-Sauce
                                                    </p>
                                                    <span className="price">€10.50</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="dish_box">
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={Dish09} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>Große Kugel Eis oder Sorbet</h3>
                                                    <p>
                                                        verschiedene Sorten
                                                    </p>
                                                    <span className="price">€4.50</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="dish_box">
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={Dish04} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>Warmer Schokoladenkuchen</h3>
                                                    <p>
                                                        mit Vanilleeis
                                                    </p>
                                                    <span className="price">€10.90</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                                <div className="text-center">
                                    <Link to="#" className="btn btn_primary">
                                        view full menu
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className={`tab-pane fade ${tabMenu.d && "show active"}`} id="deserts" role="tabpanel" aria-labelledby="deserts-tab" >
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12">
                                        <div className="dish_box">
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={Desert1} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>SCHAUMWEIN</h3>
                                                    <p>
                                                    EBERBACH-SCHÄFER SCHW ARZRIESLING, BLANC DE NOIR <span >€38.00</span>
                                                    </p>
                                                    <p>
                                                    BOUVET - LADUBA Y CREMANT SAPHIR SAUMUR <span >€45.00</span>
                                                    </p>
                                                    <p>
                                                    BOUVET LADUBAY CREMANT ROSE TRESOR <span >€54.00</span>
                                                    </p>                                             
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="dish_box">
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={Desert2} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>WEISSWEIN</h3>
                                                    <p>
                                                        VAN VOLXEM WILTINGER RIESLING - 2020 <span >€49.00</span>
                                                    </p>
                                                    <p>
                                                        BULGARIN! "GOCCE D' ORO - LUGANA <span >€42.20</span>
                                                    </p>
                                                    <p>
                                                        HAMMEL CUVEE MARIAGE - CHARDONNAY /WEISSBURGUNDER <span >€32.50</span>
                                                    </p>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="dish_box">
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={Desert3} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>ROSE</h3>
                                                    <p>
                                                    METZGER PETIT ROSE <span >€32.00</span>
                                                    </p>
                                                    <p>
                                                    CLOS DU BEUGNON "ROSE D'ANJOU" <span >€29.00</span>
                                                    </p>
                                                    <p>
                                                    KIMMICH JULIUS FERDINAND ROSE <span >€29.00</span>
                                                    </p>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="dish_box">
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={Desert4} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>ROTWEIN</h3>
                                                    <p>
                                                        "CHATEAU LA COMMUNION" - CUVEE MERLOT/CABERNET <span >€58.00</span>
                                                    </p>
                                                    <p>
                                                        EGUREN UGARTE - TEMPRANILLO 2019 <span >€56.00</span>
                                                    </p>
                                                    <p>
                                                        PRIMMO MALBEC <span >€42.00</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="dish_box">
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={Dish05} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>BIER</h3>
                                                    <p>
                                                    Augustiner <span >€5.90/0.5L</span>
                                                    </p>
                                                    <p>
                                                    Schneider W eisse T AP7 Weizen <span >€5.40/0.5L</span>
                                                    </p>
                                                    <p>
                                                    Alsterwasser <span >€5.40/0.5L</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="dish_box">
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={Dish06} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>ERFRISCHENDES OHNE ALKOHOL</h3>
                                                    <p>
                                                    Fritz Getränke <span >€3.70/0.33L</span>
                                                    </p>
                                                    <p>
                                                    Saft-/Nektar <span >€3.50/0.2L</span>
                                                    </p>
                                                    <p>
                                                        Schweppes Getränke <span >€3.50/0.2L</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                <a href='https://cdn.shopify.com/s/files/1/0756/4568/2002/files/HuG_Karte-7_2.pdf?v=1740935225' /* download={'Speisekarte07.09.2023.pdf'} */ className="btn m-3 btn_primary">ganze Speisekarte</a>      
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MenuSection