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

const emptySpace = () => {
  let btn_mon_length = document.getElementsByClassName("btn-mon").length
  let btn_tue_length = document.getElementsByClassName("btn-tue").length
  let btn_wed_length = document.getElementsByClassName("btn-wed").length
  let btn_thu_length = document.getElementsByClassName("btn-thu").length
  let btn_fri_length = document.getElementsByClassName("btn-fri").length
  let btn_sat_length = document.getElementsByClassName("btn-sat").length
  let btn_sun_length = document.getElementsByClassName("btn-sun").length

  for(let i=0; i < btn_mon_length; i++){
    var btn_mon = document.getElementsByClassName('btn-mon')[i]
    if(btn_mon.innerHTML == ' '){
      btn_mon.style.visibility = 'hidden'
    }
  }

  for(let i=0; i < btn_tue_length; i++){
    var btn_tue = document.getElementsByClassName('btn-tue')[i]
    if(btn_tue.innerHTML == ' '){
      btn_tue.style.visibility = 'hidden'
    }
  }
  for(let i=0; i < btn_wed_length; i++){
    var btn_wed = document.getElementsByClassName('btn-wed')[i];
    if(btn_wed.innerHTML == ' '){
      btn_wed.style.visibility = 'hidden'
    }
  }
  for(let i=0; i < btn_thu_length; i++){
    var btn_thu = document.getElementsByClassName('btn-thu')[i]
    if(btn_thu.innerHTML == ' '){
      btn_thu.style.visibility = 'hidden'
    }
  }
  for(let i=0; i < btn_fri_length; i++){
    var btn_fri = document.getElementsByClassName('btn-fri')[i]
    if(btn_fri.innerHTML == ' '){
      btn_fri.style.visibility = 'hidden'
    }
  }
  for(let i=0; i < btn_sat_length; i++){
    var btn_sat = document.getElementsByClassName('btn-sat')[i]
    if(btn_sat.innerHTML == ' '){
      btn_sat.style.visibility = 'hidden'
    }
  }
  for(let i=0; i < btn_sun_length; i++){
    var btn_sun = document.getElementsByClassName('btn-sun')[i]
    if(btn_sun.innerHTML == ' '){
      btn_sun.style.visibility = 'hidden'
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
                    <div class='dates'>
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
                  </div>`

  let container = document.getElementById("container")
  let nextBtn  = document.createElement("button")
  nextBtn.innerHTML = "Next"
  container.appendChild(nextBtn)
  nextBtn.addEventListener("click", () => {
    next()
  })

  let prevBtn  = document.createElement("button")
  prevBtn.innerHTML = "Prev"
  container.appendChild(prevBtn)
  prevBtn.addEventListener("click", () => {
    prev()
  })

  let parent = document.getElementById("mon")
  for(let i=0; i < mon().length; i++){
    let child  = document.createElement("button")
    child.innerHTML = mon()[i]
    child.classList.add("btn-mon")
    parent.appendChild(child)
  }

  let parent2 = document.getElementById("tue")
  for(let i=0; i < tue().length; i++){
    let child  = document.createElement("button")
    child.innerHTML = tue()[i]
    child.classList.add("btn-tue")
    parent2.appendChild(child)
  }

  let parent3 = document.getElementById("wed")
  for(let i=0; i < wed().length; i++){
    let child  = document.createElement("button")
    child.innerHTML = wed()[i]
    child.classList.add("btn-wed")
    parent3.appendChild(child)
  }

  let parent4 = document.getElementById("thu")
  for(let i=0; i < thu().length; i++){
    let child  = document.createElement("button")
    child.innerHTML = thu()[i]
    child.classList.add("btn-thu")
    parent4.appendChild(child)
  }

  let parent5 = document.getElementById("fri")
  for(let i=0; i < fri().length; i++){
    let child  = document.createElement("button")
    child.innerHTML = fri()[i]
    child.classList.add("btn-fri")
    parent5.appendChild(child)
  }

  let parent6 = document.getElementById("sat")
  for(let i=0; i < sat().length; i++){
    let child  = document.createElement("button")
    child.innerHTML = sat()[i]
    child.classList.add("btn-sat")
    parent6.appendChild(child)
  }

  let parent7 = document.getElementById("sun")
  for(let i=0; i < sun().length; i++){
    let child  = document.createElement("button")
    child.innerHTML = sun()[i]
    child.classList.add("btn-sun")
    parent7.appendChild(child)
  }
}
render();
emptySpace()
