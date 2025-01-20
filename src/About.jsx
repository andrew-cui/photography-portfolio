import React, { useState } from "react";
import './css/index.css'
import NavBar from './components/NavBar.jsx'
import Resume from './components/Resume.jsx'
import ScrollKey from './components/Scroll.jsx'
import { SM_Spacer, MD_Spacer, LG_Spacer, XL_Spacer } from './components/Spacers.jsx'


// About - destination URL /me
const About = () => {
  const [isVisible, setIsToggled] = useState(false)
  const toggleInternships = () => {
    setIsToggled(!isVisible);
  }
  
  return (
    <div>
        <div className="breaker-image"><img style={{objectPosition: 'center 40%'}} src="https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/banff/morainelake.avif"/></div>

        <div style={{marginTop: '2.5em'}}></div>

        <div className="text-center my-4 py-6">
          <h2 style={{fontSize: '2.5em'}}>andrew cui</h2>
          <p  style={{fontSize: '1em'}}>photographer &nbsp; | &nbsp; nyc</p>
        </div>

        
        <div className="text-center my-4 py-6 w-full">
          {/* introduction */}
          <div className="flex flex-col md:flex-row mx-auto w-[80%] sm:w-[60%] md:w-[80%] lg:w-[65%]">
            <div className="w-full md:w-1/3 px-2 sm:px-3 md:px-5 mt-7">
              <img src="/yi.png" className="rounded circle shadow mb-4"/>
              <p  style={{fontSize: '0.75em'}}></p>
            </div>
            <div className="w-full md:w-2/3 px-3 sm:px-5 md:px-8 mt-7">
              <h2 style={{fontSize: '1.4em'}} className="mb-4">hi!</h2>
              <p className="text-left">
                i'm a photographer based in nyc, originally from upstate new york.
                welcome to my new portfolio - i built it to showcase client shoots, share favorites from my travels (like the banners here!), and to reteach myself how to code &nbsp; <i>(thank you gpt & claude).</i>
              </p>
              <SM_Spacer/>
              <p className="text-left">
                if you're interested in booking, drop me a line <a href="mailto:hello@andrewcui.com">here!</a>
              </p>
            </div>
          </div>

          <MD_Spacer/>

          {/* details */}
          <div className="flex flex-col md:flex-row mx-auto w-[80%] sm:w-[60%] md:w-[80%] lg:w-[65%]">
            <div className="w-full md:w-3/4 lg:w-2/3 px-3 sm:px-5 md:px-8 mt-7">
              <h2 style={{fontSize: '1.4em'}} className="mb-4">photography</h2>
              <p className="text-left">
                i spent a lot of time with the camera growing up, but only started taking it seriously my third year of college. 
                that spring, i went on an exchange program in london, and took advantage of the opportunity to travel all around europe - new camera and lenses in hand.
              </p>
              <SM_Spacer/>
              <p className="text-left">
                after i returned, i started client shoots on campus with the <a href="https://global.upenn.edu/perryworldhouse" target="_blank">perry world house</a> & <a href="https://www.pennlens.com/" target="_blank">penn lens</a>. since moving to nyc in '21, i've continued taking freelance clients outside of work and recently started shooting for road races as well!
              </p>
              <SM_Spacer/>
              <p className="text-left">
                past shoots & clients:
              </p>
                <div className="flex flex-row flex-wrap w-[100%] md:w-[90%] lg:w-[80%] pt-3 gap-x-6 gap-y-6">
                  <div className="logos"><img src="https://images.squarespace-cdn.com/content/v1/616756a52f1c22567678b71e/083846c6-a18b-47fd-9956-7d2118362087/run-for-chinatown-logo-square.jpg"/></div>
                  <div className="logos"><img src="https://branding.web-resources.upenn.edu/sites/default/files/styles/card_3x2/public/2022-03/UniversityofPennsylvania_FullLogo_RGB-4_0.png?h=ab080a2f&itok=tu_jMFEm"/></div>
                  <div className="logos"><img src="https://global.upenn.edu/sites/default/files/2018-02/logo--perry-world-house.svg"/></div>
                  <div className="logos"><img src="https://images.squarespace-cdn.com/content/v1/591f52c820099e7018b23028/1497392629241-6ZWKFOMSX7420ONZCGP0/PADT+Logo+2.png"/></div>
                  <div className="logos"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzK8pGbWe2fG_vI3TSp2jtmvydUzyhHHISag&s"/></div>
                  <div className="logos"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHr0AnN8DOVmUjUKEkT8-7jfOm4jFo7lKMnw&s"/></div>
                  <div className="logos"><img src="https://scontent-lga3-3.xx.fbcdn.net/v/t1.6435-9/74347375_2502056399850147_7515136279059628032_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=Y5v_9_kHWlQQ7kNvgGDHCg8&_nc_zt=23&_nc_ht=scontent-lga3-3.xx&_nc_gid=Ar5131KMLOo-3OtOGZMPaFE&oh=00_AYBGmUqXDL7V6PWt047tXgR--ZpqY0TW2Jqg_I3aDrIe7Q&oe=67B53BF0"/></div>
                </div>
                <MD_Spacer/>
                <p className="text-left">
                  work featured by:
                </p>
                <div className="flex flex-row flex-wrap w-[100%] md:w-[90%] lg:w-[80%] pt-3 gap-x-6 gap-y-4">
                  <div className="logos"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4wrs9blYcu6M1LXukO5Ot_-GbGKspaR1U_Q&s"/></div>
                  <div className="logos"><img src="https://www.teamintraining.org/sites/tnt/files/Image/LandingPages/tnt-shield-logo19.png"/></div>
                  <div className="logos"><img src="https://media.licdn.com/dms/image/sync/v2/D5627AQH9XR5e9w9BIw/articleshare-shrink_800/articleshare-shrink_800/0/1730204251238?e=2147483647&v=beta&t=-AoOSF9L9RKJLIMWM_qPWv6QabXX0Eo-Gh24wqHTc4U"/></div>
                  <div className="logos"><a href="https://www.washington.org/visit-dc/ways-celebrate-labor-day-weekend-washington-dc" target="_blank"><img src="https://cdn.cookielaw.org/logos/027646a5-335a-4aa9-a475-460a2437e47d/4b1542b0-a927-4087-872c-967df63c74cc/1aed9ac7-f2bb-4664-8e7d-c66ca865b25b/DC-Page-Logo-600x400.png"/></a></div>
                  <div className="logos"><a href="https://www.instagram.com/p/CDw887CB2GW/" target="_blank"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkMjIDaLpRHoKeRsScdlLXrgeH06tRfKH5HA&s"/></a></div>
                  <div className="logos"><a href="https://www.instagram.com/bledslovenia/p/BvFTem2gl15/" target="_blank"><img src="https://www.bled.si/images/backgrounds/logo-bled.svg"/></a></div>
                  <div className="logos"><a href="https://penntoday.upenn.edu/news/susan-rice-talks-tough-love-career-government" target="_blank"><img src="penntoday.png"/></a></div>
                  <div className="logos"><a href="https://www.instagram.com/p/CZr2yy3l9Ot/?img_index=1" target="_blank"><img src="https://partyslate.imgix.net/companies/4137/brand-image-b1059d5a-4b21-407d-a945-180ef5585bfe.png?ixlib=js-2.3.2&w=300"/></a></div>
                </div>
                
            </div>
          </div>

          <LG_Spacer/>
          <div className="breaker-image"><img style={{objectPosition: 'center 50%'}} src="https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/alps/neuschwanstein.avif"/></div>
          <LG_Spacer/>

          {/* work */}
          <div className="flex flex-col md:flex-row mx-auto w-[80%] sm:w-[60%] md:w-[80%] lg:w-[65%]">
            <div className="w-full md:w-1/4 lg:w-1/3 px-2 sm:px-3 md:px-5"></div>
            <div className="w-full md:w-3/4 lg:w-2/3 px-3 sm:px-5 md:px-8">
              <h2 style={{fontSize: '1.4em'}} className="mb-6">work</h2>
              <Resume 
                company={"Attentive"} 
                company_url={"https://www.attentive.com"}
                role={"Product Manager"}
                description={<>
                  building our new ai products! 
                  {/* <u><a href="https://www.attentive.com/press-releases/attentives-ai-marketing-innovations-and-business-milestones-set-new-standards-heading-into-2025" target="_blank">~ news ~</a></u> */}
                  <br />
                  prev. part of the strategy & operations team
                </>}
                date={"2022 - "}
                logo={"https://appexchange.salesforce.com/image_host/e817eb37-23fb-4a14-8bf6-660d9b85b141.png"}>
              </Resume>

              <Resume 
                company={"McKinsey & Co."} 
                company_url={"https://www.mckinsey.com"}
                role={"Consultant"}
                description={<>
                  projects in insurance, financials, future of work, and marketing
                  <br />
                  redesigned global <u><a href="https://www.mckinsey.com/careers/meet-our-people/asians-at-mckinsey" target="_blank">asians @ mckinsey</a></u> site
                </>}
                date={"2020 - 2022"}
                logo={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbZYc4fc0k0HXNIt08VQNhV4p0uun_vyehPw&s"}>
              </Resume>

              <Resume 
                company={"UPenn"} 
                // company_url={"https://www.cis.upenn.edu/"}
                role={"TA"}
                description={<>
                  1st head TA for <u><a href="https://sites.google.com/seas.upenn.edu/cis545/home" target="_blank"><i>cis 545 (big data)</i></a></u>, total 3 semesters
                  <br />
                  TA for <i>cis 240 (computer systems), mcit 594, stat 405 (r), stat 422/722</i>
                </>}
                date={"2018 - 2020"}
                logo={"https://branding.web-resources.upenn.edu/sites/default/files/styles/card_3x2/public/2022-03/UniversityofPennsylvania_FullLogo_RGB-4_0.png?h=ab080a2f&itok=tu_jMFEm"}>
              </Resume>

              <div className="resume-button"><button onClick={toggleInternships}><i>
                {isVisible ? 
                    <svg className="inline-block" width="12" height="12" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 16 L12 8 L20 16" fill="none" stroke="#27272a" strokeWidth={1}/>
                    </svg> :
                    <svg className="inline-block" width="12" height="12" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                        <path d="M4 8 L12 16 L20 8" fill="none" stroke="#27272a" strokeWidth={1}/>
                    </svg> 
                  }&nbsp;&nbsp;
                {isVisible ? 'hide' : 'show'} internships
                </i></button></div>


              <div className={`resume-internships ${isVisible ? 'resume-show' : ''}`}>
                <Resume 
                  company={"JW Player"} 
                  company_url={"https://jwplayer.com/"}
                  role={"Data Science & Analytics"}
                  description={"advertising product analytics internship"}
                  date={"2020"}
                  logo={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ndAZmThaK2KrD-8rSyIbPGliXCwutomMIQ&s"}>
                </Resume>

                <Resume 
                  company={"Capital One"} 
                  company_url={"https://www.capitalone.com/"}
                  role={"Analyst Intern"}
                  description={"credit line analysis & commercial real estate"}
                  date={"2017, 2019"}
                  logo={"https://companieslogo.com/img/orig/COF-669e640e.png?t=1720244491"}>
                </Resume>

                <Resume 
                  company={"Optiver"} 
                  company_url={"https://optiver.com/"}
                  role={"Quant Trading Intern"}
                  date={"2018"}
                  logo={"https://optiver.com/wp-content/uploads/2023/07/Optiver_Logo_Google_Profile_300x300_RGB.jpg"}>
                </Resume>
              </div>

            </div>
          </div>
          
          <SM_Spacer/>
          {/* other */}
          <div className="flex flex-col md:flex-row mx-auto w-[80%] sm:w-[60%] md:w-[80%] lg:w-[65%]">
            <div className="w-full md:w-4/5 lg:w-3/5 px-3 sm:px-5 md:px-8 mt-7 mx-auto">
              <h2 style={{fontSize: '1.4em'}} className="mb-4">everything else!</h2>
              <p className="text-left">
                 outside of photography & work, i run marathons for fun, support the <a href="https://www.lls.org/" target="_blank">leukemia & lymphoma society</a> (~$5k fundraised in 2023), travel, ski, and blindly cheer for the new york yankees.
              </p>
              <SM_Spacer/>
              <p className="text-left">
                 my digital race medal shelf:
              </p>
              <div className="flex flex-row flex-wrap w-full pt-3 gap-x-6 gap-y-4">
                {/* <div className="logos logos-running"><img src="https://prodsitecore.blob.core.windows.net/nyrrsitecoreblob/nyrr/logo/uanych18_4p_primary_logo_nodate_rgb_full_color300x300.png"/></div> */}
                <div className="logos logos-running"><img src="https://www.rrca.org/wp-content/uploads/347782572_579814150920421_4556378350945100525_n.jpg"/></div>
                <div className="logos logos-running"><img src="https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-1/327466807_867634351114572_5585112482290563793_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=101&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=ont_RRxMGVAQ7kNvgEQrTG3&_nc_zt=24&_nc_ht=scontent-lga3-2.xx&_nc_gid=AflLmwt6skvdpUxCV_dLcT5&oh=00_AYDbUHWdBGIKS_vbFhPR5DwKPuHcBWJzFjCG3DzYhYFWnw&oe=6793B0A7"/></div>
                <div className="logos logos-running"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfpN04uzQFaW8uZ2IIBvzriEX_uSbvHZ_eqA&s"/></div>
                <div className="logos logos-running logos-future-races"><img src="https://raceraves.com/wp-content/uploads/2019/10/Vienna-City-Marathon-logo.jpg"/></div>
                <div className="logos logos-running logos-future-races"><img style={{'border-radius': '8px'}} src="https://cdn.raceroster.com/event-logo/3tzmu2kzpqspzw22._original.jpg"/></div>
              </div>
              <MD_Spacer/>
              <p className="text-left">
                 for fun: select items on my "bucket list":
                 <ul className="bucket-list">
                  <li><div className="checkbox checked"/>run a marathon (done this plenty of times now...)</li>
                  <li><div className="checkbox"/>run 2,025 miles for 2025</li>
                  <li><div className="checkbox"/>qualify for the boston marathon</li>
                  <li><div className="checkbox"/>finish a triathlon (and then a 70.3)</li>
                  <br></br>
                  <li><div className="checkbox"/>learn 20 new recipes this year</li>
                  <li><div className="checkbox"/>learn another language</li>
                  <li><div className="checkbox"/>finish every day in a week of the nyt crossword</li>
                  <li><div className="checkbox"/>complete a 1,000 piece puzzle in 6-8 hours alone</li>
                 </ul>
              </p>
            </div>
          </div>
          <LG_Spacer/>
          <div className="breaker-image"><img style={{objectPosition: 'center 7%'}} src="https://amzn-s3-photography-portfolio.s3.us-east-2.amazonaws.com/travel/usa/dc-lincolnmemorial2.avif"/></div>

        </div>
        
        <ScrollKey scrollPercentage={95} zindex={2} />
        <NavBar/>
      </ div>
  )
}
export default About
