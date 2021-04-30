function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class Alarm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        alarmList: [
        {
          title: "Wake Up",
          time: "08:00",
          days: "Sun, Mon, Tue, Wed, Thu" },  
        {
          title: "Lunch Time",
          time: "13:00",
          days: "Everyday" },
  
        {
          title: "Work",
          time: "16:30",
          days: "Fri, Sat" }] };  
    }
  
    render() {
      return(
        React.createElement("div", { className: "background" },
        React.createElement("div", { className: "app" },
        React.createElement("div", { className: "app_header" },
        React.createElement("div", { className: "bar" }),
        React.createElement("span", { className: "dot" })),
        React.createElement("div", { className: "alarms" },
        React.createElement("label", null, "Your Alarms"),
        React.createElement("ul", { className: "alarm_list" },
        this.state.alarmList.map((item, index) =>
        React.createElement(AlarmItem, {
          key: item.index,
          title: item.title,
          time: item.time,
          days: item.days })))),
    
        React.createElement("div", { className: "tabs_row" }, 
        React.createElement("li", { className: "tab active" }, 
        React.createElement("span", { className: "tab_name" }, "alarm")),
  
        React.createElement("li", { className: "tab" }, /*#__PURE__*/
        React.createElement("span", { className: "tab_name" }, "clock")), 
  
        React.createElement("li", { className: "tab" },
        React.createElement("span", { className: "tab_name" }, "timer"))))));  
    }}

class AlarmItem extends React.Component {
    constructor(props) {
      super(props);_defineProperty(this, "handeToggle",  
      () => {
        this.setState(prevState => ({
          status: !prevState.status }));
  
      });this.state = { status: false };}
  
    render() {
      return(
        React.createElement("li", { className: this.state.status ? "" : "off_style" }, 
        React.createElement("p", { className: "title" }, this.props.title),
        React.createElement("div", { className: "time_row" },
        React.createElement("span", { className: "time" }, this.props.time), 
        React.createElement("button", { className: "switch", onClick: () => this.handeToggle() },
        React.createElement("span", { className: "line" }, 
        React.createElement("span", { className: this.state.status ? "circle on" : "circle" })))),
        React.createElement("p", { className: "days" }, this.props.days)));  
    }}

ReactDOM.render(React.createElement(Alarm, null), document.getElementById("root"));