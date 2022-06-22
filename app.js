function useState(defaultValue) {
  let value = defaultValue;
  function getValue() {
    return value;
  }
  function setValue(newValue) {
    value = newValue;
    render();
  }
  return [getValue, setValue];
}
const [counter, setCounter] = useState(0)
const [month, setMonth] = useState("")
const [year, setYear] = useState("")
const [dateValue, setDateValue] = useState("")
const [timeValue, setTimeValue] = useState("")
const [timezone, setTimezone] = useState("")
const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [dates, setDates] = useState([])
const [sun, setSun] = useState([])
const [mon, setMon] = useState([])
const [tue, setTue] = useState([])
const [wed, setWed] = useState([])
const [thu, setThu] = useState([])
const [fri, setFri] = useState([])
const [sat, setSat] = useState([])

const app = document.getElementById("app");

window.onload = function(){
    var d = new Date()
    setTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone)
    setMonth(d.getMonth())
    setYear(d.getFullYear())
    getDatesInMonth()
    getDaysOfDates()
    fixArrayLength()
}

const getDatesInMonth = () => {
    var date = new Date(year(), month());
    const newDates = []
    while(date.getMonth() === month()){
        newDates.push(new Date(date));
        date.setDate(date.getDate() + 1);
    }
    setDates(newDates)
}

const getDaysOfDates = () => {
    setSun([])
    setMon([])
    setTue([])
    setWed([])
    setThu([])
    setFri([])
    setSat([])
    for (let i = 0; i < dates().length; i++) {
        var date = new Date(dates()[i])
        var date_to_str = date.toString()
        var strings = []
        strings.push(date_to_str.trim().split(" "));
        for(let i = 0; i < strings.length; i++){
            if(strings[i][0] == 'Mon'){
              const monn = [...mon()]
              monn.push(strings[i][2])
              setMon(monn)
            }
            if(strings[i][0] == 'Tue'){
              const tuee = [...tue()]
              tuee.push(strings[i][2])
              setTue(tuee)
            }
            if(strings[i][0] == 'Wed'){
              const wedd = [...wed()]
              wedd.push(strings[i][2])
              setWed(wedd)
            }
            if(strings[i][0] == 'Thu'){
              const thuu = [...thu()]
              thuu.push(strings[i][2])
              setThu(thuu)
            }
            if(strings[i][0] == 'Fri'){
              const frii = [...fri()]
              frii.push(strings[i][2])
              setFri(frii)
            }
            if(strings[i][0] == 'Sat'){
              const satt = [...sat()]
              satt.push(strings[i][2])
              setSat(satt)
            }
            if(strings[i][0] == 'Sun'){
              const sunn = [...sun()]
              sunn.push(strings[i][2])
              setSun(sunn)
            }
        }
    } 
}

const fixArrayLength = () => {
  for(let i = 0; i < sun().length; i++){
    if(sun()[i] == '01'){
      const monray = [...mon()]
      const tueray = [...tue()]
      const wedray = [...wed()]
      const thuray = [...thu()]
      const friray = [...fri()]
      const satray = [...sat()]

      monray.unshift(" ")
      setMon(monray)
      tueray.unshift(" ")
      setTue(tueray)
      wedray.unshift(" ")
      setWed(wedray)
      thuray.unshift(" ")
      setThu(thuray)
      friray.unshift(" ")
      setFri(friray)
      satray.unshift(" ")
      setSat(satray)
    }
    if(tue()[i] == '01'){
      const monray = [...mon()]
      monray.unshift(" ")
      setMon(monray)
    }
    if(wed()[i] == '01'){
      const monray = [...mon()]
      const tueray = [...tue()]
      monray.unshift(" ")
      setMon(monray)
      tueray.unshift(" ")
      setTue(tueray)
    }
    if(thu()[i] == '01'){
      const monray = [...mon()]
      const tueray = [...tue()]
      const wedray = [...wed()]
      monray.unshift(" ")
      setMon(monray)
      tueray.unshift(" ")
      setTue(tueray)
      wedray.unshift(" ")
      setWed(wedray)
    }
    if(fri()[i] == '01'){
      const monray = [...mon()]
      const tueray = [...tue()]
      const wedray = [...wed()]
      const thuray = [...thu()]

      monray.unshift(" ")
      setMon(monray)
      tueray.unshift(" ")
      setTue(tueray)
      wedray.unshift(" ")
      setWed(wedray)
      thuray.unshift(" ")
      setThu(thuray)
    }
    if(sat()[i] == '01'){
      const monray = [...mon()]
      const tueray = [...tue()]
      const wedray = [...wed()]
      const thuray = [...thu()]
      const friray = [...fri()]

      monray.unshift(" ")
      setMon(monray)
      tueray.unshift(" ")
      setTue(tueray)
      wedray.unshift(" ")
      setWed(wedray)
      thuray.unshift(" ")
      setThu(thuray)
      friray.unshift(" ")
      setFri(friray)
    }
  }
}

const next = () => {
  setMonth(month() + 1)
  getDatesInMonth()
  getDaysOfDates()
  fixArrayLength()
}

const prev = () => {
  setMonth(month() - 1)
  getDatesInMonth()
  getDaysOfDates()
  fixArrayLength()
}

