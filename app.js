class Reactive {
    constructor (obj) {
        this.contents = obj;
        this.listeners = {};
        this.makeReactive(obj);
    }

    makeReactive(obj) {
        Object.keys(obj).forEach(prop => this.makePropReactive(obj, prop));
    }

    makePropReactive(obj, key) {
        let value = obj[key];

        // Gotta be careful with this here
        const that = this;

        Object.defineProperty(obj, key, {
            get () {
                    return value;
            },
            set (newValue) {
                value = newValue;
                that.notify(key)
            }
        });
    }

    listen(prop, handler) {
        if (!this.listeners[prop]) this.listeners[prop] = [];

        this.listeners[prop].push(handler);
    }

    notify(prop) {
        this.listeners[prop].forEach(listener => listener(this.contents[prop]));
    }
}

const data = new Reactive({
    month: "",
    year: "",
    dates: [],
    sun: [],
    mon: [],
    tue: [],
    wed: [],
    thu: [],
    fri: [],
    sat: [],
    dateValue: "",
    timeValue: "",
    timezone: "",
    name: "",
    email: ""
})

window.addEventListener('load', () => {
    var d = new Date()
    data.contents.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    data.contents.month = d.getMonth()
    data.contents.year = d.getFullYear()
    getDaysOfDates()
})

const nameHeading = document.getElementById("name-text")
nameHeading.innerText = data.contents.dates

data.listen('dates', (change) => {
    const nameHeading = document.getElementById("name-text")
    nameHeading.innerText = change
    console.log(data.contents.dates)
})

const getDates = () => {
    var date = new Date(this.year, this.month);
    data.contents.dates = []
    const dates = []
    while(date.getMonth() === this.month){
        dates.push(new Date(date));
        data.contents.dates.push(new Date(date))
        date.setDate(date.getDate() + 1);
    }
}

const getDaysOfDates = () => {
    data.contents.sun = []
    data.contents.mon = []
    data.contents.tue = []
    data.contents.wed = []
    data.contents.thu = []
    data.contents.fri = []
    data.contents.sat = []
    for (let i = 0; i < this.dates.length; i++) {
        var date = new Date(this.dates[i])
        var date_to_str = date.toString()
        var strings = []
        strings.push(date_to_str.trim().split(" "));
        for(let i = 0; i < strings.length; i++){
            if(strings[i][0] == 'Mon'){
             data.contents.mon.push(strings[i][2])
            }
            if(strings[i][0] == 'Tue'){
             data.contents.push(strings[i][2])
            }
            if(strings[i][0] == 'Wed'){
             data.contents.push(strings[i][2])
            }
            if(strings[i][0] == 'Thu'){
             data.contents.thu.push(strings[i][2])
            }
            if(strings[i][0] == 'Fri'){
             data.contents.fri.push(strings[i][2])
            }
            if(strings[i][0] == 'Sat'){
             data.contents.sat.push(strings[i][2])
            }
            if(strings[i][0] == 'Sun'){
             data.contents.push(strings[i][2])
            }
            else{
             console.log(false)
            }
        }
    } 
}
