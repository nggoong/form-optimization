'use client'
import Slowform from "./components/slowform/slowform";
import Fastform from "./components/fastform/fastform";
import { Profiler} from "react";
const Home = () => {
  const onRender = (id:any, phase:any, actualDuration:any, baseDuration:any, startTime:any, commitTime:any) => {
    console.log('id: ' + id);
    console.log('phase: ' + phase);
    console.log("actualDuration: " + actualDuration)
    console.log("baseDuration: " + baseDuration);
    console.log("startTime: " + startTime)
    console.log("commitTime: " + commitTime)
  }
  return(
    <>
      <h1>SlowForm</h1>
      <Profiler id="slowform" onRender={onRender}>
      <Slowform/>
      </Profiler>
      <h1>FastForm</h1>
      <Profiler id="fastform" onRender={onRender}>
      <Fastform/>
      </Profiler>
    </>
  )
}

export default Home;