function render() {
  app.innerHTML = `<div id='container'>
                    <div id="details">
                      <h3 class="u-name heading-3">John Doe</h3>
                      <h1 class="event-name heading-1">30 Minute Meeting</h1>
                      <h3 class="duration heading-3">30 min</h3>
                      <p class="description copy__para--medium">Ipsum amet aliquid molestiae nam ratione? Consectetur consequatur voluptate ipsa repellat placeat quidem Ut ipsam eaque libero exercitationem sint Earum voluptatem sint mollitia non provident. Exercitationem expedita sunt quasi aut exercitationem Quod impedit excepturi reprehenderit quaerat expedita ex accusantium. Enim</p>
                    </div>
                    <div id="select-container">
                      <h2 class="heading-2">Select a Date & Time</h2>
                      <div class="date-time">

                        <div class='dates-picker'>

                          <div id="month">
                            <p>June 2022</p>
                            <div id="month__btns">
                            </div>
                          </div>

                          <div class="dates">
                            <div class="button">
                              <p class="day">Mon</p>
                              <div class="col-day" id="mon">
                              </div>
                            </div>
                            <div class="button">
                              <p class="day">Tue</p>
                              <div class="col-day" id="tue">
                              </div>
                            </div>
                            <div class="button">
                              <p class="day">Wed</p>
                              <div class="col-day" id="wed">
                              </div>
                            </div>
                            <div class="button">
                              <p class="day">Thu</p>
                              <div class="col-day" id="thu">
                              </div>
                            </div>
                            <div class="button">
                              <p class="day">Fri</p>
                              <div class="col-day" id="fri">
                              </div>
                            </div>
                            <div class="button">
                              <p class="day">Sat</p>
                              <div class="col-day" id="sat">
                              </div>
                            </div>
                            <div class="button">
                              <p class="day">Sun</p>
                              <div class="col-day" id="sun">
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="times">
                          <button class="time1">fdkfjdklfd</button>
                          <button class="time2">fdkfjdklfd</button>
                          <button class="time2">fdkfjdklfd</button>
                        </div>
                      </div>
                      <div class="time">
                      </div>
                    </div>
                  </div>`

  let container = document.getElementById("month__btns")
  let nextBtn  = document.createElement("button")
  nextBtn.innerHTML = `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 59.414 59.414" style="enable-background:new 0 0 59.414 59.414;" xml:space="preserve">
  <polygon points="45.268,1.414 43.854,0 14.146,29.707 43.854,59.414 45.268,58 16.975,29.707 "/>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  </svg>`
  container.appendChild(nextBtn)
  nextBtn.addEventListener("click", () => {
    next()
  })

  let prevBtn  = document.createElement("button")
  prevBtn.innerHTML = `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 59.414 59.414" style="enable-background:new 0 0 59.414 59.414;" xml:space="preserve">
    <polygon points="15.561,0 14.146,1.414 42.439,29.707 14.146,58 15.561,59.414 45.268,29.707 "/>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    </svg>`
  container.appendChild(prevBtn)
  prevBtn.addEventListener("click", () => {
    prev()
  })

  let parent = document.getElementById("mon")
  for(let i=0; i < mon().length; i++){
    let child  = document.createElement("button")
    child.classList.add("btn-mon")
    child.setAttribute("id", "available")
    mon()[i] == " " ?  child.style.visibility = 'hidden' : child.innerHTML = mon()[i] ;
    parent.appendChild(child)
  }

  let parent2 = document.getElementById("tue")
  for(let i=0; i < tue().length; i++){
    let child  = document.createElement("button")
    child.classList.add("btn-tue", "today")
    tue()[i] == " " ?  child.style.visibility = 'hidden' : child.innerHTML = tue()[i] ;
    parent2.appendChild(child)
  }

  let parent3 = document.getElementById("wed")
  for(let i=0; i < wed().length; i++){
    let child  = document.createElement("button")
    child.classList.add("btn-wed")
    wed()[i] == " " ?  child.style.visibility = 'hidden' : child.innerHTML = wed()[i] ;
    parent3.appendChild(child)
  }

  let parent4 = document.getElementById("thu")
  for(let i=0; i < thu().length; i++){
    let child  = document.createElement("button")
    child.classList.add("btn-thu")
    thu()[i] == " " ?  child.style.visibility = 'hidden' : child.innerHTML = thu()[i] ;
    parent4.appendChild(child)
  }

  let parent5 = document.getElementById("fri")
  for(let i=0; i < fri().length; i++){
    let child  = document.createElement("button")
    child.classList.add("btn-fri")
    fri()[i] == " " ?  child.style.visibility = 'hidden' : child.innerHTML = fri()[i] ;
    parent5.appendChild(child)
  }

  let parent6 = document.getElementById("sat")
  for(let i=0; i < sat().length; i++){
    let child  = document.createElement("button")
    child.classList.add("btn-sat")
    sat()[i] == " " ?  child.style.visibility = 'hidden' : child.innerHTML = sat()[i] ;
    parent6.appendChild(child)
  }

  let parent7 = document.getElementById("sun")
  for(let i=0; i < sun().length; i++){
    let child  = document.createElement("button")
    child.classList.add("btn-sun")
    sun()[i] == " " ?  child.style.visibility = 'hidden' : child.innerHTML = sun()[i] ;
    parent7.appendChild(child)
  }
}
render();
