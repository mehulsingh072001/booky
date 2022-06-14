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
const button = document.getElementById("button");

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
                        <div class="col-day">
                          <button class="btn"></button>
                        </div>
                      </div>
                    </div>
                  </div>`
}

render();
