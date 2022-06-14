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
            else{
             console.log(false)
            }
        }
    } 
}

function render() {
  app.innerHTML = `<div class='container'>
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
  let parent = document.getElementById("mon")
  for(let i=0; i < mon().length; i++){
    let child  = document.createElement("button")
    child.innerHTML = mon()[i]
    parent.appendChild(child)
  }

  let parent2 = document.getElementById("tue")
  for(let i=0; i < tue().length; i++){
    let child  = document.createElement("button")
    child.innerHTML = tue()[i]
    parent2.appendChild(child)
  }

  let parent3 = document.getElementById("wed")
  for(let i=0; i < wed().length; i++){
    let child  = document.createElement("button")
    child.innerHTML = wed()[i]
    parent3.appendChild(child)
  }

  let parent4 = document.getElementById("thu")
  for(let i=0; i < thu().length; i++){
    let child  = document.createElement("button")
    child.innerHTML = thu()[i]
    parent4.appendChild(child)
  }

  let parent5 = document.getElementById("fri")
  for(let i=0; i < fri().length; i++){
    let child  = document.createElement("button")
    child.innerHTML = fri()[i]
    parent5.appendChild(child)
  }

  let parent6 = document.getElementById("sat")
  for(let i=0; i < sat().length; i++){
    let child  = document.createElement("button")
    child.innerHTML = sat()[i]
    parent6.appendChild(child)
  }

  let parent7 = document.getElementById("sun")
  for(let i=0; i < sun().length; i++){
    let child  = document.createElement("button")
    child.innerHTML = sun()[i]
    parent7.appendChild(child)
  }
}
render();
