import { useCallback } from "react";
import { Button, TextField } from "@mui/material";
import "./Home.css";

const Home = () => {
  const onHowIndiaBecameClick = useCallback(() => {
    // Please sync "Bog page" to the project
  }, []);

  const onLetsCheckOutClick = useCallback(() => {
    // Please sync "Bog page" to the project
  }, []);

  const onRectangleImageClick = useCallback(() => {
    // Please sync "Bog page" to the project
  }, []);

  const onGroupButton1Click = useCallback(() => {
    // Please sync "login page" to the project
  }, []);

  return (
    <div className="home">
      <div className="home-child" />
      <img
        className="finfloww-logo-green-1"
        alt=""
        src="../finfloww-logo-green-1@2x.png"
      />
      <div className="popular">Popular</div>
      <div className="stock-market">Stock Market</div>
      <div className="stocks">Stocks</div>
      <div className="crypto">{`Crypto `}</div>
      <div className="economy">Economy</div>
      <div className="business">Business</div>
      <div className="home-item" />
      <div className="how-india-became" onClick={onHowIndiaBecameClick}>
        How India became the pharma industry of the world
      </div>
      <div className="has-apple-finally">
        Has Apple finally cracked the Indian market?
      </div>
      <div className="will-short-videos">Will short videos save Meta?</div>
      <div className="lets-check-out" onClick={onLetsCheckOutClick}>
        Let’s check out in today’s blog how we supplied medicines to the entire
        globe? Let’s check out in today’s blog how we supplied medicines to the
        entire globe?
      </div>
      <img className="home-inner" alt="" src="../ellipse-38@2x.png" />
      <div className="finfloww-on-14">FinFloww on 14 Feb 2022</div>
      <div className="why-everybodys-talking">{`why everybody's talking about Apple's recent performance in India. 2021 was Apple’s best year in India so far. The company sold close to 6 million iPhones last year and they don’t look like slowing down any time soon.  `}</div>
      <img className="ellipse-icon" alt="" src="../ellipse-38@2x.png" />
      <div className="finfloww-on-141">FinFloww on 14 Feb 2022</div>
      <div className="youve-probably-heard">
        You’ve probably heard of it already — Meta (formerly known as Facebook)
        is going through a bit of a rough patch of late. Last week, the company
        announced its earnings and long story short — it was worse than anyone
        expected
      </div>
      <img className="home-child1" alt="" src="../ellipse-38@2x.png" />
      <div className="finfloww-on-142">FinFloww on 14 Feb 2022</div>
      <div className="shark-tank-a">
        Shark Tank, a fintech founder, and a banking licence
      </div>
      <div className="some-of-you">
        some of you asked us, “Finshots, can you please tell me what’s actually
        happening at BharatPe?” Now everyone, and we mean literally everyone has
        covered the story, so what more can we possibly write?
      </div>
      <img className="home-child2" alt="" src="../ellipse-38@2x.png" />
      <div className="finfloww-on-143">FinFloww on 14 Feb 2022</div>
      <img
        className="rectangle-icon"
        alt=""
        src="../rectangle-15@2x.png"
        onClick={onRectangleImageClick}
      />
      <div className="rectangle-div" />
      <img className="vector-icon" alt="" src="../vector.svg" />
      <img className="home-child3" alt="" src="../rectangle-17@2x.png" />
      <Button
        className="group-button"
        sx={{ width: 89 }}
        variant="contained"
        color="primary"
      >{`View all `}</Button>
      <img
        className="finfloww-logo-green-2"
        alt=""
        src="../finfloww-logo-green-2@2x.png"
      />
      <div className="business1">
        <p className="making-it-with">Business</p>
      </div>
      <div className="has-apple-finally1">
        Has Apple finally cracked the Indian market?
      </div>
      <div className="will-short-videos1">Will short videos save Meta?</div>
      <div className="why-everybodys-talking1">{`why everybody's talking about Apple's recent performance in India. 2021 was Apple’s best year in India so far. The company sold close to 6 million iPhones last year and they don’t look like slowing down any time soon.  `}</div>
      <img className="home-child4" alt="" src="../ellipse-38@2x.png" />
      <div className="finfloww-on-144">FinFloww on 14 Feb 2022</div>
      <div className="youve-probably-heard1">
        You’ve probably heard of it already — Meta (formerly known as Facebook)
        is going through a bit of a rough patch of late. Last week, the company
        announced its earnings and long story short — it was worse than anyone
        expected
      </div>
      <img className="home-child5" alt="" src="../ellipse-38@2x.png" />
      <div className="finfloww-on-145">FinFloww on 14 Feb 2022</div>
      <div className="shark-tank-a1">
        Shark Tank, a fintech founder, and a banking licence
      </div>
      <div className="some-of-you1">
        some of you asked us, “Finshots, can you please tell me what’s actually
        happening at BharatPe?” Now everyone, and we mean literally everyone has
        covered the story, so what more can we possibly write?
      </div>
      <img className="home-child6" alt="" src="../ellipse-38@2x.png" />
      <div className="finfloww-on-146">FinFloww on 14 Feb 2022</div>
      <div className="home-child7" />
      <img className="home-child8" alt="" src="../rectangle-17@2x.png" />
      <div className="view-all">{`View all `}</div>
      <img className="vector-icon1" alt="" src="../vector1.svg" />
      <div className="rectangle-parent">
        <div className="group-child" />
        <Button
          className="group-item"
          sx={{ width: 150 }}
          variant="contained"
          color="primary"
          onClick={onGroupButton1Click}
        >
          Join now!
        </Button>
        <div className="finfloww">FinFloww</div>
      </div>
      <div className="home-child9" />
      <div className="rectangle-group">
        <div className="group-inner" />
        <img className="asset-43x-2" alt="" src="../asset-43x-2@2x.png" />
        <div className="categories">Categories</div>
        <div className="follow-us">Follow us</div>
        <div className="technology">
          <p className="making-it-with">Technology</p>
        </div>
        <div className="instagram">
          <p className="making-it-with">Instagram</p>
        </div>
        <div className="twitter">
          <p className="making-it-with">Twitter</p>
        </div>
        <div className="substack">Substack</div>
        <div className="whatsapp">
          <p className="making-it-with">WhatsApp</p>
        </div>
        <div className="business3">
          <p className="making-it-with">Business</p>
        </div>
        <div className="startups">
          <p className="making-it-with">Startups</p>
        </div>
        <div className="stocks1">
          <p className="making-it-with">Stocks</p>
        </div>
        <div className="subscribe-to-our">Subscribe to our newsletter</div>
        <div className="get-the-latest">
          Get the latest insights delievered to your inbox
        </div>
        <TextField
          className="rectangle-textfield"
          sx={{ width: 241.50209045410156 }}
          color="primary"
          variant="outlined"
          type="text"
          label="Label"
          placeholder="Placeholder"
          size="medium"
          margin="none"
        />
        <div className="your-email-id">Your Email Id</div>
        <Button
          className="rectangle-button"
          sx={{ width: 211.43959045410156 }}
          variant="contained"
          color="primary"
        >
          Button
        </Button>
        <div className="subscribe">Subscribe</div>
        <div className="all-rights-reserved">
          © 2023. All rights reserved by VOICATECH Pvt Ltd
        </div>
        <div className="making-it-with-container">
          <p className="making-it-with">
            Making it with ♥ in India for the world
          </p>
          <p className="blank-line">&nbsp;</p>
        </div>
      </div>
      <div className="showcase-your-brand">Showcase your brand here</div>
      <div className="trending">Trending 🔥</div>
      <div className="rectangle-container">
        <div className="group-child1" />
        <img className="group-child2" alt="" src="../rectangle-51@2x.png" />
        <div className="shark-tank-a2">
          Shark Tank, a fintech founder, and a banking licence
        </div>
      </div>
      <div className="group-div">
        <div className="group-child3" />
        <img className="group-child2" alt="" src="../rectangle-51@2x.png" />
        <div className="shark-tank-a2">
          Shark Tank, a fintech founder, and a banking licence
        </div>
      </div>
      <div className="rectangle-parent1">
        <div className="group-child3" />
        <img className="group-child2" alt="" src="../rectangle-51@2x.png" />
        <div className="shark-tank-a2">
          Shark Tank, a fintech founder, and a banking licence
        </div>
      </div>
    </div>
  );
};

export default Home;
