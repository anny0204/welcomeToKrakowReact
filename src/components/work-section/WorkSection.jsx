import React from "react";
import "./WorkSection.scss";

export class WorkSection extends React.Component {
    render() {
        return <section className="container-fluid">
            <div className="row">
                <div class="col-lg-4 col-md-12">
                    <div class="relative">
                        <div class="image_wrap">
                            <div class="work_descr">
                                <h4>Auschwitz Birkenau</h4>
                                <p>Auschwitz – Birkenau is the site of the most notorious mass 
                                    murder in the history of humanity. Its remnants have been
                                    memorialised and serve as a mirror of the human soul and a
                                    tool for self-reflection
                                </p>
                            </div>
                        </div>
                        <img src="../../../images/birkenau2.jpg" class="img-responsive" alt="Auschwitz Birkenau" />
                    </div>
                </div>
                <div class="col-lg-4 col-md-12">
                    <div class="relative">
                        <div class="image_wrap">
                            <div class="work_descr">
                                <h4>Wieliczka – Salt Mine</h4>
                                <p>Wieliczka – Salt Mine is one of the most valuable monuments
                                    of material and spiritual culture in Poland
                                </p>
                            </div>
                        </div>
                        <img src="../../../images/wieliczka1.jpeg" class="img-responsive" alt="Auschwitz Birkenau" />
                    </div>
                </div>
                <div class="col-lg-4 col-md-12">
                    <div class="relative">
                        <div class="image_wrap">
                            <div class="work_descr">
                                <h4>Transfers on request</h4>
                                <p>Our regular private routes are: Zakopane, Wieliczka Salt
                                    Mine, Auschwitz-Birkenau Museum and John Paul II <b>
                                    International Airport Kraków–Balice</b>.
                                    It is possible to book return transfers that include
                                    driver’s waiting time as well, so you can enjoy your
                                    individually organized visit combined with professional
                                    return transfer. You will be provided with a comfortable
                                    vehicle dedicated to you only
                                </p>
                            </div>
                        </div>
                        <img src="../../../images/zakopane2.jpg" class="img-responsive" alt="Auschwitz Birkenau" />
                    </div>
                </div>
            </div>            
        </section>;
    }
}
