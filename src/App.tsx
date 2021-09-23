import "./App.css";
import Search from "./SearchBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
import SingleProduct from "./SingleProduct";
import AppProvider  from "./AppContext";
import RangeSlider from "react-bootstrap-range-slider";
import { useState } from "react";

function App() {
  const [value, setValue] = useState<number>(0);
  return (
    <AppProvider>
      <div className="header">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-2">
            <a className="navFont" href="http://localhost:3000/">
              Home
            </a>
            <a className="navFont" href="http://localhost:3000/">
              About us
            </a>
          </div>
          <div className="col-lg-4"></div>
          <div className="col-lg-2"><Search />
          </div>
        </div>
      </div>
      <RangeSlider
      value={value}
      onChange={changeEvent => setValue(Number(changeEvent.target.value))}
    />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path={"/posts/:id"} component={SingleProduct} />
        </Switch>
      </BrowserRouter>

      <footer>
        <div className="row footer">
          <div className="col-lg-4">
            <div>
              <div className="font">Enes Spahiu</div>
              <div className="font">spahiuenes@icloud.com</div>
              <div className="font">076 452 07 29</div>
              <div className="font">8152 Glattbrugg</div>
            </div>
          </div>
          <div className="col-lg-4"></div>
          <div className="col-lg-4 alignLogo">
            <div>
              <a href="https://www.facebook.com/">
                <img
                  src="https://cdn.pixabay.com/photo/2015/05/17/10/51/facebook-770688_640.png"
                  alt=""
                  className="logoSM"
                />
              </a>
              <a href="https://twitter.com/?lang=de">
                <img
                  src="https://e7.pngegg.com/pngimages/431/377/png-clipart-twitter-logo-square-twitter-icon-icons-logos-emojis-social-media-icons-thumbnail.png"
                  alt=""
                  className="logoSM"
                />
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com/">
                <img
                  src="https://purepng.com/public/uploads/large/21502363139brqka1urunxkb6fsykdwwbdsp41ilsn7kwdmaogpqzi3ja4m8ewca6aqx1hsluhgvvq2zhaxujjywzcnitprj0vcgrcheaj4srev.png"
                  alt=""
                  className="logoSM"
                />
              </a>
              <a href="https://accounts.snapchat.com/accounts/login?continue=https%3A%2F%2Faccounts.snapchat.com%2Faccounts%2Fwelcome">
                <img
                  src="https://pbs.twimg.com/media/CVUxo1_WIAEnM7X.png"
                  alt=""
                  className="logoSM"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
      </AppProvider>
  );
}

export default App;
