import "./index.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SignUp = () => {
  const navigation = useNavigate();
    return (
        <div className="App">
<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<section id="team" class="pb-5">
<h5 class="section-title h1">Login </h5>

    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center">
                                    <h4 class="card-title">Admin</h4>
                                    <p class="card-text">Admin can perform both Login & Register process </p>
                                    <img class=" img-fluid" src="https://t4.ftcdn.net/jpg/03/08/33/75/360_F_308337583_CahQnaQMDdhkNnAY7Q0k7dhZZFCEmj7p.jpg" alt="card image"/>
                                        <br/><br/>
                                    <a class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>

                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h4 class="card-title">Admin</h4>
                                    <p class="card-text">Admin is a hospital administrator, healthcare professional who oversees the operations of a hospital or other healthcare facility and responsible for a wide range of tasks.</p>
                                    <ul class="list-inline">
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="#">
                                                <i class="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="#">
                                                <i class="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="#">
                                                <i class="fa fa-skype"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="#">
                                                <i class="fa fa-google"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <button /*onClick={() => navigation(routeName.SignUpAdmin)}*/ className="btn-success"><Link to="/signUpAdmin" className="btn-success">Proceed</Link></button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center">
                                    <h4 class="card-title">Doctor</h4>
                                    <p class="card-text">Doctor can perform both Login & Register process </p>
                                    <img class=" img-fluid" src="https://t4.ftcdn.net/jpg/02/29/53/11/360_F_229531197_jmFcViuzXaYOQdoOK1qyg7uIGdnuKhpt.jpg" alt="card image"/>
                                        <br/><br/>
                                    <a href="#" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h4 class="card-title">Doctor</h4>
                                    <p class="card-text">Doctor meets the patients, examining them and discussing their symptoms and medical histories & performing surgical procedures also providing pre- and post-operative care.</p>
                                    <ul class="list-inline">
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="#">
                                                <i class="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="#">
                                                <i class="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="#">
                                                <i class="fa fa-skype"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="#">
                                                <i class="fa fa-google"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <button /*onClick={() => navigation(routeName.signupdoctor)}*/ className="btn-success"><Link to="/signUpDoctor" className="btn-success">Proceed</Link></button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center">
                                    <h4 class="card-title">Patient</h4>
                                    <p class="card-text">Patient can perform both Login & Register process </p>
                                    <img class=" img-fluid" src="https://cdn.vectorstock.com/i/1000x1000/39/19/surgical-mask-icon-with-patient-person-profile-vector-32493919.webp" alt="card image"/>
                                        <br/><br/>
                                    <a href="#" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h4 class="card-title">Patient</h4>
                                    <p class="card-text">A patient may be admitted to the hospital for a variety of reasons, such as for surgery, to recover from an illness, or to receive ongoing treatment for a chronic condition.</p>
                                    <ul class="list-inline">
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="#">
                                                <i class="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="#">
                                                <i class="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="#">
                                                <i class="fa fa-skype"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="#">
                                                <i class="fa fa-google"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <button /*onClick={() => navigation(routeName.SignUpPatient)} */ className="btn-success"><Link to="/signUpPatient" className="btn-success">Proceed</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>
</div>
    )
}
export default SignUp;