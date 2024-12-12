'use client'
import Slowform from "./components/slowform/slowform";
import Fastform from "./components/fastform/fastform";
import { Profiler} from "react";
const Home = () => {
  const onRender = (id:any, phase:any, actualDuration:any, baseDuration:any, startTime:any, commitTime:any) => {
    console.log(id);
    console.log(phase);
    console.log(actualDuration)
    console.log(baseDuration);
    console.log(actualDuration);
    console.log(startTime)
    console.log(commitTime)
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