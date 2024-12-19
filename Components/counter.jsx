import "./counter.css";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
export default function Counter() {
  const [counterState, setCounterState] = useState(false);

  function onEnterViewport() {
    setCounterState(true);
  }

  function onExitViewport() {
    setCounterState(false);
  }
  return (
    <>
      <div class="containerStylesh1">
        <ScrollTrigger onEnter={onEnterViewport} onExit={onExitViewport}>
          {/* <h1 style={{padding:"2%"}} >yaha pe kuch to divkhna h</h1> */}

          <div class="udiv">
            <div class="udivtem">
              <h2 class="udivh2">
                {counterState && <CountUp end={765} duration={2.75} />}+
              </h2>
              <p class="udivp">Completed Project</p>
            </div>
            <div class="udivtem">
              <h2 class="udivh2">
                {counterState && <CountUp end={456} duration={2.75} />}+
              </h2>
              <p class="udivp">Happy Clients</p>
            </div>
            <div class="udivtem">
              <h2 class="udivh2">
                {counterState && <CountUp end={356} duration={2.75} />}
              </h2>
              <p class="udivp">Questions Answers</p>
            </div>

            <div class="udivtem">
              <h2 class="udivh2">
                {counterState && <CountUp end={15} duration={2.75} />}+
              </h2>
              <p class="udivp">Year of Experience</p>
            </div>
          </div>
        </ScrollTrigger>
      </div>
    </>
  );
}
